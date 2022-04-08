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
var addButton = '//button[contains(text(),"│グループを追加")]';
var groupName = '[placeholder="グループ名"]';
var toastMessage = '.toast-message';

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })

  var data;
  describe('Class Managment  - Group', () => {
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
        cy.wait(9000)
        cy.xpath(classmanagement).click({ multiple: true })
        cy.wait(9000)
    })

    it('Add Group', () => {
        cy.get('[class="tab-pane active"]').within(()=>{
        cy.xpath(editgroupButton).click({force:true})
        cy.wait(5000)
        })
        cy.get('[class="modal-body"]').within(()=>{
          

        //cy.xpath(addButton).click({force:true})  //Add button
        cy.get(groupName).eq(0).clear()
      })
      cy.get('#editGroup-modal___BV_modal_footer_ > .px-4').click({force:true});  
       
        cy.get('[class="modal-body"]').within(()=>{
            //cy.xpath(addButton).click({force:true})  //Add button
        cy.get('.mandatory-color').eq(0).invoke('text').should('contain', '必須項目を入力して下さい。')
        cy.get(groupName).eq(0).clear()
        cy.get(groupName).eq(0).type(data.groupName)
      })
      cy.get('#editGroup-modal___BV_modal_footer_ > .px-4').click({force:true});  
        cy.wait(5000)
        cy.get(toastMessage).invoke('text').should('contain', ' 更新が完了しました。')

    })

    it('Verifing GroupName Duplication', () => {
        cy.get('[class="tab-pane active"]').within(()=>{
        cy.xpath(editgroupButton).click({force:true})
        cy.wait(5000)
        })
        cy.get('[class="modal-body"]').within(()=>{
        cy.get(groupName).eq(1).clear()
        cy.get(groupName).eq(1).type(data.groupName)
      })
      cy.get('#editGroup-modal___BV_modal_footer_ > .px-4').click({force:true});  
        cy.get(toastMessage).invoke('text').should('contain', 'グループが既に登録済です。')

    })
})