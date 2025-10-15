/**
 * EquipmentPlanner - Add and Delete Multiple Equipment Bookings Test
 * Tests the creation and deletion of multiple equipment bookings
 */

import { setupEquipmentPlannerTest, navigateToEquipmentPlanner } from './equipmentPlannerConfig.js';
import { createAndDeleteMultipleBookings } from './equipmentPlannerHelpers.js';

describe('EquipmentPlanner - Multiple Equipment Booking Management', () => {
    beforeEach(() => {
        setupEquipmentPlannerTest();
    });

    it('should create multiple equipment bookings and delete them', () => {
        // Navigate to EquipmentPlanner page
        navigateToEquipmentPlanner();
        
        // Create and delete multiple equipment bookings
        createAndDeleteMultipleBookings();
    });
});
