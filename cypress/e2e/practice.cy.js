describe("Account settings", () => {
  it("assertion", () => {
    cy.viewport(1920,1080);

//Login page URL Assertion
    cy.visit("https://manage-sfp-ic.eloci.us");
//    cy.url().should('eq', 'https://manage-sfp-ic.eloci.us/3.72.8/login')

//assertin homw many link is availble     
    cy.xpath("//a").should('have.length','24')

// Login
    cy.get("#username").click();
    cy.get("#username").type("vijaytest5555+sfpm51@gmail.com");
    cy.get("#password").click();
    cy.get("#password").type("Zoro@test123");
    cy.get("#loginUser").click();
    cy.wait(4000)

// check dashboard, Devices, shedule, Activity, Acoounts tab is availble in the page
    cy.contains('Dashboard').should('be.visible')
    cy.xpath("//a[normalize-space()='Devices']").should('be.visible')
    cy.get("a[href='./playlist']").should('be.visible')
    cy.get('[ng-if="userCapabilities.activityLogs.read"] > a').should('be.visible')
    cy.xpath("//a[normalize-space()='Accounts']").should('be.visible')

//Enter into account settings
    cy.xpath("//a[normalize-space()='Accounts']").click()
    cy.get('[ng-if="userCapabilities.account.read"] > a').click()

//Verify the email using explicit Assertion
    let expmail = "vijaytest5555+sfpm51@gmail.com"
    cy.xpath("//span[@title='vijaytest5555+sfpm51@gmail.com']").then((x) => {
    let usermail = x.text()
    expect (usermail).to.equal(expmail)
    })

// Check all the tabs are there
    cy.xpath("//a[normalize-space()='Details']").should('be.visible').click()
    cy.xpath("//a[@role='tab'][normalize-space()='Settings']").should('be.visible').click()
    cy.xpath("//a[normalize-space()='Whitelist']").should('be.visible').click()
    cy.xpath("//a[normalize-space()='Reboot Timer']").should('be.visible').click()
    cy.xpath("//a[normalize-space()='Customize']").should('be.visible').click()
    cy.xpath("//a[normalize-space()='SAML']").should('be.visible').click()
    cy.xpath("//a[normalize-space()='Payment']").should('be.visible').click()
    cy.xpath("//a[normalize-space()='Apps']").should('be.visible').click()
    cy.xpath("//a[normalize-space()='Branding']").should('be.visible').click()
    cy.xpath("//a[normalize-space()='Reset Exception']").should('be.visible').click()
    cy.xpath("//a[normalize-space()='GMS Settings']").should('be.visible').click()

// the details tab
    cy.xpath("//a[normalize-space()='Details']").should('be.visible').click()
    cy.get('.btn.wide.api-details-edit-button').click()
    cy.get('#orgName').click().clear().type('The new org name')
    cy.get('#orgName').should('have.value','The new org name')

    cy.get("select[name='timeZone']").select('Asia/Kolkata')
    cy.get('.clearFloat').click() 
    cy.get('.api-save-account-detail-yes-btn').click()// Save

//the Settings tab
    cy.xpath("//a[@role='tab'][normalize-space()='Settings']").should('be.visible').click()
    //Brightness
    let exp_bright = '0%'
    cy.get(".api-account-view-brightness.ng-binding").then(
      (brightnes_value) => {
        let available_brigt = brightnes_value.text()
        expect(available_brigt).to.not.equal(exp_bright)
      })
    //Volume
    let exp_vol = '0%'
    cy.get(".api-account-view-brightness.ng-binding").then(
      (vol_value) => {
        let available_vol = vol_value.text()
        expect(available_vol).to.not.equal(exp_vol)
      })  
    
    cy.get('.api-settings-edit-button').click()
    cy.scrollTo('top');  
    cy.get("ng-include > div > div:nth-of-type(1) > div:nth-of-type(1) div.min-slider-handle").click();
    cy.get("ng-include > div > div:nth-of-type(1) > div:nth-of-type(2) div.min-slider-handle").click();
    cy.get('.api-account-brightness-slider > .slider > .slider-track').then( (val)=> {
    val.css('style', 'left: 0%; width: 90%;')})
    cy.get('.btn.wide.clearFloat.api-settings-apply-button').click

  });
});
