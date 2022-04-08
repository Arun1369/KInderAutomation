/// <reference types="Cypress" />
import chaiColors from 'chai-colors'
chai.use(chaiColors)
require('cypress-xpath')

var entryButton = '.fa-university';

describe('Ascending and descending management> Extended childcare', () => {
    it('Verify Ascending and descending management> Extended childcare Screen', () => {
    cy.visit('http://54.238.110.14/staff/#/auth/signin')
    cy.wait(6000)
    cy.get('.px-4').click() 
    cy.wait(2000);
    cy.get('#dropdown-form__BV_toggle_ ').click();
    cy.wait(6000)
    cy.get(entryButton).eq(0).click()
    cy.wait(6000)
    cy.debug()
    cy.get('.nav-item').eq(4).click()

        //Verify Tab title font,
        cy.get('.nav-item').eq(4).invoke('text').should('contain', '延長保育')
        cy.get('.nav-item').eq(4).should('have.css', 'color').and('eq','rgb(66, 66, 66)')
        cy.get('.nav-item').eq(4).should('have.css', 'font-size').and('eq', '14px')
        cy.get('.nav-item').eq(4).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
        cy.wait(3000)

        cy.get('[class="animated fadeIn"]').eq(1).within(()=>{
            cy.wait(3000)
        //Verify for chat
        cy.get('#line-chart').should('be.visible')

        cy.get('.label-color').eq(0).invoke('text').should('contain', '合計')
        cy.get('.label-color').eq(1).invoke('text').should('contain', '朝延長')
        cy.get('.label-color').eq(2).invoke('text').should('contain', '夕延長')

        cy.get('.label-color').each(($li, index, $lis) => {
        cy.get($li).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
        cy.get($li).should('have.css', 'color').and('eq','rgb(92, 104, 115)');
        cy.get($li).should('have.css', 'font-size').and('eq', '14px');
        })

        cy.get('.subValueItemfont').eq(0).invoke('text').should('contain', '54')
        cy.get('.subValueItemfont').eq(1).invoke('text').should('contain', '32')
        cy.get('.subValueItemfont').eq(2).invoke('text').should('contain', '22')

        cy.get('.subValueItemfont').each(($li, index, $lis) => {
        cy.get($li).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
        cy.get($li).should('have.css', 'color').and('eq','rgb(66, 66, 66)');
        cy.get($li).should('have.css', 'font-size').and('eq', '16px');
        })

        cy.get('.custom-select').invoke('text').should('contain', '10分間隔')
        cy.get('.custom-select').should('have.css', 'color').and('eq','rgb(66, 66, 66)')
        cy.get('.custom-select').should('have.css', 'font-size').and('eq', '14px')
        cy.get('.custom-select').should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)


       cy.get('.th-class').eq(10).invoke('text').should('contain', '9月')
        cy.get('.d-block').eq(0).invoke('text').should('contain', '1')
        cy.get('.d-block').eq(1).invoke('text').should('contain', '火')
        cy.get('.d-block').eq(2).invoke('text').should('contain', '2')
        cy.get('.d-block').eq(3).invoke('text').should('contain', '水')
        cy.get('.d-block').eq(4).invoke('text').should('contain', '3')
        cy.get('.d-block').eq(5).invoke('text').should('contain', '木')
        cy.get('.d-block').eq(6).invoke('text').should('contain', '4')
        cy.get('.d-block').eq(7).invoke('text').should('contain', '金')
        cy.get('.d-block').eq(8).invoke('text').should('contain', '5')
        cy.get('.d-block').eq(9).invoke('text').should('contain', '土')
        cy.get('.d-block').eq(10).invoke('text').should('contain', '6')
        cy.get('.d-block').eq(11).invoke('text').should('contain', '日')
        cy.get('.d-block').eq(12).invoke('text').should('contain', '7')
        cy.get('.d-block').eq(13).invoke('text').should('contain', '月')
        cy.get('.d-block').eq(14).invoke('text').should('contain', '8')
        cy.get('.d-block').eq(15).invoke('text').should('contain', '火')
        cy.get('.d-block').eq(16).invoke('text').should('contain', '9')
        cy.get('.d-block').eq(17).invoke('text').should('contain', '水')
        cy.get('.d-block').eq(18).invoke('text').should('contain', '10')
        cy.get('.d-block').eq(19).invoke('text').should('contain', '木')
        cy.get('.d-block').eq(20).invoke('text').should('contain', '11')
        cy.get('.d-block').eq(21).invoke('text').should('contain', '金')
        cy.get('.d-block').eq(22).invoke('text').should('contain', '12')
        cy.get('.d-block').eq(23).invoke('text').should('contain', '土')
        cy.get('.d-block').eq(24).invoke('text').should('contain', '13')
        cy.get('.d-block').eq(25).invoke('text').should('contain', '日')
        cy.get('.d-block').eq(26).invoke('text').should('contain', '14')
        cy.get('.d-block').eq(27).invoke('text').should('contain', '月')
        cy.get('.d-block').eq(28).invoke('text').should('contain', '15')
        cy.get('.d-block').eq(29).invoke('text').should('contain', '火')
        cy.get('.d-block').eq(30).invoke('text').should('contain', '16')
        cy.get('.d-block').eq(31).invoke('text').should('contain', '水')
        cy.get('.d-block').eq(32).invoke('text').should('contain', '17')
        cy.get('.d-block').eq(33).invoke('text').should('contain', '木')
        cy.get('.d-block').eq(34).invoke('text').should('contain', '18')
        cy.get('.d-block').eq(35).invoke('text').should('contain', '金')
        cy.get('.d-block').eq(36).invoke('text').should('contain', '19')
        cy.get('.d-block').eq(37).invoke('text').should('contain', '土')
        cy.get('.d-block').eq(38).invoke('text').should('contain', '20')
        cy.get('.d-block').eq(39).invoke('text').should('contain', '日')
        cy.get('.d-block').eq(40).invoke('text').should('contain', '21')
        cy.get('.d-block').eq(41).invoke('text').should('contain', '月')
        cy.get('.d-block').eq(42).invoke('text').should('contain', '22')
        cy.get('.d-block').eq(43).invoke('text').should('contain', '火')
        cy.get('.d-block').eq(44).invoke('text').should('contain', '23')
        cy.get('.d-block').eq(45).invoke('text').should('contain', '水')
        cy.get('.d-block').eq(46).invoke('text').should('contain', '24')
        cy.get('.d-block').eq(47).invoke('text').should('contain', '木')
        cy.get('.d-block').eq(48).invoke('text').should('contain', '25')
        cy.get('.d-block').eq(49).invoke('text').should('contain', '金')
        cy.get('.d-block').eq(50).invoke('text').should('contain', '26')
        cy.get('.d-block').eq(51).invoke('text').should('contain', '土')
        cy.get('.d-block').eq(52).invoke('text').should('contain', '27')
        cy.get('.d-block').eq(53).invoke('text').should('contain', '日')
        cy.get('.d-block').eq(54).invoke('text').should('contain', '28')
        cy.get('.d-block').eq(55).invoke('text').should('contain', '月')
        cy.get('.d-block').eq(56).invoke('text').should('contain', '29')
        cy.get('.d-block').eq(57).invoke('text').should('contain', '火')
        cy.get('.d-block').eq(58).invoke('text').should('contain', '30')
        cy.get('.d-block').eq(59).invoke('text').should('contain', '水')
        
        cy.get('.d-block').each(($li, index, $lis) => {
        cy.get($li).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
        cy.get($li).should('have.css', 'color').and('eq','rgb(66, 66, 66)');
        cy.get($li).should('have.css', 'font-size').and('eq', '12px');
        })

        cy.get('[class="text-center body-half-screen"]').within(()=>{

        cy.get('td').eq(1).invoke('text').should('contain', '07:00')
        
        cy.get('td').each(($li, index, $lis) => {
        cy.get($li).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
        cy.get($li).should('have.css', 'color').and('eq','rgb(66, 66, 66)');
        cy.get($li).should('have.css', 'font-size').and('eq', '12px');
        })
        })
    })
        
     })
    })

    
    
