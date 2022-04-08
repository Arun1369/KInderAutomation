// <reference types="Cypress" />
import chaiColors from 'chai-colors'
chai.use(chaiColors)
require('cypress-xpath')


var questiuonnaireButton = '.fa-question-circle-o';
var previewButton = '//button[contains(text(),"プレビュー")]'


describe('screen content of attendence of student', () => {
    it('Verify screen content of attendence of student', () => {
    cy.visit('http://54.238.110.14/staff/#/auth/signin')
    cy.wait(6000)
    cy.get('.px-4').click() 
    cy.wait(2000);
    cy.get('#dropdown-form__BV_toggle_ ').click();
    cy.get(questiuonnaireButton).eq(0).click({ multiple: true });
    cy.wait(6000)
    cy.debug()
    cy.xpath(previewButton).eq(0).click({ multiple: true });
    
    cy.get('.main-chart-div').within(()=>{
    cy.wait(3000)
    //Verify Header 
    cy.get('h3').invoke('text').should('contain', 'アンケートのタイトル')
    cy.get('h3').should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
    cy.get('h3').should('have.css', 'color').and('eq','rgb(26, 26, 26)')
    cy.get('h3').should('have.css', 'font-size').and('eq', '24.5px');

    // cy.get('.mt-3').invoke('text').should('contain', 'アンケートの説明文。アンケートの説明文。アンケートの説明文。アンケートの説明文。アンケート')
    // cy.get('.mt-3').should('have.css', 'color').and('eq','rgb(66, 66, 66)')
    // cy.get('.mt-3').should('have.css', 'font-size').and('eq', '14px')
    // cy.get('.mt-3').should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)

//Verify for labels
        cy.get('.register-lables').eq(0).invoke('text').should('contain', 'アンケート種類：')
        cy.get('.register-lables').eq(1).invoke('text').should('contain', 'アンケート締切日時：')
        cy.get('.value-color').eq(0).invoke('text').should('contain', '記名回答')
        cy.get('.value-color').eq(1).invoke('text').should('contain', '2020/12/24 08:00')
        
        cy.get('.register-lables').each(($li, index, $lis) => {
        cy.get($li).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
        cy.get($li).should('have.css', 'color').and('eq','rgb(128, 128, 128)');
        cy.get($li).should('have.css', 'font-size').and('eq', '12px');
        })
    //Verify for headers
    cy.get('.subValueItemfont').eq(0).invoke('text').should('contain', '好きな食べ物は？')
    cy.get('.subValueItemfont').eq(1).invoke('text').should('contain', '好きな音楽は？')
        
        cy.get('.subValueItemfont').each(($li, index, $lis) => {
        cy.get($li).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
        cy.get($li).should('have.css', 'color').and('eq','rgb(26, 26, 26)');
        cy.get($li).should('have.css', 'font-size').and('eq', '16px');
        })

        //Verify for chart
        cy.get('.donut-chart').should('be.visible')
        cy.get('#horizontalbar-chart').should('be.visible')

        //Verify for chart discription
        cy.get('.apexcharts-legend-text').eq(0).invoke('text').should('contain', '和食 : 50 (50%) ')
        cy.get('.apexcharts-legend-text').eq(1).invoke('text').should('contain', '洋食 : 25 (25%) ')
        cy.get('.apexcharts-legend-text').eq(2).invoke('text').should('contain', '中華 : 25 (25%) ')
        
        cy.get('.apexcharts-legend-text').each(($li, index, $lis) => {
        cy.get($li).should('have.css', 'font-family').and('match', /Helvetica, Arial, sans-serif/)
        cy.get($li).should('have.css', 'color').and('eq','rgb(26, 26, 26)');
        cy.get($li).should('have.css', 'font-size').and('eq', '14px');
        })

    })

     })
    })

