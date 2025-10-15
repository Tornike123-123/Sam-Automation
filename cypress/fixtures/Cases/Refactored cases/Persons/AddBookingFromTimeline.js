/**
 * Persons - Add Booking from Timeline Test
 * Tests creating a booking from timeline in HR Planner
 */

import { setupPersonsTest, PERSONS_CONFIG } from './personsConfig.js';
import { PersonsHelpers } from './personsHelpers.js';

describe('Persons - Add Booking from Timeline', () => {
    let helpers;

    beforeEach(() => {
        setupPersonsTest();
        helpers = new PersonsHelpers();
    });

    it('should create and delete booking from timeline', () => {
        const { testData } = PERSONS_CONFIG;
        const bookingData = {
            container: 'This is a container for a booking'
        };
        
        // Add booking from timeline using helper function
        helpers.addBookingFromTimeline(testData.personName, bookingData);
    });
});

