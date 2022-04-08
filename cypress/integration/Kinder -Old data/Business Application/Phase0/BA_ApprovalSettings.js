var masterSetting = '.fa-cogs';
var approveTab = 'a[href="/staff/#/setting/approve"]'
var sendButton = '//button[contains(text(),"送信する")]'

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })

describe('screen content of support reques', () => {
  it('Verify screen content of support reques', () => {
  cy.visit('http://54.238.110.14/staff/#/auth/signin')
  cy.wait(6000)
  cy.get('.px-4').click() 
  cy.wait(2000);
  cy.get('#dropdown-form__BV_toggle_ ').click();
  cy.get(masterSetting).eq(0).click()
  cy.wait(6000)
  cy.debug()
  cy.get(approveTab).click()
  cy.wait(6000)

 
  //Verification for tab
  cy.get('#tab-staf_approval').invoke('text').should('contain', '承認設定')
  cy.get('#tab-staf_approval').should('have.css', 'color').and('eq','rgb(47, 53, 58)')
  cy.get('#tab-staf_approval').should('have.css', 'font-size').and('eq', '14px')
  cy.get('#tab-staf_approval').should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)

  cy.get('[class="animated fadeIn"]').eq(7).within(()=>{
    cy.wait(3000)

  //Verify Header 
  cy.header('承認期限');

  cy.get('.mt-1').invoke('text').should('contain', '申請をしてから承認するまでの期限')
  cy.get('.mt-1').should('have.css', 'color').and('eq','rgb(66, 66, 66)')
  cy.get('.mt-1').should('have.css', 'font-size').and('eq', '14px')
  cy.get('.mt-1').should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)

  cy.get('.approval-settings-label').eq(0).invoke('text').should('contain', 'シフト・有給申請')
  cy.get('.approval-settings-label').eq(1).invoke('text').should('contain', '指導案 期案')
  cy.get('.approval-settings-label').eq(2).invoke('text').should('contain', '指導案 月案')
  cy.get('.approval-settings-label').eq(3).invoke('text').should('contain', '指導案 週案')
  cy.get('.approval-settings-label').eq(4).invoke('text').should('contain', '指導案 日案')
  cy.get('.approval-settings-label').eq(5).invoke('text').should('contain', '園だより')
  cy.get('.approval-settings-label').eq(6).invoke('text').should('contain', 'お知らせ')
  cy.get('.approval-settings-label').eq(7).invoke('text').should('contain', 'ヒヤリハット報告書')
  cy.get('.approval-settings-label').eq(8).invoke('text').should('contain', '訓練記録報告書')
  cy.get('.approval-settings-label').eq(9).invoke('text').should('contain', 'オリジナル帳票')
  cy.get('.approval-settings-label').eq(10).invoke('text').should('contain', '園児出生時記録')
  cy.get('.approval-settings-label').eq(11).invoke('text').should('contain', '児童票')
  cy.get('.approval-settings-label').eq(12).invoke('text').should('contain', '保育要録')
  cy.get('.approval-settings-label').eq(13).invoke('text').should('contain', 'アンケート')
  
  cy.get('.approval-settings-label').each(($li, index, $lis) => {
  cy.get($li).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
  cy.get($li).should('have.css', 'color').and('eq','rgb(66, 66, 66)');
  cy.get($li).should('have.css', 'font-size').and('eq', '12px');
  })

  //Verifyy for save and cancel
  cy.saveandCancel();

  })
})
})