/// <reference types="Cypress" />
import chaiColors from 'chai-colors'
chai.use(chaiColors)
var faker = require("faker");
var fakerJa = require("faker/locale/ja");

require('cypress-xpath')
var kinderMainMenu = '//div[contains(text(),"登録園・企業")]';
var kinderList = '//a[contains(text(),"園一覧")]';
var addButton = '//a[contains(text(),"所属園 新規追加")]';
var editButton = '(//button[contains(text(),"編集")])';
var createKinderButton = '//a[contains(text(),"所属園 新規追加")]';

//import { data } from '../../fixtures/testData.js'
var data;


describe('Kinder Detail(K-4)', () => {
    before(function () {
        cy.fixture('example').then(function (seeddata) {
          data = seeddata;
        })
      })
    //Save the local storage 
    beforeEach("loadFixturedData",function(){
     cy.routes();
     cy.restoreLocalStorage();
  
  });
     afterEach(() => {
       cy.saveLocalStorage(); 
  });
  

  it('KIND-317 (Verify transition to the detils page ))', () => {
    cy.login();
      cy.xpath(kinderList).click({force:true})
      cy.contains(data.kindername1).click();
      cy.wait(5000)
      cy.xpath('//h5[contains(text(),"'+data.kindername1+'")]').should('be.visible')

  })
 
  it('KIND-337(Verify create kinder option ))', () => {
      cy.xpath(createKinderButton).should('be.visible')

  })

  it('KIND-290(Verify redirection of kinder registration page))', () => {
    cy.xpath(createKinderButton).click();
    cy.wait(3000)
    cy.xpath('//button[contains(text(),"企業検索")]').should('be.visible')

})


})