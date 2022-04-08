import chaiColors from 'chai-colors'
chai.use(chaiColors)

var menu ='//div[contains(text(),"代理店")]';
var subMenu='a[href="#/agent"]';
var title =".kinder-label";
var add='//a[contains(text(),"新規追加")]';
var detailLebel1=".register-lables";
describe('Admin Agent List', () => {
    it('Verification of Screen Content', () => {
        //to login the application
        cy.login();
        //Click on agent menu
        cy.xpath(menu).click({ force: true });
        cy.xpath(menu).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
        cy.xpath(menu).should('have.css', 'font-size').and('eq', '14px')

        //Click agent list submenu and assert the color,lebel,font of submenu
        cy.get(subMenu).click();
        cy.get(subMenu).should('have.css', 'background-color').and('eq','rgb(56, 149, 211)')
        cy.get(subMenu).invoke('text').should('contain', '代理店一覧')
        cy.get(subMenu).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
        cy.get(subMenu).should('have.css', 'font-size').and('eq', '14px')

        //assert the header of the Page
        cy.wait(1000)
        cy.get(title).invoke('text').should('contain', '代理店一覧')
        cy.get(title).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
        cy.get(title).should('have.css', 'font-size').and('eq', '17.5px')

        //Verify the Add button lebel,color,font
        cy.xpath(add).invoke('text').should('contain', '新規追加')
        cy.xpath(add).should('have.css', 'background-color').and('eq','rgb(56, 149, 211)')
        cy.xpath(add).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
        cy.xpath(add).should('have.css', 'font-size').and('eq', '14px')

        //Verify the agent listing tab lebel,font
        cy.xpath('/html/body/div/div/main/div/div/div[2]/div[1]/ul/li[1]/a').
        invoke('text').should('contain', '代理店一覧')
        cy.xpath('/html/body/div/div/main/div/div/div[2]/div[1]/ul/li[1]/a').
        should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
        cy.xpath('/html/body/div/div/main/div/div/div[2]/div[1]/ul/li[1]/a').
        should('have.css', 'font-size').and('eq', '14px')

        //Verify the table headers lebels,fonts
        cy.get('[aria-colindex="1"] > div').invoke('text').should('contain', '社名')
        cy.get('[aria-colindex="2"] > div').invoke('text').should('contain', '電話番号')
        cy.get('[aria-colindex="3"] > div').invoke('text').should('contain', '住所')
        cy.get('[aria-colindex="4"] > div').invoke('text').should('contain', '獲得件数')
        cy.get('[aria-colindex="5"] > div').invoke('text').should('contain', '登録ユーザー')
        cy.get('[aria-colindex="6"] > div').invoke('text').should('contain', '登録年月日')
        cy.get('th[role="columnheader"]').nextUntil('[class="th-width-dots"]').each(($li, index, $lis) => {
            cy.get($li).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
            cy.get($li).should('have.css', 'color').and('eq','rgb(92, 104, 115)')
            cy.get($li).should('have.css', 'font-size').and('eq', '12px')
          });

        //Verify the 3 dots click options font format and size,lebel,
       
        //Verify the search field
        cy.get('.form-control').eq(1).should("be.visible") 
        cy.get('.input-group-text').eq(1).should("be.visible") 
        //Verify the Detail search field link
        cy.xpath('//*[@id="dropdown-form__BV_toggle_"]').should("be.visible")
        cy.xpath('//*[@id="dropdown-form__BV_toggle_"]').invoke('text').should('contain','詳細検索')
        cy.xpath('//*[@id="dropdown-form__BV_toggle_"]').should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
        cy.xpath('//*[@id="dropdown-form__BV_toggle_"]').should('have.css', 'font-size').and('eq', '14px')
        cy.xpath('//*[@id="dropdown-form__BV_toggle_"]').should('have.css', 'color').and('eq','rgb(56, 149, 211)')
    })

    it('Verification for Detail Search Screen Content', () => {

        cy.xpath('//*[@id="dropdown-form__BV_toggle_"]').click({ multiple: true })
        //Verify the input field lebel,font format and size
        cy.get(detailLebel1).eq(0).invoke('text').should('contain','社名')
        cy.get(detailLebel1).eq(1).invoke('text').should('contain','メールアドレス')
        cy.get(detailLebel1).eq(2).invoke('text').should('contain','住所')
        cy.get(detailLebel1).each(($li, index, $lis) => {
            cy.get($li).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
            cy.get($li).should('have.css', 'color').and('eq','rgb(92, 104, 115)')
            cy.get($li).should('have.css', 'font-size').and('eq', '12px')
          });
        
        //Verify the dropdown options
        cy.get('.custom-select').eq(0).select('都道府件').should("be.visible")

        //Verify the Search button lebel,font format,size,color      
        cy.get('.btn-primary').eq(1).should("be.visible")
        cy.get('.btn-primary').eq(1).invoke('text').should('contain','検索')
        cy.get('.btn-primary').eq(1).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
        cy.get('.btn-primary').eq(1).should('have.css', 'color').and('eq','rgb(255, 255, 255)')
        cy.get('.btn-primary').eq(1).should('have.css', 'font-size').and('eq', '14px')

        
    })
})