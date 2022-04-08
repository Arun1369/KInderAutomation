import chaiColors from 'chai-colors'
chai.use(chaiColors)

var menu = "//div[text()=' 登録園・企業']";
var subMenu="/html/body/div/div/div/nav/section/ul/li[2]/ul/li[3]/a";
var lebel = ".col-md-2.register-lables"
var lebel2 = '[class="flex-container"] > div'
var rowlebel = '[role="row"] > th';
var button = '//button[contains(text(),"所属園 新規追加")]';
var buttonEdit = '//a[contains(text(),"編集")]';

describe('Admin Company Detail', () => {
    it('Verification of Screen Content', () => {
        //to login the application
        cy.login();

        //Click on Menu -- Register Kinder/Company
        cy.xpath(menu).click({ force: true });
        cy.xpath(menu).invoke('text').should('contain', ' 登録園・企業')
        cy.wait(500)
        //Click "Company list" submenu and assert the color,lebel,font of submenu
        cy.xpath(subMenu).click();
        cy.xpath(subMenu).should('have.css', 'background-color').and('eq','rgb(56, 149, 211)')
        cy.xpath(subMenu).invoke('text').should('contain', '企業一覧')
        cy.xpath(subMenu).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
        cy.xpath(subMenu).should('have.css', 'font-size').and('eq', '14px')
        cy.wait(500)
        //Click on the First row of the list
        cy.get('tr[aria-rowindex="1"]').click({ force: true })
        cy.wait(1000)

        //Verify the Add kinder button lebel, font, color
        cy.xpath(button).should("be.visible")
        cy.xpath(button).invoke('text').should('contain', '所属園 新規追加')
        cy.xpath(button).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/) 
        cy.xpath(button).should('have.css', 'font-size').and('eq', '14px')

        //Verify the Edit button lebel,font,color
        cy.xpath(buttonEdit).should("be.visible")
        cy.xpath(buttonEdit).invoke('text').should('contain', '編集')
        cy.xpath(buttonEdit).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/) 
        cy.xpath(buttonEdit).should('have.css', 'font-size').and('eq', '14px')   

        //Verify the lebels of all fields and input field should be visible
        cy.get(lebel).eq(0).invoke('text').should('contain', '企業名')            
        cy.get(lebel).eq(1).invoke('text').should('contain', '住所')
        cy.get(lebel).eq(2).invoke('text').should('contain', '電話番号')
        cy.get(lebel).eq(3).invoke('text').should('contain', 'メールアドレス')
        cy.get(lebel).eq(4).invoke('text').should('contain', '所属園')
        cy.get(lebel).eq(5).invoke('text').should('contain', '契約者名')
        cy.get(lebel).eq(6).invoke('text').should('contain', '担当者名')
        cy.get(lebel).eq(7).invoke('text').should('contain', '所属園アカウント')
        cy.get(lebel).eq(8).invoke('text').should('contain', '利用ステータス')      
        cy.get(lebel).each(($li, index, $lis) => {
            cy.get($li).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)           
            cy.get($li).should('have.css', 'font-size').and('eq', '12px')
          });
        cy.get(lebel2).eq(1).invoke('text').should('contain', '契約者名連絡先')
        cy.get(lebel2).eq(1).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
        cy.get(lebel2).eq(1).should('have.css', 'font-size').and('eq', '12px')
        cy.get(lebel2).eq(4).invoke('text').should('contain', '担当者名連絡先')
        cy.get(lebel2).eq(4).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
        cy.get(lebel2).eq(4).should('have.css', 'font-size').and('eq', '12px')

        //Verify the 1st table row headers
        cy.get(rowlebel).eq(0).invoke('text').should('contain','園名');
        cy.get(rowlebel).eq(1).invoke('text').should('contain','業態');
        cy.get(rowlebel).eq(2).invoke('text').should('contain','電話番号');
        cy.get(rowlebel).eq(3).invoke('text').should('contain','住所');
               
        //verify the 2nd table row headers
        cy.get(rowlebel).eq(4).invoke('text').should('contain','名前');
        cy.get(rowlebel).eq(5).invoke('text').should('contain','ログインID（メールアドレス');
        cy.get(rowlebel).eq(6).invoke('text').should('contain','パスワード');
        cy.get(rowlebel).each(($li, index, $lis) => {
            cy.get($li).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)           
            cy.get($li).should('have.css', 'font-size').and('eq', '12px')
          });   
        
        
    })
})