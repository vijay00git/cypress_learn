describe("Polaris", () => {

    beforeEach ("set viewport", ()=> {
    
    cy.viewport(1600, 747);
    cy.visit("https://polaris-staging-evp.eloci.us/");
    cy.wait(8000)
    cy.get('#outlined-basic').type("vijaytest5555+post01@gmail.com");
    cy.get('#password').type("Zoro@test123");
    cy.get('[data-cy="login-button-signIn"] > .MuiButton-label').click();
    cy.wait(8000)
   
    });
    
    it("verify the login is successfull", () => {
        cy.title().should('eq','Elo')
        cy.url().should('eq' , 'https://polaris-staging-evp.eloci.us/main/devices')
        });
    it("verify title of the page", () => {
        cy.title().should('eq','Elo')
        });

    it("verify user is able to Add new device", () => {

        cy.get('[data-cy="deviceComponent-module-addDeviceButton"]').click();
        cy.get(':nth-child(1) > :nth-child(1) > .textfieddeactv > [data-cy="addDevice-input-name"] > .MuiInputBase-root > #outlined-basic').type('autoDevice');
        cy.get(':nth-child(1) > :nth-child(2) > .textfieddeactv > [data-cy="addDevice-input-serial"] > .MuiInputBase-root > #outlined-basic').type('G98774773');
        cy.get('.devicedialogright .buttoncomponent-start .MuiButtonBase-root').click().wait(8000);

        });

    it('verify user is able to delete the device from cloud', () => {
        cy.wait(8000);
        cy.get('.devices_autosizerlist__QxazO').contains('autoDevice').click();
        cy.get('#vertical-tab-1').should('be.visible').click();
        cy.get('[data-cy="settingsDisplay-button-edit"]').should('be.visible').click();
        cy.get("[data-cy='deviceDetails-module-dialog'] div.MuiGrid-grid-md-12 > div > div > div:nth-of-type(2) span.MuiButton-label").click();
        cy.get("[data-cy='deleteDialogComponent-module-mainDiv'] div:nth-of-type(2) span.MuiButton-label").click();
        cy.wait(8000);
        cy.get('.checkallbtnscls > .MuiIconButton-root').click();
        });
    it('verify user is able to add new group', () => {
        cy.wait(8000);
        cy.get("label[data-cy='deviceComponent-module-groupPanelFormLabel'] span[class='MuiTypography-root MuiFormControlLabel-label MuiTypography-body1'] svg path").click();
        cy.get('[data-cy="categoryGroupAdd-input-groupTitle"] > .MuiInputBase-root > #outlined-basic').type("autoGroup");
        cy.get('[data-cy="categoryGroupAdd-button-cancel"] > .MuiButton-label').click()
        cy.get("label[data-cy='deviceComponent-module-groupPanelFormLabel'] span[class='MuiTypography-root MuiFormControlLabel-label MuiTypography-body1'] svg path").click();
        cy.get('[data-cy="categoryGroupAdd-input-groupTitle"] > .MuiInputBase-root > #outlined-basic').type("autoGroup");
        cy.get('[data-cy="categoryGroupAdd-button-save"] > .MuiButton-label').click();
    })

        // it('verify user able to drag and drop the device on group', () => {
        //     cy.wait(8000);
        //     cy.contains('.devices_autosizerlist__QxazO', 'ee').within(() => {
        //         cy.get('[data-cy="dragComponent-module-dragger"]').drag('data-cy="dropComponent-module-droppingDiv"');
        //       });
        

    // })
    });
   