/**
 * EquipmentPlanner - Add Person to Equipment Test
 * Tests adding a person to equipment and then removing the connection
 */

import { setupEquipmentPlannerTest, navigateToEquipmentPlanner, EQUIPMENT_PLANNER_CONFIG } from './equipmentPlannerConfig.js';
import { EquipmentPlannerHelpers } from './equipmentPlannerHelpers.js';

describe('EquipmentPlanner - Person to Equipment Management', () => {
    let helpers;

    beforeEach(() => {
        setupEquipmentPlannerTest();
        helpers = new EquipmentPlannerHelpers();
        
        // Prevent new tabs from opening - must be AFTER visit
        cy.window().then((win) => {
            cy.stub(win, 'open').callsFake((url) => {
                win.location.href = url;
            });
        });
    });

    it('should add a person to equipment and then remove the connection', () => {
        // Navigate to EquipmentPlanner page
        navigateToEquipmentPlanner();
        
        // Search for specific equipment
        helpers.searchEquipmentByName('14.03.2025 Eq N1');
        cy.wait(EQUIPMENT_PLANNER_CONFIG.waitTimes.long);
        
        // Open equipment info popup
        helpers.elements.getEquipmentInfoPopupIcon().click();
        cy.get('[data-cy="equipment-info-profile"]').click();

        // Add person to equipment
        cy.get('.button.ng-star-inserted').click();
        cy.get('.input-flex-box').click();
        
        // Select first person from dropdown
        cy.get(':nth-child(1) > .shl-select-option').click();
        
        // Confirm connection
        cy.get('.filled').click();
        cy.wait(EQUIPMENT_PLANNER_CONFIG.waitTimes.medium);
        
        // Remove person from equipment
        helpers.elements.getDeletePersonButton().click();
        helpers.elements.getDeleteConnectionButton().click();
    });
});