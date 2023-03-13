///<reference types="cypress"/>
import * as userData from '../fixtures/userData.json';
import loginPage from '../support/pages/LoginPage';
import accountPage from '../support/pages/AccountPage';

it('Verify user is unauthorized', () => {

    loginPage.visit();
    loginPage.assertUserUnauthorized();
})

it('Autorisation', () => {

    loginPage.visit();
    loginPage.submitLoginForm(userData);

    accountPage.verifyUserEmail(userData);
})

it('Autorisation with incorrect login name and password', () => {

    loginPage.visit();
    loginPage.submitIncorrectLoginPassword();

    loginPage.verifyErrorAppears();
})

it('Autorisation with incorret loginName', () => {

    loginPage.visit();
    loginPage.submitIncorrectLogin(userData);

    loginPage.verifyErrorAppears();
})

it('Autorisation with incorret password', () => {

    loginPage.visit();
    loginPage.submitIncorrectPassword(userData);

    loginPage.verifyErrorAppears();
})




