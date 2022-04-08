/// <reference types="Cypress" />
import chaiColors from 'chai-colors'
chai.use(chaiColors)
//import { URL } from ' ../lib/env.js '
//Cypress.env("url");

require('cypress-xpath')
var dashabordLabel = 'h5';
var createButton = '.px-4';
var prodcutMaster = '//div[contains(text(),"商品マスタ")]';
var productList = '[href="#/product"]';
var searchBox = '[class="input-group search_bar_dashboard"]';
var filterOption = '//button[contains(text(),"詳細検索")]';
var createButton = '//button[contains(text(),"新規追加")]';
var filterPOPUP = '[class="b-dropdown-form"]';
var saveFilterOption = '//button[contains(@class,"btn pull-right mb-2 btn-primary")]'




describe('Product List', () => {
    it('Verify Prodcut list UI', () => {
        cy.login();
        //Verify the menus text, font ,color and size 
        cy.xpath(prodcutMaster).invoke('text').should('contain', ' 商品マスタ')
        cy.xpath(prodcutMaster).should('have.css', 'color').and('eq','rgb(255, 255, 255)')
        cy.xpath(prodcutMaster).should('have.css', 'font-size').and('eq', '14px')  
        cy.xpath(prodcutMaster).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
        cy.get(productList).invoke('text').should('contain', '商品一覧')
        cy.get(productList).should('have.css', 'color').and('eq','rgb(255, 255, 255)')
        cy.get(productList).should('have.css', 'font-size').and('eq', '14px')
        cy.get(productList).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
        cy.xpath(prodcutMaster).click();
        cy.get(productList).click();
        cy.wait(2000);
        cy.get(dashabordLabel).invoke('text').should('contain', '商品一覧')
        //Search field is to be visible
        cy.get(searchBox).should("be.visible")
        //Verify all column heaader font

        cy.get('th[role="columnheader"]').nextUntil('[class="th-width-dots"]').each(($li, index, $lis) => {
            cy.get($li).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
            cy.get($li).should('have.css', 'color').and('eq','rgb(92, 104, 115)')
            cy.get($li).should('have.css', 'font-size').and('eq', '12px');
           
          });
          //Verify all the column header text 

          cy.get('[aria-colindex="2"] > div').invoke('text').should('contain', '商品名')
          cy.get('[aria-colindex="3"] > div').invoke('text').should('contain', '契約内容')
          cy.get('[aria-colindex="4"] > div').invoke('text').should('contain', 'オプション')
          cy.get('[aria-colindex="5"] > div').invoke('text').should('contain', '登録日')
          cy.get('[aria-colindex="6"] > div').invoke('text').should('contain', '金額')
          //Verify create button font

          cy.xpath(createButton).invoke('text').should('contain', '新規追加')
          cy.xpath(createButton).should('have.css', 'color').and('eq','rgb(255, 255, 255)')
          cy.xpath(createButton).should('have.css', 'font-size').and('eq', '14px');

        })
          //Verify filter option to be displayed
      it('Verify Prodcut Details Search', () => {


          cy.xpath(filterOption).click();
          //Verify filter pop up
          cy.get(filterPOPUP).should("be.visible")
          //Verify filter labels
          cy.get('.register-lables').nextUntil('[class="th-width-dots"]').each(($li, index, $lis) => {
            cy.get($li).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
            cy.get($li).should('have.css', 'color').and('eq','rgb(0, 0, 0)')
            cy.get($li).should('have.css', 'font-size').and('eq', '14px');
           
          });

          //Verify filter label text
           cy.get('.register-lables').eq(0).invoke('text').should('contain', '商品名')
           cy.get('.register-lables').eq(1).invoke('text').should('contain', 'キャンペーン名')
           cy.get('.register-lables').eq(2).invoke('text').should('contain', '利用ステータス')
          //Verify filter dropdown
           cy.get('[type="radio"]').first().should('be.checked') 


           cy.xpath(saveFilterOption).invoke('text').should('contain', '検索')
           cy.xpath(saveFilterOption).should('have.css', 'color').and('eq','rgb(255, 255, 255)')
           cy.xpath(saveFilterOption).should('have.css', 'font-size').and('eq', '14px');

        })

    
})
