/**
 * CrewPlanner - Filters Test
 * Tests the filtering functionality in the CrewPlanner module
 */

import { setupCrewPlannerTest, navigateToCrewPlanner } from './crewPlannerConfig.js';

describe('CrewPlanner - Filter Functionality', () => {
    beforeEach(() => {
        setupCrewPlannerTest();
    });

    it('should test all available filters in the CrewPlanner', () => {
        // Navigate to CrewPlanner page
        navigateToCrewPlanner();
        
        // Execute filter tests using custom command
        cy.CrewPlannerFilters();
    });
});
