/**
 * Persons - Add Person with Full Information and Delete Test
 * Tests creating a person with all fields filled and then deleting it
 */

import { setupPersonsTest, navigateToPerson, PERSONS_CONFIG } from './personsConfig.js';
import { PersonsHelpers } from './personsHelpers.js';

describe('Persons - Add Person with Full Information and Delete', () => {
    let helpers;

    beforeEach(() => {
        setupPersonsTest();
        helpers = new PersonsHelpers();
    });

    it('should add person with all fields and delete successfully', () => {
        navigateToPerson();
        helpers.waitForPersonPageLoad();
        
        const { testData } = PERSONS_CONFIG;
        
        // Create person with full information using helper function
        helpers.createPersonWithFullInformation(testData);
        
        // Delete the person
        helpers.deletePerson(testData.personName);
    });
});

