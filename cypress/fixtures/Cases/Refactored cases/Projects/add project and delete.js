/// <reference types="cypress" />
import { ProjectsHelpers } from './projectsHelpers.js';
import { setupProjectsTest } from './projectsConfig.js';

describe('Projects - Add and Delete', function () {
    before(function() {
        cy.fixture('example').then(function(data) {
            this.data = data;
        });
    });
    
    it('Should add project then delete', function () {
        setupProjectsTest();
        
        const helpers = new ProjectsHelpers();
        helpers.login();
        
        const projectName = helpers.createAndDeleteProject();
        
        // Verify project was created and deleted successfully
        cy.log(`Project ${projectName} was created and deleted successfully`);
    });
});
  