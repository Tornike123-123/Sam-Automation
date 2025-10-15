/**
 * Database - Add and Delete Equipment Test
 * Tests the creation and deletion of equipment in the Database module
 */

import { setupDatabaseTest, navigateToDatabase } from './databaseConfig.js';
import { addAndDeleteEquipment } from './databaseHelpers.js';

describe('Database - Equipment Management', () => {
    beforeEach(() => {
        setupDatabaseTest();
    });

    it('should add equipment and then delete it successfully', () => {
        // Navigate to Database page
        navigateToDatabase();
        
        // Add and delete equipment
        addAndDeleteEquipment();
    });
});
  

