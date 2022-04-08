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
var alergy = '//a[contains(text(),"健康チェック")]';
var checkBox = '//label[contains(text(),"利用する")]';
var toastMessage = '.toast-message'; 
var saveButton = '//button[contains(text(),"保存")]';
var addButton = '.fa-plus';
var inputBox = '[placeholder="項目名"]';



var data;

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })

  describe('Alergy', () => {
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
   
   var deleteAlergy = faker.name.firstName();

   it('Verify adding alergies', () => {
      cy.balogin();
      cy.wait(6000)
      cy.get('#dropdown-form-1__BV_toggle_ > img').click(); 
      cy.get(masterScreenButton).eq(0).click()                                                       
      cy.wait(6000)
      cy.xpath(alergy).click({ multiple: true })                                              
      cy.wait(6000)
      cy.get(addButton).click();
      cy.wait(2000)
      cy.get(inputBox).last().type(data.alergypublished)
      cy.xpath(checkBox).last().click();
      cy.get(addButton).click();
      cy.wait(2000)
      cy.get(inputBox).last().type(data.alergyUnpublished)  
      cy.xpath(saveButton).click();
      cy.get(toastMessage).invoke('text').should('contain', '更新されました。' ) 
   })

   it('Verify deleting alergies', () => {
    cy.get(addButton).click();
    cy.get(inputBox).last().type(deleteAlergy)
    cy.xpath(checkBox).last().click();
    cy.xpath(saveButton).click();
    cy.wait(5000)
    cy.get('.fa-times-circle').click();
    cy.xpath(saveButton).click();
    cy.get(toastMessage).invoke('text').should('contain', '更新されました。' ) 

   })

  })