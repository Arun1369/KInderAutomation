// <reference types="Cypress" />
import chaiColors from 'chai-colors'
chai.use(chaiColors)
require('cypress-xpath')
var labels = '.register-lables';
var clickmastersetting = ':nth-child(15) > .fa';
var hamburgerclick = '#dropdown-form__BV_toggle_ > img';
var  clickrecordform = '//a[contains(text(),"記録帳票テンプレート")]';

describe('Record form screen content check', () => {
    it('Verification of screen content', () => {
        cy.balogin();
        cy.wait(2000)
        cy.get(hamburgerclick).click();
        cy.wait(2000)
        cy.get(clickmastersetting).click();
        cy.wait(4000)
       
    })
    it('click record form', () => {
        cy.xpath(clickrecordform).click();
        //Verify All column Header font
        cy.columnHeader();
        //Verify Text 
        cy.get('[role="columnheader"]').invoke('text').should('contain', '年間指導計画 ( 期案 )')
        cy.get('[role="columnheader"]').invoke('text').should('contain', '月案')
        cy.get('[role="columnheader"]').invoke('text').should('contain', '週案')
        cy.get('[role="columnheader"]').invoke('text').should('contain', '日案')
        cy.get('[role="columnheader"]').invoke('text').should('contain', '報告書')
        cy.get('[role="columnheader"]').invoke('text').should('contain', '園児帳票')
        cy.get('[role="columnheader"]').invoke('text').should('contain', '日誌')
        
        //template selection button
        cy.get('[type="button"]').should("be.visible");
        cy.get('[type="button"]').should('have.css', 'color', 'rgb(10, 201, 164)');
        cy.wait(2000)
        cy.get('[type="button"]').invoke('text').should('contain', 'テンプレート選択');
        cy.templateselection();
        cy.get('[class="tab-pane active"]').within(()=>{
        cy.wait(2000)
        cy.get('[aria-rowindex="1"] > [aria-colindex="2"] > div > .mr-2').eq(0).click({multiple:true})
        cy.wait(2000);
        cy.get('[type="button"]').invoke('text').should('contain', 'これを使う');
        // //verification for close button
        cy.get('.close').click();
        //
        cy.wait(2000)
        cy.get('[type="button"]').invoke('text').should('contain', '原案編集');
        cy.templateselection();
        cy.get('[class="tab-pane active"]').within(()=>{
        cy.wait(2000)
        cy.get('[aria-rowindex="1"] > [aria-colindex="2"] > div >').eq(0).click({multiple:true})
        cy.wait(2000);

        cy.get('[aria-rowindex="1"] > [aria-colindex="1"]').invoke('text').should('contain', '0 歳児 ( 年間指導計画 .xls)');
        cy.get('[aria-rowindex="2"] > [aria-colindex="1"]').invoke('text').should('contain', '1 歳児 ( 年間指導計画 .xls)');
        cy.get('[aria-rowindex="3"] > [aria-colindex="1"]').invoke('text').should('contain', '学年 ( テンプレートファイル名.xls)');
        cy.colindex();
    })
})
})
var masterScreenButton = '.fa-cogs';
var ledgerManagement = 'a[href="#/setting/ledger"]';
Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })
    it('Verify Master Setting>Record from master registration>Template Selection Screen', () => {
        cy.balogin();
        cy.get('#dropdown-form__BV_toggle_ ').click();
        cy.get(masterScreenButton).eq(0).click({ multiple: true})
        cy.wait(6000)
        cy.debug()
        cy.get(ledgerManagement).click({ multiple: true})
        cy.wait(3000)
       //Verify All text
        cy.get('[class="tab-pane active"]').within(()=>{
            cy.wait(3000)
            cy.get('.mr-2').eq(0).click({ multiple: true})
        })
        //Verify Headers font
        cy.get('.modal-title').invoke('text').should('contain', 'テンプレート選択')
        cy.get('.modal-title').should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
        cy.get('.modal-title').should('have.css', 'color').and('eq','rgb(66, 66, 66)')
        cy.get('.modal-title').should('have.css', 'font-size').and('eq', '17.5px');

        cy.get('.modal-body').within(()=>{  
        cy.get('.font-weight-bold').each(($li, index, $lis) => {
                cy.get($li).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
                cy.get($li).should('have.css', 'color').and('eq','rgb(66, 66, 66)')
                cy.get($li).should('have.css', 'font-size').and('eq', '14px');
            })
            cy.get('.font-weight-bold').eq(0).invoke('text').should('contain', '月案│0 歳児')
            cy.get('.font-weight-bold').eq(1).invoke('text').should('contain', '標準テンプレート')

            cy.get('.label-color').each(($li, index, $lis) => {
                cy.get($li).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
                cy.get($li).should('have.css', 'color').and('eq','rgb(92, 104, 115)')
                cy.get($li).should('have.css', 'font-size').and('eq', '14px');
            })
            cy.get('.label-color').eq(0).invoke('text').should('contain', 'ファイル名 .xls')
            cy.get('.label-color').eq(1).invoke('text').should('contain', 'ファイル名 .xls')

            cy.get('.imageResolution').should('be.visible')
            cy.get('.fa-download').should('be.visible')
            cy.get('.fa-trash').should('be.visible')

            cy.get('.mb-2').invoke('text').should('contain', 'エクセルファイルインポート')
        cy.get('.mb-2').should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
        cy.get('.mb-2').should('have.css', 'color').and('eq','rgb(66, 66, 66)')
        cy.get('.mb-2').should('have.css', 'font-size').and('eq', '14px');

        //cy.get('#file-default__BV_file_outer_').invoke('text').should('contain', 'エクセルファイルインポート')
        cy.get('#file-default__BV_file_outer_').should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
        cy.get('#file-default__BV_file_outer_').should('have.css', 'color').and('eq','rgb(170, 170, 170)')
        cy.get('#file-default__BV_file_outer_').should('have.css', 'font-size').and('eq', '14px');


        })

//Verify for cross button
cy.get('.close').should('be.visible')

  })

})

