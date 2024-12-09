describe ("https://restful-api.dev/", ()=>{
   
    it ("Get list of all objects", ()=> {
        cy.request('GET', 'https://api.restful-api.dev/objects').then((response) => {
        // Assert status code
        expect(response.status).to.eq(200);

        response.body.forEach((item) => {
            expect(item).to.have.property('id'); // Check for 'id'
            expect(item).to.have.property('name'); // Check for 'name'
            expect(item).to.have.property('data'); // Check for 'data'
      });
    });
});
    it("list of objects by IDs", ()=> {
        cy.request('GET', 'https://api.restful-api.dev/objects?id=3&id=5&id=10').then((response) => {
            expect(response.status).to.eq(200);
            response.body.forEach((item) => {
                expect(item).to.have.property('id');
                expect(item).to.have.property('name');
                expect(item).to.have.property('data');
            })
        })
    })
    it("Single object", ()=> {
        cy.request('GET', 'https://api.restful-api.dev/objects/7').then((response) => {
            expect(response.status).to.eq(200);

            //way-1
            expect(response.body.id).to.eq('7');
            expect(response.body.name).to.eq('Apple MacBook Pro 16');
            //Way-2
            expect(response.body).to.have.property('id', '7');
            expect(response.body).to.have.property('name', 'Apple MacBook Pro 16');
            expect(response.body).to.have.property('data');
           
        })
    })
});

