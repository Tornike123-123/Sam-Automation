/**
 * Database Helper Functions
 * Contains reusable helper functions for common Database operations
 */

import { DatabaseElements } from '../../Elements/EquipmentElements/DatabaseElements.js';
import { DATABASE_CONFIG } from './databaseConfig.js';

/**
 * Helper class for Database operations
 */
export class DatabaseHelpers {
    constructor() {
        this.elements = new DatabaseElements();
    }

    /**
     * Test all database filters
     */
    testAllFilters() {
        const { testData } = DATABASE_CONFIG;
        
        // Test branch filter
        this.elements.getBranchFilter().click();
        this.elements.getFirstDropdownOption().click();
        this.elements.getScrollableContent().contains(testData.branch).click();
        this.elements.getApplyBranchFilterButton().click();
        
        // Test category filter
        this.elements.getCategoryFilter().click();
        this.elements.getScrollableContent().contains(testData.category).click();
        
        // Test operator filter
        this.elements.getOperatorFilter().click();
        this.elements.getScrollableContent().contains(testData.operator).click();
        
        // Test order by filter
        this.elements.getOrderByFilter().click();
        this.elements.getScrollableContent().contains(testData.orderBy).click();
        
        // Test status filter
        this.elements.getStatusFilter().click();
        this.elements.getScrollableContent().contains(testData.status).click();
    }

    /**
     * Verify equipment is visible after filtering
     * @param {string} equipmentName - Name of the equipment to verify
     */
    verifyEquipmentVisible(equipmentName) {
        this.elements.getEquipmentTableRow()
            .contains(equipmentName)
            .should('be.visible')
            .then(() => cy.log('Equipment is visible'));
    }

    /**
     * Clear all filters
     */
    clearAllFilters() {
        this.elements.getClearAllFiltersButton().click();
        this.elements.getClearFiltersConfirmationButton().click();
    }

    /**
     * Add equipment with default test data
     */
    addEquipment() {
        cy.AddEquipment();
        cy.wait(DATABASE_CONFIG.waitTimes.veryLong);
    }

    /**
     * Delete equipment
     */
    deleteEquipment() {
        cy.DeleteEquipment();
        cy.wait(DATABASE_CONFIG.waitTimes.long);
    }

    /**
     * Add and delete equipment
     */
    addAndDeleteEquipment() {
        this.addEquipment();
        this.deleteEquipment();
    }
}

/**
 * Standalone helper functions for specific operations
 */

/**
 * Test database filters and verify equipment visibility
 */
export const testDatabaseFilters = () => {
    const helpers = new DatabaseHelpers();
    const { testData } = DATABASE_CONFIG;
    
    // Test all filters
    helpers.testAllFilters();
    
    // Verify equipment is visible
    helpers.verifyEquipmentVisible(testData.equipmentName);
    
    // Wait and clear filters
    cy.wait(DATABASE_CONFIG.waitTimes.medium);
    // helpers.clearAllFilters(); // Uncomment if needed
};

/**
 * Add and delete equipment
 */
export const addAndDeleteEquipment = () => {
    const helpers = new DatabaseHelpers();
    helpers.addAndDeleteEquipment();
};
