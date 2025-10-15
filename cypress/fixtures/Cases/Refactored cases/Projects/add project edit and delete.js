/// <reference types="cypress" />
import { ProjectsHelpers } from './projectsHelpers.js';
import { setupProjectsTest } from './projectsConfig.js';

describe('Projects - Add, Edit and Delete', function () {
    before(function () {
        cy.fixture('example').then(function (data) {
            this.data = data;
        });
    });

    it('should add project, edit it, then delete', function () {
        setupProjectsTest();
        
        const helpers = new ProjectsHelpers();
        helpers.login();
        
        const projectName = helpers.createEditAndDeleteProject();
        
        // Verify project was created, edited and deleted successfully
        cy.log(`Project ${projectName} was created, edited and deleted successfully`);
    });
});
