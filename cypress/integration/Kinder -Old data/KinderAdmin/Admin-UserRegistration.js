/// <reference types="Cypress" />
import chaiColors from 'chai-colors'
chai.use(chaiColors)

var labels = '.register-lables';
var font = /"Noto Sans JP", sans-serif/
var userMainMenu = "//div[contains(text(),' ユーザー管理')]";
var userRegistration = 'a[href="#/admin/user/new"]';

describe('User Registration', () => {
    it('Verify User Registration', () => {
        cy.visit('kinder-web/#/user/new');
        //Verification for Main menu
        cy.xpath(userMainMenu).click().should('be.visible');
        cy.xpath(userMainMenu).invoke('text').should('contain', 'ユーザー管理');
        cy.xpath(userMainMenu).should('have.css', 'color').and('eq','rgb(255, 255, 255)');
        cy.xpath(userMainMenu).should('have.css', 'font-family').and('match', font);
        cy.xpath(userMainMenu).should('have.css', 'font-size').and('eq', '14px');
        //Verification for sub menu
        cy.get(userRegistration).first().click().should('be.visible');
        cy.get(userRegistration).invoke('text').should('contain', 'ユーザー登録');
        cy.get(userRegistration).should('have.css', 'color').and('eq','rgb(255, 255, 255)');
        cy.get(userRegistration).should('have.css', 'font-family').and('match', font);
        cy.get(userRegistration).should('have.css', 'font-size').and('eq', '14px')
        //title check
        cy.get('h5').eq(0).invoke('text').should('contain', 'ユーザー登録');
        cy.get('h5').should('have.css', 'font-family').and('match', font)
        cy.get('h5').should('have.css', 'color').and('eq','rgb(0, 0, 0)')
        cy.get('h5').should('have.css', 'font-size').and('eq', '17.5px');  
        //tab title
        cy.get('#__BVID__123___BV_tab_button__').invoke('text').should('contain', 'ユーザー情報');    
        //assert feild labels
        cy.get(':nth-child(2) > .mt-3 > :nth-child(1) > :nth-child(1)').invoke('text').should('contain', '名前');
        cy.get('.mt-3 > :nth-child(1) > :nth-child(3)').invoke('text').should('contain', '表示名');
        cy.get('.mt-3 > :nth-child(2) > .col-md-2').invoke('text').should('contain', 'メールアドレス');
        cy.get(':nth-child(3) > .col-md-2').invoke('text').should('contain', 'パスワード');
        cy.get(':nth-child(4) > .col-md-2').invoke('text').should('contain', '権限グループ');
        cy.get(':nth-child(5) > .col-md-2').invoke('text').should('contain', '備考');
        cy.get(':nth-child(6) > .col-md-2').invoke('text').should('contain', '利用ステータス');
        cy.get('.col-lg-3 > :nth-child(1) > .register-lables').invoke('text').should('contain', '登録日');
        cy.get('.col-lg-3 > :nth-child(3) > .register-lables').invoke('text').should('contain', '最終更新日');
        cy.get(':nth-child(2) > .custom-control-label > span').invoke('text').should('contain', '利用停止');
        cy.get(':nth-child(1) > .custom-control-label > span').invoke('text').should('contain', '利用可');
        cy.get(labels).each(($el,index,$li)=>{
            cy.get($li).should('have.css', 'font-family').and('match', font)
            cy.get($li).should('have.css', 'color').and('eq','rgb(92, 104, 115)')
            cy.get($li).should('have.css', 'font-size').and('eq', '12px');
            })
        //assert title.
        cy.get('.px-0').invoke('text').should('contain', '権限グループ編集');
        


      

 })
}) 