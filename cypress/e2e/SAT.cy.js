describe("SAT", () => {
  it("tests SAT", () => {
    cy.viewport(1920,1080);
    cy.visit("https://www.sequoiaat.com/");
    cy.get("body > div > div:nth-of-type(1) div:nth-of-type(2) button").click();
    cy.location("href").should("eq", "https://www.sequoiaat.com/embedded.html");
    cy.get("div:nth-of-type(3) button").click();
    cy.location("href").should("eq", "https://www.sequoiaat.com/mobile-app.html");
    cy.get("div:nth-of-type(4) button").click();
    cy.location("href").should("eq", "https://www.sequoiaat.com/cloud-services.html");
    cy.get("div:nth-of-type(5) button").click();
    cy.location("href").should("eq", "https://www.sequoiaat.com/testing.html");
    cy.get("div:nth-of-type(6) button").click();
    cy.location("href").should("eq", "https://www.sequoiaat.com/AI-ML.html");
    cy.get("#btn-menu").click();
    cy.get("body > div > div:nth-of-type(1) a:nth-of-type(4)").click();
    cy.get("div.search-fields > span:nth-of-type(1) input").click();
    cy.get("span:nth-of-type(3) input").click();
    cy.get("#_remote").click();
    cy.get("#_remote").click();
    cy.get("span:nth-of-type(3) input").click();
    cy.get("a:nth-of-type(2) div.job-title").click();
    cy.location("href").should("eq", "https://sequoiaat.freshteam.com/jobs/tUAfU0RUbStH/embedded-engineers");
    cy.get("div:nth-of-type(11) div:nth-of-type(7) > div").click();
    cy.location("href").should("eq", "https://www.sequoiaat.com/about-us.html#contact-us");
  });
});
