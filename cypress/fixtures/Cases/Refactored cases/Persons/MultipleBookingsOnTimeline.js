/**
 * Persons - Multiple Bookings on Timeline Test
 * Tests creating multiple bookings from timeline and then deleting them
 */

import { setupPersonsTest, PERSONS_CONFIG } from './personsConfig.js';
import { PersonsHelpers } from './personsHelpers.js';

describe('Persons - Multiple Bookings on Timeline', () => {
    let helpers;

    beforeEach(() => {
        setupPersonsTest();
        helpers = new PersonsHelpers();
    });

    it('should create multiple bookings from timeline and delete them', () => {
        const { testData } = PERSONS_CONFIG;
        const bookings = [
            { container: 'This is a container for a booking' },
            { container: 'Another booking container' }
        ];
        
        // Create multiple bookings on timeline using helper function
        helpers.createMultipleBookingsOnTimeline(testData.personName, bookings);
    });
});

