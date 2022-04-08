/// <reference types="Cypress" />
import chaiColors from 'chai-colors'
chai.use(chaiColors)
//import { URL } from ' ../lib/env.js '
//Cypress.env("url");
var createButton = '.px-4';
var labels = '.register-lables';
var button = '.btn-primary';
var radioButton = '.custom-control-label'

// describe('Kinder Registration ', () => {
//     it('Verify Kinder Registration UI', () => {
    
//       //cy.login();
//         //click on add
//         cy.visit('/admin/nursery/');
//         cy.get(createButton).click()
// <<<<<<< HEAD
// <<<<<<< //Updated upstream
// =======

// >>>>>>> 71999da4e0623fb3e3755203d9936cc21587e600
//         //cy.wait(1000)     

        

// <<<<<<< HEAD
// <<<<<<< //Updated upstream
// <<<<<<< //Updated upstream
// >>>>>>> //Stashed changes
// =======
// >>>>>>> //Stashed changes
// =======
// >>>>>>> //Stashed changes
// =======

// >>>>>>> 71999da4e0623fb3e3755203d9936cc21587e600
         //user registration screen header
        cy.get('h5').invoke('text').should('contain', '園の名前')
        cy.get(labels).eq(0).invoke('text').should('contain', '会社名')
        cy.get(labels).eq(1).invoke('text').should('contain', '園の名前')
        cy.get(labels).eq(2).invoke('text').should('contain', '園の住所')
        cy.get(labels).eq(3).invoke('text').should('contain', '電話番号')
        cy.get(labels).invoke('text').should('contain', 'お知らせ受信用メールアドレス')
        cy.get(labels).invoke('text').should('contain', '園の種別')
        cy.get(labels).invoke('text').should('contain', '土日保育の有無')
        cy.get(labels).invoke('text').should('contain', '保育時間帯')
        cy.get(labels).invoke('text').should('contain', '保育標準時間带')
        cy.get(labels).invoke('text').should('contain', '保育短時間帯')
        cy.get(labels).invoke('text').should('contain', '利用者との契約形態')
        cy.get(labels).invoke('text').should('contain', '月極保育料の請求サイクル')
        cy.get(labels).invoke('text').should('contain', '延長保育料の発生単位')
        cy.get(labels).invoke('text').should('contain', '保護者宛のメール送信元')
        cy.get(labels).invoke('text').should('contain', '責任者名')
        cy.get(labels).invoke('text').should('contain', '担当者名')
        cy.get(labels).invoke('text').should('contain', '責任者連絡先')
        cy.get(labels).invoke('text').should('contain', '担当者健絡先')
        cy.get(labels).invoke('text').should('contain', '利用ステータス')
        cy.get(labels).each(($el,index,$li)=>{
          cy.get($li).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
          cy.get($li).should('have.css', 'color').and('eq','rgb(92, 104, 115)')
          cy.get($li).should('have.css', 'font-size').and('eq', '12px');
        })
        //button label,font validation
        cy.get(button).invoke('text').should('contain', '企業検索')
        cy.get(button).invoke('text').should('contain', '申請する')
        cy.get(button).each(($li, index, $lis) => {
          cy.get($li).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
          cy.get($li).should('have.css', 'color').and('eq','rgb(255, 255, 255)')
          cy.get($li).should('have.css', 'font-size').and('eq', '14px')
        });
        var button1 = '.btn-outline-primary' 
        cy.get(button1).invoke('text').should('contain', '')
        cy.get(button1).should('have.css', 'color').and('eq','rgb(56, 149, 211)')
        cy.get(button1).should('have.css', 'font-size').and('eq', '14px');
        //verify the status
        cy.get('.text-center').eq(0).invoke('text').should('contain', '下書き')
        cy.get('.text-center').eq(1).invoke('text').should('contain', '申請中')
        cy.get('.text-center').eq(2).invoke('text').should('contain', '承認済')

        //verify the lebals of radio button,check box
        cy.get(radioButton).eq(0).invoke('text').should('contain', '認可保育園')
        cy.get(radioButton).eq(1).invoke('text').should('contain', '認定こども園')
        cy.get(radioButton).eq(2).invoke('text').should('contain', '小規模保育所')
        cy.get(radioButton).eq(3).invoke('text').should('contain', '認可外保育')
        cy.get(radioButton).eq(4).invoke('text').should('contain', '幼稚園')
        cy.get(radioButton).eq(5).invoke('text').should('contain', '企業主導型保育園')
        cy.get(radioButton).eq(6).invoke('text').should('contain', '学童')
        cy.get(radioButton).eq(7).invoke('text').should('contain', '小学校')
        cy.get(radioButton).eq(8).invoke('text').should('contain', '塾')
        cy.get(radioButton).eq(9).invoke('text').should('contain', '習い事')
        cy.get(radioButton).eq(10).invoke('text').should('contain', '中学校')
        cy.get(radioButton).eq(11).invoke('text').should('contain', '土曜保育')
        cy.get(radioButton).eq(12).invoke('text').should('contain', '日曜保育')
        cy.get(radioButton).eq(13).invoke('text').should('contain', '前月払い')
        cy.get(radioButton).eq(14).invoke('text').should('contain', '当月払い')
        cy.get(radioButton).eq(15).invoke('text').should('contain', '翌月払い')
        cy.get(radioButton).eq(16).invoke('text').should('contain', '1分から')
        cy.get(radioButton).eq(17).invoke('text').should('contain', '0分から')
        cy.get(radioButton).eq(18).invoke('text').should('contain', '利用可')
        cy.get(radioButton).eq(19).invoke('text').should('contain', '利用停止')
        cy.get(radioButton).each(($li, index, $lis) => {
          cy.get($li).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
          cy.get($li).should('have.css', 'font-size').and('eq', '14px')
        });
//})
//})