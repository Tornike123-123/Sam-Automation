/**
 * Map Helper Functions
 * Reusable helper functions for Map test operations
 */

import { MapElements } from '../../../../fixtures/Cases/Elements/MapElements/MapElements.js';
import { MAP_CONFIG } from './mapConfig.js';

export class MapHelpers {
    constructor() {
        this.elements = new MapElements();
    }

    /**
     * Search for equipment on the map
     * @param {string} searchKeyword - Keyword to search for
     */
    searchEquipment(searchKeyword = MAP_CONFIG.testData.searchKeyword) {
        this.elements.getMapSearchFilter().click().type('{selectAll}{backspace}');
        this.elements.getMapSearchFilter().type(searchKeyword);
        cy.wait(MAP_CONFIG.waitTimes.medium);
    }

    /**
     * Filter by branch
     * @param {string} branch - Branch name to filter by
     */
    filterByBranch(branch = MAP_CONFIG.testData.branch) {
        this.elements.getMapBranchFilter().click();
        cy.contains(branch).click();
        cy.wait(MAP_CONFIG.waitTimes.medium);
    }

    /**
     * Filter by category
     * @param {string} category - Category to filter by
     */
    filterByCategory(category = MAP_CONFIG.testData.category) {
        this.elements.getMapCategoryFilter().click();
        cy.get('.shl-select-options-container > :nth-child(1) > .shl-tree-option > .shl-tree-option-container > .shl-tree-option-parent').click({ force: true });
        cy.wait(MAP_CONFIG.waitTimes.long);
    }

    /**
     * Open filter popup
     */
    openFilterPopup() {
        this.elements.getMapFilterPopup().click();
        cy.wait(MAP_CONFIG.waitTimes.short);
    }

    /**
     * Clear all filters in popup
     */
    clearFilterPopup() {
        this.elements.getMapFilterPopupClearButton().click();
        cy.wait(MAP_CONFIG.waitTimes.medium);
    }

    /**
     * Submit filter popup
     */
    submitFilterPopup() {
        this.elements.getMapFilterPopupSubmitButton().click();
        cy.wait(MAP_CONFIG.waitTimes.long);
    }

    /**
     * Apply mother filter in popup
     */
    applyMotherFilter() {
        this.elements.getMapMotherFilter().click();
        cy.wait(MAP_CONFIG.waitTimes.short);
    }

    /**
     * Apply children filter in popup
     */
    applyChildrenFilter() {
        this.elements.getMapChildrenFilter().click();
        cy.wait(MAP_CONFIG.waitTimes.short);
    }

    /**
     * Apply equipments filter in popup
     */
    applyEquipmentsFilter() {
        this.elements.getMapEquipmentsFilter().click();
        cy.wait(MAP_CONFIG.waitTimes.short);
    }

    /**
     * Apply geofences filter in popup
     */
    applyGeofencesFilter() {
        this.elements.getMapGeofencesFilter().click();
        cy.wait(MAP_CONFIG.waitTimes.short);
    }

    /**
     * Search by location in popup
     * @param {string} location - Location to search for
     */
    searchByLocation(location = MAP_CONFIG.testData.locationSearch) {
        this.elements.getMapLocationFilter().click().type('{selectAll}{backspace}');
        this.elements.getMapLocationFilter().type(location);
        cy.wait(MAP_CONFIG.waitTimes.long);
        cy.contains('Chumlaki').click();
        cy.wait(MAP_CONFIG.waitTimes.long);
    }

    /**
     * Apply basic filters (search, branch, category)
     * @param {string} searchKeyword - Keyword to search for
     * @param {string} branch - Branch to filter by
     */
    applyBasicFilters(searchKeyword = MAP_CONFIG.testData.searchKeyword, branch = MAP_CONFIG.testData.branch) {
        this.searchEquipment(searchKeyword);
        this.filterByBranch(branch);
        this.filterByCategory();
    }

    /**
     * Apply advanced filters with popup
     * @param {string} searchKeyword - Keyword to search for
     * @param {string} branch - Branch to filter by
     * @param {Object} options - Additional filter options
     */
    applyAdvancedFilters(searchKeyword = MAP_CONFIG.testData.searchKeywordPopup, branch = MAP_CONFIG.testData.branch, options = {}) {
        this.searchEquipment(searchKeyword);
        this.filterByBranch(branch);
        this.filterByCategory();
        
        // Open popup for advanced filters
        this.openFilterPopup();
        
        // Apply mother filter if requested
        if (options.mother) {
            this.applyMotherFilter();
        }
        
        // Apply equipments filter if requested
        if (options.equipments) {
            this.applyEquipmentsFilter();
        }
        
        // Apply geofences filter if requested
        if (options.geofences) {
            this.applyGeofencesFilter();
        }
        
        // Submit the filters
        this.submitFilterPopup();
    }

    /**
     * Test warehouse icon functionality
     * @param {string} location - Location to search for
     */
    testWarehouseIcon(location = MAP_CONFIG.testData.locationSearch) {
        this.openFilterPopup();
        this.clearFilterPopup();
        this.searchByLocation(location);
        this.submitFilterPopup();
        
        // Disable pointer events on map overlay
        cy.get('[style="z-index: 3; position: absolute; height: 100%; width: 100%; padding: 0px; border-width: 0px; margin: 0px; left: 0px; top: 0px; touch-action: pan-x pan-y;"]')
            .invoke('css', 'pointer-events', 'none');
    }

    /**
     * Verify equipment card is displayed
     * @param {string} equipmentName - Name of the equipment to verify
     */
    verifyEquipmentCard(equipmentName) {
        cy.get('.equipment-map-card').should('contain.text', equipmentName);
    }

    /**
     * Clear all filters and reset map
     */
    clearAllFilters() {
        this.openFilterPopup();
        this.clearFilterPopup();
        cy.wait(MAP_CONFIG.waitTimes.medium);
    }

    /**
     * Wait for map to load completely
     */
    waitForMapLoad() {
        cy.wait(MAP_CONFIG.waitTimes.extraLong);
    }

    /**
     * Get all visible equipment cards
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    getAllEquipmentCards() {
        return cy.get('.equipment-map-card');
    }

    /**
     * Check if equipment card contains specific text
     * @param {string} text - Text to check for
     */
    verifyEquipmentCardContains(text) {
        this.getAllEquipmentCards().should('contain.text', text);
    }
}
