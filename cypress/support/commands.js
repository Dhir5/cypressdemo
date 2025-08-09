Cypress.Commands.add('login', (
  username = Cypress.env('validUser').username,
  password = Cypress.env('validUser').password
) => {
  cy.session([username, password], () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/');
    cy.get('input[name="username"]').clear().type(username);
    cy.get('input[name="password"]').clear().type(password);
    cy.get('button[type="submit"]').click();
    cy.url().should('include', '/dashboard');
  });

  // 🔥 Ensure we land on dashboard after restoring session
  cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
});


Cypress.Commands.add('logout', () => {
  cy.get('.oxd-userdropdown-tab').click();
  cy.contains('Logout').click();
  cy.url().should('include', '/auth/login');
});
