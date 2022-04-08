/// <reference types="Cypress" />
import chaiColors from 'chai-colors'
chai.use(chaiColors)
require('cypress-xpath')

var kinderLedger = '.fa-book';
var basicInfo = '//button[contains(text(),"基本情報")]'
var addParent = '//button[contains(text(),"保護者を追加")]'
var addAffiliationClass = '//button[contains(text(),"所属クラスを追加")]'
describe('Registered children edit', () => {
    it('Verify Registered children edit Screen', () => {
    cy.visit('http://54.238.110.14/staff/#/auth/signin')
    cy.wait(6000)
    cy.get('.px-4').click() 
    cy.wait(2000);
    cy.get('#dropdown-form__BV_toggle_ ').click();
    cy.wait(6000)
    cy.get(kinderLedger).eq(0).click({ force: true })
    cy.wait(6000)
    cy.debug()
    cy.xpath(basicInfo).eq(0).click({ force: true })
    //Verify tab header
    cy.header('園児 登録編集');

    cy.get('[class="modal-body"]').within(()=>{
        cy.wait(3000)

        //Verify Tab title font,
        cy.get('.nav-item').eq(0).invoke('text').should('contain', '基本情報')
        cy.get('.nav-item').eq(0).should('have.css', 'color').and('eq','rgb(66, 66, 66)')
        cy.get('.nav-item').eq(0).should('have.css', 'font-size').and('eq', '14px')
        cy.get('.nav-item').eq(0).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
        cy.wait(3000)

        //Verify for labels
        cy.get('.register-lables').eq(0).invoke('text').should('contain', '氏名')
        cy.get('.register-lables').eq(1).invoke('text').should('contain', 'かな')
        cy.get('.register-lables').eq(2).invoke('text').should('contain', '性別')
        cy.get('.register-lables').eq(3).invoke('text').should('contain', '生年月日')
        cy.get('.register-lables').eq(4).invoke('text').should('contain', '血液型')
        cy.get('.register-lables').eq(5).invoke('text').should('contain', '好きな色')
        cy.get('.register-lables').eq(6).invoke('text').should('contain', '連絡先')
        cy.get('.register-lables').eq(7).invoke('text').should('contain', 'メールアドレス')
        cy.get('.register-lables').eq(8).invoke('text').should('contain', '住所')
        cy.get('.register-lables').eq(10).invoke('text').should('contain', 'バス送迎')
        cy.get('.register-lables').eq(11).invoke('text').should('contain', 'バスルート')
        cy.get('.register-lables').eq(12).invoke('text').should('contain', '乗車場所')
        cy.get('.register-lables').eq(13).invoke('text').should('contain', '自宅地図')
        cy.get('.register-lables').eq(14).invoke('text').should('contain', '家族構成')
        cy.get('.register-lables').eq(15).invoke('text').should('contain', '兄弟姉妹')
        cy.get('.register-lables').eq(16).invoke('text').should('contain', '保護者')
        cy.get('.register-lables').eq(17).invoke('text').should('contain', '健康保険証')
        cy.get('.register-lables').eq(18).invoke('text').should('contain', 'アレルギー')
        cy.get('.register-lables').eq(19).invoke('text').should('contain', '平熱')
        cy.get('.register-lables').eq(20).invoke('text').should('contain', '持病・既往歴')
        cy.get('.register-lables').eq(21).invoke('text').should('contain', 'かかりつけ医')
        cy.get('.register-lables').eq(22).invoke('text').should('contain', '健診・予防履歴')
        cy.get('.register-lables').eq(23).invoke('text').should('contain', '薬')
        cy.get('.register-lables').eq(24).invoke('text').should('contain', '好きなもの')
        cy.get('.register-lables').eq(25).invoke('text').should('contain', '好きなおもちゃ')
        cy.get('.register-lables').eq(26).invoke('text').should('contain', '児童認定証番号')
        cy.get('.register-lables').eq(27).invoke('text').should('contain', '認定')
        cy.get('.register-lables').eq(28).invoke('text').should('contain', '入園日')
        cy.get('.register-lables').eq(29).invoke('text').should('contain', '退園日')
        cy.get('.register-lables').eq(30).invoke('text').should('contain', '所属クラス')
        cy.get('.register-lables').eq(31).invoke('text').should('contain', '保護者アプリ')
        cy.get('.register-lables').eq(32).invoke('text').should('contain', '引き落とし口座')
        cy.get('.register-lables').eq(33).invoke('text').should('contain', '金融機関')
        cy.get('.register-lables').eq(35).invoke('text').should('contain', '支店')
        cy.get('.register-lables').eq(37).invoke('text').should('contain', '口座種別')
        cy.get('.register-lables').eq(39).invoke('text').should('contain', '口座番号')
        cy.get('.register-lables').eq(41).invoke('text').should('contain', '口座名義')
        cy.get('.register-lables').eq(42).invoke('text').should('contain', '備考')
        
        cy.get('.register-lables').each(($li, index, $lis) => {
        cy.get($li).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
        cy.get($li).should('have.css', 'color').and('eq','rgb(92, 104, 115)');
        cy.get($li).should('have.css', 'font-size').and('eq', '12px');
        })

        //Verify for drop-down fields
        cy.get('.custom-select').eq(0).invoke('text').should('contain', '女性')
        cy.get('.custom-select').eq(1).invoke('text').should('contain', 'AB')
        cy.get('.custom-select').eq(2).invoke('text').should('contain', '利用しない')
        cy.get('.custom-select').eq(3).invoke('text').should('contain', 'バスルート')
        cy.get('.custom-select').eq(4).invoke('text').should('contain', '北 2 条西 2 丁目')
        cy.get('.custom-select').eq(6).invoke('text').should('contain', '父母')
        cy.get('.custom-select').eq(7).invoke('text').should('contain', '父母')
        cy.get('.custom-select').eq(8).invoke('text').should('contain', 'ひよこ (0 歳児 )')
        cy.get('.custom-select').eq(9).invoke('text').should('contain', 'みずほ銀行')
        cy.get('.custom-select').eq(10).invoke('text').should('contain', '支店を選択')
        
        cy.get('.custom-select').each(($li, index, $lis) => {
        cy.get($li).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
        cy.get($li).should('have.css', 'font-size').and('eq', '14px');
        })

        cy.get('.inputField').eq(0).first().should('have.attr', 'placeholder', '氏名')
        cy.get('.inputField').eq(1).first().should('have.attr', 'placeholder', 'かな')
        cy.get('.inputField').eq(5).first().should('have.attr', 'placeholder', '好きな色')
        cy.get('.inputField').eq(6).first().should('have.attr', 'placeholder', '連絡先')
        cy.get('.inputField').eq(7).first().should('have.attr', 'placeholder', 'メールアドレス')
        cy.get('.inputField').eq(8).first().should('have.attr', 'placeholder', '郵便番号')
        cy.get('.inputField').eq(11).first().should('have.attr', 'placeholder', '兄弟姉妹')
        cy.get('.inputField').eq(14).first().should('have.attr', 'placeholder', '保険者番号')
        cy.get('.inputField').eq(15).first().should('have.attr', 'placeholder', '平熱')
        cy.get('.inputField').eq(16).first().should('have.attr', 'placeholder', '持病・既往歴')
        cy.get('.inputField').eq(17).first().should('have.attr', 'placeholder', 'かかりつけ医')
        cy.get('.inputField').eq(18).first().should('have.attr', 'placeholder', '健診・予防履歴')
        cy.get('.inputField').eq(19).first().should('have.attr', 'placeholder', '薬')
        cy.get('.inputField').eq(20).first().should('have.attr', 'placeholder', '好きなもの')
        cy.get('.inputField').eq(21).first().should('have.attr', 'placeholder', '好きなおもちゃ')
        cy.get('.inputField').eq(22).first().should('have.attr', 'placeholder', '児童認定証番号')
        cy.get('.inputField').eq(23).first().should('have.attr', 'placeholder', '認定')
        cy.get('.inputField').eq(29).first().should('have.attr', 'placeholder', '口座番号')
        cy.get('.inputField').eq(30).first().should('have.attr', 'placeholder', '口座名義')
        cy.get('.inputField').eq(31).first().should('have.attr', 'placeholder', '備考')
        
        cy.get('.inputField').each(($li, index, $lis) => {
        cy.get($li).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
        cy.get($li).should('have.css', 'color').and('eq','rgb(66, 66, 66)');
        cy.get($li).should('have.css', 'font-size').and('eq', '14px');
        })

        cy.get('.card-lables').eq(1).invoke('text').should('contain', '氏名')
        cy.get('.card-lables').eq(2).invoke('text').should('contain', 'ふりがな')
        cy.get('.card-lables').eq(3).invoke('text').should('contain', '続柄')
        cy.get('.card-lables').eq(4).invoke('text').should('contain', '連絡先')
        cy.get('.card-lables').eq(5).invoke('text').should('contain', 'メールアドレス')
        cy.get('.card-lables').eq(6).invoke('text').should('contain', '送迎代表者')
        //cy.get('.card-lables').eq(7).first().should('have.attr', 'placeholder', '備考')
        cy.get('.card-lables').eq(8).invoke('text').should('contain', '所属期間')
        cy.get('.card-lables').eq(9).invoke('text').should('contain', 'クラス')
        cy.get('.card-lables').eq(10).invoke('text').should('contain', '出席番号')
        cy.get('.card-lables').eq(12).invoke('text').should('contain', 'お子さまの ID')
        cy.get('.card-lables').eq(13).invoke('text').should('contain', 'パスワード')
        
        cy.get('.card-lables').each(($li, index, $lis) => {
        cy.get($li).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
        cy.get($li).should('have.css', 'color').and('eq','rgb(92, 104, 115)');
        cy.get($li).should('have.css', 'font-size').and('eq', '12px');
        })

       // Verify for radio buttons
           cy.radionButtonLabel();
            cy.wait(2000)
            cy.get('.custom-radio>label').eq(2).invoke('text').should('contain', '送り')
            cy.get('.custom-radio>label').eq(3).invoke('text').should('contain', '迎え')
            cy.get('.custom-radio>label').eq(6).invoke('text').should('contain', '保険証無し')
            cy.get('.custom-radio>label').eq(7).invoke('text').should('contain', '普通')
            cy.get('.custom-radio>label').eq(8).invoke('text').should('contain', '総合')
            cy.get('.custom-radio>label').eq(9).invoke('text').should('contain', '貯蓄')
            cy.get('.custom-radio>label').eq(10).invoke('text').should('contain', '当座')

            //Verify for add buttons
            cy.xpath(addParent).invoke('text').should('contain', '保護者を追加')
            cy.xpath(addAffiliationClass).invoke('text').should('contain', '所属クラスを追加')
            cy.xpath(addAffiliationClass).should('have.css', 'color').and('eq','rgb(255, 255, 255)')
            cy.xpath(addAffiliationClass).should('have.css', 'font-size').and('eq', '14px')
            cy.xpath(addAffiliationClass).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)

            //Verify for profile
            cy.get('.b-avatar').should('be.visible')
            cy.get('.cursor').should('be.visible')
    
           
            cy.wait(2000)
            //Verify for save and cancel
            cy.saveandCancel()   
        
        })

        //Verify for cross mark
        cy.get('.close').should('be.visible')
    })
})