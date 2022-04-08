/// <reference types="Cypress" />
import chaiColors from 'chai-colors'
chai.use(chaiColors)
require('cypress-xpath')

var masterScreenButton = '.fa-cogs';
var templateButton  = '//a[contains(text(),"記録帳票テンプレート")]';
var classCreateButton = '//button[contains(text(),"クラスを追加")]';
var editgroupButton = '//button[contains(text(),"グループを編集")]';

describe('Development record', () => {
    it('Verify Development record screen content', () => {
      
        cy.balogin();
        cy.get('#dropdown-form__BV_toggle_').click();
        cy.get(masterScreenButton).eq(0).click({force:true})
        cy.get(masterScreenButton).eq(1).click({force:true})
        cy.wait(10000)
        cy.xpath(templateButton).click({force:true})
        cy.reload()
       
       //Verify Tab title font,
       cy.masterSettingsTab(templateButton,"記録帳票テンプレート")
       
      
       //Verify All text
       cy.get('[href="#/setting/growth"]').eq(1).click()
    
            cy.wait(6000)
        
           
                //Verify all dropdown is visible or not
               cy.get('.custom-select').should("be.visible")
                cy.header('発達記録項目');
                //Verify main tab
                cy.masterSettingsTab('//a[contains(text(),"指導案・日誌")]','指導案・日誌');
                //Verify all records tab headings
                cy.xpath('//th[contains(text(),"領域")]').invoke('text').should('contain', '領域')
                cy.xpath('//th[contains(text(),"項目名")]').invoke('text').should('contain', '項目名')
                cy.xpath('//th[contains(text(),"項目名")]').should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
                cy.xpath('//th[contains(text(),"項目名")]').should('have.css', 'color').and('eq','rgb(92, 104, 115)')
                cy.xpath('//th[contains(text(),"項目名")]').should('have.css', 'font-size').and('eq', '12px');
                //Verify save and cancel
                cy.wait(4000)
                cy.saveandCancel();
                
                //Verify add button 
                cy.get('[class="tab-pane active"]').eq(1).within(()=>{
                    cy.get('.btn-primary').invoke('text').should('contain', '項目欄を追加')
              
                    cy.get('.btn-primary').should('have.css', 'color').and('eq','rgb(255, 255, 255)')
                    cy.get('.btn-primary').should('have.css', 'font-size').and('eq', '14px')  
                    cy.get('.btn-primary').should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
                })
                
                

                    //Verify Measure and Area botton 
                    .get('.btn-secondary').each(($li, index, $lis) => {
                    cy.get($li).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
                    cy.get($li).should('have.css', 'color').and('eq','rgb(255, 255, 255)')
                    cy.get($li).should('have.css', 'font-size').and('eq', '14px');
                   })

                    cy.get('.btn-secondary').eq(1).invoke('text').should('contain', '計測期間設定')
                    cy.get('.btn-secondary').eq(0).invoke('text').should('contain', '領域の設定')

                    
                    cy.get('[type="checkbox"]').each(($li, index, $lis) => {
                     cy.get($li).should("be.checked")
                    
                   })
                   //Verify table font
                    cy.get('[class="card-lables"]').nextUntil().last().each(($li, index, $lis) => {
                        cy.get($li).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
                        cy.get($li).should('have.css', 'color').and('eq','rgb(92, 104, 115)')
                        cy.get($li).should('have.css', 'font-size').and('eq', '12px');
                    })

                    //Verify table text 
                    cy.get('[class="card-lables"]').eq(0).invoke('text').should('contain', '領域')
                    cy.get('[class="card-lables"]').eq(1).invoke('text').should('contain', '項目名')

                    //Verify Table tab text 
                    cy.get('#__BVID__691___BV_tab_button__').invoke('text').should('contain', '生活')
                    cy.get('#__BVID__711___BV_tab_button__').invoke('text').should('contain', '環境')
                    cy.get('#__BVID__721___BV_tab_button__').invoke('text').should('contain', '言葉')
  
 
               })
        it('Measurement pop up screen content', () => {
                 cy.get('.btn-secondary').eq(1).click()
                //Verify Add button 
                cy.get('[class="tab-pane active"]').eq(1).within(()=>{
                    cy.get('.btn-primary').invoke('text').should('contain', '項目欄を追加')
                    cy.get('.btn-primary').should('have.css', 'color').and('eq','rgb(255, 255, 255)')
                    cy.get('.btn-primary').should('have.css', 'font-size').and('eq', '14px')  
                    cy.get('.btn-primary').should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
                })

                cy.get('#Period-setting___BV_modal_content_').within(()=>{
                    //Verify titile 
                    cy.header('計測期間')


                //Verify Table Header
                cy.get('th').nextUntil().last().each(($li, index, $lis) => {
                    cy.get($li).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
                    cy.get($li).should('have.css', 'color').and('eq','rgb(92, 104, 115)')
                    cy.get($li).should('have.css', 'font-size').and('eq', '12px');
                })
                //Verify Table Title 
                cy.get('th').eq(1).invoke('text').should('contain', '期間名')
                cy.get('th').eq(2).invoke('text').should('contain', '計測月齢')
                cy.get('th').eq(3).invoke('text').should('contain', '計測間隔')
                //Verify save and cancel
                cy.saveandCancel();
               })
               //Verify toggle button
               cy.get('[type="checkbox"]').each(($li, index, $lis) => {
                cy.get($li).should("be.checked")
               
              })

              cy.get('.close').click()
              cy.wait(3000)
            })
            
        it('Area pop up screen content', () => {
                cy.get('.btn-secondary').eq(0).click()
                //Verify Add button 
                cy.get('[class="tab-pane active"]').eq(1).within(()=>{
                    cy.get('.btn-primary').invoke('text').should('contain', '項目欄を追加')
                    cy.get('.btn-primary').should('have.css', 'color').and('eq','rgb(255, 255, 255)')
                    cy.get('.btn-primary').should('have.css', 'font-size').and('eq', '14px')  
                    cy.get('.btn-primary').should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
                })

                //Verify Table Header
                cy.get('#area-setting___BV_modal_content_').within(()=>{
                //verify title
                cy.header('領域の設定')
                //Verify save and cancel
                cy.saveandCancel();
               })

              cy.get('.close').click()
              cy.wait(3000)
            })




})