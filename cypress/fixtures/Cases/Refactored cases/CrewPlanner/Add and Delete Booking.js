/**
 * CrewPlanner - Add and Delete Booking Test
 * Tests the creation and deletion of crew bookings in the CrewPlanner module
 */

import { setupCrewPlannerTest, navigateToCrewPlanner, CREW_PLANNER_CONFIG } from './crewPlannerConfig.js';
import { createAndDeleteBooking } from './crewPlannerHelpers.js';

describe('CrewPlanner - Booking Management', () => {
    beforeEach(() => {
        setupCrewPlannerTest();
    });

    it('should create a new booking and then delete it successfully', () => {
        // Navigate to CrewPlanner page
        navigateToCrewPlanner();
        
        // Create booking with default test data and delete it
        createAndDeleteBooking();
    });
});