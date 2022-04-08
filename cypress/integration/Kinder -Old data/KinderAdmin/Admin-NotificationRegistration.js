/// <reference types="Cypress" />
import chaiColors from 'chai-colors'
chai.use(chaiColors)
{ multiple: true }

var clickonnotificationmenu = ':nth-child(6) > .nav-dropdown-toggle'
var clicknotificationregistration = '.nav-item.open > .nav-dropdown-items > :nth-child(2) > .nav-link'
var clickonbutton = '.row > :nth-child(1) > .btn'
//
var button1 = '.row > :nth-child(1) > .btn'
var j1 = 'プレビュー'
var buttontextcolor1 = 'rgb(56, 149, 211)'
var font = /"Noto Sans JP", sans-serif/
//
var button2 = '.row > :nth-child(2) > .btn'
var j2 = '下書き保存'
var buttontextcolor2 = 'rgb(200, 206, 211)'

//
var button3 = '.col-md-3 > .btn'
var j3 = '更新'
var buttontextcolor3 = 'rgb(255, 255, 255)'

//
var text1 = 'カテゴリー'
var link1 = '.m-0'
var a = 'カテゴリ名'

describe('Notification registration', () => {
    it('Verify the screen content', () => {
        //input
        cy.login()
        cy.wait(1000)
        cy.get(clickonnotificationmenu).click()
        cy.get(clicknotificationregistration).click()
        cy.focused(clickonbutton).click()
        cy.wait(3000)
        
        cy.get(clickonbutton).click()
        cy.get('.close').click()
        cy.wait(2000)
        cy.focused('.ql-editor').type('Hello, World')
        cy.wait(1000)
        cy.get('.ql-editor').type('Hello, World')
        cy.get(clickonbutton).click()
        cy.get('.close').click()
        cy.wait(2000)
        
        //button1
        cy.get(button1).invoke('text').should('contain', j1 )
        cy.get(button1).should('have.css', 'font-family').and('match', font)
        cy.get(button1).should('have.css', 'color').and('eq', buttontextcolor1 )
        cy.get(button1).should('have.css', 'font-size').and('eq', '14px')
        //button2
        cy.get(button2).invoke('text').should('contain', j2 )
        cy.get(button2).should('have.css', 'font-family').and('match', font)
        cy.get(button2).should('have.css', 'background-color').and('eq', buttontextcolor2 )
        cy.get(button2).should('have.css', 'font-size').and('eq', '14px')
        // //button3
        cy.get(button3).invoke('text').should('contain', j3 )
        cy.get(button3).should('have.css', 'font-family').and('match', font)
        cy.get(button3).should('have.css', 'color').and('eq', buttontextcolor3 )
        cy.get(button3).should('have.css', 'font-size').and('eq', '14px')

        //
        cy.get(link1).invoke('text').should('contain', text1 )
        cy.get(link1).should('have.css', 'font-family').and('match', font)
        cy.get('.text-right > .btn > .fa').click()
        cy.wait(2000)
        
        cy.get(':nth-child(2) > .fa-times-circle').click()
        cy.get(':nth-child(1) > .vertical-align > .label-color').invoke('text').should('contain',  '公開日時 ')
        cy.get(':nth-child(1) > .vertical-align > .label-color').should('have.css', 'font-family').and('match', font)
        cy.get('.mt-2 > .vertical-align > .label-color').invoke('text').should('contain', '公開状態 ' )
        cy.get('.mt-2 > .vertical-align > .label-color').should('have.css', 'font-family').and('match', font)
        cy.get('[class="custom-file-label"]').invoke('text').should('contain', 'ファイルが選択されていません')
        cy.get('[class="grey col-md-12"]').invoke('text').should('contain', 'ファイルをここにドラッグするか、ファイルを選択してください。')
        
    })
    
})