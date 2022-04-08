import chaiColors from 'chai-colors'
chai.use(chaiColors)
var faker = require("faker");
var fakerJa = require("faker/locale/ja");
var registerButton = '//button[contains(text(),"登録")]';
var validationMessage = '.text-left';
var choosecompanybutton = '//button[contains(text(),"企業検索")]';
var searchicon = ':nth-child(1) > form > .input-group > .input-group-append > .input-group-text'
var searchbox = '[placeholder="企業検索または所属園"]'
var choosebutton = '//button[contains(text(),"選択")]';
var nameofthegarden = '[placeholder="園の名前"]'
var kinderListing = '//a[contains(text(),"  園一覧")]';
var kinderName = '[placeholder="園の名前"]';
var toestMessage = '.toast-message';
var saveDraft = '//button[contains(text(),"下書き保存")]';
var selectCompany = '//button[contains(text(),"選択")]';
// var companyname='firecompany'
// const newgarden  = faker.name.firstName();
var kinderCreation = '//a[contains(text(),"園登録")]';

require('cypress-xpath')
//import { data } from '../../fixtures/testData.js'
var data;

Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})

describe('Kinder registration - K 05', () => {
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


  it('KIND-385/456(Verify validation message)', () => {
   cy.login();
    cy.url().should('include', 'kinder')
    cy.xpath(kinderCreation).click({ force: true });
    cy.wait(3000)
    cy.xpath(registerButton).click();
    cy.wait(8000)
    cy.get(validationMessage).invoke('text').should('contain', '必須項目を入力して下さい。')
    cy.wait(2000)
    //cy.get(':nth-child(2) > #input-default-Name').type('sdsdsd')
  })

  var kinderNameInactivate = faker.name.firstName();
  var kinderNameforDraft = faker.name.firstName();

  it('KIND-481 (Verification of registration button)', () => {
    cy.xpath(kinderCreation).click({ force: true });
    cy.wait(3000)
    cy.xpath(choosecompanybutton).click({ force: true })
    cy.wait(3000)
    cy.get(searchbox).clear()
    cy.get(searchbox).type(data.companyName1, { force: true })
    cy.wait(2000)
    cy.get(searchbox).type('{enter}')
    cy.wait(8000);
      cy.xpath(selectCompany).click();
    cy.get(kinderName).type(data.kindername1, { force: true })
    cy.xpath(registerButton).click();
    cy.wait(2000)
    cy.get(toestMessage).invoke('text').should('contain', '登録が完了しました。')

  })

  it('KIND-(kinder edit)', () => {
    cy.wait(8000)
    cy.contains(data.kindername1).click()
    cy.wait(5000)
    cy.xpath('//button[contains(text(),"編集")]').click()
    cy.wait(5000)
    cy.get('[placeholder="責任者名"]').type('test')
    cy.xpath('//button[contains(text(),"登録")]').click()
    cy.wait(3000)
    cy.get(toestMessage).invoke('text').should('contain', '更新されました。')

  })

  it('KIND - 486 (Create and inactivate the kinder)', () => {
    cy.xpath(kinderCreation).click({ force: true });
    cy.wait(3000)
    cy.xpath(choosecompanybutton).click({ force: true })
    cy.wait(3000)
    cy.get(searchbox).clear()
    cy.get(searchbox).type(data.companyName1, { force: true })
    cy.wait(2000)
    cy.get(searchbox).type('{enter}')
    cy.wait(8000)
   
      cy.xpath(selectCompany).click();
      cy.wait(6000)
    cy.get(kinderName).type(kinderNameInactivate, { force: true })
    cy.xpath('//span[contains(text(),"利用停止")]').click()
    cy.xpath(registerButton).click({ force: true });
    cy.wait(3000)
    cy.get(toestMessage).invoke('text').should('contain', '登録が完了しました。')

  })


  it('KIND - 486 (Create the kinder and Draft status)', () => {
    cy.xpath(kinderCreation).click({ force: true });
    cy.wait(3000)
    cy.xpath(choosecompanybutton).click({ force: true })
    cy.wait(3000)
    cy.get(searchbox).clear()
    cy.get(searchbox).type(data.companyName1, { force: true })
    cy.wait(2000)
    cy.get(searchbox).type('{enter}')
    cy.wait(8000)
  //  cy.get('td').contains(data.companyName1).parent('tr').within(() => {
      cy.xpath(selectCompany).click();
      cy.wait(6000)
  //  })
    cy.get(kinderName).type(kinderNameforDraft, { force: true })
    cy.xpath(saveDraft).click();
    cy.wait(3000)
    cy.get(toestMessage).invoke('text').should('contain', '登録が完了しました。')
  })

  it('KIND - 486 (Verify the status of kinder)', () => {
    cy.wait(6000);
    cy.contains(kinderNameforDraft).click(  {force: true });
    cy.wait(6000)
    cy.xpath("//span[contains(text(),'ステータス:下書き')]").invoke('text').should('contain', 'ステータス:下書き')
  })

  var applierKinder = faker.name.firstName();

  it('KIND-479(Create kinder from appriler ))', () => {

    cy.clearLocalStorage();
    cy.reload();
    cy.accessLoginPage()
    cy.customLogin(data.applierEmailID, data.applierPassword)
    cy.xpath(kinderCreation).click({ force: true });
    cy.wait(3000)
    cy.xpath(choosecompanybutton).click({ force: true })
    cy.wait(3000)
    cy.get(searchbox).clear()
    cy.get(searchbox).type(data.companyName1, { force: true })
    cy.wait(2000)
    cy.get(searchbox).type('{enter}')
    cy.wait(8000)
    //cy.get('td').contains(data.companyName1).parent('tr').within(() => {
      cy.xpath(selectCompany).click( {force: true });
      cy.wait(6000)
  //  })
    cy.get(kinderName).type(applierKinder, { force: true })
    cy.xpath("//button[contains(text(),'申請する')]").click();
    cy.wait('@postRoutes')
    cy.contains(applierKinder).click({ force: true });
    cy.wait(10000)
    cy.xpath("//span[contains(text(),'ステータス:申請中')]").invoke('text').should('contain', 'ステータス:申請中')

  })

})
