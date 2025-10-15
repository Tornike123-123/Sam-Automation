/**
 * Groups Helper Functions
 * Reusable helper functions for Groups test operations
 */

import { CrewGroupElements } from '../../../../fixtures/Cases/Elements/CrewElements/Crew-GroupElements.js';
import { GROUPS_CONFIG } from './groupsConfig.js';

export class GroupsHelpers {
    constructor() {
        this.elements = new CrewGroupElements();
    }

    /**
     * Create a new group with default settings
     * @param {string} groupName - Name of the group to create
     * @param {string} area - Area for the group
     * @param {string} groupType - Type of the group
     */
    createGroup(groupName = GROUPS_CONFIG.testData.groupName, area = GROUPS_CONFIG.testData.area, groupType = GROUPS_CONFIG.testData.groupType) {
        // Click add group button
        this.elements.getGroupAddButton().click();
        cy.wait(GROUPS_CONFIG.waitTimes.medium);

        // Fill basic group information
        this.elements.getGroupAddNameField().type(groupName);
        
        // Select area
        this.elements.getGroupAddAreaDropdown().click();
        cy.get(':nth-child(2) > .shl-select-option').click();
        
        // Select group type
        this.elements.getGroupAddTypeDropdown().click();
        cy.get(':nth-child(1) > .shl-select-options').click();
        
        // Continue to next step
        cy.get('[data-cy="add-groupe-continue"]').click();
        
        // Add categories
        this.elements.getGroupAddCategoriesButton().click();
        cy.get('.action__add').click();
        cy.get('.next-page > .shl-button-dir').click();
        
        // Add qualifications
        this.elements.getGroupAddQualificationsButton().click();
        cy.get('.action__add').click();
        cy.get('.next-page > .shl-button-dir').click();
        
        // Save the group
        this.elements.getGroupAddSaveButton().click();
        cy.wait(GROUPS_CONFIG.waitTimes.medium);
    }

    /**
     * Delete a group by name
     * @param {string} groupName - Name of the group to delete
     */
    deleteGroup(groupName = GROUPS_CONFIG.testData.groupName) {
        this.elements.getGroupTextName().each(($el) => {
            const currentGroupName = $el.text().trim();
            
            if (currentGroupName === groupName) {
                cy.wrap($el).click();
                this.elements.getDeleteGroupButton().click();
                cy.wait(GROUPS_CONFIG.waitTimes.short);
                cy.get('.confirmation__actions > .filled').click({ force: true });
                return false; // Stop iteration after finding and deleting
            }
        });
        cy.wait(GROUPS_CONFIG.waitTimes.long);
    }

    /**
     * Create and delete a group in one operation
     * @param {string} groupName - Name of the group to create and delete
     */
    createAndDeleteGroup(groupName = GROUPS_CONFIG.testData.groupName) {
        this.createGroup(groupName);
        
        // Navigate back to Groups list
        cy.GoToGroupsPage();
        
        this.deleteGroup(groupName);
    }

    /**
     * Search for a group by name
     * @param {string} groupName - Name of the group to search for
     */
    searchGroupByName(groupName) {
        this.elements.getCrewSearchField().clear().type(groupName);
        cy.wait(GROUPS_CONFIG.waitTimes.medium);
    }

    /**
     * Filter groups by branch
     * @param {string} branch - Branch name to filter by
     */
    filterGroupsByBranch(branch) {
        this.elements.getGroupBranchFilter().click();
        cy.contains(branch).click();
        cy.wait(GROUPS_CONFIG.waitTimes.medium);
    }

    /**
     * Filter groups by type
     * @param {string} type - Group type to filter by
     */
    filterGroupsByType(type) {
        this.elements.getGroupTypeFilter().click();
        cy.contains(type).click();
        cy.wait(GROUPS_CONFIG.waitTimes.medium);
    }

    /**
     * Clear all filters
     */
    clearAllFilters() {
        this.elements.getClearFiltersButton().click();
        cy.wait(GROUPS_CONFIG.waitTimes.short);
    }

    /**
     * Verify group exists in the list
     * @param {string} groupName - Name of the group to verify
     */
    verifyGroupExists(groupName) {
        this.elements.getGroupTextName().should('contain', groupName);
    }

    /**
     * Verify group does not exist in the list
     * @param {string} groupName - Name of the group to verify
     */
    verifyGroupDoesNotExist(groupName) {
        this.elements.getGroupTextName().should('not.contain', groupName);
    }

    /**
     * Click on a group by name
     * @param {string} groupName - Name of the group to click
     */
    clickGroupByName(groupName) {
        this.elements.getGroupTextName().each(($el) => {
            const currentGroupName = $el.text().trim();
            
            if (currentGroupName === groupName) {
                cy.wrap($el).click();
                return false; // Stop iteration after finding and clicking
            }
        });
    }

    /**
     * Get all group names from the list
     * @returns {Cypress.Chainable<string[]>}
     */
    getAllGroupNames() {
        return this.elements.getGroupTextName().then(($elements) => {
            const names = [];
            $elements.each((index, element) => {
                names.push(Cypress.$(element).text().trim());
            });
            return cy.wrap(names);
        });
    }
}
