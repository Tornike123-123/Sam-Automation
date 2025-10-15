/// <reference types="cypress" />
import { ProjectsHelpers } from './projectsHelpers.js';
import { setupProjectsTest } from './projectsConfig.js';

describe('Projects - Add and Delete Virtual Project', function () {
    before(function(){
        cy.fixture('example').then(function(data){
            this.data = data;
        });
    });
    
    it('should add virtual project then delete', function () {
        setupProjectsTest();
        
        const helpers = new ProjectsHelpers();
        helpers.login();
        helpers.navigateToVirtualListPage();
        
        const projectName = helpers.createAndDeleteVirtualProject();
        
        // Verify virtual project was created and deleted successfully
        cy.log(`Virtual project ${projectName} was created and deleted successfully`);
    });
});
