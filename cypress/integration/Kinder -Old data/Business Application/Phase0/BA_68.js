import chaiColors from 'chai-colors'
chai.use(chaiColors)
require('cypress-xpath')
var labels = '.register-lables';


Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })
  describe('68', () => {
    it('Verify screen content', () => {
        cy.visit('http://54.238.110.14/staff/#/auth/signin')
    cy.wait(2000)
    cy.get('.px-4').click() 
    cy.wait(2000);
    cy.get('#dropdown-form__BV_toggle_ ').click({ multiple: true });
    cy.wait(2000)
    cy.get(':nth-child(14) > .fa').click({ multiple: true });
    cy.wait(2000)
    
    cy.get('[aria-rowindex="1"] > [aria-colindex="2"] > [style="width: 100px;"] > .col-12 > .kids-row-buttons > :nth-child(7)').click({ multiple: true });
    //cy.activeTabtitle('2020/08 ~ 2020/09');
    cy.wait(2000)
    
    
    //
    cy.get('[type="button"]').should("be.visible");
    cy.get('[type="button"]').should('have.css', 'color', 'rgb(10, 201, 164)');
    cy.get('[type="button"]').invoke('text').should('contain', '追加');
    cy.get('[type="button"]').should('have.css', 'font-size').and('eq', '14px');
    cy.get('[type="button"]').should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/);
    //
    cy.columnHeader();
    cy.wait(4000)
    cy.get('[role="columnheader"]').invoke('text').should('contain', '項目')
    cy.get('[role="columnheader"]').invoke('text').should('contain', '設定内容')
    cy.get('[role="columnheader"]').invoke('text').should('contain', '金額')
    //
    cy.get('[type="button"]').invoke('text').should('contain', '月極保育料');
    cy.get('[type="button"]').invoke('text').should('contain', '月極延長保育料');
    cy.get('[type="button"]').invoke('text').should('contain', 'スポット延長保育料');
    cy.get('[type="button"]').invoke('text').should('contain', '一時保育料');
    cy.get('[type="button"]').invoke('text').should('contain', '月極割引');
    cy.get('[type="button"]').invoke('text').should('contain', '受講料');
    cy.get('[type="button"]').invoke('text').should('contain', '送迎費用');
    cy.get('[type="button"]').invoke('text').should('contain', '食費');
    cy.get('[type="button"]').invoke('text').should('contain', 'その他');
    cy.get('[type="button"]').invoke('text').should('contain', '登園・降園時間を保育料で設定した時間に合わせる');
    cy.Button();
    cy.wait(2000)
    cy.header('登園時間');
    cy.columnHeader();
    cy.wait(4000)
    cy.get('[role="columnheader"]').invoke('text').should('contain', 'アクティブ')
    cy.get('[role="columnheader"]').invoke('text').should('contain', '曜日')
    cy.get('[role="columnheader"]').invoke('text').should('contain', '保育開始')
    cy.get('[role="columnheader"]').invoke('text').should('contain', '登園')
    cy.get('[role="columnheader"]').invoke('text').should('contain', '降園')
    cy.get('[role="columnheader"]').invoke('text').should('contain', '保育終了')
    cy.get('[role="columnheader"]').invoke('text').should('contain', '帰宅グループ')
    cy.wait(2000)
    cy.saveandCancel();
    //
    cy.get('.modal-title').invoke('text').should('contain', '東海林ひとみ│保育料・登園時間');
})
})