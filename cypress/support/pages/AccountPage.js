import BasePage from "./BasePage";

class AccountPage extends BasePage {

    visit() {
        cy.log('Open website login page');
        cy.visit('/#/search');
    }

    verifyUserEmail(userData) {
        cy.get('#navbarAccount').click();
        cy.get('.menu-text.truncate').eq(0).should('contain', userData.email)
    }

}

export default new AccountPage;