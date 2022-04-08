/// <reference types="Cypress" />
import chaiColors from 'chai-colors'
chai.use(chaiColors)
require('cypress-xpath')

var contactParent = '.fa-address-book-o';
var contactParentTab = '//a[contains(text(),"保護者からの連絡")]';
var datePicker = '[placeholder="年/月/日~年/月/日"]'

describe('Contact from Parents', () => {
    it('Verify Event Settings Screen', () => {
        cy.balogin();
        cy.get('#dropdown-form__BV_toggle_ > img').click();
        cy.get(contactParent).eq(0).click()
        cy.wait(6000)
        
        //Verify for Contact parent tab
        cy.xpath(contactParentTab).invoke('text').should('contain', '保護者からの連絡')
        cy.xpath(contactParentTab).should('have.css', 'background-color').and('eq','rgb(255, 255, 255)')
        cy.xpath(contactParentTab).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
        cy.xpath(contactParentTab).should('have.css', 'font-size').and('eq', '14px')

        //Verify for Date enter field
        cy.get(datePicker).eq(1).should("be.visible")
        cy.get(datePicker).should('not.be.disabled')

        //Verify for all classes and all category drop down
            cy.get('.custom-select').each(($li, index, $lis) => {
            cy.get($li).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
            cy.get($li).should('have.css', 'color').and('eq','rgb(0, 0, 0)')
            cy.get($li).should('have.css', 'font-size').and('eq', '14px');
          });
          cy.get('.custom-select').eq(2).invoke('text').should('contain', '全てクラス')
          cy.get('.custom-select').eq(3).invoke('text').should('contain', '全てのカテゴリー')

        //Verify for Search 
        cy.get('.form-control').eq(4).first().should('have.attr', 'placeholder', '検索')
        cy.get('.form-control').eq(4).should('have.css', 'color').and('eq','rgb(0, 0, 0)')
        cy.get('.form-control').eq(4).should('have.css', 'font-size').and('eq', '14px')  
        cy.get('.form-control').eq(4).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
        cy.get('.form-control').eq(4).first().click()

        //Verify for check box and label
        cy.get('[type="checkbox"]').eq(1).should("be.checked")
        cy.checkBoxLabel();
        cy.get('[class="custom-control-label"]').invoke('text').should('contain', '処理済みも表示')

        //Verify for column header
        cy.columnHeader();
        cy.get('.contentAlign').eq(30).invoke('text').should('contain', '園児名')
        cy.get('.contentAlign').eq(31).invoke('text').should('contain', '受信日時')
        cy.get('.contentAlign').eq(32).invoke('text').should('contain', '処理状態 / 確認者')

        //Verify for imag icon in first col
        cy.get('.col-auto ').eq(9).should("be.visible")

        //Verify contents to be available in table(just example)
        cy.get('.col-11').within(()=>{
            cy.wait(3000)
        
        //Content for Kinder garten name
            cy.get('.col-2').should('have.css', 'color').and('eq','rgb(0, 0, 0)')
            cy.get('.col-2').should('have.css', 'font-size').and('eq', '12px')  
            cy.get('.col-2').should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
        //Verify for Category button
            cy.get('.badge-secondary').invoke('text').should('contain', 'カテゴリー')
            cy.get('.badge-secondary').should('have.css', 'color').and('eq','rgb(255, 255, 255)')
            cy.get('.badge-secondary').should('have.css', 'font-size').and('eq', '10.8px')  
            cy.get('.badge-secondary').should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
        //Verify for reason content
            cy.get('.align-items-center').should('have.css', 'color').and('eq','rgb(0, 0, 0)')
            cy.get('.align-items-center').should('have.css', 'font-size').and('eq', '12px')  
            cy.get('.align-items-center').should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)

        })
        //Verify for last Updated date and time
           cy.get('.contentAlign').eq(34).should("be.visible")
           cy.get('.contentAlign').eq(34).should('have.css', 'color').and('eq','rgb(0, 0, 0)')
           cy.get('.contentAlign').eq(34).should('have.css', 'font-size').and('eq', '12px')  
           cy.get('.contentAlign').eq(34).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)

})
})