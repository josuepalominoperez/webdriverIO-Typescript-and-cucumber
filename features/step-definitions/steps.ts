//Se agregó "webdriverio/async" dentro de "types" y se actualizó el "module" con el valor "CommonJS" en el archivo tsconfig.json
//Ejecutamos nuestra prueba con el comando npx wdio wdio.conf.ts 
//Generamos el reporte npx allure generate allure-results --clean -o allure-report
//Abrimos el reporte allure open

import { Given, When, Then } from '@wdio/cucumber-framework';

import LoginPage from '../pageobjects/login.page';
import SecurePage from '../pageobjects/secure.page';

const pages = {
    login: LoginPage
}

Given(/^I am on the (\w+) page$/, async (page) => {
    await pages[page].open()
});

When(/^I login with (\w+) and (.+)$/, async (username, password) => {
    await LoginPage.login(username, password)
});

Then(/^I should see a flash message saying (.*)$/, async (message) => {
    await expect(SecurePage.flashAlert).toBeExisting();
    await expect(SecurePage.flashAlert).toHaveTextContaining(message);
});

