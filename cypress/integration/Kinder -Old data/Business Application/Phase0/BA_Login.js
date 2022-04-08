///<reference types="Cypress" />

import chaiColors from 'chai-colors'
chai.use(chaiColors)
var font = /"Noto Sans JP", sans-serif/
var URL = 'kinder-bweb/#/auth/signin'

require('cypress-xpath')
describe('Login Bapp', function()
{

    it('Verification for Screen content', function()
    {
        cy.visit(URL);
        //cy.balogin(); //Passing the URL 
        cy.url().should('include','kinder') //checking the value present in URL

       
     //checking Login Header(font format, font size and font color)
     cy.get('h2.text-center').invoke('text').should('contain', 'ログイン')
     cy.get('h2.text-center').should('have.css', 'font-family').and('match', font);
     cy.get('h2.text-center').should('have.css', 'color').and('eq','rgb(0, 0, 0)')
     cy.get('h2.text-center').should('have.css', 'font-size').and('eq', '28px');

 //Verification for icon
 cy.get('.icon-user').should('be.visible')
 cy.get('.icon-lock').should('be.visible')

 //Verification for input fields icon
 cy.get('[autocomplete="email"]').should("be.visible")
 cy.get('[autocomplete="email"]').first().should('have.attr', 'placeholder', 'ユーザーID')

 cy.get('[autocomplete="password"]').should("be.visible")
 cy.get('[autocomplete="password"]').first().should('have.attr', 'placeholder', 'パスワード')

  //Verification for Check box wording
  cy.get('.custom-control-label').should('be.visible')
  cy.get('.custom-control-label').invoke('text').should('contain', 'ログイン情報を記憶する')
  cy.get('.custom-control-label').should('have.css', 'font-family').and('match', font);
  cy.get('.custom-control-label').should('have.css', 'color').and('eq','rgb(0, 0, 0)')
  cy.get('.custom-control-label').should('have.css', 'font-size').and('eq', '14px');
    })

  //Verification for forgot password message
  it('Verification for forgot password Screen content', function()
    {
  cy.get('.row > :nth-child(2)').should('be.visible')
  cy.get('.row > :nth-child(2)').invoke('text').should('contain', 'パスワードをお忘れの場合')
  cy.get('.row > :nth-child(2)').should('have.css', 'font-family').and('match', font);
  cy.get('.row > :nth-child(2)').should('have.css', 'color').and('eq','rgb(0, 0, 0)')
  cy.get('.row > :nth-child(2)').should('have.css', 'font-size').and('eq', '14px');
    

  //Verification for Login button
 cy.get('[type="button"]').should("be.visible")
 cy.get('[type="button"]').should('have.css', 'background-color', 'rgb(10, 201, 164)')
 cy.get('[type="button"]').invoke('text').should('contain', 'ログイン')
 cy.get('[type="button"]').should('have.css', 'font-size').and('eq', '14px');
 cy.get('[type="button"]').should('have.css', 'font-family').and('match', font);
 cy.wait(2000)
    })
 //verification for close button 

 //Verification for reset pasword link
 it('Verification for reset password Screen content', function()
    {
 var title = '#bv-modal-example___BV_modal_title_'
 cy.get('.row > :nth-child(2)').click();
 cy.get(title).should('contain', 'パスワードの再設定')
 cy.get(title).should('have.css', 'font-size').and('eq', '17.5px');
 cy.get(title).should('have.css', 'font-family').and('match', font);
 cy.get('[autocomplete="off"]').first().should('have.attr', 'placeholder', 'メールアドレス')
    

 cy.get('[type="button"]').should("be.visible")
 cy.get('[type="button"]').should('have.css', 'background-color', 'rgb(10, 201, 164)')
 cy.get('[type="button"]').invoke('text').should('contain', '送信')
 cy.get('[type="button"]').should('have.css', 'font-size').and('eq', '14px');
 cy.get('[type="button"]').should('have.css', 'font-family').and('match', font);
 cy.wait(6000)

 cy.get('.close').click({force:true});

cy.balogin(); //Passing the URL 
cy.url().should('include','kinder') //checking the value present in URL
    })
})
//})
