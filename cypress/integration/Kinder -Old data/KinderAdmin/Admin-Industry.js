/// <reference types="Cypress" />
import chaiColors from 'chai-colors'
chai.use(chaiColors)
//import { URL } from ' ../lib/env.js '
//Cypress.env("url");

require('cypress-xpath')


var kinderMainMenu = '//div[contains(text(),"登録園・企業")]';
var industryList = '[href="#/industry"]';
var dataTranferMenu = '//a[contains(text(),"データ移管")]';
var SaveTranferButton = '//button[contains(text(),"インポート")]';
var uploadButton = '//div[contains(text(),"ファイルを選択")]';
var createButton = '//button[contains(text(),"新規追加")]';
var saveButton = '//button[contains(text(),"保存")]';
var deleteButton = '//button[contains(text(),"削除")]';


describe('Industry list', () => {
    it('Verity Industry list Ui', () => {
        cy.login();
        cy.xpath(kinderMainMenu).click();
        cy.get(industryList).eq(0).click({force:true});
        cy.get(industryList).invoke('text').should('contain', ' 業種管理')
        cy.get(industryList).should('have.css', 'color').and('eq','rgb(255, 255, 255)')
        cy.get(industryList).should('have.css', 'font-size').and('eq', '14px')
        cy.get(industryList).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)

        cy.get('h5').should('have.css', 'color').and('eq','rgb(0, 0, 0)')
        cy.get('h5').should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
        cy.get('h5').should('have.css', 'font-size').and('eq', '17.5px')
        cy.get('h5').invoke('text').should('contain', '業種')
         //Radion button verification (Font,text)
        cy.get('[type="radio"]').first().should("be.checked");

        cy.get('.custom-radio >label').eq(0).invoke('text').should('contain', '利用可')
        cy.get('.custom-radio >label').eq(1).invoke('text').should('contain', '利用停止')
        cy.get('.custom-radio >label').each(($el,index,$li)=>{
            cy.get($el).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
            cy.get($el).should('have.css', 'color').and('eq','rgb(0, 0, 0)')
            cy.get($el).should('have.css', 'font-size').and('eq', '14px');

        })

        //Verify input text
        cy.debug();
        cy.xpath('//span[contains(text(),"業種名")]').eq(0).invoke('text').should('contain', '業種名')
        cy.xpath('//span[contains(text(),"業種名")]').eq(0).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
        cy.xpath('//span[contains(text(),"業種名")]').eq(0).should('have.css', 'color').and('eq','rgb(92, 104, 115)')
       cy.xpath('//span[contains(text(),"業種名")]').eq(0).should('have.css', 'font-size').and('eq', '12px');

        //Verify createButton 
        cy.debug();
        cy.xpath(createButton).invoke('text').should('contain', '新規追加')
        cy.xpath(createButton).should('have.css', 'color').and('eq','rgb(255, 255, 255)')
        cy.xpath(createButton).should('have.css', 'font-size').and('eq', '14px');
        cy.xpath(createButton).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)


        //Verify save button 

        cy.xpath(saveButton).invoke('text').should('contain', '保存')
        cy.xpath(saveButton).should('have.css', 'color').and('eq','rgb(255, 255, 255)')
        cy.xpath(saveButton).should('have.css', 'font-size').and('eq', '14px');
        cy.xpath(saveButton).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)


        //Left side text
        cy.get('.display-inline').should('have.css', 'color').and('eq','rgb(92, 104, 115)')
        cy.get('.display-inline').should('have.css', 'font-size').and('eq', '14px');
        cy.get('.display-inline').should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)


        //Verify toggle box all should not be checked 
        cy.get('[type="checkbox"]').each(($el,index,$li)=>{
            cy.get($el).should("not.be.checked")


        })

      
        //Delete button 
        cy.debug()
        cy.xpath(deleteButton).invoke('text').should('contain', '削除')
        cy.xpath(deleteButton).should('have.css', 'color').and('eq','rgb(248, 108, 107)')
        cy.xpath(deleteButton).should('have.css', 'font-size').and('eq', '14px');
        cy.xpath(deleteButton).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)




    })
})