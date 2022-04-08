/// <reference types="Cypress" />
import chaiColors from 'chai-colors'
chai.use(chaiColors)
//import { URL } from ' ../lib/env.js '
//Cypress.env("url");

require('cypress-xpath')
var dashabordLabel = 'h5';
var createButton = '.px-4';
var agencyMenu = '//div[contains(text(),"代理店")]';
var AgentCreateMenu = '//a[contains(text(),"代理店登録")]';
var labels = '.register-lables';
var saveButton = '.col > .btn';



describe('Agent Registration', () => {
    it('Verify agency registration  UI', () => {
        cy.login();
        //Verify the menus text, font ,color and size 
        cy.xpath(agencyMenu).invoke('text').should('contain', ' 代理店')
        cy.xpath(agencyMenu).should('have.css', 'color').and('eq','rgb(255, 255, 255)')
        cy.xpath(agencyMenu).should('have.css', 'font-size').and('eq', '14px')  
        cy.xpath(agencyMenu).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
        cy.xpath(AgentCreateMenu).invoke('text').should('contain', '代理店登録')
        cy.xpath(AgentCreateMenu).should('have.css', 'color').and('eq','rgb(255, 255, 255)')
        cy.xpath(AgentCreateMenu).should('have.css', 'font-size').and('eq', '14px')
        cy.xpath(AgentCreateMenu).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
        cy.xpath(agencyMenu).click();
        cy.xpath(AgentCreateMenu).click();
        cy.wait(2000);
        cy.get(dashabordLabel).invoke('text').should('contain', '株式会社 代理店')

        cy.get(dashabordLabel).should('have.css', 'color').and('eq','rgb(0, 0, 0)')
        cy.get(dashabordLabel).should('have.css', 'font-size').and('eq', '17.5px')  
        cy.get(dashabordLabel).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)

        //Verify all the lablels
        cy.get(labels).each(($li, index, $lis) => {
            cy.get($li).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
            cy.get($li).should('have.css', 'color').and('eq','rgb(92, 104, 115)')
            cy.get($li).should('have.css', 'font-size').and('eq', '12px');
           
          });

          //Verify all the label text
          cy.get('.mt-3 > .col-md-2').invoke('text').should('contain', '社名')
          cy.get('.formTextSize > :nth-child(2) > .register-lables').invoke('text').should('contain', '住所')
          cy.get('.row.vertical-align > .register-lables').invoke('text').should('contain', '電話番号')
          cy.get('.formTextSize > :nth-child(4) > .col-md-2').invoke('text').should('contain', 'メールアドレス')
          cy.get(':nth-child(5) > .col-md-2 > span').invoke('text').should('contain', '代表者名')
          cy.get(':nth-child(6) > .col-md-2 > span').invoke('text').should('contain', '担当者名')


          cy.get('.mt-2 > .col-md-2 > span').invoke('text').should('contain', '報酬支払方法')
          cy.get('.border > :nth-child(2) > :nth-child(1) > span').invoke('text').should('contain', '金融機関')
          cy.get('.border > :nth-child(3) > .col-md-2').invoke('text').should('contain', '報酬支払方法')
          //Verify radio button

         cy.get('[type="radio"]').first().should('be.checked') 

         cy.get(saveButton).invoke('text').should('contain', '保存')
         cy.get(saveButton).should('have.css', 'color').and('eq','rgb(255, 255, 255)')
         cy.get(saveButton).should('have.css', 'font-size').and('eq', '14px');
         cy.get(saveButton).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)









    })
})