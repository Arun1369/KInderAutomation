// <reference types="Cypress" />
import chaiColors from 'chai-colors'
chai.use(chaiColors)
require('cypress-xpath')
var labels = '.register-lables';
//var clickmastersetting = ':nth-child(15) > .fa';
//var hamburgerclick = '#dropdown-form__BV_toggle_ > img';
var  clickretireealert = '//a[contains(text(),"離職アラート")]';


Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })

describe('Main Menu', () => {
    it('Verify Main Menu', () => {
        cy.balogin();
        cy.get('#dropdown-form__BV_toggle_ > img').click();
        cy.wait(2000)
        cy.get(':nth-child(15) > .fa').click();
        cy.wait(4000)
        
        cy.xpath(clickretireealert).click({multiple:true})
        //Verify All column Header font
        cy.xpath(clickretireealert).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
        cy.xpath(clickretireealert).should('have.css', 'color').and('eq','rgb(255, 255, 255)')
        cy.xpath(clickretireealert).should('have.css', 'font-size').and('eq', '14px');
        //verify the main header of the screen
        cy.get('h5').invoke('text').should('contain', '離職アラート')
        cy.get('h5').should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
        cy.get('h5').should('have.css', 'color').and('eq','rgb(66, 66, 66)')
        cy.get('h5').should('have.css', 'font-size').and('eq', '17.5px');
        //
        cy.get('.white-background > .pull-left').invoke('text').should('contain', 'キンダーズ保育園')
        cy.get('.white-background > .pull-left').should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
        cy.get('.white-background > .pull-left').should('have.css', 'color').and('eq','rgb(66, 66, 66)')
        cy.get('.white-background > .pull-left').should('have.css', 'font-size').and('eq', '14px');
        //
        cy.registerLabelChecks()
        cy.get(labels).invoke('text').should('contain', '離職アラート機能')
        cy.get(labels).invoke('text').should('contain', 'アラート通知先メールアドレス')
        //radio buttons
        cy.get('.custom-radio>label').invoke('text').should('contain', '利用しない')
        cy.get(labels).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
        cy.get(labels).should('have.css', 'color').and('eq','rgb(92, 104, 115)')
        cy.get(labels).should('have.css', 'font-size').and('eq', '12px');
        cy.saveandCancel()
        //drop down
        cy.get('.custom-select').invoke('text').should('contain', '全ての園')
        cy.get('.custom-select').should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
        cy.get('.custom-select').should('have.css', 'color').and('eq','rgb(66, 66, 66)')
        cy.get('.custom-select').should('have.css', 'font-size').and('eq', '14px');
        //check box
        cy.get('.custom-control-label').should('be.visible')
        //column header
        cy.columnHeader()
        cy.get('[role="columnheader"]').invoke('text').should('contain', '氏名')
        cy.get('[role="columnheader"]').invoke('text').should('contain', '入社日')
        cy.get('[role="columnheader"]').invoke('text').should('contain', '在籍期間')
        cy.get('[role="columnheader"]').invoke('text').should('contain', '遅刻')
        cy.get('[role="columnheader"]').invoke('text').should('contain', '早退')
        cy.get('[role="columnheader"]').invoke('text').should('contain', '有給取得')
        cy.get('[role="columnheader"]').invoke('text').should('contain', '気分')
        cy.get('[role="columnheader"]').invoke('text').should('contain', '閾値')


    })
})