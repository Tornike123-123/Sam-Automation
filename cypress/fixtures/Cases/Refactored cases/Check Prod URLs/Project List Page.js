/**
 * Project List Page Test
 * Tests the project list page to verify projects are displayed correctly using AG Grid
 */

/// <reference types="cypress" />
import { ProjectElements } from '../../../../fixtures/Cases/Elements/ProjectElements/ProjectElements.js';
import { AllURL } from '../../../../fixtures/Cases/Elements/SamURL/AllUrl.js';

describe('Project List Page Test Suite', function () {
    // Test data constants
    const MIN_PROJECTS = 3;
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
  
    it('Should verify project list displays minimum required projects using AG Grid', function () {
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
        // Navigate to project list page
        allUrls.projectListPage();
        cy.wait(PAGE_LOAD_WAIT_TIME);
        
        // ==================== VERIFICATION ====================
        // Verify projects are displayed using AG Grid selector
        cy.get('[role="row"][comp-id]')
            .its('length')
            .should('be.greaterThan', MIN_PROJECTS);
    });
});