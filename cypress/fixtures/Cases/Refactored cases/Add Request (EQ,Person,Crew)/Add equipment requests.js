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



    cy.visit(`https://sam.dev.syniotec.com/project/list`)
    cy.wait(4000)
    cy.get('.shl-form-field-flex').click().type('{selectAll}{backspace}');
    cy.get('.shl-form-field-flex').click().type(`Cypress_test`)
    AddProject.firstProject().contains('Cypress_test').click()

   // add request flow  
   cy.get('[data-cy="add-request"]').click({ force: true })
        cy.wait(5000)
        // add request flow
        cy.get('[data-cy="equipment-request-category-select"]').click()
        AddProject.categoryDropdown().first().click()
        AddProject.furtherInformation().type(`information`)
        AddProject.sendAllRequests().click()
        


  });
});
