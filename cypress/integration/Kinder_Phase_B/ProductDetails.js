/// <reference types="Cypress" />
import chaiColors from 'chai-colors'
chai.use(chaiColors)
var faker = require("faker");
var fakerJa = require("faker/locale/ja");

require('cypress-xpath')
var productMainMenu = "//div[contains(text(),' 商品マスタ')]";
var productRegistration = "//a[contains(text(),' 商品登録')]";
var productList = "//a[contains(text(),' 商品一覧')]";
var saveButton = '//button[contains(text(),"保存")]';
var productEdit = '//button[contains(text(),"編集")]';
var toestMessage = '.toast-message';
var productName = '[placeholder="商品名"]';

//import { data } from '../../fixtures/testData.js'
var data;

describe('Product Detail', () => {
    //Save the local storage 
    before(function () {
        cy.fixture('example').then(function (seeddata) {
          data = seeddata;
        })
      })
    beforeEach("loadFixturedData", function () {
        cy.routes();
        cy.restoreLocalStorage();

    });
    afterEach(() => {
        cy.saveLocalStorage();
    });

    it('Product list', () => {
        cy.login();
        //Verification for Main menu
       // cy.xpath(productMainMenu).click({multiple:true})
        cy.xpath(productList).click({force:true})
        
    })

        it('Verify transition to details page', () => {
            cy.contains(data.productName1).click();
            cy.wait(5000)
            cy.get('h5').invoke('text').should('contain', data.productName1)
            cy.xpath(productEdit).should('be.visible')
        })

        it('KIND-377 : Verification of 編集 button behavior ', () => {
            cy.wait(4000)
            cy.xpath(productEdit).click({ force: true })
            cy.wait(2000)
        })

        it('Editing product details', () => {
            cy.get(productName).clear();
            cy.wait(4000)
            cy.get(productName).type(data.productName2)
            cy.xpath(saveButton).click();
            cy.wait(2000)
            cy.get(toestMessage).invoke('text').should('contain', '変更されました。')
        })

      //  var productList = '.cutomTableClass';

        it('Verify Edited product in listing page', () => {
            cy.wait(4000)
            cy.contains(data.productName2).should("be.visible")

        
    })
})

