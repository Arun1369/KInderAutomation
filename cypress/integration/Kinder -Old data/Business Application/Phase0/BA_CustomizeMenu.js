/// <reference types="Cypress" />
import chaiColors from 'chai-colors'
chai.use(chaiColors)
require('cypress-xpath')


var customizeMenu = '//em[@class="fa fa-th Cursor"]';


describe('Custmize menu', () => {
    it('Verify custamize menu screen content', () => {
        cy.balogin();
        cy.get('#dropdown-form__BV_toggle_').click();
        cy.xpath(customizeMenu).eq(0).click()
        cy.wait(4000);
        //Verify Header 
        cy.header('メインメニューカスタマイズ');
        //Verify 
        cy.get('.well').invoke('text').should('contain', 'アイコンをドラッグして表示順を入れ替えることができます。また、サイドパネル表示で常にアイコン表示することができます')
        cy.get('.well').should('have.css', 'color').and('eq','rgb(66, 66, 66)')
        cy.get('.well').should('have.css', 'font-size').and('eq', '14px')  
        cy.get('.well').should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/);

         
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

        //Verify save button 
        cy.xpath('//button[contains(text(),"保存")]').invoke('text').should('contain', '保存')
        cy.xpath('//button[contains(text(),"保存")]').should('have.css', 'color').and('eq','rgb(255, 255, 255)')
        cy.xpath('//button[contains(text(),"保存")]').should('have.css', 'font-size').and('eq', '14px')  
        cy.xpath('//button[contains(text(),"保存")]').should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
        //verify radio button label
        cy.xpath('//div[contains(text(),"メインメニューをサイドパネルで表示")]').invoke('text').should('contain', 'メインメニューをサイドパネルで表示')
        cy.xpath('//div[contains(text(),"メインメニューをサイドパネルで表示")]').should('have.css', 'color').and('eq','rgb(66, 66, 66)')
        cy.xpath('//div[contains(text(),"メインメニューをサイドパネルで表示")]').should('have.css', 'font-size').and('eq', '14px')  
        cy.xpath('//div[contains(text(),"メインメニューをサイドパネルで表示")]').should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
        //Verify radio button 
        cy.get('#check-button-mainmenucustom-1').check({force: true})
    })
})