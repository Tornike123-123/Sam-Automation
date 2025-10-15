/**
 * EquipmentPlanner - Delete Sidebar Drag and Drop Request Test
 * Tests drag and drop functionality from sidebar and then deleting the booking
 */

import { setupEquipmentPlannerTest, navigateToEquipmentPlanner, EQUIPMENT_PLANNER_CONFIG } from './equipmentPlannerConfig.js';
import { EquipmentPlannerHelpers } from './equipmentPlannerHelpers.js';

describe('EquipmentPlanner - Sidebar Drag and Drop Request Management', () => {
    let helpers;

    beforeEach(() => {
        setupEquipmentPlannerTest();
        helpers = new EquipmentPlannerHelpers();
    });

    it('should drag and drop a request from sidebar and then delete the booking', () => {
        // Navigate to EquipmentPlanner page
        navigateToEquipmentPlanner();
        
        // Search for specific equipment
        helpers.searchEquipmentByName('13.03.2025 EQ N1');
        cy.wait(EQUIPMENT_PLANNER_CONFIG.waitTimes.long);
        
        // Open sidebar
        helpers.elements.getEquipmentSidebar().click({ force: true });
        cy.wait(EQUIPMENT_PLANNER_CONFIG.waitTimes.long);
        
        // Click dropdown menu multiple times
        cy.get('.shl-button-dir').click({ force: true }).click({ force: true }).click({ force: true });
        cy.get('#cdk-menu-1 > [tabindex="0"]').should('be.visible').click({ force: true });
        cy.wait(EQUIPMENT_PLANNER_CONFIG.waitTimes.long);

        // Drag and drop first request to timeline
        helpers.elements.getFirstSidebarRequest().click().realMouseDown();
        cy.get('.mbsc-flex-1-0 > :nth-child(20) > .mbsc-flex > .mbsc-flex-1-1').click(); // Simulates dropping the element
        helpers.elements.getCloseBookingButton().click();
        cy.get('.filled').click();
        
        // Delete the created booking
        helpers.elements.getMainBookingEvent().rightclick({ multiple: true, force: true });
        helpers.elements.getEditContextMenuItem().click();
        helpers.elements.getDeleteBookingButton().click();
        helpers.elements.getConfirmationFilledButton().click();
    });
});