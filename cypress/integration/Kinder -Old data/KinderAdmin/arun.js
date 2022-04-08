/// <reference types="Cypress" />
import chaiColors from 'chai-colors'
chai.use(chaiColors)
//import { URL } from ' ../lib/env.js '
//Cypress.env("url");

require('cypress-xpath')
var dashabordLabel = 'h5';
var userMenu = '//div[contains(text(),"ユーザー管理")]';
var permissionMenu = '//a[contains(text(),"ユーザー権限")]';
var labels = '.register-lables';
var registerButton = '.col > .btn';
var createButton = '//button[contains(text(),"新規追加")]';
var saveButton ='//button[contains(text(),"保存")]';
var deleteButton = '//button[contains(text(),"削除")]';



describe('User Permissions', () => {
    it('Verify Permissions UI', () => {
       // cy.visit('http://119.82.96.68/kinder-web/#/admin/auth/signin')
        cy.login();
        cy.visit('http://119.82.96.68/kinder-web/#/admin/nursery/');
        //Verify the menus text, font ,color and size 
        ///cy.get('h5').invoke('text').should('contain', ' ユーザー管理')

       //cy.cssTest('css','h5','園一覧');
       cy.visit('http://119.82.96.68/kinder-web/#/admin/sales/receipt')
       cy.coloumnHeader('css','th','企業名');





    })
})