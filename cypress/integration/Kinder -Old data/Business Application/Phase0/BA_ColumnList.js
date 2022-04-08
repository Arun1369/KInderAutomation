// <reference types="Cypress" />
import chaiColors from 'chai-colors'
chai.use(chaiColors)
require('cypress-xpath')
var labels = '.register-lables';
var clickmastersetting = ':nth-child(15) > .fa';
var hamburgerclick = '#dropdown-form__BV_toggle_ > img';
var  clickcolumnlist = '//a[contains(text(),"コラム・サポート依頼")]';

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })


// describe('Main Menu', () => {
//     it('Verify Main Menu', () => {
//         cy.balogin();
//         cy.get(hamburgerclick).click();
//         cy.wait(2000)
//         cy.get(clickmastersetting).click({ multiple: true });
//         cy.wait(4000)
//         //cy.wait(4000)
//         //'//a[contains(text(),"コラム・サポート依頼")]'
    
//         cy.get('.ps-container > .nav > :nth-child(14) > .nav-link').click();
//         cy.wait(4000)
//         //Verify All column Header font
//         cy.columnHeader();

//         //verify the main header of the screen
//         cy.get('h5').invoke('text').should('contain', 'コラム')
//         //verify radio buttons
//         cy.get('.custom-radio>label').invoke('text').should('contain', '表示する')
//         cy.get('.custom-radio>label').invoke('text').should('contain', '表示しない')
//         cy.radionButtonLabel();
//         cy.get(labels).invoke('text').should('contain', '先生アプリに表示') 
//         //save and cancel
        
//         cy.get('[type="button"]').invoke('text').should('contain', '保存');
//         cy.saveandCancel();
//         cy.wait(2000)
//         cy.get('h5.mt-4').invoke('text').should('contain', 'サポート依頼')
//         cy.get('h5.mt-4').should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
//         cy.get('h5.mt-4').should('have.css', 'color').and('eq','rgb(66, 66, 66)')
//         cy.get('h5.mt-4').should('have.css', 'font-size').and('eq', '14px');
//         })
//     })
var masterSetting = '.fa-cogs';
var columnSupport = 'a[href="/staff/#/setting/column"]'
var sendButton = '//button[contains(text(),"送信する")]'

describe('screen content of support reques', () => {
  it('Verify screen content of support reques', () => {
  cy.visit('http://54.238.110.14/staff/#/auth/signin')
  cy.wait(6000)
  cy.get('.px-4').click() 
  cy.wait(2000);
  cy.get('#dropdown-form__BV_toggle_ ').click();
  cy.get(masterSetting).eq(0).click()
  cy.wait(6000)
  cy.debug()
  cy.get(columnSupport).click()
  cy.wait(6000)
  cy.get('u').click({ multiple: true });

  //Verify Header 
  cy.header('サポート依頼');

  cy.get('[class="modal-body"]').within(()=>{
    cy.wait(3000)
    //Verify for message
  cy.get('.pb-3 > .row').invoke('text').should('contain', 'ご依頼内容を確認後、 キンダーズよりご連絡致しますのでそれまでお待ち下さい。')
  cy.get('.pb-3 > .row').should('have.css', 'color').and('eq','rgb(66, 66, 66)')
  cy.get('.pb-3 > .row').should('have.css', 'font-size').and('eq', '14px')  
  cy.get('.pb-3 > .row').should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/);
//Verify for labels
  cy.get('.register-lables').eq(0).invoke('text').should('contain', '送信者')
  cy.get('.vertical-align').eq(1).invoke('text').should('contain', 'きんだーず幼稚園 / 長谷川美由紀')
  cy.get('.register-lables').eq(1).invoke('text').should('contain', '件名')
  //cy.get('.vertical-align').eq(3).first().should('have.attr', 'placeholder', '件名')
  
  cy.get('.register-lables').each(($li, index, $lis) => {
  cy.get($li).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
  cy.get($li).should('have.css', 'color').and('eq','rgb(92, 104, 115)');
  cy.get($li).should('have.css', 'font-size').and('eq', '12px');
  })
  })
  cy.get('[class="modal-footer"]').within(()=>{
    cy.wait(3000)
    //Verify for Sent button
  cy.xpath(sendButton).invoke('text').should('contain', '送信する')
  cy.xpath(sendButton).should('have.css', 'color').and('eq','rgb(255, 255, 255)')
  cy.xpath(sendButton).should('have.css', 'font-size').and('eq', '14px')  
  cy.xpath(sendButton).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/) 
  })
  //Verify for cross mark
  cy.get('.close').should('be.visible')
  })
})