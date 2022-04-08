/// <reference types="Cypress" />
import chaiColors from 'chai-colors'
chai.use(chaiColors)
require('cypress-xpath')

var masterScreenButton = '.fa-cogs';
var shiftSettings = '//a[contains(text(),"シフト設定")]';

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })

describe('Shift Settings', () => {
    it('Verify Shift Settings Screen', () => {
        cy.balogin();
        cy.get('#dropdown-form__BV_toggle_ > img').click();
        cy.get(masterScreenButton).eq(0).click({ multiple: true})
        cy.wait(6000)
        cy.debug()
        cy.xpath(shiftSettings).click({ multiple: true})

        //Verify Tab title font,
        cy.masterSettingsTab(shiftSettings,"シフト設定")
       
        cy.wait(3000)
       //Verify All text
        cy.get('[class="tab-pane active"]').within(()=>{
            cy.wait(3000)
            
        //Verify All Headers font
            cy.get('h5').each(($li, index, $lis) => {
            cy.get($li).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
            cy.get($li).should('have.css', 'color').and('eq','rgb(66, 66, 66)')
            cy.get($li).should('have.css', 'font-size').and('eq', '17.5px');
        })
        cy.get('h5').eq(0).invoke('text').should('contain', 'シフトパターン設定')
        cy.get('h5').eq(1).invoke('text').should('contain', '業務シフト')
        cy.get('h5').eq(2).invoke('text').should('contain', '休暇シフト')
        cy.get('h5').eq(3).invoke('text').should('contain', '職員配置数基準')


        //Verify for Column headers
        cy.get('.card-lables').each(($li, index, $lis) => {
            cy.get($li).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
            cy.get($li).should('have.css', 'color').and('eq','rgb(92, 104, 115)')
            cy.get($li).should('have.css', 'font-size').and('eq', '12px');
        })
        
        cy.get('.card-lables').eq(1).invoke('text').should('contain', 'シフト名')
        cy.get('.card-lables').eq(2).invoke('text').should('contain', '表記 (２文字 )')
        cy.get('.card-lables').eq(3).invoke('text').should('contain', 'アイコンカラー')
        cy.get('.card-lables').eq(4).invoke('text').should('contain', '時間')
        cy.get('.card-lables').eq(5).invoke('text').should('contain', '休憩')

        cy.get('.card-lables').eq(7).invoke('text').should('contain', 'シフト名')
        cy.get('.card-lables').eq(8).invoke('text').should('contain', '表記 (２文字 )')
        cy.get('.card-lables').eq(9).invoke('text').should('contain', 'アイコンカラー')

        //Verify for fields and place holder
        cy.get('.postal_box').each(($li, index, $lis) => {
            cy.get($li).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
            cy.get($li).should('have.css', 'color').and('eq','rgb(66, 66, 66)')
            cy.get($li).should('have.css', 'font-size').and('eq', '14px');
        })
        cy.get('[type="text"]').eq(0).should('have.attr', 'placeholder', 'シフト名')
        cy.get('[type="text"]').eq(1).should('have.attr', 'placeholder', '表記')

        //Verify for time field
        cy.get('.d-flex').each(($li, index, $lis) => {
            cy.get($li).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
            cy.get($li).should('have.css', 'color').and('eq','rgb(66, 66, 66)')
            cy.get($li).should('have.css', 'font-size').and('eq', '12px');
        })
        cy.get('[type="text"]').eq(2).should('have.attr', 'placeholder', '時間')
        cy.get('[type="text"]').eq(3).should('have.attr', 'placeholder', '時間')

        //Verification for minute icon representation
        cy.get('.common-text').each(($li, index, $lis) => {
            cy.get($li).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
            cy.get($li).should('have.css', 'color').and('eq','rgb(92, 104, 115)')
            cy.get($li).should('have.css', 'font-size').and('eq', '12px');
        })
          //Verification for cross icon
        cy.get('.fa').should("be.visible")
         
       //verify Save and cancel button 
          cy.saveandCancel();

          //Verify for Add button
          cy.createButton();
    })
  })
})

