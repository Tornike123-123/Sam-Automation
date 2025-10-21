import { ProjectElements } from '../../Elements/ProjectElements/ProjectElements.js';

describe('This case will create project add request, delete request and delete project', function () {
  before(function () {
    cy.fixture('example').then(function (data) {
      this.data = data;
    });
  });
  it('should add project', function () { 
    cy.viewport(1920, 1000);
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
    AddProjectPersonRequestAndDelete.personnelNewRequestAccordion().click({ force: true })
    cy.wait(2000)
    AddProjectPersonRequestAndDelete.addPersonQualificationField().click()
    AddProjectPersonRequestAndDelete.addPersonRequestChooseQualification().contains('Baumaschinenführer').click();
    AddProjectPersonRequestAndDelete.addPersonRequestStartDatePicker().click()
    AddProjectPersonRequestAndDelete.addPersonRequestChooseDate().contains('23').click()
    cy.get(':nth-child(2) > .shl-calendar > .shl-calendar-container > shl-plane-calendar-dates > .shl-calendar-dates > :nth-child(5) > :nth-child(7) > span').click()

    AddProjectPersonRequestAndDelete.addPersonRequestAdditionalInfoField().click().type(`additional info`)
    AddProjectPersonRequestAndDelete.sendAllPersonRequests().click()
   
    cy.wait(3000)
    cy.get('[data-cy="persons-tab"]').click()
    cy.get('[data-cy="action-dots"]').click()
    cy.get('.cdk-menu-item.menu__item').contains('Anfrage löschen').click()
    
    AddProjectPersonRequestAndDelete.personnelRequestDeleteYesBtn().click()
    cy.get('[data-cy="project-information-dots"]').click()
    cy.get('.cdk-menu.cdk-menu-group.menu.ng-star-inserted').contains('entfernen').click()

    AddProjectPersonRequestAndDelete.deleteProjectYesBtn().click()
      
  });

        });

 