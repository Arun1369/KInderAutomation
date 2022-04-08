/// <reference types="Cypress" />
import chaiColors from 'chai-colors'
chai.use(chaiColors)

var dashboardLabel = '.kinder-label';
var createButton = '.px-4';
var font = /"Noto Sans JP", sans-serif/
var fontsize = '12px'
var columnheaderrgb = 'rgb(92, 104, 115)'
var columnheader1 = '[aria-colindex="1"] > div'
var columnheader2 = '[aria-colindex="2"] > div'
var columnheader3 = '[aria-colindex="3"] > div'
var columnheader4 = '[aria-colindex="4"] > div'
var columnheader5 = '[aria-colindex="5"] > div'
var detailsearchmenu = ':nth-child(1) > #dropdown-form > #dropdown-form__BV_toggle_'
//
var searchbutton = '検索'
var searchbuttontitle = '.b-dropdown-form > .btn'
var rb1 = '利用可'
var rb2 = '利用停止'
var idrb1 = ':nth-child(1) > .custom-control-label > span'
var idrb2 = ':nth-child(2) > .custom-control-label > span'
var paginationheader = '表示件数'
var paginationheaderid = '.pull-right > .input-group > :nth-child(1)'

var j1 = '企業名'
var j2 = 'メールアドレス'
var j3 = '業熊'
var j4 = '住所'
var j5 = '利用ステータス'

require('cypress-xpath')

describe('KinderListpage', () => {
    it('Verify Kinder List UI', () => {
        cy.login();
        cy.xpath("//div[text()=' 登録園・企業']").click();
        cy.get('a[href="#/nursery/"]').first().click();
        //kinder list(after login)
        cy.get(dashboardLabel).invoke('text').should('contain', '園一覧')
         
        //assert color of header(List of Gardens) in list,header,size
        cy.get(dashboardLabel).should('have.css', 'color').and('eq','rgb(0, 0, 0)')
        cy.wait(500)
        cy.get(dashboardLabel).should('have.css', 'font-family').and('match', font)
        cy.get(dashboardLabel).should('have.css', 'font-size').and('eq', '17.5px')

        //assert font,size,color of add button 
        cy.get(createButton).should('have.css', 'background-color').and('eq','rgb(56, 149, 211)')
        cy.wait(500)
        cy.get(createButton).should('have.css', 'font-family').and('match', font)
        cy.get(createButton).should('have.css', 'font-size').and('eq', '14px')

        //verification of search button on the page
        cy.get('div[class="input-group search_bar_dashboard"]').should('have.css', 'background-color').and('eq','rgba(0, 0, 0, 0)');
        cy.wait(500)
        //placeholder assert
        cy.get('#__BVID__157').first().should('have.attr', 'placeholder', '園検索')

        //assert column header
        cy.get(columnheader1).invoke('text').should('contain', '園名')
        cy.get(columnheader2).invoke('text').should('contain', '業能')
        cy.get(columnheader3).invoke('text').should('contain', '企業名')
        cy.get(columnheader4).invoke('text').should('contain', '住所')        
        cy.get(columnheader5).invoke('text').should('contain', 'ステータス')        
        cy.get('[role="row"]>th>div').nextUntil('[class="th-width-dots"]').each(($li, index, $lis) => {
          cy.get($li).should('have.css', 'font-family').and('match', font)
          cy.get($li).should('have.css', 'color').and('eq',columnheaderrgb)
          cy.get($li).should('have.css', 'font-size').and('eq', fontsize);
         
        });

        //assert for detail search 
        cy.get(detailsearchmenu).invoke('text').should('contain', '詳細検索')
        cy.get(detailsearchmenu).should('have.css', 'color').and('eq','rgb(56, 149, 211)')
        cy.get(detailsearchmenu).should('have.css', 'font-size').and('eq', '14px')
        cy.get(detailsearchmenu).should('have.css', 'font-family').and('match', font)
        //verify pagination title
        cy.get(paginationheaderid).invoke('text').should('contain', paginationheader)
        cy.get(paginationheaderid).should('have.css', 'font-family').and('match', font)
        cy.get(paginationheaderid).should('have.css', 'color').and('eq', 'rgb(0, 0, 0)' )
        cy.get(paginationheaderid).should('have.css', 'font-size').and('eq', '14px')
    
    })
   
    it('Verify the detailsearch of Kinder garden', () => {
      cy.get(detailsearchmenu).click()
        //assert- if the detail pop up is appeared
        cy.get('.register-lables').eq(0).invoke('text').should('contain', j1)
        cy.get('.register-lables').eq(1).invoke('text').should('contain', j2)
        cy.get('.register-lables').eq(2).invoke('text').should('contain', j3)
        cy.get('.register-lables').eq(3).invoke('text').should('contain', j4)
        cy.get('.register-lables').eq(5).invoke('text').should('contain', j5)
        cy.get('.register-lables').each(($li, index, $lis) => {
          cy.get($li).should('have.css', 'font-family').and('match', font)
          cy.get($li).should('have.css', 'color').and('eq',columnheaderrgb)
          cy.get($li).should('have.css', 'font-size').and('eq', fontsize);
         
        })

        //assert save button
        cy.get(searchbuttontitle).invoke('text').should('contain', searchbutton)
        cy.get(searchbuttontitle).should('have.css', 'font-family').and('match', font)
        cy.get(searchbuttontitle).should('have.css', 'color').and('eq', 'rgb(255, 255, 255)' )
        cy.get(searchbuttontitle).should('have.css', 'font-size').and('eq', '14px')
        //assert radio buttons text
        cy.get(idrb1).invoke('text').should('contain', rb1)
        cy.get(idrb1).should('have.css', 'font-family').and('match', font)
        cy.get(idrb1).should('have.css', 'color').and('eq', 'rgb(0, 0, 0)' )
        cy.get(idrb1).should('have.css', 'font-size').and('eq', '14px')
        //
        cy.get(idrb2).invoke('text').should('contain', rb2)
        cy.get(idrb2).should('have.css', 'font-family').and('match', font)
        cy.get(idrb2).should('have.css', 'color').and('eq', 'rgb(0, 0, 0)' )
        cy.get(idrb2).should('have.css', 'font-size').and('eq', '14px')
})
})

