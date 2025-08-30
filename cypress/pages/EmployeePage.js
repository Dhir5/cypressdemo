class EmployeePage{
    navigateToPIM(){
        return cy.contains('PIM').click();
    }

    clickAddEmployee(){
        return cy.contains('Add Employee').click();
    }
    fillEmployeeDetails(firstName, lastName) {
        cy.get('[name="firstName"]').type(firstName);
        cy.get('[name="lastName"]').type(lastName);
    }
    clickSaveButton() {
        return cy.get('button[type="submit"]').click();    
    }
    
    verifyEmployeeAdded(firstName, lastName) {
        cy.get('input[name=firstName]', {timeout:10000}).should('have.value', firstName);
        cy.get('input[name=lastName]',{timeout:10000}).should('have.value', lastName);
    }
}
export default EmployeePage;