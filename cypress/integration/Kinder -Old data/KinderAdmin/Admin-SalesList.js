/// <reference types="Cypress" />
import chaiColors from 'chai-colors'
chai.use(chaiColors)
//import { URL } from ' ../lib/env.js '
//Cypress.env("url");

require('cypress-xpath')
var dashabordLabel = '.kinder-label';
var createButton = '.px-4';
var salesMainMenu = "//div[text()=' 売上管理']";
var paymentList = 'a[href="#/sales/"]';
var dashabordLabel = '.kinder-label';





describe('Sales List', () => {
    it('Verify Sales list UI', () => {
        cy.login();
        //Verify the menus text, font ,color and size 
        cy.xpath(salesMainMenu).invoke('text').should('contain', '売上管理')
        
        cy.xpath(salesMainMenu).should('have.css', 'color').and('eq','rgb(255, 255, 255)')
        cy.xpath(salesMainMenu).should('have.css', 'font-size').and('eq', '14px')  
        cy.xpath(salesMainMenu).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
        cy.get(paymentList).invoke('text').should('contain', '売上請求一覧')
        cy.get(paymentList).should('have.css', 'color').and('eq','rgb(255, 255, 255)')
        cy.get(paymentList).should('have.css', 'font-size').and('eq', '14px')
        cy.get(paymentList).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)

        cy.xpath(salesMainMenu).click();
        cy.get(paymentList).click();
        cy.wait(2000);
        cy.get(dashabordLabel).invoke('text').should('contain', '売上一覧')
        
        cy.get(dashabordLabel).should('have.css', 'color').and('eq','rgb(0, 0, 0)')
        cy.get(dashabordLabel).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
        //assert font size of header in list
        cy.get(dashabordLabel).should('have.css', 'font-size').and('eq', '17.5px')
        cy.get('[aria-colindex="2"] > div').invoke('text').should('contain', '企業名')
        cy.get('[aria-colindex="3"] > div').invoke('text').should('contain', '所属園')
        cy.get('[aria-colindex="4"] > div').invoke('text').should('contain', '代理店')
        cy.get('[aria-colindex="5"] > div').invoke('text').should('contain', '契約日')
        cy.get('[aria-colindex="6"] > div').invoke('text').should('contain', '入金日')
        cy.get('[aria-colindex="7"] > div').invoke('text').should('contain', '契約金額')
        cy.get('[aria-colindex="7"] > div').should('have.css', 'font-size').and('eq', '12px');
        cy.get('th[role="columnheader"]').nextUntil('[class="th-width-dots"]').each(($li, index, $lis) => {
            cy.get($li).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
            cy.get($li).should('have.css', 'color').and('eq','rgb(92, 104, 115)')
            cy.get($li).should('have.css', 'font-size').and('eq', '12px');
           
          });

          cy.get('.mx-datepicker').should("be.visible")
          //Assert the Download Button
        cy.get('.fa-download').should("be.visible")
        //Verify the Saerch button
        cy.get('.custom-select').first().should("be.visible")
        //cy.get('.input-group-text').eq(1).should("be.visible")  
        //Verify First option is selected 
        cy.get('[type="radio"]').first().should('be.checked')  
        //Verify text of radio buttons
        cy.get(':nth-child(1) > .custom-control-label > span').invoke('text').should('contain', '全て')
        cy.get(':nth-child(1) > .custom-control-label > span').should('have.css', 'color').and('eq','rgb(0, 0, 0)')
        cy.get(':nth-child(1) > .custom-control-label > span').should('have.css', 'font-size').and('eq', '14px')
        cy.get(':nth-child(1) > .custom-control-label > span').should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
        cy.get(':nth-child(2) > .custom-control-label > span').invoke('text').should('contain', '入金済みのみ')
        cy.get(':nth-child(2) > .custom-control-label > span').should('have.css', 'color').and('eq','rgb(0, 0, 0)')
        cy.get(':nth-child(2) > .custom-control-label > span').should('have.css', 'font-size').and('eq', '14px')
        cy.get(':nth-child(2) > .custom-control-label > span').should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
        cy.get(':nth-child(3) > .custom-control-label > span').should('contain', '未入金のみ')
        cy.get(':nth-child(3) > .custom-control-label > span').should('have.css', 'color').and('eq','rgb(0, 0, 0)')
        cy.get(':nth-child(3) > .custom-control-label > span').should('have.css', 'font-size').and('eq', '14px')
        cy.get(':nth-child(3) > .custom-control-label > span').should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)

        cy.get('.label-color').eq(0).invoke('text').should('contain', '当月売上')
        cy.get('.label-color').eq(1).invoke('text').should('contain', '契約数（園')

        cy.get('.label-color').each(($li,index,$list)=>{
            cy.get($li).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
            cy.get($li).should('have.css', 'color').and('eq','rgb(92, 104, 115)')
            cy.get($li).should('have.css', 'font-size').and('eq', '14px');

        })
         

        
    



    })

})