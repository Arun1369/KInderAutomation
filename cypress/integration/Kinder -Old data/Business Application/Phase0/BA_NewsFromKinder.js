// <reference types="Cypress" />
import chaiColors from 'chai-colors'
chai.use(chaiColors)
require('cypress-xpath')

var contractparkButton = '.fa-id-card-o';
//var contractButton  = '.fa-angle-double-down';
var newsFromLetterOptions = '//a[contains(text(),"園だより")]';

describe('Contact in Park', () => {
    it('Verify contact in park screen content', () => {
        cy.balogin();
        cy.get('#dropdown-form__BV_toggle_').click();
        cy.get(contractparkButton).eq(0).click()
        cy.wait(4000)
        cy.xpath(newsFromLetterOptions).click();
        //Verify the title
        cy.activeTabtitle('園だより');
        //Verify search option
        cy.searchButton('検索');
        cy.get('[class="tab-pane active"]').within(()=>{
            cy.get('[name="date"]').should('not.be.disabled')
            cy.get('[class="custom-select"]').should('not.be.disabled')
            //Verify checkbox label
            cy.checkBoxLabel();
            cy.get('[class="custom-control-label"]').invoke('text').should('contain', '送信済みも表示')
            //Verify checkbox
            cy.get('[type="checkbox"]').should("be.checked")
            //Verify column header
            cy.columnHeader();
            cy.get('th').invoke('text').should('contain', 'タイトル')
            cy.get('th').invoke('text').should('contain', '宛先')
            cy.get('th').invoke('text').should('contain', '最終更新日時')
            cy.get('th').invoke('text').should('contain', '送信日時')
            cy.get('th').invoke('text').should('contain', '作成者')
            cy.get('th').invoke('text').should('contain', '処理状態')
                
            //Verify Button
            cy.get('[type="button"]').eq(0).invoke('text').should('contain', '作成')
            //Verify cerate button
            cy.createButton();
             //Verify side menu
            cy.get('.fa-ellipsis-v').eq(1).click();
            cy.get('.dropdown-item').each(($li, index, $lis) => {
            cy.get($li).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
            cy.get($li).should('have.css', 'color').and('eq','rgb(35, 40, 44)');
            cy.get($li).should('have.css', 'font-size').and('eq', '14px');
           })
       //Verify Text
         cy.get('.dropdown-item').invoke('text').should('contain', '印刷')
         cy.get('.dropdown-item').invoke('text').should('contain', 'プレビュー')
         cy.get('.dropdown-item').invoke('text').should('contain', '削除')

         //Verify print option
         cy.get('.fa-print').should('not.be.disabled')
        //Verify download button 
         cy.get('.btn-outline-primary').eq(0).should('not.be.disabled')
        //Verify status button in table
         cy.xpath('//span[contains(text(),"カテゴリー")]').eq(1).invoke('text').should('contain', 'カテゴリー')
         cy.xpath('//span[contains(text(),"作成中")]').eq(1).invoke('text').should('contain', '作成中')
         cy.get('.badge-secondary').eq(1).each(($li, index, $lis) => {
            cy.get($li).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
            cy.get($li).should('have.css', 'color').and('eq','rgb(255, 255, 255)');
            cy.get($li).should('have.css', 'font-size').and('eq', '10.8px');
           })

        })  
       
    })
})