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
        AddProject.acceptCookiesBtn().click();
          // აქამდე კოდი არის შესვლა მხოლოდ
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
cy.wait(3000)
AddProject.searchInactiveProject().click().type('{selectAll}{backspace}');
cy.wait(1000)
        AddProject.searchInactiveProject().click().type(projectName);
cy.wait(3000)
         AddProject.firstProject().contains(projectName).click()
         AddProject.inactiveBtn().click()  
         AddProject.inactiveProjectYesBtn().click()
         AddProject.inactiveProjectListPage()
         cy.wait(4000)
         AddProject.searchInactiveProject().click().type('{selectAll}{backspace}')
         AddProject.searchInactiveProject().click().type(projectName);
         AddProject.firstProject().contains(projectName).click()
         AddProject.activeBtn().click()
         AddProject.activeProjectYesBtn().click()
          });
      });
  
  