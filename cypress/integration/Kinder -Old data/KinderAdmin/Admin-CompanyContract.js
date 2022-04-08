/// <reference types="Cypress" />
import chaiColors from 'chai-colors'
chai.use(chaiColors)
//import { URL } from ' ../lib/env.js '
//Cypress.env("url");

require('cypress-xpath')


var companyMainMenu = '//div[contains(text()," 登録園・企業")]';
var companyListMenu = 'a[href="#/company/"]';
var screenTitle = "//a[contains(text(),'企業一覧')]";
var editButton ='//button[contains(text(),"編集")]';
var addButton = '//button[contains(text(),"追加")]';
var saveDraft = '.col-md-3>button';
var lebel = '.register-lables';

describe('Company Contract', () => {
    it('Verify the contract info screen content', () => {
        cy.login()
        cy.wait(1000)

    //Verifiication for Main menu
        cy.xpath(companyMainMenu).click();
        cy.xpath(companyMainMenu).invoke('text').should('contain', '登録園・企業')
        cy.xpath(companyMainMenu).should('have.css', 'color').and('eq','rgb(255, 255, 255)')
        cy.xpath(companyMainMenu).should('have.css', 'font-size').and('eq', '14px');

    //Verification for sub menu
        cy.get(companyListMenu).first().click();
        cy.get(companyListMenu).invoke('text').should('contain', '企業一覧')
        cy.get(companyListMenu).should('have.css', 'color').and('eq','rgb(255, 255, 255)')
        cy.get(companyListMenu).should('have.css', 'font-size').and('eq', '14px');

    //Verification for Screen titile
        cy.xpath(screenTitle).invoke('text').should('contain','企業一覧');
        
    //Verification for Selecting a Company from the list
        cy.get('[aria-rowindex="1"] > [aria-colindex="1"]').first().click();

    //Verification for Selecting contract button
        cy.get('[role="tab"]').eq(1).click();
        cy.get('[role="tab"]').eq(1).should('be.visible')
        cy.get('[role="tab"]').eq(1).invoke('text').should('contain','契約内容')
        cy.get('[role="tab"]').eq(1).should('have.css', 'font-size').and('eq', '14px')
        cy.wait(500)
    // //Verification for SCreen title
    //     cy.get('.container-fluid > [data-v-c16e5f8a=""] > :nth-child(1)').should('be.visible')
    //     cy.get('.container-fluid > [data-v-c16e5f8a=""] > :nth-child(1)').should('have.css', 'color').and('eq','rgb(0, 0, 0)');
    //     cy.get('.container-fluid > [data-v-c16e5f8a=""] > :nth-child(1)').should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/);
    //     cy.get('.container-fluid > [data-v-c16e5f8a=""] > :nth-child(1)').should('have.css', 'font-size').and('eq', '17.5px')

    // //Verifcation for Contract header
    //     cy.get('.animated > .mt-3').invoke('text').should('contain','契約メニュー')
    //     cy.get('.animated > .mt-3').should('be.visible')
    //     cy.get('.animated > .mt-3').should('have.css', 'color').and('eq','rgb(0, 0, 0)');
    //     cy.get('.animated > .mt-3').should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/);
    //     cy.get('.animated > .mt-3').should('have.css', 'font-size').and('eq', '17.5px')

    // //Verification for column header
    //     cy.get('[aria-colindex="1"] > div').invoke('text').should('contain', '商品名')
    //     cy.get('[aria-colindex="2"] > div').invoke('text').should('contain', '対象園')
    //     cy.get('[aria-colindex="3"] > div').invoke('text').should('contain', 'キャンペーン')
    //     cy.get('[aria-colindex="4"] > div').invoke('text').should('contain', '割引額')
    //     cy.get('[aria-colindex="5"] > div').invoke('text').should('contain', '代理店')
    //     cy.get('[aria-colindex="6"] > div').invoke('text').should('contain', '個数')
    //     cy.get('[aria-colindex="7"] > div').invoke('text').should('contain', '金額')
    //     cy.get('[aria-colindex="8"] > div').invoke('text').should('contain', 'ステータス')
       
    //     cy.get('th[role="columnheader"]').nextUntil('[class="th-width-dots"]').each(($li, index, $lis) => {
    //     cy.get($li).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
    //     cy.get($li).should('have.css', 'color').and('eq','rgb(92, 104, 115)')
    //     cy.get($li).should('have.css', 'font-size').and('eq', '12px');
           
    //       });

    //     //Verification for Payment method
    //       cy.get(lebel).eq(12).invoke('text').should('contain', '支払方法')        
    //       cy.get(lebel).eq(13).invoke('text').should('contain', '契約開始日')
    //       cy.get(lebel).eq(14).invoke('text').should('contain', '合計金額')
    //       cy.get(lebel).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
    //       cy.get(lebel).should('have.css', 'color').and('eq','rgb(92, 104, 115)')
    //       cy.get(lebel).should('have.css', 'font-size').and('eq', '12px')

    //     //Verification for Transfer account information
    //       cy.get('p.px-2').invoke('text').should('contain', '振替口座情報 ')
    //       cy.get('p.px-2').should('be.visible')
    //       cy.get('p.px-2').should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
    //       cy.get('p.px-2').should('have.css', 'color').and('eq','rgb(0, 0, 0)')
    //       cy.get('p.px-2').should('have.css', 'font-size').and('eq', '14px');

    //     //Verification for Financial institution name (financial institution code
    //       cy.get('.black-card > :nth-child(2)').invoke('text').should('contain', '金融機関名 (金融機関コード)')
    //       cy.get('.black-card > :nth-child(3)').invoke('text').should('contain', '支店名 (支店コード)')
    //       cy.get('.black-card > :nth-child(4)').invoke('text').should('contain', '普通')
    //       cy.get('.black-card > :nth-child(5)').invoke('text').should('contain', '口座番号')         
    //       cy.get('.black-card > :nth-child(6)').invoke('text').should('contain', '口座名義')        
    //       cy.get('.black-card').each(($li, index, $lis) => {
    //         cy.get($li).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
    //         cy.get($li).should('have.css', 'color').and('eq','rgb(0, 0, 0)')
    //         cy.get($li).should('have.css', 'font-size').and('eq', '14px')
    //         cy.get($li).should('be.visible')
    //         });

    //     //Verification for Status
    //       cy.get('span.pull-right').invoke('text').should('contain', 'ステータス:承認待ち')
    //       cy.get('span.pull-right').should('be.visible')
    //       cy.get('span.pull-right').should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
    //       cy.get('span.pull-right').should('have.css', 'color').and('eq','rgb(0, 0, 0)')
    //       cy.get('span.pull-right').should('have.css', 'font-size').and('eq', '14px');

    //     //Verification for Edit button 
    //       cy.xpath(editButton).invoke('text').should('contain','編集');
    //       cy.xpath(editButton).should('be.visible');
    //       cy.xpath(editButton).should('have.css', 'color').and('eq','rgb(255, 255, 255)');
    //       cy.xpath(editButton).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/);
    //       cy.xpath(editButton).should('have.css', 'font-size').and('eq', '14px')
          })

    it('Verification for regestration page screen content', () => { 
        //Verification for Selecting  edit button
          cy.xpath(editButton).click();
          cy.wait(500)
          //Verification for table header
          cy.get('.kinder-label').invoke('text').should('contain','契約メニュー');
          cy.get('.kinder-label').should('be.visible');
          cy.get('.kinder-label').should('have.css', 'color').and('eq','rgb(0, 0, 0)');
          cy.get('.kinder-label').should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/);
          cy.get('.kinder-label').should('have.css', 'font-size').and('eq', '17.5px')

          //Verification for Add button
          cy.xpath(addButton).invoke('text').should('contain','追加');
          cy.xpath(addButton).should('be.visible');
          cy.xpath(addButton).should('have.css', 'color').and('eq','rgb(255, 255, 255)');
          cy.xpath(addButton).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/);
          cy.xpath(addButton).should('have.css', 'font-size').and('eq', '14px')

          cy.get('.border-bottom>div').eq(0).invoke('text').should('contain','商品名');
          cy.get('.border-bottom>div').eq(1).invoke('text').should('contain','対象園');
          cy.get('.border-bottom>div').eq(2).invoke('text').should('contain','代理店');
          cy.get('.border-bottom>div').eq(3).invoke('text').should('contain','金額');
          cy.get('.border-bottom>div').eq(4).invoke('text').should('contain','ステータス');
          cy.get('.border-bottom>div').each(($li, index, $lis) => {
              cy.get($li).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
              cy.get($li).should('have.css', 'color').and('eq','rgb(92, 104, 115)')
              cy.get($li).should('have.css', 'font-size').and('eq', '12px')
            })

          cy.get('.bv-no-focus-ring').each(($el, index,$list)=>{
              cy.get($el).click({force:true});
              cy.get($el).should("be.visible");
              cy.get($el).should('have.css', 'font-size').and('eq', '14px')
              cy.get($el).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/);
              })
          cy.get('input[class="col-md-12 form-control"]').first().should('have.attr', 'placeholder', '代理店検索')

          cy.get('.parent-div > :nth-child(1) > .col-md-1').invoke('text').should('contain','30,000円');
          cy.get('.parent-div > :nth-child(1) > .col-md-1').should('have.css', 'color').and('eq','rgb(0, 0, 0)');
          cy.get('.parent-div > :nth-child(1) > .col-md-1').should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/);
          cy.get('.parent-div > :nth-child(1) > .col-md-1').should('have.css', 'font-size').and('eq', '14px')

          cy.get(lebel).eq(12).invoke('text').should('contain','登録日');
          cy.get(lebel).eq(13).invoke('text').should('contain','金融機関');
          cy.get(lebel).eq(14).invoke('text').should('contain','契約開始日');
          cy.get(lebel).eq(15).invoke('text').should('contain','合計金額');
          cy.get(lebel).eq(16).invoke('text').should('contain','振替口座情報');
          cy.get(lebel).eq(17).invoke('text').should('contain','報酬支払方法');
          cy.get(lebel).eq(18).invoke('text').should('contain','金融機関');
          cy.get(lebel).eq(19).invoke('text').should('contain','支店');
          cy.get(lebel).eq(20).invoke('text').should('contain','報酬支払方法');
          cy.get(lebel).eq(21).invoke('text').should('contain','口座番号');
          cy.get(lebel).eq(22).invoke('text').should('contain','口座名義');
          cy.get('.register-lables').each(($el,index,$li)=>{
            cy.get($li).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
            cy.get($li).should('have.css', 'color').and('eq','rgb(92, 104, 115)')
            cy.get($li).should('have.css', 'font-size').and('eq', '12px');
            
         })
          //Verification for Status
          cy.get('span.pull-right').invoke('text').should('contain', 'ステータス:承認待ち')
          cy.get('span.pull-right').should('be.visible')
          cy.get('span.pull-right').should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
          cy.get('span.pull-right').should('have.css', 'color').and('eq','rgb(0, 0, 0)')
          cy.get('span.pull-right').should('have.css', 'font-size').and('eq', '14px');

          cy.get('.active > .title').invoke('text').should('contain', '下書き')
          cy.get('.active > .title').should('be.visible')
          cy.get('.active > .title').should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
          cy.get('.active > .title').should('have.css', 'color').and('eq','rgb(0, 0, 0)')
          cy.get('.active > .title').should('have.css', 'font-size').and('eq', '11px');

          cy.get(':nth-child(2) > .title').invoke('text').should('contain', '申請中')
          cy.get(':nth-child(2) > .title').should('be.visible')
          cy.get(':nth-child(2) > .title').should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
          cy.get(':nth-child(2) > .title').should('have.css', 'color').and('eq','rgb(0, 0, 0)')
          cy.get(':nth-child(2) > .title').should('have.css', 'font-size').and('eq', '11px');

          cy.get(':nth-child(3) > .title').invoke('text').should('contain', '承認済')
          cy.get(':nth-child(3) > .title').should('be.visible')
          cy.get(':nth-child(3) > .title').should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
          cy.get(':nth-child(3) > .title').should('have.css', 'color').and('eq','rgb(0, 0, 0)')
          cy.get(':nth-child(3) > .title').should('have.css', 'font-size').and('eq', '11px');

          //Verification for Save draft button
          cy.get(saveDraft).should('be.visible')
          cy.get(saveDraft).invoke('text').should('contain', '下書き保存')
          cy.get(saveDraft).should('have.css', 'color').and('eq','rgb(56, 149, 211)')
          cy.get(saveDraft).should('have.css', 'font-size').and('eq', '14px')
          cy.get(saveDraft).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)

      //Verification for apply button
          //cy.xpath('a[href="#/admin/company/"]').should('be.visible')
          cy.xpath('.router-link-active').eq(1).invoke('text').should('contain', '申請する')
          cy.xpath('.router-link-active').should('have.css', 'color').and('eq','rgb(255, 255, 255)')
          cy.xpath('a[href="#/admin/company/"]').should('have.css', 'font-size').and('eq', '14px')
          cy.xpath('a[href="#/admin/company/"]').should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)

      //verify the radio button lebel
          cy.get('.custom-control-label').eq(0).invoke('text').should('contain','契約中');
          cy.get('.custom-control-label').eq(2).invoke('text').should('contain','停止');
          cy.get('.custom-control-label').eq(3).invoke('text').should('contain','銀行 (ゆうちょ銀行以外)・信用金庫など');
          cy.get('.custom-control-label').eq(4).invoke('text').should('contain','ゆうちょ銀行');
          cy.get('.custom-control-label').eq(5).invoke('text').should('contain','普通');
          cy.get('.custom-control-label').eq(6).invoke('text').should('contain','当座');
      })
})
