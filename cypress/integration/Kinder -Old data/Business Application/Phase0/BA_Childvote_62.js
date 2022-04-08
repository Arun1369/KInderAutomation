import chaiColors from 'chai-colors'
chai.use(chaiColors)
require('cypress-xpath')
var labels = '.register-lables';


Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })
  describe('child Vote 62', () => {
    it('Verify screen content', () => {
        cy.visit('http://54.238.110.14/staff/#/auth/signin')
    cy.wait(2000)
    cy.get('.px-4').click() 
    cy.wait(2000);
    cy.get('#dropdown-form__BV_toggle_ ').click({ multiple: true });
    cy.wait(2000)
    cy.get(':nth-child(14) > .fa').click({ multiple: true });
    cy.wait(2000)
    cy.get('[aria-rowindex="1"] > [aria-colindex="2"] > [style="width: 100px;"] > .col-12 > .kids-row-buttons > :nth-child(3)').click();
    cy.activeTabtitle('児童票');
    cy.wait(2000)
    //
    cy.get('[role="tab"]').invoke('text').should('contain', '4~5 月')
    cy.get('[role="tab"]').invoke('text').should('contain', '6~7 月')
    cy.get('[role="tab"]').invoke('text').should('contain', '8~9 月')
    cy.get('[role="tab"]').invoke('text').should('contain', '9~10 月')
    cy.get('[role="tab"]').invoke('text').should('contain', '11~12 月')
    cy.get('[role="tab"]').invoke('text').should('contain', '12~1 月')
    //
    cy.saveandCancel();
    cy.labelandplaceHolder('養護','養護');
    cy.labelandplaceHolder('教育','教育');
    cy.labelandplaceHolder('ねらい','ねらい');
    cy.labelandplaceHolder('評価・反省','評価・反省');
    cy.labelandplaceHolder('子どもの様子','子どもの様子');
    cy.labelandplaceHolder('保護者への連絡','保護者への連絡');
    cy.labelandplaceHolder('エピソード','エピソード');
    cy.labelandplaceHolder('機嫌','機嫌');
    cy.labelandplaceHolder('食欲','食欲');
    cy.labelandplaceHolder('備考','備考');
    //cy.registerLabelChecks();
    cy.get('.start > .title').should('contain', '作成中')
    cy.get(':nth-child(2) > .title').should('contain', '下書き')
    cy.get(':nth-child(3) > .title').should('contain', '申請中')
    cy.get(':nth-child(4) > .title').should('contain', '承認済')
    cy.header('園児 登録編集');

    })
})
