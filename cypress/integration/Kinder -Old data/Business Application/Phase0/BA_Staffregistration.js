/// <reference types="Cypress" />
import chaiColors from 'chai-colors'
chai.use(chaiColors)
require('cypress-xpath')
var labels = '.register-lables';
var clickmastersetting = ':nth-child(15) > .fa';
var hamburgerclick = '#dropdown-form__BV_toggle_ > img';
var addbuttonclick = '.flex-grow-1 > .btn';


Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })
describe('Main Menu', () => {
    it('Verify Main Menu', () => {
        cy.balogin();
        cy.get(hamburgerclick).click();
        cy.wait(2000)
        cy.get(clickmastersetting).click();
        cy.wait(4000)
        //Verification for add button
 cy.get('[type="button"]').should("be.visible");
 cy.get('[type="button"]').should('have.css', 'color', 'rgb(10, 201, 164)');
 cy.get('[type="button"]').invoke('text').should('contain', '職員を追加');
 cy.get('[type="button"]').should('have.css', 'font-size').and('eq', '14px');
 cy.get('[type="button"]').should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/);
 cy.wait(3000);
 cy.get(addbuttonclick).click();
 cy.wait(6000);
    })

it('Verify of screen content', () => {
    cy.get('.modal-content').within(()=>{  
    cy.get('#staff-register-modal___BV_modal_title_').invoke('text').should('contain', '職員 登録編集')
    cy.get(labels).invoke('text').should('contain', '氏名')
    // cy.get(labels).invoke('text').should('contain', 'かな ')
        cy.get(labels).invoke('text').should('contain', '性別')
        cy.get(labels).invoke('text').should('contain', '生年月日')
        cy.get(labels).invoke('text').should('contain', '電話番号')
        cy.get(labels).invoke('text').should('contain', 'メールアドレス')
        cy.get(labels).invoke('text').should('contain', '所属園')
        cy.get(labels).invoke('text').should('contain', '役職')
        cy.get(labels).invoke('text').should('contain', '担当クラス')
        cy.get(labels).invoke('text').should('contain', '時間割担当')
        cy.get(labels).invoke('text').should('contain', '入社日')
        cy.get(labels).invoke('text').should('contain', '退職日')
        cy.get(labels).invoke('text').should('contain', '保有資格')
        cy.get(labels).invoke('text').should('contain', '備考')
        cy.get(labels).invoke('text').should('contain', 'ログイン ID')
        cy.get(labels).invoke('text').should('contain', 'パスワード')
        cy.get(labels).invoke('text').should('contain', '承認可能なもの')
        cy.get(labels).invoke('text').should('contain', '権限設定')
        cy.get(labels).invoke('text').should('contain', '操作可能な所属園')
        cy.registerLabelChecks();
        //save and cancel button
        cy.get('[type="button"]').invoke('text').should('contain', 'キャンセル');
                cy.get('[type="button"]').invoke('text').should('contain', '保存');
                cy.saveandCancel();

        //radio button
        cy.get('.custom-radio>label').invoke('text').should('contain', 'アクティブ');
        cy.get('.custom-radio>label').invoke('text').should('contain', '退社');
        cy.radionButtonLabel();
        //check box
        cy.get('.custom-checkbox>label').invoke('text').should('contain', 'シフト');
        cy.get('.custom-checkbox>label').invoke('text').should('contain', '園だより');
        cy.get('.custom-checkbox>label').invoke('text').should('contain', 'お知らせ');
        cy.get('.custom-checkbox>label').invoke('text').should('contain', 'ヒヤリハット報告書');
        cy.get('.custom-checkbox>label').invoke('text').should('contain', 'オリジナル帳票');
        cy.get('.custom-checkbox>label').invoke('text').should('contain', '園児出生時記録');
        cy.get('.custom-checkbox>label').invoke('text').should('contain', '保育要録');
        cy.get('.custom-checkbox>label').invoke('text').should('contain', '担当クラス以外の閲覧');
        cy.get('.custom-checkbox>label').invoke('text').should('contain', '登校園管理');
        cy.get('.custom-checkbox>label').invoke('text').should('contain', 'バス運行管理');
        cy.get('.custom-checkbox>label').invoke('text').should('contain', '行事・時間割予定');
        cy.get('.custom-checkbox>label').invoke('text').should('contain', 'お知らせ管理');
        cy.get('.custom-checkbox>label').invoke('text').should('contain', 'シフト勤怠管理');
        cy.get('.custom-checkbox>label').invoke('text').should('contain', '記録・指導案');
        cy.get('.custom-checkbox>label').invoke('text').should('contain', '園児台帳');
        cy.checkBoxLabel();
        //close
        cy.get('.close').click();
})
})
})


