/**
 * EquipmentPlanner - Delete Sidebar Request Test
 * Tests deleting a request from the sidebar
 */

import { setupEquipmentPlannerTest, navigateToEquipmentPlanner, EQUIPMENT_PLANNER_CONFIG } from './equipmentPlannerConfig.js';
import { EquipmentPlannerHelpers } from './equipmentPlannerHelpers.js';

describe('EquipmentPlanner - Sidebar Request Management', () => {
    let helpers;

    beforeEach(() => {
        setupEquipmentPlannerTest();
        helpers = new EquipmentPlannerHelpers();
    });

    it('should delete a request from the sidebar', () => {
        // Navigate to EquipmentPlanner page
        navigateToEquipmentPlanner();
        
        // Open sidebar multiple times to ensure it's open
        helpers.elements.getEquipmentSidebar().click();
        cy.wait(EQUIPMENT_PLANNER_CONFIG.waitTimes.medium);
        helpers.elements.getEquipmentSidebar().click();
        cy.wait(EQUIPMENT_PLANNER_CONFIG.waitTimes.medium);
        helpers.elements.getEquipmentSidebar().click();
        cy.wait(EQUIPMENT_PLANNER_CONFIG.waitTimes.medium);
        
        // Click delete button on first request
        cy.get(':nth-child(1) > .request > .request__row-wrapper > .right > .right__button').click();
        helpers.elements.getSidebarDeleteYesButton().click();
        
        cy.wait(EQUIPMENT_PLANNER_CONFIG.waitTimes.medium);
    });
});

