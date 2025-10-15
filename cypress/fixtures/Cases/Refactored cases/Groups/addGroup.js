/**
 * Groups - Add Group Test
 * Tests creating a new group
 */

import { setupGroupsTest, navigateToGroups } from './groupsConfig.js';
import { GroupsHelpers } from './groupsHelpers.js';

describe('Groups - Add Group', () => {
    let helpers;

    beforeEach(() => {
        setupGroupsTest();
        helpers = new GroupsHelpers();
    });

    it('should create a new group successfully', () => {
        navigateToGroups();
        
        const { testData } = GROUPS_CONFIG;
        
        // Create group using helper function
        helpers.createGroup(testData.groupName);
        
        // Verify group was created
        helpers.verifyGroupExists(testData.groupName);
    });
});

