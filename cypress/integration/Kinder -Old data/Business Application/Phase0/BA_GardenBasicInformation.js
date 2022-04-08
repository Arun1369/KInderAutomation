/// <reference types="Cypress" />
import chaiColors from 'chai-colors'
chai.use(chaiColors)
require('cypress-xpath')

var masterScreenButton = '.fa-cogs';
var basicInformationTab = '//a[contains(text(),"園の基本情報")]';

describe('Basic information', () => {
    it('Verify MBasic information UI', () => {
        cy.balogin();
        cy.get('#dropdown-form__BV_toggle_').click();
        cy.get(masterScreenButton).eq(0).click()
        cy.wait(3000)
        cy.xpath(basicInformationTab).click();

        //Verify Tab title font,
        cy.masterSettingsTab(basicInformationTab,"園の基本情報")
       
        cy.wait(3000)
       //Verify All text
        cy.get('[class="tab-pane active"]').within(()=>{
        
            cy.wait(3000)
            //verify all labels font
            cy.registerLabelChecks();
            
            //Verify All label label and placeholder
            cy.labelandplaceHolder('企業名','企業名');
            cy.labelandplaceHolder('園の名前','園の名前');
            cy.labelandplaceHolder('電話番号','電話番号');
            cy.labelandplaceHolder('緊急連絡先','緊急連絡先電話番号');
            cy.labelandplaceHolder('お知らせ受信用メールアドレス','メールアドレス 1');
            cy.labelandplaceHolder('利用者との契約形態','利用者との契約形態');
        
            cy.labelandplaceHolder('口座番号','口座番号');
            cy.labelandplaceHolder('口座名義','口座名義');
    
            //Lable with out place holder
            cy.get('.register-lables').eq(9).invoke('text').should('contain', '保育標準時間带')
            cy.get('.register-lables').eq(10).invoke('text').should('contain', '保育短時間帯')
            cy.get('.register-lables').eq(11).invoke('text').should('contain', '利用者との契約形態')
            cy.get('.register-lables').eq(12).invoke('text').should('contain', '月極保育料の請求サイクル')
            cy.get('.register-lables').eq(13).invoke('text').should('contain', 'スポット延長保育料 一時保育料計算の締め日')
            cy.get('.register-lables').eq(14).invoke('text').should('contain', '延長保育料の発生単位')
            cy.get('.register-lables').eq(15).invoke('text').should('contain', '保護者宛のメール送信元')
            cy.get('.register-lables').eq(16).invoke('text').should('contain', 'アクセス制限')
            cy.get('.register-lables').eq(19).invoke('text').should('contain', '振替口座情報')
            cy.get('.register-lables').eq(20).invoke('text').should('contain', '金融機関')
            cy.get('.register-lables').eq(22).invoke('text').should('contain', '支店')


            //Verify radio button font 
            cy.radionButtonLabel();

            //Verify Text of radio button and checkbox 
            cy.get('label').eq(0).invoke('text').should('contain', '認可保育園')
            cy.get('label').eq(1).invoke('text').should('contain', '認定こども園')
            cy.get('label').eq(2).invoke('text').should('contain', '小規模保育所')
            cy.get('label').eq(3).invoke('text').should('contain', '認可外保育園')
            cy.get('label').eq(4).invoke('text').should('contain', '幼稚園')
            cy.get('label').eq(5).invoke('text').should('contain', '企業主導型保育園')
            cy.get('label').eq(6).invoke('text').should('contain', '学童')
            cy.get('label').eq(7).invoke('text').should('contain', '小学校')
            cy.get('label').eq(8).invoke('text').should('contain', '塾')
            cy.get('label').eq(9).invoke('text').should('contain', '習い事')
            cy.get('label').eq(10).invoke('text').should('contain', '中学校')
            cy.get('label').eq(11).invoke('text').should('contain', '土曜保育')
            cy.get('label').eq(12).invoke('text').should('contain', '日曜保育')
            cy.get('label').eq(13).invoke('text').should('contain', '前月払い')
            cy.get('label').eq(14).invoke('text').should('contain', '当月払い')
            cy.get('label').eq(15).invoke('text').should('contain', '翌月払い')
            cy.get('label').eq(16).invoke('text').should('contain', '1分から')
            cy.get('label').eq(17).invoke('text').should('contain', '0分から')
            cy.get('label').eq(18).invoke('text').should('contain', '利用する')
            cy.get('.fa').should("be.visible")

            //verify Save and cancel button 
            cy.saveandCancel();

        })


    })
})