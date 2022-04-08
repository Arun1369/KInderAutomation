// <reference types="Cypress" />
import chaiColors from 'chai-colors'
chai.use(chaiColors)
require('cypress-xpath')

var busOperation = '.fa-bus'
var batchButton = '//button[contains(text(),"一括処理")]'

Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})

describe('Main Menu', () => {
    it('Verify Main Menu', () => {
        cy.balogin();
        cy.get('#dropdown-form__BV_toggle_').click();
        cy.wait(6000)
        cy.debug()
        cy.get(busOperation).click({ multiple: true });
    
      cy.get('.nav-link').eq(3).invoke('text').should('contain', 'バス運行管理')
      cy.get('.nav-link').eq(3).should('have.css', 'font-size').and('eq', '14px')  
      cy.get('.nav-link').eq(3).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
      cy.get('.nav-link').eq(3).should('have.css', 'color').and('eq','rgb(47, 53, 58)')

      cy.get('.date-picker-margine-blocker').should('be.visible')
       
      cy.get('[class="tab-pane active"]').within(()=>{
        //Verify All column Header font
        cy.columnHeader();
        //Verify Text 
        cy.get('[role="columnheader"]').eq(2).invoke('text').should('contain', 'バスルート')
        cy.get('[role="columnheader"]').eq(3).invoke('text').should('contain', '停車場所')
        cy.get('[role="columnheader"]').eq(4).invoke('text').should('contain', '乗車予定 ( 迎え )')
        cy.get('[role="columnheader"]').eq(5).invoke('text').should('contain', '乗車予定 ( 送り )')
        
        //Verify for search field
        cy.searchButton('検索')

        //Verify for drop-down field
        cy.get('.custom-select').invoke('text').should('contain', '全員')
        cy.get('.custom-select').should('have.css', 'font-size').and('eq', '14px')  
        cy.get('.custom-select').should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
        cy.get('.custom-select').should('have.css', 'color').and('eq','rgb(66, 66, 66)')

        //Verify for batch processing button
        cy.xpath(batchButton).invoke('text').should('contain', '一括処理')
        cy.xpath(batchButton).should('have.css', 'color').and('eq','rgb(255, 255, 255)')
        cy.xpath(batchButton).should('have.css', 'font-size').and('eq', '14px')
        cy.xpath(batchButton).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)

        //Verify for print and download
        cy.get('.fa-print').should('be.visible')
        cy.get('.fa-download').should('be.visible')
        


      })
        
    
        })
    })
        
