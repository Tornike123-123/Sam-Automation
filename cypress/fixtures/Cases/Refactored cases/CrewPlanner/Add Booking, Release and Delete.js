/**
 * CrewPlanner - Add Booking, Release and Delete Test
 * Tests the complete booking lifecycle: creation, release, and deletion
 */

import { setupCrewPlannerTest, navigateToCrewPlanner } from './crewPlannerConfig.js';
import { createReleaseAndDeleteBooking } from './crewPlannerHelpers.js';

describe('CrewPlanner - Complete Booking Lifecycle', () => {
    beforeEach(() => {
        setupCrewPlannerTest();
    });

    it('should create a booking, release it, and then delete both the original and released bookings', () => {
        // Navigate to CrewPlanner page
        navigateToCrewPlanner();
        
        // Create booking, release it, and delete both bookings
        createReleaseAndDeleteBooking();
    });
});