// <reference types="Cypress" />
import chaiColors from 'chai-colors'
chai.use(chaiColors)
require('cypress-xpath')

var  healthCheck = '//a[contains(text(),"健康チェック")]';
var saveButton = '//button[contains(text(),"キャンセル")]';
var cancelButton = '//button[contains(text(),"記録")]';


describe('Main Menu', () => {
    it('Verify Main Menu', () => {
        cy.balogin();
    
        cy.xpath(healthCheck).click();
        cy.get('.date-value-temp-label').eq(0).click();

        //Verify for Header
        cy.get('.modal-header').invoke('text').should('contain', '検温│東海林ひとみ')
        cy.get('.modal-header').should('have.css', 'color').and('eq','rgb(66, 66, 66)')
        cy.get('.modal-header').should('have.css', 'font-size').and('eq', '14px')  
        cy.get('.modal-header').should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)

        //Verify for labels
        cy.get('[class="modal-body"]').within(()=>{
        cy.get('.col-4').eq(0).invoke('text').should('contain', '検温時間 :')
        cy.get('.col-4').eq(1).invoke('text').should('contain', '体温 :')
        cy.get('.col-4').each(($li, index, $lis) => {
        cy.get($li).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
        cy.get($li).should('have.css', 'color').and('eq','rgb(92, 104, 115)');
        cy.get($li).should('have.css', 'font-size').and('eq', '12px');

        //Verify for input fields
        cy.get('[autocomplete="off"]').first().should('have.attr', 'placeholder', '時間 ')
        cy.get('.health-input').should('have.css', 'color').and('eq','rgb(66, 66, 66)')
        cy.get('.health-input').should('have.css', 'font-size').and('eq', '14px')  
        cy.get('.health-input').should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)

        })
    })
    //Verify for save button
    cy.get('[class="modal-footer"]').within(()=>{
    cy.xpath(saveButton).first().invoke('text').should('contain', 'キャンセル')
    cy.xpath(saveButton).should('have.css', 'color').and('eq','rgb(10, 201, 164)')
    cy.xpath(saveButton).should('have.css', 'font-size').and('eq', '14px')  
    cy.xpath(saveButton).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)

    //Verify for cancel button
    cy.xpath(cancelButton).invoke('text').should('contain', '記録')
    cy.xpath(cancelButton).should('have.css', 'color').and('eq','rgb(255, 255, 255)')
    cy.xpath(cancelButton).should('have.css', 'font-size').and('eq', '14px')  
    cy.xpath(cancelButton).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
    })
    //Verify for cross mark
    cy.get('.close').should('be.visible')

        })
    })
        
   