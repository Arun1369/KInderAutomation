/// <reference types="Cypress" />
import chaiColors from 'chai-colors'
chai.use(chaiColors)
var faker = require("faker");
var fakerJa = require("faker/locale/ja");

require('cypress-xpath')
var companyMainMenu = "//div[contains(text(),'登録園・企業')]";
var companyRegistration = "//a[contains(text(),'企業登録')]";
var companyListing = '//a[contains(text(),"企業一覧")]';
var addButton = '//button[contains(text(),"所属園 新規追加")]';
var editButton = '//button[contains(text(),"編集")]';
var companyName = '[placeholder="企業名"]';
var saveButton = '//button[contains(text(),"登録")]';
var toestMessage = '.toast-message';
var contractEdit = '//button[contains(text(),"編集")]';
var kinderRegister = '//button[contains(text(),"登録")]';
var knderCreateButtonIndetailsPage = '//button[contains(text(),"所属園 新規追加")]';

//import { data } from '../../fixtures/testData.js'
var data;
describe('Company Details (K-9)', () => {
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

  it('KIND-469(Verify transition to details page)', () => {
    cy.login();
    cy.xpath(companyMainMenu).click()
    cy.xpath(companyListing).click({force:true})
    cy.wait(8000)
    cy.contains(data.companyName1).click();
    cy.wait(5000)
    cy.get('h5').invoke('text').should('contain', data.companyName1)
    cy.xpath(editButton).should('be.visible')
  })

  it('KIND-175 : Verification for 所属園 新規追加 button', () => {
    cy.wait(2000);
    cy.contains(data.companyName1).click()
    cy.wait(2000);
    cy.xpath(addButton).click()
    cy.wait(2000);
    cy.xpath(kinderRegister).should('be.visible')
  })

  it('KIND-179 : Verification for Edit functionality', () => {
    cy.xpath(companyListing).click({ force: true });
    cy.wait(8000);
    cy.get('.btnclassname').should("not.exist");
    cy.contains(data.companyName1).click({ multiple: true })
    cy.wait(5000);
    cy.xpath(editButton).click({ multiple: true })
    cy.wait(5000);
    cy.get('[placeholder="契約者名"]').clear();
    cy.get('[placeholder="契約者名"]').type('test')
    cy.xpath(saveButton).click();
    cy.wait(2000)
    cy.get(toestMessage).invoke('text').should('contain', '更新されました。' )

  })

  var companyList = '.cutomTableClass';

  it('KIND-179(Verify create kinder option in company details page which is draft)', () => {
     cy.xpath(companyMainMenu).click()
     cy.xpath(companyListing).click({force:true})
     cy.wait(5000)
     cy.contains(data.companyNameForDraft).click({force:true})
     cy.wait(4000)
     cy.xpath(knderCreateButtonIndetailsPage).should('not.exist')

  })

  it('KIND-179(Verify create kinder option in company details page which is suspended)', () => {
    cy.xpath(companyMainMenu).click()
    cy.xpath(companyListing).click({force:true})
    cy.wait(5000)
    cy.contains(data.companyNameForInActivate).click()
    cy.wait(4000)
    cy.xpath(knderCreateButtonIndetailsPage).should('not.exist')

 })


})

 

 

