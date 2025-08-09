import LoginPage from '../pages/LoginPage';

describe('Login Test - OrangeHRM', () => {
  const loginPage = new LoginPage();

  it('should login and logout with valid credentials', () => {
    cy.login(); // ✅ Uses env.validUser automatically
    cy.get('h6.oxd-text.oxd-text--h6', { timeout: 10000 })
      .should('contain', 'Dashboard');
    cy.logout();
    loginPage.getUsernameInput().should('be.visible');
  });

  it('should show error for invalid credentials', () => {
    const user = Cypress.env('invalidUser'); // ✅ Load invalid user from env
    cy.visit('https://opensource-demo.orangehrmlive.com/');
    loginPage.getUsernameInput().type(user.username);
    loginPage.getPasswordInput().type(user.password);
    loginPage.getSubmitButton().click();
    loginPage.getErrorMessage().should('contain', 'Invalid credentials');
  });
});
