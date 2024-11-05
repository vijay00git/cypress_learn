describe("Clasiic SFP", () => {

    beforeEach('login',()=>{
    
    //Clear the old screenshots
    cy.task('deleteScreenshots');
    // Set Viewport
    cy.viewport(1920,1080);
    // visit url
    cy.visit("https://manage-sfp-ic.eloci.us");
    cy.url().should('eq', 'https://manage-sfp-ic.eloci.us/3.72.9/login')
    // Login
    cy.get("#username").click();
    cy.get("#username").type("vijaytest5555+sfpm51@gmail.com");
    cy.get("#password").click();
    cy.get("#password").type("Zoro@test123");
    cy.get("#loginUser").click();
    cy.wait(4000);
    })

    afterEach(() => {
    cy.wait(5000);
    cy.screenshot({ capture: 'fullPage' });
      });
    

    it("visit the device page", () => {
        cy.visit('https://manage-sfp-ic.eloci.us/3.72.9/devices');

     });

     it("login", () => {
    
          
         });
});
