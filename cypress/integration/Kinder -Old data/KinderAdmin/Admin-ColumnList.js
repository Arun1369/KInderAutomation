/// <reference types="Cypress" />
import chaiColors from 'chai-colors'
chai.use(chaiColors)
//import { URL } from ' ../lib/env.js '
//Cypress.env("url");

require('cypress-xpath')


var columnMainMenu = '//div[contains(text(),"コンテンツ管理")]';
var columnListMenu = 'a[href="#/content/post"]';
var columnCreateButton = '//a[contains(text(),"新規追加")]';   //Xpath
var searchBox = '[placeholder="コラム検索"]';
// var searhButton = '.fa-search';
 var filterOption = '//button[contains(text(),"詳細検索")]';   //xpath
 var filterPopUp = '//form[@class="b-dropdown-form"]';
var searchOption = '//button[contains(text(),"検索")]';
var batchProcessing = '//button[contains(text(),"一括処理")]';
var beApplicable = '//button[contains(text(),"適用")]';

describe('Column list', () => {
    it('Verify Column list UI', () => {
        cy.login();

    //Verification for Main side menu
        cy.xpath(columnMainMenu).click();
        cy.xpath(columnMainMenu).invoke('text').should('contain', 'コンテンツ管理')
        cy.xpath(columnMainMenu).should('have.css', 'color').and('eq','rgb(255, 255, 255)')
        cy.xpath(columnMainMenu).should('have.css', 'font-size').and('eq', '14px');

    //Verifcation for sub side menu
        cy.get(columnListMenu).first().click()
        cy.get(columnListMenu).invoke('text').should('contain', 'コラム')
        cy.get(columnListMenu).should('have.css', 'color').and('eq','rgb(255, 255, 255)')
        cy.get(columnListMenu).should('have.css', 'font-size').and('eq', '14px')  
        cy.wait(1000)

    //Verifcation for Screen title
        cy.get('.kinder-label').should('be.visible')
        cy.get('.kinder-label').invoke('text').should('contain', 'コラム一覧')
        cy.get('.kinder-label').should('have.css', 'color').and('eq','rgb(0, 0, 0)')
        cy.get('.kinder-label').should('have.css', 'font-size').and('eq', '17.5px')

    //Verify search field
        cy.get(searchBox).should("be.visible")

    //Verification for Check box
        cy.get('thead > tr > [aria-colindex="1"]').should('be.visible')

     //Verification for Column create Button
        cy.xpath(columnCreateButton).invoke('text').should('contain', '新規追加')
        cy.xpath(columnCreateButton).should('have.css', 'color').and('eq','rgb(255, 255, 255)')
        cy.xpath(columnCreateButton).should('have.css', 'font-size').and('eq', '14px');
        cy.xpath(columnCreateButton).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
        
    //Verification for advance search button
        cy.xpath(filterOption).should("be.visible")
        cy.xpath(filterOption).invoke('text').should('contain', '詳細検索')
        cy.xpath(filterOption).should('have.css', 'color').and('eq','rgb(56, 149, 211)')
        cy.xpath(filterOption).should('have.css', 'font-size').and('eq', '14px');
        cy.xpath(filterOption).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)

      
        

     //Verify column header Font,Size and Color
        cy.get('th[role="columnheader"]').nextUntil('[class="th-width-dots"]').each(($li, index, $lis) => {
        cy.get($li).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
        cy.get($li).should('have.css', 'color').and('eq','rgb(92, 104, 115)')
        cy.get($li).should('have.css', 'font-size').and('eq', '12px');
           
    });
          
    //Verify Coloumn header
        cy.get('[aria-colindex="2"] > div').invoke('text').should('contain', 'タイトル') 
        cy.get('[aria-colindex="3"] > div').invoke('text').should('contain', 'カテゴリー')
        cy.get('[aria-colindex="4"] > div').invoke('text').should('contain', '公開状態')
        cy.get('[aria-colindex="5"] > div').invoke('text').should('contain', '投稿ユーザー')
        cy.get('[aria-colindex="6"] > div').invoke('text').should('contain', '公開日時')

    //Verification for Posting user
        cy.get('#__BVID__170').invoke('text').should('contain', '投稿ユーザー') 
        cy.get('#__BVID__170').should("be.visible")
        cy.get('#__BVID__170').should('have.css', 'color').and('eq','rgb(0, 0, 0)')
        cy.get('#__BVID__170').should('have.css', 'font-size').and('eq', '14px');
        cy.get('#__BVID__170').should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
        
    //Verification for Ellipsis(three dots) vertically
        cy.get('[aria-rowindex="1"] > .th-width-dots').should('be.visible')
        cy.get('[aria-rowindex="1"] > .th-width-dots').click()
        
    //Verification for Edit and delete after clicking on ellipsis
        cy.get('.dropdown-item').should('be.visible')
        cy.get('.dropdown-item').should('have.css', 'color').and('eq','rgb(35, 40, 44)')
        cy.get('.dropdown-item').should('have.css', 'font-size').and('eq', '14px');
        cy.get('.dropdown-item').should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)

    //Verification for Pagination displayed
        cy.get('.pull-right > .input-group > :nth-child(1)').invoke('text').should('contain', '表示件数') 
        cy.get('.pull-right > .input-group > :nth-child(1)').should('be.visible')
        cy.get('.pull-right > .input-group > :nth-child(1)').should('have.css', 'color').and('eq','rgb(0, 0, 0)')
        cy.get('.pull-right > .input-group > :nth-child(1)').should('have.css', 'font-size').and('eq', '14px');
        cy.get('.pull-right > .input-group > :nth-child(1)').should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)

    //Verification for pagination next
        cy.get(':nth-child(2) > .mt-1').invoke('text').should('contain', '移動') 
        cy.get(':nth-child(2) > .mt-1').should('be.visible')
        cy.get(':nth-child(2) > .mt-1').should('have.css', 'color').and('eq','rgb(0, 0, 0)')
        cy.get(':nth-child(2) > .mt-1').should('have.css', 'font-size').and('eq', '14px');
        cy.get(':nth-child(2) > .mt-1').should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)

    //Verification for Pagination number dispalyed in first page
        cy.get('#__BVID__255').should('be.visible')

    //Verification for Pagination-First page
        cy.get('#__BVID__256').should('be.visible')

    //Verification for Pagination 0/0
        cy.get('.input-group > .pr-2').should('be.visible')
    
    //Verification for selection advance search button
        cy.xpath(filterOption).first().click();

    //Verification for color, size and font of filter label text
        cy.get('.register-lables').each(($li, index, $lis) => {
            cy.get($li).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
            cy.get($li).should('have.css', 'color').and('eq','rgb(92, 104, 115)')
            cy.get($li).should('have.css', 'font-size').and('eq', '12px');
          });

    //Verify filter label text
           cy.get('.register-lables').eq(1).invoke('text').should('contain', 'タイトル')
           cy.get('.register-lables').eq(2).invoke('text').should('contain', 'カテゴリ')
           cy.get('.register-lables').eq(3).invoke('text').should('contain', '公開状態')
           cy.get('.register-lables').eq(4).invoke('text').should('contain', '投稿者')

    //Verification for search button in advance search
          cy.xpath(searchOption).should("be.visible")
          cy.xpath(searchOption).invoke('text').should('contain', '検索')
          cy.xpath(searchOption).should('have.css', 'color').and('eq','rgb(56, 149, 211)')
          cy.xpath(searchOption).should('have.css', 'font-size').and('eq', '14px');
          cy.xpath(searchOption).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)

    //Verifcation for Batch Processing button
          cy.xpath(batchProcessing).should("be.visible")
          cy.xpath(batchProcessing).invoke('text').should('contain', '一括処理')
          cy.xpath(batchProcessing).should('have.css', 'color').and('eq','rgb(35, 40, 44)')
          cy.xpath(batchProcessing).should('have.css', 'font-size').and('eq', '14px');
          cy.xpath(batchProcessing).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)

    //Verification for click of batch processing and popup
          cy.xpath(batchProcessing).first().click();
          cy.xpath(filterPopUp).should("be.visible");

    //Verification for pop up check box
          cy.get('#radio-slots-kind > .custom-control').should('not.be.checked');

    //Verification for content in batch processing
          cy.get('.custom-control-label > span').should("be.visible")
          cy.get('.custom-control-label > span').invoke('text').should('contain', 'チェックした記事を削除')
          cy.get('.custom-control-label > span').should('have.css', 'color').and('eq','rgb(0, 0, 0)')
          cy.get('.custom-control-label > span').should('have.css', 'font-size').and('eq', '14px');
          cy.get('.custom-control-label > span').should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)   
          
    //Verification for be applicable button
          cy.xpath(beApplicable).should("be.visible")
          cy.xpath(beApplicable).invoke('text').should('contain', '適用')
          cy.xpath(beApplicable).should('have.css', 'color').and('eq','rgb(255, 255, 255)')
          cy.xpath(beApplicable).should('have.css', 'font-size').and('eq', '14px');
          cy.xpath(beApplicable).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
          cy.xpath(beApplicable).first().click();


          cy.xpath(columnCreateButton).first().should("be.visible")

        })


        it ('Verify Filter pop up', ()=>{
            cy.xpath(filterOption).click()
            cy.xpath(filterPopUp).should("be.visible");
    
            cy.get('.row.mt-2 > .col-md-4').invoke('text').should('contain', 'タイトル') 
            cy.get(':nth-child(2) > .col-md-4').invoke('text').should('contain', 'カテゴリー') 
            cy.get('.col-md-4 > span').invoke('text').should('contain', '公開状態') 
            cy.get(':nth-child(4) > .col-md-4').invoke('text').should('contain', '投稿者') 
            
            cy.get('.register-lables').each(($el,index,$li)=>{
            cy.get($li).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
            cy.get($li).should('have.css', 'color').and('eq','rgb(92, 104, 115)')
            cy.get($li).should('have.css', 'font-size').and('eq', '12px');
              
          

        })

    })
})