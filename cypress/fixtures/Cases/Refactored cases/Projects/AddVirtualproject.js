/// <reference types="cypress" />
import { ProjectsHelpers } from './projectsHelpers.js';
import { setupProjectsTest } from './projectsConfig.js';

describe('Projects - Add Virtual Project', function () {
    before(function(){
        cy.fixture('example').then(function(data){
            this.data = data;
        });
    });
    
    it('should add virtual project', function () {
        setupProjectsTest();
        
        const helpers = new ProjectsHelpers();
        helpers.login();
        helpers.navigateToVirtualListPage();
        
        const projectName = helpers.createVirtualProject();
        helpers.searchVirtualProject(projectName);
        helpers.clickVirtualProjectInList(projectName);
        
        // Verify virtual project was created successfully
        cy.log(`Virtual project ${projectName} was created successfully`);
    });
});
