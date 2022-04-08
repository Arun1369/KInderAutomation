// <reference types="Cypress" />
import chaiColors from 'chai-colors'
chai.use(chaiColors)
require('cypress-xpath')

var contractparkButton = '.fa-id-card-o';
//var contractButton  = '.fa-angle-double-down';
var emergencyContacts = '//a[contains(text(),"緊急連絡")]';

describe('Emergency contact details', () => {
    it('Verify emergency contact details screen content', () => {
        cy.balogin();
        cy.get('#dropdown-form__BV_toggle_').click();
        cy.get(contractparkButton).eq(0).click()
        cy.wait(4000)
        cy.xpath(emergencyContacts).click();
        //Verify the title
        cy.activeTabtitle('緊急連絡');
        cy.get('[class="tab-pane active"]').within(()=>{
            //Verify column header
            cy.columnHeader();
            cy.get('th').invoke('text').should('contain', 'タイトル')
            cy.get('th').invoke('text').should('contain', '送信者')
            cy.get('th').invoke('text').should('contain', '最終更新日時')
            cy.get('th').invoke('text').should('contain', '送信日時')
            //Veriffy Table header
            cy.get('h4').invoke('text').should('contain', '送信履歴')
            cy.get('h4').should('have.css', 'color').and('eq','rgb(66, 66, 66)')
            cy.get('h4').should('have.css', 'font-size').and('eq', '21px')  
            cy.get('h4').should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)

            //Verify Text
            cy.get('.border > :nth-child(1)').invoke('text').should('contain', '緊急連絡は【在籍している園児の保護者様】へ一斉送信されるお知らせとなります')
            cy.get('.border > :nth-child(2)').invoke('text').should('contain', '[ すぐに送信 ] ボタンを押してダイアログ確認の送信ボタンを押すとすぐに送信されますので、操作にご注意ください')
            cy.get('.border > :nth-child(1)').should('have.css', 'color').and('eq','rgb(66, 66, 66)')
            cy.get('.border > :nth-child(1)').should('have.css', 'font-size').and('eq', '14px')  
            cy.get('.border > :nth-child(1)').should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)

            //Verify send immeadtly button
            cy.createButton();
            //Verify Text
            cy.get('.btn-primary').invoke('text').should('contain', 'すぐに送信')

            //verify the title
            cy.get('.card-title').invoke('text').should('contain', '災害時緊急連絡用')
            cy.get('.card-title').invoke('text').should('contain', '緊急連絡タイトル')

            cy.get('h4').should('have.css', 'color').and('eq','rgb(66, 66, 66)')
            cy.get('h4').should('have.css', 'font-size').and('eq', '21px')  
            cy.get('h4').should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)




        
        })
        
    })
})
