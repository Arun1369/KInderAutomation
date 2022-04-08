// <reference types="Cypress" />
import chaiColors from 'chai-colors'
chai.use(chaiColors)
require('cypress-xpath')

// var attendanceManagementbutton = '.fa-clock-o';
// var bottomOption = '.fa-angle-double-down';

// describe('Attendance managment', () => {
//     it('Verify attendance management screen ontent', () => {
//         cy.balogin();
//         cy.get('#dropdown-form__BV_toggle_').click();
//         cy.get(attendanceManagementbutton).eq(0).click()
//         cy.wait(4000)
//         //Verify the title
//         cy.activeTabtitle('シフト');
//         //Verify the date picker
//         cy.get('.date-picker-font-custom').eq(0).should('not.be.disabled')

//         //Verify print option
//         cy.get('.fa-print').should('not.be.disabled')
//         //Verify download button 
//         cy.get('.btn-outline-primary').eq(0).should('not.be.disabled')
//         //verify dropdown
//         cy.get('.custom-select').should('not.be.disabled')
//         //Verify text
//         cy.xpath('//div[contains(text(),"月間総配置数")]').invoke('text').should('contain', '月間総配置数')
//         cy.xpath('//div[contains(text(),"月間総労働時間")]').invoke('text').should('contain', '月間総労働時間')
//         cy.xpath('//span[contains(text(),"出勤予定人数")]').invoke('text').should('contain', '出勤予定人数')
//         cy.xpath('//span[contains(text(),"園児登園予定人数")]').invoke('text').should('contain', '園児登園予定人数')
//         cy.xpath('//span[contains(text(),"最大配置数")]').invoke('text').should('contain', '最大配置数 / 総労働時間')
//         //Verify font of all text
//         cy.get('[class="text-right sticky-label"]').each(($li, index, $lis) => {
//             cy.get($li).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
//             cy.get($li).should('have.css', 'color').and('eq','rgb(0, 0, 0)');
//             cy.get($li).should('have.css', 'font-size').and('eq', '12px');
//             })
//         //Verify all kids font
//         cy.get('[class="calendar-profile-name  vertical-align"]>.value-color').each(($li, index, $lis) => {
//             cy.get($li).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
//             cy.get($li).should('have.css', 'color').and('eq','rgb(0, 0, 0)');
//             cy.get($li).should('have.css', 'font-size').and('eq', '12px');

//             })
            
       

//     })
// })

var attendanceManagementButton = '.fa-th';
describe('screen content of attendence of student', () => {
    it('Verify screen content of attendence of student', () => {
    cy.visit('http://54.238.110.14/staff/#/auth/signin')
    cy.wait(6000)
    cy.get('.px-4').click() 
    cy.wait(2000);
    cy.get('#dropdown-form__BV_toggle_ ').click();
    cy.get(attendanceManagementButton).eq(0).click()
    cy.wait(6000)
    cy.debug()
    cy.get('.tab-link-custom-height').eq(0).click()
    cy.wait(6000)
    cy.get('.time-value-td').eq(2).click({ multiple: true });
  
    //Verify Header 
    cy.header('出欠│東海林ひとみ');

    cy.get('[class="modal-body"]').within(()=>{
        cy.wait(3000)
//Verify for labels
        cy.get('.register-lables-modal').eq(0).invoke('text').should('contain', '日付：')
        cy.get('.register-lables-modal').eq(1).invoke('text').should('contain', '登降園予定：')
        cy.get('.register-lables-modal').eq(2).invoke('text').should('contain', '登降園実績：')
        cy.get('.register-lables-modal').eq(3).invoke('text').should('contain', 'お迎え保護者：')
        cy.get('.register-lables-modal').eq(4).invoke('text').should('contain', 'メモ：')
        
        cy.get('.register-lables-modal').each(($li, index, $lis) => {
        cy.get($li).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
        cy.get($li).should('have.css', 'color').and('eq','rgb(92, 104, 115)');
        cy.get($li).should('have.css', 'font-size').and('eq', '12px');
        })
    //Verify for input time field
    cy.get('.mx-input').eq(0).first().should('have.attr', 'placeholder', 'HH:MM')
    cy.get('.mx-input').eq(1).first().should('have.attr', 'placeholder', 'HH:MM')
    cy.get('.mx-input').eq(2).first().should('have.attr', 'placeholder', 'HH:MM')
    cy.get('.mx-input').eq(3).first().should('have.attr', 'placeholder', 'HH:MM')
        
        cy.get('.mx-input').each(($li, index, $lis) => {
        cy.get($li).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
        cy.get($li).should('have.css', 'color').and('eq','rgb(85, 85, 85)');
        cy.get($li).should('have.css', 'font-size').and('eq', '14px');
        })
//Verify for drop-down field
        cy.get('.custom-select').invoke('text').should('contain', '東海林大介 ( 父 )')
        cy.get('.custom-select').should('have.css', 'color').and('eq','rgb(66, 66, 66)')
        cy.get('.custom-select').should('have.css', 'font-size').and('eq', '14px')
        cy.get('.custom-select').should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
//Verify for tesxt enter
        cy.get('#textarea-default').first().should('have.attr', 'placeholder', 'メモ・欠席理由')
        cy.get('#textarea-default').should('have.css', 'color').and('eq','rgb(66, 66, 66)')
        cy.get('#textarea-default').should('have.css', 'font-size').and('eq', '12.25px')
        cy.get('#textarea-default').should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)

        })
//Verifyy for save and cancel
        cy.saveandCancel();

        //Verify for cross mark
  cy.get('.close').should('be.visible')

    })

    })

