import chaiColors from 'chai-colors'
chai.use(chaiColors)
var faker = require("faker");
var fakerJa = require("faker/locale/ja");
require('cypress-xpath')

var productMainMenu = "//div[contains(text(),' 商品マスタ')]";
var productRegistration = "//a[contains(text(),' 商品登録')]";
var productList = "//a[contains(text(),' 商品一覧')]"
var productnamesearch = '[placeholder="商品名"]'
var campaignnamesearch = '[placeholder="キャンペーン名"]'
var searchButton = ' [placeholder="商品検索"]'
var detailsearchclick = '//button[contains(text(),"詳細検索")]';
var toastMessage = '.toast-message';
var batchprocess = '//button[contains(text(),"一括処理")]';
var productName = '[placeholder="商品名"]';
var saveButton = '//button[contains(text(),"保存")]';
var clickButton = '//button[contains(text(),"検索")]';
var campaignName = '[placeholder="キャンペーン名"]';
var batchSave = '//button[contains(text(),"適用")]';
var addButton = '//button[contains(text(),"新規追加")]';

//import { data } from '../../fixtures/testData.js'

// Cypress.on('uncaught:exception', (err, runnable) => {
//     // returning false here prevents Cypress from
//     // failing the test
//     return false
//   })

var data;
  
  describe('Product List', () => {
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

  it('Product Registration',()=>{
   cy.login();
    cy.xpath(productMainMenu).click({force:true})
    cy.xpath(productMainMenu).click({force:true})
    cy.xpath(productList).click({force:true})
     cy.xpath(productList).click({force:true})
    cy.xpath(productRegistration).click({force:true});
    cy.wait(4000)
    cy.get(productName).type(data.productName2)
    cy.get('[type="text"]').eq(3).type('100')
    cy.get('[type="text"]').eq(5).type('100')
    cy.datePickerFilter('2020-12-22','2020-12-29')
    cy.get(campaignName).type(data.campaign2)
    cy.get('[type="text"]').eq(8).type('100')
    cy.get('[type="text"]').eq(9).type('100')
  
    cy.xpath(saveButton).click({force:true});

    // cy.wait(2000)
    // cy.get(toastMessage).invoke('text').should('contain', '登録が完了しました。')
 })
  
    it('KIND-3 : Verification for [園検索] search field', () => {
      cy.xpath(productList).click({force:true})
      cy.wait(4000)
        //Product name search
        //Invalid search-Data not in the list
        cy.get(searchButton).type('bevisible').type('{enter}')
        cy.wait(2000)
        cy.get(searchButton).clear();
        //cy.get(searchicon).click();
        //valid search-Data in the list
        cy.get(searchButton).type(data.productName2).type('{enter}')
        cy.get(searchButton).clear().type('{enter}');
        //cy.get(searchicon).click();
        cy.wait(2000)

    })
    it('KIND-360( Verify [詳細検索] details search )', () => {
        //search with product name and campaign name
        cy.xpath(detailsearchclick).eq(0).click({ multiple: true })
        cy.get(productnamesearch).type(data.productName2)
        cy.get(campaignnamesearch).type(data.campaign2)
        cy.wait(2000)
        cy.xpath(clickButton).eq(1).click({ multiple: true })
         //clear detail search input
         cy.xpath(detailsearchclick).click({ multiple: true })
         cy.wait(2000)
         cy.get(productnamesearch).clear()
         cy.get(campaignnamesearch).clear()
         cy.wait(2000)
         cy.xpath(clickButton).eq(1).click({ multiple: true })
         //search with product name and invalid usuage status
        cy.xpath(detailsearchclick).eq(0).click({ multiple: true })
        cy.get(productnamesearch).type(data.productName2)
        cy.get('[type="radio"]').eq(1).check({ force: true }) 
        cy.wait(2000)
        cy.xpath(clickButton).eq(1).click({ multiple: true })
        //search with suspension of use usuage status
        cy.xpath(detailsearchclick).click({ multiple: true })
        cy.wait(2000)
        cy.get(productnamesearch).clear()
        cy.get('[type="radio"]').eq(1).check({ force: true }) 
        cy.wait(2000)
        cy.xpath(clickButton).eq(1).click({ multiple: true })
        //search with available usuage status
        cy.xpath(detailsearchclick).click({ multiple: true })
        cy.wait(2000)
        cy.get(productnamesearch).clear()
        cy.get('[type="radio"]').eq(0).check({ force: true }) 
        cy.wait(2000)
        cy.xpath(clickButton).eq(1).click({ multiple: true })
        //search with campaign name and usuage status
        cy.xpath(detailsearchclick).click({ multiple: true })
        cy.get(campaignnamesearch).type(data.campaign2)
        cy.get('[type="radio"]').eq(1).check({ force: true }) 
        cy.wait(2000)
        cy.xpath(clickButton).eq(1).click({ multiple: true })
        cy.xpath(detailsearchclick).click({ multiple: true })
        cy.get(campaignnamesearch).clear()
        cy.get('[type="radio"]').eq(0).check({ force: true }) 
        cy.xpath(clickButton).eq(1).click({ multiple: true })
})

it('KIND-2 : Verification for sortable column', () => {
        cy.get('[aria-colindex="2"] > div').click({ multiple: true })
        cy.get('[aria-colindex="3"] > div').click({ multiple: true })
        cy.get('[aria-colindex="4"] > div').click({ multiple: true })
        cy.get('[aria-colindex="5"] > div').click({ multiple: true })
        cy.get('[aria-colindex="6"] > div').click({ multiple: true })
        cy.get('[aria-colindex="7"] > div').click({ multiple: true })
        cy.get('[aria-colindex="8"] > div').click({ multiple: true })
    
})

it('KIND-363 : Verify + 新規追加 button', () => {
  cy.wait(4000)
  cy.xpath(addButton).click({ force: true });
  cy.get(productName).should('be.visible')
  cy.wait(4000)
})


 

  it('Batch Processing-Error Message when Product no selected', () => {
    cy.xpath(productList).click({force:true})
      cy.xpath(batchprocess).click()
      cy.get('#checkbox-1').click()
      cy.xpath(batchSave).click()
      cy.get(toastMessage).invoke('text').should('contain', 'ユーザーを選択して下さい。' )
      cy.wait(5000)
  })

  it('KIND-373(Functionality of Ellipsis(three dots vertically aligned)- No button)', () => {
    cy.get('tr').within(()=>{
    cy.contains(data.productName2).parent('tr').within(() => {
      cy.get('.fa-ellipsis-v').click({ force: true });
      cy.get('.fa-trash').click({ force: true });
    })
  })
      cy.wait(2000)
      cy.xpath('//button[contains(text(),"いいえ")]').click()
    
  })

  it('KIND-373(Functionality of Ellipsis(three dots vertically aligned)- Yes button)', () => {
    cy.get('tr').within(()=>{
      cy.contains(data.productName2).parent('tr').within(() => {
        cy.get('.fa-ellipsis-v').click({ force: true });
        cy.get('.fa-trash').click({ force: true });
      })
    })
      cy.wait(2000)
      cy.xpath('//button[contains(text(),"はい")]').click()
      cy.get(toastMessage).invoke('text').should('contain', '削除が完了しました。' )
    
  })
   it('KIND-373(Functionality of Ellipsis(three dots vertically aligned)- Edit the Product)', () => {
    //cy.xpath(productMainMenu).click()
    cy.xpath(productRegistration).click({force:true});
    cy.wait(4000)
    cy.get(productName).type(data.productName3)
    cy.get('[type="text"]').eq(3).type('100')
    cy.get('[type="text"]').eq(5).type('100')
    cy.get('.fa-times-circle').click()
    cy.get('[type="text"]').eq(6).type('100')
    cy.xpath(saveButton).click();
    cy.wait(2000)
    cy.get('tr').within(()=>{
    cy.contains(data.productName3).parent('tr').within(() => {
    cy.get('.fa-ellipsis-v').click({ force: true });
    cy.wait(2000)
    cy.get('.fa-pencil-square').click({ force: true });
    })
  })
})
})
  