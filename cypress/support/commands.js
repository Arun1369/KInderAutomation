// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

import "cypress-localstorage-commands"
let LOCAL_STORAGE_MEMORY = {};



var adminUrl = 'https://admin.kinders.develop.groony.jp/auth/signin';
var businessUrl = 'https://kinders.develop.groony.jp/auth/signin';

Cypress.Commands.add("login", () => {

    cy.visit(adminUrl);
    cy.get('[autocomplete="email"]').clear()
    cy.get('[autocomplete="email"]').type('superadmin@kinder.com')
    cy.get('[autocomplete="password"]').clear()
    cy.get('[autocomplete="password"]').type('admin123')
    cy.get('.btn').click()

    cy.wait(10000)
    // cy.routes();
    // cy.wait('@postRoutes')


})

Cypress.Commands.add("header", (text) => {
    cy.get('h5').invoke('text').should('contain', text)
    cy.get('h5').should('have.css', 'color').and('eq', 'rgb(66, 66, 66)')
    cy.get('h5').should('have.css', 'font-size').and('eq', '17.5px')
    cy.get('h5').should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
    //Verify search Box

})

Cypress.Commands.add("cssTest", (type, selector, text) => {
    cy.wait(3000)
    //let css;
    if (type == 'css') {
        cy.get(selector).invoke('text').should('contain', text)
        //cy.log(cy.get(selector));
    }
    else {
        cy.xpath(selector).invoke('text').should('contain', text)
    }

})

Cypress.Commands.add("coloumnHeader", (type, selector) => {
    if (type == 'css') {
        cy.get(selector).nextUntil('[class="th-width-dots"]').each(($el, index, $list) => {
            cy.get($el).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
            cy.get($el).should('have.css', 'color').and('eq', 'rgb(92, 104, 115)')
            cy.get($el).should('have.css', 'font-size').and('eq', '12px');
        })
        //cy.get(selector).eq(0).invoke('text').should('contain', text1)
        //cy.get(selector).eq(1).invoke('text').should('contain', text2)


    }
    else {
        cy.get($el).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
        cy.get($el).should('have.css', 'color').and('eq', 'rgb(92, 104, 115)')
        cy.get($el).should('have.css', 'font-size').and('eq', '12px');
    }

})

Cypress.Commands.add("mainMenuChecks", (xpath, text) => {
    cy.xpath(xpath).invoke('text').should('contain', text)
    cy.xpath(xpath).should('have.css', 'color').and('eq', 'rgb(66, 66, 66)')
    cy.xpath(xpath).should('have.css', 'font-size').and('eq', '11.2px')
    cy.xpath(xpath).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
    //Verify search Box
})

Cypress.Commands.add("balogin", (emailid, Password) => {
    cy.visit(businessUrl);
    cy.get('[autocomplete="email"]').type('arunmaster@mailinator.com')
    cy.get('[autocomplete="password"]').type('admin123')
    // cy.get('[autocomplete="email"]').clear()
    // cy.get('[autocomplete="email"]').type(emailid) 
    // cy.get('[autocomplete="password"]').clear()
    // cy.get('[autocomplete="password"]').type(Password) 
    cy.get('.btn').click()
    cy.wait(8000)
})

Cypress.Commands.add("masterSettingsTab", (xpath, text) => {
    cy.xpath(xpath).invoke('text').should('contain', text)
    cy.xpath(xpath).should('have.css', 'color').and('eq', 'rgb(255, 255, 255)')
    cy.xpath(xpath).should('have.css', 'font-size').and('eq', '14px')
    cy.xpath(xpath).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)

})

Cypress.Commands.add("registerLabelChecks", () => {
    cy.get('.register-lables').each(($li, index, $lis) => {
        cy.get($li).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
        cy.get($li).should('have.css', 'color').and('eq', 'rgb(92, 104, 115)')
        cy.get($li).should('have.css', 'font-size').and('eq', '12px');

    })
})

Cypress.Commands.add("radionButtonLabel", () => {
    cy.get('.custom-radio>label').each(($li, index, $lis) => {
        cy.get($li).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
        //cy.get($li).should('have.css', 'color').and('eq','rgb(0, 0, 0)')
        //cy.get($li).should('have.css', 'font-size').and('eq', '14px');

    })
})
//Verofy checkbox label
Cypress.Commands.add("checkBoxLabel", () => {
    cy.get('.custom-checkbox>label').each(($li, index, $lis) => {
        cy.get($li).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
        //cy.get($li).should('have.css', 'color').and('eq','rgb(253, 185, 19)')
        //cy.get($li).should('have.css', 'font-size').and('eq', '12px');

    })
})


//Verify save and cancel
Cypress.Commands.add("saveandCancel", () => {
    cy.xpath('//button[contains(text(),"キャンセル")]').invoke('text').should('contain', 'キャンセル')
    cy.xpath('//button[contains(text(),"キャンセル")]').should('have.css', 'color').and('eq', 'rgb(10, 201, 164)')
    cy.xpath('//button[contains(text(),"キャンセル")]').should('have.css', 'font-size').and('eq', '14px')
    cy.xpath('//button[contains(text(),"キャンセル")]').should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
    cy.xpath('//button[contains(text(),"保存")]').invoke('text').should('contain', '保存')
    cy.xpath('//button[contains(text(),"保存")]').should('have.css', 'color').and('eq', 'rgb(255, 255, 255)')
    cy.xpath('//button[contains(text(),"保存")]').should('have.css', 'font-size').and('eq', '14px')
    cy.xpath('//button[contains(text(),"保存")]').should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)

})

//Verify column header   
Cypress.Commands.add("columnHeader", () => {
    cy.get('[role="columnheader"]').filter('.contentAlign').each(($li, index, $lis) => {
        cy.get($li).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
        //cy.get($li).should('have.css', 'color').and('eq','rgb(66, 66, 66)')
        //cy.get($li).should('have.css', 'font-size').and('eq', '17.5px');

    })
})
//Verify create button
Cypress.Commands.add("createButton", () => {
    cy.get('[type="button"]').each(($li, index, $lis) => {
        cy.get($li).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
        // (cy.get($li).should('have.css', 'color').and('eq','rgb(10, 201, 164)')||cy.get($li).should('have.css', 'color').and('eq','rgb(255, 255, 255)'))
        cy.get($li).should('have.css', 'font-size').and('eq', '14px');
    })

})
Cypress.Commands.add("templateselection", () => {
    cy.get('[type="button"]').should("be.visible");
    cy.get('[type="button"]').should('have.css', 'color', 'rgb(10, 201, 164)');
    cy.get('[type="button"]').should('have.css', 'font-size').and('eq', '14px');
    cy.get('[type="button"]').should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/);
})

Cypress.Commands.add("colindex", () => {
    cy.get('[role="cell"]').filter('.contentAlign').each(($li, index, $lis) => {
        cy.get($li).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
        cy.get($li).should('have.css', 'color').and('eq', 'rgb(0, 0, 0)')
        cy.get($li).should('have.css', 'font-size').and('eq', '12px');

    })
})
//Verify label and placeholder
Cypress.Commands.add("labelandplaceHolder", (labelText, PlaceHolderText) => {
    cy.get('.register-lables').invoke('text').should('contain', labelText)
    cy.get('[placeholder="' + PlaceHolderText + '"]').first().should('have.attr', 'placeholder', PlaceHolderText)

})
//Verify active tab title
Cypress.Commands.add("activeTabtitle", (title) => {
    cy.get('.nav-link.active').invoke('text').should('contain', title)
    cy.get('.nav-link.active').should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
    //cy.get('.nav-link.active').should('have.css', 'color').and('eq','rgb(47, 53, 58)')
    cy.get('.nav-link.active').should('have.css', 'font-size').and('eq', '14px');

})
//Verify search options
Cypress.Commands.add("searchButton", (title) => {
    cy.get('[placeholder="' + title + '"]').should('have.attr', 'placeholder', title)
    cy.get('[placeholder="' + title + '"]').should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
    cy.get('[placeholder="' + title + '"]').should('have.css', 'color').and('eq', 'rgb(66, 66, 66)')
    cy.get('[placeholder="' + title + '"]').should('have.css', 'font-size').and('eq', '14px');

})
Cypress.Commands.add("mealcheck", () => {
    cy.get('.nav-item').invoke('text').should('contain', '食事チェック')
    cy.get('.nav-item').should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
    cy.get('.nav-item').should('have.css', 'color').and('eq', 'rgb(0, 0, 0)')
    cy.get('.nav-item').should('have.css', 'font-size').and('eq', '14px');
})
Cypress.Commands.add("lunchandsnack", () => {
    //wrt screen 10
    cy.get('[type="button"]').should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
    cy.get('[type="button"]').should('have.css', 'color').and('eq', 'rgb(10, 201, 164)')
    cy.get('[type="button"]').should('have.css', 'font-size').and('eq', '14px');
})

Cypress.Commands.add("Button", () => {
    cy.get('[type="button"]').each(($li, index, $lis) => {
        cy.get($li).should('have.css', 'font-family').and('match', /"Noto Sans JP", sans-serif/)
        //cy.get($li).should('have.css', 'color').and('eq','rgb(10, 201, 164)')
        //cy.get($li).should('have.css', 'font-size').and('eq', '14px');
    })
})

Cypress.Commands.add("routes", () => {
    cy.server();
    //cy.route("GET", "https://api.kinders.develop.groony.jp/api/admin/**/*/*").as("getRoutes");
    cy.route("GET", "http://119.82.96.68/kinder-api/api/admin/**/*/*").as("getRoutes");
    cy.server();
    cy.route("POST", "https://api.kinders.develop.groony.jp/api/admin/**/*/*").as("postRoutes");
    //cy.route("POST", "http://119.82.96.68/kinder-api/api/admin/**/*/*").as("postRoutes");

})

Cypress.Commands.add("logout", () => {
    cy.get('.profile-name').click({ force: true });
    cy.get('.fa-lock').click({ force: true });
    cy.wait(4000)
})


Cypress.Commands.add("datePickerFilter", (from, toData) => {
    cy.get('[name="date"]').click();
    cy.get('[title="' + from + '"]').click();
    cy.get('[title="' + toData + '"]').click({ multiple: true });
    cy.wait(4000)
})

//Kinder search
Cypress.Commands.add("kinderSearch", (from, toData) => {
    cy.get('[placeholder="学校検索"]').click();
    cy.get('[placeholder="学校検索"]').type('aaa')
    cy.get('[placeholder="学校検索"]').type('{enter}');
    cy.routes();
    cy.wait('@postRoutes')
    cy.wait(6000)
    cy.get('h5').invoke('text').should('contain', '学校一覧')
})

// Custom login 
Cypress.Commands.add("customLogin", (email, password) => {
    cy.get('[autocomplete="email"]').clear()
    cy.get('[autocomplete="email"]').type(email)
    cy.get('[autocomplete="password"]').clear()
    cy.get('[autocomplete="password"]').type(password)
    cy.get('.btn').click()
    cy.wait(10000)
    //cy.routes();
    //cy.wait('@postRoutes')

})

var agencyRegistrationAPI = 'https://api.kinders.develop.groony.jp/api/admin/agent/register';

// Access admin login page
Cypress.Commands.add("accessLoginPage", () => {
    cy.visit(adminUrl);
})

//Acccess Business app login page
Cypress.Commands.add("accessBALoginPage", () => {
    cy.visit(businessUrl);
    cy.wait(10000)
})

//Agency registration for API
Cypress.Commands.add("agencyRegistration", (agencyName) => {
    cy.request({
        method: 'POST',
        url: agencyRegistrationAPI,
        body: { "name": agencyName, "postcode": "", "prefecture_id": "", "address": "", "tel": "09052553306", "email": "gll55hgfhg@mailinator.com", "representative_person_name": "", "contact_person_name": "", "bank_category": "", "bank_id": "", "bank_branch_id": "", "bank_account_category": "", "bank_account_number": "", "bank_account_name": "" },
        headers: {
            Authorization: window.localStorage.getItem('userToken')
        }
    }).then((resp) => {
        // cy.log(JSON.stringify(resp.body));
        
    })
})

//Read the data
Cypress.Commands.add("readData", (vvv) => {
    cy.readFile('data.json').then((user) => {
        const yyy = user;
        cy.log(yyy.vvv)// true
      })
})

// Conditional checks
Cypress.Commands.add("isElementDisplayed", ()=>{
    cy.get("body").then(($body )=> {
        if ($body.find(".form-control").length == 0) {   //evaluates as true

         cy.get('.closebutton').click();
            cy.log('test')  
            try{
              cy.get('.id').click();

            } 
            catch (err){

            }
        }
        else {
            cy.log('not fount ')
        }
    })
  
})

// Read the test data
Cypress.Commands.add("readData", ()=>{
    cy.readFile('./yellow.json').then((user) => {
        let value = user;
        return value;
    })
})








