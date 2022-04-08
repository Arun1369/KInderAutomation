/// <reference types="Cypress" />
import chaiColors from 'chai-colors'
chai.use(chaiColors)
//import { URL } from ' ../lib/env.js '
//Cypress.env("url");
var faker = require("faker");
var fakerJa = require("faker/locale/ja");

require('cypress-xpath')
var dashabordLabel = 'h5';
var userMenu = '//div[contains(text(),"ユーザー管理")]';
var permissionMenu = '//a[contains(text(),"ユーザー権限")]';
var labels = '.register-lables';
var registerButton = '.col > .btn';
var createButton = '//button[contains(text(),"新規追加")]';
var saveButton ='//button[contains(text(),"保存")]';
var deleteButton = '//button[contains(text(),"削除")]';
var roleName = '[placeholder="権限グループ名"]';
var validationMessage = '.text-left';
var toestMessage = '.toast-message';    
var allCheckbox = '#checkbox-group-all';
var saveButton = '//button[contains(text(),"保存")]';
//type="checkbox"

describe('User Permissions', () => {
       //Save the local storage 
       beforeEach("loadFixturedData",function(){
        cy.routes();
        cy.restoreLocalStorage();
   
    });
        afterEach(() => {
          cy.saveLocalStorage(); 
    });

    it('Verify Permissions screen content', () => {
        cy.login();
        //Verify the menus text, font ,color and size 
        cy.xpath(userMenu).invoke('text').should('contain', ' ユーザー管理')
        cy.xpath(userMenu).should('have.css', 'color').and('eq','rgb(255, 255, 255)')
        cy.xpath(userMenu).should('have.css', 'font-size').and('eq', '14px')  
        cy.xpath(userMenu).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
        cy.xpath(permissionMenu).invoke('text').should('contain', 'ユーザー権限')
        cy.xpath(permissionMenu).should('have.css', 'color').and('eq','rgb(255, 255, 255)')
        cy.xpath(permissionMenu).should('have.css', 'font-size').and('eq', '14px')
        cy.xpath(permissionMenu).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
        cy.xpath(userMenu).click();
        cy.xpath(permissionMenu).click();
        cy.wait(2000);
        //Verify all checkbox default checked or not
        cy.get('[type="checkbox"]').each(($el,index,$li) =>{
            cy.get($el).should("be.checked")
        });
        
        //Verify Header
        cy.get(dashabordLabel).invoke('text').should('contain', '権限グループ');
        cy.get(dashabordLabel).should('have.css', 'color').and('eq','rgb(0, 0, 0)');
        cy.get(dashabordLabel).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/);
        cy.get(dashabordLabel).should('have.css', 'font-size').and('eq', '17.5px')
        cy.get(2000);

          //Verify all labels checks
          cy.get(labels).each(($el,index,$li)=>{
            cy.get($el).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
            cy.get($el).should('have.css', 'color').and('eq','rgb(92, 104, 115)')
            cy.get($el).should('have.css', 'font-size').and('eq', '12px');
           
        })

        //Verify All text of Permission labels
        cy.get(labels).eq(1).invoke('text').should('contain', '企業');
        cy.get(labels).eq(2).invoke('text').should('contain', '園');
        cy.get(labels).eq(3).invoke('text').should('contain', 'アクセスログ');
        cy.get(labels).eq(4).invoke('text').should('contain', '商品');
        cy.get(labels).eq(5).invoke('text').should('contain', '売上 ( 請求 )');
        cy.get(labels).eq(6).invoke('text').should('contain', '入金');
        cy.get(labels).eq(7).invoke('text').should('contain', '代理店');
        cy.get(labels).eq(8).invoke('text').should('contain', 'お知らせ');
        cy.get(labels).eq(9).invoke('text').should('contain', 'コラム');
        cy.get(labels).eq(10).invoke('text').should('contain', 'チャット');
        cy.get(labels).eq(11).invoke('text').should('contain', '管理ユーザー');
        cy.get(labels).eq(12).invoke('text').should('contain', '全園業務アプリ');

        //verify save button
        cy.xpath(saveButton).invoke('text').should('contain', '保存')
        cy.xpath(saveButton).should('have.css', 'color').and('eq','rgb(255, 255, 255)')
        cy.xpath(saveButton).should('have.css', 'font-size').and('eq', '14px');
        cy.xpath(saveButton).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)

        //verify create button保存
        cy.xpath(createButton).invoke('text').should('contain', '新規追加')
        cy.xpath(createButton).should('have.css', 'color').and('eq','rgb(255, 255, 255)')
        cy.xpath(createButton).should('have.css', 'font-size').and('eq', '14px');
        cy.xpath(createButton).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)

        //Delete button 
        cy.xpath(deleteButton).invoke('text').should('contain', '削除')
        cy.xpath(createButton).should('have.css', 'color').and('eq','rgb(255, 255, 255)')
        cy.xpath(createButton).should('have.css', 'font-size').and('eq', '14px');
        cy.xpath(createButton).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
   
    })

   })