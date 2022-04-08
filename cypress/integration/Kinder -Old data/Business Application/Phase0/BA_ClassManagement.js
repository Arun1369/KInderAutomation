/// <reference types="Cypress" />
import chaiColors from 'chai-colors'
chai.use(chaiColors)
require('cypress-xpath')

var masterScreenButton = '.fa-cogs';
var classmanagement = '//a[contains(text(),"クラス管理")]';
var classCreateButton = '//button[contains(text(),"クラスを追加")]';
var editgroupButton = '//button[contains(text(),"グループを編集")]';

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })

describe('Class Managment', () => {
    it('Verify class management', () => {
        cy.balogin();
        cy.get('#dropdown-form__BV_toggle_').click();
        cy.get(masterScreenButton).eq(0).click()
        cy.wait(6000)
        cy.debug()
        cy.xpath(classmanagement).click({ multiple: true })

        //Verify Tab title font,
        cy.masterSettingsTab(classmanagement,"クラス管理")
       
        cy.wait(3000)
       //Verify All text
        cy.get('[class="tab-pane active"]').within(()=>{
            cy.wait(3000)
            //Search option 
            cy.get('[type="text"]').eq(0).should("be.visible")
            //Verify All column Header font
            cy.columnHeader();
            //Verify Text 
            cy.get('[role="columnheader"]').filter('.contentAlign').eq(0).invoke('text').should('contain', 'クラス名')
            cy.get('[role="columnheader"]').filter('.contentAlign').eq(1).invoke('text').should('contain', '学年')
            cy.get('[role="columnheader"]').filter('.contentAlign').eq(2).invoke('text').should('contain', 'グループ')

            //Verify 3 dot explise option 
            cy.get('.fa-ellipsis-v').eq(1).click();
             cy.get('.dropdown-item').each(($li, index, $lis) => {
                cy.get($li).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
                cy.get($li).should('have.css', 'color').and('eq','rgb(35, 40, 44)');
                cy.get($li).should('have.css', 'font-size').and('eq', '14px');
                })
           
            //Verify Text

            cy.get('.dropdown-item').invoke('text').should('contain', '編集')
            cy.get('.dropdown-item').invoke('text').should('contain', '削除')

            //cy.xpath(classCreateButton).invoke('text').should('contain', 'クラスを追加')
            //cy.xpath(editgroupButton).invoke('text').should('contain', 'クラスを追加')
            //cy.xpath(editgroupButton).eq(1).invoke('text').should('contain', 'クラスを追加')
           //Check alll button font
           cy.createButton();

        })
    })


    it('Verify createClass UI', () => {
        cy.get('[class="tab-pane active"]').within(()=>{
        cy.xpath(classCreateButton).click({force:true})
       // cy.wait(5000)
      })
      cy.get('.modal-content').within(()=>{
        cy.registerLabelChecks()
        cy.labelandplaceHolder('クラス名','クラス名');
        cy.get('.register-lables').eq(1).invoke('text').should('contain', '学年')
        cy.get('.register-lables').eq(2).invoke('text').should('contain', 'グループ')
        //Varify save and cancel button
        cy.saveandCancel();
        //Verify Radio button label
        cy.radionButtonLabel();
        cy.checkBoxLabel();
        //Radio button text verification 
        cy.get('.custom-radio>label').eq(0).invoke('text').should('contain', '有効')
        cy.get('.custom-radio>label').eq(1).invoke('text').should('contain', '無効')
        
        cy.get('.custom-checkbox>label').eq(0).invoke('text').should('contain', 'グループ A')
        cy.get('.custom-checkbox>label').eq(1).invoke('text').should('contain', 'グループ B')
        cy.get('.custom-checkbox>label').eq(2).invoke('text').should('contain', 'グループ C')
        cy.get('.custom-checkbox>label').eq(3).invoke('text').should('contain', 'グループ D')
        //Verify the profile image
        cy.get('label > .b-avatar').should("be.visible")




    })
})


var masterScreenButton = '.fa-cogs';
var classManagement = 'a[href="#/setting/class"]';

describe('Edit group', () => {
    it('Verify Edit group Screen', () => {
        cy.balogin();
        cy.get('#dropdown-form__BV_toggle_ ').click();
        cy.get(masterScreenButton).eq(0).click({ multiple: true})
        cy.wait(6000)
        cy.debug()
        cy.get(classManagement).click({ multiple: true})
        cy.wait(3000)
       //Verify All text
        cy.get('[class="tab-pane active"]').within(()=>{
            cy.wait(3000)
            cy.get('.px-3').eq(2).click({ multiple: true})
        })
        //Verify Headers font
        cy.get('.modal-title').invoke('text').should('contain', '帰宅グループを編集')
        cy.get('.modal-title').should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
        cy.get('.modal-title').should('have.css', 'color').and('eq','rgb(66, 66, 66)')
        cy.get('.modal-title').should('have.css', 'font-size').and('eq', '17.5px');

        cy.get('.black-card').eq(4).within(()=>{
        //Verify for add button
        cy.createButton('│グループを追加')
        
        //Verify for fields
        cy.get('[type="text"]').eq(0).should('have.attr', 'placeholder', 'グループ名')
        cy.get('[type="checkbox"]').each(($el,index,$li)=>{
        cy.get($el).should("not.be.checked")
        cy.get('#iconblack').should('be.visible')
      })
     })
//Verify for save and cancel button
cy.saveandCancel();

//Verify for cross button
cy.get('.close').should('be.visible')
    })
  })
})