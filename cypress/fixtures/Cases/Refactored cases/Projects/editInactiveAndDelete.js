/// <reference types="cypress" />
import { ProjectsHelpers } from './projectsHelpers.js';
import { setupProjectsTest } from './projectsConfig.js';

describe('Projects - Inactive, Edit and Delete', () => {
    beforeEach(() => {
        setupProjectsTest();
    });
    
    it('should add project, make inactive, edit, then delete', function () {
        const helpers = new ProjectsHelpers();
        cy.visit('https://sam.dev.syniotec.com/planner/calendar');
        
        const projectName = helpers.createInactiveEditAndDeleteProject();
        
        // Verify project was created, made inactive, edited and deleted successfully
        cy.log(`Project ${projectName} was created, made inactive, edited and deleted successfully`);
    });
});
  