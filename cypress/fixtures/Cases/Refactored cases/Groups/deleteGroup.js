/**
 * Groups - Delete Group Test
 * Tests deleting an existing group
 */

import { setupGroupsTest, navigateToGroups, GROUPS_CONFIG } from './groupsConfig.js';
import { GroupsHelpers } from './groupsHelpers.js';

describe('Groups - Delete Group', () => {
    let helpers;

    beforeEach(() => {
        setupGroupsTest();
        helpers = new GroupsHelpers();
    });

    it('should delete an existing group successfully', () => {
        navigateToGroups();
        
        const { testData } = GROUPS_CONFIG;
        
        // Delete group using helper function
        helpers.deleteGroup(testData.groupName);
        
        // Verify group was deleted
        helpers.verifyGroupDoesNotExist(testData.groupName);
    });
});

