/// <reference types="cypress" />
import { ProjectElements } from '../../Elements/ProjectElements/ProjectElements.js';
describe('Inactive and delete', () => {
  beforeEach(() => {
      const email = "reg.driver@syniotec.com";
      const password = "Qwerty1$";
      cy.session('login', () => {
          cy.SAMlogin(email, password);
      });
  });
      it('should add project', function () {
        const AddProject = new ProjectElements()
       
    cy.visit('https://sam.dev.syniotec.com/planner/calendar');
        AddProject.floatingMenuBtn().click({force: true});
        AddProject.floatingAddProject().click()
        AddProject.costCenterField().click().type(`Automation cost`)    
        const projectName = `Cypress_${Date.now()}`;
        AddProject.projectTitleField().click().type(projectName)

           // ბრენჩის არჩევა
        AddProject.branchField().click()
       
          // AddProject.branchDropdown().click()
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
cy.wait(5000)
AddProject.searchInactiveProject().click().type('{selectAll}{backspace}');
cy.wait(1000)
        AddProject.searchInactiveProject().click().type(projectName);
cy.wait(5000)
         AddProject.firstProject().contains(projectName).click()
         AddProject.inactiveBtn().click()  
         AddProject.inactiveProjectYesBtn().click()
         cy.wait(3000)
         AddProject.inactiveProjectListPage()
         cy.wait(3000)
         AddProject.searchInactiveProject().click().type('{selectAll}{backspace}');
         AddProject.searchInactiveProject().click().type(projectName);
         AddProject.firstProject().contains(projectName).click()
         AddProject.editInactiveBtn().click()

         
         AddProject.costCenterField().click().type(`123`)    
         AddProject.projectTitleField().click().type(`123`)
         AddProject.branchField().click()
         AddProject.branchContainer().contains(' Direction 1 ').click()
         AddProject.responsiblePersonField().click()
         AddProject.responsibleDropdown().contains(' asdsada, wqewqdsa ').click()
         AddProject.description().click().type(`Description123`)        
         AddProject.addProjectBtn().click({ force: true });
         cy.wait(5000)
         AddProject.firstProject().contains(projectName).click()
         AddProject.deleteProjectBtn().click()
         AddProject.deleteProjectYesBtn().click()
          });
      });
  
  