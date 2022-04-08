import chaiColors from 'chai-colors'
chai.use(chaiColors)
require('cypress-xpath')
var labels = '.register-lables';
var faker = require("faker");

require('cypress-xpath')
var dashabordLabel = 'h5';
var userMenu = '//div[contains(text(),"ユーザー管理")]';
var permissionMenu = '//a[contains(text(),"ユーザー権限")]';
var labels = '.register-lables';
var registerButton = '.col > .btn';
var createButton = '//button[contains(text(),"新規追加")]';
var saveButton ='//button[contains(text(),"保存")]';
var deleteButton = '//button[contains(text(),"削除")]';
var roleName = '[placeholder="権限グループ名"]';
var validationMessage = '.text-left';
var toestMessage = '.toast-message';    
var allCheckbox = '#checkbox-group-all';
var saveButton = '//button[contains(text(),"保存")]';
var dataFile = require('../../fixtures/testData')

//import { data } from '../../fixtures/testData.js'

var data;
describe('User Permissions', () => {
  //Save the local storage 
  before(function () {
    cy.fixture('example').then(function (seeddata) {
      data = seeddata;
    })
  })

  beforeEach("loadFixturedData",function(){
   cy.restoreLocalStorage();
   cy.routes();

});
   afterEach(() => {
     cy.saveLocalStorage(); 
});



it('KIND-300 - Verify validation with out role name',()=>{
 cy.login();
  cy.xpath(permissionMenu).click({force:true})
  cy.xpath(createButton).click();
  cy.xpath(saveButton).click();
  cy.get(roleName).invoke('val').should('contain', '')
  cy.get(validationMessage).invoke('text').should('contain', '必須項目を入力して下さい。')
  cy.get(toestMessage).invoke('text').should('contain', '1つ以上にチェックをしてください。')
  cy.get('[type="checkbox"]').should("not.be.checked")
})

it('KIND-301 - Verify all checkbox',()=>{
  cy.get(allCheckbox).click({force:true});
  cy.get('[type="checkbox"]').eq(6).should("be.checked")
})

it('KIND-301 - Verify by unchecking all checkbox',()=>{
  cy.get('[type="checkbox"]').eq(2).click({force: true});
  cy.get('[type="checkbox"]').eq(1).uncheck({force: true}).should('not.be.checked');
} )

it('Verify maximum validation of role name',()=>{
  cy.xpath(createButton).click();
  cy.get(roleName).type(faker.lorem.paragraphs())
  cy.get(allCheckbox).click({force:true});
  cy.xpath(saveButton).click();
  cy.wait(2000)
  cy.get(validationMessage).invoke('text').should('contain', '最大文字数 255 を超えています')
})



it('KIND-300 - Verify Creation of role',()=>{
  cy.wait(4000)
  cy.xpath(createButton).click();
  cy.get(roleName).clear()
  cy.get(roleName).type(data.role)
  cy.get(allCheckbox).click({force:true});
  cy.xpath(saveButton).click();
  cy.wait(2000)
  cy.get(toestMessage).invoke('text').should('contain', '追加されました')

})

var groupList = '.list-group';

it('KIND-491 - Verify Created role in List',()=>{
  cy.get(groupList).within(()=>{
      cy.contains(data.role).should("be.visible")
  })
})

it('KIND-410 - Verify Valdiation of role which already exist',()=>{
  cy.xpath(createButton).click();
  cy.get(roleName).type(data.role)
  cy.get(allCheckbox).click({force:true});
  cy.xpath(saveButton).click();
  cy.wait(2000)
  cy.get(toestMessage).invoke('text').should('contain', 'グループ名が既に登録済です')

})

it('KIND-303 - Verify By Deleting the role ',()=>{
  cy.wait(5000)
  cy.xpath(createButton).click();
  cy.get(roleName).type(data.roleForDeletion)
  cy.get(allCheckbox).click({force:true});
  cy.xpath(saveButton).click();
  cy.wait(2000)
  cy.get(groupList).within(()=>{
      cy.contains(data.roleForDeletion).click();
  })
  cy.xpath(deleteButton).click()
  cy.wait(3000)
  cy.get(toestMessage).invoke('text').should('contain', '削除されました。')
})
  
it('KIND-303 - kinder search',()=>{
  cy.kinderSearch();
})
  
})



