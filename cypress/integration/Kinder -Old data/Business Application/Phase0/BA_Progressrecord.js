/// <reference types="Cypress" />
import chaiColors from 'chai-colors'
chai.use(chaiColors)
require('cypress-xpath')

var childernLedgerMenu = '.fa-book';
var progreeRecords = '//button[contains(text(),"発達記録")]';


describe('Progress records', () => {
    it('Verify progress record screen content', () => {
        cy.balogin();
        cy.get('#dropdown-form__BV_toggle_').click();
        cy.get(childernLedgerMenu).eq(0).click()
        cy.wait(4000);
        cy.xpath(progreeRecords).eq(0).click();
        cy.wait(2000)
        cy.get('.modal-content').within(()=>{
            //verify Title
            cy.get('.modal-title').invoke('text').should('contain', '東海林ひとみ│発達記録')
            cy.get('.modal-title').should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
            cy.get('.modal-title').should('have.css', 'color').and('eq','rgb(66, 66, 66)');
            cy.get('.modal-title').should('have.css', 'font-size').and('eq', '17.5px'); cy.get('.modal-title')
            //Verify down 
            cy.get('.custom-select').eq(0).should("be.enabled")
            cy.get('.custom-select').eq(0).should("be.enabled")
            //Verify date picker 
            cy.get('.date-picker-font-custom').should("be.visible")
            //Verify Months
            cy.get('th').invoke('text').should('contain', '4 月');
            cy.get('th').invoke('text').should('contain', '5 月');
            cy.get('th').invoke('text').should('contain', '6 月');
            cy.get('th').invoke('text').should('contain', '7 月');
            cy.get('th').invoke('text').should('contain', '8 月');
            cy.get('th').invoke('text').should('contain', '9 月');
            cy.get('th').invoke('text').should('contain', '10 月');
            cy.get('th').invoke('text').should('contain', '11 月');
            cy.get('th').invoke('text').should('contain', '12 月');
            cy.get('th').invoke('text').should('contain', '1 月');
            cy.get('th').invoke('text').should('contain', '2 月');
            cy.get('th').invoke('text').should('contain', '3 月');

            cy.get('th').eq(0).invoke('text').should('contain', '領域');
            cy.get('th').eq(1).invoke('text').should('contain', '項目名');

            //Verify column header font

            cy.get('th').each(($li, index, $lis) => {
                cy.get($li).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
                cy.get($li).should('have.css', 'color').and('eq','rgb(66, 66, 66)')
                cy.get($li).should('have.css', 'font-size').and('eq', '12px');
            })
           
            cy.get('.fa-print').should('not.be.disabled')
            //Verify download button 
            cy.get('.btn-out9line-primary').eq(0).should('not.be.disabled')

            cy.saveandCancel();


        })
    })
})
