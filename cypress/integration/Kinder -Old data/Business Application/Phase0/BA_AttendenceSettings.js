/// <reference types="Cypress" />
import chaiColors from 'chai-colors'
chai.use(chaiColors)
require('cypress-xpath')

var masterScreenButton = '.fa-cogs';
var attendenceSettings = 'a[href="#/setting"]';

describe('Attendence Settings', () => {
    it('Verify Attendence Settings Screen', () => {
        cy.balogin();
        cy.get('#dropdown-form__BV_toggle_ > img').click();
        cy.get(masterScreenButton).eq(0).click()
        cy.wait(6000)
        cy.debug()
        cy.get(attendenceSettings).eq(0).click()

        //Verify Tab title font,
        cy.get(attendenceSettings).invoke('text').should('contain', '勤怠設定')
        cy.get(attendenceSettings).should('have.css', 'color').and('eq','rgb(255, 255, 255)')
        cy.get(attendenceSettings).should('have.css', 'font-size').and('eq', '14px')
        cy.get(attendenceSettings).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
       
        cy.wait(3000)
       //Verify All text
        cy.get('[class="tab-pane active"]').within(()=>{
            cy.wait(3000)
            
        //Verify All column Header font
        cy.header('出退勤設定');

        //Verification for Field Names
        cy.registerLabelChecks();
        cy.get('.register-lables').eq(0).invoke('text').should('contain', '出退勤時間の丸め')
        cy.get('.register-lables').eq(1).invoke('text').should('contain', '勤怠期間 ( 締日 )')
        cy.get('.custom-select').eq(0).invoke('text').should('contain', '10 分')

         //Verify radio button font 
          cy.get('.custom-radio>label').each(($li, index, $lis) => {
          cy.get($li).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
          cy.get($li).should('have.css', 'color').and('eq','rgb(66, 66, 66)')
          cy.get($li).should('have.css', 'font-size').and('eq', '14px');
     
         })

         //Verify Text of radio button and checkbox 
         cy.get('label').eq(0).invoke('text').should('contain', '月末締め')
         cy.get('label').eq(1).invoke('text').should('contain', '25 日締め')
         cy.get('label').eq(2).invoke('text').should('contain', '20 日締め')
         cy.get('label').eq(3).invoke('text').should('contain', '15 日締め')
         cy.get('label').eq(4).invoke('text').should('contain', '10 日締め')
         
          //verify Save and cancel button 
          cy.saveandCancel();

    })
  })
})