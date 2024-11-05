describe("Polaris", () => {

    beforeEach ("set viewport", ()=> {
    cy.viewport(1920,1080);
    cy.visit("https://polaris-staging-evp.eloci.us/");
    cy.get('#outlined-basic').type("vijaytest5555+post01@gmail.com");
    cy.get('#password').type("Zoro@test123");
    cy.get('[data-cy="login-button-signIn"] > .MuiButton-label').click();
    cy.wait(8000)
   
    });
    
    it("verify title of the page", () => {
    cy.title().should('eq','Elo')
    });

    it("verify user able to add device", () => {
        cy.get('[data-cy="deviceComponent-module-addDeviceButton"] > .MuiButton-label').click();
        cy.get(':nth-child(1) > :nth-child(1) > .textfieddeactv > [data-cy="addDevice-input-name"] > .MuiInputBase-root > #outlined-basic').click().type('autoDevice');
        cy.get(':nth-child(1) > :nth-child(2) > .textfieddeactv > [data-cy="addDevice-input-serial"] > .MuiInputBase-root > #outlined-basic').click().type('G98774773');
        cy.get('.devicedialogright > .buttoncomponent-start > .MuiButtonBase-root').click();

        });
});