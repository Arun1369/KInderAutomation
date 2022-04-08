/// <reference types="Cypress" />
import chaiColors from 'chai-colors'
chai.use(chaiColors)
require('cypress-xpath')

var masterScreenButton = '.fa-cogs';
var parentApp = 'a[href="#/setting/parent"]';

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })

describe('Event Settings', () => {
    it('Verify Event Settings Screen', () => {
        cy.balogin();
        cy.get('#dropdown-form__BV_toggle_ > img').click();
        cy.get(masterScreenButton).eq(0).click()
        cy.wait(6000)
        cy.debug()
        cy.get(parentApp).click()

        //Verify Tab title font,
        cy.get(parentApp).invoke('text').should('contain', '保護者向けアプリ')
        cy.get(parentApp).should('have.css', 'color').and('eq','rgb(255, 255, 255)')
        cy.get(parentApp).should('have.css', 'font-size').and('eq', '14px')
        cy.get(parentApp).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
       
        cy.wait(3000)
    
        cy.get('.edit-side').within(()=>{

        //Verify main header
        cy.get('h4').eq(0).invoke('text').should('contain', 'アプリデザイン')
        cy.get('h4').eq(1).invoke('text').should('contain', '表示テキスト')
        cy.get('h4').eq(2).invoke('text').should('contain', '登降園打刻アプリ')
        cy.get('h4').each(($li, index, $lis) => {
        cy.get($li).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
        cy.get($li).should('have.css', 'color').and('eq','rgb(66, 66, 66)');
        cy.get($li).should('have.css', 'font-size').and('eq', '21px');

        })
    
        //Verify for sub header
        cy.get('h6').eq(0).invoke('text').should('contain', 'ロゴ画像')
        cy.get('h6').eq(1).invoke('text').should('contain', 'アイコンカラー')
        cy.get('h6').eq(2).invoke('text').should('contain', 'HOME 上部')
        cy.get('h6').eq(3).invoke('text').should('contain', 'HOME 下部')
        cy.get('h6').eq(4).invoke('text').should('contain', '登園 メッセージ')
        cy.get('h6').eq(5).invoke('text').should('contain', '降園 メッセージ')
        cy.get('h6').each(($li, index, $lis) => {
        cy.get($li).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
        cy.get($li).should('have.css', 'color').and('eq','rgb(66, 66, 66)');
        cy.get($li).should('have.css', 'font-size').and('eq', '14px');

        })

        //Verify for choose file message
        cy.get('.text-sm-left').invoke('text').should('contain', 'ファイルをここにドラッグするか、')
        cy.get('.d-block').eq(0).invoke('text').should('contain', 'ファイルを選択してください。')
        cy.get('.text-sm-left').should('have.css', 'color').and('eq','rgb(170, 170, 170)')
        cy.get('.text-sm-left').should('have.css', 'font-size').and('eq', '14px')
        cy.get('.text-sm-left').should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)

        //Verify for Selecting file field
        cy.get('.custom-file-label').invoke('text').should('contain', 'ファイルが選択されていません')
        cy.get('#file-default').should('be.visible')
        cy.get('.custom-file-label').should('have.css', 'color').and('eq','rgb(92, 104, 115)')
        cy.get('.custom-file-label').should('have.css', 'font-size').and('eq', '14px')
        cy.get('.custom-file-label').should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
        //Verify for text field
        cy.get('.quill-editor').within(()=>{
        cy.get('.ql-toolbar').should('be.visible')
        cy.get('.ql-blank').should('have.css', 'color').and('eq','rgb(92, 104, 115)')
        cy.get('.ql-blank').should('have.css', 'font-size').and('eq', '13px')
        //cy.get('.ql-blank').should('have.css', 'font-family').and('match', /Helvetica, Arial, sans-serif/)

        })
     })

     //Verify for phone info
     cy.get('.mobile-device').within(()=>{

    //Verify for header
     cy.get('.col-6').invoke('text').should('contain', 'ロゴ画像')
     cy.get('.col-6').should('have.css', 'color').and('eq','rgb(92, 104, 115)')
     cy.get('.col-6').should('have.css', 'font-size').and('eq', '14px')
     cy.get('.col-6').should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)

     //Verify for Messager time and sent message
        cy.get('.text-muted').each(($li, index, $lis) => {
        cy.get($li).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
        cy.get($li).should('have.css', 'color').and('eq','rgb(115, 129, 143)');
        cy.get($li).should('have.css', 'font-size').and('eq', '11.2px');
        //Verify for Message content
        cy.get('.talktext').should('have.css', 'color').and('eq','rgb(66, 66, 66)')
        cy.get('.talktext').should('have.css', 'font-size').and('eq', '14px')
        cy.get('.talktext').should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
        //Verify for dates
        cy.get('.ml-3').should('have.css', 'color').and('eq','rgb(66, 66, 66)')
        cy.get('.ml-3').should('have.css', 'font-size').and('eq', '14px')
        cy.get('.ml-3').should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)

        //Verify for icon tab
        cy.get('.bg-white').should('be.visible')

        
    })
    //verify Save and cancel button 
    cy.saveandCancel();
    })
})
})