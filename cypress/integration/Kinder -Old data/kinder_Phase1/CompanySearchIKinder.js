/// <reference types="Cypress" />
import chaiColors from 'chai-colors'
chai.use(chaiColors)
var faker = require("faker");
var fakerJa = require("faker/locale/ja");

require('cypress-xpath')
var kinderCreation = '//a[contains(text(),"園登録")]';
var companySearchButton = '//button[contains(text(),"企業検索")]';
var kinderSearchOption = '[placeholder="企業検索または所属園"]';
var companyCreationButton = '//a[contains(text(),"企業新規追加")]';

//import { data } from '../../fixtures/testData.js'

Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})

var data;

describe('Company Search K6)', () => {
  before(function () {
    cy.fixture('example').then(function (seeddata) {
      data = seeddata;
    })
  })
  //Save the local storage 
  beforeEach("loadFixturedData", function () {
    cy.routes();
    cy.restoreLocalStorage();

  });
  afterEach(() => {
    cy.saveLocalStorage();
  });

  it('KIND-148(Verification companies when status is Draft)', () => {
    cy.login();
    cy.xpath(kinderCreation).click({force:true});
    cy.xpath(companySearchButton).click();
    cy.wait(3000)
    cy.get(kinderSearchOption).type(data.companyNameForDraft)
    cy.get(kinderSearchOption).type('{enter}')
    cy.wait(3000)
    cy.get('.modal-body').within(()=>{
      cy.contains(data.companyNameForDraft).should('not.exist')
    })
  })
  
    it('KIND-148(Verification companies when status is suspended)', () => {
      cy.get(kinderSearchOption).clear()
      cy.get(kinderSearchOption).type(data.companyNameForDraft)
      cy.get(kinderSearchOption).type('{enter}')
      cy.wait(3000)
      cy.get('.modal-body').within(()=>{
        cy.contains(data.companyNameForInActivate).should('not.exist')
      })
    })
    
    it('KIND-148(Verification transition to company creation page)', () => {
      cy.xpath(companyCreationButton).should('be.visible')
      cy.xpath(companyCreationButton).click({force : true})
      cy.wait(3000)
      cy.xpath('//button[contains(text(),"追加")]').should('be.visible')
    })


    


  
})