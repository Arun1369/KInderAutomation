/// <reference types="Cypress" />
import chaiColors from 'chai-colors'
chai.use(chaiColors)
//import { URL } from ' ../lib/env.js '
//Cypress.env("url");
var faker = require("faker");
var fakerJa = require("faker/locale/ja");

require('cypress-xpath')
var companyMainMenu = "//div[contains(text(),' 学校・団体・法人')]";
var companyRegistration = "//a[contains(text(),' 団体・学校法人登録')]";
var saveButton = '//button[contains(text(),"登録")]';
var addButton = '//button[contains(text(),"所属園 新規追加")]';
var saveDraft = '//button[contains(text(),"下書き保存")]';
var toestMessage = '.toast-message';
var companyName = '[placeholder="団体名・学校法人名"]';
var phoneNumber = '[placeholder="電話番号"]';
var postalCode = '[placeholder="郵便番号"]';
var staffname = '[placeholder="名前"]';
var staffAdd = '//button[contains(text(),"追加")]';
var emailId = '[placeholder="メールアドレス 1"]';
var companyListing = '//a[contains(text(),"企業一覧")]';

//import { data } from '../../fixtures/testData.js'
var data;

describe('Company Registration', () => {
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
  it('KIND-200(Mandatory field check)', () => {
    cy.login();
    cy.xpath(companyRegistration).click({ force: true });
    cy.wait(4000)
    cy.xpath(saveButton).click();
    cy.wait(2000)
    cy.get('.error-font').eq(0).invoke('text').should('contain', '必須項目を入力して下さい。')
  })

  it('KIND-469(Creation of Company)', () => {
    cy.wait(4000)
    cy.get(companyName).type(data.companyName1)
    cy.get(emailId).type(data.companyEmailID)
    cy.xpath(saveButton).click();
    cy.wait(2000)
    cy.get(toestMessage).invoke('text').should('contain', '登録が完了しました。')
    cy.wait(4000)
  })

  var companyList = '.cutomTableClass';

  it('Verify Company in listing page', () => {
    
    cy.contains(data.companyName1).should('be.visible')
  })

  it('KIND-469(Validations for Input fields)', () => {
    cy.wait(4000)
    cy.get('.px-4').first().click()
    cy.get(companyName)
    cy.get(postalCode).type('25055520')
    cy.get(phoneNumber).type('25055520')
    cy.get(emailId).type('abc@123')
    cy.xpath(saveButton).click();
    cy.wait(2000)
    cy.get('.error-font').eq(0).invoke('text').should('contain', '必須項目を入力して下さい。')
    cy.get('.error-font').eq(2).invoke('text').should('contain', '郵便番号が不正です。')
    cy.get('.error-font').eq(4).invoke('text').should('contain', '電話番号が不正です。')
    cy.get('.error-font').eq(7).invoke('text').should('contain', 'メールアドレスが不正です。')
    cy.wait(4000)
    cy.get(postalCode).clear()
    cy.get(phoneNumber).clear()
    cy.get(emailId).clear()
    cy.wait(4000)
    cy.get(companyName).type(data.companyNameForDraft)
    cy.get(emailId).type(data.companyEmailID)
    cy.xpath(saveButton).click();
    cy.wait(2000)
    cy.get(toestMessage).invoke('text').should('contain', '  •  メールアドレス１が既に登録済です。  ')
    cy.get(emailId).clear()

  })

  it('Verify Save as draft button', () => {
    cy.wait(4000)
    cy.get(companyName).clear({force:true});
    cy.get(companyName).type(data.companyNameForDraft)
    cy.get(emailId).clear()
    cy.get(emailId).type(data.companyEmailIDforDraft)
    cy.xpath(saveDraft).click();
    cy.wait(2000)
    cy.get(toestMessage).invoke('text').should('contain', '登録が完了しました。')

  })

  var companyList = '.cutomTableClass';

  it('Verify Company in listing page', () => {
    cy.wait(6000)
    cy.contains(data.companyNameForDraft).should('be.visible')
  })

  it.skip('KIND-477(Validation for Min/Max characters in input field)', () => {
    cy.get('.px-4').first().click()
    cy.wait(4000)
    cy.get(companyName).type(faker.lorem.paragraphs()+''+faker.lorem.paragraphs())
    cy.wait(4000)
    cy.get(postalCode).type(faker.lorem.paragraphs()+''+faker.lorem.paragraphs())
    cy.wait(4000)
    cy.get(phoneNumber).type(faker.lorem.paragraphs()+''+faker.lorem.paragraphs())
    cy.wait(4000)
    

    cy.get('.error-font').eq(1).invoke('text').should('contain', '最大文字数 255 を超えています。')
   
    cy.get('.error-font').eq(3).invoke('text').should('contain', '最大文字数 255 を超えています。')
    
  
    cy.get('.error-font').eq(5).invoke('text').should('contain', '最大文字数 255 を超えています。')
 
    
  })
  it('KIND-479( Verification for 「追加」 button of Login))', () => {
    cy.wait(4000)
    cy.xpath(companyRegistration).click({ force: true });
    cy.wait(4000)
    cy.debug();
    cy.get('[class="black-card"]').within(() => {
      cy.get(staffname).type('Staff')
      
      cy.xpath(staffAdd).click();
    })
    cy.xpath(saveButton).click();
    cy.get('.error-font').eq(0).invoke('text').should('contain', '必須項目を入力して下さい。')
  })

  it('KIND-479(Creat the company and inactivate ))', () => {
    cy.get(staffname).clear()
    cy.get(postalCode).clear()
    cy.get(phoneNumber).clear()
    cy.get(companyName).clear( {force: true })
    cy.get(companyName).type(data.companyNameForInActivate)
    cy.get(emailId).clear()
    cy.get(emailId).type(data.companyEmailIDforDInactivate)
    cy.get('[type="radio"]').eq(1).check({ force: true }) 
    cy.xpath(saveButton).click();
    cy.wait(6000)
  })

  var applierCompany = faker.name.firstName();
  var applierComanyEmilID = faker.internet.email();

  it('KIND-479(Create Company from appriler ))', () => {
    cy.clearLocalStorage();
    cy.reload();
    cy.accessLoginPage()
    cy.customLogin(data.applierEmailID,data.applierPassword)
    cy.wait(6000)
    cy.xpath(companyRegistration).click({ force: true });
    cy.get(companyName).type(applierCompany)
    cy.get(emailId).type(applierComanyEmilID)
    cy.xpath("//button[contains(text(),'申請する')]").click();
    cy.contains(applierCompany).click();
    cy.wait(10000)
    cy.xpath("//span[contains(text(),'ステータス:申請中')]").invoke('text').should('contain', 'ステータス:申請中')
    
  })

})


