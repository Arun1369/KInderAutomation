
///<reference types="Cypress" />
import chaiColors from 'chai-colors'
chai.use(chaiColors)
require('cypress-xpath')

var approvalManagement = '.fa-tasks';

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })
describe('Approval Managment', () => {
    it('Verify approval management screen content', () => {
        cy.balogin();
        cy.get('#dropdown-form__BV_toggle_').click();
        cy.get(approvalManagement).eq(0).click()
        cy.wait(6000)
        //Verify the title of page
        cy.activeTabtitle('承認トレイ')

        //Verify all the dropdown is enabled 
        cy.get('[name="date"]').should('not.be.disabled')

        //Loop all dropdown
        cy.get('.custom-select').each(($li, index, $lis)=>{
            cy.get($li).should('not.be.disabled')

            })
           
            //Verify search button 
        cy.searchButton('検索')
        //Verify checkbox
        cy.get('[type="checkbox"]').should("be.checked")
        cy.checkBoxLabel();
        cy.get('.custom-control-label>span').invoke('text').should('contain', '処理済みも表示')
        //VerifyColunmn Header
        cy.columnHeader();
        cy.get('th').invoke('text').should('contain', '件名')
        cy.get('th').invoke('text').should('contain', 'クラス')
        cy.get('th').invoke('text').should('contain', '申請者')
        cy.get('th').invoke('text').should('contain', '申請日時')
        cy.get('th').invoke('text').should('contain', '承認期限')
        cy.get('th').invoke('text').should('contain', '承認状態 / 承認者')
        //Verify 3 ecplise dropdown item 
        cy.get('.fa-ellipsis-v').eq(1).click();
        cy.get('.dropdown-item').each(($li, index, $lis) => {
           cy.get($li).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
           cy.get($li).should('have.css', 'color').and('eq','rgb(35, 40, 44)');
           cy.get($li).should('have.css', 'font-size').and('eq', '14px');
           })
      
       //Verify Text

       cy.get('.dropdown-item').invoke('text').should('contain', '編集')
       cy.get('.dropdown-item').invoke('text').should('contain', '削除')

        //Verify print option
        cy.get('.fa-print').should('not.be.disabled')
        //Verify download button 
        cy.get('.btn-outline-primary').eq(0).should('not.be.disabled')





    })
})