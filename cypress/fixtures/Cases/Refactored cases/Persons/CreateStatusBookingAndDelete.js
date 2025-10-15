/**
 * Persons - Create Status Booking and Delete Test
 * Tests creating a status booking and then deleting it
 */

import { setupPersonsTest, PERSONS_CONFIG } from './personsConfig.js';
import { PersonsHelpers } from './personsHelpers.js';

describe('Persons - Create Status Booking and Delete', () => {
    let helpers;

    beforeEach(() => {
        setupPersonsTest();
        helpers = new PersonsHelpers();
    });

    it('should create status booking and delete it', () => {
        const { testData } = PERSONS_CONFIG;
        const statusData = {
            container: 'This is a container for a status'
        };
        
        // Create status booking and delete using helper function
        helpers.createStatusBookingAndDelete(testData.personName, statusData);
    });
});

