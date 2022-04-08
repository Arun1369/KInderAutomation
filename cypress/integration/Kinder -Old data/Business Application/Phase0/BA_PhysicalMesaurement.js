// <reference types="Cypress" />
import chaiColors from 'chai-colors'
chai.use(chaiColors)
require('cypress-xpath')

var childernLedgerMenu = '.fa-book';
var physicalMeasureMentMenu = '//button[contains(text(),"身体測定")]';
var kaupIndexMenu = '//a[contains(text(),"カウプ指数")]';
var headCircrumfereanceMenu = '//a[contains(text(),"頭囲")]';
var chestMeasurement = '//a[contains(text(),"胸囲")]';
var bodyWeight = '//a[contains(text(),"体重")]';
var height = '//a[contains(text(),"身長")]';
//This function will be used every menu to verify year
function columnChecks (){
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

}

describe('Physical measurement', () => {
    it('Verify physical measurment screen content', () => {
        cy.balogin();
        cy.get('#dropdown-form__BV_toggle_').click();
        cy.get(childernLedgerMenu).eq(0).click()
        cy.wait(4000);
        cy.xpath(physicalMeasureMentMenu).eq(0).click();
        cy.wait(2000)
        cy.get('.modal-content').within(()=>{
            cy.activeTabtitle('全て表示');
            cy.get('.chartjs-render-monitor').should("be.visible");
            //Verify column font
            cy.get('th').each(($li, index, $lis) => {
                cy.get($li).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
                cy.get($li).should('have.css', 'color').and('eq','rgb(66, 66, 66)')
                cy.get($li).should('have.css', 'font-size').and('eq', '12px');

            })
            //Verify Table text 
            columnChecks();
            //Save and Cancel
            cy.saveandCancel();
              //Verify print option
            cy.get('.fa-print').should('not.be.disabled')
         //Verify download button 
            cy.get('.btn-outline-primary').eq(0).should('not.be.disabled')
        })
    })

        it('Verify kaup index screen content', () => {
            cy.xpath(kaupIndexMenu).eq(0).click();
            cy.wait(2000)
            cy.get('.modal-content').within(()=>{
                cy.activeTabtitle('カウプ指数');
                cy.get('.chartjs-render-monitor').should("be.visible");
                //Verify column font
                cy.get('th').each(($li, index, $lis) => {
                    cy.get($li).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
                    cy.get($li).should('have.css', 'color').and('eq','rgb(66, 66, 66)')
                    cy.get($li).should('have.css', 'font-size').and('eq', '12px');
    
                })
                //Verify Table text 
                columnChecks();
                //Save and Cancel
                cy.saveandCancel();
                  //Verify print option
               cy.get('.fa-print').should('not.be.disabled')
               //Verify download button 
               cy.get('.btn-outline-primary').eq(0).should('not.be.disabled')
            })
        })
    
        
        it('Verify chest measurement screen content', () => {
            cy.xpath(chestMeasurement).eq(0).click();
            cy.wait(2000)
            cy.get('.modal-content').within(()=>{
                cy.activeTabtitle('胸囲');
                cy.get('.chartjs-render-monitor').should("be.visible");
                //Verify column font
                cy.get('th').each(($li, index, $lis) => {
                    cy.get($li).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
                    cy.get($li).should('have.css', 'color').and('eq','rgb(66, 66, 66)')
                    cy.get($li).should('have.css', 'font-size').and('eq', '12px');
    
                })
                //Verify Table text 
                columnChecks();
                //Save and Cancel
                cy.saveandCancel();
                  //Verify print option
                cy.get('.fa-print').should('not.be.disabled')
             //Verify download button 
                 cy.get('.btn-outline-primary').eq(0).should('not.be.disabled')
            })
        })
    
         
        it('Verify head circumferance screen content', () => {
            cy.xpath(headCircrumfereanceMenu).eq(0).click();
            cy.wait(2000)
            cy.get('.modal-content').within(()=>{
                cy.activeTabtitle('頭囲');
                cy.get('.chartjs-render-monitor').should("be.visible");
                //Verify column font
                cy.get('th').each(($li, index, $lis) => {
                    cy.get($li).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
                    cy.get($li).should('have.css', 'color').and('eq','rgb(66, 66, 66)')
                    cy.get($li).should('have.css', 'font-size').and('eq', '12px');
    
                })
                //Verify Table text 
                columnChecks();
                //Save and Cancel
                cy.saveandCancel();
                  //Verify print option
                cy.get('.fa-print').should('not.be.disabled')
                 //Verify download button 
                cy.get('.btn-outline-primary').eq(0).should('not.be.disabled')
            })
        })
       
        it('Verify hbody weight screen content', () => {
            cy.xpath(bodyWeight).eq(0).click();
            cy.wait(2000)
            cy.get('.modal-content').within(()=>{
                cy.activeTabtitle('体重');
                cy.get('.chartjs-render-monitor').should("be.visible");
                //Verify column font
                cy.get('th').each(($li, index, $lis) => {
                    cy.get($li).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
                    cy.get($li).should('have.css', 'color').and('eq','rgb(66, 66, 66)')
                    cy.get($li).should('have.css', 'font-size').and('eq', '12px');
    
                })
                //Verify Table text 
                columnChecks();
                //Save and Cancel
                cy.saveandCancel();
                  //Verify print option
                cy.get('.fa-print').should('not.be.disabled')
         //Verify download button 
                cy.get('.btn-outline-primary').eq(0).should('not.be.disabled')
            })
        })
    
        it('Verify hbody weight screen content', () => {
            cy.xpath(height).eq(0).click();
            cy.wait(2000)
            cy.get('.modal-content').within(()=>{
                cy.activeTabtitle('身長');
                cy.get('.chartjs-render-monitor').should("be.visible");
                //Verify column font
                cy.get('th').each(($li, index, $lis) => {
                    cy.get($li).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
                    cy.get($li).should('have.css', 'color').and('eq','rgb(66, 66, 66)')
                    cy.get($li).should('have.css', 'font-size').and('eq', '12px');
    
                })
                //Verify Table text 
                columnChecks();
                //Save and Cancel
                cy.saveandCancel();
                  //Verify print option
                cy.get('.fa-print').should('not.be.disabled')
               //Verify download button 
                cy.get('.btn-outline-primary').eq(0).should('not.be.disabled')
            })
        })
    
       
})
