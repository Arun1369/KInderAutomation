import chaiColors from 'chai-colors'
chai.use(chaiColors)
var faker = require("faker");
var fakerJa = require("faker/locale/ja");

require('cypress-xpath')
var agencyName = '[placeholder="社名"]';
var agencyMenu = '//div[contains(text()," 代理店")]';
var phonenumber = '[placeholder="電話番号"]';
var email = '[placeholder="メールアドレス"]';
var accountnumber = '[placeholder="口座番号"]';
var accountholdername = '[placeholder="口座名義"]';
var prefecturename = '[placeholder="住所"]';
var saveButton = '//button[contains(text(),"保存")]';
var validationMessage = '.text-left';
var toestMessage = '.toast-message';
var agencyRegistration = '//a[contains(text(),"代理店登録")]';
var agencyListing = '//a[contains(text()," 代理店一覧")]';
var addButton = '//a[contains(text(),"新規追加")]';

//import { data } from '../../fixtures/testData.js'


Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})

var data;
describe('K20 - Agency registration', () => {
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


  it('KIND-174 : Verification for Mandatory Field check', () => {
   cy.login();
    cy.wait(10000)
    cy.xpath(agencyMenu).click({force: true})
    cy.xpath(agencyRegistration).click({ multiple: true })
    cy.get('[type="radio"]').eq(0).check({ force: true })
    cy.xpath(saveButton).click();
    cy.get('.error-font').invoke('text').should('contain', '必須項目を入力して下さい。')
    cy.get('.error-font').invoke('text').should('contain', '必須項目を入力して下さい。')
    cy.get('.error-font').invoke('text').should('contain', '必須項目を入力して下さい。')
    cy.get('.error-font').invoke('text').should('contain', '必須項目を入力して下さい。')
    cy.get('.error-font').invoke('text').should('contain', '必須項目を入力して下さい。')
    cy.get('.error-font').invoke('text').should('contain', '必須項目を入力して下さい。')
    cy.get('.error-font').invoke('text').should('contain', '必須項目を入力して下さい。')
    cy.get('.error-font').invoke('text').should('contain', '必須項目を入力して下さい。')

  })

  it('KIND-156 : Validation for Input Fields', () => {
    cy.get(agencyName).type(data.agencyName1)
    cy.wait(8000)
    cy.get(phonenumber).type('123456')
    cy.get(email).type('123@')
    cy.get('.error-font').invoke('text').should('contain', '電話番号が不正です。')
    cy.get('.error-font').invoke('text').should('contain', 'メールアドレスが不正です。')
  })


  it('KIND-125', () => {
    cy.xpath(agencyListing).click({ multiple: true })
    cy.xpath(addButton).click({ force: true });
    cy.get(agencyName).type(data.agencyName1)
    cy.wait(8000)
    cy.get(phonenumber).type(data.phonenumberwhilecreating)
    cy.get(email).type(data.agencyEmailID)
    cy.wait(2000)
    cy.xpath(saveButton).click();
    cy.get(toestMessage).invoke('text').should('contain', '登録が完了しました。')
    cy.wait(3000)

  })
  var agencyList = '.cutomTableClass';
  it('Verify agency in listing page', () => {
  cy.contains(data.agencyName1).should('be.visible')
  })

  it('Phone Number Duplication', () => {
    cy.xpath(agencyListing).click({ multiple: true })
    cy.xpath(addButton).click({ force: true });
    cy.get(agencyName).type(data.agencyName1)
    cy.wait(8000)
    cy.get(phonenumber).type(data.phonenumberwhilecreating)
    cy.get(email).type(data.agencyEmailID1)
    cy.xpath(saveButton).click();
    cy.get(toestMessage).invoke('text').should('contain', '•  電話番号が既に登録済です。')
    cy.wait(3000)
  })

  it('Email Duplication', () => {
    cy.xpath(agencyListing).click({ multiple: true })
    cy.xpath(addButton).click({ force: true });
    cy.get(agencyName).type(data.agencyName1)
    cy.wait(8000)
    cy.get(phonenumber).type(data.phonenumberwhileediting)
    cy.get(email).type(data.agencyEmailID)
    cy.xpath(saveButton).click();
    cy.get(toestMessage).invoke('text').should('contain', '  •  メールアドレスが既に登録済です。  ')
    cy.wait(3000)

  })

})