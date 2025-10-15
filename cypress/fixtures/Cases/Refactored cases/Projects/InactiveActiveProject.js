/// <reference types="cypress" />
import { ProjectsHelpers } from './projectsHelpers.js';
import { setupProjectsTest } from './projectsConfig.js';

describe('Projects - Inactive and Active', function () {
    before(function(){
        cy.fixture('example').then(function(data){
            this.data = data;
        });
    });
    
    it('should add project, make inactive, then make active', function () {
        setupProjectsTest();
        
        const helpers = new ProjectsHelpers();
        helpers.login();
        
        const projectName = helpers.createInactiveAndActiveProject();
        
        // Verify project was created, made inactive, then made active successfully
        cy.log(`Project ${projectName} was created, made inactive, then made active successfully`);
    });
});
  