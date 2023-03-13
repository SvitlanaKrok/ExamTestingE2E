///<reference types="cypress"/>
import feedbackPage from '../support/pages/FeedbackPage';

it('Customer feedback', () => {

    feedbackPage.visit();

    feedbackPage.fillFeedbackForm();

    feedbackPage.captchaField();

    feedbackPage.submmitFeedbackForm();

    feedbackPage.verifyMessageSuccessfulFeedback();

})