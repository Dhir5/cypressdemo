import DashboardPage from '../pages/DashboardPage';

describe('Dashboard Test', () => {
  const dashboard = new DashboardPage();

  beforeEach(() => {
    cy.login(); // ✅ Session-based login
  });

  it('should verify dashboard widgets', () => {
    dashboard.getDashboardHeader().should('contain', 'Dashboard');
    dashboard.getTimeAtWorkWidget().should('be.visible');
  });
});
