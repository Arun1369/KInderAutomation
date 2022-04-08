/// <reference types="Cypress" />
import chaiColors from 'chai-colors'
chai.use(chaiColors)
require('cypress-xpath')

var masterScreenButton = '.fa-cogs';
var classManagement = 'a[href="#/setting/class"]';

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })

describe('Edit group', () => {
    it('Verify Edit group Screen', () => {
        cy.balogin();
        cy.get('#dropdown-form__BV_toggle_ ').click();
        cy.get(masterScreenButton).eq(0).click({ multiple: true})
        cy.wait(6000)
        cy.debug()
        cy.get(classManagement).click({ multiple: true})
        cy.wait(3000)
       //Verify All text
        cy.get('[class="tab-pane active"]').within(()=>{
            cy.wait(3000)
            cy.get('.px-3').eq(2).click({ multiple: true})
        })
        //Verify Headers font
        cy.get('.modal-title').invoke('text').should('contain', '帰宅グループを編集')
        cy.get('.modal-title').should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
        cy.get('.modal-title').should('have.css', 'color').and('eq','rgb(66, 66, 66)')
        cy.get('.modal-title').should('have.css', 'font-size').and('eq', '17.5px');

        cy.get('.black-card').eq(4).within(()=>{
        //Verify for add button
        cy.createButton('│グループを追加')
        
        //Verify for fields
        cy.get('[type="text"]').eq(0).should('have.attr', 'placeholder', 'グループ名')
        cy.get('[type="checkbox"]').each(($el,index,$li)=>{
        cy.get($el).should("not.be.checked")
        cy.get('#iconblack').should('be.visible')
      })
     })
//Verify for save and cancel button
cy.saveandCancel();

//Verify for cross button
cy.get('.close').should('be.visible')
    })
  })


