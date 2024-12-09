describe ("https://reqres.in/", ()=>{
   
    it ("List users", ()=> {
        cy.request('GET', 'https://reqres.in/api/users?page=2').then((response) => {
        // Assert status code
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('page');
        expect(response.body).to.have.property('total', 12);
        expect(response.body).to.have.property('data');
      });
    });
    it("Single user", ()=> {
        cy.request('GET', 'https://reqres.in/api/users/2').then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('data');
            expect(response.body).to.have.property('support');
             // Validate the 'data' object
            const userData = response.body.data;
            const supportData = response.body.support;
            expect(userData).to.have.property('id', 2);
            expect(userData).to.have.property('email', 'janet.weaver@reqres.in');
            expect(userData).to.have.property('first_name', 'Janet');
            expect(userData).to.have.property('last_name', 'Weaver');
            expect(userData).to.have.property('avatar').and.match(/^https:\/\/.*\.(jpg|png)$/);
            })
        })

        //Handle 404 Response
        it("Single user not found", ()=> {
            cy.request({
                method: 'GET',
                url: 'https://reqres.in/api/users/23',
                failOnStatusCode: false, // Allow Cypress to proceed even if the status code is not 2xx/3xx
              }).then((response) => {
                expect(response.status).to.eq(404);
                // Assert the body is empty
                expect(response.body).to.be.empty;
                })
            })

            it("Single <resource>", ()=>{
                cy.request({
                    method: 'GET',
                    url: 'https://reqres.in/api/unknown/2',
                    failOnStatusCode: false, 
                }).then((response)=>{
                    const userData = response.body.data;
                    const supportData = response.body.support;
                    expect(userData).to.have.property('id', 2);
                    expect(userData).to.have.property('name', 'fuchsia rose');
                    expect(supportData).to.have.property('url', 'https://contentcaddy.io?utm_source=reqres&utm_medium=json&utm_campaign=referral');
                    expect(supportData).to.have.property('text', 'Tired of writing endless social media content? Let Content Caddy generate it for you.');
        
                })
            })
            it("Create user", ()=> {
                cy.request({
                    method: 'POST',
                    url: 'https://reqres.in/api/users',
                    body: {
                        "name": "morpheus",
                        "job": "leader"
                            },
                    failOnStatusCode: false, 
                }).then((response)=>{
                    expect(response.status).to.eq(201);
                    expect(response.body).to.have.property('name', 'morpheus');
                    expect(response.body).to.have.property('job', 'leader');
                    expect(response.body).to.have.property('id');

            })
})
});
