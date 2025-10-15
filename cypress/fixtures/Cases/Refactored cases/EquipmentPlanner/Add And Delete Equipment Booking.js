/**
 * EquipmentPlanner - Add and Delete Equipment Booking Test
 * Tests the creation and deletion of equipment bookings
 */

import { setupEquipmentPlannerTest, navigateToEquipmentPlanner } from './equipmentPlannerConfig.js';
import { createAndDeleteSingleBooking } from './equipmentPlannerHelpers.js';

describe('EquipmentPlanner - Equipment Booking Management', () => {
    beforeEach(() => {
        setupEquipmentPlannerTest();
    });

    it('should create an equipment booking and delete it successfully', () => {
        // Navigate to EquipmentPlanner page
        navigateToEquipmentPlanner();
        
        // Create and delete equipment booking
        createAndDeleteSingleBooking();
    });
});
