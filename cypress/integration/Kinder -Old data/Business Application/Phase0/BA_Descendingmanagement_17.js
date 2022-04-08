/// <reference types="Cypress" />
import chaiColors from 'chai-colors'
chai.use(chaiColors)
require('cypress-xpath')

var entryButton = '.fa-university';
var batchButton = '//button[contains(text(),"一括登録")]'
var saveButton = '//button[contains(text(),"適用")]'
var selectChildren = '//button[contains(text(),"選択した園児")]'
describe('Descending management', () => {
    it('Verify Descending management Screen', () => {
        cy.visit('http://54.238.110.14/staff/#/auth/signin')
    cy.wait(6000)
    cy.get('.px-4').click() 
    cy.wait(2000);
    cy.get('#dropdown-form__BV_toggle_ ').click();
    cy.wait(6000)
    cy.get(entryButton).eq(0).click()
    cy.wait(6000)
    cy.debug()
    cy.xpath(batchButton).click()

        //Verify Tab title font,
        cy.get('.nav-item').eq(3).invoke('text').should('contain', '登降園管理')
        cy.get('.nav-item').eq(3).should('have.css', 'color').and('eq','rgb(66, 66, 66)')
        cy.get('.nav-item').eq(3).should('have.css', 'font-size').and('eq', '14px')
        cy.get('.nav-item').eq(3).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
        cy.wait(3000)

        cy.get('[class="animated fadeIn"]').eq(0).within(()=>{
            cy.wait(3000)
        //Verify for drop-down
        cy.get('.custom-select').invoke('text').should('contain', '全員')
        cy.get('.custom-select').should('have.css', 'color').and('eq','rgb(66, 66, 66)')
        cy.get('.custom-select').should('have.css', 'font-size').and('eq', '14px')
        cy.get('.custom-select').should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)

        //Verify for Search 
        cy.get('.form-control').first().should('have.attr', 'placeholder', '検索')
        cy.get('.form-control').should('have.css', 'color').and('eq','rgb(66, 66, 66)')
        cy.get('.form-control').should('have.css', 'font-size').and('eq', '14px')  
        cy.get('.form-control').should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)

        //Verify for batch processing
        cy.get('.dropdown-toggle-no-caret').invoke('text').should('contain', '一括登録')
        cy.get('.dropdown-toggle-no-caret').should('have.css', 'color').and('eq','rgb(255, 255, 255)')
        cy.get('.dropdown-toggle-no-caret').should('have.css', 'font-size').and('eq', '14px')
        cy.get('.dropdown-toggle-no-caret').should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)

        //Verify for column headers
        cy.get('th').eq(2).invoke('text').should('contain', '登園時間')
        cy.get('th').eq(3).invoke('text').should('contain', '降園時間')
        cy.get('th').eq(4).invoke('text').should('contain', '保育時間')
        cy.get('th').eq(5).invoke('text').should('contain', '欠席')
        cy.get('th').eq(6).invoke('text').should('contain', 'メモ・欠席理由')

        cy.get('th').each(($li, index, $lis) => {
        cy.get($li).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
        cy.get($li).should('have.css', 'color').and('eq','rgb(66, 66, 66)');
        cy.get($li).should('have.css', 'font-size').and('eq', '12px');
        })

        //Verify for print an download
        cy.get('.btn-outline-primary').eq(0).should('be.visible')
        cy.get('.btn-outline-primary').eq(1).should('be.visible')

           //cy.xpath(batchButton).click()
        })
    })
        
    it('Verify batch processing pop up screen content', () => {
        cy.get('[class="animated fadeIn"]').eq(0).within(()=>{
            cy.xpath(batchButton).click()
           })
        cy.get('[class="b-dropdown-form"]').within(()=>{
        //Verify header
        cy.get('h4').invoke('text').should('contain', '一括登録')
        cy.get('h4').should('have.css', 'color').and('eq','rgb(66, 66, 66)')
        cy.get('h4').should('have.css', 'font-size').and('eq', '21px')  
        cy.get('h4').should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)  

        //Verify for labels
            cy.get('.register-lables').eq(0).invoke('text').should('contain', '対象：')
            cy.get('.register-lables').eq(1).invoke('text').should('contain', '登園時間：')
            cy.get('.register-lables').eq(2).invoke('text').should('contain', '降園時間：')

        cy.get('.register-lables').each(($li, index, $lis) => {
        cy.get($li).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
        cy.get($li).should('have.css', 'color').and('eq','rgb(92, 104, 115)');
        cy.get($li).should('have.css', 'font-size').and('eq', '12px');
        })

         //Verify for check-box field
        cy.get('.custom-control-label').invoke('text').should('contain', '欠席')
        cy.get('.custom-control-label').should('have.css', 'color').and('eq','rgb(66, 66, 66)')
        cy.get('.custom-control-label').should('have.css', 'font-size').and('eq', '14px')  
        cy.get('.custom-control-label').should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)  
        cy.get('[type="checkbox"]').should("be.checked")

        cy.xpath(saveButton).invoke('text').should('contain', '適用')
        cy.xpath(saveButton).should('have.css', 'color').and('eq','rgb(255, 255, 255)')
        cy.xpath(saveButton).should('have.css', 'font-size').and('eq', '14px')  
        cy.xpath(saveButton).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)  

        cy.xpath(selectChildren).invoke('text').should('contain', '選択した園児')
        cy.xpath(selectChildren).should('have.css', 'color').and('eq','rgb(10, 201, 164)')
        cy.xpath(selectChildren).should('have.css', 'font-size').and('eq', '14px')  
        cy.xpath(selectChildren).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/) 
            

        })

    })

    it('Verify Selected Children pop up screen content', () => {
        cy.get('[class="animated fadeIn"]').eq(0).within(()=>{
            cy.xpath(batchButton).click({ force: true })
           })
           cy.get('[class="b-dropdown-form"]').eq(0).within(()=>{
            cy.xpath(selectChildren).click({ force: true })
            cy.wait(6000)
           })
       // cy.get('.popover-body').within(()=>{

            //Verify for radio button header
            cy.get('.popup-lable').eq(0).invoke('text').should('contain', 'クラス別')
            cy.get('.popup-lable').eq(1).invoke('text').should('contain', 'バスルート別')

        cy.get('.popup-lable').each(($li, index, $lis) => {
        cy.get($li).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
        cy.get($li).should('have.css', 'color').and('eq','rgb(92, 104, 115)');
        cy.get($li).should('have.css', 'font-size').and('eq', '12px');
        })


            //Verify radio button font 
            cy.radionButtonLabel();
            //Verify Text of radio button and checkbox 
            cy.get('label').eq(0).invoke('text').should('contain', '選択した園児')
            cy.get('label').eq(1).invoke('text').should('contain', '園全体')
            cy.get('label').eq(2).invoke('text').should('contain', 'ひよこ')
            cy.get('label').eq(3).invoke('text').should('contain', 'りす')
            cy.get('label').eq(4).invoke('text').should('contain', 'うさぎ')
            cy.get('label').eq(5).invoke('text').should('contain', 'ルート A')
            cy.get('label').eq(6).invoke('text').should('contain', 'りすルート B')
            
       // })

    })


})

     
    

    
    
