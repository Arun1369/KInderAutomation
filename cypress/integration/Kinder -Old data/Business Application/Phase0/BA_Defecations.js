/// <reference types="Cypress" />
import chaiColors from 'chai-colors'
chai.use(chaiColors)
require('cypress-xpath')

//var timeTable = '.calendar-time-block'

describe('Defecation', () => {
    it('Verify Defecation Screen', () => {
        cy.balogin();

        //Verify for Health check button
        cy.get('.tab-link-custom-height').eq(2).invoke('text').should('contain', '健康チェック')
        cy.get('.tab-link-custom-height').eq(2).should('have.css', 'color').and('eq','rgb(115, 129, 143)')
        cy.get('.tab-link-custom-height').eq(2).should('have.css', 'font-size').and('eq', '14px')  
        cy.get('.tab-link-custom-height').eq(2).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
        cy.get('.tab-link-custom-height').eq(2).first().click()

        //Verify for Defecation button
        cy.get('.btn').eq(8).invoke('text').should('contain', '排便')
        cy.get('.btn').eq(8).should('have.css', 'color').and('eq','rgb(10, 201, 164)')
        cy.get('.btn').eq(8).should('have.css', 'font-size').and('eq', '14px')  
        cy.get('.btn').eq(8).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
        cy.get('.btn').eq(8).first().click()

        cy.get('.mt-2 > .col-lg-12').within(()=>{
            cy.wait(3000)

        //Verify for time in table
        cy.get('.calendar-time-block').eq(0).invoke('text').should('contain', '5:00')
        cy.get('.calendar-time-block').eq(1).invoke('text').should('contain', '6:00')
        cy.get('.calendar-time-block').eq(2).invoke('text').should('contain', '7:00')
        cy.get('.calendar-time-block').eq(3).invoke('text').should('contain', '8:00')
        cy.get('.calendar-time-block').eq(4).invoke('text').should('contain', '9:00')
        cy.get('.calendar-time-block').eq(5).invoke('text').should('contain', '10:00')
        cy.get('.calendar-time-block').eq(6).invoke('text').should('contain', '11:00')
        cy.get('.calendar-time-block').eq(7).invoke('text').should('contain', '12:00')
        cy.get('.calendar-time-block').eq(8).invoke('text').should('contain', '13:00')
        cy.get('.calendar-time-block').eq(9).invoke('text').should('contain', '14:00')
        cy.get('.calendar-time-block').eq(10).invoke('text').should('contain', '15:00')
        cy.get('.calendar-time-block').eq(11).invoke('text').should('contain', '16:00')
        cy.get('.calendar-time-block').eq(12).invoke('text').should('contain', '17:00')
        cy.get('.calendar-time-block').eq(13).invoke('text').should('contain', '18:00')
        cy.get('.calendar-time-block').each(($el,index,$li)=>{
            cy.get($li).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
            cy.get($li).should('have.css', 'color').and('eq','rgb(0, 0, 0)')
            cy.get($li).should('have.css', 'font-size').and('eq', '12px');
           
        })
        
        //Verify for Student name 
        cy.get('.calendar-profile-name').each(($el,index,$li)=>{
        cy.get($li).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
        cy.get($li).should('have.css', 'color').and('eq','rgb(0, 0, 0)')
        cy.get($li).should('have.css', 'font-size').and('eq', '12px');
        })

        //Verify for data in table
        cy.get('.date-value-event-block').eq(0).invoke('text').should('contain', '硬')
        cy.get('.date-value-event-block').eq(1).invoke('text').should('contain', '柔')
        cy.get('.date-value-event-block').eq(2).invoke('text').should('contain', '普')
        cy.get('.date-value-event-block').eq(3).invoke('text').should('contain', '普')
        cy.get('.date-value-event-block').each(($el,index,$li)=>{
        cy.get($li).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
        cy.get($li).should('have.css', 'color').and('eq','rgb(0, 0, 0)')
        cy.get($li).should('have.css', 'font-size').and('eq', '12px');
         })

         //Verify for icon in table
         cy.get('.date-value-icon-label').should('be.visible') 

        })

        //Verify for Parents message and kinder message Title check
        cy.get('.flex-fill').eq(0).invoke('text').should('contain', '保護者から連絡')
        cy.get('.flex-fill').eq(1).invoke('text').should('contain', '園内連絡')
        cy.get('.flex-fill').each(($el,index,$li)=>{
            cy.get($li).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
            cy.get($li).should('have.css', 'color').and('eq','rgb(0, 0, 0)')
            cy.get($li).should('have.css', 'font-size').and('eq', '14px');
           
        })
     
        //Verify for parent and kinder
        cy.get('.pull-left').should('have.css', 'color').and('eq','rgb(0, 0, 0)')
        cy.get('.pull-left').should('have.css', 'font-size').and('eq', '14px')  
        cy.get('.pull-left').should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)

        //Verify for message date
        cy.get('.pt-2').should('have.css', 'color').and('eq','rgb(92, 104, 115)')
        cy.get('.pt-2').should('have.css', 'font-size').and('eq', '12px')  
        cy.get('.pt-2').should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
           
    })

})
