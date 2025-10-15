/**
 * Map - Filters Popup Test
 * Tests the advanced filtering functionality with popup filters
 */

import { setupMapTest, navigateToMap, MAP_CONFIG } from './mapConfig.js';
import { MapHelpers } from './mapHelpers.js';

describe('Map - Advanced Filters Popup', () => {
    let helpers;

    beforeEach(() => {
        setupMapTest();
        helpers = new MapHelpers();
    });

    it('should test advanced map filters with popup', () => {
        navigateToMap();
        
        const { testData } = MAP_CONFIG;
        
        // Apply advanced filters with popup options
        helpers.applyAdvancedFilters(testData.searchKeywordPopup, testData.branch, {
            mother: true,
            equipments: true
        });
        
        // Verify equipment card is displayed
        helpers.verifyEquipmentCard(testData.searchKeywordPopup);
        cy.wait(MAP_CONFIG.waitTimes.medium);
        
        // Clear filters
        helpers.openFilterPopup();
        helpers.clearFilterPopup();
    });
});