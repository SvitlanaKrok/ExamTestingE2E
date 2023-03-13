///<reference types="cypress"/>
import * as userData from '../fixtures/userData.json';
import loginPage from '../support/pages/LoginPage';
import orderPage from '../support/pages/OrderPage';
import newAddress from '../support/pages/NewAddress';
import cardNumber from '../support/pages/NewCard';


it('Order from main page', () => {

    loginPage.visit();

    loginPage.submitLoginForm(userData);

    orderPage.addProductToBasket();

    newAddress.addNewAddress();

    orderPage.selectAddressDelivery();

    cardNumber.addNewCard();

    orderPage.selectCardAndConfirmOrder();

    orderPage.verifyConfirmationMessage();

    orderPage.verifyDeliveryMessage();

})