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
   AddProject.addRequestBtn().click()
        cy.wait(5000)
        // add request flow
    AddProject.categoryName().click()
    AddProject.categoryDropdown().first().click()
      cy.get('.shl-date-range-picker > :nth-child(1) > .ng-valid > .input > .input-content-container > .input-flex-box').click()
  
  //     cy.get(':nth-child(1) > .shl-calendar-btn')
  // .click({ multiple: true, force: true })
  // .click()
  // .click()
  // .click()
  // .click()
  // .click()
  // .click()
  // .click()
  // .click()
  // .click()
  // .click()
  // .click()
  // .click()
  // .click()
  // .click()
  // .click()
  // .click()
  // .click()
  // .click()
  // .click()
  // .click()
  // .click()
  // .click()
  // .click()
  // .click()
  
  // .click()
  // .click()
  // .click()
  // .click()
  // .click()
  // .click()
  // .click()
  // .click()
  // .click()
  cy.get(':nth-child(1) > .shl-calendar > .shl-calendar-container > shl-plane-calendar-dates > .shl-calendar-dates > :nth-child(3) > :nth-child(4) > span').click();
  cy.get('body').click(0, 0);

        AddProject.furtherInformation().type(`information`)
        cy.get('.add-equipment__form-amount > :nth-child(3)').click({ multiple: true, force: true })
  .click()
  .click()
  .click()
    AddProject.sendAllRequests().click()


  });
});
