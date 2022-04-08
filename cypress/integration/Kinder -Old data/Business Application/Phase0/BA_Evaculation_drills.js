/// <reference types="Cypress" />
import chaiColors from 'chai-colors'
chai.use(chaiColors)
require('cypress-xpath')

var drillButton = '.fa-street-view';
var createButton = '//button[contains(text(),"作成")]'
var selectChildren = '//button[contains(text(),"選択した園児")]'
describe('Evaculation drills', () => {
    it('Verify Evaculation drills Screen', () => {
        cy.visit('http://54.238.110.14/staff/#/auth/signin')
    cy.wait(6000)
    cy.get('.px-4').click() 
    cy.wait(2000);
    cy.get('#dropdown-form__BV_toggle_ ').click();
    cy.wait(6000)
    cy.get(drillButton).eq(0).click({force: true});
    cy.wait(6000)
    cy.debug()
    cy.get('.nav-item').eq(6).click({force: true});
    

        //Verify Tab title font,
        cy.get('.nav-item').eq(6).invoke('text').should('contain', '避難訓練')
        cy.get('.nav-item').eq(6).should('have.css', 'color').and('eq','rgb(66, 66, 66)')
        cy.get('.nav-item').eq(6).should('have.css', 'font-size').and('eq', '14px')
        cy.get('.nav-item').eq(6).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
        cy.wait(3000)

        cy.get('.tab-pane').eq(4).within(()=>{
            cy.wait(3000)
        //Verify for drop-down
        cy.get('.custom-select').eq(0).invoke('text').should('contain', '災害の種類')
        cy.get('.custom-select').eq(1).invoke('text').should('contain', '責任者')
        cy.get('.custom-select').should('have.css', 'color').and('eq','rgb(66, 66, 66)')
        cy.get('.custom-select').should('have.css', 'font-size').and('eq', '14px')
        cy.get('.custom-select').should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)

         //Verify for create button
         cy.xpath(createButton).invoke('text').should('contain', '作成')
         cy.xpath(createButton).should('have.css', 'color').and('eq','rgb(255, 255, 255)')
         cy.xpath(createButton).should('have.css', 'font-size').and('eq', '14px')
         cy.xpath(createButton).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)

        //Verify for Search 
        cy.get('.form-control').first().should('have.attr', 'placeholder', '検索')
        cy.get('.form-control').should('have.css', 'color').and('eq','rgb(66, 66, 66)')
        cy.get('.form-control').should('have.css', 'font-size').and('eq', '14px')  
        cy.get('.form-control').should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)

        //Verify for batch processing
        cy.get('.dropdown-toggle-no-caret').invoke('text').should('contain', '一括処理')
        cy.get('.dropdown-toggle-no-caret').should('have.css', 'color').and('eq','rgb(255, 255, 255)')
        cy.get('.dropdown-toggle-no-caret').should('have.css', 'font-size').and('eq', '14px')
        cy.get('.dropdown-toggle-no-caret').should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)

        //Verify for column headers
        cy.get('th').eq(1).invoke('text').should('contain', '実施日')
        cy.get('th').eq(2).invoke('text').should('contain', '災害の種類')
        cy.get('th').eq(3).invoke('text').should('contain', '想定場所')
        cy.get('th').eq(4).invoke('text').should('contain', '実施責任者')
        cy.get('th').eq(5).invoke('text').should('contain', 'ステータス')
        cy.get('th').eq(6).invoke('text').should('contain', '最終更新日時')


        cy.get('th').each(($li, index, $lis) => {
        cy.get($li).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
        cy.get($li).should('have.css', 'color').and('eq','rgb(66, 66, 66)');
        cy.get($li).should('have.css', 'font-size').and('eq', '12px');
        })

        cy.wait(3000)
        cy.get('.custom-control-label').invoke('text').should('contain', '承認済も表示')
        cy.get('.custom-control-label').should('have.css', 'color').and('eq','rgb(66, 66, 66)')
        cy.get('.custom-control-label').should('have.css', 'font-size').and('eq', '14px')  
        cy.get('.custom-control-label').should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
        //cy.get('[type="checkbox"]').should("not.be.checked")

        //Verify for print an download
        cy.get('.btn-outline-primary').eq(0).should('be.visible')
        cy.get('.btn-outline-primary').eq(1).should('be.visible')
        cy.get('.dropdown-toggle-no-caret').eq(0).should('be.visible')
        })
    })
})