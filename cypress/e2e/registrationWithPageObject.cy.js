///<reference types="cypress"/>
import * as userData from '../fixtures/userData.json';
import { faker } from '@faker-js/faker';
import loginPage from '../support/pages/LoginPage';
import registrationPage from '../support/pages/RegistrationPage';

userData.email = faker.internet.email();
userData.password = faker.internet.password(15);
userData.lastName = faker.name.lastName();

it('Registration', () => {

  loginPage.visit();

  registrationPage.openAccountPopUp();
  registrationPage.openLoginForm();
  registrationPage.openRegistrationForm();
  registrationPage.submitRegistrationForm(userData);

})
