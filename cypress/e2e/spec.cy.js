describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
  })
});

it('as', function() {
  cy.visit('http://localhost:5173/')
  cy.get('#root a[href="/about"] button').click();
  cy.get('#root a[href="/resume.pdf"]').click();
  cy.get('#root a[href="/about"]').click();
  cy.get('#root a[href="/"]').click();
  cy.get('#root a[href="/services"] button').click();
  cy.get('#root a[href="/education"]').click();
  cy.get('#root a[href="/project"]').click();
  cy.get('#root a[href="/services"]').click();
  cy.get('#root a[href="/contact"]').click();
  cy.get('#root a[href="/signin"]').click();
  cy.get('#root a[href="/signup"]').click();
  cy.get('#root a[href="/counter"]').click();
  cy.get('#root [name="age"]').click();
  cy.get('#root [name="age"]').click();
  cy.get('#root [name="age"]').click();
  cy.get('#root [name="age"]').click();
  cy.get('#root [name="age"]').click();
  cy.get('#root button').click();
  cy.get('#root a[href="/signin"]').click();
  cy.get('#root a[href="/signup"]').click();
  cy.get('#root [name="name"]').click();
  cy.get('#root [name="name"]').type('Eric');
  cy.get('#root [name="email"]').type('eric@email.com');
  cy.get('#root [name="password"]').type('ericeric');
  cy.get('#root button').click();
  cy.get('#root a[href="/signin"]').click();
  cy.get('#root [name="email"]').click();
  cy.get('#root [name="email"]').type('eri');
  cy.get('#root [name="email"]').click();
  cy.get('#root [name="email"]').type('c@email.com');
  cy.get('#root [name="password"]').type('ericeric');
  cy.get('#root button').click();
  cy.get('#root > div:nth-child(1)').click();
  cy.get('#root > div:nth-child(1)').click();
  cy.get('#root a[href="/contact"]').click();
  cy.get('#root a[href="/"]').click();
  cy.get('#root nav a[href="/about"]').click();
  cy.get('#root a[href="/education"]').click();
  cy.get('#root a[href="/project"]').click();
  cy.get('#root a[href="/services"]').click();
  cy.get('#root a[href="/contact"]').click();
  cy.get('#root a[href="/signin"]').click();
  cy.get('#root a[href="/signup"]').click();
  cy.get('#root a[href="/counter"]').click();
  cy.get('#root a[href="/"]').click();
  cy.get('#root a[href="/about"] button').click();
  cy.get('#root a[href="/"]').click();
  cy.get('#root a[href="/services"] button').click();
  cy.get('#root a[href="/"]').click();
  cy.get('#root a[href="/project"] button').click();
  cy.get('#root a[href="/"]').click();
  cy.get('#root a[href="/contact"] button').click();
  cy.get('#root a[href="/"]').click();
  
});