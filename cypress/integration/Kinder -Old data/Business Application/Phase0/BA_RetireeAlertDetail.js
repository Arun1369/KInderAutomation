/// <reference types="Cypress" />
import chaiColors from 'chai-colors'
chai.use(chaiColors)
require('cypress-xpath')
var labels = '.register-lables';
var clickmastersetting = '.fa-cogs';
var retireAlter = 'a[href="#/setting/quit"]'
var font = /"Noto Sans JP", sans-serif/

describe('Retiree alert detailMain Menu', () => {
   it('Verify Leave early Screen', () => {
      cy.balogin();
      cy.get('#dropdown-form__BV_toggle_').click();
      cy.wait(2000)
      cy.get(clickmastersetting).first().click();
      cy.wait(4000)
      cy.get(retireAlter).click().click({multiple:true});
      cy.get('.tdfullname').eq(1).click();
    
      //Verify for header
      cy.header('離職アラート詳細│長谷川美由紀');
    
      //Verify for calender
      cy.get('#link-button').should('be.visible')
      //Verify for Be late tab
      cy.get('.modal-content').within(()=>{
      cy.get('.nav-item').eq(1).click()
      cy.get('.nav-item').eq(1).invoke('text').should('contain', '遅刻')
      cy.get('.nav-item').eq(1).should('have.css', 'font-size').and('eq', '14px')  
      cy.get('.nav-item').eq(1).should('have.css', 'font-family').and('match',font)
      cy.get('.nav-item').eq(1).should('have.css', 'color').and('eq','rgb(66, 66, 66)')
    
      //Verify for chart
      cy.get('.chartjs-render-monitor').should('be.visible')
    
      //Verify for table columns and rows
      cy.get('#col1').each(($li, index, $lis) => {
      cy.get($li).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
      cy.get($li).should('have.css', 'color').and('eq','rgb(66, 66, 66)')
      cy.get($li).should('have.css', 'font-size').and('eq', '12px');
      });
      cy.get('#col1').eq(1).invoke('text').should('contain', '4 月')
      cy.get('#col1').eq(2).invoke('text').should('contain', '5 月')
      cy.get('#col1').eq(3).invoke('text').should('contain', '6 月')
      cy.get('#col1').eq(4).invoke('text').should('contain', '7 月')
      cy.get('#col1').eq(5).invoke('text').should('contain', '8 月')
      cy.get('#col1').eq(6).invoke('text').should('contain', '9 月')
      cy.get('#col1').eq(7).invoke('text').should('contain', '10 月')
      cy.get('#col1').eq(8).invoke('text').should('contain', '11 月')
      cy.get('#col1').eq(9).invoke('text').should('contain', '12 月')
      cy.get('#col1').eq(10).invoke('text').should('contain', '1 月')
      cy.get('#col1').eq(11).invoke('text').should('contain', '2 月')
      cy.get('#col1').eq(12).invoke('text').should('contain', '3 月')
    
          cy.get('.wd-tbl').each(($li, index, $lis) => {
          cy.get($li).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
          cy.get($li).should('have.css', 'color').and('eq','rgb(66, 66, 66)')
          cy.get($li).should('have.css', 'font-size').and('eq', '12px');
          });
          cy.get('.wd-tbl').eq(0).invoke('text').should('contain', '遅刻')
          cy.get('.wd-tbl').eq(13).invoke('text').should('contain', '早退')
          cy.get('.wd-tbl').eq(26).invoke('text').should('contain', '有給取得')
          cy.get('.wd-tbl').eq(39).invoke('text').should('contain', '気分')
          cy.get('.wd-tbl').eq(52).invoke('text').should('contain', '閾値')
         
       //Verify Close button
       //cy.get('.close').should('be.visible')
    });
    })

    it('Verify Be late tab Screen', () => {
        cy.balogin();
        cy.get('#dropdown-form__BV_toggle_').click();
        cy.wait(2000)
        cy.get(clickmastersetting).first().click();
        cy.wait(4000)
        cy.get(retireAlter).click().click({multiple:true});
        cy.get('.tdfullname').eq(1).click();

        //Verify for header
        cy.header('離職アラート詳細│長谷川美由紀');

        //Verify for calender
        cy.get('#link-button').should('be.visible')
        //Verify for Be late tab
        cy.get('.modal-content').within(()=>{
        cy.get('.nav-item').eq(2).click()
        cy.get('.nav-item').eq(2).invoke('text').should('contain', '早退')
        cy.get('.nav-item').eq(2).should('have.css', 'font-size').and('eq', '14px')  
        cy.get('.nav-item').eq(2).should('have.css', 'font-family').and('match',font)
        cy.get('.nav-item').eq(2).should('have.css', 'color').and('eq','rgb(66, 66, 66)')

        //Verify for chart
        cy.get('.chartjs-render-monitor').should('be.visible')

        //Verify for table columns and rows
        cy.get('#col1').each(($li, index, $lis) => {
        cy.get($li).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
        cy.get($li).should('have.css', 'color').and('eq','rgb(66, 66, 66)')
        cy.get($li).should('have.css', 'font-size').and('eq', '12px');
        });
        cy.get('#col1').eq(1).invoke('text').should('contain', '4 月')
        cy.get('#col1').eq(2).invoke('text').should('contain', '5 月')
        cy.get('#col1').eq(3).invoke('text').should('contain', '6 月')
        cy.get('#col1').eq(4).invoke('text').should('contain', '7 月')
        cy.get('#col1').eq(5).invoke('text').should('contain', '8 月')
        cy.get('#col1').eq(6).invoke('text').should('contain', '9 月')
        cy.get('#col1').eq(7).invoke('text').should('contain', '10 月')
        cy.get('#col1').eq(8).invoke('text').should('contain', '11 月')
        cy.get('#col1').eq(9).invoke('text').should('contain', '12 月')
        cy.get('#col1').eq(10).invoke('text').should('contain', '1 月')
        cy.get('#col1').eq(11).invoke('text').should('contain', '2 月')
        cy.get('#col1').eq(12).invoke('text').should('contain', '3 月')

            cy.get('.wd-tbl').each(($li, index, $lis) => {
            cy.get($li).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
            cy.get($li).should('have.css', 'color').and('eq','rgb(66, 66, 66)')
            cy.get($li).should('have.css', 'font-size').and('eq', '12px');
            });
            cy.get('.wd-tbl').eq(0).invoke('text').should('contain', '遅刻')
            cy.get('.wd-tbl').eq(13).invoke('text').should('contain', '早退')
            cy.get('.wd-tbl').eq(26).invoke('text').should('contain', '有給取得')
            cy.get('.wd-tbl').eq(39).invoke('text').should('contain', '気分')
            cy.get('.wd-tbl').eq(52).invoke('text').should('contain', '閾値')
           
         //Verify Close button
         //cy.get('.close').should('be.visible')
    });
  })
//})



it('Verify To get Screen', () => {
  cy.balogin();
  cy.get('#dropdown-form__BV_toggle_').click();
  cy.wait(2000)
  cy.get(clickmastersetting).first().click();
  cy.wait(4000)
  cy.get(retireAlter).click().click({multiple:true});
  cy.get('.tdfullname').eq(1).click();

  //Verify for header
  cy.header('離職アラート詳細│長谷川美由紀');

  //Verify for calender
  cy.get('#link-button').should('be.visible')
  //Verify for Be late tab
  cy.get('.modal-content').within(()=>{
  cy.get('.nav-item').eq(3).click()
  cy.get('.nav-item').eq(3).invoke('text').should('contain', '有給取得')
  cy.get('.nav-item').eq(3).should('have.css', 'font-size').and('eq', '14px')  
  cy.get('.nav-item').eq(3).should('have.css', 'font-family').and('match',font)
  cy.get('.nav-item').eq(3).should('have.css', 'color').and('eq','rgb(66, 66, 66)')

  //Verify for chart
  cy.get('.chartjs-render-monitor').should('be.visible')

  //Verify for table columns and rows
  cy.get('#col1').each(($li, index, $lis) => {
  cy.get($li).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
  cy.get($li).should('have.css', 'color').and('eq','rgb(66, 66, 66)')
  cy.get($li).should('have.css', 'font-size').and('eq', '12px');
  });
  cy.get('#col1').eq(1).invoke('text').should('contain', '4 月')
  cy.get('#col1').eq(2).invoke('text').should('contain', '5 月')
  cy.get('#col1').eq(3).invoke('text').should('contain', '6 月')
  cy.get('#col1').eq(4).invoke('text').should('contain', '7 月')
  cy.get('#col1').eq(5).invoke('text').should('contain', '8 月')
  cy.get('#col1').eq(6).invoke('text').should('contain', '9 月')
  cy.get('#col1').eq(7).invoke('text').should('contain', '10 月')
  cy.get('#col1').eq(8).invoke('text').should('contain', '11 月')
  cy.get('#col1').eq(9).invoke('text').should('contain', '12 月')
  cy.get('#col1').eq(10).invoke('text').should('contain', '1 月')
  cy.get('#col1').eq(11).invoke('text').should('contain', '2 月')
  cy.get('#col1').eq(12).invoke('text').should('contain', '3 月')

      cy.get('.wd-tbl').each(($li, index, $lis) => {
      cy.get($li).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
      cy.get($li).should('have.css', 'color').and('eq','rgb(66, 66, 66)')
      cy.get($li).should('have.css', 'font-size').and('eq', '12px');
      });
      cy.get('.wd-tbl').eq(0).invoke('text').should('contain', '遅刻')
      cy.get('.wd-tbl').eq(13).invoke('text').should('contain', '早退')
      cy.get('.wd-tbl').eq(26).invoke('text').should('contain', '有給取得')
      cy.get('.wd-tbl').eq(39).invoke('text').should('contain', '気分')
      cy.get('.wd-tbl').eq(52).invoke('text').should('contain', '閾値')
     
   //Verify Close button
   //cy.get('.close').should('be.visible')
});
})

it('Verify Feeling Screen', () => {
  cy.balogin();
  cy.get('#dropdown-form__BV_toggle_').click();
  cy.wait(2000)
  cy.get(clickmastersetting).first().click();
  cy.wait(4000)
  cy.get(retireAlter).click().click({multiple:true});
  cy.get('.tdfullname').eq(1).click();

  //Verify for header
  cy.header('離職アラート詳細│長谷川美由紀');

  //Verify for calender
  cy.get('#link-button').should('be.visible')
  //Verify for Be late tab
  cy.get('.modal-content').within(()=>{
  cy.get('.nav-item').eq(4).click()
  cy.get('.nav-item').eq(4).invoke('text').should('contain', '気分')
  cy.get('.nav-item').eq(4).should('have.css', 'font-size').and('eq', '14px')  
  cy.get('.nav-item').eq(4).should('have.css', 'font-family').and('match',font)
  cy.get('.nav-item').eq(4).should('have.css', 'color').and('eq','rgb(66, 66, 66)')

  //Verify for chart
  cy.get('.chartjs-render-monitor').should('be.visible')

  //Verify for table columns and rows
  cy.get('#col1').each(($li, index, $lis) => {
  cy.get($li).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
  cy.get($li).should('have.css', 'color').and('eq','rgb(66, 66, 66)')
  cy.get($li).should('have.css', 'font-size').and('eq', '12px');
  });
  cy.get('#col1').eq(1).invoke('text').should('contain', '4 月')
  cy.get('#col1').eq(2).invoke('text').should('contain', '5 月')
  cy.get('#col1').eq(3).invoke('text').should('contain', '6 月')
  cy.get('#col1').eq(4).invoke('text').should('contain', '7 月')
  cy.get('#col1').eq(5).invoke('text').should('contain', '8 月')
  cy.get('#col1').eq(6).invoke('text').should('contain', '9 月')
  cy.get('#col1').eq(7).invoke('text').should('contain', '10 月')
  cy.get('#col1').eq(8).invoke('text').should('contain', '11 月')
  cy.get('#col1').eq(9).invoke('text').should('contain', '12 月')
  cy.get('#col1').eq(10).invoke('text').should('contain', '1 月')
  cy.get('#col1').eq(11).invoke('text').should('contain', '2 月')
  cy.get('#col1').eq(12).invoke('text').should('contain', '3 月')

      cy.get('.wd-tbl').each(($li, index, $lis) => {
      cy.get($li).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
      cy.get($li).should('have.css', 'color').and('eq','rgb(66, 66, 66)')
      cy.get($li).should('have.css', 'font-size').and('eq', '12px');
      });
      cy.get('.wd-tbl').eq(0).invoke('text').should('contain', '遅刻')
      cy.get('.wd-tbl').eq(13).invoke('text').should('contain', '早退')
      cy.get('.wd-tbl').eq(26).invoke('text').should('contain', '有給取得')
      cy.get('.wd-tbl').eq(39).invoke('text').should('contain', '気分')
      cy.get('.wd-tbl').eq(52).invoke('text').should('contain', '閾値')
     
   //Verify Close button
   //cy.get('.close').should('be.visible')
});
})

it('Verify Threshold Screen', () => {
  cy.balogin();
  cy.get('#dropdown-form__BV_toggle_').click();
  cy.wait(2000)
  cy.get(clickmastersetting).first().click();
  cy.wait(4000)
  cy.get(retireAlter).click().click({multiple:true});
  cy.get('.tdfullname').eq(1).click();

  //Verify for header
  cy.header('離職アラート詳細│長谷川美由紀');

  //Verify for calender
  cy.get('#link-button').should('be.visible')
  //Verify for Be late tab
  cy.get('.modal-content').within(()=>{
  cy.get('.nav-item').eq(5).click()
  cy.get('.nav-item').eq(5).invoke('text').should('contain', '閾値')
  cy.get('.nav-item').eq(5).should('have.css', 'font-size').and('eq', '14px')  
  cy.get('.nav-item').eq(5).should('have.css', 'font-family').and('match',font)
  cy.get('.nav-item').eq(5).should('have.css', 'color').and('eq','rgb(66, 66, 66)')

  //Verify for chart
  cy.get('.chartjs-render-monitor').should('be.visible')

  //Verify for table columns and rows
  cy.get('#col1').each(($li, index, $lis) => {
  cy.get($li).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
  cy.get($li).should('have.css', 'color').and('eq','rgb(66, 66, 66)')
  cy.get($li).should('have.css', 'font-size').and('eq', '12px');
  });
  cy.get('#col1').eq(1).invoke('text').should('contain', '4 月')
  cy.get('#col1').eq(2).invoke('text').should('contain', '5 月')
  cy.get('#col1').eq(3).invoke('text').should('contain', '6 月')
  cy.get('#col1').eq(4).invoke('text').should('contain', '7 月')
  cy.get('#col1').eq(5).invoke('text').should('contain', '8 月')
  cy.get('#col1').eq(6).invoke('text').should('contain', '9 月')
  cy.get('#col1').eq(7).invoke('text').should('contain', '10 月')
  cy.get('#col1').eq(8).invoke('text').should('contain', '11 月')
  cy.get('#col1').eq(9).invoke('text').should('contain', '12 月')
  cy.get('#col1').eq(10).invoke('text').should('contain', '1 月')
  cy.get('#col1').eq(11).invoke('text').should('contain', '2 月')
  cy.get('#col1').eq(12).invoke('text').should('contain', '3 月')

      cy.get('.wd-tbl').each(($li, index, $lis) => {
      cy.get($li).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
      cy.get($li).should('have.css', 'color').and('eq','rgb(66, 66, 66)')
      cy.get($li).should('have.css', 'font-size').and('eq', '12px');
      });
      cy.get('.wd-tbl').eq(0).invoke('text').should('contain', '遅刻')
      cy.get('.wd-tbl').eq(13).invoke('text').should('contain', '早退')
      cy.get('.wd-tbl').eq(26).invoke('text').should('contain', '有給取得')
      cy.get('.wd-tbl').eq(39).invoke('text').should('contain', '気分')
      cy.get('.wd-tbl').eq(52).invoke('text').should('contain', '閾値')
     
   //Verify Close button
   //cy.get('.close').should('be.visible')
});
})

it('Verify Show all Screen', () => {
  cy.balogin();
  cy.get('#dropdown-form__BV_toggle_').click();
  cy.wait(2000)
  cy.get(clickmastersetting).first().click();
  cy.wait(4000)
  cy.get(retireAlter).click().click({multiple:true});
  cy.get('.tdfullname').eq(1).click();

  //Verify for header
  cy.header('離職アラート詳細│長谷川美由紀');

  //Verify for calender
  cy.get('#link-button').should('be.visible')
  //Verify for Be late tab
  cy.get('.modal-content').within(()=>{
  cy.get('.nav-item').eq(6).click()
  cy.get('.nav-item').eq(6).invoke('text').should('contain', '全て表示')
  cy.get('.nav-item').eq(6).should('have.css', 'font-size').and('eq', '14px')  
  cy.get('.nav-item').eq(6).should('have.css', 'font-family').and('match',font)
  cy.get('.nav-item').eq(6).should('have.css', 'color').and('eq','rgb(66, 66, 66)')

  //Verify for chart
  cy.get('.chartjs-render-monitor').should('be.visible')

  //Verify for table columns and rows
  cy.get('#col1').each(($li, index, $lis) => {
  cy.get($li).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
  cy.get($li).should('have.css', 'color').and('eq','rgb(66, 66, 66)')
  cy.get($li).should('have.css', 'font-size').and('eq', '12px');
  });
  cy.get('#col1').eq(1).invoke('text').should('contain', '4 月')
  cy.get('#col1').eq(2).invoke('text').should('contain', '5 月')
  cy.get('#col1').eq(3).invoke('text').should('contain', '6 月')
  cy.get('#col1').eq(4).invoke('text').should('contain', '7 月')
  cy.get('#col1').eq(5).invoke('text').should('contain', '8 月')
  cy.get('#col1').eq(6).invoke('text').should('contain', '9 月')
  cy.get('#col1').eq(7).invoke('text').should('contain', '10 月')
  cy.get('#col1').eq(8).invoke('text').should('contain', '11 月')
  cy.get('#col1').eq(9).invoke('text').should('contain', '12 月')
  cy.get('#col1').eq(10).invoke('text').should('contain', '1 月')
  cy.get('#col1').eq(11).invoke('text').should('contain', '2 月')
  cy.get('#col1').eq(12).invoke('text').should('contain', '3 月')

      cy.get('.wd-tbl').each(($li, index, $lis) => {
      cy.get($li).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
      cy.get($li).should('have.css', 'color').and('eq','rgb(66, 66, 66)')
      cy.get($li).should('have.css', 'font-size').and('eq', '12px');
      });
      cy.get('.wd-tbl').eq(0).invoke('text').should('contain', '遅刻')
      cy.get('.wd-tbl').eq(13).invoke('text').should('contain', '早退')
      cy.get('.wd-tbl').eq(26).invoke('text').should('contain', '有給取得')
      cy.get('.wd-tbl').eq(39).invoke('text').should('contain', '気分')
      cy.get('.wd-tbl').eq(52).invoke('text').should('contain', '閾値')
     
   //Verify Close button
   //cy.get('.close').should('be.visible')
});
})
})