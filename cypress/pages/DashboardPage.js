class DashboardPage {
    getDashboardHeader() {
        return cy.get('h6.oxd-text.oxd-text--h6');
    }
    getTimeAtWorkWidget() {
        return cy.contains('Time at Work');
    }
}
export default DashboardPage;