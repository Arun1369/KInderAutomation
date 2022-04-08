/// <reference types="Cypress" />
import chaiColors from 'chai-colors'
chai.use(chaiColors)
//import { URL } from ' ../lib/env.js '
//Cypress.env("url");
var faker = require("faker");
var fakerJa = require("faker/locale/ja");

require('cypress-xpath')

//import { data } from '../../fixtures/testData.js'

var masterScreenButton = '.fa-cogs';
var classmanagement = '//a[contains(text(),"クラス管理")]';
var classCreateButton = '//button[contains(text(),"クラスを追加")]';
var editgroupButton = '//button[contains(text(),"グループを編集")]';
var className = '[placeholder="クラス名"]';
var saveButton = '//button[contains(text(),"保存")]';
var toastMessage = '.toast-message'; 
var cancelButton = '//button[contains(text(),"保存")]';
var searchBox = '[placeholder="検索"]';
var searchIcon = ':nth-child(1) > form > .input-group > .input-group-append > .input-group-text'


Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })

  var data;
  describe('Class Managment - Class', () => {
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
   
    it('Verify class management', () => {
        cy.balogin();
        cy.wait(6000)
        cy.get('#dropdown-form-1__BV_toggle_ > img').click({force:true});
        cy.get(masterScreenButton).eq(0).click()
        cy.wait(6000)
        cy.xpath(classmanagement).click({ multiple: true })
        cy.wait(6000)
    })

    it ('Mandatory field validation', ()=>{
      cy.get('[class="tab-pane active"]').within(()=>{
        cy.xpath(classCreateButton).click({force:true})
        cy.wait(5000)
      })
      cy.get('#class-register-modal___BV_modal_content_').find('.px-4').click()
        //cy.xpath(saveButton).focus().click({force:true})
        cy.get('.mandatory-color').eq(0).invoke('text').should('contain', '必須項目を入力して下さい。')
        cy.get('.mandatory-color').eq(2).invoke('text').should('contain', '必須項目を入力して下さい。')
    

    })


    it('Add Class', () => {
    cy.get('[class="modal-body"]').within(()=>{
    cy.get(className).type(data.className) 
    cy.get('.custom-select').select('小1') 
    })
    cy.get('#class-register-modal___BV_modal_content_').find('.px-4').click()

  
  
    cy.get(toastMessage).invoke('text').should('contain', '追加されました。')
    })

    var classList = '.cutomTableClass';

    it('Verify Class in listing',()=>{
     cy.get('[class="tab-pane active"]').within(()=>{
     cy.wait(5000)
     cy.contains(data.className).should("be.visible")
    })
})


it('Verification of Search', () => {
    cy.get('[class="tab-pane active"]').within(()=>{
    cy.get(searchBox).type(data.className)
    cy.get(searchIcon).click({force:true})
    cy.wait(4000);
    cy.get('tr').within(()=>{
    cy.contains(data.className).should('be.visible')
    cy.wait(4000);
    })
  })
 })

 it('Verification of Edit', () => {
    cy.get('[class="tab-pane active"]').within(()=>{
    cy.get(searchBox).clear()
    cy.get(searchIcon).click({force:true})
    cy.get('tr').within(()=>{
    cy.contains(data.className).click({ force: true });
    })
  })
    cy.wait(2000)
    cy.get('[class="modal-body"]').within(()=>{
    cy.get(className).clear()
    cy.get(className).type(data.className1) 
    cy.get('.custom-select').select('小1') 
    })
    cy.get('#class-register-modal___BV_modal_content_').find('.px-4').click()
    cy.wait(2000)
    cy.get(toastMessage).invoke('text').should('contain', '更新されました。')
  })

    var classList = '.cutomTableClass';

    it('Verify Edited Class in listing',()=>{
    cy.get('[class="tab-pane active"]').within(()=>{
     cy.wait(5000)
   cy.contains(data.className1).should("be.visible")
    })
})
 

 it('Verification of Delete', () => {
    cy.get('[class="tab-pane active"]').within(()=>{
      
        cy.get('td').contains(data.className1).parent('tr').within(() => {
    cy.get('.fa-ellipsis-v').click({ force: true });
    cy.wait(2000)
        
    cy.get('.fa-trash').click({ force: true });
  })
    cy.xpath('//button[contains(text(),"はい")]').click()
    
   
  })
 })
})


