// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })



/// <reference types="Cypress"/>
require('cypress-xpath');
// ///<reference types="Cypress-xpath"/>
Cypress.on('uncaught:exception', (err, runnable) => {
    // Ignore a specific error message or condition
    if (err.message.includes('The user is not authenticated')) {
        return false; // Prevents Cypress from failing the test
    }
    // Let all other exceptions fail the test
    return true;
});
// add files plugin
import 'cypress-file-upload';
