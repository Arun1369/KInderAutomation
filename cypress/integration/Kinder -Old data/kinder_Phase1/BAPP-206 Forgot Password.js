/// <reference types="Cypress" />
import chaiColors from 'chai-colors'
chai.use(chaiColors)
//import { URL } from ' ../lib/env.js '
//Cypress.env("url");
var faker = require("faker");
var fakerJa = require("faker/locale/ja");

require('cypress-xpath')

var emailId = '[placeholder="メールアドレス"]';
var saveButton = '//button[contains(text(),"送信")]'
var password1 = '[placeholder="新しいパスワード"]';
var password2 = '[placeholder="新しいパスワード ( 確認用 )"]';
var mail = '//span[contains(text(),"メールアドレス：")]';
var rememberMECheckBox = '#basicInlineCustomCheckboxes';
var validationMessage = '.mandatory-color';
var toastMessage = '.toast-message';
var userName = 'superadmin@kinder.com';
var password = 'admin123';
var resetButton = '//button[contains(text(),"変更してログイン")]'

//var data = require('../../fixtures/example.json')
var data;

it('KIND-BAPP-299 : Validation check-In Reset password screen', () => {
    cy.visit('https://www.kinders.develop.groony.jp/auth/signin');
    cy.get('#show-btn').click();
    cy.get('h5').invoke('text').should('contain', 'パスワードの再設定')
})

it('KIND-BAPP-299 : Invalid emailID format', () => {
    cy.get(emailId).type('12345');
    cy.xpath(saveButton).click();
    cy.wait(2000)
    cy.get(validationMessage).eq(2).invoke('text').should('contain', 'メールアドレスが不正です。')
    cy.get(emailId).clear()
})

it('KIND-BAPP-299 : Not registered Mail ID', () => {
    cy.get(emailId).type('staff01@mailinator.com');
    cy.xpath(saveButton).click();
    cy.wait(2000)
    cy.get(toastMessage).invoke('text').should('contain', 'メールアドレスが未登録です。メールアドレスをお忘れの場合は、園の管理者へ直接お問い合わせください。')
    cy.get(emailId).clear()
})

it('KIND-BAPP-300 : verify the behavior of [Send]送信- button ', () => {
    cy.get(emailId).type('staff1@mailinator.com');
    cy.xpath(saveButton).click();
    cy.wait(2000)
    cy.get('h6').invoke('text').should('contain', 'パスワード再発行手続きのメールを送信しました。')
    cy.wait(2000)
})

it('KIND-BAPP-310 : Validation check - Password Reset', () => {
    cy.visit('https://www.kinders.develop.groony.jp/auth/resetpassword/XPHYbhjEJzFURWkYtKmMLnntQDzlbssUx4U5ZKRaut4esNGF3rtoJoM5jKrU/staff1@mailinator.com');
    cy.xpath(mail).should('be.visible')
    cy.get(password1).type('1234');
    cy.xpath(resetButton).click();
    cy.wait(2000)
    cy.get(validationMessage).eq(1).invoke('text').should('contain', 'パスワードフォーマットが不正です。')
    cy.get(validationMessage).eq(3).invoke('text').should('contain', 'パスワードは同じである必要があります。')
    cy.get(password1).clear();
})

it('KIND-BAPP-306 : verify the behavior of 新しいパスワードand 新しいパスワード（確認用）', () => {
    cy.get(password1).type('12345678');
    cy.get(password2).type('12345678');
    cy.xpath(resetButton).click();
    //cy.wait(2000)
    cy.get(toastMessage).invoke('text').should('contain', 'トークンが見つかりません。 ')
})
