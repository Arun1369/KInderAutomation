/// <reference types="Cypress" />
import chaiColors from 'chai-colors'
chai.use(chaiColors)
//import { URL } from ' ../lib/env.js '
//Cypress.env("url");

require('cypress-xpath')
var productMainMenu = "//div[contains(text(),'商品マスタ')]";
var productRegistration = 'a[href="#/product/new"]';
var screenTitle = "//a[contains(text(),'商品情報')]";
var createButton = '.px-4';
var save = 'a[href="#/admin/product"]';


describe('Product', () => {
    it('Verify Product Registration UI', () => {
        cy.login();
        cy.xpath(productMainMenu).click()
        .should('be.visible');
        cy.xpath(productMainMenu).invoke('text').should('contain', '商品マスタ');
        cy.xpath(productMainMenu).should('have.css', 'color').and('eq','rgb(255, 255, 255)');
        cy.xpath(productMainMenu).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/);
        cy.xpath(productMainMenu).should('have.css', 'font-size').and('eq', '14px')
;

        cy.get(productRegistration).first().click()
        .should('be.visible');
        cy.get(productRegistration).invoke('text').should('contain', '商品登録');
        cy.get(productRegistration).should('have.css', 'color').and('eq','rgb(255, 255, 255)');
        cy.get(productRegistration).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/);
        cy.get(productRegistration).should('have.css', 'font-size').and('eq', '14px')
        cy.get(2000);

        cy.xpath(screenTitle).invoke('text').should('contain','商品情報');
        cy.xpath(screenTitle).should('be.visible');
        cy.xpath(screenTitle).should('have.css', 'color').and('eq','rgb(47, 53, 58)');
        cy.xpath(screenTitle).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/);
        cy.xpath(screenTitle).should('have.css', 'font-size').and('eq', '14px')
        cy.get(2000);



        cy.get(':nth-child(2) > .col-md-2').invoke('text').should('contain', '商品名')
        cy.get(':nth-child(2) > .col-md-2').should('be.visible')

        cy.get(':nth-child(3) > .col-md-2').invoke('text').should('contain', '基本契約内容')
        cy.get(':nth-child(3) > .col-md-2').should('be.visible')

        cy.get(':nth-child(3) > .col-md-1').invoke('text').should('contain', '金額')
        cy.get(':nth-child(3) > .col-md-1').should('be.visible')

        cy.get(':nth-child(4) > .col-md-2').invoke('text').should('contain', 'オプション内容')
        cy.get(':nth-child(4) > .col-md-2').should('be.visible')

        cy.get(':nth-child(4) > .col-md-1').invoke('text').should('contain', '金額')
        cy.get(':nth-child(4) > .col-md-1').should('be.visible')

        cy.get('.black-card > :nth-child(1) > .mt-2').invoke('text').should('contain', '割引キャンペーン')
        cy.get('.black-card > :nth-child(1) > .mt-2').should('be.visible')

        cy.get('#ctable > :nth-child(1) > :nth-child(1)').invoke('text').should('contain', '期間')
        cy.get('#ctable > :nth-child(1) > :nth-child(1)').should('be.visible')
        cy.get('.icon-date > path').should('be.visible')
        cy.get('.range-separator').should('be.visible')

        cy.get('.pull-right > .register-lables').invoke('text').should('contain', '登録日：')
        cy.get('.pull-right > .register-lables').should('be.visible')

        cy.get('#ctable > :nth-child(1) > :nth-child(2)').invoke('text').should('contain', 'キャンペーン名')
        cy.get('#ctable > :nth-child(1) > :nth-child(2)').should('be.visible')

        cy.get('#ctable > :nth-child(1) > :nth-child(3)').invoke('text').should('contain', '割引金額')
        cy.get('#ctable > :nth-child(1) > :nth-child(3)').should('be.visible')

        cy.get(createButton).first().click()
        cy.wait(1000);

        //cy.get(':nth-child(3) > :nth-child(5) > .fa').should('be.visible')
        cy.get(':nth-child(3) > :nth-child(5) > .fa').click()
        
        cy.get(':nth-child(4) > .mt-2').first().should('not.be.checked')
       
        cy.get(':nth-child(6) > .col-md-2 > span').invoke('text').should('contain', '代理店報酬額')
        cy.get(':nth-child(6) > .col-md-2 > span').should('be.visible')

        cy.get('.mb-4 > .bv-no-focus-ring > .d-flex > .mt-1').should('be.visible')
        cy.get(':nth-child(4) > .bv-no-focus-ring > .d-flex > .mt-1').should('be.visible')

        cy.get(':nth-child(7) > .col-md-2 > span').invoke('text').should('contain', '払込方法')
        cy.get(':nth-child(7) > .col-md-2 > span').should('be.visible')

        cy.get(':nth-child(8) > .col-md-2 > span').invoke('text').should('contain', '支払方法')
        cy.get(':nth-child(8) > .col-md-2 > span').should('be.visible')

        cy.get(':nth-child(9) > .col-md-2 > span').invoke('text').should('contain', '備考')
        cy.get(':nth-child(9) > .col-md-2 > span').should('be.visible')

        //Verify First option is selected 
        cy.get('[type="radio"]').first().should('be.checked') 


        cy.get(':nth-child(1) > .custom-control-label > span').invoke('text').should('contain', '利用可')
        cy.get(':nth-child(1) > .custom-control-label > span').should('have.css', 'color').and('eq','rgb(0, 0, 0)')
        cy.get(':nth-child(1) > .custom-control-label > span').should('have.css', 'font-size').and('eq', '14px')
        cy.get(':nth-child(1) > .custom-control-label > span').should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
        cy.get(':nth-child(2) > .custom-control-label > span').invoke('text').should('contain', '利用停止')
        cy.get(':nth-child(2) > .custom-control-label > span').should('have.css', 'color').and('eq','rgb(0, 0, 0)')
        cy.get(':nth-child(2) > .custom-control-label > span').should('have.css', 'font-size').and('eq', '14px')
     
        cy.get('.register-lables').each(($li, index, $lis) => {
        cy.get($li).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
        cy.get($li).should('have.css', 'color').and('eq','rgb(92, 104, 115)')
        cy.get($li).should('have.css', 'font-size').and('eq', '12px')
    
         });

        cy.get(save).first().click()

    })

})