/// <reference types="cypress" />
import { ProjectElements } from '../../Elements/ProjectElements/ProjectElements.js';
describe('My First Test Suite', function () {

    before(function(){
      cy.fixture(`example`).then(function(data){
  this.data=data
      })
    })
      it('should add project', function () {
        const AddProject = new ProjectElements()
        AddProject.samUrl()
        AddProject.userName().type('reg.driver@syniotec.com');
        AddProject.password().type('Qwerty1$');
        AddProject.loginBtn().click()
        // AddProject.overlappingCloseBtn().click()
        // AddProject.acceptCookiesBtn().click();
        cy.wait(10000)
        AddProject.virtualListPage()
        AddProject.addVirtualprojectBtn().click()
        const projectName = "Cypress_virtual_Project"+ new Date().toString();
        AddProject.addVirtualNameField().click().type(projectName)
        AddProject.addVirtualCostCenterField().click().type(`Automation cost`)
        AddProject.addVirtualBranchDropdown().click()
        AddProject.selectFirstBranch().click()
        AddProject.addressField().click().type(`Tbilisi`)
        AddProject.createVirtualProjectBtn().click({ force: true })
        cy.wait(3000)
        AddProject.searchVirtualProject().click().type(projectName);
        cy.wait(2000)
        cy.get('.projects-wrapper').contains('Cypress_virtual_Project').invoke('removeAttr', 'target').click();
        AddProject.deleteProjectBtn().click()
        AddProject.deleteVirtualYesBtn().click()
         
  
          });
      });
  
