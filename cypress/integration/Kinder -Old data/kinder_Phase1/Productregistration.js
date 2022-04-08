/// <reference types="Cypress" />
import chaiColors from 'chai-colors'
chai.use(chaiColors)
//import { URL } from ' ../lib/env.js '
//Cypress.env("url");
var faker = require("faker");
var fakerJa = require("faker/locale/ja");

require('cypress-xpath')
var productMainMenu = "//div[contains(text(),' 商品マスタ')]";
var productRegistration = "//a[contains(text(),' 商品登録')]";
var saveButton = '//button[contains(text(),"保存")]';
var apply = 'a[href="#/admin/company/"]';
var validationMessage = '.text-left';
var toestMessage = '.toast-message'; 
var productName = '[placeholder="商品名"]';
var emailId = '[placeholder="メールアドレス 1"]';
var campaignName = '[placeholder="キャンペーン名"]';
var validationMessage = '.text-left';
var addButton = '//button[contains(text(),"追加")]';

//import { data } from '../../fixtures/testData.js'
var data;

describe('Product Registration', () => {
    //Save the local storage 
    before(function () {
        cy.fixture('example').then(function (seeddata) {
          data = seeddata;
        })
      })
    beforeEach("loadFixturedData",function(){
   
     cy.restoreLocalStorage();
  
  });
     afterEach(() => {
       cy.saveLocalStorage(); 
  });
  
   
    it('Product Registration',()=>{
       cy.login();
        cy.xpath(productMainMenu).click({force:true})
        cy.xpath(productMainMenu).click({force:true})
        cy.xpath(productRegistration).click({force:true});
        cy.xpath(productMainMenu).click({force:true})
        cy.wait(4000)
        cy.get(productName).type(data.productName1)
        cy.get('[type="text"]').eq(3).type('100')
        cy.get('[type="text"]').eq(5).type('100')
        cy.get('.fa-times-circle').click()
        cy.get('[type="text"]').eq(6).type('100')
        cy.xpath(saveButton).click();
        cy.wait(2000)
        cy.get(toestMessage).invoke('text').should('contain', '登録が完了しました。')
       })

       var productList = '.cutomTableClass';

       it('Verify Product in listing page',()=>{
        cy.wait(5000)
      cy.contains(data.productName1).should("be.visible")
  })

it('KIND-406(Mandatory field check)',()=>{
    cy.xpath(productRegistration).click({force:true});
    cy.wait(4000)
    cy.xpath(saveButton).click();
    cy.wait(2000)
    cy.get('.error-font').eq(0).invoke('text').should('contain', '必須項目を入力して下さい。')
    cy.get('.error-font').eq(2).invoke('text').should('contain', '必須項目を入力して下さい。')
    cy.get('.error-font').eq(5).invoke('text').should('contain', '必須項目を入力して下さい。')
    cy.get('.error-font').eq(8).invoke('text').should('contain', '必須項目を入力して下さい。')
    cy.get('.error-font').eq(9).invoke('text').should('contain', '必須項目を入力して下さい。')
    cy.get('.error-font').eq(12).invoke('text').should('contain', '必須項目を入力して下さい。')
   
})

it('Verify dublicate Product validation',()=>{
    cy.get(productName).type(data.productName1)
    cy.get('[type="text"]').eq(3).type('100')
    cy.get('[type="text"]').eq(5).type('100')
        cy.get('.fa-times-circle').click()
        cy.get('[type="text"]').eq(6).type('100')
        cy.xpath(saveButton).click();
        cy.wait(2000)
        cy.get(toestMessage).invoke('text').should('contain', '製品名はすでに登録されています。')
       })


it('KIND-8( Verification for 割引キャンペーン)',()=>{
    cy.wait(4000)
    cy.get(productName).type(data.productName2)
    // cy.get('[type="text"]').eq(3).type('100')
    // cy.get('[type="text"]').eq(5).type('100')
    //cy.get('.fa-times-circle').click()
    cy.xpath(addButton).click();
    cy.wait(2000)
    cy.datePickerFilter('2020-12-22','2020-12-28')
    cy.get(campaignName).type(data.campaign1)
    cy.get('[type="text"]').eq(8).type('100')
    // cy.get('[type="text"]').eq(9).type('100')
    cy.xpath(saveButton).click({multiple:true});
    cy.wait(2000)
    cy.get(toestMessage).invoke('text').should('contain', '登録が完了しました。')
   })


it('Max/Min charatcter',()=>{
    cy.wait(4000)
    cy.xpath(productRegistration).click({force:true});
    cy.get(productName).type(faker.lorem.paragraphs())
    cy.get(campaignName).type(faker.lorem.paragraphs())
   cy.get(validationMessage).eq(0).invoke('text').should('contain', '最大文字数 254 を超えています。')
   cy.get(validationMessage).eq(6).invoke('text').should('contain', '最大文字数 254 を超えています。')
   })
  })
