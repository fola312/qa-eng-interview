describe("Add describe summary here", () => {

  before(() => {
      cy.visit('/slideAIDemo')
      //Netowrk wait then uses get should pattern to leverage built in retry to avoid flakiness
      cy.intercept('GET', 'https://storage.googleapis.com/beautifulslides-staging-static-assets/*').as('getData');
        cy.wait('@getData');
    cy.wait(20000)
  
      
  });

  context("Add context summary here", () => {
      it("add step summary here", () => {
          
      });
  });
});
