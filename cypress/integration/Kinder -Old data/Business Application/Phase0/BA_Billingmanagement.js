import chaiColors from 'chai-colors'
chai.use(chaiColors)
require('cypress-xpath')


describe('70-Billingmanagement', () => {
    it('Verify screen content', () => {
        cy.balogin();
        cy.wait(2000)
        cy.get('#dropdown-form__BV_toggle_ > img').click({ multiple: true });
        cy.wait(2000)
        cy.get(':nth-child(13) > .fa').click({ multiple: true });
        cy.wait(2000)
        cy.activeTabtitle('請求管理');
        cy.wait(2000)
        cy.get('.custom-select').each(($li, index, $lis) => {
            cy.get($li).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
            cy.get($li).should('have.css', 'color').and('eq','rgb(66, 66, 66)')
            cy.get($li).should('have.css', 'font-size').and('eq', '14px');
        cy.wait(2000)
        })
        //Verify for Search 
        cy.get('.form-control').first().should('have.attr', 'placeholder', '検索')
        cy.get('.form-control').should('have.css', 'color').and('eq','rgb(66, 66, 66)')
        cy.get('.form-control').should('have.css', 'font-size').and('eq', '14px')  
        cy.get('.form-control').should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
        
        cy.wait(2000)
        //Verify for check box and label
        cy.get('[type="checkbox"]').should("be.checked")
        cy.checkBoxLabel();
        cy.wait(2000)
        cy.get('.custom-control-label').invoke('text').should('contain', '卒園退園児も表示')
        //
        //Verify for column header
        cy.columnHeader();
        cy.wait(4000)
        
        cy.get('[role="columnheader"]').invoke('text').should('contain', '園児名 / 保護者')
        cy.get('[role="columnheader"]').invoke('text').should('contain', '月極保育料')
        cy.get('[role="columnheader"]').invoke('text').should('contain', '月極延長保育料')
        cy.get('[role="columnheader"]').invoke('text').should('contain', 'スポット延長保育料')
        cy.get('[role="columnheader"]').invoke('text').should('contain', '一時保育')
        cy.get('[role="columnheader"]').invoke('text').should('contain', '食事')
        cy.get('[role="columnheader"]').invoke('text').should('contain', 'その他')
        cy.get('[role="columnheader"]').invoke('text').should('contain', '割引')
        cy.get('[role="columnheader"]').invoke('text').should('contain', '合計')
        cy.get('[role="columnheader"]').invoke('text').should('contain', 'ステータス')
        cy.wait(2000)

    })
    it('Batch process check', () => {
        cy.get('[type="button"]').invoke('text').should('contain', '一括処理')
        cy.get('[type="button"]').should('have.css', 'color', 'rgb(10, 201, 164)')
        cy.get('[type="button"]').should('have.css', 'font-size').and('eq', '14px');
        cy.get('[type="button"]').should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/);
        cy.get('.col-lg-12 > :nth-child(4) > #dropdown-form > #dropdown-form__BV_toggle_').click();
        cy.wait(2000)
        cy.radionButtonLabel();
        cy.wait(2000)
        cy.get('.custom-radio>label').invoke('text').should('contain', '確定')
        cy.get('.custom-radio>label').invoke('text').should('contain', '講求書発行')
        cy.get('.custom-radio>label').invoke('text').should('contain', 'ロ座替データ出力')
        //
        cy.get('[type="button"]').invoke('text').should('contain', '適用')
        cy.get('[type="button"]').should('have.css', 'color', 'rgb(10, 201, 164)')
        cy.get('[type="button"]').should('have.css', 'font-size').and('eq', '14px');
        cy.get('[type="button"]').should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/);
       
})
})
//})


