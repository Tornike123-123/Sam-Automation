/// <reference types="cypress" />
import { ProjectsHelpers } from './projectsHelpers.js';
import { setupProjectsTest } from './projectsConfig.js';

describe('Projects - Add Project', function () {
    before(function(){
        cy.fixture('example').then(function(data){
            this.data = data;
        });
    });
    
    it('should add project', function () {
        setupProjectsTest();
        
        const helpers = new ProjectsHelpers();
        helpers.login();
        helpers.navigateToWarehouseListPage();
        
        const projectName = helpers.createProject();
        helpers.searchProject(projectName);
        helpers.clickProjectInList(projectName);
        
        // Verify project was created successfully
        cy.log(`Project ${projectName} was created successfully`);
    });
});
  