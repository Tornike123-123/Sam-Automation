/**
 * Database - Filter Test
 * Tests the filtering functionality in the Database module
 */

import { setupDatabaseTest, navigateToDatabase } from './databaseConfig.js';
import { testDatabaseFilters } from './databaseHelpers.js';

describe('Database - Filter Functionality', () => {
    before(function() {
        cy.fixture('example').then(function(data) {
            this.data = data;
        });
    });

    beforeEach(() => {
        setupDatabaseTest();
    });

    it('should test all database filters and verify equipment visibility', () => {
        // Navigate to Database page
        navigateToDatabase();
        
        // Test all database filters
        testDatabaseFilters();
    });
});
  