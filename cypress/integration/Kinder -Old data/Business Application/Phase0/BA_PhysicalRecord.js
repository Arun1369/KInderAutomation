import chaiColors from 'chai-colors'
chai.use(chaiColors)
require('cypress-xpath')
var labels = '.register-lables';
var clickmastersetting = ':nth-child(15) > .fa';
var hamburgerclick = '#dropdown-form__BV_toggle_ > img';
//var  clickrecordform = '//a[contains(text(),"記録帳票テンプレート")]';

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })
//have dont in 54 server using the direct URL..since it ws not ready on 119(Locators change)
describe('kinder basic info', () => {
    it('Verification of screen content', () => {
        cy.visit('http://54.238.110.14/staff/#/report/measure/20200828')
        cy.activeTabtitle('身体測定');
        cy.wait(2000)
        cy.get('.custom-select').each(($li, index, $lis) => {
            cy.get($li).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
            cy.get($li).should('have.css', 'color').and('eq','rgb(66, 66, 66)')
            cy.get($li).should('have.css', 'font-size').and('eq', '14px');
        cy.wait(2000)
        })
        //Verify for Search 
        cy.get('.form-control').first().should('have.attr', 'placeholder', '検索')
        cy.get('.form-control').should('have.css', 'color').and('eq','rgb(66, 66, 66)')
        cy.get('.form-control').should('have.css', 'font-size').and('eq', '14px')  
        cy.get('.form-control').should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
        cy.columnHeader();
        cy.wait(4000)
        cy.get('[role="columnheader"]').invoke('text').should('contain', '園児名')
        cy.get('[role="columnheader"]').invoke('text').should('contain', '身長')
        cy.get('[role="columnheader"]').invoke('text').should('contain', '体重')
        cy.get('[role="columnheader"]').invoke('text').should('contain', '胸囲')
        cy.get('[role="columnheader"]').invoke('text').should('contain', 'カウプ指数')
        cy.get('[role="columnheader"]').invoke('text').should('contain', '最終更新者')
        cy.get('[role="columnheader"]').invoke('text').should('contain', '登録日時')
        cy.wait(1000)
    })
})
