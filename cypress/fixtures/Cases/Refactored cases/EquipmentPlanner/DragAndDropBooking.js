/**
 * EquipmentPlanner - Drag and Drop Booking Test
 * Tests drag and drop functionality from sidebar to create booking and then delete it
 */

import { setupEquipmentPlannerTest, navigateToEquipmentPlanner, EQUIPMENT_PLANNER_CONFIG } from './equipmentPlannerConfig.js';
import { EquipmentPlannerHelpers } from './equipmentPlannerHelpers.js';

describe('EquipmentPlanner - Drag and Drop Booking Management', () => {
    let helpers;

    beforeEach(() => {
        setupEquipmentPlannerTest();
        helpers = new EquipmentPlannerHelpers();
    });

    it('should drag and drop a request from sidebar to create booking and then delete it', () => {
        // Navigate to EquipmentPlanner page
        navigateToEquipmentPlanner();
        
        // Search for specific equipment
        helpers.searchEquipmentByName('Test mobile eq N1 edited');
        cy.wait(EQUIPMENT_PLANNER_CONFIG.waitTimes.long);
        
        // Open sidebar
        cy.get('[data-cy="eq-planner-requests"]').click();
        cy.get('.shl-button-dir').click();
        cy.wait(EQUIPMENT_PLANNER_CONFIG.waitTimes.medium);
        cy.get('#cdk-menu-0 > [tabindex="0"]').click();
        cy.wait(EQUIPMENT_PLANNER_CONFIG.waitTimes.medium);
        
        // Drag and drop first request to timeline
        cy.get('.cdk-virtual-scroll-content-wrapper > :nth-child(1) > .request').click().realMouseDown();
        cy.get('.mbsc-flex-1-0 > :nth-child(15) > .mbsc-flex > .mbsc-flex-1-1').click(); // Simulates dropping the element

        // Close booking and confirm
        helpers.elements.getCloseBookingButton().click();
        cy.wait(EQUIPMENT_PLANNER_CONFIG.waitTimes.short);
        cy.get('.filled').click().should('be.visible');
        
        // Delete the created booking
        helpers.elements.getMainBookingEvent().rightclick({ multiple: true, force: true });
        helpers.elements.getEditContextMenuItem().click();
        helpers.elements.getDeleteBookingButton().click();
        helpers.elements.getConfirmationFilledButton().click();
        cy.wait(EQUIPMENT_PLANNER_CONFIG.waitTimes.medium);
    });
});

      