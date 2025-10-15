/**
 * EquipmentPlanner - Filters Test
 * Tests the filtering functionality in the EquipmentPlanner module
 */

import { setupEquipmentPlannerTest, navigateToEquipmentPlanner } from './equipmentPlannerConfig.js';
import { testEquipmentPlannerFilters } from './equipmentPlannerHelpers.js';

describe('EquipmentPlanner - Filter Functionality', () => {
    beforeEach(() => {
        setupEquipmentPlannerTest();
    });

    it('should test all available filters in the EquipmentPlanner', () => {
        // Navigate to EquipmentPlanner page
        navigateToEquipmentPlanner();
        
        // Test all equipment planner filters
        testEquipmentPlannerFilters();
    });
});