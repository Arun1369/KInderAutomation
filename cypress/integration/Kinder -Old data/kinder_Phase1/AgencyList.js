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
     cy.routes();
     cy.restoreLocalStorage();
  
  });
     afterEach(() => {
       cy.saveLocalStorage(); 
  });
  
  it('Agency Registration', () => {
   cy.login();
    cy.wait(5000)
    cy.xpath(agencyMenu).click({force: true})
    cy.xpath(agencyMenu).click({force: true})
    cy.xpath(agencyRegistration).click({ multiple: true })
    cy.get(agencyName).type(data.agencyName1)
    cy.wait(8000)
    cy.get(phonenumber).type(data.phonenumberwhilecreating)
    cy.get(email).type(data.agencyEmailID)
    cy.wait(2000)
    cy.xpath(saveButton).click();
  })

    it('KIND-447-Verification of search', () => {
        //Agency name search
        //Invalid search-Data not in the list
        cy.get(searchField).type('bevisible').type('{enter}')
        cy.wait(2000)
        cy.get(searchField).clear().type('{enter}')
       
        //valid search-Data in the list
        cy.get(searchField).type(data.agencyName1).type('{enter}')
        cy.wait(2000)
        cy.get(searchField).clear().type('{enter}');
     })


    it('KIND-448-Verification of detailed search', () => {
        //search with agency name and valid prefecture
        cy.xpath(detailsearchclick).click({ multiple: true })
        cy.get(agenyName1).type(data.agencyName1)
        cy.get('.custom-select').eq(0).select('県選択')
        cy.wait(2000)
        cy.xpath(detailSave).eq(1).click()
        cy.wait(2000)
        cy.xpath(detailsearchclick).click({ multiple: true })
        cy.get(agenyName1).clear();
        cy.xpath(detailSave).eq(1).click()

        //search with agency name and invalid prefecture
        cy.xpath(detailsearchclick).click({ multiple: true })
        cy.get(agenyName1).type(data.agencyName1);  
        cy.get('.custom-select').eq(0).select('県選択')  
        cy.wait(2000)
        cy.xpath(detailSave).eq(1).click()
        cy.xpath(detailsearchclick).click({ multiple: true })
        cy.get(agenyName1).clear();
        cy.get('.custom-select').eq(0).select('県選択') 
        cy.xpath(detailSave).eq(1).click()

        //search only with prefecture
        cy.xpath(detailsearchclick).click({ multiple: true })
        cy.get('.custom-select').eq(0).select('県選択')   
        cy.wait(2000)
        cy.xpath(detailSave).eq(1).click()

        //search only with mailid
        cy.xpath(detailsearchclick).click({ multiple: true })
        cy.get(mailaddress).type(data.agencyEmailID);
        cy.wait(2000)
        cy.get('.btn-primary').eq(1).click()
        cy.xpath(detailsearchclick).click({ multiple: true })
        cy.get(mailaddress).clear();
        cy.wait(2000)
        cy.xpath(detailSave).eq(1).click()

        //search mail id,prefecture,agency name
        cy.xpath(detailsearchclick).click({ multiple: true })
        cy.get(agenyName1).type(data.agencyName1)
        cy.get(mailaddress).type(data.agencyEmailID);
        cy.get('.custom-select').eq(0).select('県選択')
        cy.xpath(detailSave).eq(1).click()
        cy.wait(2000)
        cy.xpath(detailsearchclick).click({ multiple: true })
        cy.get(mailaddress).clear();
        cy.get(agenyName1).clear();
        cy.get('.custom-select').eq(0).select('県選択')
        cy.xpath(detailSave).eq(1).click()
    })

  
    it('KIND-393 : Functionality of Ellipsis(three dots vertically aligned)- No button)', () => {
      cy.reload();
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
        cy.get(email).type(data.agencyEmailID1)
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
      
        cy.get(toastMessage).invoke('text').should('contain', '変更されました')
        
      
    })
})





