import EmployeePage from '../pages/EmployeePage';

describe('Employee Module Test', () => {
  const empPage = new EmployeePage();

  beforeEach(() => {
    cy.login(); // ✅ Session-based login
  });

  it('should add a new employee', () => {
    empPage.navigateToPIM();
    empPage.clickAddEmployee();
    empPage.fillEmployeeDetails('John', 'Doe');
    empPage.clickSave();
    empPage.verifyEmployeeAdded();
  });
});
