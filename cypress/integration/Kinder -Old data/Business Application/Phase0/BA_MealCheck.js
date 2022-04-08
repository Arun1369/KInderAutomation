import chaiColors from 'chai-colors'
chai.use(chaiColors)
require('cypress-xpath')

var  clickmealchecktab = '//a[contains(text(),"食事チェック")]';

describe('Record form screen content check', () => {
    it('Verification of screen content', () => {
        cy.balogin();
        cy.wait(2000)
        cy.get('[role="tab"]').invoke('text').should('contain', '食事チェック')
        cy.wait(2000)
        cy.xpath(clickmealchecktab).click();
        cy.wait(2000)
        cy.mealcheck();
        cy.wait(2000)
        cy.get('[role="group"]').invoke('text').should('contain', '全員')
        cy.get('[role="group"]').should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
        cy.get('[role="group"]').should('have.css', 'color').and('eq','rgb(0, 0, 0)')
        cy.get('[role="group"]').should('have.css', 'font-size').and('eq', '14px');
        cy.wait(2000)
        cy.get('[type="button"]').invoke('text').should('contain', '昼食');
        cy.get('[type="button"]').invoke('text').should('contain', 'おやつ');
        cy.lunchandsnack();
        cy.wait(2000)
        cy.get('.label-color').invoke('text').should('contain', '( クラス )');
        cy.get('.label-color').should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
        cy.get('.label-color').should('have.css', 'color').and('eq','rgb(92, 104, 115)')
        cy.get('.label-color').should('have.css', 'font-size').and('eq', '12px');
        cy.wait(2000)
        cy.get('[role="columnheader"]').invoke('text').should('contain', '食べた時間')
        cy.get('[role="columnheader"]').invoke('text').should('contain', '食べた量')
        cy.get('[role="columnheader"]').invoke('text').should('contain', '内容 ( 保護者への連絡 )')
        cy.get('[role="columnheader"]').invoke('text').should('contain', 'アレルギー')
        cy.get('[role="columnheader"]').invoke('text').should('contain', '画像')
        cy.columnHeader();
        
    })
    it('Verification of screen pop up content', () => {
        var url = "http://119.82.96.68/kinder-bweb/#/main/meal/10008"
        cy.visit(url)
        cy.wait(4000)
        cy.header('健康チェック');
        cy.wait(4000)
        cy.get('.register-lables').invoke('text').should('contain', '食べた時間 ');
        cy.get('.register-lables').invoke('text').should('contain', '食べた量 ');
        cy.get('.register-lables').invoke('text').should('contain', '内容');
        cy.registerLabelChecks();
        cy.get('#textarea-default').first().should('have.attr', 'placeholder','連絡帳に追記したい内容を入力してください。')
        cy.wait(4000)
        cy.get('.d-lg-inline').invoke('text').should('contain', 'ファイルを選択してください。');
        cy.get('.d-lg-inline').should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
        cy.get('.d-lg-inline').should('have.css', 'color').and('eq','rgb(170, 170, 170)')
        cy.get('.d-lg-inline').should('have.css', 'font-size').and('eq', '14px');
        cy.wait(4000)
        cy.get('.pl-3 > .col-md-12').invoke('text').should('contain', 'ファイルが選択されていません');
        cy.get('.pl-3 > .col-md-12').should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
        cy.get('.pl-3 > .col-md-12').should('have.css', 'color').and('eq','rgb(0, 0, 0)')
        cy.get('.pl-3 > .col-md-12').should('have.css', 'font-size').and('eq', '14px');
        //
        cy.saveandCancel()
        cy.get('.close').should('be.visible')
        cy.get('.col-md-9 > :nth-child(3) > img').should('be.visible')


})
})
