// <reference types="Cypress" />
import chaiColors from 'chai-colors'
chai.use(chaiColors)
require('cypress-xpath')
var contactPark = '.fa-id-card-o';
var templateManagement = '//a[contains(text(),"テンプレート管理")]';
var addButton = '//button[contains(text(),"テンプレート作成")]';
Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })
//31
describe('Template Management> CreateandlistContact', () => {
    it('Verify Template Management> list screen content', () => {
        cy.balogin();
            cy.get('#dropdown-form__BV_toggle_ > img').click();
            cy.get(contactPark).eq(0).click()
            cy.wait(6000)
            //Verify for template management tab
        cy.xpath(templateManagement).invoke('text').should('contain', 'テンプレート管理')
        cy.xpath(templateManagement).should('have.css', 'background-color').and('eq','rgb(234, 234, 234)')
        cy.xpath(templateManagement).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
        cy.xpath(templateManagement).should('have.css', 'font-size').and('eq', '14px')
        cy.xpath(templateManagement).eq(0).click()
        cy.wait(6000)

    
        //verification of combo box
        cy.get('.custom-select').invoke('text').should('contain', '全てのコンテンツ')
        cy.get('.custom-select').should('have.css', 'color').and('eq','rgb(66, 66, 66)')
        cy.get('.custom-select').should('have.css', 'font-size').and('eq', '14px')
        cy.get('.custom-select').should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
        //verification of combo box 1
        cy.get('.custom-select').invoke('text').should('contain', '全てのカテゴリー')
        cy.get('.custom-select').should('have.css', 'color').and('eq','rgb(66, 66, 66)')
        cy.get('.custom-select').should('have.css', 'font-size').and('eq', '14px')
        cy.get('.custom-select').should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
        //verification of search filed existense and its placeholder UI
        var title = '検索';
        cy.searchButton(title)
       
        //Delete button existence
        cy.get('.cursor > .fa').should('be.visible')
        //Verification for Check box existence
        cy.get(':nth-child(1) > .text-center > #ctable > thead > tr > [aria-colindex="1"] > .custom-control').should('be.visible')
        //verify column header
        cy.columnHeader();

    })

it('Verify Template Management> Create screen content', () => {
            
        cy.get('[class="tab-pane position-relative active"]').within(()=>{
            cy.xpath(addButton).eq(0).click()

        })
     //Verify for Add button

        cy.get('.modal-content').within(()=>{
         //Verify header
        cy.get('h5').invoke('text').should('contain', 'テンプレート作成')
        cy.get('h5').should('have.css', 'font-size').and('eq', '17.5px')  
        cy.get('h5').should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
        cy.get('h5').should('have.css', 'color').and('eq','rgb(66, 66, 66)')
        //Verify for Registered person label
        cy.get('.register-lables').invoke('text').should('contain', '登録者：')
        cy.get('.register-lables').should('have.css', 'color').and('eq','rgb(92, 104, 115)')
        cy.get('.register-lables').should('have.css', 'font-size').and('eq', '12px')
        cy.get('.register-lables').should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
        //Verify for Name 
        cy.get('.label-color').invoke('text').should('contain', '長谷川美由紀')
        cy.get('.label-color').should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
        cy.get('.label-color').should('have.css', 'color').and('eq','rgb(92, 104, 115)')
        cy.get('.label-color').should('have.css', 'font-size').and('eq', '12px');
           
        //Verify for Template name
        cy.get('.register-lables').eq(1).invoke('text').should('contain', 'テンプレート名')
        cy.get('.register-lables').eq(1).should('have.css', 'color').and('eq','rgb(92, 104, 115)')
        cy.get('.register-lables').eq(1).should('have.css', 'font-size').and('eq', '12px')
        cy.get('.register-lables').eq(1).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
        
        //Verify for template Name input field
        cy.get('.form-control').first().should('have.attr', 'placeholder', 'テンプレート名を入力')
        cy.get('.form-control').should('have.css', 'color').and('eq','rgb(66, 66, 66)')
        cy.get('.form-control').should('have.css', 'font-size').and('eq', '14px')
        cy.get('.form-control').should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)

        //Verify for drop-down fields(Contact in the part and category)
        cy.get('.custom-select').each(($li, index, $lis) => {
        cy.get($li).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
        cy.get($li).should('have.css', 'color').and('eq','rgb(66, 66, 66)')
        cy.get($li).should('have.css', 'font-size').and('eq', '14px');
        });
        cy.get('.custom-select').eq(0).invoke('text').should('contain', '園内連絡')
        cy.get('.custom-select').eq(1).invoke('text').should('contain', 'カテゴリー')

        //Verify for tool bar
        cy.get('.ql-toolbar').should('be.visible')

        //verify Save and cancel button 
        cy.saveandCancel();

        //Verify Close button
        cy.get('.close').should('be.visible')
        cy.wait(2000)
        cy.get('.close').click()
        

    })

})
   
})

