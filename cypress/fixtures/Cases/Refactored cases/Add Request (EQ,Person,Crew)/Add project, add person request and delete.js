/**
 * Add Project, Add Person Request and Delete Test
 * Tests the complete flow: create project, add person request, delete request, and delete project
 */

import { AddRequestHelpers } from './addRequestHelpers.js';
import { generateProjectName } from './addRequestConfig.js';

describe('Add Project, Person Request and Delete Test Suite', function () {
    before(function () {
        cy.fixture('example').then(function (data) {
            this.data = data;
        });
    });

    it('should create project, add person request, delete request and delete project', function () {
        const helpers = new AddRequestHelpers();
        const projectName = generateProjectName();
        
        // Step 1: Login and create project
        helpers.login();
        helpers.createProject(projectName);
        
        // Step 2: Navigate to project and add person request
        cy.wait(3000);
        cy.get('.shl-form-field-flex').click().type(projectName);
        cy.wait(5000);
        helpers.elements.firstProject().contains(projectName).click().should('be.visible');
        
        // Step 3: Add person request
        helpers.addPersonRequest();
        
        // Step 4: Delete person request
        cy.wait(3000);
        helpers.deletePersonRequest();
        
        // Step 5: Delete project
        helpers.deleteProject();
    });
});