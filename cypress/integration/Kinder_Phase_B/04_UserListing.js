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
//import { data } from '../../fixtures/testData.js'





Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })

var data;
describe('User Listing', () => {
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

const newEmail = faker.internet.email();

it('KIND-355(User edit)', () => {
 cy.login();
  cy.xpath(userRegistration).click({ force: true });
  cy.wait(4000)
  cy.get(userName).clear()
  cy.get(userName).type(faker.name.firstName())
  cy.get(displayName).type(faker.name.lastName())
  cy.get(mailId).clear()
  cy.get(mailId).type(data.userForEdit)
  cy.get(passWord).click()
  cy.get(passWord).type('Admin123')
  cy.xpath(saveButton).click();
  cy.wait(5000)
  cy.contains(data.userForEdit).click()
  cy.wait(6000)
  cy.get(mailId).clear()
  cy.get(mailId).type(newEmail)
  cy.xpath(saveButton).click();
  cy.wait(5000)
  cy.contains(newEmail).should("be.visible")

})

it('KIND-355(Delete the user)', () => {
  cy.xpath(userListing).click({ force: true });
  cy.wait(8000)
  //Click on Elipse option to delete the users
  //cy.get('tr').within(()=>{
    cy.get('td').contains(newEmail).parent('tr').within(() => {
    cy.get('.fa-ellipsis-v').click({ force: true });
    cy.wait(2000)
    cy.get('.fa-trash').click({ force: true });
  })
    cy.xpath('//button[contains(text(),"はい")]').click()
    
    cy.wait(12000)
    //Logout from application
    cy.clearLocalStorage()
    cy.reload();
    cy.accessLoginPage()
  
  cy.get('[autocomplete="email"]').type(newEmail)
  cy.get('[autocomplete="password"]').type('admin123')
  cy.get('.btn').click()
  cy.wait(3000)
  cy.get(toestMessage).invoke('text').should('contain', 'ログインIDまたはパスワードが間違っています')

})

var loginField = '[autocomplete="email"]';

it('KIND-355(Verify able to login wih created account)', () => {
  
  cy.wait(5000)
 // cy.visit('/admin/auth/signin');
 cy.get('[autocomplete="email"]').clear()
  cy.get('[autocomplete="email"]').type(data.userEmailID)  /// 
  cy.get('[autocomplete="password"]').clear();
  cy.get('[autocomplete="password"]').type('Admin123')
  cy.get('.btn').click()
  cy.wait(3000)
  cy.get('.profile-name').should("be.visible")
})


it('KIND-49(Verify Filters)', () => {
    //Logout from application and login to the superadmin
    cy.clearLocalStorage();
    cy.reload();
    cy.login();
  cy.xpath(userListing).click({force:true})
  cy.wait(6000)
  cy.get('[class="rolesMaxWidth custom-select"]')
    .select(data.role, { force: true }) //Remove hard coded values while running
  
  cy.wait(4000)
  cy.contains(data.userEmailID).should('be.visible')   
})

it('KIND-51(Verify inactivating the user)', () => {
  cy.xpath(userListing).click({force:true})
  cy.wait(5000)
  //Inactivate the user
  cy.get('td').contains(data.userEmailID).parent('tr').within(() => {
    cy.get('.fa-ellipsis-v').click({ force: true });
    cy.get('.fa-pencil-square').click();
    cy.wait(6000)
  })

  cy.get('[type="radio"]').eq(1).check({ force: true }) 
  cy.xpath(saveButton).click();
  cy.wait(5000)
  cy.clearLocalStorage();
  cy.reload();
  cy.accessLoginPage()
  
 
  // cy.visit('/admin/auth/signin');
   cy.get('[autocomplete="email"]').type(data.userEmailID)
   cy.get('[autocomplete="password"]').type('Admin123')
   cy.get('.btn').click();
   cy.wait(5000)
   cy.get(loginField).should("be.visible")
 
})

var batchProcessingButton = '//button[contains(text(),"一括処理")]';
var batchProcessingSaveButton = '//button[contains(text(),"適用")]'



it('KIND-55(Activete user using batch processing)', () => {
  cy.login();
  cy.xpath(userListing).click({force:true})
  cy.xpath(userListing).click({force:true})
  cy.wait(6000)
  cy.get('td').contains(data.userEmailID).parent('tr').within(() => {
    cy.get('[type="checkbox"]').click();
  })

  cy.xpath(batchProcessingButton).click();
  cy.xpath(batchProcessingSaveButton).click();
  cy.wait(5000)
  cy.clearLocalStorage()
  cy.reload();
  cy.accessLoginPage()
  cy.wait(8000)
   cy.get('[autocomplete="email"]').type(data.userEmailID)
   cy.get('[autocomplete="password"]').type('Admin123')
   cy.get('.btn').click();
   cy.wait(5000)
   cy.get(loginField).should("not.exist")
  
})


})

