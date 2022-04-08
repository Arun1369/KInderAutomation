/// <reference types="Cypress" />
import chaiColors from 'chai-colors'
chai.use(chaiColors)

var detailsearch = ':nth-child(2) > #dropdown-form > #dropdown-form__BV_toggle_'

var header1 = '.row.mt-2 > .col-md-4 > span'
var j1 = '企業名'
var header1color = 'rgb(92, 104, 115)'
var font = /"Noto Sans JP", sans-serif/

var header2 = ':nth-child(2) > .col-md-4 > span'
var j2 = 'メールアドレス'
var header2color = 'rgb(92, 104, 115)'

var header3 = ':nth-child(3) > .col-md-4 > span'
var j3 = '業熊'
var header3color = 'rgb(92, 104, 115)'

var header4 = ':nth-child(4) > .col-md-4 > span'
var j4 = '住所'
var header4color = 'rgb(92, 104, 115)'

var header5 = ':nth-child(6) > .col-md-4 > span'
var j5 = '利用ステータス'
var header5color = 'rgb(92, 104, 115)'


describe('kindersearchdetail', () => {
    it('Launch URL', () => {
        cy.visit('/')
        cy.wait(1000)
        //input
        cy.login()
        cy.wait(1000)
        cy.get(detailsearch).click()
        //assert- if the detail pop up is appeared
        cy.get(header1).invoke('text').should('contain', j1 )
        cy.get(header1).should('have.css', 'font-family').and('match', font)
        cy.get(header1).should('have.css', 'color').and('eq', header1color )
        cy.get(header1).should('have.css', 'font-size').and('eq', '12px')


        //assert- second header
        cy.get(header2).invoke('text').should('contain', j2)
        cy.get(header2).should('have.css', 'font-family').and('match', font)
        cy.get(header2).should('have.css', 'color').and('eq', header2color )
        cy.get(header2).should('have.css', 'font-size').and('eq', '12px')

        //assert- third header
        cy.get(header3).invoke('text').should('contain', j3)
        cy.get(header2).should('have.css', 'font-family').and('match', font)
        cy.get(header2).should('have.css', 'color').and('eq', header3color )
        cy.get(header2).should('have.css', 'font-size').and('eq', '12px')

         //assert- fourth header
        cy.get(header4).invoke('text').should('contain', j4)
        cy.get(header4).should('have.css', 'font-family').and('match', font)
        cy.get(header4).should('have.css', 'color').and('eq', header4color )
        cy.get(header4).should('have.css', 'font-size').and('eq', '12px')

          //assert- fifth header
        cy.get(header5).invoke('text').should('contain', j5)
        cy.get(header5).should('have.css', 'font-family').and('match', font)
        cy.get(header5).should('have.css', 'color').and('eq', header5color )
        cy.get(header5).should('have.css', 'font-size').and('eq', '12px')




    })
})
