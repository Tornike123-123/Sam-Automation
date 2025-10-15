/**
 * Crews - Add and Delete Crew Test
 * Tests the creation and deletion of crew functionality
 */

import { setupCrewsTest, navigateToCrews } from './crewsConfig.js';
import { createAndDeleteCrew } from './crewsHelpers.js';

describe('Crews - Crew Management', () => {
    beforeEach(() => {
        setupCrewsTest();
    });

    it('should create a new crew and then delete it successfully', () => {
        // Navigate to Crews page
        navigateToCrews();
        
        // Create crew with default test data and delete it
        createAndDeleteCrew();
    });
});
