// <reference types="Cypress" />
import chaiColors from 'chai-colors'
chai.use(chaiColors)
require('cypress-xpath')

var contractparkButton = '.fa-id-card-o';
//var contractButton  = '.fa-angle-double-down';


Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })

describe('Contact in Park', () => {
    it('Verify contact in park screen content', () => {
        cy.balogin();
        cy.get('#dropdown-form__BV_toggle_').click();
        cy.get(contractparkButton).eq(0).click()
        cy.wait(4000)
        //Verify the title
        cy.activeTabtitle('園内連絡');
        //Verify search option
        cy.searchButton('検索');
        cy.get('[class="tab-pane active"]').within(()=>{
            //Verify the date and dropdown
            cy.get('[name="date"]').should('not.be.disabled')
            cy.get('[class="custom-select"]').should('not.be.disabled')
            //Verify checkbox label
            cy.checkBoxLabel();
            cy.get('[class="custom-control-label"]').invoke('text').should('contain', '処理済みも表示')
            //Verify checkbox
            cy.get('[type="checkbox"]').should("be.checked")
            //Verify column header
            cy.columnHeader();
            cy.get('th').invoke('text').should('contain', '登録者')
            cy.get('th').invoke('text').should('contain', '宛先')
            cy.get('th').invoke('text').should('contain', '登録日時')
            cy.get('th').invoke('text').should('contain', '処理状態')
            //Verify Button
            cy.get('[type="button"]').eq(0).invoke('text').should('contain', '作成')
            cy.get('[type="button"]').eq(1).invoke('text').should('contain', '今日')
            //Verify button font
            cy.createButton();
            //Veriy link
            cy.get('#show-btn').invoke('text').should('contain', '未送信メッセージが 3 件あります')
            cy.get('#show-btn').should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
            cy.get('#show-btn').should('have.css', 'color').and('eq','rgb(10, 201, 164)')
            cy.get('#show-btn').should('have.css', 'font-size').and('eq', '14px');

        })
    })
    it('Verify create pop up screen content', () => {
        cy.get('[class="tab-pane active"]').within(()=>{
        cy.get('.fa-plus').eq(0).click();
           })
        cy.get('.modal-content').within(()=>{
            //Verify header
            cy.header('園内連絡')
            cy.get('.label-color').invoke('text').should('contain', '登録者 :')
            cy.get('.label-color').invoke('text').should('contain', '長谷川美由紀')
            cy.get('.label-color').should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
            cy.get('.label-color').should('have.css', 'color').and('eq','rgb(92, 104, 115)')
            cy.get('.label-color').should('have.css', 'font-size').and('eq', '12px');
            //Verify Date pickers
            cy.get('[name="date"]').should('not.be.disabled')
            cy.get('[class="custom-select"]').should('not.be.disabled')
            //Verrify checkbox label
            cy.checkBoxLabel();
            cy.get('[class="custom-control-label"]').invoke('text').should('contain', 'メインボード上部表示')
            //Verify checkbox
            cy.get('[type="checkbox"]').should("be.checked")

            cy.saveandCancel();

            cy.get('.px-4').invoke('text').should('contain', 'テンプレート選択')
            cy.get('.px-4').should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
            cy.get('.px-4').should('have.css', 'color').and('eq','rgb(255, 255, 255)')
            cy.get('.px-4').should('have.css', 'font-size').and('eq', '14px');

            //Verify delete button 
            cy.get('.fa-trash').should('be.visible')

            //Verify Close button
            cy.get('.close').click();
            

        })

    })

})