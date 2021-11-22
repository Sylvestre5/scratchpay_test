
  describe('ScratchPay  API Testing', () => {
    context('Get and POST Api Testing', () => {
      it.skip('Post Api with Email and Password', () => {
        cy.request({
          method: 'POST',
          url: 'https://qa-challenge-api.scratchpay.com/api/auth',
          body: {
            email: "gianna@hightable.test",
            password: "thedantonio1",
          }
        })
          .should((response) => {
            cy.log("Data :"+JSON.stringify(response.body))
           // expect(response.status).eq(201)
          });
      });


  it.only('Post Api with Email and Password,  Search by veterinary', () => {
    cy.request({
      method: 'GET',
      failOnStatusCode: false,
      url: 'https://qa-challenge-api.scratchpay.com/api/clinics/search?term=veterinary',
      body: {
        email: "gianna@hightable.test",
        password: "thedantonio1",
      }
    })
      .should((response) => {
        cy.log("Data :"+JSON.stringify(response.body))
        //expect(response.status).eq(201)
      });
  });

      it.only('API Get Request testing ', () => {
        cy.request({
          method: 'POST',
           failOnStatusCode: false,
           url: 'https://qa-challenge-api.scratchpay.com/api/clinics/2/emails',
           body: {
            email: "gianna@hightable.test",
            password: "thedantonio1",
          }
        })
          .should((response) => {
            cy.log("Test :"+JSON.stringify(response.body))

    
          });
      });





    });
  });