import chaiColors from 'chai-colors'
chai.use(chaiColors)
require('cypress-xpath')



describe('verify Arrival leave ', () => {
    it('Verify screen content', () => {
        cy.balogin();
        cy.wait(2000)
        cy.get('#dropdown-form__BV_toggle_ > img').click();
        cy.wait(2000)
        cy.get('.custom-menu-aside-dropdown > :nth-child(2) > .fa').click()
        cy.wait(3000)
        cy.activeTabtitle('登降園管理');
        cy.wait(2000)
        cy.get('.custom-select').each(($li, index, $lis) => {
            cy.get($li).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
            cy.get($li).should('have.css', 'color').and('eq','rgb(66, 66, 66)')
            cy.get($li).should('have.css', 'font-size').and('eq', '14px');
        cy.wait(2000)
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
        cy.get('.custom-control-label').invoke('text').should('contain', '卒退園児も表示欠')
        //
        //Verify for column header
        cy.columnHeader();
        cy.wait(4000)
        cy.get('thead > tr > .workTimeTableRowCss > div').invoke('text').should('contain', '登園時間')
        
        cy.get('thead > tr > .leaveTimeTableRowCss > div').invoke('text').should('contain', '降園時間')
        cy.get('.workingHoursTableRowCss > div').invoke('text').should('contain', '保育時間')
        cy.get('thead > tr > [aria-colindex="6"] > div').invoke('text').should('contain', '欠席')
        cy.get('[aria-colindex="7"] > div').invoke('text').should('contain', 'お迎え予定者')
        cy.get('[aria-colindex="8"] > div').invoke('text').should('contain', 'お迎え保護者')
        cy.get('[aria-colindex="9"] > div').invoke('text').should('contain', 'メモ・欠席理由')
        cy.wait(2000)
        
        //Verification for  保存 button
        cy.get('[type="button"]').invoke('text').should('contain', '保存')
        cy.Button();
        cy.wait(2000)
        //Verification for bulk reg button
        cy.get('[type="button"]').should("be.visible")
        cy.get('[type="button"]').invoke('text').should('contain', '一括登録')
        cy.get('[type="button"]').should('have.css', 'color', 'rgb(10, 201, 164)')
        cy.get('[type="button"]').should('have.css', 'font-size').and('eq', '14px');
        cy.get('[type="button"]').should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/);
        //Verify print option
        cy.get('.fa-print').should('not.be.disabled')
        //Verify download button 
        cy.get('.btn-outline-primary').eq(0).should('not.be.disabled')
 


    })
})
})
