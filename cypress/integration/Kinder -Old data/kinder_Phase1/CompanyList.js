/// <reference types="Cypress" />
import chaiColors from 'chai-colors'
chai.use(chaiColors)
var faker = require("faker");
var fakerJa = require("faker/locale/ja");

require('cypress-xpath')
var companyMainMenu = "//div[contains(text(),'登録園・企業')]";
var companyRegistration = "//a[contains(text(),'企業登録')]";
var saveButton = '//button[contains(text(),"登録")]';
var companyCreateButton = '//a[contains(text(),"新規追加")]';   //Xpath
var searchBox = '[placeholder="企業検索"]';
var detailsearchclick = '//*[@id="dropdown-form__BV_toggle_"]'
var companyListing = '//a[contains(text(),"企業一覧")]';
var companyName = '[placeholder="企業名"]';
var affiliation = '[placeholder="所属園名"]';
var emailId = '[placeholder="メールアドレス"]';
var saveButton = '//button[contains(text(),"登録")]';
var toestMessage = '.toast-message';
var name1 = '[placeholder="名前"]';
var login1 = '[placeholder="メールアドレス"]';
var password1 = '[placeholder="パスワード"]';
var emailId1 = '[placeholder="メールアドレス 1"]';
var companyListing = '//a[contains(text(),"企業一覧")]';
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
    cy.routes();
    cy.restoreLocalStorage();

  });
  afterEach(() => {
    cy.saveLocalStorage();
  });

  it('KIND-148(Verification of 新規追加 button)', () => {
    cy.login();
    cy.xpath(companyMainMenu).click({ force: true })
    cy.xpath(companyListing).click({ force: true });
    cy.wait(8000)
    cy.xpath(companyCreateButton).click();
    cy.xpath(saveDraft).should("be.visible")

  })

  var companyList = '.cutomTableClass';

  it('Verify Company in listing page', () => {
    cy.xpath(companyListing).click({ force: true });
    cy.wait(8000)
    cy.get('tr').within(()=>{
    cy.contains(data.companyName1).should('be.visible')

    })
   
  })


  it('KIND-149(Verification of Search [企業検索])', () => {
    cy.get(searchBox).type(data.companyName1).type('{enter}')
    cy.wait(4000);
    cy.get('tr').within(()=>{
    cy.contains(data.companyName1).should('be.visible')

    })
    
  })

  it('KIND-150(Verification for Detail Search button)', () => {
    cy.xpath(detailsearchclick).click({ multiple: true })
    cy.get('.b-dropdown-form').within(() => {
      //search with company name and valid prefecture
      cy.get(companyName).type('auto')
      cy.get('.custom-select').select('北海道')
      cy.wait(2000)
      cy.get('.btn-primary').click()
      cy.wait(2000)
      cy.xpath(detailsearchclick).click({ multiple: true })
      cy.get(companyName).clear();
      cy.get('.btn-primary').click()
      //search with company name and invalid prefecture
      cy.xpath(detailsearchclick).click({ multiple: true })
      cy.get(companyName).type('auto');
      cy.get('.custom-select').select('青森県')
      cy.wait(2000)
      cy.get('.btn-primary').click()
      //clear detail search input
      cy.xpath(detailsearchclick).click({ multiple: true })
      cy.get(companyName).clear();
      cy.get('.custom-select').select('県選択')
      cy.get('.btn-primary').click()
      //search only with prefecture
      cy.xpath(detailsearchclick).click({ multiple: true })
      cy.get('.custom-select').select('北海道')
      cy.wait(2000)
      cy.get('.btn-primary').click()
      //search with Company Name, Affiliation and prefecture
      cy.xpath(detailsearchclick).click({ multiple: true })
      cy.get(companyName).type('auto');
      cy.wait(2000)
      cy.get(affiliation).type('Java');
      cy.wait(2000)
      cy.get('.custom-select').select('北海道')
      cy.get('.btn-primary').click()
      cy.xpath(detailsearchclick).click({ multiple: true })
      cy.get(companyName).clear();
      cy.get(affiliation).clear();
      cy.wait(2000)
      cy.get('.btn-primary').click()
      //search only with mailid
      cy.xpath(detailsearchclick).click({ multiple: true })
      cy.get(emailId).type('auto@mailinator.com');
      cy.wait(2000)
      cy.get('.btn-primary').click()
      cy.xpath(detailsearchclick).click({ multiple: true })
      cy.get(emailId).clear();
      cy.wait(2000)
      cy.get('.btn-primary').click()
      //search mail id,prefecture,agency name
      cy.xpath(detailsearchclick).click({ multiple: true })
      cy.get(companyName).type('auto')
      cy.get(emailId).eq(0).type('auto@mailinator.com');
      cy.get('.custom-select').select('北海道')
      cy.get('.btn-primary').click()
      cy.wait(2000)
      cy.xpath(detailsearchclick).click({ multiple: true })
      cy.get(companyName).clear();
      cy.get(emailId).clear();
      cy.get('.custom-select').select('県選択')
      cy.get('.btn-primary').click()
      //serach by only Usage status inactive
      cy.xpath(detailsearchclick).click({ multiple: true })
      cy.get('.custom-radio').eq(1).click()
      cy.get('.btn-primary').click()
      //serach by only Usage status active
      cy.xpath(detailsearchclick).click({ multiple: true })
      cy.get('.custom-radio').eq(0).click()
      cy.get('.btn-primary').click()
    })
  })

  it('KIND-151(Verification for sortable columns)', () => {
    // cy.get('[aria-colindex="1"] > div').click({ multiple: true })
    cy.get('[aria-colindex="2"] > div').click({ multiple: true })
    cy.get('[aria-colindex="3"] > div').click({ multiple: true })
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



