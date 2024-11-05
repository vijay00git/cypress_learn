describe("Polaris", () => {

    beforeEach ("set viewport", ()=> {
    cy.viewport(1920,1080);
    cy.visit("https://polaris-staging-evp.eloci.us/");
    cy.url().should('eq', 'https://polaris-staging-evp.eloci.us/')
    cy.get('#outlined-basic').type("vijaytest5555+post01@gmail.com");
    cy.get('#password').type("Zoro@test123");
    cy.get('[data-cy="login-button-signIn"] > .MuiButton-label').click();
    cy.wait(4000)
   
    });
    
    it("verify Login with valid credential", () => {
    //Login page URL Assertion
    cy.visit("https://polaris-staging-evp.eloci.us/");
    cy.url().should('eq', 'https://polaris-staging-evp.eloci.us/')
      
    // Login

    cy.get('#outlined-basic').type("vijaytest5555+post01@gmail.com");
    cy.get('#password').type("Zoro@test123");
    cy.get('[data-cy="login-button-signIn"] > .MuiButton-label').click();
    cy.wait(4000)
    });

    it("verify user able to add device", () => {
        

        });
});