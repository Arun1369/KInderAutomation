/// <reference types="Cypress" />
import chaiColors from 'chai-colors'
chai.use(chaiColors)
require('cypress-xpath')

 var masterScreenButton = '.fa-cogs';
 var feeManagement = 'a[href="/staff/#/setting/fee"]';
 var saveButton = '//button[contains(text(),"保存")]'
Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })

 describe('Fee Management', () => {
     it('Verify Fee Management Screen', function () {
//         cy.balogin();
//         cy.get('#dropdown-form__BV_toggle_ ').click();
//         cy.wait(6000)
//         cy.get(masterScreenButton).eq(0).click()
//         cy.wait(6000)
//         cy.debug()
//         cy.get(feeManagement).click({ multiple: true })

//         //Verify Tab title font,
//         cy.get(feeManagement).invoke('text').should('contain', '保育料管理')
//         cy.get(feeManagement).should('have.css', 'color').and('eq','rgb(255, 255, 255)')
//         cy.get(feeManagement).should('have.css', 'font-size').and('eq', '14px')
//         cy.get(feeManagement).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
       
//         cy.wait(3000)
      
        
//          cy.get('[class="animated fadeIn"]').eq(0).within(()=>{
    
        
//          })
//      })
//     })
cy.visit('http://54.238.110.14/staff/#/auth/signin')
cy.wait(6000)
cy.get('.px-4').click() 
    cy.wait(2000);
    cy.get('#dropdown-form__BV_toggle_ ').click();
    cy.wait(6000)
        cy.get(masterScreenButton).eq(0).click()
        cy.wait(6000)
        cy.debug()
        cy.get(feeManagement).click({ multiple: true })

        //Verify Tab title font,
        cy.get(feeManagement).invoke('text').should('contain', '保育料管理')
        cy.get(feeManagement).should('have.css', 'color').and('eq','rgb(255, 255, 255)')
        cy.get(feeManagement).should('have.css', 'font-size').and('eq', '14px')
        cy.get(feeManagement).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
       
        cy.wait(3000)

        //Verify header
        cy.header('料金設定');

        cy.get('[class="tab-pane active"]').within(()=>{
            cy.wait(3000)

        //Verify add button
        cy.get('.px-4').invoke('text').should('contain', '新規追加')
        cy.get('.px-4').should('have.css', 'color').and('eq','rgb(255, 255, 255)')
        cy.get('.px-4').should('have.css', 'font-size').and('eq', '14px')
        cy.get('.px-4').should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)

        //Verify for header and it's fields
        cy.get('h6').eq(0).invoke('text').should('contain', '月極保育料')
            cy.get('h6').eq(1).invoke('text').should('contain', '標準料金')
            cy.get('h6').eq(2).invoke('text').should('contain', '夜間料金')
            cy.get('h6').eq(3).invoke('text').should('contain', '月極延長保育料')
            cy.get('h6').eq(4).invoke('text').should('contain', '1 時間延長料金')
            cy.get('h6').eq(5).invoke('text').should('contain', 'スポット延長保育料')
            cy.get('h6').eq(6).invoke('text').should('contain', '1 時間延長料金')
            cy.get('h6').eq(7).invoke('text').should('contain', '一時保育料')
            cy.get('h6').eq(8).invoke('text').should('contain', '月極割引')
            cy.get('h6').eq(9).invoke('text').should('contain', '受講料')
            cy.get('h6').eq(10).invoke('text').should('contain', '送迎費用')
            cy.get('h6').eq(11).invoke('text').should('contain', 'その他月極料金')
            cy.get('h6').eq(12).invoke('text').should('contain', '食費')
            cy.get('h6').eq(13).invoke('text').should('contain', '入園時費用')
            cy.get('h6').eq(14).invoke('text').should('contain', '消耗品など費用')
            cy.get('h6').each(($li, index, $lis) => {
            cy.get($li).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
            cy.get($li).should('have.css', 'color').and('eq','rgb(66, 66, 66)');
            cy.get($li).should('have.css', 'font-size').and('eq', '14px');
               })

            cy.get('h5').eq(1).invoke('text').should('contain', '未払金の振替')
            cy.get('h5').eq(2).invoke('text').should('contain', '保育料の振込口座')
            cy.get('h5').each(($li, index, $lis) => {
            cy.get($li).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
            cy.get($li).should('have.css', 'color').and('eq','rgb(66, 66, 66)');
            cy.get($li).should('have.css', 'font-size').and('eq', '17.5px');
                  })
            //Verify for cross mark
            cy.get('.fa-times-circle').should('be.visible')  

               //Verification for texts
               cy.get('.col-sm-12').eq(0).invoke('text').should('contain', '保育料の未払いや振替失敗が発生した請求について、翌月に振替請求を行うかどうかを指定します。')
               cy.get('.col-sm-12').eq(2).invoke('text').should('contain', '毎月の請求金額自動計算後、請求管理画面に未払金者が表示されるようになります。確認の上、請求金額に計上することができます。')
               cy.get('.col-sm-12').eq(3).invoke('text').should('contain', ' [ 今までの請求金額全てが未払金として計上される場合 ]')
               cy.get('.col-sm-12').eq(4).invoke('text').should('contain', '請求書に記載される振込口座、並びに口座振替を実施される場合の入金用口座を指定します。')
               cy.get('.col-sm-12').eq(5).invoke('text').should('contain', '※以下、口座振替で保育料請求を行う場合に、ご利用の金融機関に応じて設定をお願いします。')
               cy.get('.col-sm-12').each(($li, index, $lis) => {
               cy.get($li).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
               cy.get($li).should('have.css', 'color').and('eq','rgb(66, 66, 66)');
               cy.get($li).should('have.css', 'font-size').and('eq', '14px');
                })

        //radio buttons
        cy.radionButtonLabel();
        cy.get('.custom-radio>label').invoke('text').should('contain', '自動で次月に振り替える')
        cy.get('.custom-radio>label').invoke('text').should('contain', '未払者を請求管理に表示する')
        cy.get('.custom-radio>label').invoke('text').should('contain', '何もしない')
        cy.get('.custom-radio>label').invoke('text').should('contain', '銀行 (ゆうちょ銀行以外)・信用金庫など')
        cy.get('.custom-radio>label').invoke('text').should('contain', 'ゆうちょ銀行')
        cy.get('.custom-radio>label').invoke('text').should('contain', '普通')
        cy.get('.custom-radio>label').invoke('text').should('contain', '総合')
        cy.get('.custom-radio>label').invoke('text').should('contain', '貯蓄')
        cy.get('.custom-radio>label').invoke('text').should('contain', '当座')
        cy.get('.custom-radio>label').invoke('text').should('contain', '当月')
        cy.get('.custom-radio>label').invoke('text').should('contain', '翌月')

        //Verify for lables
        cy.get('.register-lables').eq(0).invoke('text').should('contain', '報酬支払方法')
        cy.get('.register-lables').eq(1).invoke('text').should('contain', '金融機関')
        cy.get('.register-lables').eq(2).invoke('text').should('contain', '支店')
        cy.get('.register-lables').eq(3).invoke('text').should('contain', '口座種別')
        cy.get('.register-lables').eq(4).invoke('text').should('contain', '口座番号')
        cy.get('.register-lables').eq(5).invoke('text').should('contain', '口座名義')
        cy.get('.register-lables').eq(6).invoke('text').should('contain', '報酬支払方法')
        cy.get('.register-lables').eq(7).invoke('text').should('contain', '口座振替データ形式')
        cy.get('.register-lables').eq(8).invoke('text').should('contain', '委託者コード')
        cy.get('.register-lables').eq(9).invoke('text').should('contain', '引き落とし月日')
        cy.get('.register-lables').eq(10).invoke('text').should('contain', '全銀データ顧客番号')

        cy.get('.register-lables').each(($li, index, $lis) => {
        cy.get($li).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
        cy.get($li).should('have.css', 'color').and('eq','rgb(92, 104, 115)');
        cy.get($li).should('have.css', 'font-size').and('eq', '12px');

        //Verify for save and cancel button
        cy.saveandCancel();
         })
        })
      })
    })
