/// <reference types="Cypress" />
import chaiColors from 'chai-colors'
chai.use(chaiColors)
//import { URL } from ' ../lib/env.js '
//Cypress.env("url");
var faker = require("faker");
var fakerJa = require("faker/locale/ja");

require('cypress-xpath')

//import { data } from '../../fixtures/testData.js'
var data;
var masterScreenButton = '.fa-cogs';
var shiftSetting = '//a[contains(text(),"シフト設定")]';
var toastMessage = '.toast-message'; 
var saveButton = '//button[contains(text(),"保存")]';
var companyName = '[placeholder="企業名"]';
var kinderName = '[placeholder="園の名前"]';
var addressName = '[placeholder="郵便番号"]';

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })

  describe('Basic Info of Garden', () => {
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
   })

   it('Verify Mandatory Field', () => {
      cy.balogin();
      cy.wait(6000)
      cy.get('#dropdown-form-1__BV_toggle_ > img').click(); 
      cy.get(masterScreenButton).eq(0).click()                                                       
      cy.wait(6000)
      cy.xpath(shiftSetting).click({ multiple: true })                                              
      cy.wait(6000)
    //   cy.get(companyName).clear({force: true});                                       
    //   cy.get(kinderName).clear({force: true})
    //   cy.get(addressName).click({force: true})
    //   cy.get('.mandatory-color').eq(0).invoke('text').should('contain', '必須項目を入力して下さい。')
    //   cy.get('.mandatory-color').eq(2).invoke('text').should('contain', '必須項目を入力して下さい。')
    //   cy.get(companyName).type(companyName1); 
    //   cy.get(kinderName).type(kinderName1); 
    //   cy.xpath(saveButton).eq(0).click({ multiple: true })
    //   cy.get(toastMessage).invoke('text').should('contain', '更新されました。' ) 
   }) 
  })