import chaiColors from 'chai-colors'
chai.use(chaiColors)
require('cypress-xpath')


Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })
  describe('57', () => {
    it('Verify screen content', () => {
        cy.visit('http://54.238.110.14/staff/#/auth/signin')
    cy.wait(2000)
    cy.get('.px-4').click() 
    cy.wait(2000);
    cy.get('#dropdown-form__BV_toggle_ ').click({ multiple: true });
    cy.wait(2000)
    cy.get(':nth-child(11) > .fa').click({ multiple: true });
    cy.wait(2000)
    cy.xpath('//a[contains(text(),"オリジナル帳票")]').click({ multiple: true });
    cy.activeTabtitle('オリジナル帳票')
    cy.wait(2000)
    cy.get(':nth-child(1) > .card-body > :nth-child(1) > .fa').click({ multiple: true });
    cy.wait(2000)
    cy.get('.custom-select').each(($li, index, $lis) => {
        cy.get($li).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
        //cy.get($li).should('have.css', 'color').and('eq','rgb(26, 26, 26)')
        cy.get($li).should('have.css', 'font-size').and('eq', '14px');
        cy.get('.custom-select').invoke('text').should('contain', '責任者')
    cy.wait(2000)
    })
    //Verify for Search 
    cy.get('.form-control').first().should('have.attr', 'placeholder', '検索')
    cy.get('.form-control').should('have.css', 'color').and('eq','rgb(26, 26, 26)')
    cy.get('.form-control').should('have.css', 'font-size').and('eq', '14px')  
    cy.get('.form-control').should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
    cy.columnHeader();
    cy.wait(4000)
    cy.get('[role="columnheader"]').invoke('text').should('contain', '題名')
    cy.get('[role="columnheader"]').invoke('text').should('contain', 'クラス')
    cy.get('[role="columnheader"]').invoke('text').should('contain', '園児名')
    cy.get('[role="columnheader"]').invoke('text').should('contain', 'ステータス')
    cy.get('[role="columnheader"]').invoke('text').should('contain', '登録日時')
    cy.get('[role="columnheader"]').invoke('text').should('contain', '最終更新者')
    cy.get('[role="columnheader"]').invoke('text').should('contain', '最終更新日時')
    cy.wait(1000)
    
    //Verify for print and download
    cy.get('.fa-print').should('be.visible')
    cy.get('.fa-download').should('be.visible')
    //
    cy.get('[type="button"]').should("be.visible");
    cy.get('[type="button"]').should('have.css', 'color', 'rgb(10, 201, 164)');
    cy.get('[type="button"]').invoke('text').should('contain', '作成');
    cy.get('[type="button"]').should('have.css', 'font-size').and('eq', '14px');
    cy.get('[type="button"]').should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/);
    })
    it('Batch process check', () => {
        cy.get('[type="button"]').invoke('text').should('contain', '一括処理')
        cy.get('[type="button"]').should('have.css', 'color', 'rgb(10, 201, 164)')
        cy.get('[type="button"]').should('have.css', 'font-size').and('eq', '14px');
        cy.get('[type="button"]').should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/);
        cy.get('#__BVID__818 > .animated > .ml-0.mb-2 > :nth-child(1) > .col-md-12 > #dropdown-form > #dropdown-form__BV_toggle_').click();
        cy.wait(2000)
        cy.checkBoxLabel();
        cy.wait(2000)
        cy.get('.custom-control-label').invoke('text').should('contain', 'チェックした記事を削除')
        cy.get('[type="button"]').invoke('text').should('contain', '適用')
        cy.get('[type="button"]').should('have.css', 'color', 'rgb(10, 201, 164)')
        cy.get('[type="button"]').should('have.css', 'font-size').and('eq', '14px');
        cy.get('[type="button"]').should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/);
})
  })