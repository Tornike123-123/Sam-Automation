/**
 * EquipmentPlanner - Add Equipment to Crew and Delete Test
 * Tests adding equipment to crew and removing it
 */

import { setupEquipmentPlannerTest, navigateToEquipmentPlanner, EQUIPMENT_PLANNER_CONFIG } from './equipmentPlannerConfig.js';
import { EquipmentPlannerHelpers } from './equipmentPlannerHelpers.js';

describe('EquipmentPlanner - Equipment to Crew Management', () => {
    let helpers;

    beforeEach(() => {
        setupEquipmentPlannerTest();
        helpers = new EquipmentPlannerHelpers();
    });

    it('should add equipment to crew, verify it cannot be booked, and then remove it from crew', () => {
        // Navigate to EquipmentPlanner page
        navigateToEquipmentPlanner();
        
        const { testData } = require('./equipmentPlannerConfig.js').EQUIPMENT_PLANNER_CONFIG;
        
        // Search for equipment
        helpers.searchEquipmentByName(testData.equipmentName);
        cy.wait(EQUIPMENT_PLANNER_CONFIG.waitTimes.long);
        
        // Add equipment to crew
        helpers.elements.getCrewAddPlusButton().click();
        cy.wait(EQUIPMENT_PLANNER_CONFIG.waitTimes.short);
        
        helpers.elements.getCrewAddSearchField().type('MyCrew');
        cy.wait(EQUIPMENT_PLANNER_CONFIG.waitTimes.medium);
        cy.get('.shl-select-option').click();
        cy.wait(EQUIPMENT_PLANNER_CONFIG.waitTimes.medium);
        helpers.elements.getAddToCrewFinishButton().click();
        cy.wait(EQUIPMENT_PLANNER_CONFIG.waitTimes.long);

        // Verify equipment is in crew (should show group icon)
        cy.get('.resource__top-actions__icon--group').should('be.visible');
        
        // Try to book equipment (should fail because it's in crew)
        helpers.elements.getBookingButton().click();
        helpers.elements.getBookingProjectField().type(testData.projectName);
        helpers.elements.getFirstProjectOption().click();
        
        helpers.elements.getBookingEquipmentField().type(testData.equipmentName);
        cy.wait(EQUIPMENT_PLANNER_CONFIG.waitTimes.medium);
        cy.get('.shl-select-options-empty').should('be.visible');
        cy.get('.cdk-overlay-backdrop').invoke('css', 'pointer-events', 'none');  
        helpers.elements.getCloseBookingButton().click();

        // Remove equipment from crew
        helpers.elements.getCrewAddMinusButton().click();
        helpers.elements.getAddToCrewFinishButton().click();
        cy.wait(EQUIPMENT_PLANNER_CONFIG.waitTimes.medium);
    });
});
