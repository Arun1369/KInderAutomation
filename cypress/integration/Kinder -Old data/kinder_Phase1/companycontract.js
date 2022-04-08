import chaiColors from 'chai-colors'
chai.use(chaiColors)
var faker = require("faker");
var fakerJa = require("faker/locale/ja");
require('cypress-xpath')

var companyMainMenu = "//div[contains(text(),'登録園・企業')]";
var companyRegistration = "//a[contains(text(),'企業登録')]";
var companyListing = '//a[contains(text(),"企業一覧")]';
var companycontractMenu = '//a[contains(text(),"契約内容")]';
var editButton = '//button[contains(text(),"編集")]';  
var addButton = '//button[contains(text(),"追加")]';  
var companyName = '[placeholder="企業名"]';
var saveButton = '//div[contains(text(),"登録")]';

//import { data } from '../../fixtures/testData.js'

var data;
Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })
  
  describe('K36', () => {
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
  it('KIND-225 : Verification for Edit functionality',()=>{
    cy.login();
    cy.xpath(companyMainMenu).click()
    cy.xpath(companyListing).click({force:true});
    cy.wait(4000)
    cy.contains('Automation Company').click()
    cy.xpath(companycontractMenu).click({force:true});
    cy.wait(2000)
    cy.xpath(editButton).eq(1).click({force:true});
  })

  // it('KIND-470 : Verify the 「追加」 button behavior ',()=>{
  //   cy.xpath(addButton).eq(1).click({force:true});
    
  // })
  it('KIND-478 : Verify the behavior of the 「登録] button',()=>{
    cy.get('.custom-select').eq(0).select('Automation Product')
    cy.get('.custom-select').eq(1).select('Automation Kinder')
    cy.get('.multiselect').eq(0).type('Automation Agency').type('{enter}')
    cy.get('[type="checkbox"]').eq(1).click({force: true});
    cy.wait(5000)
    cy.xpath(saveButton).click({force:true});


  })
})
