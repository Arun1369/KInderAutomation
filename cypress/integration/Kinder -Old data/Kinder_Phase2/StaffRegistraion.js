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


Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })

  describe('Staff Registration', () => {
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

   it('KIND-BAPP-59 : Verification for Mandatory fields', () => {
      cy.balogin();
      cy.wait(6000)
      cy.get('#dropdown-form-1__BV_toggle_ > img').click(); 
      cy.get(masterScreenButton).eq(0).click()                                                            
      cy.wait(6000)
      cy.xpath(staffRegistration).click({ multiple: true })                                              
      cy.wait(6000)     
      cy.xpath(saveButton).eq(1).click({ multiple: true })    
      cy.wait(3000) 
      cy.get('.mandatory-color').eq(0).invoke('text').should('contain', '必須項目を入力して下さい。')
      cy.get('.mandatory-color').eq(3).invoke('text').should('contain', '必須項目を入力して下さい。')
      cy.get('.mandatory-color').eq(6).invoke('text').should('contain', '必須項目を入力して下さい。')
      cy.get('.mandatory-color').eq(8).invoke('text').should('contain', '必須項目を入力して下さい。') 
      cy.wait(3000)                                                         
   })

   it('Validation for Input Fields', () => {
    cy.get(name).type(data.staffName)
    cy.wait(2000)
    cy.get(phoneNumber).type('123456')
    cy.get(email).type('123@')
    cy.get('.mandatory-color').eq(1).invoke('text').should('contain', '電話番号が不正です。')
    cy.get('.mandatory-color').eq(4).invoke('text').should('contain', 'メールアドレスが不正です。')
    cy.wait(2000)
    cy.get(phoneNumber).clear()
    cy.get(email).clear()
  })

  
   it('Verify Staff Registration', () => {
    // cy.get(name).type(data.staffName)
    // cy.wait(8000)
    cy.get(phoneNumber).type(data.phonenumberwhilecreating)
    cy.get(email).type(data.staffEmailID)
    cy.get(password).type('123456789')
    cy.wait(2000)
    cy.xpath(saveButton).eq(1).click({ multiple: true })   
    cy.get(toastMessage).invoke('text').should('contain', '追加されました。')
    cy.wait(3000)
  })
  var staffList = '.cutomTableClass';
  it('Verify Staff in listing page', () => {
  cy.contains(data.staffName).should('be.visible')
  })

  it('Email Duplication', () => {
    cy.xpath(staffRegistration).click({ multiple: true })
    cy.wait(2000)
    cy.get(name).type(data.staffName)
    cy.get(phoneNumber).type(data.phonenumberwhilecreating)
    cy.get(email).type(data.staffEmailID)
    cy.get(password).type('123456789')
    cy.wait(2000)
    cy.xpath(saveButton).eq(1).click({ multiple: true })   
    cy.get(toastMessage).invoke('text').should('contain', '  •  メールアドレスが既に登録済です。 ')
    cy.wait(3000)
    cy.xpath(cancelButton).eq(1).click({ multiple: true })
  })

}) 
