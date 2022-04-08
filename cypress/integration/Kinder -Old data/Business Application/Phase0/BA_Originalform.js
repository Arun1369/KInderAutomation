import chaiColors from 'chai-colors'
chai.use(chaiColors)
require('cypress-xpath')


Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })
  describe('Accident Report', () => {
    it('Verify accident report Screen', () => {
        cy.visit('http://54.238.110.14/staff/#/auth/signin')
    cy.wait(2000)
    cy.get('.px-4').click() 
    cy.wait(2000);
    cy.get('#dropdown-form__BV_toggle_ ').click({ multiple: true });
    cy.wait(2000)
    cy.get(':nth-child(11) > .fa').click({ multiple: true });
    cy.wait(2000)
    cy.xpath('//a[contains(text(),"オリジナル帳票")]').click({ multiple: true });
    cy.activeTabtitle('オリジナル帳票');
    cy.wait(2000)
    //add button
    cy.get('[type="button"]').invoke('text').should('contain', 'オリジナル帳票作成')
        cy.get('[type="button"]').should('have.css', 'color', 'rgb(10, 201, 164)')
        cy.get('[type="button"]').should('have.css', 'font-size').and('eq', '14px');
        cy.get('[type="button"]').should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/);
    //
    cy.get(':nth-child(1) > .card-body > .card-text > .label-font > :nth-child(1)').invoke('text').should('contain', '最終更新日')
        cy.get(':nth-child(1) > .card-body > .card-text > .label-font > :nth-child(1)').should('have.css', 'color', 'rgb(92, 104, 115)')
        cy.get(':nth-child(1) > .card-body > .card-text > .label-font > :nth-child(1)').should('have.css', 'font-size').and('eq', '12px');
        cy.get(':nth-child(1) > .card-body > .card-text > .label-font > :nth-child(1)').should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/);
        //
        cy.get(':nth-child(1) > h6').invoke('text').should('contain', '運動能力測定')
        cy.get(':nth-child(1) > h6').should('have.css', 'color', 'rgb(66, 66, 66)')
        cy.get(':nth-child(1) > h6').should('have.css', 'font-size').and('eq', '14px');
        cy.get(':nth-child(1) > h6').should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/);
        //
        cy.get(':nth-child(2) > .card-body > h6').invoke('text').should('contain', 'オリジナル帳票 B')
        cy.get(':nth-child(2) > .card-body > h6').should('have.css', 'color', 'rgb(66, 66, 66)')
        cy.get(':nth-child(2) > .card-body > h6').should('have.css', 'font-size').and('eq', '14px');
        cy.get(':nth-child(2) > .card-body > h6').should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/);
    })
})