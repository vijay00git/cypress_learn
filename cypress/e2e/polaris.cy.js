describe("Polaris", () => {

    beforeEach ("set viewport", ()=> {
    
    cy.viewport(1600, 747);
    cy.visit("https://polaris-staging-evp.eloci.us/");
    cy.get('#outlined-basic').type("vijaytest5555+post01@gmail.com");
    cy.get('#password').type("Zoro@test123");
    cy.get('[data-cy="login-button-signIn"] > .MuiButton-label').click();
    cy.wait(8000)
   
    });
    
    it("verify title of the page", () => {
        cy.title().should('eq','Elo')
        });

    it("Check the number row and cloumns in device page", () => {
        cy.title().should('eq','Elo')
        });

    it('verify user can add a device if the device is not exist already', () => {
        if (
            cy.xpath("//tbody//tr//td").should('be.visible')
            .should('not.have.text', 'autoDevice'))
            {
                // Add a new device
            cy.get('[data-cy="deviceComponent-module-addDeviceButton"]').click();
            cy.get(':nth-child(1) > :nth-child(1) > .textfieddeactv > [data-cy="addDevice-input-name"] > .MuiInputBase-root > #outlined-basic').type('autoDevice');
            cy.get(':nth-child(1) > :nth-child(2) > .textfieddeactv > [data-cy="addDevice-input-serial"] > .MuiInputBase-root > #outlined-basic').type('G98774773');
            cy.get('.devicedialogright .buttoncomponent-start .MuiButtonBase-root').click();
            }
                        
        else {
            // Add a new device
            console.log("delete device");
             }
      });
    });
   