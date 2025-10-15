/**
 * Persons - Add and Delete Person with Required Fields Test
 * Tests creating a person with only required fields and then deleting it
 */

import { setupPersonsTest, navigateToPerson, PERSONS_CONFIG } from './personsConfig.js';
import { PersonsHelpers } from './personsHelpers.js';

describe('Persons - Add and Delete Person with Required Fields', () => {
    let helpers;

    beforeEach(() => {
        setupPersonsTest();
        helpers = new PersonsHelpers();
    });

    it('should add person with required fields and delete successfully', () => {
        navigateToPerson();
        helpers.waitForPersonPageLoad();
        
        const { testData } = PERSONS_CONFIG;
        
        // Create and delete person using helper function
        helpers.createAndDeletePerson(testData.firstName, testData.lastName, testData.personnelNumber);
    });
});
