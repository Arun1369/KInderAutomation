/// <reference types="Cypress" />
import chaiColors from 'chai-colors'
chai.use(chaiColors)
require('cypress-xpath')
var labels = '.register-lables';
var clickmastersetting = ':nth-child(15) > .fa';
var hamburgerclick = '#dropdown-form__BV_toggle_ > img';
var font = /"Noto Sans JP", sans-serif/

describe('Main Menu', () => {
    it('Verify Main Menu', () => {
        cy.balogin();
        cy.get(hamburgerclick).click();
        cy.wait(2000)
        cy.get(clickmastersetting).click();
        cy.wait(4000)

        //assert the authority group drop down
        cy.wait(1000)
        cy.get('.custom-select').invoke('text').should('contain', '全ての園')
        cy.get('.custom-select').should('have.css', 'font-family').and('match', font)
        cy.get('.custom-select').should('have.css', 'font-size').and('eq', '14px')
        cy.get('.custom-select').should('have.css', 'color').and('eq','rgb(0, 0, 0)')
        cy.wait(2000)
    })
        it('Verify screen contents', () => {
        //verify search feild visibility
        cy.get('.input-group').should("be.visible") 
        //Verify the Search button label,font format,size,color      
        cy.get('.input-group-text').should("be.visible")
        cy.get('.input-group-text').should('have.css', 'font-family').and('match', font)
        cy.get('.input-group-text').should('have.css', 'color').and('eq','rgb(0, 0, 0)')
        cy.get('.input-group-text').should('have.css', 'font-size').and('eq', '14px')
        //verification of checkbox and label check
        cy.get('.custom-checkbox>label').invoke('text').should('contain', '退職者も表示')
        
        //Verify columnheaders
        cy.columnHeader();
        cy.get('[aria-colindex="2"] > div').invoke('text').should('contain', '件名')
        cy.get('[aria-colindex="3"] > div').invoke('text').should('contain', '所属園')
        cy.get('[aria-colindex="4"] > div').invoke('text').should('contain', '担当クラス')
        cy.get('[aria-colindex="5"] > div').invoke('text').should('contain', 'メールアドレス')
        cy.get('[aria-colindex="6"] > div').invoke('text').should('contain', '備考')
        cy.get('[aria-colindex="7"] > div').invoke('text').should('contain', '入社日')
        //Batch processing
        var batchprocess = '.batch-processing > #dropdown-form > #dropdown-form__BV_toggle_'
        //verify the button font ,color and click the button
       
        cy.get(batchprocess).should('have.css', 'font-family').and('match', font)
        //cy.get(batchprocess).should('have.css', 'color').and('eq','rgb(10, 201, 164)')
        cy.get(batchprocess).should('have.css', 'font-size').and('eq', '14px');
        cy.get(batchprocess).click()
        cy.wait(2000)
        cy.get(labels).invoke('text').should('contain', '利用ステータス')
        cy.get(labels).should('have.css', 'font-family').and('match', font)
        cy.get(labels).should('have.css', 'color').and('eq','rgb(92, 104, 115)')
        cy.get(labels).should('have.css', 'font-size').and('eq', '12px');
        //
        cy.get(labels).invoke('text').should('contain', '削除')
        cy.get(labels).should('have.css', 'font-family').and('match', font)
        cy.get(labels).should('have.css', 'color').and('eq','rgb(92, 104, 115)')
        cy.get(labels).should('have.css', 'font-size').and('eq', '12px');
        //
        cy.get('[type="button"]').invoke('text').should('contain', '適用');
        cy.get('[type="button"]').should('have.css', 'font-family').and('match', font)
        cy.get('[type="button"]').should('have.css', 'color').and('eq','rgb(10, 201, 164)')
        cy.get('[type="button"]').should('have.css', 'font-size').and('eq', '14px');
        
        //verify radiobuttons texts and checkbox in the detail search screen
        cy.get('.custom-radio>label').invoke('text').should('contain', 'アクティブ');
        cy.radionButtonLabel();
        cy.get('.custom-radio>label').invoke('text').should('contain', '退社');
        cy.radionButtonLabel();
        
        cy.get('.custom-checkbox>label').invoke('text').should('contain', 'チェックした職員を削除');
        //verify download and print icons
        cy.get('.pb-3 > .mr-2').should("be.visible")
        cy.get('.pb-3 > :nth-child(3)').should("be.visible")

})
})

