import chaiColors from 'chai-colors'
chai.use(chaiColors)
require('cypress-xpath')


describe('19-Transportation Management', () => {
    it('Verify screen content', () => {
        cy.balogin();
        cy.wait(2000)
        cy.get('#dropdown-form__BV_toggle_ > img').click();
        cy.wait(2000)
        cy.get('.custom-menu-aside-dropdown > :nth-child(3) > .fa').click();
        cy.wait(2000)
        cy.activeTabtitle('バス運行管理');
        cy.wait(2000)
    })
    it('Verify pop up content', () => {
        cy.get('[aria-rowindex="2"] > .attendanceNameTableRowCss > ').click();
        cy.wait(2000)
        cy.header('乗車設定')
        cy.registerLabelChecks()
        //
        cy.radionButtonLabel();
            cy.wait(2000)
            cy.get('.custom-radio>label').eq(0).invoke('text').should('contain', '乗る')
            cy.get('.custom-radio>label').eq(1).invoke('text').should('contain', '乗らない')
            cy.wait(2000)
            cy.saveandCancel()
            //Verify for cross mark
            cy.get('.close').should('be.visible')
})
})
