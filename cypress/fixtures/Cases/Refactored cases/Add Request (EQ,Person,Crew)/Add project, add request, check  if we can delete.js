/// <reference types="cypress" />
import { ProjectElements } from '../../Elements/ProjectElements/ProjectElements.js';

describe('My First Test Suite', function () {
  before(function () {
    cy.fixture('example').then(function (data) {
      this.data = data;
    });
  });

  it('should add project', function () {
   
   cy.viewport(1920, 1000);
      const AddProject = new ProjectElements();
      AddProject.samUrl()
        AddProject.userName().type('reg.driver@syniotec.com');
        AddProject.password().type('Qwerty1$');
        AddProject.loginBtn().click()
        cy.wait(10000 ) 
        AddProject.acceptCookiesBtn().click();
    AddProject.floatingMenuBtn().click({force: true});
    AddProject.floatingAddProject().click()
    cy.wait(4000)
    AddProject.costCenterField().click({ force: true }).type(`Automation cost`)    
    const projectName = "Cypress_test"+ new Date().toString();
    AddProject.projectTitleField().click().type(projectName)

     // ბრენჩის არჩევა
    AddProject.branchField().click()
 
    // AddProject.branchDropdown().click()
    cy.wait(2000)
    AddProject.branchContainer().contains(' Direction 1 ').click()
    //responsible person არჩევა
    AddProject.responsiblePersonField().click()
    AddProject.responsibleDropdown().contains(' asdsada, wqewqdsa ').click()
// description ჩაწერა
    AddProject.description().click().type(`Description`)        
    
    
    AddProject.mapSearch().click().type(`Réuni`)
    AddProject.mapSearchDropdown().should(`be.visible`)
    AddProject.reunionClick()
    cy.wait(2000)
    AddProject.randomGeofence()

    cy.wait(1000);
    AddProject.addProjectBtn().click({ force: true });

cy.wait(3000)

cy.get('.shl-form-field-flex').click().type('{selectAll}{backspace}').type(projectName);
cy.wait(3000)
   AddProject.firstProject().contains(projectName).click()

   // add request flow  
   cy.get('[data-cy="add-request"]').click({ force: true })
        cy.wait(5000)
        // add request flow
        cy.get('[data-cy="equipment-request-category-select"]').click()
        AddProject.categoryDropdown().first().click()
        AddProject.furtherInformation().type(`information`)
        AddProject.sendAllRequests().click()
      // back to project     
      cy.wait(2000)
        // delete project
         cy.get('[data-cy="project-information-dots"]').click()
        cy.get('#cdk-menu-0').contains('entfernen').click()
        AddProject.deleteProjectYesBtn().click()
        
        // Check system message
        cy.contains('Das Projekt kann nicht gelöscht werden, solange es offene Anfragen besitzt.').should('be.visible')

  });
});
