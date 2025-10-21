/**
 * Map - Filters Test
 * Tests the basic filtering functionality on the map
 */

import { setupMapTest, navigateToMap, MAP_CONFIG } from './mapConfig.js';
import { MapHelpers } from './mapHelpers.js';

describe('Map - Basic Filters', () => {
    let helpers;

    beforeEach(() => {
        setupMapTest();
        helpers = new MapHelpers();
    });

    it('should test basic map filters', () => {
        navigateToMap();
        helpers.waitForMapLoad();
        
        const { testData } = MAP_CONFIG;
        
        // Apply basic filters
        helpers.applyBasicFilters(testData.searchKeyword, testData.branch);
        
        // Test filter popup functionality
        helpers.openFilterPopup();
        helpers.clearFilterPopup();
        cy.wait(MAP_CONFIG.waitTimes.medium);
    });
});