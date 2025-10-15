/**
 * Crews Helper Functions
 * Contains reusable helper functions for common Crews operations
 */

import { CrewsElements } from '../../Elements/CrewElements/CrewsElements.js';
import { CREWS_CONFIG } from './crewsConfig.js';

/**
 * Helper class for Crews operations
 */
export class CrewsHelpers {
    constructor() {
        this.elements = new CrewsElements();
    }

    /**
     * Create a new crew with default test data
     */
    createCrew() {
        cy.CreateCrew();
        cy.wait(CREWS_CONFIG.waitTimes.medium);
    }

    /**
     * Search for crew by name
     * @param {string} crewName - Name of the crew to search for
     */
    searchCrewByName(crewName) {
        this.elements.getSearchInput()
            .click()
            .type('{selectAll}{backspace}')
            .type(crewName);
        cy.wait(CREWS_CONFIG.waitTimes.long);
    }

    /**
     * Delete a crew
     */
    deleteCrew() {
        cy.DeleteCrew();
        this.elements.getConfirmationFilledButton().click({ force: true });
        cy.wait(CREWS_CONFIG.waitTimes.medium);
        this.elements.getConfirmationFilledButton().click();
    }

    /**
     * Navigate to crews page
     */
    navigateToCrewsPage() {
        cy.visit(CREWS_CONFIG.urls.crewsList);
        cy.wait(CREWS_CONFIG.waitTimes.long);
    }

    /**
     * Test branch filter functionality
     */
    testBranchFilter() {
        this.elements.getBranchFilterButton().click();
        this.elements.getBranchFilterContent()
            .find('.ng-arrow-wrapper')
            .first()
            .click();
        cy.wait(CREWS_CONFIG.waitTimes.medium);
    }

    /**
     * Test responsible person filter
     */
    testResponsiblePersonFilter() {
        this.elements.getResponsiblePersonFilter().click();
        this.elements.getDropdownPanelItems().click();
    }

    /**
     * Apply branch filter
     */
    applyBranchFilter() {
        this.elements.getApplyBranchFilterButton().click();
    }

    /**
     * Clear all filters
     */
    clearFilters() {
        cy.wait(CREWS_CONFIG.waitTimes.medium);
        this.elements.getClearFiltersButton().click();
        this.elements.getConfirmationFilledButton().click();
    }

    /**
     * Test type filter (second dropdown)
     */
    testTypeFilter() {
        this.elements.getSecondDropdownOption().click();
    }
}

/**
 * Standalone helper functions for specific operations
 */

/**
 * Create and delete a crew with default test data
 */
export const createAndDeleteCrew = () => {
    const helpers = new CrewsHelpers();
    const { testData } = CREWS_CONFIG;
    
    helpers.createCrew();
    helpers.navigateToCrewsPage();
    helpers.searchCrewByName(testData.crewName);
    helpers.deleteCrew();
};

/**
 * Test all crew filters
 */
export const testCrewFilters = () => {
    const helpers = new CrewsHelpers();
    const { testData } = CREWS_CONFIG;
    
    // Test search filter
    helpers.searchCrewByName(testData.testCrew);
    
    // Test branch filter
    helpers.testBranchFilter();
    helpers.testTypeFilter();
    helpers.applyBranchFilter();
    
    // Test responsible person filter
    helpers.testResponsiblePersonFilter();
    
    // Clear all filters
    helpers.clearFilters();
};
