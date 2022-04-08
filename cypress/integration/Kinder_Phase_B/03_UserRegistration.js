import chaiColors from 'chai-colors'
chai.use(chaiColors)
require('cypress-xpath')
var faker = require("faker");
var fakerJa = require("faker/locale/ja");

var dashabordLabel = 'h5';
var userMenu = '//div[contains(text(),"ユーザー管理")]';
var userRegistration = '//a[contains(text()," ユーザー登録")]';
var toestMessage = '.toast-message';
var validationMessage = '.text-left';
var saveButton = '//button[contains(text(),"保存")]';
var labels = '.register-lables';
var userName = '[placeholder="名前"]';
var displayName = '[placeholder="表示名"]';
var mailId = '[placeholder="メールアドレス　※ログインIDになります"]';
var passWord = '[placeholder="ログインパスワード"]';
var createButton = '//button[contains(text(),"新規追加")]';
var saveButton = '//button[contains(text(),"保存")]';
var deleteButton = '//button[contains(text(),"削除")]';
var toastMessage = '.toast-message';
var userPermission = '//a[contains(text(),"権限グループ編集")]';
var userListing = '//a[contains(text(),"ユーザー一覧")]';

var remarks = '[placeholder="備考"]';

//import { data } from '../../fixtures/testData.js'

var data;

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })

describe('User Registration', () => {
  before(function () {
    cy.fixture('example').then(function (seeddata) {
      data = seeddata;
    })
  })
  //Save the local storage 
  beforeEach("loadFixturedData", function () {
  
    cy.restoreLocalStorage();
  });
  afterEach(() => {
    cy.saveLocalStorage();
  
  });

  it('Verify User Registration pop up', () => {
    cy.login();
    cy.wait(2000)
    //Verification for Main menu
   // cy.xpath(userMenu).click({ multiple: true })

    //Verification for sub menu
    cy.xpath(userRegistration).click({ force: true });
    cy.wait(2000)
    
  })

  const newUser1 = faker.name.firstName();
  const newUser2 = faker.name.firstName();
  var randomEmail = faker.internet.email();

  it('KIND-417(Verify for Mandatory fields)', () => {
    cy.wait(4000)
    cy.xpath(saveButton).click();
    cy.get('.error-font').eq(0).invoke('text').should('contain', '必須項目を入力して下さい。')
    cy.get('.error-font').eq(2).invoke('text').should('contain', '必須項目を入力して下さい。')
    cy.get('.error-font').eq(4).invoke('text').should('contain', '必須項目を入力して下さい。')
    cy.get('.error-font').eq(7).invoke('text').should('contain', '必須項目を入力して下さい。')
    cy.wait(2000)
  })

  it('KIND-68( Verification for 保存 button)', () => {
    cy.wait(4000)
    cy.get(userName).clear()
    cy.get(userName).type(faker.name.firstName())
    cy.get(displayName).type(faker.name.lastName())
    cy.get(mailId).clear()
    cy.get(mailId).type(data.userEmailID)
    cy.get(passWord).click()
    cy.get(passWord).type('Admin123')
    cy.get('.custom-select').select(data.role)   //Replace after testing  role
    cy.xpath(saveButton).click();
    cy.wait(2000)
    cy.get(toestMessage).invoke('text').should('contain', '登録が完了しました。')
    cy.wait(4000)
  })

  var userList = '.cutomTableClass';

  it('Verify User in listing page', () => {
    cy.wait(4000)
    cy.contains(data.userEmailID).should("be.visible")

  })

  it('KIND-417(Validation for already existing email address)', () => {
    cy.wait(4000)
    cy.xpath(userRegistration).click({ force: true });
    cy.get(userName).type(newUser1)
    cy.get(displayName).type('Display')
    cy.get(mailId).type(data.userEmailID)
    cy.get(passWord).type('admin123')
    cy.get('.custom-select').eq(0).select(data.role)
    cy.xpath(saveButton).click();
    cy.wait(2000)
    cy.get(toastMessage).invoke('text').should('contain', 'アドレスが既に登録済で')
  })

   it('KIND-446(Validation for Min/Max characters in input field)',()=>{
    cy.wait(4000)
    cy.get(userName).type(faker.lorem.paragraphs())
    cy.get(displayName).type(faker.lorem.paragraphs())
    cy.get(mailId).type(faker.lorem.paragraphs())
    cy.get(passWord).type(faker.lorem.paragraphs())
    cy.get('.error-font').eq(1).invoke('text').should('contain', '最大文字数 254 を超えています。')
    cy.get('.error-font').eq(3).invoke('text').should('contain', '最大文字数 254 を超えています。')
    cy.wait(4000)
    cy.get('.error-font').eq(5).invoke('text').should('contain', 'メールアドレスが不正です。')
    cy.get('.error-font').eq(6).invoke('text').should('contain', '最大文字数 254 を超えています。')
    cy.wait(4000)
    cy.get('.error-font').eq(8).invoke('text').should('contain', 'パスワードフォーマットが不正です。')
    cy.get('.error-font').eq(9).invoke('text').should('contain', '最大文字数 254 を超えています。')
   })


  it('KIND-66(Verification of 権限グループ and 権限グループ編集 link )', () => {
    cy.wait(4000)
    cy.xpath(userPermission).click({ force: true });
    cy.wait(3000)
    cy.get(dashabordLabel).invoke('text').should('contain', '権限グループ');
    cy.wait(4000)
  })

  it('KIND-417(Validation for Invalid mail address and Validation for Password field)', () => {
    cy.xpath(userRegistration).click({ force: true });
    cy.wait(4000)
    cy.get(mailId).type('gmail.')
    cy.get(passWord).click()
    cy.get('.error-font').eq(1).invoke('text').should('contain', 'メールアドレスが不正です。')
    cy.get(passWord).type('@123')
    cy.get(remarks).click()
    cy.get('.error-font').eq(4).invoke('text').should('contain', 'パスワードフォーマットが不正です。')
    cy.get(mailId).clear();
    cy.get(passWord).clear();
  })

 



})