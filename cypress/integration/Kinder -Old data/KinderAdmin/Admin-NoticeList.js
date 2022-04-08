/// <reference types="Cypress" />
import chaiColors from 'chai-colors'
chai.use(chaiColors)
//import { URL } from ' ../lib/env.js '
//Cypress.env("url");

require('cypress-xpath')


var noticeMainMenu = '//div[contains(text(),"お知らせ")]';
var noticeListMenu = 'a[href="#/notification"]';
var noticeCreateButton = '//a[contains(text(),"新規追加")]';   //Xpath
var screenTitle = "//a[contains(text(),'お知らせ一覧')]";
var searchBox = '[placeholder="お知らせ検索"]';
var searhButton = '.fa-search';
var detailSearch = '//button[contains(text(),"詳細検索")]';   //xpath
var filterPopUp = '//form[@class="b-dropdown-form"]';
var createNoticeButton = '.px-4'

describe('Notice list', () => {
    it('Verify Company list UI', () => {
        cy.login();
        cy.xpath(noticeMainMenu).click();
        cy.xpath(noticeMainMenu).invoke('text').should('contain', 'お知らせ')
        cy.xpath(noticeMainMenu).should('have.css', 'color').and('eq','rgb(255, 255, 255)')
        cy.xpath(noticeMainMenu).should('have.css', 'font-size').and('eq', '14px');

        cy.get(noticeListMenu).click();
        cy.get(noticeListMenu).invoke('text').should('contain', 'お知らせ一覧')
        cy.get(noticeListMenu).should('have.css', 'color').and('eq','rgb(255, 255, 255)')
        cy.get(noticeListMenu).should('have.css', 'font-size').and('eq', '14px');

        cy.xpath(screenTitle).invoke('text').should('contain','お知らせ一覧');
        cy.xpath(screenTitle).should('be.visible');
        cy.xpath(screenTitle).should('have.css', 'color').and('eq','rgb(255, 255, 255)');
        cy.xpath(screenTitle).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/);
        cy.xpath(screenTitle).should('have.css', 'font-size').and('eq', '14px')
        cy.get(2000);


        //Verify search Box
        cy.get(searchBox).should("be.visible")
        cy.get(2000);

        //Verify create Button
        //cy.xpath(companyCreateButton).should("be.enabled")
        // cy.xpath(noticeCreateButton).invoke('text').should('contain', '新規追加')
        // cy.xpath(noticeCreateButton).should('have.css', 'color').and('eq','rgb(255, 255, 255)')
        // cy.xpath(noticeCreateButton).should('have.css', 'font-size').and('eq', '14px');

        cy.xpath(detailSearch).should("be.visible")
        cy.xpath(detailSearch).invoke('text').should('contain', '詳細検索')
        cy.xpath(detailSearch).should('have.css', 'color').and('eq','rgb(56, 149, 211)')
        cy.xpath(detailSearch).should('have.css', 'font-size').and('eq', '14px');



         //Verify column header Font,Size and Color
        cy.get('th[role="columnheader"]').nextUntil('[class="th-width-dots"]').each(($li, index, $lis) => {
        cy.get($li).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
        cy.get($li).should('have.css', 'color').and('eq','rgb(92, 104, 115)')
        cy.get($li).should('have.css', 'font-size').and('eq', '12px');
           
          });
        //Verify Coloumn header
        cy.get('[aria-colindex="1"] > div').should('be.visible') 
        cy.get('[aria-colindex="2"] > div').invoke('text').should('contain', 'タイトル')
        cy.get('[aria-colindex="3"] > div').invoke('text').should('contain', 'カテゴリー')
        cy.get('[aria-colindex="4"] > div').invoke('text').should('contain', '公開状態')
        cy.get('[aria-colindex="5"] > div').invoke('text').should('contain', '投稿ユーザー')
        cy.get('[aria-colindex="6"] > div').invoke('text').should('contain', '公開日時')

        cy.get('thead > tr > [aria-colindex="1"] > .custom-control').should('be.visible')

        // cy.get('#dropdown-form__BV_toggle_').invoke('text').should('contain', '一括処理') 
        // cy.get('#dropdown-form__BV_toggle_').should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
        // cy.get('#dropdown-form__BV_toggle_').should('have.css', 'color').and('eq','rgb(92, 104, 115)')
        // cy.get('#dropdown-form__BV_toggle_').should('have.css', 'font-size').and('eq', '12px');
        
        cy.get(2000);
        //Verify Filter pop up

    })

      it('Verify filter Search',()=>{

        cy.xpath(detailSearch).click()
        cy.xpath(filterPopUp).should("be.visible");

        cy.get('.row.mt-2 > .col-md-4').invoke('text').should('contain', 'タイトル') 
        cy.get(':nth-child(2) > .col-md-4').invoke('text').should('contain', 'カテゴリー') 
        cy.get('.col-md-4 > span').invoke('text').should('contain', '公開状態') 
        cy.get(':nth-child(4) > .col-md-4').invoke('text').should('contain', '投稿者') 

        cy.get('.register-lables').each(($el,index,$list)=>{
          cy.get('.row.mt-2 > .col-md-4').should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
          cy.get('.row.mt-2 > .col-md-4').should('have.css', 'color').and('eq','rgb(92, 104, 115)')
          cy.get('.row.mt-2 > .col-md-4').should('have.css', 'font-size').and('eq', '12px');

        })

        cy.get("#dropdown-1__BV_toggle_").click();

        cy.get(".dropdown-item").invoke('text').should('contain', '編集')
        cy.get('.dropdown-item').should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
        cy.get('.dropdown-item').should('have.css', 'color').and('eq','rgb(35, 40, 44)')
        cy.get('.dropdown-item').should('have.css', 'font-size').and('eq', '14px');

        //cy.get(".btn pull-right mb-2 btn-primary").click();

        cy.get(createNoticeButton).first().click()
        cy.wait(1000);

      })
        

    })



