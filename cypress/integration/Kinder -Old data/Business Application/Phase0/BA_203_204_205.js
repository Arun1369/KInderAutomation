/// <reference types="Cypress" />
import chaiColors from 'chai-colors'
chai.use(chaiColors)
require('cypress-xpath')

describe('203', () => {
    it('Verify 203 Screen', () => {
      cy.visit("http://119.82.96.68/kinder-bweb/#/stamp/camera")

      //Verify for test
      cy.get('.flex-fill').each(($li, index, $lis) => {
        cy.get($li).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
        cy.get($li).should('have.css', 'color').and('eq','rgb(66, 66, 66)')
        cy.get($li).should('have.css', 'font-size').and('eq', '14px');
    })
    cy.get('.flex-fill').eq(0).invoke('text').should('contain', '登園')
    cy.get('.flex-fill').eq(1).invoke('text').should('contain', '降園')

    //Verify for header
    cy.get('.d-md-inline').each(($li, index, $lis) => {
      cy.get($li).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
      cy.get($li).should('have.css', 'color').and('eq','rgb(66, 66, 66)')
      cy.get($li).should('have.css', 'font-size').and('eq', '12px');
  })
  cy.get('.d-md-inline').eq(0).invoke('text').should('contain', '保護者アプリに表示されているQR')
  cy.get('.d-md-inline').eq(1).invoke('text').should('contain', 'コードを合わせてください。')

    //Verify for cross mark
  cy.get('.close').should('be.visible')
  })
})


var yesButton = '//button[contains(text(),"OK")]'
describe('204', () => {
  it('Verify 204 Screen', () => {
    cy.visit("http://119.82.96.68/kinder-bweb/#/stamp/brother")

    //Verify Header
  cy.get('.school-string').invoke('text').should('contain', '登園児はこちらでよろしいですか？')
  cy.get('.school-string').should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
  cy.get('.school-string').should('have.css', 'color').and('eq','rgb(66, 66, 66)')
  cy.get('.school-string').should('have.css', 'font-size').and('eq', '17.5px');

  //Verify radio button
    cy.get('.custom-radio').each(($li, index, $lis) => {
      cy.get($li).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
      cy.get($li).should('have.css', 'color').and('eq','rgb(66, 66, 66)')
      cy.get($li).should('have.css', 'font-size').and('eq', '14px');
  })
  cy.get('.custom-radio').eq(0).invoke('text').should('contain', '出席')
  //cy.get('.custom-radio').eq(0).should("be.checked")
  cy.get('.custom-radio').eq(1).invoke('text').should('contain', '欠席')
  cy.get('.custom-radio').eq(2).invoke('text').should('contain', '出席')
  //cy.get('.custom-radio').eq(2).should("be.checked")
  cy.get('.custom-radio').eq(3).invoke('text').should('contain', '欠席')


  //Verify radio button fields
  cy.get('.register-lables').each(($li, index, $lis) => {
    cy.get($li).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
    cy.get($li).should('have.css', 'color').and('eq','rgb(92, 104, 115)')
    cy.get($li).should('have.css', 'font-size').and('eq', '12px');
})
cy.get('.register-lables').eq(0).invoke('text').should('contain', '東海林ひとみ')
cy.get('.register-lables').eq(1).invoke('text').should('contain', '東海林なおや')


//Verify for yes button
    cy.xpath(yesButton).invoke('text').should('contain', 'OK')
    cy.xpath(yesButton).should('have.css', 'color').and('eq','rgb(255, 255, 255)')
    cy.xpath(yesButton).should('have.css', 'font-size').and('eq', '14px');
    cy.xpath(yesButton).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/);

  //Verify for cross mark
  cy.get('.close').should('be.visible')
  cy.wait(6000)
  
})
})

var returnToAttendance = '//button[contains(text(),"登園児出欠に戻る")]'
var yesButton = '//button[contains(text(),"OK")]'
describe('205', () => {
  it('Verify 205 Screen', () => {
    cy.visit("http://119.82.96.68/kinder-bweb/#/stamp/brother")
    cy.wait(6000)
    cy.xpath(yesButton).first().click()

    //Verifiy for Header
  cy.xpath('//div[contains(text(),"東海林ひとみちゃんの登園")]').invoke('text').should('contain', '東海林ひとみちゃんの登園')
  cy.xpath('//div[contains(text(),"東海林なおやくんの欠席")]').invoke('text').should('contain', '東海林なおやくんの欠席')
  cy.xpath('//div[contains(text(),"を確認しました。")]').invoke('text').should('contain', 'を確認しました。')
  cy.xpath('//div[contains(text(),"を確認しました。")]').should('have.css', 'color').and('eq','rgb(66, 66, 66)')
  cy.xpath('//div[contains(text(),"を確認しました。")]').should('have.css', 'font-size').and('eq', '14px');
  cy.xpath('//div[contains(text(),"を確認しました。")]').should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/);

  //Verify for 本日のお迎えは東海林大介( 父)東海林大介( 父) 様ですか？
  cy.get('.d-flex').eq(1).should('have.css', 'color').and('eq','rgb(66, 66, 66)')
  cy.get('.d-flex').eq(1).should('have.css', 'font-size').and('eq', '14px');
  cy.get('.d-flex').eq(1).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/);

  cy.get('.pick-up').invoke('text').should('contain', '本日のお迎えは')
  cy.get('.custom-select').invoke('text').should('contain', '東海林大介( 父)')
  cy.get('.parent-like').invoke('text').should('contain', '様ですか？')

  //Verify for return to Attendance buttons
  cy.xpath(returnToAttendance).invoke('text').should('contain', '登園児出欠に戻る')
  cy.xpath(returnToAttendance).should('have.css', 'color').and('eq','rgb(255, 255, 255)')
  cy.xpath(returnToAttendance).should('have.css', 'font-size').and('eq', '14px');
  cy.xpath(returnToAttendance).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/);

  //Verify for Yes button
  cy.xpath(yesButton).invoke('text').should('contain', 'OK')
  cy.xpath(yesButton).should('have.css', 'color').and('eq','rgb(255, 255, 255)')
  cy.xpath(yesButton).should('have.css', 'font-size').and('eq', '14px');
  cy.xpath(yesButton).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/);
 

  //Verify for cross mark
  cy.get('.close').should('be.visible')
  
})
})

var reRegister = '//button[contains(text(),"登録しなおす")]'
describe('213', () => {
  it('Verify 213 Screen', () => {
    cy.wait(6000)
    cy.xpath(yesButton).first().click()
    cy.get('.modal-body').within(()=>{
  //Verifiy for Header
  cy.get('.text-center').each(($li, index, $lis) => {
  cy.get($li).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
  cy.get($li).should('have.css', 'color').and('eq','rgb(66, 66, 66)')
  cy.get($li).should('have.css', 'font-size').and('eq', '14px');
})
 cy.get('.text-center').eq(0).invoke('text').should('contain', '東海林ひとみちゃんの登園')
 cy.get('.text-center').eq(1).invoke('text').should('contain', '東海林なおやくんの欠席')

 
  //Verify for return to Attendance buttons
  cy.xpath(reRegister).invoke('text').should('contain', '登録しなおす')
  cy.xpath(reRegister).should('have.css', 'color').and('eq','rgb(10, 201, 164)')
  cy.xpath(reRegister).should('have.css', 'font-size').and('eq', '14px');
  cy.xpath(reRegister).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/);
})

  //Verify for cross mark
  cy.get('.close').should('be.visible')
  

})
})