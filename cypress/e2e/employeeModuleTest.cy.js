import EmployeePage from '../pages/EmployeePage';

describe('Employee Module Test', () => {
  const empPage = new EmployeePage();

  beforeEach(() => {
    cy.login(); // ✅ Session-based login
  });

  it('should add a new employee', () => {
    const empDetails=Cypress.env('newEmployee'); // ✅ Load new employee details from env
    empPage.navigateToPIM();
    empPage.clickAddEmployee();
    empPage.fillEmployeeDetails(empDetails.firstName,empDetails.lastName);
    empPage.clickSaveButton();

    empPage.verifyEmployeeAdded(empDetails.firstName, empDetails.lastName); // ✅ Verify employee added
  });
});
