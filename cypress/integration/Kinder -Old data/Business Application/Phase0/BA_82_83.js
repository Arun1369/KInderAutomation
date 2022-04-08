import chaiColors from 'chai-colors'
chai.use(chaiColors)
require('cypress-xpath')
var clickmastersetting = ':nth-child(15) > .fa';

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })

describe('health check', () => {
    it('Verify screen content', () => {
        cy.balogin();
        cy.get('#dropdown-form__BV_toggle_ > img').click();
        cy.wait(2000)
        cy.get(clickmastersetting).click({ multiple: true });
        cy.wait(3000)
        cy.get('.ps-container > .nav > :nth-child(6) > .nav-link').click()
        cy.wait(2000)
         
        cy.get('[role="tab"]').invoke('text').should('contain', '健康チェック')
        cy.get('.nav-item').should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
        cy.get('.nav-item').should('have.css', 'color').and('eq','rgb(66, 66, 66)')
        cy.get('.nav-item').should('have.css', 'font-size').and('eq', '14px');
        //
        cy.get('.animated > .p-1 > :nth-child(1)').within(()=>{
        cy.get('h5').invoke('text').should('contain', '食事チェック')
        cy.get('h5').should('have.css', 'color').and('eq','rgb(66, 66, 66)')
        cy.get('h5').should('have.css', 'font-size').and('eq', '17.5px')  
        cy.get('h5').should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
        //
        cy.get('[role="columnheader"]').invoke('text').should('contain', '食べた量')
        cy.columnHeader();
        //
        cy.get('[role="columnheader"]').invoke('text').should('contain', '連絡帳の表記')
        cy.columnHeader();
        //
        cy.get('[role="columnheader"]').invoke('text').should('contain', '利用状態')
        cy.columnHeader();
        //
        })
        cy.get('.p-1 > :nth-child(2)').within(()=>{
        //
        cy.get('h5').invoke('text').should('contain', 'アレルギーの種類')
        cy.get('h5').should('have.css', 'color').and('eq','rgb(66, 66, 66)')
        cy.get('h5').should('have.css', 'font-size').and('eq', '17.5px')  
        cy.get('h5').should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
        //
        cy.get('[role="columnheader"]').invoke('text').should('contain', '成分')
        cy.columnHeader();
        //
        cy.get('[role="columnheader"]').invoke('text').should('contain', '利用状態')
        cy.columnHeader();
        //
        cy.get('[type="button"]').invoke('text').should('contain', '項目欄を追加');
        cy.columnHeader();
        })
        cy.get('.animated > .col-12.row').within(()=>{
        //n2
        cy.get('h5').invoke('text').should('contain', '午睡チェック')
        cy.get('h5').should('have.css', 'color').and('eq','rgb(66, 66, 66)')
        cy.get('h5').should('have.css', 'font-size').and('eq', '17.5px')  
        cy.get('h5').should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
        //
        cy.get('.value-color').invoke('text').should('contain', '以下の設定はデフォルトで設定可能です。')
        cy.get('.value-color').should('have.css', 'color').and('eq','rgb(66, 66, 66)')
        cy.get('.value-color').should('have.css', 'font-size').and('eq', '14px')  
        cy.get('.value-color').should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
        //
        cy.radionButtonLabel();
        cy.checkBoxLabel();
        cy.get('.custom-radio>label').eq(0).invoke('text').should('contain', '左向き')
        cy.get('.custom-radio>label').eq(1).invoke('text').should('contain', '仰向け')
        cy.get('.custom-radio>label').eq(1).invoke('text').should('contain', '仰向け')
        
        cy.get('.custom-checkbox>label').eq(0).invoke('text').should('contain', 'うつぶせ直し')
        cy.get('.custom-checkbox>label').eq(1).invoke('text').should('contain', '起床')
        cy.wait(2000)
        })
        //
        cy.get('.pb-2.mt-3 > .black-card').within(()=>{
        cy.get('.text-center > .col-12 > :nth-child(1)').invoke('text').should('contain', '択一回答');
        cy.Button();
        //
        cy.get('.text-center > .col-12 > :nth-child(2)').invoke('text').should('contain', '複数回答');
        cy.Button();
        //
        cy.get('.freetext-btn').invoke('text').should('contain', 'フリー回答');
        cy.Button();
        //delete and copy icons
        cy.get(':nth-child(2) > .row > .fa-trash').should("be.visible")
        cy.get(':nth-child(2) > .row > .fa-copy').should("be.visible")
        })
        //
        cy.get('h5').invoke('text').should('contain', '排便チェック')
        cy.get('h5').should('have.css', 'color').and('eq','rgb(66, 66, 66)')
        cy.get('h5').should('have.css', 'font-size').and('eq', '17.5px')  
        cy.get('h5').should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
        //
        cy.get(':nth-child(4) > .black-card').within(()=>{
        cy.get('.tr-border-bottom-defecation').invoke('text').should('contain', '項目名')
        cy.get('.tr-border-bottom-defecation').should('have.css', 'color').and('eq','rgb(66, 66, 66)')
        cy.get('.tr-border-bottom-defecation').should('have.css', 'font-size').and('eq', '12px')  
        cy.get('.tr-border-bottom-defecation').should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
        //
        cy.get('.tr-border-bottom-defecation').invoke('text').should('contain', '簡易表示名')
        cy.get('.tr-border-bottom-defecation').should('have.css', 'color').and('eq','rgb(66, 66, 66)')
        cy.get('.tr-border-bottom-defecation').should('have.css', 'font-size').and('eq', '12px')  
        cy.get('.tr-border-bottom-defecation').should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
        //
        cy.get('.tr-border-bottom-defecation').invoke('text').should('contain', 'アイコン')
        cy.get('.tr-border-bottom-defecation').should('have.css', 'color').and('eq','rgb(66, 66, 66)')
        cy.get('.tr-border-bottom-defecation').should('have.css', 'font-size').and('eq', '12px')  
        cy.get('.tr-border-bottom-defecation').should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
        })
        //
        cy.get('[type="button"]').invoke('text').should('contain', '保存');
        cy.Button();


    
  

    })
})
//})
//})
