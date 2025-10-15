/**
 * HR Planner Items Test
 * Tests the HR planner page to verify HR planner items are displayed correctly
 */

import { ProjectElements } from '../../../../fixtures/Cases/Elements/ProjectElements/ProjectElements.js';
import { AllURL } from '../../../../fixtures/Cases/Elements/SamURL/AllUrl.js';

describe('HR Planner Items Test Suite', function () {
    // Test data constants
    const MIN_HR_PLANNER_ITEMS = 4;
    const LOGIN_WAIT_TIME = 10000;
    const PAGE_LOAD_WAIT_TIME = 5000;

    // Initialize page objects
    let projectElements;
    let allUrls;

    // Load test data from fixture
    before(function() {
        cy.fixture('example').then(function(data) {
            this.data = data;
        });
        
        // Initialize page objects
        projectElements = new ProjectElements();
        allUrls = new AllURL();
    });
   
    it('Should verify HR planner displays minimum required HR planner items', function () {
        // ==================== LOGIN PROCESS ====================
        // Navigate to login page
        allUrls.samProdUrl();
        
        // Perform login with fixture credentials
        projectElements.userName().type(this.data.users.testUser.email);
        projectElements.password().type(this.data.users.testUser.password);
        projectElements.loginBtn().click();
        cy.wait(LOGIN_WAIT_TIME);
        
        // Accept cookies
        allUrls.acceptCookiesBtn().click();
        
        // ==================== NAVIGATION ====================
        // Navigate to HR planner page
        allUrls.hrPlannerPage();
        cy.wait(PAGE_LOAD_WAIT_TIME);
        
        // ==================== VERIFICATION ====================
        // Verify HR planner items are displayed
        cy.get('.mbsc-flex-col > .mbsc-flex-1-1')
            .its('length')
            .should('be.greaterThan', MIN_HR_PLANNER_ITEMS);
    });
});