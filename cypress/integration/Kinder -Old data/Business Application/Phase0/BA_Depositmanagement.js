import chaiColors from 'chai-colors'
chai.use(chaiColors)
require('cypress-xpath')

var  clickdepositmanagementtab = '//a[contains(text(),"入金管理")]';


describe('03', () => {
    it('Verify screen content', () => {
        cy.balogin();
        cy.wait(2000)
        cy.get('#dropdown-form__BV_toggle_ > img').click();
        cy.wait(2000)
        cy.get(':nth-child(13) > .fa').click();
        cy.wait(2000)
        cy.xpath(clickdepositmanagementtab).click();
        cy.wait(2000)
        cy.activeTabtitle('入金管理');
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
        cy.columnHeader();
        cy.wait(4000)
        cy.get('[role="columnheader"]').invoke('text').should('contain', '園児名 / 保護者')
        cy.get('[role="columnheader"]').invoke('text').should('contain', '請求日')
        cy.get('[role="columnheader"]').invoke('text').should('contain', '請求日')
        cy.get('[role="columnheader"]').invoke('text').should('contain', '入金額 / 残高')
        cy.get('[role="columnheader"]').invoke('text').should('contain', '消込処理日')
        cy.get('[role="columnheader"]').invoke('text').should('contain', '作業者')
        //
        cy.radionButtonLabel();
            cy.wait(2000)
            cy.get('.custom-radio>label').invoke('text').should('contain', ' 全て')
            cy.get('.custom-radio>label').invoke('text').should('contain', '未消込')
            cy.get('.custom-radio>label').invoke('text').should('contain', ' 消込済')
            //
            cy.checkBoxLabel();
            cy.wait(2000)
            cy.get('.custom-checkbox>label').invoke('text').should('contain', '卒園退園児も表示')
            cy.get('.custom-checkbox>label').invoke('text').should('contain', '入園前園児も表示')
            
            //Verify download button 
            cy.get('.btn-outline-primary').eq(0).should('not.be.disabled')

    })
        //
        it('Batch process check', () => {
            cy.get('[type="button"]').invoke('text').should('contain', '一括処理')
            cy.get('[type="button"]').should('have.css', 'color', 'rgb(10, 201, 164)')
            cy.get('[type="button"]').should('have.css', 'font-size').and('eq', '14px');
            cy.get('[type="button"]').should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/);
            cy.get('#dropdown-form-batch__BV_toggle_').click();
            cy.wait(2000)
            cy.checkBoxLabel();
            cy.wait(2000)
            cy.get('[type="checkbox"]').should("be.checked")
            //Verify column header
            cy.wait(2000)
            cy.get('.custom-checkbox>label').invoke('text').should('contain', '消込処理の取り消し')
            cy.get('.custom-checkbox>label').invoke('text').should('contain', '頷収書発行')
            cy.wait(2000)
            cy.get('[type="button"]').invoke('text').should('contain', '適用')
            cy.get('[type="button"]').should('have.css', 'color', 'rgb(10, 201, 164)')
            cy.get('[type="button"]').should('have.css', 'font-size').and('eq', '14px');
            cy.get('[type="button"]').should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/);
            //ellipsis
            cy.get('[aria-rowindex="2"] > [aria-colindex="8"] > #dropdown-1 > #dropdown-1__BV_toggle_ > .fa').click();
            

    })
})
//})
//})
