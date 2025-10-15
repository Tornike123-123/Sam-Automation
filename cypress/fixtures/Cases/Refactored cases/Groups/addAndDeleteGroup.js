/**
 * Groups - Add and Delete Group Test
 * Tests creating a new group and then deleting it
 */

import { setupGroupsTest, navigateToGroups } from './groupsConfig.js';
import { GroupsHelpers } from './groupsHelpers.js';

describe('Groups - Add and Delete Group', () => {
    let helpers;

    beforeEach(() => {
        setupGroupsTest();
        helpers = new GroupsHelpers();
    });

    it('should create a new group and delete it successfully', () => {
        navigateToGroups();
        
        const { testData } = GROUPS_CONFIG;
        
        // Create and delete group using helper function
        helpers.createAndDeleteGroup(testData.groupName);
    });
});
