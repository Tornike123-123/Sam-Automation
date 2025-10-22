/**
 * Add Equipment Request Test
 * Tests the creation of equipment requests for existing projects
 */

import { AddRequestHelpers } from './addRequestHelpers.js';

describe('Add Equipment Request Test Suite', function () {
    before(function () {
        cy.fixture('example').then(function (data) {
            this.data = data;
        });
    });

    it('should add equipment request to existing project', function () {
        const helpers = new AddRequestHelpers();
        const projectName = 'Cypress_test'; // Using existing project name
        
        // Login and navigate to project list
        helpers.login();
        cy.visit('https://sam.dev.syniotec.com/project/list');
        cy.wait(4000);
        
        // Search and select existing project
        cy.get('.shl-form-field-flex').click().type('{selectAll}{backspace}');
        cy.get('.shl-form-field-flex').click().type(projectName);
        helpers.elements.firstProject().contains(projectName).click();

        // Add equipment request
        helpers.addEquipmentRequest();
    });
});