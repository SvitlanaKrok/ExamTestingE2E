///<reference types="cypress"/>
import * as userData from '../fixtures/userData.json';
import loginPage from '../support/pages/LoginPage';
import orderPage from '../support/pages/OrderPage';
import newAddress from '../support/pages/NewAddress';
import cardNumber from '../support/pages/NewCard';
import { searchProduct } from '../support/helper'


it('Order from main page', () => {

    let nameProduct = ' OWASP Juice Shop T-Shirt ';
    
    loginPage.visit();

    loginPage.submitLoginForm(userData);

    orderPage.filterProductByLetter();

    orderPage.verifySearchResultAppears();

    searchProduct(`${nameProduct}`);

    orderPage.makeOrder();

    newAddress.addNewAddress();

    orderPage.selectAddressDelivery();

    cardNumber.addNewCard();

    orderPage.selectCardAndConfirmOrder();

    orderPage.verifyConfirmationMessage();

    orderPage.verifyDeliveryMessage();

})