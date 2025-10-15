/**
 * Persons - Booking Release and Delete Test
 * Tests creating a booking, releasing it, and deleting both bookings
 */

import { setupPersonsTest, PERSONS_CONFIG } from './personsConfig.js';
import { PersonsHelpers } from './personsHelpers.js';

describe('Persons - Booking Release and Delete', () => {
    let helpers;

    beforeEach(() => {
        setupPersonsTest();
        helpers = new PersonsHelpers();
    });

    it('should create booking, release it, and delete both bookings', () => {
        const { testData } = PERSONS_CONFIG;
        
        // Release booking and delete using helper function
        helpers.releaseBookingAndDelete(testData.personName);
    });
});

