import chaiColors from 'chai-colors'
chai.use(chaiColors)
var faker = require("faker");
var fakerJa = require("faker/locale/ja");

require('cypress-xpath')

var agencyMenu = '//div[contains(text()," 代理店")]';
var agencyListing = '//a[contains(text()," 代理店一覧")]';
var agencyName = '[placeholder="社名"]';
var prefecture = '[placeholder="郵便番号"]';
var phonenumber = '[placeholder="電話番号"]';
var email = '[placeholder="メールアドレス"]';
var accountnumber = '[placeholder="口座番号"]';
var accountholdername = '[placeholder="口座名義"]'; 
var saveButton = '//button[contains(text(),"保存")]';
var validationMessage = '.text-left';
var prefecturename = '[placeholder="住所"]';
var toestMessage = '.toast-message';
var agencyRegistration = '//a[contains(text(),"代理店登録")]';
const newRole1  = faker.name.firstName();
var agencyListing = '//a[contains(text()," 代理店一覧")]';
var agencyList = '.cutomTableClass';
var agencyEdit = '//button[contains(text(),"編集")]';

//import { data } from '../../fixtures/testData.js'


Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })
  
  var data;
  describe('Agency Detail', () => {
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
it('KIND-428 : Verification for agent Detail screen transition ', () => {
    cy.login();
    cy.wait(5000)
    cy.xpath(agencyMenu).click({force: true})
    cy.xpath(agencyListing).click({force: true})
    cy.contains(data.agencyName1).click();
    cy.wait(5000)
    cy.get('h5').invoke('text').should('contain', data.agencyName1)
    cy.xpath(agencyEdit).should('be.visible')
  })

  it('KIND-186 : Verification for Edit page transition',()=>{
    cy.wait(4000)
    cy.xpath(agencyEdit).click({force:true})
    cy.wait(2000)
})

it('Editing Agency details',()=>{
  cy.get(agencyName).clear();
  cy.wait(4000)
  cy.get(agencyName).type(data.agencyName2)
  cy.xpath(saveButton).click();
  cy.get(toestMessage).invoke('text').should('contain', '変更されました')
 })

 var agencyList = '.cutomTableClass';

 it('Verify Edited agency in listing page',()=>{
  cy.wait(4000)
  cy.contains(data.agencyName2).should("be.visible")

})
})