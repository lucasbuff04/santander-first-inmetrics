import { Given, When, And, Then } from 'cypress-cucumber-preprocessor/steps'

// =====================
// LOGIN COM SUCESSO
// =====================
Given("que o usuário está na página de login", () => {
    cy.visit('https://www.automationexercise.com/login')
})

When('ele preenche o e-mail "contatolucasbuff@hotmail.com" e a senha "Teste@1234"', () => {
    cy.get('[data-qa="login-email"]').clear().type('contatolucasbuff@hotmail.com');
    cy.get('[data-qa="login-password"]').clear().type('Teste@1234');
})

And('clica no botão de login', () => {
    cy.get('[data-qa="login-button"]').click();
})

Then('ele deve ver a mensagem de sucesso', () => {
    cy.contains('Logged in as lucas de araujo buff', { timeout: 5000 }).should('be.visible');
})

// =====================
// LOGIN COM E-MAIL INCORRETO
// =====================
Given('que o usuário está na página de login', () => {
    cy.visit("https://www.automationexercise.com/login");
});

When('ele preenche o e-mail incorreto', () => {
    cy.get('[data-qa="login-email"]').clear().type('contatolucasbuff777@hotmail.com');
    cy.get('[data-qa="login-password"]').clear().type('Teste@1234');
});

When('clica no botão de login', () => {
    cy.get('[data-qa="login-button"]').click();
});

Then('ele deve ver a mensagem de erro', () => {
    cy.contains('Your email or password is incorrect!', { timeout: 5000 }).should('be.visible');
});

// =====================
// LOGIN COM SENHA INCORRETA
// =====================
Given('que o usuário está na página de login', () => {
    cy.visit("https://www.automationexercise.com/login");
});

When('ele preenche a senha incorreta', () => {
    cy.get('[data-qa="login-email"]').clear().type('contatolucasbuff@hotmail.com');
    cy.get('[data-qa="login-password"]').clear().type('Teste@12345777');
});

When('clica no botão de login', () => {
    cy.get('[data-qa="login-button"]').click();
});

Then('ele deve ver a mensagem de erro', () => {
    cy.contains('Your email or password is incorrect!', { timeout: 5000 }).should('be.visible');
});

// =====================
// LOGOUT COM SUCESSO
// =====================
Given('que o usuário está na página de login', () => {
    cy.visit("https://www.automationexercise.com/login");
});

When('ele insere o e-mail e a senha', () => {
    cy.get('[data-qa="login-email"]').clear().type('contatolucasbuff@hotmail.com');
    cy.get('[data-qa="login-password"]').clear().type('Teste@1234');
});

When('clica no botão de login', () => {
    cy.get('[data-qa="login-button"]').click();
});

Then('ele deve ver a mensagem', () => {
    cy.contains('Logged in as lucas de araujo buff', { timeout: 5000 }).should('be.visible');
});

When('ele clicar no botão de logout', () => {
    cy.wait(4000)
    cy.contains(' Logout').click({ force: true });
});

Then('ele deve ver a mensagem de login', () => {
    cy.contains('Login to your account', { timeout: 5000 }).should('be.visible');
});
