describe("Clasiic SFP", () => {
  it("tests Clasiic SFP", () => {
    cy.viewport(1920,1080);

//Login page URL Assertion
    cy.visit("https://manage-sfp-ic.eloci.us");
    cy.url().should('eq', 'https://manage-sfp-ic.eloci.us')
    
// Login
    cy.get("#username").click();
    cy.get("#username").type("vijaytest5555+sfpm51@gmail.com");
    cy.get("#password").click();
    cy.get("#password").type("Zoro@test123");
    cy.get("#loginUser").click();
    cy.wait(4000)
// Dervice page URL Assertion
    cy.url().should('eq','https://manage-sfp-ic.eloci.us/3.70.105/devices')
    cy.wait(4000)
// Add new device   
    cy.get("a[id='btn-toggle'] span").click();
    cy.get("div.scroll-devices div:nth-of-type(1) > input").click();
    cy.get("div.scroll-devices div:nth-of-type(1) > input").type("NewDevice1");
    cy.get("#addDeviceDiv div:nth-of-type(2) > input").click();
    cy.get("#addDeviceDiv div:nth-of-type(2) > input").type("N454545656O");
    cy.get('#saveAddDevice').click();


    if (cy.get('#deviceHeaderTable.infiniteScrollerDeviceListContainer')
      .should('be.visible')
      .contains('N454545656O')
      .should('exist')) 
            {
//Delete device      
      cy.contains('N454545656O').click();
      cy.wait(4000)
      cy.get('[aria-controls="settings"]').click();
      cy.get('[ng-click="SwitchToSettingEditMode()"]').click();
      cy.contains('Delete Device').click();
      cy.get('[name="deviceDeleteBtnYes"]').click();
            } 
//Reload the page
      cy.wait(30000)
      cy.reload();
//Rename the device
      cy.wait(4000);
      cy.contains('I213A70064').click();
      cy.wait(4000);
      cy.get('[ng-click="EditDetailsData()"]').click();
      cy.get("#deviceName").click();
      cy.get("#deviceName").clear().type("Device56");
      cy.get("#deviceName").click();
      cy.get("#deviceName").clear().type("Device");
      cy.get("a.clearFloat").click();


      
  });
});
