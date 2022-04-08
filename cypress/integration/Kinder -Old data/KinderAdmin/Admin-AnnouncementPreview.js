/// <reference types="Cypress" />
import chaiColors from 'chai-colors'
chai.use(chaiColors)
//import { URL } from ' ../lib/env.js '
//Cypress.env("url");

require('cypress-xpath')


var noticeMainMenu = '//div[contains(text(),"お知らせ")]';
var notificationRegistrationMenu = 'a[href="#/admin/notification/new"]';
var previewButton = '//button[contains(text(),"プレビュー")]';
var saveDraft = '//button[contains(text(),"下書き保存")]';
var updateButton = '//button[contains(text(),"更新")]';
var addButton = '//button[contains(text()," カテゴリーを追加")]'


describe('Agency Information Screen', () => {
    it('Launch URL', () => {
        cy.visit('/')
        cy.wait(1000)
        //input
        cy.login()
        cy.wait(1000)

    //Verification for Main menu
        cy.xpath(noticeMainMenu).click();
        cy.xpath(noticeMainMenu).invoke('text').should('contain', 'お知らせ')
        cy.xpath(noticeMainMenu).should('have.css', 'color').and('eq','rgb(255, 255, 255)')
        cy.xpath(noticeMainMenu).should('have.css', 'font-size').and('eq', '14px');

    //Verification for sub menu
        cy.get(notificationRegistrationMenu).click();
        cy.get(notificationRegistrationMenu).invoke('text').should('contain', 'お知らせ登録')
        cy.get(notificationRegistrationMenu).should('have.css', 'color').and('eq','rgb(255, 255, 255)')
        cy.get(notificationRegistrationMenu).should('have.css', 'font-size').and('eq', '14px');
        cy.wait(1000)

    //Verification for Header
        cy.get('#__BVID__154').should('be.visible')
        cy.get('#__BVID__154').type('サーバメンテナンスのお知らせ')

    //Verification for body field
        cy.get('.ql-editor').should('be.visible')
        cy.get('.ql-editor').type('本サイトは 2020 年 12 月 31 日にサーバーのメンテナンスを実施します。停止に伴い、下記の通りホームページの閲覧および全サービスを一時休止いたします。お客様にはご不便をおかけいたしまして、誠に申し訳ございませんが、ご了承くださいますようお願い申し上げます。')

    //Verification for Date picker
        cy.get('.mx-input-wrapper > .form-control').should('be.visible')
        cy.get('.mx-input-wrapper > .form-control').click()
        cy.get('[data-day="29"] > div').first().click()

    //Verification for Preview button
        cy.xpath(previewButton).invoke('text').should('contain', 'プレビュー')
        cy.xpath(previewButton).should('have.css', 'color').and('eq','rgb(56, 149, 211)')
        cy.xpath(previewButton).should('have.css', 'font-size').and('eq', '14px');

        cy.xpath(previewButton).click();

    //Verification for Header text
        cy.get('h3').should('be.visible')
        cy.get('h3').should('have.css', 'color').and('eq','rgb(0, 0, 0)')
        cy.get('h3').should('have.css', 'font-size').and('eq', '24.5px');
        cy.get('h3').should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/);

    //Verification for date display
        cy.get('#preview-modal___BV_modal_body_ > :nth-child(1) > .col-md-4').should('be.visible')
        cy.get('#preview-modal___BV_modal_body_ > :nth-child(1) > .col-md-4').should('have.css', 'color').and('eq','rgb(0, 0, 0)')
        cy.get('#preview-modal___BV_modal_body_ > :nth-child(1) > .col-md-4').should('have.css', 'font-size').and('eq', '11px');
        cy.get('#preview-modal___BV_modal_body_ > :nth-child(1) > .col-md-4').should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/);

    //Verification for body data
        cy.get('.mt-2 > p').should('be.visible')
        cy.get('.mt-2 > p').should('have.css', 'color').and('eq','rgb(0, 0, 0)')
        cy.get('.mt-2 > p').should('have.css', 'font-size').and('eq', '14px');
        cy.get('.mt-2 > p').should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/);

    //Verification for close button
        cy.get('.close').should('be.visible')
        cy.get('.close').click();

        cy.get('.bv-no-focus-ring > .col-md-12').invoke('text').should('contain', 'ファイルをここにドラッグするか、ファイルを選択してください。')
        cy.get('.bv-no-focus-ring > .col-md-12').should('be.visible')
        cy.get('.bv-no-focus-ring > .col-md-12').should('have.css', 'color').and('eq','rgb(170, 170, 170)')
        cy.get('.bv-no-focus-ring > .col-md-12').should('have.css', 'font-size').and('eq', '14px');
        cy.get('.bv-no-focus-ring > .col-md-12').should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/);

    //Verification for Posted by
        cy.get('.col-md-10 > .label-color').invoke('text').should('contain', '投稿者')
        cy.get('.col-md-10 > .label-color').should('be.visible')
        cy.get('.col-md-10 > .label-color').should('have.css', 'color').and('eq','rgb(92, 104, 115)')
        cy.get('.col-md-10 > .label-color').should('have.css', 'font-size').and('eq', '14px');
        cy.get('.col-md-10 > .label-color').should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/);

    //Verification for Category 
        cy.get('.m-0').invoke('text').should('contain', 'カテゴリー')
        cy.get('.m-0').should('be.visible')
        cy.get('.m-0').should('have.css', 'color').and('eq','rgb(56, 149, 211)')
        cy.get('.m-0').should('have.css', 'font-size').and('eq', '14px');
        cy.get('.m-0').should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/);
        cy.get('.m-0').click();

    //Verification for checkbox
        cy.get('.form-input > .mb-1').should('be.visible')
        cy.get('.form-input > .mb-1').should('not.be.checked')

    //Verification for hamberger icon
        cy.get('.mr-2').should('be.visible')

    //Verification for input field
        cy.get('#__BVID__162').should('be.visible')

    //Verification for cross mark
        // cy.get('.fa-times-circle').should('be.visible')
        // cy.get('.fa-times-circle').first().click();

    //Verification for Release date
        cy.get('.mb-3 > .vertical-align > .label-color').invoke('text').should('contain', '公開日時')
        cy.get('.mb-3 > .vertical-align > .label-color').should('be.visible')
        cy.get('.mb-3 > .vertical-align > .label-color').should('have.css', 'color').and('eq','rgb(92, 104, 115)')
        cy.get('.mb-3 > .vertical-align > .label-color').should('have.css', 'font-size').and('eq', '14px');
        cy.get('.mb-3 > .vertical-align > .label-color').should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/);

    //Verification for Public status
        cy.get('.mb-2 > .vertical-align > .label-color').invoke('text').should('contain', '公開状態')
        cy.get('.mb-2 > .vertical-align > .label-color').should('be.visible')
        cy.get('.mb-2 > .vertical-align > .label-color').should('have.css', 'color').and('eq','rgb(0, 0, 0)')
        cy.get('.mb-2 > .vertical-align > .label-color').should('have.css', 'font-size').and('eq', '14px');
        cy.get('.mb-2 > .vertical-align > .label-color').should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/);

    //Verification for compress button
        cy.get('.m-1').should('be.visible')
        cy.get('.m-1').first().click();

    //Verification for Add button
    cy.xpath(addButton).invoke('text').should('contain', 'カテゴリーを追加')
    cy.xpath(addButton).should('have.css', 'color').and('eq','rgb(255, 255, 255)')
    cy.xpath(addButton).should('have.css', 'font-size').and('eq', '14px');
    cy.xpath(addButton).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/);

    cy.xpath(addButton).first().click();

    //Verification for Save draft button
    cy.xpath(saveDraft).invoke('text').should('contain', '下書き保存')
    cy.xpath(saveDraft).should('have.css', 'color').and('eq','rgb(255, 255, 255)')
    cy.xpath(saveDraft).should('have.css', 'font-size').and('eq', '14px');
    cy.xpath(saveDraft).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/);

    //Verification for Update button
    cy.xpath(updateButton).invoke('text').should('contain', '更新')
    cy.xpath(updateButton).should('have.css', 'color').and('eq','rgb(255, 255, 255)')
    cy.xpath(updateButton).should('have.css', 'font-size').and('eq', '14px');
    cy.xpath(updateButton).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/);

        
       
})

})
