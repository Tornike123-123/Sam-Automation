/// <reference types="cypress" />
import { ProjectElements } from '../../Elements/ProjectElements/ProjectElements.js';

describe('My First Test Suite', function () {
  before(function () {
    cy.fixture('example').then(function (data) {
      this.data = data;
    });
  });

  it('should add project', function () {
   
   
    const AddProject = new ProjectElements();
    AddProject.samUrl()
    AddProject.userName().type('reg.driver@syniotec.com');
    AddProject.password().type('Qwerty1$');
    AddProject.loginBtn().click()
    AddProject.acceptCookiesBtn().click();
   

    // Steps to continue after login
    
    // Continue with other steps
 
// cy.visit(`https://sam.dev.syniotec.com/project/list`)



    AddProject.floatingMenuBtn().click({force: true});
    AddProject.floatingAddProject().click()
    AddProject.costCenterField().click().type(`Automation cost`)    
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

cy.get('.shl-form-field-flex').click().type(projectName);
cy.wait(3000)
   AddProject.firstProject().contains(projectName).click()

   // add request flow  
   AddProject.addRequestBtn().click()
        cy.wait(5000)
        // add request flow
    AddProject.categoryName().click()
    AddProject.categoryDropdown().first().click()
    AddProject.furtherInformation().type(`information`)
    AddProject.sendAllRequests().click()
      // back to project
    AddProject.backToProjectBtn().click()
      //click on new requests
    AddProject.newRequestTab().click()
      cy.wait(2000)
  // .click({ force: true });
    AddProject.editRequestBtn().click()
    AddProject.deleteEquipmentRequestBtn().click({ force: true });
    AddProject.deleteRequestYesBtn().click()
      // delete project
    AddProject.deleteProjectBtn().click()
    AddProject.deleteProjectYesBtn().click()

  });
});
