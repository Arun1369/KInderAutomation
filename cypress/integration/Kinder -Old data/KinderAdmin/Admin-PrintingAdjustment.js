import chaiColors from 'chai-colors'
chai.use(chaiColors)

var subMenu = 'a[href="#/content/print"]';
var title ="h5";
var header='[class="card-lables"]';
var rowInput = '[class="d-flex"]>input';
var rowInputParam = '[class="d-flex"] >span';
var dropDown = '.custom-select';


describe('Admin Agent List', () => {
    it('Verification of Screen Content', () => {
        //to login the application
        cy.login();
        //Click on agent menu
        cy.xpath('//div[contains(text(),"コンテンツ管理")]').click({ force: true });

        //Click agent list submenu and assert the color,lebel,font of submenu  
        cy.get(subMenu).click({ force: true }); 
        cy.get(subMenu).invoke('text').should('contain','印字調整')     
        cy.get(subMenu).should('have.css', 'background-color').and('eq','rgb(56, 149, 211)')
        cy.get(subMenu).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
        cy.get(subMenu).should('have.css', 'font-size').and('eq', '14px')

        //Verify the Title of page
        cy.get(title).invoke('text').should('contain', '帳票印字調整')
        cy.get(title).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
        cy.get(title).should('have.css', 'font-size').and('eq', '17.5px')

        //Verify the dropdown for Prefecture
        cy.get(dropDown).eq(0).select('市町村').should("be.visible")

        //Verify the Search field
        cy.get('div[class="input-group-text"]').eq(1).should("be.visible")
        cy.get('.input-group').eq(1).should("be.visible")
        cy.get('input[class="form-control"]').eq(1).should('have.attr', 'placeholder', '検索')
        
        //Verify the +Add button lebel,font format,size,color      
        cy.get('.btn-primary').eq(0).should("be.visible")
        cy.get('.btn-primary').eq(0).invoke('text').should('contain','追加')
        cy.get('.btn-primary').eq(0).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
        cy.get('.btn-primary').eq(0).should('have.css', 'color').and('eq','rgb(255, 255, 255)')
        cy.get('.btn-primary').eq(1).should('have.css', 'font-size').and('eq', '14px')

        //Verify the Save button lebel,font format,size,color      
        cy.get('.btn-primary').eq(1).should("be.visible")
        cy.get('.btn-primary').eq(1).invoke('text').should('contain','保存')
        cy.get('.btn-primary').eq(1).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
        cy.get('.btn-primary').eq(1).should('have.css', 'color').and('eq','rgb(255, 255, 255)')
        cy.get('.btn-primary').eq(1).should('have.css', 'font-size').and('eq', '14px')

        //Verify the headers of the table
        cy.get(header).eq(0).invoke('text').should('contain', '書類名')
        cy.get(header).eq(1).invoke('text').should('contain', '文字サイズ')
        cy.get(header).eq(2).invoke('text').should('contain', '余白 ( 上 )')
        cy.get(header).eq(3).invoke('text').should('contain', '余白 ( 左 )')
        cy.get(header).eq(4).invoke('text').should('contain', '入寮枠移動')
        cy.get(header).each(($li, index, $lis) => {
            cy.get($li).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)           
            cy.get($li).should('have.css', 'font-size').and('eq', '12px')
          }); 

        //Verify the Row with input box, with parameters
        // cy.get(rowInput).each(($li, index, $lis) => {
        //     cy.get($li).should("be.visible")           
        //   }); 
        cy.get(rowInput).eq(0).should('have.attr', 'placeholder', '書類名')
        cy.get(rowInput).eq(1).should('have.attr', 'placeholder', '0')
        cy.get(rowInput).eq(2).should('have.attr', 'placeholder', '0')
        cy.get(rowInput).eq(3).should('have.attr', 'placeholder', '0')
        cy.get(rowInput).eq(4).should('have.attr', 'placeholder', '0')
        cy.get(rowInput).eq(5).should('have.attr', 'placeholder', '0')
        cy.get(rowInputParam).eq(0).invoke('text').should('contain', 'px')
        cy.get(rowInputParam).eq(1).invoke('text').should('contain', 'mm')
        cy.get(rowInputParam).eq(2).invoke('text').should('contain', 'mm')
        cy.get(rowInputParam).eq(3).invoke('text').should('contain', 'mm')
        cy.get(rowInputParam).eq(4).invoke('text').should('contain', 'mm')
        cy.get(dropDown).eq(1).select('右に').should("be.visible")
        cy.get(dropDown).eq(1).select('上に').should("be.visible")
        cy.get(dropDown).eq(1).select('左に').should("be.visible")
        cy.get(dropDown).eq(1).select('下に').should("be.visible")
        cy.get(dropDown).eq(2).select('右に').should("be.visible")
        cy.get(dropDown).eq(2).select('上に').should("be.visible")
        cy.get(dropDown).eq(2).select('左に').should("be.visible")
        cy.get(dropDown).eq(2).select('下に').should("be.visible")

        //Verify the status and cross mark for the row should be visible
        //cy.get('.custom-switch').should("be.visible")

    })
})