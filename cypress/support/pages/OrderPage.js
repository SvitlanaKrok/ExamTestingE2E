import BasePage from "./BasePage";

class OrderPage extends BasePage {

    visit() {
        cy.log('Open website adrress page');
        cy.visit('/#/');
    }
    getClosePopUp() {
        return cy.get('a.cc-btn.cc-dismiss');
    }
    getAddProduct_1ToCart() {
        return cy.get('.mat-focus-indicator.btn-basket').eq(1);
    }
    getAddProduct_2ToCart() {
        return cy.get('.mat-focus-indicator.btn-basket').eq(5);
    }
    getBasket() {
        return cy.get('.mat-focus-indicator.buttons.mat-button.mat-button-base.ng-star-inserted');
    }
    getChangeQuantity() {
        return cy.get('.mat-focus-indicator.mat-icon-button').eq(0);
    }
    getCheckoutButton() {
        return cy.get('#checkoutButton');
    }
    getChooseAddress() {
        return cy.get('.mat-cell.cdk-cell.cdk-column-Name.mat-column-Name.ng-star-inserted').eq(0);
    }
    getPaymentSelection() {
        return cy.get('[aria-label="Proceed to payment selection"]');
    }
    getSelectDeliverySpeed() {
        return cy.get('.mat-radio-button.mat-accent').eq(1);
    }
    getConfirmDelivery() {
        return cy.get('[aria-label="Proceed to delivery method selection"]');
    }
    getReviewButton() {
        return cy.get('[aria-label="Proceed to review"]');
    }
    getCardOption() {
        return cy.get('.mat-ripple-element.mat-radio-persistent-ripple').eq(0);
    }
    getCompletePurchese() {
        return cy.get('[aria-label="Complete your purchase"]');
    }
    verifyConfirmationMessage() {
        cy.get('.confirmation').eq(0).should('contain', 'Thank you for your purchase!');
    }
    verifyDeliveryMessage() {
        cy.get('.confirmation').eq(1).should('contain', 'Your order will be delivered in 3 days.');
    }
    getFilterField() {
        return cy.get('.mat-icon.notranslate.mat-ripple.mat-search_icon-search.ng-tns-c254-1');
    }
    getEnterButton() {
        return cy.get('[type="text"]').should('be.visible');
    }
    filterProductByLetter() {
        cy.log('Filtering product by letter');

        this.getFilterField().click();
        this.getEnterButton().type('b{enter}');
        this.getClosePopUp().click();
    }
    addProductToBasket() {
        cy.log('Add product to basket');

        this.getClosePopUp().click();
        this.getAddProduct_1ToCart().click({ force: true });
        this.getAddProduct_2ToCart().click({ force: true });
        this.getBasket().click({ force: true });
        this.getChangeQuantity().click({ force: true });
        this.getCheckoutButton().click({ force: true });
    }
    makeOrder() {
        cy.log('Make oreder with selected product');
        this.getAddProduct_1ToCart().click({ force: true });
        this.getBasket().click({ force: true });
        this.getChangeQuantity().click({ force: true });
        this.getCheckoutButton().click({ force: true });
    }
    selectAddressDelivery() {
        cy.log('Select address and delivery speed')

        this.getChooseAddress().click({ force: true });
        this.getPaymentSelection().click({ force: true });
        this.getSelectDeliverySpeed().click({ force: true });
        this.getConfirmDelivery().click({ force: true });

    }
    selectCardAndConfirmOrder() {
        cy.log('Select card and confirm order')

        this.getCardOption().click({ force: true })
        this.getReviewButton().click({ force: true });
        this.getCompletePurchese().click({ force: true });
    }
    verifySearchResultAppears() {
        cy.get('#searchValue').should('contain', 'b')
    }

}

export default new OrderPage;