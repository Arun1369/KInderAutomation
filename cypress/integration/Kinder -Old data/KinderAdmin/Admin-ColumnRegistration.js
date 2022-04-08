/// <reference types="Cypress" />
import chaiColors from 'chai-colors'
chai.use(chaiColors)
//import { URL } from ' ../lib/env.js '
//Cypress.env("url");

require('cypress-xpath')


var columnMainMenu = '//div[contains(text(),"コンテンツ管理")]';
var columnListMenu = 'a[href="#/content"]';
//var columnCreateButton = '.px-4';
var columnCreateButton = '//a[contains(text(),"新規追加")]'; 
var previewButton = '//button[contains(text(),"プレビュー")]';
var saveDraft = '//button[contains(text(),"下書き保存")]';
var updateButton = '//button[contains(text(),"申請")]';
var addButton = '//button[contains(text()," カテゴリーを追加")]'
var datePicker = '[placeholder="YYYY/MM/DD HH:MM"]';
var lebel = '.register-lables';


describe('Column Registration', () => {
    it('Verify Column Registration UI', () => {
        cy.login();

    //Verification for Main side menu
        cy.xpath(columnMainMenu).click();
        cy.xpath(columnMainMenu).invoke('text').should('contain', 'コンテンツ管理')
        cy.xpath(columnMainMenu).should('have.css', 'color').and('eq','rgb(255, 255, 255)')
        cy.xpath(columnMainMenu).should('have.css', 'font-size').and('eq', '14px');

    //Verification for sub-side menu
    cy.get(columnListMenu).first().click()
    cy.get(columnListMenu).invoke('text').should('contain', 'コラム')
    cy.get(columnListMenu).should('have.css', 'color').and('eq','rgb(255, 255, 255)')
    cy.get(columnListMenu).should('have.css', 'font-size').and('eq', '14px')  
    cy.wait(1000)


    cy.xpath(columnCreateButton).first().click();
    cy.wait(1000)

    //Verifcation for Screen title
        cy.get('.kinder-label').should('be.visible')
        cy.get('.kinder-label').invoke('text').should('contain', 'コラム登録')
        cy.get('.kinder-label').should('have.css', 'color').and('eq','rgb(0, 0, 0)')
        cy.get('.kinder-label').should('have.css', 'font-size').and('eq', '17.5px')

        //Verification for body
        //cy.get('#__BVID__263').should('be.visible')
        cy.get('#__BVID__263').first().should('have.attr', 'placeholder', 'タイトルを入力')
    
        cy.get('.ql-toolbar').should('be.visible')
        cy.get('.ql-editor').should('be.visible')
        cy.get('.file-select').should('be.visible')
        cy.get('#file-default').should('be.visible')
        cy.get('.bv-no-focus-ring > .col-md-12').should('be.visible')

    //Verification for Add button
    cy.xpath(addButton).invoke('text').should('contain', 'カテゴリーを追加')
    cy.xpath(addButton).should('have.css', 'color').and('eq','rgb(56, 149, 211)')
    cy.xpath(addButton).should('have.css', 'font-size').and('eq', '14px');
    cy.xpath(addButton).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/);

    cy.xpath(addButton).first().click();

    //Verification for Save draft button
    cy.xpath(saveDraft).invoke('text').should('contain', '下書き保存')
    cy.xpath(saveDraft).should('have.css', 'color').and('eq','rgb(35, 40, 44)')
    cy.xpath(saveDraft).should('have.css', 'font-size').and('eq', '14px');
    cy.xpath(saveDraft).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/);

    //Verification for Update button
    cy.xpath(updateButton).invoke('text').should('contain', '申請')
    cy.xpath(updateButton).should('have.css', 'color').and('eq','rgb(255, 255, 255)')
    cy.xpath(updateButton).should('have.css', 'font-size').and('eq', '14px');
    cy.xpath(updateButton).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/);

    //Verification for Preview button
    cy.xpath(previewButton).invoke('text').should('contain', 'プレビュー')
    cy.xpath(previewButton).should('have.css', 'color').and('eq','rgb(56, 149, 211)')
    cy.xpath(previewButton).should('have.css', 'font-size').and('eq', '14px');

    cy.get(datePicker).should("be.visible")

    //Verification for public status and date field
    cy.get(lebel).eq(0).invoke('text').should('contain', '公開状態')
    cy.get(lebel).eq(1).invoke('text').should('contain', '公開日時')
    cy.get(lebel).each(($li, index, $lis) => {
        cy.get($li).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
        cy.get($li).should('have.css', 'color').and('eq','rgb(92, 104, 115)')
        cy.get($li).should('have.css', 'font-size').and('eq', '12px')
      });

      //Verification for status
      cy.get('.col-md-10 > .label-color').invoke('text').should('contain', '投稿者')
      cy.get('.col-md-10 > .label-color').should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
      cy.get('.col-md-10 > .label-color').should('have.css', 'color').and('eq','rgb(92, 104, 115)')
      cy.get('.col-md-10 > .label-color').should('have.css', 'font-size').and('eq', '14px')


    })
})