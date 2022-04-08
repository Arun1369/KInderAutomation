import chaiColors from 'chai-colors'
chai.use(chaiColors)
require('cypress-xpath')

var childernLedgerMenu = '.fa-book';
//var contractButton  = '.fa-angle-double-down';

describe('Children Ledger', () => {
    it('Verify children Ledger scrreen content', () => {
        cy.balogin();
        cy.get('#dropdown-form__BV_toggle_').click();
        cy.get(childernLedgerMenu).eq(0).click()
        cy.wait(4000)

        cy.activeTabtitle('園児台帳');
        //Verify batch proceccing button
        cy.get('.col-md-2.mb-2 > #dropdown-form > #dropdown-form__BV_toggle_').invoke('text').should('contain', '一括処理')
            cy.get('.col-md-2.mb-2 > #dropdown-form > #dropdown-form__BV_toggle_').should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
            cy.get('.col-md-2.mb-2 > #dropdown-form > #dropdown-form__BV_toggle_').should('have.css', 'color').and('eq','rgb(255, 255, 255)');
            cy.get('.col-md-2.mb-2 > #dropdown-form > #dropdown-form__BV_toggle_').should('have.css', 'font-size').and('eq', '14px');
        
        
        
        //Verify the titl
        cy.get('[class="tab-pane active"]').within(()=>{

            
        //Verify create button
        cy.createButton();
        cy.get('.px-4').invoke('text').should('contain', '園児を登録')

        //Verify print option
        cy.get('.fa-print').should('not.be.disabled')
        //Verify download button 
        cy.get('.btn-outline-primary').eq(0).should('not.be.disabled')
        //Verify search button
        cy.searchButton('検索');
        //Verify coloumn header
        cy.columnHeader();
        cy.get('th').invoke('text').should('contain', '園児氏名')
        cy.get('th').invoke('text').should('contain', 'クラス')
        cy.get('th').invoke('text').should('contain', '緊急連絡先')
        cy.get('th').invoke('text').should('contain', '住所')
        cy.get('th').invoke('text').should('contain', '備考')
        cy.get('th').invoke('text').should('contain', '登録日')
        //Verify checkbox
        cy.checkBoxLabel();
        //Verify side menu
        cy.get('.fa-ellipsis-v').eq(1).click();
        cy.get('.dropdown-item').each(($li, index, $lis) => {
           cy.get($li).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
           cy.get($li).should('have.css', 'color').and('eq','rgb(35, 40, 44)');
           cy.get($li).should('have.css', 'font-size').and('eq', '14px');
           })
       //Verify Text
         cy.get('.dropdown-item').invoke('text').should('contain', '削除')
       
           
      })
      //Verify the batch proccesing button
     
      cy.get('tr').eq(1).within(()=>{
      cy.get('.btn-outline-primary').invoke('text').should('contain', '基本情報')
      cy.get('.btn-outline-primary').invoke('text').should('contain', '出生時記録')
      cy.get('.btn-outline-primary').invoke('text').should('contain', '児童票')
      cy.get('.btn-outline-primary').invoke('text').should('contain', '保育要録')
      cy.get('.btn-outline-primary').invoke('text').should('contain', '身体測定')
      cy.get('.btn-outline-primary').invoke('text').should('contain', '発達記録')
      cy.get('.btn-outline-primary').invoke('text').should('contain', '保育料・登園時間')
      cy.get('.btn-outline-primary').each(($li, index, $lis) => {
         cy.get($li).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
         cy.get($li).should('have.css', 'color').and('eq','rgb(10, 201, 164)');
         cy.get($li).should('have.css', 'font-size').and('eq', '14px');
        })
         })
    })

    it('Verify batch processing screen content', () => {
        cy.xpath('//button[contains(text(),"一括処理")]').click()
        cy.get('.b-dropdown-form').within(()=>{
            //Verify labled
            cy.registerLabelChecks();
            //Verify Radion button
            cy.radionButtonLabel();
            //Verify checkbox
            cy.checkBoxLabel();
            //Verify text
            cy.get('.custom-control-label').invoke('text').should('contain', 'アクティブ')
            cy.get('.custom-control-label').invoke('text').should('contain', '退社')
            cy.get('.custom-control-label').invoke('text').should('contain', '園児を削除')

        })
        
    })
})
