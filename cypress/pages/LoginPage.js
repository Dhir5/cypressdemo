class LoginPage {
  // Get the username input field
  getUsernameInput() {
    return cy.get('input[name="username"]');
  }
  // Get the password input field
  getPasswordInput() {
    return cy.get('input[name="password"]');
  }
  // Get the submit button
  getSubmitButton() {
    return cy.get('button[type="submit"]');
  }
  // Get the error message for invalid login
  getErrorMessage() {
    return cy.get('.oxd-alert-content-text'); // for invalid login errors
  }
  // Get the user dropdown menu
  getUserDropdown() {
    return cy.get('.oxd-userdropdown-tab');
  }
  // Get the logout button from the user dropdown
  getLogoutButton() {
    return cy.contains('Logout');    
  }
}

export default LoginPage;
