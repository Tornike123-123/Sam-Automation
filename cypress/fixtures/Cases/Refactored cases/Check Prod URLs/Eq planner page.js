/**
 * Equipment Planner Page Test
 * Tests the equipment planner page to verify resources are displayed correctly
 */

/// <reference types="cypress" />
import { ProjectElements } from '../../../../fixtures/Cases/Elements/ProjectElements/ProjectElements.js';
import { AllURL } from '../../../../fixtures/Cases/Elements/SamURL/AllUrl.js';

describe('Equipment Planner Page Test Suite', function () {
    // Test data constants
    const MIN_RESOURCES = 3;
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
  
    it('Should verify equipment planner displays minimum required resources', function () {
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
        // Navigate to equipment planner page
        allUrls.eqPlannerPage();
        cy.wait(PAGE_LOAD_WAIT_TIME);
        
        // ==================== VERIFICATION ====================
        // Verify resources are displayed
        cy.get('.mbsc-timeline-resource-title > sam-planner-resource.ng-star-inserted > .resource')
            .should('have.length.at.least', MIN_RESOURCES);
    });
});