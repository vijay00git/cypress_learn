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
        cy.wait(8000)
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
        cy.get('[data-cy="categoryGroupAdd-button-save"] > .MuiButton-label').click().wait(8000);
    })

    it('verify user able to drag and drop the device on group', () => {
        //add device to add it in group
        cy.wait(8000);
        cy.get('[data-cy="deviceComponent-module-addDeviceButton"]').click();
        cy.get(':nth-child(1) > :nth-child(1) > .textfieddeactv > [data-cy="addDevice-input-name"] > .MuiInputBase-root > #outlined-basic').type('autoDevice');
        cy.get(':nth-child(1) > :nth-child(2) > .textfieddeactv > [data-cy="addDevice-input-serial"] > .MuiInputBase-root > #outlined-basic').type('G98774773');
        cy.get('.devicedialogright .buttoncomponent-start .MuiButtonBase-root').click().wait(8000);
        cy.get('body').then(($body) => {
            if ($body.find('.checkallbtnscls > .MuiIconButton-root').length > 0) {
              // If the element exists, click it
              cy.get('.checkallbtnscls > .MuiIconButton-root').click();
              cy.log('Element found and clicked.');
            } else {
              // If the element doesn't exist, log a message and continue
              cy.log('Element not found, skipping the click action.');
            }
          });
 
        cy.wait(8000);    
        // Find and store the initial element as an alias
        cy.get('.devices_autosizerlist__QxazO').contains('autoDevice').as('deviceToDrag');
        cy.get('.expanedAccordionBoth.accordionDiv.groupDevice').contains('autoGroup').as('groupToDrop');    
        cy.get('@deviceToDrag').trigger('dragstart');
        cy.log('Dragging the element');
        cy.get('@groupToDrop').trigger('drop');
        //cy.get('@deviceToDrag').drag('@groupToDrop', { force: true });    
        cy.log('Drop action complete');
        cy.get('[data-cy="alertDialog-module-deleteButton"]').click({ force: true });
        cy.wait(8000)
    });
    it('verify user able to delete group with devices', () => {
        //add device to add it in group
        cy.wait(8000);
        cy.get(':nth-child(1) > [data-cy="dropComponent-module-droppingDiv"] > [data-cy="groupFilter-module-liListing"]').click();
        cy.get('.groupSettingDiv').click();
        cy.get('#vertical-tab-1').click();
        cy.get('[data-cy="settingsDisplay-button-edit"]').click();
        cy.get('[data-cy="settingEdit-button-deleteGroupAndDevices"] > .MuiButton-label').click();
        cy.wait(8000);
        cy.get('.MuiDialogActions-root > :nth-child(2) > .MuiButtonBase-root').click();
});
    it('add URL content', () => {
        cy.wait(8000);
        cy.get('[data-cy="leftSidebar-ul-listing"] > :nth-child(3)').click();
        cy.get('.addbuttoncomponent-start.undefined').click().wait(8000);
        cy.get("div[data-cy='addContentStep-module-signleFileDiv']").click();
        cy.get('[data-cy="addContentForm-input-webUrl"] > .MuiInputBase-root > #outlined-basic').click().type('https://www.cypress.io/');
        cy.get('[data-cy="contentLibrary-button-forwardButton"] > .MuiButton-label').click();
        cy.get('[data-cy="apkForm-input-appName"] > .MuiInputBase-root > #outlined-basic').type('autoURL');
        cy.get('[data-cy="apkForm-input-appDescription"] > .MuiInputBase-root > #outlined-basic').type('description automated');
        cy.get('[data-cy="apkForm-input-appDescription"] > .MuiInputBase-root > #outlined-basic').type('autoTag');
        cy.get('[data-cy="contentLibrary-button-forwardButton"] > .MuiButton-label').click();
        cy.wait(8000);
        });

    it('add URL content', () => {
            cy.wait(8000);
            cy.get('[data-cy="leftSidebar-ul-listing"] > :nth-child(3)').click();
            cy.get('[data-cy="contentFilter-module-ulTag"] > :nth-child(3)').click();
            cy.contains('autoURL').click();
            cy.get('[data-cy="contentProperties-button-editButton"]').click();
            cy.get('[data-cy="contentEditProperties-button-deleteContent"]').click();
            cy.get('.MuiDialogActions-root > :nth-child(2) > .MuiButtonBase-root').click();
            cy.wait(8000)

        });
    it('add new Media content', () => { 
            cy.wait(8000);
            cy.get('[data-cy="leftSidebar-ul-listing"] > :nth-child(3)').click();
            cy.get('.addbuttoncomponent-start.undefined').click().wait(8000);
            cy.get('[data-cy="addContentStep-module-signleFileDiv"]').click();
            cy.fixture('luffy.zip', 'binary').then(fileContent => {
                const fileName = 'luffy.zip';
                const mimeType = 'application/zip';
        
                cy.get('[data-cy="uploadAreaComponent-input-uploadInput"]').attachFile({ 
                    fileContent, 
                    fileName, 
                    mimeType 
                });
            cy.get('[data-cy="contentLibrary-button-forwardButton"] > .MuiButton-label').click();
            cy.get('[data-cy="apkForm-input-appName"] > .MuiInputBase-root > #outlined-basic').type('luffy');
            cy.get('[data-cy="contentLibrary-button-forwardButton"]').click();
                });
           });
});
   
