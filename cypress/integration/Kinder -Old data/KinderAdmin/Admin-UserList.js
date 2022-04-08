// <reference types="Cypress" />
import chaiColors from 'chai-colors'
chai.use(chaiColors)

var userlistHeading = '.kinder-label';
var createButton ='.px-4';
var font = /"Noto Sans JP", sans-serif/
var fontsize = '12px'
var detailsearch = '.register-lables'

describe('Users List', () => {
    it('Verify User List', () => {
        //cy.login();
        cy.visit('/kinder-web/#/user');
         
        //assert header admin user
         cy.get(userlistHeading).invoke('text').should('contain', '管理ユーザー')
         cy.get(userlistHeading).should('have.css', 'color').and('eq','rgb(0, 0, 0)')
         cy.wait(500)
         cy.get(userlistHeading).should('have.css', 'font-family').and('match', font)
         cy.get(userlistHeading).should('have.css', 'font-size').and('eq', '17.5px')

        //assert font,size,color of add button 
        cy.get(createButton).should('have.css', 'background-color').and('eq','rgb(56, 149, 211)')
        cy.wait(500)
        cy.get(createButton).should('have.css', 'font-family').and('match', font)
        cy.get(createButton).should('have.css', 'font-size').and('eq', '14px')
        cy.get(createButton).should('have.css', 'background-color').and('eq','rgb(56, 149, 211)')

        //Verify Column or table header
        cy.get('.userNameTableCol > div').invoke('text').should('contain', 'ユーザー名') 
        cy.get('.displayNameTableCol > div').invoke('text').should('contain', '表示名')
        cy.get('[aria-colindex="5"] > div').invoke('text').should('contain', 'メールアドレス')
        cy.get('[aria-colindex="6"] > div').invoke('text').should('contain', '権限グループ')
        cy.get('[aria-colindex="7"] > div').invoke('text').should('contain', 'ステータス')
        cy.get('[aria-colindex="8"] > div').invoke('text').should('contain', '登録日時')
        //table header font,size,color assertions
        cy.get('[role="columnheader"]>div').nextUntil('[class="th-width-dots"]').each(($li, index, $lis) => {
            cy.get($li).should('have.css', 'font-family').and('match', font)
            cy.get($li).should('have.css', 'font-size').and('eq', fontsize);
            })

        //search placeholder assert
        cy.get('#__BVID__135').first().should('have.attr', 'placeholder', 'ユーザー検索')
        //drop down 
        cy.get('.custom-select').invoke('text').should('contain', '権限グループ')
    })
    //detail search

    it('Verify the detailsearch ', () => {
        cy.xpath('//*[@id="dropdown-form__BV_toggle_"]').eq(2).click()
        //assert- if the detail pop up is appeared
        cy.get(detailsearch).invoke('text').should('contain', 'ユーザ名')
        cy.get(detailsearch).invoke('text').should('contain', 'メールアドレス')
        cy.get(detailsearch).invoke('text').should('contain', '権限グループ')
        cy.get(detailsearch).invoke('text').should('contain', '利用ステータス')
        //detail search font,size,color
        cy.get(detailsearch).each(($li, index, $lis) => {
        cy.get($li).should('have.css', 'font-family').and('match', font)
        cy.get($li).should('have.css', 'font-size').and('eq', fontsize);
        })
        //status lebel check
        cy.get('[class="custom-control-label"]>span').eq(0).should('contain', '利用可')
        cy.get('[class="custom-control-label"]>span').eq(1).should('contain', '利用停止')
    })
      //Batch processing
    it('Verify the Batch processing popup screen content ', () => {
        //verify the button font ,color and click the button
        cy.get('.batch-processing').should('have.css', 'font-family').and('match', font)
        cy.get('.batch-processing').should('have.css', 'color').and('eq','rgb(0, 0, 0)')
        cy.get('.batch-processing').should('have.css', 'font-size').and('eq', '14px');
        cy.get('.batch-processing').click()
        
        //verify the lebels on popup
        cy.get(detailsearch).eq(0).invoke('text').should('contain', '権限グループ')
        cy.get(detailsearch).eq(1).invoke('text').should('contain', '利用ステータス')
        cy.get(detailsearch).eq(2).invoke('text').should('contain', '削除')
        //detail search font,size,color
        cy.get(detailsearch).each(($li, index, $lis) => {
        cy.get($li).should('have.css', 'font-family').and('match', font)
        cy.get($li).should('have.css', 'font-size').and('eq', fontsize);
        })
        //radio button and checkbox lebel check
        cy.get('[class="custom-control-label"]>span').eq(0).should('contain', '利用可')
        cy.get('[class="custom-control-label"]>span').eq(1).should('contain', '利用停止')
        cy.get('[class="custom-control-label"]>span').eq(2).should('contain', 'チェックしたユーザーを削除')
        cy.get('.custom-checkbox').should("be.visible")
        })
    
})

