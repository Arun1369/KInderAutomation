/// <reference types="Cypress" />
import chaiColors from 'chai-colors'
chai.use(chaiColors)
//import { URL } from ' ../lib/env.js '
//Cypress.env("url");

require('cypress-xpath')


var kinderMainMenu = '//div[contains(text(),"登録園・企業")]';
var kinderCreatemenu = '//a[contains(text(),"園登録")]';
var companyListMenu = '//a[contains(text(),"企業一覧")]';
var companyCreateButton = '//a[contains(text(),"新規追加")]';   //Xpath
var searchBox = '[placeholder="企業検索"]';
var searhButton = '.fa-search';
var filterOption = '//button[contains(text(),"詳細検索")]';   //xpath
var filterPopUp = '//form[@class="b-dropdown-form"]';

var filter_Companyname = '(//span[contains(text(),"企業名")])[3]';
var filter_Affiliationname = '(//span[contains(text(),"所属園名")])[2]';
var filter_mailaddress = '(//span[contains(text(),"メールアドレス")])[1]';
var filter_Streetaddress = '(//span[contains(text(),"住所")])[1]';
var filter_Usagestatus ='(//div[contains(text(),"利用ステータス")])[1]';
var filterApplayButton = '//button[contains(text(),"検索")])';




describe('Company list', () => {
    it('Verify Company list UI', () => {
        cy.login();
        cy.xpath(kinderMainMenu).click();
        cy.xpath(companyListMenu).invoke('text').should('contain', '企業一覧')
        cy.xpath(companyListMenu).should('have.css', 'color').and('eq','rgb(255, 255, 255)')
        cy.xpath(companyListMenu).should('have.css', 'font-size').and('eq', '14px');

       // cy.xpath(kinderCreatemenu).click();
        cy.xpath(companyListMenu).first().click()
        cy.wait(2000);
        cy.get('h5').invoke('text').should('contain', '企業一覧')
        cy.get('h5').should('have.css', 'color').and('eq','rgb(0, 0, 0)')
        cy.get('h5').should('have.css', 'font-size').and('eq', '17.5px')  
        cy.get('h5').should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
        //Verify search Box
        cy.get(searchBox).should("be.visible")
        //Verify create Button
        //cy.xpath(companyCreateButton).should("be.enabled")
        cy.xpath(companyCreateButton).invoke('text').should('contain', '新規追加')
        cy.xpath(companyCreateButton).should('have.css', 'color').and('eq','rgb(255, 255, 255)')
        cy.xpath(companyCreateButton).should('have.css', 'font-size').and('eq', '14px');

        cy.xpath(filterOption).should("be.visible")
        cy.xpath(filterOption).invoke('text').should('contain', '詳細検索')
        cy.xpath(filterOption).should('have.css', 'color').and('eq','rgb(56, 149, 211)')
        cy.xpath(filterOption).should('have.css', 'font-size').and('eq', '14px');
         //Verify column header Font,Size and Color
        cy.get('th[role="columnheader"]').nextUntil('[class="th-width-dots"]').each(($li, index, $lis) => {
            cy.get($li).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
            cy.get($li).should('have.css', 'color').and('eq','rgb(92, 104, 115)')
            cy.get($li).should('have.css', 'font-size').and('eq', '12px');
           
          });
        //Verify Coloumn header
        cy.get('[aria-colindex="1"] > div').invoke('text').should('contain', '企業名') 
        cy.get('[aria-colindex="2"] > div').invoke('text').should('contain', '所属園')
        cy.get('[aria-colindex="3"] > div').invoke('text').should('contain', '申請ステータス')
        cy.get('[aria-colindex="4"] > div').invoke('text').should('contain', '利用ステータス')
        
        //Verify Filter pop up
        })


    it('Verify details search', () => {
        cy.xpath(filterOption).click()
        cy.xpath(filterPopUp).should("be.visible");
        cy.xpath(filter_Companyname).invoke('text').should('contain', '企業名') 
       // cy.xpath(filter_Affiliationname).invoke('text').should('contain', '所属園名 ') 
        cy.xpath(filter_mailaddress).invoke('text').should('contain', 'メールアドレス') 
        cy.xpath(filter_Streetaddress).invoke('text').should('contain', '住所') 
        cy.xpath(filter_Usagestatus).invoke('text').should('contain', '利用ステータス') 
    
        cy.debug();
        cy.get('.register-lables').each(($li, index, $lis) => {
            cy.get('.register-lables').should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
            cy.get('.register-lables').should('have.css', 'color').and('eq','rgb(92, 104, 115)')
            cy.get('.register-lables').should('have.css', 'font-size').and('eq', '12px');

        })

   
        cy.get('.b-dropdown-form').within(()=>{
        cy.xpath('//button[contains(text(),"検索")]').first().should("be.visible");
        //Verify radiobuttin is default checked 
        cy.get('[type="radio"]').first().should('be.checked')  
      });

    



    })
})


