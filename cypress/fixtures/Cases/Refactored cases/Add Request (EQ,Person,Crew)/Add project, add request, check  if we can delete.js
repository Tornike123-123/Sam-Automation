/**
 * Add Project, Add Request and Check Deletion Restriction Test
 * Tests that projects with open requests cannot be deleted
 */

import { AddRequestHelpers } from './addRequestHelpers.js';
import { generateProjectName } from './addRequestConfig.js';

describe('Add Project, Add Request and Check Deletion Restriction Test Suite', function () {
    before(function () {
        cy.fixture('example').then(function (data) {
            this.data = data;
        });
    });

    it('should create project, add equipment request and verify deletion restriction', function () {
        const helpers = new AddRequestHelpers();
        const projectName = generateProjectName();
        
        // Step 1: Login and create project
        helpers.login();
        helpers.createProject(projectName);
        
        // Step 2: Navigate to project and add equipment request
        cy.wait(3000);
        cy.get('.shl-form-field-flex').click().type('{selectAll}{backspace}').type(projectName);
        cy.wait(3000);
        helpers.elements.firstProject().contains(projectName).click();
        
        // Step 3: Add equipment request
        helpers.addEquipmentRequest();
        
        // Step 4: Try to delete project (should show restriction message)
        cy.wait(2000);
        helpers.checkProjectDeletionRestriction();
    });
});