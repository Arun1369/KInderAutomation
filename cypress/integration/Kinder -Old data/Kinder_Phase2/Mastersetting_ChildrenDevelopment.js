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
var recordFormTemplate = '//a[contains(text(),"記録帳票テンプレート")]';
var projectSettings = '[href="/setting/growth"]';
var measurementPeriodSetting = '//button[contains(text(),"計測期間設定")]';
var addButtonPeriod = '//button[contains(text(),"期間を追加")]';
var toastMessage = '.toast-message'; 
var areaSetting = '//button[contains(text(),"領域の設定")]';
var addButtonArea = '//button[contains(text(),"項目を追加")]';
var periodName = '[placeholder="期間名"]';
var areaName = '[placeholder="領域名"]';
var addItemField = '//button[contains(text(),"項目欄を追加")]';
var title = '[placeholder="項目名"]';


Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })

  describe('Class Managment', () => {
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

   it('Verify Measurement period setting', () => {
      cy.balogin();
      cy.wait(6000)
      cy.get('#dropdown-form-1__BV_toggle_ > img').click(); 
      cy.get(masterScreenButton).eq(0).click()                                                            //Master Setting side Menu
      cy.wait(6000)
      cy.xpath(recordFormTemplate).click({ multiple: true })                                              //Template selection on left side menu
      cy.wait(6000)
      cy.get('td').contains('発達記録').parent('tr').within(()=>{
      cy.get('.btn-outline-primary').click()  
    })                                                                                                      //Project setting under Chidren Development
       cy.wait(6000)
      cy.xpath(measurementPeriodSetting).click({ multiple: true })                                        //Meassurement Period setting button
      cy.wait(6000)
      cy.xpath(addButtonPeriod).click({ multiple: true })                                                       //Add period field in pop-up
      cy.wait(6000)
      cy.get('#Period-setting___BV_modal_footer_ > .ml-2').click({force: true})
      cy.get('.mandatory-color').eq(0).invoke('text').should('contain', '必須項目を入力して下さい。')       //Mandatory field check
      cy.get(periodName).type('test')
      cy.get('#Period-setting___BV_modal_footer_ > .ml-2').click({force: true})
      cy.get(toastMessage).invoke('text').should('contain', 'データが正常に更新されました。' )               //Added success message 
      cy.wait(6000)
      cy.xpath(measurementPeriodSetting).click({ multiple: true })                                        //Meassurement Period setting button
      cy.wait(6000)
      cy.get('[class="modal-body"]').within(()=>{
      cy.wait(3000)
      cy.get('.custom-switch').eq(0).click({ multiple: true})                                             //Setting to In-active 
    })
    cy.get('#Period-setting___BV_modal_footer_ > .ml-2').click({force: true})
    cy.get(toastMessage).invoke('text').should('contain', 'データが正常に更新されました。' )
    cy.wait(3000)
    cy.xpath(addButtonPeriod).click({ force: true })     
    cy.get('[class="modal-body"]').within(()=>{
    cy.wait(3000)
    cy.get('.fa-times-circle').eq(0).click({ multiple: true})                                             //Delete
    })
    cy.get('#Period-setting___BV_modal_footer_ > .ml-2').click({force: true})
    cy.get(toastMessage).invoke('text').should('contain', 'データが正常に更新されました。' )
   })

  it('Verify Area Setting', () => {
      cy.xpath(addButtonArea).click()
      cy.wait(6000)
      cy.xpath(addButtonArea).click({ multiple: true })                                                 //Add Area field in pop-up
      cy.wait(6000)
      cy.get('#area-setting___BV_modal_footer_ > .px-4').click({force: true})
      cy.get('.mandatory-color').eq(0).invoke('text').should('contain', '必須項目を入力して下さい。')      //Mandatory field check
      cy.get(areaName).eq(0).type('test')
      cy.get('#area-setting___BV_modal_footer_ > .px-4').click({force: true})
      cy.get(toastMessage).invoke('text').should('contain', '更新が完了しました。' )
      cy.wait(10000)
      cy.xpath(addButtonArea).click({ multiple: true })                                                  //Add Area field with same data in pop-up
      cy.wait(6000)
      cy.get(areaName).eq(1).type('test')
      cy.get('#area-setting___BV_modal_footer_ > .px-4').click({force: true})
      cy.get(toastMessage).invoke('text').should('contain', '領域名がユニークです。' )                      //Duplicate error message 
      cy.get(areaName).eq(1).clear().type('Automation')
      cy.get('[class="modal-body"]').within(()=>{
      cy.wait(3000)
      cy.get('.custom-switch').eq(0).click({ multiple: true})                                             //Setting to In-active 
      })
      cy.get('#area-setting___BV_modal_footer_ > .px-4').click({force: true})
      cy.get(toastMessage).invoke('text').should('contain', '更新が完了しました。' )
      cy.wait(8000)
      cy.xpath(addButtonArea).click({ multiple: true })                               
      cy.wait(6000)
      cy.get('[class="modal-body"]').within(()=>{
      cy.wait(3000)
      cy.get('.fa-times-circle').eq(0).click({ multiple: true})                                         //Delete
      })
      cy.get('#area-setting___BV_modal_footer_ > .px-4').click({force: true})
      cy.get(toastMessage).invoke('text').should('contain', '更新が完了しました。' )
    })

    it('Verify Development record items', () => {
      cy.xpath(addItemField).click()
      cy.wait(6000)
      cy.get('.col-md-12 > .px-4').click({force: true})
      cy.get('.mandatory-color').eq(0).invoke('text').should('contain', '必須項目を入力して下さい。')      //Mandatory field check
      cy.get(title).eq(0).type('Title')                                              
      cy.get('.col-md-12 > .px-4').click({force: true})
      cy.get(toastMessage).invoke('text').should('contain', '更新が完了しました。' )
      cy.wait(8000)
      cy.get('.d-flex > .mr-2').click({ multiple: true })                               
      cy.wait(6000)
      cy.get('.col-md-12 > .px-4').click({force: true})
      cy.get(toastMessage).invoke('text').should('contain', '更新が完了しました。' )
      cy.get('.d-flex > .fa').click({force: true})
      cy.wait(6000)
      cy.get(toastMessage).invoke('text').should('contain', '更新が完了しました。' )
    })
})