/// <reference types="Cypress" />
import chaiColors from 'chai-colors'
chai.use(chaiColors)
var faker = require("faker");
var fakerJa = require("faker/locale/ja");

require('cypress-xpath')
var kinderMainMenu = "//div[contains(text(),' 学校・団体・法人')]";
var kinderList = '//a[contains(text(),"学校一覧")]';
var addButton = '//a[contains(text(),"所属園 新規追加")]';
var editButton = '(//button[contains(text(),"編集")])';
var createKinderButton = '//a[contains(text(),"新規追加")]';
var choosecompanybutton = '//button[contains(text(),"団体・学校法人検索")]';

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
    cy.xpath(choosecompanybutton).should('be.visible')

})


})