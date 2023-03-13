import BasePage from "./BasePage";

class LoginPage extends BasePage {
    visit() {
        cy.log('Open website login page');
        cy.visit('/#/login');
        cy.get('.mat-focus-indicator.close-dialog').click();
    }
    getEmailField() {
        return cy.get('#email');
    }
    getPasswordField() {
        return cy.get('#password');
    }
    getSubmitButton() {
        return cy.get('#loginButton');
    }
    assertUserUnauthorized() {
        cy.log('Verify user is unauthorized');

        cy.getCookie('customer').should('be.null');
        cy.log('User is unauthorized ✅');
    }
    submitLoginForm(userData) {
        cy.log('Trying to login with correst login and password');

        this.getEmailField().type(userData.email);
        this.getPasswordField().type(userData.password);
        this.getSubmitButton().click({ force: true });
    }
    submitWithoutLoginPassword() {
        cy.log('Trying login without login name and password');

        this.getSubmitButton().click({ force: true });
    }
    submitIncorrectLoginPassword() {
        cy.log('Trying to login with incorret login name and password');

        this.getEmailField().type('hdbfhd');
        this.getPasswordField().type('jshfj');
        this.getSubmitButton().click({ force: true });
    }
    submitWithoutLogin(userData) {
        cy.log('Trying to login without login name');

        this.getPasswordField().type(userData.password);
        this.getSubmitButton().click({ force: true });
    }
    submitWithoutPassword(userData) {
        cy.log('Trying to login without password');

        this.getEmailField().type(userData.email);
        this.getSubmitButton().click({ force: true });
    }
    submitIncorrectLogin(userData) {
        cy.log('Trying to login with incorret login');

        this.getEmailField().type('hdbfhd');
        this.getPasswordField().type(userData.password);
        this.getSubmitButton().click({ force: true });
    }
    submitIncorrectPassword(userData) {
        cy.log('Trying to login with incorret password');

        this.getEmailField().type(userData.email);
        this.getPasswordField().type('jshfj');
        this.getSubmitButton().click({ force: true });
    }
    verifyErrorAppears() {
        cy.get('.error.ng-star-inserted')
            .should('have.text', 'Invalid email or password.')
            .and('have.css', 'color','rgb(255, 87, 34)');
    }
}

export default new LoginPage;