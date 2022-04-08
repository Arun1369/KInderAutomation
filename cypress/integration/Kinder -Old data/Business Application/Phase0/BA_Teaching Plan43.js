import chaiColors from 'chai-colors'
chai.use(chaiColors)
require('cypress-xpath')

var hamburgerclick = '#dropdown-form__BV_toggle_ > img';

describe('Teaching plan', () => {
    it('Verification of screen content', () => {
        cy.balogin();
        cy.wait(2000)
        cy.get(hamburgerclick).click({ multiple: true });
        cy.wait(5000)
        cy.get(':nth-child(11) > .fa').click({ multiple: true });
        cy.wait(2000)
        cy.activeTabtitle('指導案');
        cy.wait(2000)
        cy.get('.custom-select').invoke('text').should('contain', '期案')
        cy.get('.custom-select').each(($li, index, $lis) => {
            cy.get($li).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
            cy.get($li).should('have.css', 'color').and('eq','rgb(66, 66, 66)')
            cy.get($li).should('have.css', 'font-size').and('eq', '14px');
        cy.wait(2000)
    })
        //
        cy.get('.custom-select').invoke('text').should('contain', 'クラス')
        cy.get('.custom-select').each(($li, index, $lis) => {
            cy.get($li).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
            cy.get($li).should('have.css', 'color').and('eq','rgb(66, 66, 66)')
            cy.get($li).should('have.css', 'font-size').and('eq', '14px');
        cy.wait(2000)
})
        //
        cy.get('.custom-select').invoke('text').should('contain', '作成者')
        cy.get('.custom-select').each(($li, index, $lis) => {
            cy.get($li).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
            cy.get($li).should('have.css', 'color').and('eq','rgb(66, 66, 66)')
            cy.get($li).should('have.css', 'font-size').and('eq', '14px');
        cy.wait(2000)
        cy.searchButton('検索')

})
        cy.checkBoxLabel();
        cy.wait(2000)
        cy.get('.custom-checkbox>label').invoke('text').should('contain', '承認済も表示')
        //
        cy.columnHeader();
        cy.wait(4000)
        cy.get('[role="columnheader"]').invoke('text').should('contain', 'コンテンツ')
        cy.get('[role="columnheader"]').invoke('text').should('contain', 'クラス')
        cy.get('[role="columnheader"]').invoke('text').should('contain', '最終更新者')
        cy.get('[role="columnheader"]').invoke('text').should('contain', 'ステータス')
        cy.get('[role="columnheader"]').invoke('text').should('contain', '作成日時')
        cy.get('[role="columnheader"]').invoke('text').should('contain', '最終更新日時')
        
        cy.wait(2000)
})
        it('Batch Process', () => {
            cy.get('[type="button"]').invoke('text').should('contain', '一括処理')
            cy.get('[type="button"]').should('have.css', 'color', 'rgb(10, 201, 164)')
            cy.get('[type="button"]').should('have.css', 'font-size').and('eq', '14px');
            cy.get('[type="button"]').should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/);
            cy.wait(2000)
            cy.get('#dropdown-form__BV_toggle_').click();
            cy.wait(2000)
            cy.checkBoxLabel();
            cy.wait(2000)
            cy.get('[type="checkbox"]').should("be.checked")
            //Verify checkbox header
            cy.wait(2000)
            cy.get('.custom-checkbox>label').invoke('text').should('contain', 'チェックした記事を削除')
            cy.wait(2000)
            cy.get('[type="button"]').invoke('text').should('contain', '適用')
            cy.get('[type="button"]').should('have.css', 'color', 'rgb(10, 201, 164)')
            cy.get('[type="button"]').should('have.css', 'font-size').and('eq', '14px');
            cy.get('[type="button"]').should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/);
            
})
})
//})

