// <reference types="Cypress" />
import chaiColors from 'chai-colors'
chai.use(chaiColors)
require('cypress-xpath')

var attendanceManagementbutton = '.fa-clock-o';
var bottomOption = '.fa-angle-double-down';

describe('Shift registration', () => {
    it('Verify shift registration screen ontent', () => {
        cy.balogin();
        cy.get('#dropdown-form__BV_toggle_').click();
        cy.get(attendanceManagementbutton).eq(0).click()
        cy.wait(3000)
        cy.get(bottomOption).click()
        cy.get('.bottom-sheet').within(()=>{
            //Verify header
            cy.header('シフト入力');
            //Verify save and cancel button
            cy.saveandCancel();
            //Verify shift and csv text
            cy.get('[href="#/setting/shift"]').invoke('text').should('contain', 'シフトパターン登録へ')
            cy.get('[href="#/setting/shift"]').should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
            cy.get('[href="#/setting/shift"]').should('have.css', 'color').and('eq','rgb(10, 201, 164)')
            cy.get('[href="#/setting/shift"]').should('have.css', 'font-size').and('eq', '14px');

            cy.xpath('//u[contains(text(),"CSV 一括登録")]').invoke('text').should('contain', 'CSV 一括登録')
            cy.xpath('//u[contains(text(),"CSV 一括登録")]').should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
            cy.xpath('//u[contains(text(),"CSV 一括登録")]').should('have.css', 'color').and('eq','rgb(10, 201, 164)')
            cy.xpath('//u[contains(text(),"CSV 一括登録")]').should('have.css', 'font-size').and('eq', '14px');
            //Verify Shift font
            cy.get('.col').not().last().not('.common-text').each(($li, index, $lis) => {
                cy.get($li).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
                cy.get($li).should('have.css', 'color').and('eq','rgb(0, 0, 0)')
                cy.get($li).should('have.css', 'font-size').and('eq', '14px');
            })
            //Verift shift  text 
            cy.get('.col').not('.common-text').invoke('text').should('contain', '超早')
            cy.get('.col').not('.common-text').invoke('text').should('contain', '早')
            cy.get('.col').not('.common-text').invoke('text').should('contain', '中')
            cy.get('.col').not('.common-text').invoke('text').should('contain', '遅')
            cy.get('.col').not('.common-text').invoke('text').should('contain', '有給')
        })
    })

        it('Verify class management', () => {
            cy.xpath('//u[contains(text(),"CSV 一括登録")]').click();
            cy.get('.modal-content').within(()=>{
                //Verify Header
                cy.header('CSV  インポート登録');
                
                //Verify All Text 
                cy.get('.pl-1').invoke('text').should('contain', 'お読みください')
                cy.get('.pl-4 > :nth-child(1)').invoke('text').should('contain', 'CSVファイルの入力例はこちらのテンプレートファイルをご参照ください')
                cy.get('.pl-4 > :nth-child(2)').invoke('text').should('contain', 'アップロードできるファイル')
               // cy.get('.pl-4 > :nth-child(3)').invoke('text').should('contain', ' 既にシフト登録されている 箇所は強制的に上書きされます。')
                cy.xpath('//div[contains(@class,"row mt-3")]').invoke('text').should('contain', 'CSV  ファイルインポート')
                //Verify font of text all 
                cy.get('.pl-1').not().last().not('.common-text').each(($li, index, $lis) => {
                    cy.get($li).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
                    cy.get($li).should('have.css', 'color').and('eq','rgb(0, 0, 0)')
                    cy.get($li).should('have.css', 'font-size').and('eq', '14px');
                })

                //Verify Save Button
                cy.xpath('//button[contains(@class,"btn px-4 btn-primary btn-primary")]').invoke('text').should('contain', 'CSV ファイルをインポート')
                cy.xpath('//button[contains(@class,"btn px-4 btn-primary btn-primary")]').should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
                cy.xpath('//button[contains(@class,"btn px-4 btn-primary btn-primary")]').should('have.css', 'color').and('eq','rgb(255, 255, 255)')
                cy.xpath('//button[contains(@class,"btn px-4 btn-primary btn-primary")]').should('have.css', 'font-size').and('eq', '14px');
            })
            
            //Verify upload label font text 
                cy.get('.bv-no-focus-ring').invoke('text').should('contain', 'ファイルが選択されていません')
                cy.get('.custom-file-label').invoke('text').should('contain', 'ファイルが選択されていません')
                cy.get('.bv-no-focus-ring').should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
                cy.xpath('//button[contains(@class,"btn px-4 btn-primary btn-primary")]').should('have.css', 'color').and('eq','rgb(255, 255, 255)')
                cy.xpath('//button[contains(@class,"btn px-4 btn-primary btn-primary")]').should('have.css', 'font-size').and('eq', '14px');
                

        })

})