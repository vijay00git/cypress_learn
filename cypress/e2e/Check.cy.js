describe("Polaris", () => {

    it("checking the code", ()=>{

    cy.viewport(1600, 747);
    cy.visit("https://polaris-staging-evp.eloci.us/");
    cy.get('#outlined-basic').type("vijaytest5555+post01@gmail.com");
    cy.get('#password').type("Zoro@test123");
    cy.get('[data-cy="login-button-signIn"] > .MuiButton-label').click();
    cy.wait(11000)


    cy.get('tbody').should('be.visible').within(() => {
        cy.contains('autoDevice').then((device) => {
          if (device) {
            // Delete device
        cy.get("p[title='autoDevice']").click();
        cy.wait(5000);
        cy.get("#vertical-tab-1").click();
        cy.get("div[class='buttoncomponent-start softwaretab-btn'] button[type='button']").click();
        cy.get('[data-cy="settingEdit-button-deleteDevice"] > .MuiButton-label').click();
        cy.wait(5000);
        cy.get('.MuiDialogActions-root > :nth-child(2) > .MuiButtonBase-root > .MuiButton-label').click();
        cy.wait(5000);
        cy.reload()
          } else {
            // Add a new device
            cy.get('[data-cy="deviceComponent-module-addDeviceButton"]').click();
            cy.get('[data-cy="addDevice-input-name"]').type('autoDevice');
            cy.get('[data-cy="addDevice-input-serial"]').type('G98774773');
            cy.get('.devicedialogright .buttoncomponent-start .MuiButtonBase-root').click();
          }
        });
      });

    // if (cy.xpath("//tbody//tr//td").should('be.visible')
    //     .contains('autoDevice'))
    //     {
    //         // Delete device
    //     cy.get("p[title='autoDevice']").click();
    //     cy.wait(5000);
    //     cy.get("#vertical-tab-1").click();
    //     cy.get("div[class='buttoncomponent-start softwaretab-btn'] button[type='button']").click();
    //     cy.get('[data-cy="settingEdit-button-deleteDevice"] > .MuiButton-label').click();
    //     cy.wait(5000);
    //     cy.get('.MuiDialogActions-root > :nth-child(2) > .MuiButtonBase-root > .MuiButton-label').click();
    //     cy.wait(5000);
    //     cy.reload()
            
    //     }
                    
    // else {
    //     // Add a new device
        
    //     cy.get('[data-cy="deviceComponent-module-addDeviceButton"]').click();
    //     cy.get(':nth-child(1) > :nth-child(1) > .textfieddeactv > [data-cy="addDevice-input-name"] > .MuiInputBase-root > #outlined-basic').type('autoDevice');
    //     cy.get(':nth-child(1) > :nth-child(2) > .textfieddeactv > [data-cy="addDevice-input-serial"] > .MuiInputBase-root > #outlined-basic').type('G98774773');
    //     cy.get('.devicedialogright .buttoncomponent-start .MuiButtonBase-root').click();
        
        
    //      }

    // });

     });

