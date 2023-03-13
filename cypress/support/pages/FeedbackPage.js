import BasePage from "./BasePage";
import { faker } from '@faker-js/faker';

let text = new Object;

text.comment = faker.lorem.sentences(2);

class FeedbackPage extends BasePage {
    visit() {
        cy.log('Open customer Feedback form');
        cy.visit('/#/contact');
    }
    getCloseDialogPopUp() {
        return cy.get('.mat-focus-indicator.close-dialog');
    }
    getCloseDismissPopUp() {
        return cy.get('a.cc-btn.cc-dismiss');
    }
    getCommentField() {
        return cy.get('#comment');
    }
    getRatingSlider() {
        return cy.get('#rating');
    }
    getSubmmitButton() {
        return cy.get('[aria-label="Button to send the review"]');
    }
    captchaField() {
        cy.get('#captcha').then(captcha => {
            let expression = captcha.text();
            let result = eval(expression);

            cy.get('#captchaControl').type(result);
        })
    }
    fillFeedbackForm() {
        cy.log('Fill out the feedback form');

        let commentText = 'Hello'
        this.getCloseDialogPopUp().click();
        this.getCloseDismissPopUp().click();
        this.getCommentField().type(text.comment);
        this.getRatingSlider().type('{leftarrow}'.repeat(5));
        this.getRatingSlider().type('{rightarrow}'.repeat(1));
    }
    submmitFeedbackForm() {
        cy.log('Submmit feedback form');

        this.getSubmmitButton().click();
    }
    verifyMessageSuccessfulFeedback() {
        cy.get('.mat-simple-snackbar.ng-star-inserted')
            .then(element => {
                expect(element).to.have.text('Thank you for your feedback.X');
            })
    }
}

export default new FeedbackPage;