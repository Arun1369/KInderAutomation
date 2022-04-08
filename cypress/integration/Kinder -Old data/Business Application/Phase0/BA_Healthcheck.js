import chaiColors from 'chai-colors'
chai.use(chaiColors)
require('cypress-xpath')

var  clickhealthchecktab = '//a[contains(text(),"健康チェック")]';

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })
describe('Record form screen content check', () => {
    it('Verification of screen content', () => {
        cy.balogin();
        cy.wait(2000)
        cy.get('[role="tab"]').invoke('text').should('contain', '健康チェック')
        cy.wait(2000)
        cy.xpath(clickhealthchecktab).click();
        cy.wait(2000)
        cy.get('.nav-item').invoke('text').should('contain', '健康チェック')
        cy.get('.nav-item').should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
        cy.get('.nav-item').should('have.css', 'color').and('eq','rgb(66, 66, 66)')
        cy.get('.nav-item').should('have.css', 'font-size').and('eq', '14px');
        cy.get('.nav-item').invoke('text').should('contain', '健康チェック');
        cy.wait(2000)
        cy.get('.black-card > .text-center').invoke('text').should('contain', 'アラート');
        cy.get('.black-card > .text-center').should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
        cy.get('.black-card > .text-center').should('have.css', 'color').and('eq','rgb(66, 66, 66)')
        cy.get('.black-card > .text-center').should('have.css', 'font-size').and('eq', '14px');
        cy.wait(2000)
        cy.get('[role="group"]').invoke('text').should('contain', '全員')
        cy.get('[role="group"]').should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
        cy.get('[role="group"]').should('have.css', 'color').and('eq','rgb(66, 66, 66)')
        cy.get('[role="group"]').should('have.css', 'font-size').and('eq', '14px');
        cy.wait(2000)
        cy.get('[type="button"]').invoke('text').should('contain', '検温');
        cy.get('[type="button"]').should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
        cy.get('[type="button"]').should('have.css', 'color').and('eq','rgb(10, 201, 164)')
        cy.get('[type="button"]').should('have.css', 'font-size').and('eq', '14px');
        cy.wait(2000)
        cy.get('.calendar-time-block').invoke('text').should('contain', '5:00');
        cy.get('.calendar-time-block').should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
        cy.get('.calendar-time-block').should('have.css', 'color').and('eq','rgb(66, 66, 66)')
        cy.get('.calendar-time-block').should('have.css', 'font-size').and('eq', '12px');
        cy.wait(2000)
        cy.get('.label-color').invoke('text').should('contain', '( クラス )');
        cy.get('.label-color').should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
        cy.get('.label-color').should('have.css', 'color').and('eq','rgb(92, 104, 115)')
        cy.get('.label-color').should('have.css', 'font-size').and('eq', '12px');
        cy.wait(2000)
        ////parent name label and UI check
        cy.get('[role="tab"]').invoke('text').should('contain', '保護者から連絡')
        cy.get('[role="tab"]').invoke('text').should('contain', '園内連絡 ')
        cy.get('[role="tab"]').each(($li, index, $lis) => {
            cy.get($li).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
           // cy.get($li).should('have.css', 'color').and('eq','rgb(115, 129, 143)')
            cy.get($li).should('have.css', 'font-size').and('eq', '14px');
        
        // 
        

    })
})
})
