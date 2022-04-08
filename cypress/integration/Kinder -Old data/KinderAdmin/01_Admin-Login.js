///<reference types="Cypress" />

import chaiColors from 'chai-colors'
chai.use(chaiColors)

require('cypress-xpath')
var faker = require("faker");
var fakerJa = require("faker/locale/ja");



var loginField = '[autocomplete="email"]';
var passwordField = '[autocomplete="password"]'
var submitbutton = '[type="submit"]';
var rememberMECheckBox = '#basicInlineCustomCheckboxes';
var validationMessage = '.text-left';
var toestMessage = '.toast-message';
var userName = 'superadmin@kinder.com';
var password = 'admin123';








describe('Login functionaly', function()
{
    
   //Save the local storage 
    beforeEach("loadFixturedData",function(){
        cy.routes();
        cy.restoreLocalStorage();
   
    });
        afterEach(() => {
          cy.saveLocalStorage(); 
    });

    it.only('Verification for Screen content', function()
    {
        
        cy.visit("kinder-web/#/auth/signin") //Passing the URL
        cy.url().should('include','kinder') //checking the value present in URL

    //Verification for title
    cy.get('strong').invoke('text').should('contain', '管理システム')
    cy.get('strong').should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/);
    cy.get('strong').should('have.css', 'color').and('eq','rgb(0, 0, 0)')
    cy.get('strong').should('have.css', 'font-size').and('eq', '21px');
    cy.get('strong').should('be.visible')
 
    //checking Login Header(font format, font size and font color)
        cy.get('h2.text-center').invoke('text').should('contain', 'ログイン')
        cy.get('h2.text-center').should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/);
        cy.get('h2.text-center').should('have.css', 'color').and('eq','rgb(0, 0, 0)')
        cy.get('h2.text-center').should('have.css', 'font-size').and('eq', '28px');

    //Verification for icon
    cy.get('.icon-user').should('be.visible')
    cy.get('.icon-lock').should('be.visible')

    //Verification for input fields icon
    cy.get('[autocomplete="email"]')
    .should("be.visible")
    cy.get('[autocomplete="email"]').first().should('have.attr', 'placeholder', 'ユーザーID')

    cy.get('[autocomplete="password"]')
     .should("be.visible")
     cy.get('[autocomplete="password"]').first().should('have.attr', 'placeholder', 'パスワード')

     //Verification for Check box wording
     cy.get('.custom-control-label').should('be.visible')
     cy.get('.custom-control-label').invoke('text').should('contain', 'ログイン情報を記憶する')
     cy.get('.custom-control-label').should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/);
     cy.get('.custom-control-label').should('have.css', 'color').and('eq','rgb(0, 0, 0)')
     cy.get('.custom-control-label').should('have.css', 'font-size').and('eq', '14px');

     //Verification for forgot password message
     cy.get('.row > :nth-child(2)').should('be.visible')
     cy.get('.row > :nth-child(2)').invoke('text').should('contain', 'ログインをお忘れの方はこちらからご連絡ください。')
     cy.get('.row > :nth-child(2)').should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/);
     cy.get('.row > :nth-child(2)').should('have.css', 'color').and('eq','rgb(0, 0, 0)')
     cy.get('.row > :nth-child(2)').should('have.css', 'font-size').and('eq', '14px');

     //Verification for Login button
     
    cy.get('[type="submit"]').should('have.css', 'background-color', 'rgb(56, 149, 211)')
    cy.get('[type="submit"]').invoke('text').should('contain', 'ログイン')
    cy.get('[type="submit"]').should('have.css', 'font-size').and('eq', '14px');
    cy.get('[type="submit"]').should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/);

    //Verification for Password reset link
    cy.get('.px-0').should("be.visible")
    cy.get('.px-0').invoke('text').should('contain', 'こちらから')
    cy.get('.px-0').should('have.css', 'font-size').and('eq', '14px');
    cy.get('.px-0').should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/);
    

    })

})