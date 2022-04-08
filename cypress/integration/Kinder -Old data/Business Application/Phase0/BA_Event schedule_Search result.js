// <reference types="Cypress" />
import chaiColors from 'chai-colors'
chai.use(chaiColors)
require('cypress-xpath')

var eventSetting = '.fa-calendar';
var labels = '.custom-control-label';
var eventLink = 'a[href="#/event"]';

describe('Event Search', () => {
    it('Verify Event Search Screen', () => {
        cy.balogin();
        cy.get('#dropdown-form__BV_toggle_ > img').click();
        cy.wait(6000)
        cy.debug()
        cy.get(eventSetting).eq(0).click()

        // Cypress.on('uncaught:exception', (err, runnable) => {
        //     console.log(err);
        //     return false;
        cy.get('.col-lg-12').eq(1).within(()=>{
          cy.wait(3000)
          
        //   })
    
        //Verify for Search field
        cy.get('.form-control').should("be.visible")
        cy.get('.form-control').first().should('have.attr', 'placeholder', '検索')
        cy.get('.form-control').should('have.css', 'color').and('eq','rgb(66, 66, 66)')
        cy.get('.form-control').should('have.css', 'font-size').and('eq', '14px');
        cy.get('.form-control').should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
        cy.get('.form-control').type('ABC').type('{enter}')
        })

        cy.get(eventLink).invoke('text').should('contain', '行事カレンダーへ');
        cy.get(eventLink).should('have.css', 'color').and('eq','rgb(10, 201, 164)')
        cy.get(eventLink).should('have.css', 'font-size').and('eq', '14px');
        cy.get(eventLink).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)

        cy.get('.list-group').within(()=>{
        //Verify for first and third column
         cy.get('.label-color').each(($li, index, $lis) => {
          cy.get($li).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
          cy.get($li).should('have.css', 'color').and('eq','rgb(92, 104, 115)')
          cy.get($li).should('have.css', 'font-size').and('eq', '14px');
      })

      //Verify for second column
         cy.get('.mx-md-auto').each(($li, index, $lis) => {
          cy.get($li).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
          cy.get($li).should('have.css', 'color').and('eq','rgb(66, 66, 66)')
          cy.get($li).should('have.css', 'font-size').and('eq', '28px');
      })

      //Verify for last column
         cy.get('.col-xl-7').each(($li, index, $lis) => {
          cy.get($li).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
          cy.get($li).should('have.css', 'color').and('eq','rgb(66, 66, 66)')
          cy.get($li).should('have.css', 'font-size').and('eq', '14px');
      })

        })

      //Verify for check box
      cy.get('[type="checkbox"]').each(($el,index,$li) =>{
        cy.get($el).should("be.checked")
    })

    //Verify for check box labels
        cy.get(labels).eq(0).invoke('text').should('contain', 'イベント');
        cy.get(labels).eq(1).invoke('text').should('contain', '時間割');
        cy.get(labels).eq(2).invoke('text').should('contain', 'スクール');
        cy.get(labels).eq(3).invoke('text').should('contain', 'ひよこ');
        cy.get(labels).eq(4).invoke('text').should('contain', 'りす');
        cy.get(labels).eq(5).invoke('text').should('contain', 'うさぎ');
        cy.get(labels).eq(6).invoke('text').should('contain', 'ばんび');
        cy.get(labels).eq(7).invoke('text').should('contain', 'きりん');
        cy.get(labels).eq(8).invoke('text').should('contain', 'ぱんだ');
        cy.get(labels).eq(9).invoke('text').should('contain', 'ぞう');
        
  })
  })