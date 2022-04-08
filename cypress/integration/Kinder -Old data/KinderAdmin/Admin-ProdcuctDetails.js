/// <reference types="Cypress" />
import chaiColors from 'chai-colors'
chai.use(chaiColors)
//import { URL } from ' ../lib/env.js '
//Cypress.env("url");

require('cypress-xpath')


var prodcutMaster = '//div[contains(text(),"商品マスタ")]';
var productList = '[href="#/product"]';

var createNewButton = '//a[contains(text(),"編集")]';  //Xpath




describe('Product Details', () => {
    it('Verify Prodcut details page', () => {
        cy.login();
       
       
        cy.xpath(prodcutMaster).click();
        cy.get(productList).click();
        cy.wait(2000);
        cy.get('td').eq(5).click();
        cy.get('h5').invoke('text').should('contain', '商品名')
        cy.get('h5').should('have.css', 'color').and('eq','rgb(0, 0, 0)')
        cy.get('h5').should('have.css', 'font-size').and('eq', '17.5px')  


        cy.xpath('//a[contains(text(),"商品情報")]').invoke('text').should('contain', '商品情報')
        cy.get('h5').invoke('text').should('contain', '商品名')
        cy.get('h5').should('have.css', 'color').and('eq','rgb(0, 0, 0)')
        cy.get('h5').should('have.css', 'font-size').and('eq', '14.5px')  

        //Verify Lable Text
        cy.get('.register-lables').eq(1).should('contain', '商品名')
        cy.get('.register-lables').eq(2).should('contain', '基本契約内容')
        cy.get('.register-lables').eq(3).should('contain', 'オプション内容')
        cy.get('.register-lables').eq(4).should('contain', '合計金額')
        cy.get('.register-lables').eq(5).should('contain', '代理店報酬額')
        cy.get('.register-lables').eq(6).should('contain', '払込方法')
        cy.get('.register-lables').eq(7).should('contain', '支払方法')
        cy.get('.register-lables').eq(8).should('contain', '備考')
        cy.get('.register-lables').eq(9).should('contain', '利用ステータス')
        

        //Verify All labels
        cy.get('.register-lables').each(($el,index,$li)=>{
            cy.get($li).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
            cy.get($li).should('have.css', 'color').and('eq','rgb(92, 104, 115)')
            cy.get($li).should('have.css', 'font-size').and('eq', '12px');
           
        })

       //Verify table text 

       cy.get('th[role="columnheader"]').each(($li, index, $lis) => {
        cy.get($li).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
        cy.get($li).should('have.css', 'color').and('eq','rgb(92, 104, 115)')
        cy.get($li).should('have.css', 'font-size').and('eq', '12px');
       
      });

      //verify text of table

      cy.get('[aria-colindex="1"] > div').invoke('text').should('contain', '期間') 
      cy.get('.alignRight > div').invoke('text').should('contain', 'キャンペーン名') 
      cy.get('thead > tr > [aria-colindex="3"]').invoke('text').should('contain', '割引金額') 
      
        //verify create button
        cy.xpath(createNewButton).invoke('text').should('contain', '編集')
        cy.xpath(createNewButton).should('have.css', 'color').and('eq','rgb(255, 255, 255)')
        cy.xpath(createNewButton).should('have.css', 'font-size').and('eq', '14px');
        cy.xpath(createNewButton).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)










    })
})