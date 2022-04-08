import chaiColors from 'chai-colors'
chai.use(chaiColors)
require('cypress-xpath')

var  clickathometab = '//a[contains(text(),"家庭での様子")]';


describe('03', () => {
    it('Verify screen content', () => {
        cy.balogin();
        cy.wait(2000)
        cy.get('#dropdown-form__BV_toggle_ > img').click();
        cy.wait(2000)
        cy.get('.custom-menu-aside-dropdown > :nth-child(1) > .fa').click()
        cy.wait(3000)
        cy.xpath(clickathometab).click();
        cy.wait(2000)
        cy.activeTabtitle('家庭での様子');
        cy.wait(2000)
        cy.get('.custom-select').each(($li, index, $lis) => {
            cy.get($li).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
            cy.get($li).should('have.css', 'color').and('eq','rgb(66, 66, 66)')
            cy.get($li).should('have.css', 'font-size').and('eq', '14px');
        cy.wait(2000)
        //parent name label and UI check 
        cy.get('[role="tab"]').invoke('text').should('contain', '保護者から連絡')
        cy.get('[role="tab"]').invoke('text').should('contain', '園内連絡 ')
        cy.get('[role="tab"]').each(($li, index, $lis) => {
            cy.get($li).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
            //cy.get($li).should('have.css', 'color').and('eq','rgb(47, 53, 58)')
            cy.get($li).should('have.css', 'font-size').and('eq', '14px');
        })
        cy.wait(2000)
        cy.columnHeader();
        cy.wait(4000)
        cy.get('[role="columnheader"]').invoke('text').should('contain', '機嫌')
        cy.get('[role="columnheader"]').invoke('text').should('contain', '排便')
        cy.get('[role="columnheader"]').invoke('text').should('contain', '睡眠')
        cy.get('[role="columnheader"]').invoke('text').should('contain', '食事')
        cy.get('[role="columnheader"]').invoke('text').should('contain', '検温')
        cy.get('[role="columnheader"]').invoke('text').should('contain', '迎え')
        cy.get('[role="columnheader"]').invoke('text').should('contain', 'プール')
        cy.get('[role="columnheader"]').invoke('text').should('contain', 'トイレ')
        cy.wait(2000)

        })
    })
})

