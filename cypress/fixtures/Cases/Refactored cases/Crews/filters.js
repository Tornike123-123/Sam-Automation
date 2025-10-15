/**
 * Crews - Filters Test
 * Tests the filtering functionality in the Crews module
 */

import { setupCrewsTest, navigateToCrews } from './crewsConfig.js';
import { testCrewFilters } from './crewsHelpers.js';

describe('Crews - Filter Functionality', () => {
    beforeEach(() => {
        setupCrewsTest();
    });

    it('should test all available filters in the Crews module', () => {
        // Navigate to Crews page
        navigateToCrews();
        
        // Test all crew filters
        testCrewFilters();
    });
});