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
var searchField = '[placeholder="代理店検索"]'
var detailsearchclick = '//button[contains(text(),"詳細検索")]' 
var saveButton = '//button[contains(text(),"保存")]';
var agenyName1 = '[placeholder="社名"]'
var mailaddress = '[placeholder="メールアドレス"]'
var saveButton = '//button[contains(text(),"保存")]';
var toastMessage = '.toast-message';
var agencyRegistration = '//a[contains(text(),"代理店登録")]';
var detailSave = '//button[contains(text(),"検索")]';
var addButton = '//a[contains(text(),"新規追加")]';



//import { data } from '../../fixtures/testData.js'

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })
  
  var data;
  describe('Agency List', () => {
    //Save the local storage 
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
  
  // it('Agency Registration', () => {
  //  cy.login();
  //   cy.wait(5000)
  //   cy.xpath(agencyMenu).click({ multiple: true })
  //   cy.xpath(agencyMenu).click({ multiple: true })
  //   cy.xpath(agencyRegistration).click({ multiple: true })
  //   cy.get(agencyName).type(data.agencyName1)
  //   cy.wait(8000)
  //   cy.get(phonenumber).type(data.phonenumberwhilecreating)
  //   cy.get(email).type(data.agencyEmailID1)
  //   cy.wait(2000)
  //   cy.xpath(saveButton).click();
  // })

  
  
    it('KIND-393 : Functionality of Ellipsis(three dots vertically aligned)- No button)', () => {
      cy.login();
      cy.xpath(agencyListing).click({ force: true })
      //   cy.wait(5000)
        cy.get('td').contains(data.agencyName1).parent('tr').within(() => {
          cy.get('.fa-ellipsis-v').click({ force: true });
          cy.get('.fa-trash').click({ force: true });
        
      })
          cy.wait(2000)
          cy.xpath('//button[contains(text(),"いいえ")]').click()
        
      })
    
      it('KIND-393 : Functionality of Ellipsis(three dots vertically aligned)- Yes button)', () => {
        cy.get('tr').within(()=>{
          cy.get('td').contains(data.agencyName1).parent('tr').within(() => {
            cy.get('.fa-ellipsis-v').click({ force: true });
            cy.get('.fa-trash').click({ force: true });
          })
        })
          cy.wait(2000)
          cy.xpath('//button[contains(text(),"はい")]').click()
          cy.get(toastMessage).invoke('text').should('contain', '削除されました。' )
        
      })

      it('KIND-103 : Verification for 新規追加 button', () => {
        cy.wait(4000)
        cy.xpath(addButton).click({ force: true });
        cy.get(agencyName).should('be.visible')
        cy.wait(4000)
      })

       it('KIND-393 : Functionality of Ellipsis(three dots vertically aligned)- Edit the Agency)', () => {
        cy.get(agencyName).type(data.agencyName2)
        cy.wait(8000)
        cy.get(phonenumber).type(data.phonenumberwhileediting)
        cy.get(email).type(data.agencyEmailID2)
        cy.wait(2000)
        cy.xpath(saveButton).click();
       
        cy.contains(data.agencyName2).parent('tr').within(() => {
        cy.get('.fa-ellipsis-v').click({ force: true });
        cy.wait(2000)
        cy.get('.fa-pencil-square').click({ force: true });
        cy.wait(3000)
      })
        cy.xpath('saveButton').click({ force: true })
        cy.wait(3000)
      
        cy.get(toastMessage).invoke('text').should('contain', '削除されました。')
        
      
    })
})





