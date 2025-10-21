/**
 * Map - Warehouse Icon Test
 * Tests the warehouse icon functionality and location filtering
 */

import { setupMapTest, navigateToMap, MAP_CONFIG } from './mapConfig.js';
import { MapHelpers } from './mapHelpers.js';

describe('Map - Warehouse Icon', () => {
    let helpers;

    beforeEach(() => {
        setupMapTest();
        helpers = new MapHelpers();
    });

    it('should test warehouse icon functionality', () => {
        navigateToMap();
        
        const { testData } = MAP_CONFIG;
        
        // Test warehouse icon with location search
        helpers.testWarehouseIcon(testData.locationSearch);
    });
});