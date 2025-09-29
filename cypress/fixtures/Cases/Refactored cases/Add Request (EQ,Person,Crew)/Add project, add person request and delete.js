import { ProjectElements } from '../../Elements/ProjectElements/ProjectElements.js';

describe('This case will create project add request, delete request and delete project', function () {
  before(function () {
    cy.fixture('example').then(function (data) {
      this.data = data;
    });
  });
  it('should add project', function () { 
    const AddProjectPersonRequestAndDelete = new ProjectElements();
    AddProjectPersonRequestAndDelete.samUrl()
    AddProjectPersonRequestAndDelete.userName().type('reg.driver@syniotec.com');
    AddProjectPersonRequestAndDelete.password().type('Qwerty1$');
    AddProjectPersonRequestAndDelete.loginBtn().click()
    AddProjectPersonRequestAndDelete.acceptCookiesBtn().click({force: true});
    AddProjectPersonRequestAndDelete.floatingMenuBtn().click({force: true});
    cy.wait(1000)
    AddProjectPersonRequestAndDelete.floatingAddProject().click()
    AddProjectPersonRequestAndDelete.costCenterField().click().type(`Automation cost`)    
    const projectName = "Cypress_test"+ new Date().toString();
    AddProjectPersonRequestAndDelete.projectTitleField().click().type(projectName)
     // ბრენჩის არჩევა
     AddProjectPersonRequestAndDelete.branchField().click()
    // AddProject.branchDropdown().click()
    AddProjectPersonRequestAndDelete.branchContainer().contains(' Direction 1 ').click()
    //responsible person არჩევა
    AddProjectPersonRequestAndDelete.responsiblePersonField().click()
    AddProjectPersonRequestAndDelete.responsibleDropdown().contains(' asdsada, wqewqdsa ').click()
// description ჩაწერა
    AddProjectPersonRequestAndDelete.description().click().type(`Description`)         
    AddProjectPersonRequestAndDelete.mapSearch().click().type(`Réuni`)
    AddProjectPersonRequestAndDelete.mapSearchDropdown().should(`be.visible`)
    AddProjectPersonRequestAndDelete.reunionClick()
   cy.wait(2000)
    AddProjectPersonRequestAndDelete.randomGeofence()
    cy.wait(1000);
    AddProjectPersonRequestAndDelete.addProjectBtn().click({ force: true });
cy.wait(3000)
cy.get('.shl-form-field-flex').click().type(projectName);
cy.wait(5000)
    AddProjectPersonRequestAndDelete.firstProject().contains(projectName).click().should('be.visible')
      // add request flow
    AddProjectPersonRequestAndDelete.addRequestBtn().click()
    cy.wait(2000)
    cy.get('#mat-tab-group-1-label-1').click({ force: true });
    AddProjectPersonRequestAndDelete.addPersonQualificationField().click()
    AddProjectPersonRequestAndDelete.addPersonRequestChooseQualification().contains('Baumaschinenführer').click();
    AddProjectPersonRequestAndDelete.addPersonRequestStartDatePicker().click()
    AddProjectPersonRequestAndDelete.addPersonRequestChooseDate().contains('23').click()
    AddProjectPersonRequestAndDelete.backgroundClick()
    AddProjectPersonRequestAndDelete.addPersonRequestEndDatePicker().click()
    AddProjectPersonRequestAndDelete.addPersonRequestChooseDate().contains('2').click()
    AddProjectPersonRequestAndDelete.backgroundClick()
    AddProjectPersonRequestAndDelete.addPersonRequestAdditionalInfoField().click().type(`additional info`)
    AddProjectPersonRequestAndDelete.sendAllPersonRequests().click()
     cy.wait(5000)
    cy.visit('https://sam.dev.syniotec.com/project/list');
     //AddProjectPersonRequestAndDelete.projectListPage().click()
    cy.wait(10000)
    AddProjectPersonRequestAndDelete.firstProject().contains(projectName).click()
    cy.get('#mat-tab-group-0-label-1').click()
    cy.wait(2000)
    AddProjectPersonRequestAndDelete.personnelNewRequestAccordion().click()
    AddProjectPersonRequestAndDelete.personnelCardXButton().click()
    AddProjectPersonRequestAndDelete.personnelRequestDeleteYesBtn().click()
    AddProjectPersonRequestAndDelete.deleteProjectBtn().click()
    AddProjectPersonRequestAndDelete.deleteProjectYesBtn().click()
      
  });

        });

