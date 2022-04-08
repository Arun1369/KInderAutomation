import chaiColors from 'chai-colors'
chai.use(chaiColors)
require('cypress-xpath')
var labels = '.register-lables';
var clickmastersetting = ':nth-child(15) > .fa';
var hamburgerclick = '#dropdown-form__BV_toggle_ > img';
//var  clickrecordform = '//a[contains(text(),"記録帳票テンプレート")]';

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })

describe('kinder basic info', () => {
    it('Verification of screen content', () => {
        cy.balogin();
        cy.wait(2000)
        cy.get(hamburgerclick).click({ multiple: true });
        cy.wait(5000)
        cy.get(clickmastersetting).click({ multiple: true });
        cy.wait(10000)
        cy.get('.nav > :nth-child(2) >').click({ multiple: true })
        cy.wait(2000)
        cy.activeTabtitle('園の基本情報');
        cy.wait(2000)
        cy.get(labels).invoke('text').should('contain', '企業名')
        cy.get(labels).invoke('text').should('contain', '園の名前')
        cy.get(labels).invoke('text').should('contain', '園の住所')
        cy.get(labels).invoke('text').should('contain', '電話番号')
        cy.get(labels).invoke('text').should('contain', '緊急連絡先')
        cy.get(labels).invoke('text').should('contain', 'お知らせ受信用メールアドレス')
        cy.get(labels).invoke('text').should('contain', '園の種別')
        cy.get(labels).invoke('text').should('contain', '土日保育の有無')
        cy.get(labels).invoke('text').should('contain', '保育時間帯')
        cy.get(labels).invoke('text').should('contain', '保育標準時間带')
        cy.get(labels).invoke('text').should('contain', '保育短時間帯')
        cy.get(labels).invoke('text').should('contain', '利用者との契約形態')
        cy.get(labels).invoke('text').should('contain', '月極保育料の請求サイクル')
        cy.get(labels).invoke('text').should('contain', '延長保育料の発生単位')
        cy.get(labels).invoke('text').should('contain', '振替口座情報')
        cy.get(labels).invoke('text').should('contain', '報酬支払方法')
        cy.get(labels).invoke('text').should('contain', '金融機関')
        cy.get(labels).invoke('text').should('contain', '支店')
        cy.get(labels).invoke('text').should('contain', '口座種別')
        cy.get(labels).invoke('text').should('contain', '口座番号')
        cy.get(labels).invoke('text').should('contain', '口座名義')
        cy.registerLabelChecks();
        //radiobutton label
        
        cy.radionButtonLabel();

        //Verify Text of radio button and checkbox 
        cy.get('label').invoke('text').should('contain', '認可保育園')
        cy.get('label').invoke('text').should('contain', '認定こども園')
        cy.get('label').invoke('text').should('contain', '小規模保育所')
        cy.get('label').invoke('text').should('contain', '認可外保育園')
        cy.get('label').invoke('text').should('contain', '幼稚園')
        cy.get('label').invoke('text').should('contain', '企業主導型保育園')
        cy.get('label').invoke('text').should('contain', '学童')
        cy.get('label').invoke('text').should('contain', '小学校')
        cy.get('label').invoke('text').should('contain', '塾')
        cy.get('label').invoke('text').should('contain', '習い事')
        cy.get('label').invoke('text').should('contain', '中学校')
        //
        cy.get('label').invoke('text').should('contain', '土曜保育')
        cy.get('label').invoke('text').should('contain', '日曜保育')
        //
        cy.get('label').invoke('text').should('contain', '翌月払い')
        cy.get('label').invoke('text').should('contain', '1分から')
        cy.get('label').invoke('text').should('contain', '0分から')
        //
        cy.get('label').invoke('text').should('contain', '利用する')
        cy.get('label').invoke('text').should('contain', '利用しない')
        //
        cy.get('label').invoke('text').should('contain', '普通')
        cy.get('label').invoke('text').should('contain', '総合')
        cy.get('label').invoke('text').should('contain', '貯蓄')
        cy.get('label').invoke('text').should('contain', '当座')
        //
        //verify Save and cancel button 
        cy.saveandCancel();

        
        

    })
})