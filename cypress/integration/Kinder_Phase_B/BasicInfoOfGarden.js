/// <reference types="Cypress" />
import chaiColors from 'chai-colors'
chai.use(chaiColors)
//import { URL } from ' ../lib/env.js '
//Cypress.env("url");
var faker = require("faker");
var fakerJa = require("faker/locale/ja");

require('cypress-xpath')

//import { data } from '../../fixtures/testData.js'

var masterScreenButton = '.fa-cogs';
var basicInfo = '//a[contains(text(),"学校の基本情報")]';
var toastMessage = '.toast-message'; 
var saveButton = '//button[contains(text(),"保存")]';
var companyName = '[placeholder="団体名・学校法人名"]';
var kinderName = '[placeholder="学校名"]';
var addressName = '[placeholder="郵便番号"]';

var data;

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
   });
   var companyName1 = faker.name.firstName();
   var kinderName1 = faker.name.firstName();

   it('Verify by saving the basic information', () => {
      cy.balogin();
      cy.wait(6000)
      cy.get('#dropdown-form-1__BV_toggle_ > img').click(); 
      cy.get(masterScreenButton).eq(0).click()                                                       
      cy.wait(6000)
      cy.xpath(basicInfo).click({ multiple: true })                                              
      cy.wait(6000)
      cy.get('[placeholder="緊急連絡先電話番号"]').clear({force:true})
      cy.xpath(saveButton).click()
      cy.get(toastMessage).invoke('text').should('contain', '更新されました。' ) 
   })

  })