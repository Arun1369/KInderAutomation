/// <reference types="Cypress" />
import chaiColors from 'chai-colors'
chai.use(chaiColors)
//import { URL } from ' ../lib/env.js '
//Cypress.env("url");

require('cypress-xpath')


var kinderMainMenu = '//div[contains(text(),"登録園・企業")]';
var kinderList = '[href="#/nursery/"]';
var kinderCreatemenu = '//a[contains(text(),"園登録")]';
var accessLog = '//a[contains(text(),"アクセスログ")]';
var datePicker = '[name="date"]';
var firstDropdown = '.custom-select';
//var secondDropdown = '(//select[@class="inputField col-md-12 form-control custom-select"])[3]';
var uploadButton = '.fa-download';


describe('Access Log', () => {
    it('Verity access log  list UI', () => {
        cy.login();
    
        cy.xpath(kinderMainMenu).click();
        cy.get(kinderList).eq(0).click({force:true});
        cy.get('td').eq(2).click();
        cy.wait(2000);
        cy.xpath(accessLog).click();
        //Verify Text, COlor and size
        cy.xpath(accessLog).invoke('text').should('contain', 'アクセスログ')
        cy.xpath(accessLog).should('have.css', 'color').and('eq','rgb(47, 53, 58)')
        cy.xpath(accessLog).should('have.css', 'font-size').and('eq', '14px')  
        cy.xpath(accessLog).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
        //cy.get(datePicker).click({force:true});
        //cy.get(datePicker).should("be.visible")
        cy.get(firstDropdown).eq(0).should("be.visible")
        cy.get(firstDropdown).eq(1).should("be.visible")
        cy.get(uploadButton).should("be.visible")
        //Verify all column headers 
        cy.get('th[role="columnheader"]').each(($li, index, $lis) => {
            cy.get($li).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
            cy.get($li).should('have.css', 'color').and('eq','rgb(92, 104, 115)')
            cy.get($li).should('have.css', 'font-size').and('eq', '12px')
           
          });

          cy.get('th[role="columnheader"]').eq(0).invoke('text').should('contain', '機能')
          cy.get('th[role="columnheader"]').eq(1).invoke('text').should('contain', '職員氏名')
          cy.get('th[role="columnheader"]').eq(2).invoke('text').should('contain', '日時')


          cy.get('.container-fluid > [data-v-c16e5f8a=""] > :nth-child(2)').invoke('text').should('contain', 'ステータス:承認済み')
          cy.get('.container-fluid > [data-v-c16e5f8a=""] > :nth-child(2)').should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
          cy.get('.container-fluid > [data-v-c16e5f8a=""] > :nth-child(2)').should('have.css', 'color').and('eq','rgb(0, 0, 0)')
          cy.get('.container-fluid > [data-v-c16e5f8a=""] > :nth-child(2)').should('have.css', 'font-size').and('eq', '14px')
         //Verify download button
          cy.get('.fa-download').should("be.visible")
         // cy.get('h5').invoke('text').should('contain', 'アクセスログ')

         //Todo 
         //header and Text of top right side




    })
})






