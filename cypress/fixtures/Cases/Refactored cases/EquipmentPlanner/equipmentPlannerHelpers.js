/**
 * EquipmentPlanner Helper Functions
 * Contains reusable helper functions for common EquipmentPlanner operations
 */

import { EquipmentPlannerElements } from '../../Elements/EquipmentElements/EquipmentPlannerElements.js';
import { EQUIPMENT_PLANNER_CONFIG } from './equipmentPlannerConfig.js';

/**
 * Helper class for EquipmentPlanner operations
 */
export class EquipmentPlannerHelpers {
    constructor() {
        this.elements = new EquipmentPlannerElements();
    }

    /**
     * Search for equipment by name
     * @param {string} equipmentName - Name of the equipment to search for
     */
    searchEquipmentByName(equipmentName) {
        this.elements.getSearchByNameFilter()
            .click()
            .type('{selectAll}{backspace}')
            .type(equipmentName);
    }

    /**
     * Create a booking with specified project and equipment
     * @param {string} projectName - Project name
     * @param {string} equipmentName - Equipment name
     * @param {string} containerText - Container text
     */
    createBooking(projectName, equipmentName, containerText) {
        // Click booking button
        this.elements.getBookingButton().click();

        // Select project
        this.elements.getBookingProjectField().type(projectName);
        this.elements.getFirstProjectOption().click();

        // Select equipment
        this.elements.getBookingEquipmentField().type(equipmentName);
        this.elements.getFirstEquipmentOption().click();

        // Close equipment dropdown
        cy.get('.cdk-overlay-backdrop').invoke('css', 'pointer-events', 'none');
        cy.get('[data-cy="booking-drawer-equipment"] > .shl-select > .shl-select-inputs-container > .ng-valid > .input > .input-content-container > .input-flex-box > .action > .shl-select-close')
            .click();

        // Add container text
        this.elements.getBookingContainerField().type(containerText);

        // Save booking
        this.elements.getSaveBookingButton().click();
        cy.wait(EQUIPMENT_PLANNER_CONFIG.waitTimes.medium);
    }

    /**
     * Create booking with multiple equipment
     * @param {string} projectName - Project name
     * @param {string} equipmentSearch - Equipment search term
     * @param {string} containerText - Container text
     */
    createBookingWithMultipleEquipment(projectName, equipmentSearch, containerText) {
        // Click booking button
        this.elements.getBookingButton().click();

        // Select project
        this.elements.getBookingProjectField().type(projectName);
        this.elements.getFirstProjectOption().click();

        // Select multiple equipment
        this.elements.getBookingEquipmentField().type(equipmentSearch);
        cy.wait(EQUIPMENT_PLANNER_CONFIG.waitTimes.medium);

        // Select first two equipment options
        this.elements.getFirstEquipmentOption().click();
        this.elements.getSecondEquipmentOption().click();

        // Close equipment dropdown
        cy.get('.cdk-overlay-backdrop').invoke('css', 'pointer-events', 'none');
        cy.get('[data-cy="booking-drawer-equipment"] > .shl-select > .shl-select-inputs-container > .ng-valid > .input > .input-content-container > .input-flex-box > .action > .shl-select-close')
            .click();

        // Add container text
        this.elements.getBookingContainerField().type(containerText);

        // Save booking
        this.elements.getSaveBookingButton().click();
        cy.wait(EQUIPMENT_PLANNER_CONFIG.waitTimes.medium);
    }

    /**
     * Delete a booking
     */
    deleteBooking() {
        // Right-click on booking and delete
        this.elements.getMainBookingEvent().rightclick({ multiple: true, force: true });
        this.elements.getEditContextMenuItem().click();
        this.elements.getDeleteBookingButton().click();
        this.elements.getConfirmationFilledButton().click();
        cy.wait(EQUIPMENT_PLANNER_CONFIG.waitTimes.medium);
    }

    /**
     * Delete booking from content
     */
    deleteBookingFromContent() {
        // Right-click on booking content and delete
        this.elements.getMainBookingEventContent().rightclick({ multiple: true, force: true });
        this.elements.getEditContextMenuItem().click();
        this.elements.getDeleteBookingButton().click();
        this.elements.getConfirmationFilledButton().click();
        cy.wait(EQUIPMENT_PLANNER_CONFIG.waitTimes.medium);
    }

    /**
     * Test branch filter
     */
    testBranchFilter() {
        this.elements.getBranchFilter().click();
        this.elements.getFirstSelectOption().click();
    }

    /**
     * Test category filter
     */
    testCategoryFilter() {
        this.elements.getCategoryFilter().click();
        this.elements.getTreeOptionParent().click();
    }

    /**
     * Test all filters
     */
    testAllFilters() {
        this.testBranchFilter();
        this.testCategoryFilter();
    }

    /**
     * Create and delete a booking
     * @param {string} projectName - Project name
     * @param {string} equipmentName - Equipment name
     * @param {string} containerText - Container text
     */
    createAndDeleteBooking(projectName, equipmentName, containerText) {
        this.createBooking(projectName, equipmentName, containerText);
        this.searchEquipmentByName(equipmentName);
        cy.wait(EQUIPMENT_PLANNER_CONFIG.waitTimes.long);
        this.deleteBooking();
    }

    /**
     * Create and delete multiple bookings
     * @param {string} projectName - Project name
     * @param {string} equipmentSearch - Equipment search term
     * @param {string} equipment1 - First equipment name
     * @param {string} equipment2 - Second equipment name
     * @param {string} containerText - Container text
     */
    createAndDeleteMultipleBookings(projectName, equipmentSearch, equipment1, equipment2, containerText) {
        this.createBookingWithMultipleEquipment(projectName, equipmentSearch, containerText);

        // Delete first booking
        this.searchEquipmentByName(equipment1);
        cy.wait(EQUIPMENT_PLANNER_CONFIG.waitTimes.long);
        this.deleteBookingFromContent();

        // Delete second booking
        this.searchEquipmentByName(equipment2);
        cy.wait(EQUIPMENT_PLANNER_CONFIG.waitTimes.long);
        this.deleteBooking();
    }
}

/**
 * Standalone helper functions for specific operations
 */

/**
 * Create and delete a single equipment booking
 */
export const createAndDeleteSingleBooking = () => {
    const helpers = new EquipmentPlannerHelpers();
    const { testData } = EQUIPMENT_PLANNER_CONFIG;
    
    helpers.createAndDeleteBooking(
        testData.projectName,
        testData.equipmentName,
        testData.containerText
    );
};

/**
 * Create and delete multiple equipment bookings
 */
export const createAndDeleteMultipleBookings = () => {
    const helpers = new EquipmentPlannerHelpers();
    const { testData } = EQUIPMENT_PLANNER_CONFIG;
    
    helpers.createAndDeleteMultipleBookings(
        testData.projectName,
        testData.equipmentSearch,
        testData.equipment1,
        testData.equipment2,
        testData.containerText
    );
};

/**
 * Test equipment planner filters
 */
export const testEquipmentPlannerFilters = () => {
    const helpers = new EquipmentPlannerHelpers();
    const { testData } = EQUIPMENT_PLANNER_CONFIG;
    
    // Test search filter
    helpers.searchEquipmentByName(testData.equipmentSearch);
    cy.wait(EQUIPMENT_PLANNER_CONFIG.waitTimes.long);
    
    // Clear search
    helpers.searchEquipmentByName('');
    
    // Test other filters
    helpers.testAllFilters();
};
