import chaiColors from 'chai-colors'
chai.use(chaiColors)

var mainMenu = '//div[contains(text(),"コンテンツ管理")]';
var chatSubMenu = 'a[href="#/content/chat"]';
var title = '.kinder-label';
var chatHeader= '[class="chat-form-header"]>div'

describe('Chat Management', () => {
    it('Verify Chat Management Screen Content', () => {
        cy.login();

        //Verification for Main Menu
        cy.xpath(mainMenu).click();
        cy.xpath(mainMenu).invoke('text').should('contain', 'コンテンツ管理')
        cy.xpath(mainMenu).should('have.css', 'color').and('eq','rgb(255, 255, 255)')
        cy.xpath(mainMenu).should('have.css', 'font-size').and('eq', '14px');

        //verification for submenu
        cy.get(chatSubMenu).first().click()
        cy.get(chatSubMenu).invoke('text').should('contain', 'チャット管理')
        cy.get(chatSubMenu).should('have.css', 'color').and('eq','rgb(255, 255, 255)')
        cy.get(chatSubMenu).should('have.css', 'font-size').and('eq', '14px')  
        cy.wait(1000)

        //Verification for Page title
        cy.get(title).should('be.visible')
        cy.get(title).invoke('text').should('contain', 'チャット管理')
        cy.get(title).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
        cy.get(title).should('have.css', 'font-size').and('eq', '17.5px')

        //Verification for search field existance
        cy.get('.form-control').eq(1).should("be.visible")
        cy.get('.form-control').eq(1).should('have.attr', 'placeholder', '園・先生を検索')

        //Verification of chat header 
        cy.get(chatHeader).invoke('text').should('contain', 'ユーザーを選択してください')
        cy.get(chatHeader).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
        cy.get(chatHeader).should('have.css', 'font-size').and('eq', '14px') 

        //verify the message send button,input field,attach symbol
        cy.get('.message-input-box').should("be.visible")
        cy.get('.message-input-box').should('have.attr', 'placeholder', '新しいメッセージを作成')
        cy.get('.msg_send_btn').should("be.visible")
        cy.get('.msg_upload_btn').should("be.visible")

        //Verify the kinder name font size and format check
        cy.get('.text-center').should("be.visible")
        cy.get('.text-center').should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
        cy.get('.text-center').should('have.css', 'font-size').and('eq', '14px') 
    })
})