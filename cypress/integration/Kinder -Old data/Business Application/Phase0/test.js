/// <reference types="Cypress" />
import chaiColors from 'chai-colors'
chai.use(chaiColors)
var faker = require("faker");
var fakerJa = require("faker/locale/ja");

var companyMainMenu = "//div[contains(text(),'登録園・企業')]";
var companyRegistration = "//a[contains(text(),'企業登録')]";
var companyListing = '//a[contains(text(),"企業一覧")]';

require('cypress-xpath')

import { data } from '/KiderAutomationCypress/KINDER-TEST/cypress/fixtures/testData.js'

describe('Company List(K-8)', () => {
  //Save the local storage 
  beforeEach("loadFixturedData", function () {
    cy.routes();
    cy.restoreLocalStorage();

  });
  afterEach(() => {
    cy.saveLocalStorage();
  });

  it('KIND-148(Verification of 新規追加 button)', () => {
    cy.login();
    cy.xpath(companyMainMenu).click({ force: true })
    cy.xpath(companyListing).click({ force: true });
    cy.wait(10000)
    cy.get("body").then(($body )=> {
        if ($body.find(".form-control").length == 0) {   //evaluates as true

         cy.get('.closebutton').click();
            cy.log('dsfsgsdf')  
            try{
              cy.get('.jkjkjkjk').click();

            } 
            catch (err){

            }
        }
        else {
          
            cy.log('not fount ')
        }
    })
  })
})

beforeEach(() => {
  // alias the $btn.text() as 'text'
  cy.get('button').invoke('text').as('text')
})

it('has access to text', function () {
  this.text // is now available
})