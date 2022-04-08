import chaiColors from 'chai-colors'
chai.use(chaiColors)
var faker = require("faker");
var fakerJa = require("faker/locale/ja");
var loginField = '[autocomplete="email"]';
var passwordField = '[autocomplete="password"]'
var rememberMECheckBox = '#basicInlineCustomCheckboxes';
var validationMessage = '.mandatory-color';
var submitbutton = '[type="submit"]';
var toastMessage = '.toast-message';


require('cypress-xpath')
//import { data } from '../../fixtures/testData.js'


Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})
var data;

describe('Bapp K1', () => {
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


  it('BAPP-335 - Verify when username and password field are empty', () => {
    cy.visit('https://www.kinders.develop.groony.jp/auth/signin');
    cy.get('.btn').click() 
    cy.get(validationMessage).invoke('text').should('contain', '必須項目を入力して下さい。')
    cy.get(validationMessage).invoke('text').should('contain', '必須項目を入力して下さい。')
})
  it('BAPP-290 - Verify when enter invalid email address ', () => {
    cy.get(loginField).type('kkkmaiimator.com')
    cy.get(passwordField).type('123456789')
    cy.get(submitbutton).click();
    cy.wait(3000)
    cy.get(validationMessage).should("be.visible")
  
})
it('BAPP-292 - Verify when enter the invalid password',() => {
  cy.get(passwordField).type('admin@$$123')
  cy.get(validationMessage).invoke('text').should('contain', 'パスワードフォーマットが不正です。')
  cy.wait(3000)
  cy.get(submitbutton).click();
})

it('BAPP-333 -Verify when enter the non existing email id',() => {
  cy.get(loginField).clear();
  cy.get(loginField).type('nonexsting@mailinator.com')
  cy.get(passwordField).clear();
  cy.get(passwordField).type('admin123')
  cy.get(submitbutton).click();
  cy.get(toastMessage).invoke('text').should('contain', 'ログインIDまたはパスワードが間違っています')
 
})
it ('BAPP-334 - Verify when password is invalid',()=>{
  cy.get(loginField).clear();
  cy.get(loginField).type('test@mailinator.com')
  cy.get(passwordField).clear();
  cy.get(passwordField).type('admin123525355')
  cy.get(submitbutton).click();
  cy.wait(3000)
  cy.get(toastMessage).invoke('text').should('contain', 'ログインIDまたはパスワードが間違っています')

})
//
it ('BAPP-293/336 - Verify successful login',()=>{
  cy.balogin();
  cy.wait(10000)
      cy.get('.profile-name').should("be.visible")
      cy.clearLocalStorage()
      cy.wait(2000)
      cy.reload();
      cy.wait(3000)
      cy.visit('https://www.kinders.develop.groony.jp/auth/signin');

})
it ('BAPP-291 - Verify username and password are recorded',()=>{
  cy.get(loginField).clear();
  cy.get(loginField).type(data.userName)
  cy.get(passwordField).clear();
  cy.get(passwordField).type(data.password)
  cy.get(rememberMECheckBox).click();
  cy.wait(4000)
  cy.get('.btn').click();
  cy.wait(5000)
 
  cy.wait(6000)
  cy.get('.profile-name').should("be.visible")
  cy.wait(5000)
  cy.clearLocalStorage()
  cy.wait(2000)
  cy.reload();
  cy.wait(5000)
  cy.visit('https://www.kinders.develop.groony.jp/auth/signin');
  cy.wait(5000)
  cy.get(loginField).invoke('val').should('contain',data.userName)
  cy.get(passwordField).invoke('val').should('contain',data.password)

})
})