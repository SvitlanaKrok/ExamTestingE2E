import BasePage from "./BasePage";
import { faker } from '@faker-js/faker';

let userNewAddress = new Object;

userNewAddress.country = faker.address.country();
userNewAddress.name = faker.name.firstName();
userNewAddress.phoneNumber = faker.phone.number('##########');
userNewAddress.zipCode =faker.address.zipCode('####');
userNewAddress.address = faker.address.secondaryAddress();
userNewAddress.city = faker.address.city();
userNewAddress.state = faker.address.state();

class NewAdress extends BasePage {

    visit(){
        cy.log('Open website adrress page');
        cy.visit('/#/address/saved');
    }

    getAddNewAddressButton(){
        return cy.get('[aria-label="Add a new address"]'); 
    }
    getCountryField(){
        return cy.get('[placeholder="Please provide a country."]');
    }
    getNameField(){
        return cy.get('[placeholder="Please provide a name."]');
    }
    getPhoneNumberField(){
        return cy.get('[placeholder="Please provide a mobile number."]');
    }
    getZipCodeField(){
        return cy.get('[placeholder="Please provide a ZIP code."]');
    }
    getAddressField(){
        return cy.get('#address');
    }
    getCityField(){
        return cy.get('[placeholder="Please provide a city."]');
    }
    getStateField(){
        return cy.get('[placeholder="Please provide a state."]');
    }
    getSubmitButton(){
        return cy.get('[type="submit"]');
    }

    addNewAddress(){
        cy.log('Add new address')

        this.getAddNewAddressButton().click({force: true});
        this.getCountryField().type(userNewAddress.country);
        this.getNameField().type(userNewAddress.name);
        this.getPhoneNumberField().type(userNewAddress.phoneNumber);
        this.getZipCodeField().type(userNewAddress.zipCode);
        this.getAddressField().type(userNewAddress.address);
        this.getCityField().type(userNewAddress.city);
        this.getStateField().type(userNewAddress.state);
        this.getSubmitButton().click({force: true});
    }

}
export default new NewAdress;