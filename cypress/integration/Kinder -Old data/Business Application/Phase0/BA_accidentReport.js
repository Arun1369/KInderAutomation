import chaiColors from 'chai-colors'
chai.use(chaiColors)
require('cypress-xpath')


Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })
  describe('Accident Report', () => {
    it('Verify accident report Screen', () => {
        cy.visit('http://54.238.110.14/staff/#/auth/signin')
    cy.wait(2000)
    cy.get('.px-4').click() 
    cy.wait(2000);
    cy.get('#dropdown-form__BV_toggle_ ').click({ multiple: true });
    cy.wait(2000)
    cy.get(':nth-child(11) > .fa').click({ multiple: true });
    cy.wait(2000)
    cy.xpath('//a[contains(text(),"ヒヤリハット報告")]').click({ multiple: true });
    cy.activeTabtitle('ヒヤリハット報告');
        cy.wait(2000)
        cy.get('.custom-select').each(($li, index, $lis) => {
            cy.get($li).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
            cy.get($li).should('have.css', 'color').and('eq','rgb(66, 66, 66)')
            cy.get($li).should('have.css', 'font-size').and('eq', '14px');
            cy.get('.custom-select').invoke('text').should('contain', 'クラス')
        cy.wait(2000)
        })
        cy.get('.custom-select').each(($li, index, $lis) => {
            cy.get($li).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
            cy.get($li).should('have.css', 'color').and('eq','rgb(66, 66, 66)')
            cy.get($li).should('have.css', 'font-size').and('eq', '14px');
            cy.get('.custom-select').invoke('text').should('contain', '担当者')
        cy.wait(2000)
        })
        //Verify for Search 
        cy.get('.form-control').first().should('have.attr', 'placeholder', '検索')
        cy.get('.form-control').should('have.css', 'color').and('eq','rgb(66, 66, 66)')
        cy.get('.form-control').should('have.css', 'font-size').and('eq', '14px')  
        cy.get('.form-control').should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
        cy.columnHeader();
        cy.wait(4000)
        cy.get('[role="columnheader"]').invoke('text').should('contain', '発生年月日')
        cy.get('[role="columnheader"]').invoke('text').should('contain', '園児名')
        cy.get('[role="columnheader"]').invoke('text').should('contain', 'クラス')
        cy.get('[role="columnheader"]').invoke('text').should('contain', '担当者')
        cy.get('[role="columnheader"]').invoke('text').should('contain', 'ステータス')
        cy.get('[role="columnheader"]').invoke('text').should('contain', '最終更新日時')
        cy.wait(1000)
        cy.get('.custom-checkbox>label').invoke('text').should('contain', '承認済も表示')
        //add button
        cy.get('[type="button"]').invoke('text').should('contain', '作成')
            cy.get('[type="button"]').should('have.css', 'color', 'rgb(10, 201, 164)')
            cy.get('[type="button"]').should('have.css', 'font-size').and('eq', '14px');
            cy.get('[type="button"]').should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/);
    })
    it('Batch process check', () => {
        cy.get('[type="button"]').invoke('text').should('contain', '一括処理')
        cy.get('[type="button"]').should('have.css', 'color', 'rgb(10, 201, 164)')
        cy.get('[type="button"]').should('have.css', 'font-size').and('eq', '14px');
        cy.get('[type="button"]').should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/);
        cy.get('.col-md-12 > #dropdown-form > #dropdown-form__BV_toggle_').click();
        cy.wait(2000)
        cy.checkBoxLabel();
        cy.wait(2000)
        cy.get('[type="checkbox"]').should("be.checked")
        //Verify checkbox header title
        cy.wait(2000)
        cy.get('[type="button"]').invoke('text').should('contain', '適用')
            cy.get('[type="button"]').should('have.css', 'color', 'rgb(10, 201, 164)')
            cy.get('[type="button"]').should('have.css', 'font-size').and('eq', '14px');
            cy.get('[type="button"]').should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/);
        cy.get('.custom-checkbox>label').invoke('text').should('contain', 'チェックした記事を削除')
})
  })
