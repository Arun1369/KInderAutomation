// <reference types="Cypress" />

import chaiColors from 'chai-colors'
chai.use(chaiColors)

describe('Forgot Password kind-215', function()
{

    it('Verification for Forgot Password screen content', function()
    {
        cy.visit("kinder-web/#/reset/password") //Passing the URL
        cy.url().should('include','kinder') //chenking the value present in URL

        //checking Password rest Header(font format, font size and font color)
         cy.get('h4.text-center').invoke('text').should('contain', 'パスワードの再発行')
         cy.get('h4.text-center').should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/);
         cy.get('h4.text-center').should('have.css', 'color').and('eq','rgb(0, 0, 0)');
         cy.get('h4.text-center').should('have.css', 'font-size').and('eq', '21px');

        //Verification for Mail ID field
        cy.get('[autocomplete="username email"]')
        .should("be.visible")
        cy.get('[autocomplete="username email"]').first().should('have.attr', 'placeholder', 'ユーザーID')

        //Verification for icon
        cy.get('.icon-user').should('be.visible')

        //Verification for submit button
        cy.get('[type="submit"]')
        .should("be.visible")
        cy.get('[type="submit"]').should('have.css', 'background-color', 'rgb(56, 149, 211)')
        cy.get('[type="submit"]').invoke('text').should('contain', 'パスワードの再発行')
        cy.get('[type="submit"]').should('have.css', 'font-size').and('eq', '14px');
        cy.get('[type="submit"]').should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/);



    // //Forgot password link
    //     cy.get('a.px-0.underline.py-0.border-0').should('be.visible')
    //     cy.get('a.px-0.underline.py-0.border-0').should('have.css', 'color').and('eq','rgb(56, 149, 211)');
    //     cy.get('a.px-0.underline.py-0.border-0').should('have.css', 'font-size').and('eq', '14px');
    //     cy.get('a.px-0.underline.py-0.border-0').click();

    // //checking Password rest Header(font format, font size and font color)
    //      cy.get('h4.text-center').invoke('text').should('contain', 'パスワードの再発行')
    //      cy.get('h4.text-center').should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/);
    //      cy.get('h4.text-center').should('have.css', 'color').and('eq','rgb(0, 0, 0)');
    //      cy.get('h4.text-center').should('have.css', 'font-size').and('eq', '21px');

    // //Inavlid Mail ID
    //     cy.get('[autocomplete="username email"]')
    //     .should("be.visible")
    //     .type('123456');

    // //Checking for Mail ID field Error meassage(font format, font size and font color)
    //     cy.get('.mandatory-color').should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
    //     cy.get('.mandatory-color').should('have.css', 'color').and('eq','rgb(255, 0, 0)');
    //     cy.get('.mandatory-color').should('have.css', 'font-size').and('eq', '14px');

    // //Clearing the Mail ID field
    //     cy.get('[autocomplete="username email"]').clear();

    // //Not Registered Mail ID
    //     cy.get('[autocomplete="username email"]')
    //     .should("be.visible")
    //     .type('spoorthy@mailinator.com');
    //     cy.get('[type="submit"]').click();

    // //User not found error message
    //     cy.get('p.text-center.alert-danger').should("be.visible")
    //     cy.get('p.text-center.alert-danger').should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
    //     cy.get('p.text-center.alert-danger').should('have.css', 'color').and('eq','rgb(204, 11, 11)');
    //     cy.get('p.text-center.alert-danger').should('have.css', 'font-size').and('eq', '14px');

    // //Clearing the Mail ID field
    //     cy.get('[autocomplete="username email"]').clear();

    // //Valid User(font format, font size and font color)
    //     cy.get('[autocomplete="username email"]')
    //     .should("be.visible")
    //     .type('demo@mailinator.com');
        
    // //Login button(fornt format, font size and font color)
    //     cy.get('[type="submit"]')
    //     .should("be.visible")
    //     cy.get('[type="submit"]').should('have.css', 'background-color', 'rgb(56, 149, 211)')
    //     .click();

    // //Success Message
    //     cy.get('p.text-success').should("be.visible")
    //     cy.get('p.text-success').should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
    //     cy.get('p.text-success').should('have.css', 'color').and('eq','rgb(77, 189, 116)');
    //     cy.get('p.text-success').should('have.css', 'font-size').and('eq', '14px');

    //     it('Download extension in Firefox', { browser: 'firefox' }, () => {
    //         cy.get('#dl-extension')
    //           .should('contain', 'Download Firefox Extension')
    //       })

    })
})