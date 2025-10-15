/**
 * Warehouse List Page Test
 * Tests the warehouse list page to verify warehouse items are displayed correctly
 */

/// <reference types="cypress" />
import { ProjectElements } from '../../../../fixtures/Cases/Elements/ProjectElements/ProjectElements.js';
import { AllURL } from '../../../../fixtures/Cases/Elements/SamURL/AllUrl.js';

describe('Warehouse List Page Test Suite', function () {
    // Test data constants
    const MIN_WAREHOUSE_ITEMS = 3;
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
  
    it('Should verify warehouse list displays minimum required warehouse items', function () {
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
        // Navigate to warehouse list page
        allUrls.warehouseListPage();
        cy.wait(PAGE_LOAD_WAIT_TIME);
        
        // ==================== VERIFICATION ====================
        // Verify warehouse items are displayed
        cy.get('sam-lobby-item > .lobby__active > .lobby__content')
            .should('have.length.at.least', MIN_WAREHOUSE_ITEMS);
    });
});