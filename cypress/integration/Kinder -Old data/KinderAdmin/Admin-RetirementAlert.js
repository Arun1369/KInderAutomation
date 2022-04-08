/// <reference types="Cypress" />
import chaiColors from 'chai-colors'
chai.use(chaiColors)
//import { URL } from ' ../lib/env.js '
//Cypress.env("url");

require('cypress-xpath')


var contentMainMenu = '//div[contains(text(),"コンテンツ管理")]';
var retirementAlertMenu = 'a[href="#/content/alert"]';
var saveButton = '//button[contains(text(),"保存")]';
var addButton = '//button[contains(text(),"追加")]';

describe('Retirement Alert Screen', () => {
    it('Launch URL', () => {
        cy.visit('/')
        cy.wait(1000)
        //input
        cy.login()
        cy.wait(1000)

    //Verification for Main menu
        cy.xpath(contentMainMenu).click();
        cy.xpath(contentMainMenu).invoke('text').should('contain', 'コンテンツ管理')
        cy.xpath(contentMainMenu).should('have.css', 'color').and('eq','rgb(255, 255, 255)')
        cy.xpath(contentMainMenu).should('have.css', 'font-size').and('eq', '14px');
        cy.xpath(contentMainMenu).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/);

    //Verification for sub menu
        cy.get(retirementAlertMenu).click();
        cy.get(retirementAlertMenu).invoke('text').should('contain', '離職アラート')
        cy.get(retirementAlertMenu).should('have.css', 'color').and('eq','rgb(255, 255, 255)')
        cy.get(retirementAlertMenu).should('have.css', 'font-size').and('eq', '14px');
        cy.get(retirementAlertMenu).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/);
        cy.wait(1000)

    //Verification for Screen  title
    cy.get('.mb-3').invoke('text').should('contain', '退職者の平均値・中央値')
    cy.get('.mb-3').should('have.css', 'color').and('eq','rgb(0, 0, 0)')
    cy.get('.mb-3').should('have.css', 'font-size').and('eq', '17.5px');
    cy.get('.mb-3').should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/);
    cy.get('.mb-3').should('be.visible')

    //Verification for Length of service
    cy.get('.bv-no-focus-ring > .register-lables').invoke('text').should('contain', '勤続年数：')
    cy.get('.bv-no-focus-ring > .register-lables').should('be.visible')
    cy.get('.bv-no-focus-ring > .register-lables').should('have.css', 'color').and('eq','rgb(92, 104, 115)')
    cy.get('.bv-no-focus-ring > .register-lables').should('have.css', 'font-size').and('eq', '12px');
    cy.get('.bv-no-focus-ring > .register-lables').should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/);

    //Verification for month fields
    cy.get('#__BVID__153').should('be.visible')

    //Verification for column headers
    cy.get('thead > tr > [aria-colindex="1"]').should('be.visible')
    cy.get('[aria-colindex="2"] > div').invoke('text').should('contain', '勤続年数')
    cy.get('[aria-colindex="3"] > div').invoke('text').should('contain', '有給取得数')
    cy.get('[aria-colindex="4"] > div').invoke('text').should('contain', '遅刻数')
    cy.get('[aria-colindex="5"] > div').invoke('text').should('contain', '早退数')
    cy.get('[aria-colindex="6"] > div').invoke('text').should('contain', '当欠')

    cy.get('th[role="columnheader"]').nextUntil('[class="th-width-dots"]').each(($li, index, $lis) => {
        cy.get($li).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
        cy.get($li).should('have.css', 'color').and('eq','rgb(92, 104, 115)')
        cy.get($li).should('have.css', 'font-size').and('eq', '12px');
    });

    //Verification for Turnover alert
    cy.get('.container-fluid > [data-v-c16e5f8a=""] > :nth-child(4)').should('be.visible')
    cy.get('.container-fluid > [data-v-c16e5f8a=""] > :nth-child(4)').invoke('text').should('contain', '離職アラート')
    cy.get('.container-fluid > [data-v-c16e5f8a=""] > :nth-child(4)').should('have.css', 'color').and('eq','rgb(0, 0, 0)')
    cy.get('.container-fluid > [data-v-c16e5f8a=""] > :nth-child(4)').should('have.css', 'font-size').and('eq', '14px');
    cy.get('.container-fluid > [data-v-c16e5f8a=""] > :nth-child(4)').should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/);

    //Verification for add button
        // cy.xpath(addButton).invoke('text').should('contain', '追加')
        // cy.xpath(addButton).should('have.css', 'color').and('eq','rgb(255, 255, 255)')
        // cy.xpath(addButton).should('have.css', 'font-size').and('eq', '14px');
        // cy.xpath(addButton).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/);
        // cy.xpath(addButton).first().click();
        cy.xpath(addButton).each(($li, index, $lis) => {
            cy.get($li).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
            cy.get($li).should('have.css', 'color').and('eq','rgb(255, 255, 255)')
            cy.get($li).should('have.css', 'font-size').and('eq', '14px');
            })
        

    //Verification for TurnOver alert table
            cy.get('#ctable > :nth-child(1) > :nth-child(4)').invoke('text').should('contain', '有給')
            cy.get('#ctable > :nth-child(1) > :nth-child(5)').invoke('text').should('contain', '遅刻')
            cy.get('#ctable > :nth-child(1) > :nth-child(6)').invoke('text').should('contain', '早退')
            cy.get('#ctable > :nth-child(1) > :nth-child(7)').invoke('text').should('contain', '当欠')
       
            cy.get('table').eq(1).within(() => {
            cy.get('.card-lables').each(($li, index, $lis) => {
            cy.get($li).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
            cy.get($li).should('have.css', 'color').and('eq','rgb(92, 104, 115)')
            cy.get($li).should('have.css', 'font-size').and('eq', '12px');

        })
    })
       //Verification for Status toggle
    //    cy.get(':nth-child(3) > td').scrollTo('right')
    //    cy.get(':nth-child(8) > .d-flex > .py-1').should('be.visible')
    //    cy.get(':nth-child(8) > .d-flex > .fa').should('be.visible')
    //    cy.get(':nth-child(8) > .d-flex > .fa').first().click();

       cy.get('.bg-white > :nth-child(1) > .register-lables').invoke('text').should('contain', '入社から')
       cy.get('.bg-white > :nth-child(1) > .register-lables').invoke('text').should('contain', '社から')

       cy.get('.register-lables').each(($el,index,$li)=>{
       cy.get($li).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
       cy.get($li).should('have.css', 'color').and('eq','rgb(92, 104, 115)')
       cy.get($li).should('have.css', 'font-size').and('eq', '12px');
       
    })
    //Verification for data fields
    cy.get('.d-flex>input').
    each(($el, index,$list)=>{
    cy.get($el).click({force:true});
    cy.get($el).should("be.visible");
  })

   cy.get(':nth-child(3) > td > #textarea').should('be.visible')
    cy.get(':nth-child(3) > td > #textarea').first().should('have.attr', 'placeholder', 'アラートメッセージ内容')

    //Verification for last table data
    cy.get('#__BVID__173').should('be.visible')
    cy.get('.leave-work-lable > .d-flex > .card-padding-top').invoke('text').should('contain', '日間連続、退勤時の気分が')
    cy.get('.leave-work-lable > .d-flex > .card-padding-top').should('be.visible')
    cy.get('.leave-work-lable > .d-flex > .card-padding-top').should('have.css', 'color').and('eq','rgb(92, 104, 115)')
    cy.get('.leave-work-lable > .d-flex > .card-padding-top').should('have.css', 'font-size').and('eq', '12px')
    cy.get('.leave-work-lable > .d-flex > .card-padding-top').should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/);

    cy.get('#__BVID__174').should('be.visible')
    cy.get('.bg-white > :nth-child(2) > .d-flex > .card-padding-top').invoke('text').should('contain', 'の時アラートを表示')
    cy.get('.bg-white > :nth-child(2) > .d-flex > .card-padding-top').should('be.visible')
    cy.get('.bg-white > :nth-child(2) > .d-flex > .card-padding-top').should('have.css', 'color').and('eq','rgb(92, 104, 115)')
    cy.get('.bg-white > :nth-child(2) > .d-flex > .card-padding-top').should('have.css', 'font-size').and('eq', '12px')
    cy.get('.bg-white > :nth-child(2) > .d-flex > .card-padding-top').should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/);

    cy.get(':nth-child(3) > .d-flex > .py-1').should('be.visible')
    cy.get(':nth-child(3) > .d-flex > .fa').should('be.visible')
    //cy.get(':nth-child(3) > .d-flex > .fa').first().click();


    cy.get(':nth-child(2) > td > #textarea').should('be.visible')
    cy.get(':nth-child(2) > td > #textarea').first().should('have.attr', 'placeholder', 'アラートメッセージ内容');
    

   //Verification for Save button
        cy.xpath(saveButton).click();
        cy.xpath(saveButton).invoke('text').should('contain', '保存')
        cy.xpath(saveButton).should('have.css', 'color').and('eq','rgb(255, 255, 255)')
        cy.xpath(saveButton).should('have.css', 'font-size').and('eq', '14px');
        cy.xpath(saveButton).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/);

       
})

})
