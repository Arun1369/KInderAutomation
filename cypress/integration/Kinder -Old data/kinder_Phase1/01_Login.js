/// <reference types="Cypress" />
require('cypress-xpath')
var faker = require("faker");
var fakerJa = require("faker/locale/ja");



var loginField = '[autocomplete="email"]';
var passwordField = '[autocomplete="password"]'
var submitbutton = '[type="submit"]';
var rememberMECheckBox = '#basicInlineCustomCheckboxes';
var validationMessage = '.error-font';
var toestMessage = '.toast-message';
var userName = 'superadmin@kinder.com';
var password = 'admin123';

var data = require('../../fixtures/example.json')

//var data;

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})



describe('Login', () => {
    //Save the local storage 
    beforeEach("loadFixturedData", function () {

        cy.routes();
        cy.restoreLocalStorage();

    });
    afterEach(() => {
        cy.saveLocalStorage();
    });


    it('Seed the test data', () => {
        cy.writeFile("cypress/fixtures/example.json", {
            role: faker.name.firstName(),
            roleForDeletion: faker.name.firstName(),
            userEmailID: faker.internet.email(), ///  Need to change while running1
            userPassword: "Admin123",
            userForEdit: faker.internet.email(),

            agencyName1: faker.name.firstName(),
            agencyName2: faker.name.firstName(),
            agencyEmailID: faker.internet.email(),
            agencyEmailID1: faker.internet.email(),
            phonenumberwhilecreating: '075-83007' + '' + faker.random.number(1000),
            phonenumberwhileediting: '045-17175' + '' + faker.random.number(1000),
            agencyEmailIDwhileedit: faker.internet.email(),
            searchagency: faker.name.firstName(),
            searchagencyemailid: faker.internet.email(),
            kindername1: faker.name.firstName(),
            kindernamewhileedit: faker.name.firstName(),
            companyName1: faker.name.firstName(),
            companyName2: faker.name.firstName(),
            companyEmailID: faker.internet.email(),
            companyForDeletion: faker.name.firstName(),
            companyNameForDraft: faker.name.firstName(),   /// Need to change while running
            companyEmailIDforDraft: faker.internet.email(),
            companyNameForInActivate: faker.name.firstName(),  // Need to change while running
            companyEmailIDforDInactivate: faker.internet.email(),
            applierEmailID: "mike@mailinator.com",
            applierPassword: "admin123",
            productName1: faker.name.firstName(),
            productName2: faker.name.firstName(),
            productName3: faker.name.firstName(),
            campaign1: faker.name.firstName(),
            campaign2: faker.name.firstName(),
            userName: "nis@mailinator.com",
            password: "admin123",
            className: faker.name.firstName(),
            className1: faker.name.firstName(),
            groupName: faker.name.firstName(),
            staffName: faker.name.firstName(),
            staffName1: faker.name.firstName(),
            phonenumberwhilecreating: '075-83007' + '' + faker.random.number(1000),
            staffEmailID: faker.internet.email()
        })

    })


    it('KIND-228 - Verify when username and password field are empty', () => {

        cy.accessLoginPage();
        // cy.readData('name1')
        cy.get(submitbutton).click();
        cy.get(validationMessage).invoke('text').should('contain', '必須項目を入力して下さい')
        cy.get(validationMessage).invoke('text').should('contain', '必須項目を入力して下さい')
    })


    it('KIND-233 - Verify when enter invalid email address ', () => {
        cy.get(loginField).type('kkkmaiimator.com')
        cy.get(submitbutton).click();
        cy.wait(3000)
        cy.get(validationMessage).should("be.visible")

    })

    it('KIND-233 - Verify when enter the invalid password', () => {
        cy.get(passwordField).type('admin@$$123')
        cy.get(validationMessage).invoke('text').should('contain', 'パスワードフォーマットが不正です。')
        cy.wait(3000)
        cy.get(submitbutton).click();
    })

    it('KIND-493 -Verify when enter the non existing email id', () => {
        cy.get(loginField).clear();
        cy.get(loginField).type('nonexsting@mailinator.com')
        cy.get(passwordField).clear();
        cy.get(passwordField).type('admin123')
        cy.get(submitbutton).click();
        cy.get(toestMessage).invoke('text').should('contain', 'ログインIDまたはパスワードが間違っています')

    })

    it('KIND-233 - Verify when password is invalid', () => {
        cy.get(loginField).clear();
        cy.get(loginField).type('test@mailinator.com')
        cy.get(passwordField).clear();
        cy.get(passwordField).type('admin123525355')
        cy.get(submitbutton).click();
        cy.wait(3000)
        cy.get(toestMessage).invoke('text').should('contain', 'ログインIDまたはパスワードが間違っています')

    })
    //
    it('KIND-235 - Verify successful login', () => {
        cy.login();
        cy.wait(5000)
        cy.get('.profile-name').should("be.visible")
        cy.clearLocalStorage()
        cy.reload();
        cy.accessLoginPage();


    })


    it('KIND-492 - Verify when username and password field are empty', () => {

        cy.get(submitbutton).click();
        cy.wait(3000)
        cy.get(validationMessage).invoke('text').should('contain', '必須項目を入力して下さい')
        cy.get(validationMessage).invoke('text').should('contain', '必須項目を入力して下さい')
    })


    it('KIND-233 - Verify when enter invalid email address', () => {
        cy.get(loginField).type('kkkmaiimator.com')
        cy.get(submitbutton).click();
        cy.wait(3000)
        cy.get(validationMessage).should("be.visible")

    })

    it('KIND-233 - Verify when enter the invalid password', () => {
        cy.get(passwordField).type('admin@$$123')
        cy.get(validationMessage).invoke('text').should('contain', 'パスワードフォーマットが不正です。')
        cy.get(submitbutton).click();
        cy.wait(3000)
    })




    it('KIND-20 - Verify when password is invalid', () => {
        cy.get(loginField).clear();
        cy.get(loginField).type('test@mailinator.com')
        cy.get(passwordField).clear();
        cy.get(passwordField).type('admin123525355')
        cy.get(submitbutton).click();
        cy.wait(3000)
        cy.get(toestMessage).invoke('text').should('contain', 'ログインIDまたはパスワードが間違っています')

    })


    it('KIND-211 - Verify username and password are recorded', () => {
        cy.get(loginField).clear();
        cy.get(loginField).type(userName)
        cy.get(passwordField).clear();
        cy.get(passwordField).type(password)
        cy.get(rememberMECheckBox).click();
        cy.wait(4000)
        cy.get(submitbutton).click();
        cy.wait('@postRoutes')
        cy.wait(6000)
        cy.get('.profile-name').should("be.visible")
        cy.clearLocalStorage()
        cy.reload();
        cy.accessLoginPage();
        cy.get(loginField).invoke('val').should('contain', userName)
        cy.get(passwordField).invoke('val').should('contain', password)

    })




})



