/// <reference types="Cypress" />
import chaiColors from 'chai-colors'
chai.use(chaiColors)
var faker = require("faker");
var fakerJa = require("faker/locale/ja");

require('cypress-xpath')
var companyMainMenu = "//div[contains(text(),' 学校・団体・法人')]";
var companyRegistration = "//a[contains(text(),' 団体・学校法人登録')]";
var saveButton = '//button[contains(text(),"登録")]';
var companyCreateButton = '//a[contains(text()," 新規追加)]';   //Xpath
var searchBox = '[placeholder="企業検索"]';
var detailsearchclick = '//*[@id="dropdown-form__BV_toggle_"]'
var companyListing = '//a[contains(text(),"団体・学校法人一覧)]';
var companyName = '[placeholder="企業名"]';
var affiliation = '[placeholder="所属園名"]';
var emailId = '[placeholder="メールアドレス"]';
var saveButton = '//button[contains(text(),"登録")]';
var toestMessage = '.toast-message';
var name1 = '[placeholder="名前"]';
var login1 = '[placeholder="メールアドレス"]';
var password1 = '[placeholder="パスワード"]';
var emailId1 = '[placeholder="メールアドレス 1"]';
var companyListing = '//a[contains(text(),"団体・学校法人一覧")]';
var toestMessage = '.toast-message';
var saveDraft = '//button[contains(text(),"下書き保存")]';

//import { data } from '../../fixtures/testData.js'
var data;

describe('Company List(K-8)', () => {
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

  it('KIND-148(Verification of 新規追加 button)', () => {
    cy.login();
    cy.xpath(companyListing).click({ force: true });
    cy.wait(8000)
  

  })

  var companyList = '.cutomTableClass';

  it('Verify Company in listing page', () => {
    cy.xpath(companyListing).click({ force: true });
    cy.wait(8000)
    cy.get('tr').within(()=>{
    cy.contains(data.companyName1).should('be.visible')

    })
   
  })



  it('KIND-160(Verification of transition of company details page)', () => {
    cy.wait(2000);
    cy.get('tr').within(()=>{
    cy.contains(data.companyName1).click()
    })
    cy.wait(4000);
    cy.xpath(companyListing).click({ force: true });
    cy.wait(5000);
    cy.xpath('//td[contains(text(),"'+data.companyName1+'")]').should('be.visible');
    

  })

  it('KIND-154(Functionality of Ellipsis(three dots vertically aligned)- No button)', () => {
    
    cy.get('td').contains(data.companyName1).parent('tr').within(() => {
      cy.get('.fa-ellipsis-v').click({ force: true });
      cy.get('.fa-trash').click({ force: true });
      
    
  })
      cy.wait(2000)
      
      cy.xpath('//button[contains(text(),"いいえ")]').click()
    
  })

  it('KIND-154(Functionality of Ellipsis(three dots vertically aligned)- Yes button)', () => {
      cy.get('tr').eq(6).within(()=>{
      cy.get('.fa-ellipsis-v').click({ force: true });
      cy.get('.fa-trash').click({ force: true });
      })
      cy.wait(2000)
      cy.xpath('//button[contains(text(),"はい")]').click()
      cy.get(toestMessage).invoke('text').should('contain', '削除されました。' )
    
  })
   it('KIND-154(Functionality of Ellipsis(three dots vertically aligned)- Edit the Company)', () => {
    
    cy.get('td').contains(data.companyName1).parent('tr').within(() => {
    cy.get('.fa-ellipsis-v').click({ force: true });
    cy.wait(2000)
    cy.get('.fa-pencil-square').click({ force: true });
    })
  
    
    cy.wait(5000)
    cy.get('[placeholder="契約者名"]').type('test')
    cy.xpath(saveButton).click();
    cy.wait(2000)
    cy.get(toestMessage).invoke('text').should('contain', '更新されました。' )
   
  
  })
})



