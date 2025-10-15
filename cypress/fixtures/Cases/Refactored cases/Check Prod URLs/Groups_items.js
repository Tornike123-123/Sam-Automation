/**
 * Groups Items Test
 * Tests the groups list page to verify group items are displayed correctly
 */

import { ProjectElements } from '../../../../fixtures/Cases/Elements/ProjectElements/ProjectElements.js';
import { AllURL } from '../../../../fixtures/Cases/Elements/SamURL/AllUrl.js';

describe('Groups Items Test Suite', function () {
    // Test data constants
    const MIN_GROUP_ITEMS = 1;
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
   
    it('Should verify groups list displays minimum required group items', function () {
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
        // Navigate to group list page
        allUrls.groupListPage();
        cy.wait(PAGE_LOAD_WAIT_TIME);
        
        // ==================== VERIFICATION ====================
        // Verify group items are displayed
        cy.get('sam-groupe-list-item')
            .its('length')
            .should('be.greaterThan', MIN_GROUP_ITEMS);
    });
});