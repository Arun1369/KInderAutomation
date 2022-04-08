/// <reference types="Cypress" />
import chaiColors from 'chai-colors'
chai.use(chaiColors)
//import { URL } from ' ../lib/env.js '
//Cypress.env("url");

require('cypress-xpath')


var kinderMainMenu = '//div[contains(text(),"登録園・企業")]';
var kinderList = '[href="#/nursery/"]';
var dataTranferMenu = '//a[contains(text(),"データ移管")]';
var SaveTranferButton = '//button[contains(text(),"インポート")]';
var uploadButton = '//div[contains(text(),"ファイルを選択")]';


describe('Data Transfer', () => {
    it('Verity data transfer UI', () => {
        cy.login();
    
        cy.xpath(kinderMainMenu).click();
        cy.get(kinderList).eq(0).click({force:true});
        cy.get('td').eq(2).click();
        cy.xpath(dataTranferMenu).click();
        cy.wait(2000);

        //Tab Menu 
        cy.xpath('//a[contains(text(),"データ移管")]').invoke('text').should('contain', 'データ移管')
        cy.get('h5').should('have.css', 'color').and('eq','rgb(0, 0, 0)')
        cy.get('h5').should('have.css', 'font-size').and('eq', '17.5px') 

        

        //Verify the title 
        cy.get('h5').invoke('text').should('contain', 'キンダーズ保育園')
        cy.get('h5').should('have.css', 'color').and('eq','rgb(0, 0, 0)')
        cy.get('h5').should('have.css', 'font-size').and('eq', '17.5px') 
        
        //Verify table font
        cy.get('table').eq(1).within(()=>{
          cy.get('.card-lables').each(($el,index,$li)=>{
            cy.get($el).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
            cy.get($el).should('have.css', 'color').and('eq','rgb(92, 104, 115)')
            cy.get($el).should('have.css', 'font-size').and('eq', '12px');
        })
           
        })
        //Verify table text 
        cy.get('table').eq(1).within(()=>{
        cy.get('.card-lables').eq(0).invoke('text').should('contain', 'データ名')
        cy.get('.card-lables').eq(1).invoke('text').should('contain', 'CSVファイルインポート')
        cy.get('.card-lables').eq(2).invoke('text').should('contain', '作成者 / 最終ファイルインポート日時')
        })

        //Verify Subheader of screen
        cy.get('h7').invoke('text').should('contain', 'コドモンからのデータ移管')
        cy.get('h7').should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
        cy.get('h7').should('have.css', 'color').and('eq','rgb(0, 0, 0)')
        cy.get('h7').should('have.css', 'font-size').and('eq', '14px');


        //Tranfer Button 
        cy.get('table').eq(1).within(()=>{
        cy.xpath(SaveTranferButton).each(($el,index,$list)=>{
            cy.log('aaaaaaaaaaaaaaaaaaaaaaaa');
            cy.get($el).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
            cy.get($el).should('have.css', 'color').and('eq','rgb(255, 255, 255)')
            cy.get($el).should('have.css', 'font-size').and('eq', '14px');
            cy.get($el).invoke('text').should('contain', 'インポート')
        })
           

        })

        //Verify Upload button 
        cy.get('table').eq(1).within(()=>{
        cy.xpath(uploadButton).each(($el,index,$li)=>{
            cy.get($el).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
            cy.get($el).should('have.css', 'color').and('eq','rgb(56, 149, 211)')
            cy.get($el).should('have.css', 'font-size').and('eq', '14px');
            cy.get($el).invoke('text').should('contain', 'ファイルを選択')
        })
           
        })
        
       //Verify Text
        //cy.get('.common-text').eq(0).invoke('text').should('contain', 'CSV の入力例 : 園児データ / 保護者データ / 職員データ')
        cy.get('.common-text').eq(1).invoke('text').should('contain', 'アップロードできるファイルサイズは最大○MBです。')
        cy.get('.common-text').eq(2).invoke('text').should('contain', '既に登録されている場合、データは強制的に上書きされますのでご注意')
        cy.get('.common-text').each(($el,index,$list)=>{
            cy.get($el).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
            cy.get($el).should('have.css', 'color').and('eq','rgb(92, 104, 115)')
            cy.get($el).should('have.css', 'font-size').and('eq', '12px');

        })






        





           






    })
})