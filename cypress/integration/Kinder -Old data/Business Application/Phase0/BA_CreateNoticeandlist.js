// <reference types="Cypress" />
import chaiColors from 'chai-colors'
chai.use(chaiColors)
require('cypress-xpath')
var contactParent = '.fa-address-book-o';
var noticeTab = '//a[contains(text(),"お知らせ")]';
var previewbButton = '//button[contains(text(),"プレビュー")]';
var saveDraft = '//button[contains(text(),"下書き保存")]';
var applyButton = '//button[contains(text(),"申請する")]'

describe('Contact from Parents', () => {
    it('Verify Event Settings Screen', () => {
        cy.balogin();
        cy.get('#dropdown-form__BV_toggle_ > img').click();
        cy.get(contactParent).eq(0).click()
        cy.wait(6000)
        cy.xpath(noticeTab).eq(1).click()
        cy.wait(6000)

        //Verify for Contact parent tab
        cy.xpath(noticeTab).invoke('text').should('contain', 'お知らせ')
        cy.xpath(noticeTab).should('have.css', 'background-color').and('eq','rgba(0, 0, 0, 0)')
        cy.xpath(noticeTab).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
        cy.xpath(noticeTab).should('have.css', 'font-size').and('eq', '14px')

        //Verify for Add button
        cy.createButton();

        //Verify for Search 
        cy.get('.form-control').eq(10).first().should('have.attr', 'placeholder', '検索')
        cy.get('.form-control').eq(10).should('have.css', 'color').and('eq','rgb(66, 66, 66)')
        cy.get('.form-control').eq(10).should('have.css', 'font-size').and('eq', '14px')  
        cy.get('.form-control').eq(10).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)

         cy.get('[class="tab-pane active"]').within(()=>{
        //Verify for Delivery destination and Status drop down
        cy.get('[class="custom-select"]').should('not.be.disabled')
        cy.get('.custom-select').each(($li, index, $lis) => {
        cy.get($li).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
        cy.get($li).should('have.css', 'color').and('eq','rgb(66, 66, 66)')
        cy.get($li).should('have.css', 'font-size').and('eq', '14px');
        });
        cy.get('.custom-select').invoke('text').should('contain', '配信先')
        cy.get('.custom-select').invoke('text').should('contain', '状態')

        
        //Verify for column header
        cy.get('th').each(($li, index, $lis) => {
        cy.get($li).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
        cy.get($li).should('have.css', 'color').and('eq','rgb(66, 66, 66)')
        cy.get($li).should('have.css', 'font-size').and('eq', '12px');
        });
        cy.get('th').eq(0).should("not.be.checked")
        cy.get('th').eq(1).invoke('text').should('contain', 'タイトル')
        cy.get('th').eq(2).invoke('text').should('contain', '配信先')
        cy.get('th').eq(3).invoke('text').should('contain', '配信日時')
        cy.get('th').eq(4).invoke('text').should('contain', '登録者')
        cy.get('th').eq(5).invoke('text').should('contain', '状態')
        cy.get('.dropdown').should("be.visible")

         //Verify checkbox label
         cy.checkBoxLabel();
         cy.get('[class="custom-control-label"]').invoke('text').should('contain', '送信済みも表示')

         //Verify delete button and text
         cy.get('.dropdown').eq(0).click()
         cy.get('.fa-trash').should('be.visible')
         cy.get('.dropdown-item').first().invoke('text').should('contain', '削除')
         cy.get('.dropdown-item').should('have.css', 'color').and('eq','rgb(35, 40, 44)')
         cy.get('.dropdown-item').should('have.css', 'font-size').and('eq', '14px')  
         cy.get('.dropdown-item').should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)

        //})
   })
})

it('Verify create pop up screen content', () => {
    cy.visit('http://119.82.96.68/kinder-bweb/#/message/information/new')
    //cy.get('[class="tab-pane active"]').within(()=>{
    //cy.get('.fa-plus').eq(0).click();
       //})
    cy.get('.modal-content').within(()=>{
        //Verify header
        cy.get('h5').invoke('text').should('contain', 'お知らせ') 
        cy.get('h5').should('have.css', 'font-size').and('eq', '17.5px')  
        cy.get('h5').should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
        cy.get('h5').should('have.css', 'color').and('eq','rgb(66, 66, 66)')

        cy.get('.label-color').invoke('text').should('contain', '登録者 :')
        cy.get('.label-color').invoke('text').should('contain', '長谷川美由紀')
        cy.get('.label-color').should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
        cy.get('.label-color').should('have.css', 'color').and('eq','rgb(92, 104, 115)')
        cy.get('.label-color').should('have.css', 'font-size').and('eq', '12px');
           
        cy.get('.mb-0').eq(0).invoke('text').should('contain', '日付 :')
        cy.get('.mb-0').eq(0).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
        cy.get('.mb-0').eq(0).should('have.css', 'color').and('eq','rgb(66, 66, 66)')
        cy.get('.mb-0').eq(0).should('have.css', 'font-size').and('eq', '12px');

        //Verify Date pickers
        cy.get('[name="date"]').should('not.be.disabled')
        cy.get('[class="custom-select"]').should('not.be.disabled')

        //Verify for title
        cy.get('.register-lables').invoke('text').should('contain', 'タイトル')
        cy.get('.register-lables').should('have.css', 'color').and('eq','rgb(92, 104, 115)')
        cy.get('.register-lables').should('have.css', 'font-size').and('eq', '12px')
        cy.get('.register-lables').should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
        //Verify for title input field
        cy.get('.inputField').first().should('have.attr', 'placeholder', 'タイトルを入力')
        cy.get('.inputField').should('have.css', 'color').and('eq','rgb(66, 66, 66)')
        cy.get('.inputField').should('have.css', 'font-size').and('eq', '14px')
        cy.get('.inputField').should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)

        //Verify preview button
        cy.xpath(previewbButton).invoke('text').should('contain', 'プレビュー')
        cy.xpath(previewbButton).should('have.css', 'color').and('eq','rgb(10, 201, 164)')
        cy.xpath(previewbButton).should('have.css', 'font-size').and('eq', '14px')  
        cy.xpath(previewbButton).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
        
        //Verify for status 
        cy.get('.title').each(($li, index, $lis) => {
        cy.get($li).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
        cy.get($li).should('have.css', 'color').and('eq','rgb(66, 66, 66)')
        cy.get($li).should('have.css', 'font-size').and('eq', '11px');
        });
        cy.get('.title').eq(0).invoke('text').should('contain', '作成中')
        cy.get('.title').eq(1).invoke('text').should('contain', '下書き')
        cy.get('.title').eq(2).invoke('text').should('contain', '申請中')
        cy.get('.title').eq(3).invoke('text').should('contain', '承認済')

        cy.get('.text-sm-left').invoke('text').should('contain', 'ファイルをここにドラッグするか')
        cy.get('.d-lg-inline').invoke('text').should('contain', 'ファイルを選択してください。')
        cy.get('.custom-file-label').invoke('text').should('contain', 'ファイルが選択されていません')
        cy.get('.custom-file-label').should('have.css', 'color').and('eq','rgb(92, 104, 115)')
        cy.get('.custom-file-label').should('have.css', 'font-size').and('eq', '14px')
        cy.get('.custom-file-label').should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)

        //Verify save draft button
        cy.xpath(saveDraft).invoke('text').should('contain', '下書き保存')
        cy.xpath(saveDraft).should('have.css', 'color').and('eq','rgb(10, 201, 164)')
        cy.xpath(saveDraft).should('have.css', 'font-size').and('eq', '14px')  
        cy.xpath(saveDraft).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)

        //Verify apply button
        cy.xpath(applyButton).invoke('text').should('contain', '申請する')
        cy.xpath(applyButton).should('have.css', 'color').and('eq','rgb(255, 255, 255)')
        cy.xpath(applyButton).should('have.css', 'font-size').and('eq', '14px')  
        cy.xpath(applyButton).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
        //
        cy.get('[type="button"]').invoke('text').should('contain', 'テンプレート選択');
        cy.get('[type="button"]').should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
        cy.get('[type="button"]').should('have.css', 'color').and('eq','rgb(0, 0, 0)')
        cy.get('[type="button"]').should('have.css', 'font-size').and('eq', '21px');
        //
        cy.get('.custom-select').invoke('text').should('contain', 'カテゴリー')
        cy.get('.custom-select').should('have.css', 'color').and('eq','rgb(66, 66, 66)')
        cy.get('.custom-select').should('have.css', 'font-size').and('eq', '14px')  
        cy.get('.custom-select').should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
        //
        var title = '.col-sm-6 > .mb-0'
        cy.get(title).should('contain', '日付 :')
        cy.get(title).should('have.css', 'font-size').and('eq', '12px');
        cy.get(title).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
        cy.get('[autocomplete="off"]').first().should('have.attr', 'placeholder', '年/月/日')
        //Verify delete button 
        //cy.get('.mt-md-1').should('be.visible')

        //Verify Close button
        cy.get('.close').click();
        

    })

})

})