import BasePage from "./BasePage";
import { faker } from '@faker-js/faker';

let userCard = new Object;

userCard.name = faker.name.firstName();
userCard.cardNumber = faker.finance.creditCardNumber('################');

class NewCard extends BasePage {

    getNewCardForm() {
        return cy.get('#mat-expansion-panel-header-0');
    }
    getNameField() {
        return cy.get('[type="text"]').eq(1);
    }
    getCardNumberField() {
        return cy.get('[type="number"]');
    }
    getMonthField() {
        return cy.get('#mat-input-12');
    }
    getYearField() {
        return cy.get('#mat-input-13');
    }
    getSubmitButton() {
        return cy.get('button#submitButton');
    }

    addNewCard() {
        cy.log('Add new card')

        this.getNewCardForm().click({ force: true });
        this.getNameField().type(userCard.name);
        this.getCardNumberField().type(userCard.cardNumber);
        this.getMonthField().select('4');
        this.getYearField().select('2082', { force: true });

        this.getSubmitButton().click({ force: true });
    }
}
export default new NewCard;