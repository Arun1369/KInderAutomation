import chaiColors from 'chai-colors'
chai.use(chaiColors)
require('cypress-xpath')
var labels = '.register-lables';

// 
describe('Parent details', () => {
    it('Verify parent details screen content', () => {
        cy.balogin();
        cy.get('#dropdown-form__BV_toggle_').click();
        cy.wait(4000)
        cy.get(':nth-child(6) > .fa').click({multiple:true})
        //cy.get('[role="tab"]').invoke('text').should('contain', '保護者からの連絡').click();
        cy.wait(4000)
        //Verify the title
        cy.activeTabtitle('保護者からの連絡');
       
    })
    it('Verify pop up content', () => {
        cy.visit('http://119.82.96.68/kinder-bweb/#/message/parent/1001')
        cy.wait(4000)
        cy.header('保護者からの連絡');
        cy.wait(2000)
        cy.get('.register-lables').eq(1).invoke('text').should('contain', '処理状態 :');
        cy.get('.register-lables').invoke('text').should('contain', '処理担当 :');
        cy.get('.register-lables').invoke('text').should('contain', '送信日時 :');
        cy.registerLabelChecks();
        cy.wait(2000)
        //radio buttons
        cy.radionButtonLabel();
        cy.get('.custom-radio>label').invoke('text').should('contain', '未対応')
        cy.get('.custom-radio>label').invoke('text').should('contain', '対応中')
        cy.get('.custom-radio>label').invoke('text').should('contain', '確認済み')
        cy.get('.custom-radio>label').invoke('text').should('contain', '取り消し')
        //badge check
        cy.get('.col-lg-9 > .badge').invoke('text').should('contain', 'カテゴリー')
        cy.get('.col-lg-9 > .badge').should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
        cy.get('.col-lg-9 > .badge').should('have.css', 'color').and('eq','rgb(255, 255, 255)')
        cy.get('.col-lg-9 > .badge').should('have.css', 'font-size').and('eq', '12.6px');
        //save and cancel
        cy.saveandCancel();
        cy.get('.close').should('be.visible')
        //avatar
        cy.get('.row.col-lg-9 > .d-flex > .b-avatar > .bi-person-fill > g > path').should('be.visible')
        //KG name
        cy.get('.row.col-lg-9 > .col-lg-2 > :nth-child(1)').invoke('text').should('contain', '園児氏名');
        cy.get('.row.col-lg-9 > .col-lg-2 > :nth-child(1)').should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
        cy.get('.row.col-lg-9 > .col-lg-2 > :nth-child(1)').should('have.css', 'color').and('eq','rgb(66, 66, 66)')
        cy.get('.row.col-lg-9 > .col-lg-2 > :nth-child(1)').should('have.css', 'font-size').and('eq', '14px');
        //guardian name
        cy.get('.row.col-lg-9 > .col-lg-3 > :nth-child(1)').invoke('text').should('contain', '保護者氏名')
        cy.get('.row.col-lg-9 > .col-lg-3 > :nth-child(1)').should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
        cy.get('.row.col-lg-9 > .col-lg-3 > :nth-child(1)').should('have.css', 'color').and('eq','rgb(66, 66, 66)')
        cy.get('.row.col-lg-9 > .col-lg-3 > :nth-child(1)').should('have.css', 'font-size').and('eq', '14px');

       })
})
