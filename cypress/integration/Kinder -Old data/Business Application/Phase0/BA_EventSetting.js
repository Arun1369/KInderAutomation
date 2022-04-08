/// <reference types="Cypress" />
import chaiColors from 'chai-colors'
chai.use(chaiColors)
require('cypress-xpath')

var masterScreenButton = '.fa-cogs';
var eventSettings = 'a[href="#/setting/event"]';
var saveButton = '//button[contains(text(),"保存")]'

describe('Event Settings', () => {
    it('Verify Event Settings Screen', () => {
        cy.balogin();
        cy.get('#dropdown-form__BV_toggle_ > img').click();
        cy.get(masterScreenButton).eq(0).click()
        cy.wait(6000)
        cy.debug()
        cy.get(eventSettings).click()

        //Verify Tab title font,
        cy.get(eventSettings).invoke('text').should('contain', 'カテゴリー管理')
        cy.get(eventSettings).should('have.css', 'color').and('eq','rgb(255, 255, 255)')
        cy.get(eventSettings).should('have.css', 'font-size').and('eq', '14px')
        cy.get(eventSettings).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
       
        cy.wait(3000)
      
        //Verify tab header
        cy.header('カテゴリー');

        cy.get('[class="animated fadeIn"]').eq(4).within(()=>{
        cy.get('#title').invoke('text').should('contain', 'カテゴリー管理')
        cy.get('#title').should('have.css', 'color').and('eq','rgb(66, 66, 66)')
        cy.get('#title').should('have.css', 'font-size').and('eq', '17.5px')  
        cy.get('#title').should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
    
        //Verify for table header
        cy.get('.pb-0').eq(0).invoke('text').should('contain', '行事予定')
        cy.get('.pb-0').eq(1).invoke('text').should('contain', '園内連絡')
        cy.get('.pb-0').eq(2).invoke('text').should('contain', '園だより')
        cy.get('.pb-0').eq(3).invoke('text').should('contain', 'お知らせ')
        cy.get('.pb-0').each(($li, index, $lis) => {
        cy.get($li).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
        cy.get($li).should('have.css', 'color').and('eq','rgb(66, 66, 66)');
        cy.get($li).should('have.css', 'font-size').and('eq', '17.5px');

        })

        //Verify for Add button
        cy.get('.px-4').invoke('text').should('contain', 'カテゴリー追加')
        cy.get('.px-4').should('have.css', 'color').and('eq','rgb(255, 255, 255)')
        cy.get('.px-4').should('have.css', 'font-size').and('eq', '14px')  
        cy.get('.px-4').should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)

        //Verify for Event table data
        cy.get('.col-12').eq(0).within(()=>{

        cy.get('.pl-3').eq(0).invoke('text').should('contain', 'ひよこ')
        cy.get('.pl-3').eq(1).invoke('text').should('contain', 'りす')
        cy.get('.pl-3').eq(2).invoke('text').should('contain', '園外活動')
        cy.get('.form-control').first().should('have.attr', 'placeholder', 'カテゴリー名')
        cy.get('.Cursor').should('be.visible')
        cy.get('.dragger-custom').should('be.visible')
        cy.get('.pl-3').each(($li, index, $lis) => {
        cy.get($li).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
        cy.get($li).should('have.css', 'color').and('eq','rgb(66, 66, 66)');
        cy.get($li).should('have.css', 'font-size').and('eq', '14px');

        })
        })
        
        //Verify for Contact in the park
        cy.get('.col-12').eq(1).within(()=>{
        cy.get('.pl-3').eq(0).invoke('text').should('contain', '園内連絡')
        cy.get('.form-control').first().should('have.attr', 'placeholder', 'カテゴリー名')
        cy.get('.Cursor').should('be.visible')
        cy.get('.dragger-custom').should('be.visible')
        cy.get('.pl-3').each(($li, index, $lis) => {
        cy.get($li).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
        cy.get($li).should('have.css', 'color').and('eq','rgb(66, 66, 66)');
        cy.get($li).should('have.css', 'font-size').and('eq', '14px');
    
        })
        })
            
        //Verify for News from the garden
        cy.get('.col-12').eq(2).within(()=>{
            cy.get('.pl-3').eq(0).invoke('text').should('contain', '園だより')
            cy.get('.form-control').first().should('have.attr', 'placeholder', 'カテゴリー名')
            cy.get('.Cursor').should('be.visible')
            cy.get('.dragger-custom').should('be.visible')
            cy.get('.pl-3').each(($li, index, $lis) => {
            cy.get($li).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
            cy.get($li).should('have.css', 'color').and('eq','rgb(66, 66, 66)');
            cy.get($li).should('have.css', 'font-size').and('eq', '14px');
        
            })
            })
             
            //Verify for Notice
            cy.get('.col-12').eq(3).within(()=>{
                cy.get('.pl-3').eq(0).invoke('text').should('contain', 'お知らせ')
                cy.get('.form-control').first().should('have.attr', 'placeholder', 'カテゴリー名')
                cy.get('.Cursor').should('be.visible')
                cy.get('.dragger-custom').should('be.visible')
                cy.get('.pl-3').each(($li, index, $lis) => {
                cy.get($li).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
                cy.get($li).should('have.css', 'color').and('eq','rgb(66, 66, 66)');
                cy.get($li).should('have.css', 'font-size').and('eq', '14px');
            
                })
                })
            })
         //Verify for save button
         cy.get('.ml-2').eq(21).invoke('text').should('contain', '保存')
         cy.get('.ml-2').eq(21).should('have.css', 'color').and('eq','rgb(255, 255, 255)')
         cy.get('.ml-2').eq(21).should('have.css', 'font-size').and('eq', '14px')  
         cy.get('.ml-2').eq(21).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
     })
    })


       
    
    
