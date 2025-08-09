class EmployeePage{
    navigateToPIM(){
        return cy.get('.oxd-main-menu').contains('PIM').click();
    }

    clickAddEmployee(){
        return cy.contains('Add Employee').click();
    }
    fillEmployeeDetails(firstName, lastName, employeeId) {
        cy.get('[name="firstName"]').type(firstName);
        cy.get('[name="lastName"]').type(lastName);
        cy.get('[name="employeeId"]').clear().type(employeeId);
    }
    clickSaveButton() {
        return cy.get('button[type="submit"]').click();    
    }
    verifyEmployeeAdded(firstName, lastName) {
        cy.get('.oxd-table-row').should('contain', firstName).and('contain', lastName);
    }
}
export default EmployeePage;