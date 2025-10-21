/**
 * Warehouse Helper Functions
 * Contains reusable helper functions for common Warehouse operations
 */

import { ProjectElements } from '../../Elements/ProjectElements/ProjectElements.js';
import { WAREHOUSE_CONFIG, generateWarehouseName } from './warehouseConfig.js';

/**
 * Helper class for Warehouse operations
 */
export class WarehouseHelpers {
    constructor() {
        this.elements = new ProjectElements();
    }

    /**
     * Perform login with credentials
     */
    login() {
        const { credentials, waitTimes } = WAREHOUSE_CONFIG;
        
        this.elements.samUrl();
        cy.wait(waitTimes.medium);
        this.elements.userName().type(credentials.email);
        this.elements.password().type(credentials.password);
        this.elements.loginBtn().click();
        
        // Try to accept cookies if the dialog is visible
        cy.get('body').then(($body) => {
            if ($body.find('.ch2-dialog:visible').length > 0) {
                this.elements.acceptCookiesBtn().click({ force: true });
            }
        });
    }

    /**
     * Navigate to warehouse list page
     */
    navigateToWarehouseListPage() {
        const { waitTimes } = WAREHOUSE_CONFIG;
        
        this.elements.warehouseListPage();
        cy.wait(waitTimes.navigation);
    }

    /**
     * Open add warehouse modal
     */
    openAddWarehouseModal() {
        this.elements.addWarehouseBtn().click();
    }

    /**
     * Fill warehouse form with basic information
     * @param {string} warehouseName - Name of the warehouse
     * @param {string} costCenter - Cost center for the warehouse
     * @param {string} branch - Branch to select
     * @param {string} description - Warehouse description
     */
    fillWarehouseForm(warehouseName, costCenter = WAREHOUSE_CONFIG.testData.costCenter, 
                     branch = WAREHOUSE_CONFIG.testData.branches.direction1, 
                     description = WAREHOUSE_CONFIG.testData.description) {
        // Fill cost center
        this.elements.warehouseCostCenterField().click().type(costCenter);
        
        // Fill warehouse title
        this.elements.warehouseTitleField().click().type(warehouseName);
        
        // Select branch
        this.elements.warehousebranchField().click();
        this.elements.branchContainer().contains(branch).click();
        
        // Select responsible person
        this.elements.responsiblePersonField().click();
        this.elements.responsibleDropdown().contains(WAREHOUSE_CONFIG.testData.responsiblePerson).click();
        
        // Fill description
        this.elements.warehouseDescription().click().type(description);
    }

    /**
     * Fill map location for warehouse
     * @param {string} location - Location to search for on map
     */
    fillMapLocation(location = WAREHOUSE_CONFIG.testData.mapSearch) {
        const { waitTimes } = WAREHOUSE_CONFIG;
        
        this.elements.mapSearch().click().type(location);
        this.elements.mapSearchDropdown().should('be.visible');
        this.elements.reunionClick();
        cy.wait(waitTimes.medium);
        this.elements.randomGeofence();
        cy.wait(waitTimes.short);
    }

    /**
     * Save the warehouse
     */
    saveWarehouse() {
        this.elements.addWarehouse().click({ force: true });
        cy.wait(WAREHOUSE_CONFIG.waitTimes.long);
    }

    /**
     * Search for warehouse by name
     * @param {string} warehouseName - Name of the warehouse to search for
     */
    searchWarehouse(warehouseName) {
        this.elements.warehouseSearch().click().type(warehouseName);
    }

    /**
     * Click on warehouse in the list
     * @param {string} warehouseName - Name of the warehouse to click
     */
    clickWarehouseInList(warehouseName) {
        this.elements.firstWarehouse().contains(warehouseName).click();
    }

    /**
     * Edit warehouse
     */
    editWarehouse() {
        this.elements.editWarehouseBtn().click();
    }

    /**
     * Update warehouse with new information
     * @param {string} newCostCenter - New cost center
     * @param {string} newWarehouseTitle - New warehouse title
     * @param {string} newBranch - New branch
     * @param {string} newDescription - New description
     */
    updateWarehouse(newCostCenter, newWarehouseTitle, newBranch, newDescription) {
        this.elements.warehouseCostCenterField().click().type(newCostCenter);
        this.elements.warehouseTitleField().click().type(newWarehouseTitle);
        this.elements.warehousebranchField().click();
        this.elements.branchContainer().contains(newBranch).click();
        this.elements.responsiblePersonField().click();
        this.elements.responsibleDropdown().contains(WAREHOUSE_CONFIG.testData.responsiblePerson).click();
        this.elements.warehouseDescription().click().type(newDescription);
        cy.wait(2000);
        this.elements.addWarehouse().click({ force: true });
    }

    /**
     * Delete warehouse
     */
    deleteWarehouse() {
        this.elements.warehouseDeleteBtn().click();
        this.elements.warehouseDeleteYesBtn().click();
    }

    /**
     * Create a complete warehouse with all required fields
     * @param {string} warehouseName - Name of the warehouse
     * @returns {string} The generated warehouse name
     */
    createWarehouse(warehouseName = null) {
        const finalWarehouseName = warehouseName || generateWarehouseName();
        
        this.openAddWarehouseModal();
        this.fillWarehouseForm(finalWarehouseName);
        this.fillMapLocation();
        this.saveWarehouse();
        
        return finalWarehouseName;
    }

    /**
     * Create and delete a warehouse
     * @param {string} warehouseName - Name of the warehouse
     * @returns {string} The generated warehouse name
     */
    createAndDeleteWarehouse(warehouseName = null) {
        const finalWarehouseName = this.createWarehouse(warehouseName);
        
        this.searchWarehouse(finalWarehouseName);
        this.clickWarehouseInList(finalWarehouseName);
        this.deleteWarehouse();
        
        return finalWarehouseName;
    }

    /**
     * Create, edit, and delete a warehouse
     * @param {string} warehouseName - Name of the warehouse
     * @returns {string} The generated warehouse name
     */
    createEditAndDeleteWarehouse(warehouseName = null) {
        const finalWarehouseName = this.createWarehouse(warehouseName);
        
        // Edit the warehouse
        this.searchWarehouse(finalWarehouseName);
        this.clickWarehouseInList(finalWarehouseName);
        this.editWarehouse();
        
        // Update warehouse with modified data
        this.updateWarehouse(
            'Automation cost123',
            '123',
            WAREHOUSE_CONFIG.testData.branches.direction2,
            'Description123'
        );
        
        // Delete the warehouse
        this.searchWarehouse(finalWarehouseName);
        this.clickWarehouseInList(finalWarehouseName);
        this.deleteWarehouse();
        
        return finalWarehouseName;
    }
}

/**
 * Standalone helper functions for specific operations
 */

/**
 * Create and delete a warehouse with default test data
 */
export const createAndDeleteWarehouse = () => {
    const helpers = new WarehouseHelpers();
    return helpers.createAndDeleteWarehouse();
};

/**
 * Create, edit, and delete a warehouse with default test data
 */
export const createEditAndDeleteWarehouse = () => {
    const helpers = new WarehouseHelpers();
    return helpers.createEditAndDeleteWarehouse();
};

/**
 * Create a warehouse with default test data
 */
export const createWarehouse = () => {
    const helpers = new WarehouseHelpers();
    return helpers.createWarehouse();
};
