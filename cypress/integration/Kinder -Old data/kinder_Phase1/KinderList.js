import chaiColors from 'chai-colors'
chai.use(chaiColors)
var faker = require("faker");
var fakerJa = require("faker/locale/ja");
require('cypress-xpath')
var searchicon = ':nth-child(3) > form > .input-group > .input-group-append > .input-group-text'
var gardenname = '[placeholder="園名"]'
var kindername = 'Kidzee'  
var mailaddress = '[placeholder="メールアドレス"]'
var mailid = 'kidzee@mailinator.com'
var detailsearchclick = '//*[@id="dropdown-form__BV_toggle_"]'
var companyname = '[placeholder="企業名"]'
var company = 'firecompany';
var saveButton = '//button[contains(text(),"登録")]';

var kinderListing = '//a[contains(text(),"園一覧")]';
var kinderCreation = '//a[contains(text(),"園登録")]';
var toestMessage = '.toast-message';
var kinderMainMenu = '//div[contains(text(),"登録園・企業")]';

//import { data } from '../../fixtures/testData.js'
var data;


Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })
  
  describe('Kinder list - K03', () => {
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
  
    it('KIND-452 (Create the kinder and Draft status)', () => {
      cy.login();
      cy.wait(5000)
      cy.xpath(kinderMainMenu).click({force:true})
        cy.xpath(kinderListing).click({force:true})
       
})
   
it('KIND-329(Functionality of Ellipsis(three dots vertically aligned)- No button)', () => {
  //cy.xpath(kinderCreation).click({force:true})
 
  cy.wait(5000)
  cy.xpath(kinderListing).click({force:true})
  cy.wait(5000)
  cy.get('td').contains(data.kindername1).parent('tr').within(() => {
    cy.get('.fa-ellipsis-v').click({ force: true });
    cy.get('.fa-trash').click();
  
  
})
    cy.wait(2000) 
    cy.xpath('//button[contains(text(),"いいえ")]').click()
  
})

it('KIND-329(Functionality of Ellipsis(three dots vertically aligned)- Yes button)', () => {
    cy.get('tr').eq(6).within(()=>{
    cy.get('.fa-ellipsis-v').click();
    cy.get('.fa-trash').click();
    })
    cy.wait(2000)
    cy.xpath('//button[contains(text(),"はい")]').click()
    cy.get(toestMessage).invoke('text').should('contain', '削除されました。' )
  
})
 it('KIND-329(Functionality of Ellipsis(three dots vertically aligned)- Edit the Company)', () => {
  cy.get('tr').within(()=>{
  cy.contains(data.kindername1).parent('tr').within(() => {
  cy.get('.fa-ellipsis-v').click({ force: true });
  cy.wait(2000)
  cy.get('.fa-pencil-square').click({ force: true });
  })
}) 
  cy.wait(5000)
  cy.get('[placeholder="責任者名"]').type('test')
  cy.xpath(saveButton).click();
  cy.wait(2000)
  cy.get(toestMessage).invoke('text').should('contain', '更新されました。' )
 
})


})