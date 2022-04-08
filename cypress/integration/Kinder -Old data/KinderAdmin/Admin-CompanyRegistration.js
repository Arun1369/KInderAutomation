/// <reference types="Cypress" />
import chaiColors from 'chai-colors'
chai.use(chaiColors)
//import { URL } from ' ../lib/env.js '
//Cypress.env("url");

require('cypress-xpath')
var companyMainMenu = "//div[contains(text(),'登録園・企業')]";
var companyRegistration = 'a[href="#/company/new"]';
var screenTitle = "//a[contains(text(),'企業情報')]";
var createButton = '.px-4';
var apply = 'a[href="#/admin/company/"]';
var saveDraft = '.col-md-3>button';
var lebel = '.register-lables';


describe('Company', () => {
    it('Verify Company Registration UI', () => {
        cy.login();
    //Verification for Main menu
        cy.xpath(companyMainMenu).click()
        .should('be.visible');
        cy.xpath(companyMainMenu).invoke('text').should('contain', '登録園・企業');
        cy.xpath(companyMainMenu).should('have.css', 'color').and('eq','rgb(255, 255, 255)');
        cy.xpath(companyMainMenu).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/);
        cy.xpath(companyMainMenu).should('have.css', 'font-size').and('eq', '14px');

    //Verification for sub menu
        cy.get(companyRegistration).first().click()
        .should('be.visible');
        cy.get(companyRegistration).invoke('text').should('contain', '企業登録');
        cy.get(companyRegistration).should('have.css', 'color').and('eq','rgb(255, 255, 255)');
        cy.get(companyRegistration).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/);
        cy.get(companyRegistration).should('have.css', 'font-size').and('eq', '14px')
        cy.get(2000);

    //Verification for Screen title
        cy.xpath(screenTitle).invoke('text').should('contain','企業情報');
        cy.xpath(screenTitle).should('be.visible');
        cy.xpath(screenTitle).should('have.css', 'color').and('eq','rgb(47, 53, 58)');
        cy.xpath(screenTitle).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/);
        cy.xpath(screenTitle).should('have.css', 'font-size').and('eq', '14px')
        cy.get(2000);

    //Verification for Page title
    cy.get('h5').invoke('text').should('contain','企業情報');
    cy.get('h5').should('be.visible');
    cy.get('h5').should('have.css', 'color').and('eq','rgb(0, 0, 0)');
    cy.get('h5').should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/);
    cy.get('h5').should('have.css', 'font-size').and('eq', '17.5px')
    cy.get(2000);
        

    //Verification for Input data field lebel
        cy.get(lebel).eq(0).invoke('text').should('contain', '企業名')
        cy.get(lebel).eq(1).invoke('text').should('contain', '住所')
        cy.get('#__BVID__186').should('contain.text', '北海道')
        cy.get(lebel).eq(2).invoke('text').should('contain', '電話番号')
        cy.get(lebel).eq(3).invoke('text').should('contain', 'メールアドレス')
        cy.get(lebel).eq(4).invoke('text').should('contain', '契約者名')       
        cy.get(lebel).eq(5).invoke('text').should('contain', '契約者連絡先')
        cy.get(lebel).eq(6).invoke('text').should('contain', '担当者名')
        cy.get(lebel).eq(7).invoke('text').should('contain', '担当者連絡先')
        cy.get(lebel).eq(8).invoke('text').should('contain', '所属園ログインアカウント')
        cy.get(lebel).eq(9).invoke('text').should('contain', '利用ステータス')
        cy.get(lebel).each(($li, index, $lis) => {
            cy.get($li).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
            cy.get($li).should('have.css', 'color').and('eq','rgb(92, 104, 115)')
            cy.get($li).should('have.css', 'font-size').and('eq', '12px')
          });


    //Verification for Create button
        cy.get(createButton).should('be.visible')
        cy.get(createButton).should('have.css', 'color').and('eq','rgb(255, 255, 255)')
        cy.get(createButton).should('have.css', 'font-size').and('eq', '14px')
        cy.get(createButton).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
        cy.get(createButton).first().click()
        cy.wait(1000);

    //Verification for cross mark after adding the field
        cy.get(':nth-child(3) > :nth-child(5) > .fa').first().click()
        //cy.get(':nth-child(3) > :nth-child(4) > .fa').should('be.visible')

        cy.get('.card-lables').eq(0).invoke('text').should('contain', '名前')
        cy.get('.card-lables').eq(1).invoke('text').should('contain', 'ログインID(メールアドレス)')
        cy.get('.card-lables').eq(2).invoke('text').should('contain', 'パスワード')
        cy.get('.card-lables').eq(3).invoke('text').should('contain', '担当園')
        cy.get('.card-lables').each(($li, index, $lis) => {
        cy.get($li).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
        cy.get($li).should('have.css', 'color').and('eq','rgb(92, 104, 115)')
        cy.get($li).should('have.css', 'font-size').and('eq', '12px')

        });
        
    //Verification for radio button First option is selected 
        cy.get('[type="radio"]').first().should('be.checked') 
        cy.get(':nth-child(1) > .custom-control-label > span').invoke('text').should('contain', '利用可')
        cy.get(':nth-child(1) > .custom-control-label > span').should('have.css', 'color').and('eq','rgb(0, 0, 0)')
        cy.get(':nth-child(1) > .custom-control-label > span').should('have.css', 'font-size').and('eq', '14px')
        cy.get(':nth-child(1) > .custom-control-label > span').should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
        cy.get(':nth-child(2) > .custom-control-label > span').invoke('text').should('contain', '利用停止')
        cy.get(':nth-child(2) > .custom-control-label > span').should('have.css', 'color').and('eq','rgb(0, 0, 0)')
        cy.get(':nth-child(2) > .custom-control-label > span').should('have.css', 'font-size').and('eq', '14px')

    //Verification for Status
          cy.get('span.pull-right').invoke('text').should('contain', 'ステータス:承認待ち')
          cy.get('span.pull-right').should('be.visible')
          cy.get('span.pull-right').should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
          cy.get('span.pull-right').should('have.css', 'color').and('eq','rgb(0, 0, 0)')
          cy.get('span.pull-right').should('have.css', 'font-size').and('eq', '14px');

          cy.get('.active > .title').invoke('text').should('contain', '下書き')
          cy.get('.active > .title').should('be.visible')
          cy.get('.active > .title').should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
          cy.get('.active > .title').should('have.css', 'color').and('eq','rgb(0, 0, 0)')
          cy.get('.active > .title').should('have.css', 'font-size').and('eq', '11px');


          cy.get(':nth-child(2) > .title').invoke('text').should('contain', '申請中')
          cy.get(':nth-child(2) > .title').should('be.visible')
          cy.get(':nth-child(2) > .title').should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
          cy.get(':nth-child(2) > .title').should('have.css', 'color').and('eq','rgb(0, 0, 0)')
          cy.get(':nth-child(2) > .title').should('have.css', 'font-size').and('eq', '11px');


          cy.get(':nth-child(3) > .title').invoke('text').should('contain', '承認済')
          cy.get(':nth-child(3) > .title').should('be.visible')
          cy.get(':nth-child(3) > .title').should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
          cy.get(':nth-child(3) > .title').should('have.css', 'color').and('eq','rgb(0, 0, 0)')
          cy.get(':nth-child(3) > .title').should('have.css', 'font-size').and('eq', '11px');

     //Verification for Save draft button
        cy.get(saveDraft).should('be.visible')
        cy.get(saveDraft).invoke('text').should('contain', '下書き保存')
        cy.get(saveDraft).should('have.css', 'color').and('eq','rgb(56, 149, 211)')
        cy.get(saveDraft).should('have.css', 'font-size').and('eq', '14px')
        cy.get(saveDraft).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
        cy.get(saveDraft).first().click().should('be.visible');

    //Verification for apply button
        cy.get(apply).should('be.visible')
        cy.get(apply).invoke('text').should('contain', '申請する')
        cy.get(apply).should('have.css', 'color').and('eq','rgb(255, 255, 255)')
        cy.get(apply).should('have.css', 'font-size').and('eq', '14px')
        cy.get(apply).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
        cy.get(apply).first().click()
            
    })

})