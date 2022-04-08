import chaiColors from 'chai-colors'
chai.use(chaiColors)
require('cypress-xpath')
var labels = '.register-lables';
var  clicknewsfromgarden = '//a[contains(text(),"園だより")]';

// 
describe('News from kinder', () => {
    it('Verify screen content', () => {
        cy.balogin();
        cy.get('#dropdown-form__BV_toggle_').click();
        cy.wait(4000)
        cy.get('[role="tab"]').invoke('text').should('contain', '園内連絡')
        cy.wait(4000)
        cy.get('.custom-menu-aside-dropdown > :nth-child(5) > .fa').click({multiple:true});
        cy.wait(4000)
        cy.get('[class="nav nav-tabs"]').within(()=>{
        cy.get('[role="tab"]').invoke('text').should('contain', '園だより')
        
        cy.wait(4000)
        cy.xpath(clicknewsfromgarden).click()
        cy.activeTabtitle('園だより');
        cy.wait(4000)
        
})
    })
        it('Verify pop up content', () => {
        cy.visit('http://119.82.96.68/kinder-bweb/#/message/letter/new')
        cy.wait(4000)
        //cy.header('園だより');
        cy.get('h5').invoke('text').should('contain', '園だより')
        cy.get('h5').should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
        cy.get('h5').should('have.css', 'color').and('eq','rgb(66, 66, 66)')
        cy.get('h5').should('have.css', 'font-size').and('eq', '17.5px');
        //
        cy.get('[class="modal-content"]').within(()=>{
        //#kinder-news-modal___BV_modal_body_ > :nth-child(1) > .label-font
        cy.get('#kinder-news-modal___BV_modal_body_ > :nth-child(1) > .label-font').invoke('text').should('contain', '登録者 :')
        cy.get('#kinder-news-modal___BV_modal_body_ > :nth-child(1) > .label-font').should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
        cy.get('#kinder-news-modal___BV_modal_body_ > :nth-child(1) > .label-font').should('have.css', 'color').and('eq','rgb(92, 104, 115)')
        cy.get('#kinder-news-modal___BV_modal_body_ > :nth-child(1) > .label-font').should('have.css', 'font-size').and('eq', '12px');
        //
        cy.get('.custom-select').invoke('text').should('contain', 'カテゴリー')
        cy.get('.custom-select').should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
        cy.get('.custom-select').should('have.css', 'color').and('eq','rgb(66, 66, 66)')
        cy.get('.custom-select').should('have.css', 'font-size').and('eq', '14px');
        //
        cy.wait(2000)
        cy.get('[type="button"]').invoke('text').should('contain', 'テンプレート選択');
        cy.get('[type="button"]').should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
        cy.get('[type="button"]').should('have.css', 'color').and('eq','rgb(0, 0, 0)')
        cy.get('[type="button"]').should('have.css', 'font-size').and('eq', '21px');
        //
        var title = '.col-sm-6 > .mb-0'
        cy.get(title).should('contain', '日付 :')
        cy.get(title).should('have.css', 'font-size').and('eq', '12px');
        cy.get(title).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
        cy.get('[autocomplete="off"]').first().should('have.attr', 'placeholder', '年/月/日')
        //
        cy.wait(2000)
        cy.get('[type="button"]').invoke('text').should('contain', 'プレビュー');
        cy.get('[type="button"]').should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
        cy.get('[type="button"]').should('have.css', 'color').and('eq','rgb(0, 0, 0)')
        cy.get('[type="button"]').should('have.css', 'font-size').and('eq', '21px');
        //
        cy.get('.col-lg-4 > :nth-child(2) > .fa').should("be.visible");
        cy.get('.col-lg-4 > :nth-child(3) > .fa').should("be.visible");
        cy.get('.close').should("be.visible");
        //
        cy.get(labels).invoke('text').should('contain', 'タイトル')
        cy.get(labels).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
        cy.get(labels).should('have.css', 'color').and('eq','rgb(10, 201, 164)')
        cy.get(labels).should('have.css', 'font-size').and('eq', '12px');
        cy.get('[autocomplete="off"]').first().should('have.attr', 'placeholder', 'タイトルを入力')
        //template selection button
        cy.get('[type="button"]').should("be.visible");
        //cy.get('[type="button"]').should('have.css', 'color', 'rgb(10, 201, 164)');
        cy.get('[type="button"]').should('have.css', 'font-size').and('eq', '21px');
        cy.wait(2000)
        cy.get('[type="button"]').invoke('text').should('contain', 'テンプレート選択');
        
        //
        cy.get(':nth-child(7) > .mb-0').invoke('text').should('contain', '送信予約 :')
        cy.get(':nth-child(7) > .mb-0').should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
        cy.get(':nth-child(7) > .mb-0').should('have.css', 'color').and('eq','rgb(66, 66, 66)')
        cy.get(':nth-child(7) > .mb-0').should('have.css', 'font-size').and('eq', '12px');
        //
        cy.get('[type="button"]').invoke('text').should('contain', '申請する');
        cy.get('[type="button"]').should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
        cy.get('[type="button"]').should('have.css', 'color').and('eq','rgb(0, 0, 0)')
        cy.get('[type="button"]').should('have.css', 'font-size').and('eq', '21px');
        //
        cy.get('[type="button"]').invoke('text').should('contain', '下書き保存');
        cy.get('[type="button"]').should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
        cy.get('[type="button"]').should('have.css', 'color').and('eq','rgb(0, 0, 0)')
        cy.get('[type="button"]').should('have.css', 'font-size').and('eq', '21px');
        //
        cy.get('.active > .title').each(($li, index, $lis) => {
            cy.get($li).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
            cy.get($li).should('have.css', 'color').and('eq','rgb(66, 66, 66)');
            cy.get($li).should('have.css', 'font-size').and('eq', '11px');
            })
        cy.get('.active > .title').eq(0).invoke('text').should('contain', '作成中');
        cy.get('.active > .title').eq(1).invoke('text').should('contain', '下書き');
        cy.get('.active > .title').eq(2).invoke('text').should('contain', '申請中');
        cy.get('.active > .title').eq(3).invoke('text').should('contain', '承認済');
        //verification of delete icon 
        cy.get('.col-lg-12 > .col-lg-8').should("be.visible");
    
})
})
})

