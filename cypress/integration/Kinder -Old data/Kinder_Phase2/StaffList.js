/// <reference types="Cypress" />
import chaiColors from 'chai-colors'
chai.use(chaiColors)
//import { URL } from ' ../lib/env.js '
//Cypress.env("url");
var faker = require("faker");
var fakerJa = require("faker/locale/ja");

require('cypress-xpath')

//import { data } from '../../fixtures/testData.js'
var data;

var masterScreenButton = '.fa-cogs';
var staffRegistration = '//button[contains(text(),"職員を追加")]';
var saveButton = '//button[contains(text(),"保存")]';
var cancelButton = '//button[contains(text(),"キャンセル")]';
var name = '[placeholder="氏名"]';
var phoneNumber = '[placeholder="電話番号"]';
var email = '[placeholder="メールアドレス"]';
var password = '[placeholder="パスワード"]';
var toastMessage = '.toast-message';
var search = '[placeholder="検索"]';
var batchButton = '//button[contains(text(),"一括処理")]';
var applyButton = '//button[contains(text(),"適用")]';


Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })

  describe('Staff Managment', () => {
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

   it('Verification of Staff Search', () => {
      cy.balogin();
      cy.wait(6000)
      cy.get('#dropdown-form-1__BV_toggle_ > img').click(); 
      cy.get(masterScreenButton).eq(0).click()                                                            
      cy.wait(6000)
      cy.xpath(staffRegistration).click({ multiple: true })      //KIND-BAPP-55 : Verification for +Add button
      cy.get(name).type(data.staffName)
      cy.get(phoneNumber).type(data.phonenumberwhilecreating)
      cy.get(email).type(data.staffEmailID)
      cy.get(password).type('123456789')
      cy.wait(2000)
      cy.xpath(saveButton).eq(1).click({ multiple: true })
      cy.wait(2000)
      cy.get(search).type('1234').type('{enter}')                //Invalid search(KIND-BAPP-52 : Verification for Search)
      cy.wait(2000)
      cy.get(search).clear().type('{enter}')
      cy.get(search).type(data.staffName).type('{enter}')        //Valid search(KIND-BAPP-52 : Verification for Search)
      cy.wait(2000)
      cy.get(search).clear().type('{enter}')
   })

  //  it('KIND-BAPP-53 : Verification for Batch Processing', () => {
  //   cy.get('.b-avatar').eq(0).click({force: true})
  //   cy.wait(2000)
  //   cy.xpath(batchButton).click({force: true})
  //   cy.wait(2000)
  //   cy.get('[type="radio"]').eq(1).click({force: true})
  //   cy.xpath(applyButton).click({force: true})
  //   cy.get(toastMessage).invoke('text').should('contain', '括処理が完了しました。') 
  // })

  // it('KIND-BAPP-53 : Verification for Batch Processing(Delete Staff)', () => {
  //   cy.get('.b-avatar').eq(0).click({force: true})
  //   cy.get('.b-avatar').eq(1).click({force: true})
  //   cy.wait(2000)
  //   cy.xpath(batchButton).click({force: true})
  //   cy.wait(2000)
  //   cy.get('[class="b-dropdown-form"]').eq(1).within(()=>{
  //   cy.get('[type="checkbox"]').click({force: true})
  //   cy.xpath(applyButton).click({force: true})
  //   })
  //   cy.get(toastMessage).invoke('text').should('contain', '括処理が完了しました。') 
  //   cy.wait(2000)
  // })


  it('KIND-BAPP-341 : Verification for Edit functionality', () => {
    cy.contains(data.staffName).click({force: true})
    cy.get(name).clear()
    cy.get(name).type(data.staffName1)
    cy.wait(2000)
    cy.xpath(saveButton).eq(1).click({ multiple: true })
    cy.wait(2000)
    cy.get(toastMessage).invoke('text').should('contain', '更新されました。')
   
  })
})

