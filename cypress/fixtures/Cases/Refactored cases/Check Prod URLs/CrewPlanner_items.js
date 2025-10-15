/**
 * Crew Planner Items Test
 * Tests the crew planner page to verify crew cards are displayed correctly
 */

import { ProjectElements } from '../../../../fixtures/Cases/Elements/ProjectElements/ProjectElements.js';
import { AllURL } from '../../../../fixtures/Cases/Elements/SamURL/AllUrl.js';

describe('Crew Planner Items Test Suite', function () {
    // Test data constants
    const MIN_CREW_CARDS = 5;
    const LOGIN_WAIT_TIME = 10000;
    const PAGE_LOAD_WAIT_TIME = 10000;
    const FINAL_WAIT_TIME = 2000;

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
   
    it('Should verify crew planner displays minimum required crew cards', function () {
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
        // Navigate to crew planner page
        allUrls.crewPlannerPage();
        cy.wait(PAGE_LOAD_WAIT_TIME);
        
        // ==================== VERIFICATION ====================
        // Verify crew cards are displayed
        cy.get('.crew-card')
            .its('length')
            .should('be.greaterThan', MIN_CREW_CARDS);

        cy.wait(FINAL_WAIT_TIME);
    });
});