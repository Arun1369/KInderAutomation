/// <reference types="Cypress" />
import chaiColors from 'chai-colors'
chai.use(chaiColors)
require('cypress-xpath')

describe('Main Menu', () => {
    it('Verify Main Menu', () => {
        cy.balogin();
        cy.get('#dropdown-form__BV_toggle_ > img').click();

//Tab names 
cy.mainMenuChecks('//p[contains(text(),"メインボード")]','メインボード');
cy.mainMenuChecks('//p[contains(text(),"登降園管理")]','登降園管理');
cy.mainMenuChecks('//p[contains(text(),"バス運行管理")]','バス運行管理');
cy.mainMenuChecks('//p[contains(text(),"行事予定")]','行事予定');
cy.mainMenuChecks('//p[contains(text(),"園内連絡")]','園内連絡');
cy.mainMenuChecks('//p[contains(text(),"保護者連絡")]','保護者連絡');
cy.mainMenuChecks('//p[contains(text(),"お知らせ")]','お知らせ');
cy.mainMenuChecks('//p[contains(text(),"園だより")]','園だより');
cy.mainMenuChecks('//p[contains(text(),"緊急連絡")]','緊急連絡');
cy.mainMenuChecks('//p[contains(text(),"シフト管理")]','シフト管理');
cy.mainMenuChecks('//p[contains(text(),"指導案")]','指導案');
cy.mainMenuChecks('//p[contains(text(),"承認管理")]','承認管理');
cy.mainMenuChecks('//p[contains(text(),"請求管理")]','請求管理');
cy.mainMenuChecks('//p[contains(text(),"園児台帳")]','園児台帳');
cy.mainMenuChecks('//p[contains(text(),"マスタ設定")]','マスタ設定');
cy.mainMenuChecks('//p[contains(text(),"勤怠管理")]','勤怠管理');
cy.mainMenuChecks('//p[contains(text(),"延長保育状況")]','延長保育状況');
cy.mainMenuChecks('//p[contains(text(),"アンケート")]','アンケート');
cy.mainMenuChecks('//p[contains(text(),"ヒヤリハット")]','ヒヤリハット');
cy.mainMenuChecks('//p[contains(text(),"身体測定")]','身体測定');
cy.mainMenuChecks('//p[contains(text(),"避難訓練")]','避難訓練');
cy.mainMenuChecks('//p[contains(text(),"オリジナル")]','オリジナル');

//Bottom text verification on menu
cy.get(':nth-child(3) > .align-center-custom').invoke('text').should('contain', 'メニューカスタマイズ')
cy.get(':nth-child(3) > .align-center-custom').should('have.css', 'color').and('eq','rgb(0, 0, 0)')
cy.get(':nth-child(3) > .align-center-custom').should('have.css', 'font-size').and('eq', '14px');

//Top text verification on menu
cy.get('a[href="#/main"]').invoke('text').should('contain', '管理システムからのお知らせが2件あります')
cy.get('a[href="#/main"]').should('have.css', 'color').and('eq','rgb(10, 201, 164)')
cy.get('a[href="#/main"]').should('have.css', 'font-size').and('eq', '17.5px');

//Verification for exclamatory icon
cy.get(':nth-child(1) > .align-center-custom > .fa').should('be.visible')

    })
})

describe('Logout', () => {
    it('Verify Logout', () => {
        cy.balogin();
//Verifiy for Profile
cy.get('.profile-name > .p-1').first().click()
cy.wait(3000)
//Verify for Logout drop-down
cy.get(':nth-child(2) > .dropdown-item').invoke('text').should('contain', 'ログアウト')
cy.get(':nth-child(2) > .dropdown-item').should('have.css', 'color').and('eq','rgb(35, 40, 44)')
cy.get(':nth-child(2) > .dropdown-item').should('have.css', 'font-size').and('eq', '14px');
cy.wait(3000)
//Click on drop-down
cy.get(':nth-child(2) > .dropdown-item').first().click();
})
})