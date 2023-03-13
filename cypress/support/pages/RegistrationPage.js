import BasePage from "./BasePage";

class RegistrationPage extends BasePage {

    visit() {
        cy.log('Open website login page');
        cy.visit('/#/login');
    }

    openAccountPopUp() {
        return cy.get('#navbarAccount').click();
    }
    openLoginForm() {
        return cy.get('#navbarLoginButton').click();
    }
    openRegistrationForm() {
        return cy.get('#newCustomerLink').click();
    }
    getEmailField() {
        return cy.get('#emailControl');
    }
    getPasswordField() {
        return cy.get('#passwordControl');
    }
    getRepeatPasswordField() {
        return cy.get('#repeatPasswordControl');
    }
    getSecurityQuestion() {
        return cy.get('#mat-select-value-1');
    }
    getSecurityAnswer() {
        return cy.get('#mat-option-1');
    }
    getSecurityAnswerControl() {
        return cy.get('#securityAnswerControl');
    }
    getSubmitButton() {
        return cy.get('#registerButton');
    }

    submitRegistrationForm(userData) {
        cy.log('Trying to registration');

        this.getEmailField().type(userData.email);
        this.getPasswordField().type(userData.password);
        this.getRepeatPasswordField().type(userData.password);

        this.getSecurityQuestion().click();
        this.getSecurityAnswer().click();
        this.getSecurityAnswerControl().type(userData.lastName);

        this.getSubmitButton().click();
        console.log(userData)
    }
}

export default new RegistrationPage;