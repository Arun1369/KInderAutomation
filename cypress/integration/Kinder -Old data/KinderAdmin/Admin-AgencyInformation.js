/// <reference types="Cypress" />
import chaiColors from 'chai-colors'
chai.use(chaiColors)
//import { URL } from ' ../lib/env.js '
//Cypress.env("url");

require('cypress-xpath')


var agencyMainMenu = '//div[contains(text(),"代理店")]';
var agencyListMenu = 'a[href="#/admin/agent"]';
var screenTitle = "//a[contains(text(),'代理店情報')]";
var editButton='.btn-primary';
var lebel = '.register-lables';


describe('Agency Information Screen', () => {
    it('Launch URL', () => {
        cy.login()

        //Verification for Main menu
        cy.xpath(agencyMainMenu).click();
        cy.xpath(agencyMainMenu).invoke('text').should('contain', '代理店')
        cy.xpath(agencyMainMenu).should('have.css', 'color').and('eq','rgb(255, 255, 255)')
        cy.xpath(agencyMainMenu).should('have.css', 'font-size').and('eq', '14px');

    //Verification for sub menu
        cy.get(agencyListMenu).click();
        cy.get(agencyListMenu).invoke('text').should('contain', '代理店一覧')
        cy.get(agencyListMenu).should('have.css', 'color').and('eq','rgb(255, 255, 255)')
        cy.get(agencyListMenu).should('have.css', 'font-size').and('eq', '14px');
        cy.wait(1000)
       
        //click the first row of list
        cy.get('tr[aria-rowindex="1"]').eq(0).click({ force: true })
        cy.wait(500)
        //Verification for Page title
        cy.get('h5').invoke('text').should('contain', '株式会社 代理店')
        cy.get('h5').should('have.css', 'font-size').and('eq', '17.5px');
        cy.get('h5').should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/);
    //Verification for Screen title
        cy.xpath(screenTitle).invoke('text').should('contain','代理店情報');
        cy.xpath(screenTitle).should('be.visible');
        cy.xpath(screenTitle).should('have.css', 'color').and('eq','rgb(47, 53, 58)');
        cy.xpath(screenTitle).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/);
        cy.xpath(screenTitle).should('have.css', 'font-size').and('eq', '14px')
        cy.get(2000);
    
    //Verification for field names
        cy.get(lebel).eq(0).invoke('text').should('contain', '社名') 
        cy.get(lebel).eq(1).invoke('text').should('contain', '住所') 
        cy.get(lebel).eq(2).invoke('text').should('contain', '電話番号') 
        cy.get(lebel).eq(3).invoke('text').should('contain', 'メールアドレス') 
        cy.get(lebel).eq(4).invoke('text').should('contain', '代表者名') 
        cy.get(lebel).eq(5).invoke('text').should('contain', '担当者名') 
        cy.get(lebel).eq(6).invoke('text').should('contain', '報酬支払方法') 
        cy.get(lebel).eq(7).invoke('text').should('contain', '獲得報酬総額') 
        cy.get(lebel).eq(8).invoke('text').should('contain', '獲得報酬情報') 
        cy.get('.register-lables').each(($li, index, $lis) => {
        cy.get($li).should('be.visible')
        cy.get($li).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
        cy.get($li).should('have.css', 'color').and('eq','rgb(92, 104, 115)')
        cy.get($li).should('have.css', 'font-size').and('eq', '12px')
    });

    //Verification for Column headers
        cy.get('[aria-colindex="1"] > div').invoke('text').should('contain', '獲得年月日')
        cy.get('[aria-colindex="2"] > div').invoke('text').should('contain', '企業契約日')
        cy.get('[aria-colindex="3"] > div').invoke('text').should('contain', '企業名')
        cy.get('[aria-colindex="4"] > div').invoke('text').should('contain', '所属園')
        cy.get('[aria-colindex="5"] > div').invoke('text').should('contain', 'ステータス')
        cy.get('[aria-colindex="6"] > div').invoke('text').should('contain', '報酬額')
        cy.get('th[role="columnheader"]').nextUntil('[class="th-width-dots"]').each(($li, index, $lis) => {
            cy.get($li).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
            cy.get($li).should('have.css', 'color').and('eq','rgb(92, 104, 115)')
            cy.get($li).should('have.css', 'font-size').and('eq', '12px');

        })

    //Verification for Edit button

     cy.get(editButton).should('be.visible');
     cy.get(editButton).invoke('text').should('contain', '編集')
     cy.get(editButton).should('have.css', 'color').and('eq','rgb(255, 255, 255)');
     cy.get(editButton).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/);
     cy.get(editButton).should('have.css', 'font-size').and('eq', '14px')

     cy.get(editButton).first().click();
})

})
