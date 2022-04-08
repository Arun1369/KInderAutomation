/// <reference types="Cypress" />
import chaiColors from 'chai-colors'
chai.use(chaiColors)
//import { URL } from ' ../lib/env.js '
//Cypress.env("url");

require('cypress-xpath')
var dashabordLabel = 'h5';
var createButton = '.px-4';
var agencyMenu = '//div[contains(text(),"代理店")]';
var rewardsMenu = '[href="#/agent/reward"]';
var labels = '.register-lables';
var registerButton = '.col > .btn';
var datePicker = '[placeholder="YYYY/MM/DD ~ YYYY/MM/DD"]';



describe('Agent Rewards', () => {
    it('Verify Sales list UI', () => {
        cy.login();
        //Verify the menus text, font ,color and size 
        cy.xpath(agencyMenu).click();
        cy.get(rewardsMenu).click();
        cy.get(rewardsMenu).invoke('text').should('contain', ' 代理店報酬一覧')
        cy.get(rewardsMenu).should('have.css', 'color').and('eq','rgb(255, 255, 255)')
        cy.get(rewardsMenu).should('have.css', 'font-size').and('eq', '14px')  
        cy.get(rewardsMenu).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
        //Verify header
        cy.get('h5').invoke('text').should('contain', '代理店報酬一覧')
        cy.get('h5').should('have.css', 'color').and('eq','rgb(0, 0, 0)')
        cy.get('h5').should('have.css', 'font-size').and('eq', '17.5px')  
        cy.get('h5').should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)


        cy.get(datePicker).should("be.visible")
        cy.get('[placeholder="代理店検索"]').eq(0).should("be.visible")

        cy.get('[type="radio"]').should("be.checked");

        //Verify column headers
           cy.get('th').nextUntil('[class="th-width-dots"]').each(($li, index, $lis) => {
            cy.get($li).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
            cy.get($li).should('have.css', 'color').and('eq','rgb(92, 104, 115)')
            cy.get($li).should('have.css', 'font-size').and('eq', '12px');
           
          });

          //Verify column headers text

        cy.get('th').eq(7).invoke('text').should('contain', '代理店')
        cy.get('th').eq(8).invoke('text').should('contain', '企業')
        cy.get('th').eq(10).invoke('text').should('contain', '契約金額')
        cy.get('th').eq(11).invoke('text').should('contain', '報酬金額')
        cy.get('th').eq(12).invoke('text').should('contain', '契約メニュー登録日')
        cy.get('th').eq(13).invoke('text').should('contain', '入金消込')


        



    })
})