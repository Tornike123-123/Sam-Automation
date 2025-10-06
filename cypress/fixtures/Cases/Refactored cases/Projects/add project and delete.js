/// <reference types="cypress" />
import { ProjectElements } from '../../Elements/ProjectElements/ProjectElements.js';

describe('My First Test Suite', function () {

    // წამოვიღე დატა fixture"s" ფაილიდან იმეილი და პაროლი
    before(function(){
      cy.fixture(`example`).then(function(data){
  this.data=data
      })
    })
    
  
      it('Should add project than delete', function () {
        const AddProjectAndDelete = new ProjectElements()
        AddProjectAndDelete.samUrl()
        AddProjectAndDelete.userName().type('reg.driver@syniotec.com');
        AddProjectAndDelete.password().type('Qwerty1$');
        AddProjectAndDelete.loginBtn().click()
        cy.wait(10000 )
        AddProjectAndDelete.acceptCookiesBtn().click();
        // აქამდე კოდი არის შესვლა მხოლოდ
  
          // აქამდე კოდი არის შესვლა მხოლოდ
          AddProjectAndDelete.floatingMenuBtn().click()
          cy.wait(2000)
          AddProjectAndDelete.floatingAddProject().click()
          // რუკაზე ჯერ სერჩში ჩაწერა შემდეგ პირველივე მონიშვნა მონიშვნა
          AddProjectAndDelete.costCenterField().click().type(`Automation cost`)    
          const projectName = "Cypress_test"+ new Date().toString();

          AddProjectAndDelete.projectTitleField().click().type(projectName) 
           // ბრენჩის არჩევა
          AddProjectAndDelete.branchField().click()
          cy.wait(2000)
          AddProjectAndDelete.branchContainer().contains(' Direction 1 ').click()
          //responsible person არჩევა
          AddProjectAndDelete.responsiblePersonField().click();
          AddProjectAndDelete.responsibleDropdown().contains(' asdsada, wqewqdsa ').click()
  // description ჩაწერა
          AddProjectAndDelete.description().click().type(`Description`)        
          
          
          AddProjectAndDelete.mapSearch().click().type(`Réuni`)
          AddProjectAndDelete.mapSearchDropdown().should(`be.visible`)
          AddProjectAndDelete.reunionClick()
          cy.wait(2000)
          AddProjectAndDelete.randomGeofence ()

          cy.wait(1000);
          AddProjectAndDelete.addProjectBtn().click({ force: true });

cy.wait(3000)

cy.get('.shl-form-field-flex').click().type(projectName);
cy.wait(3000)

         // Click on first element in the list container that contains project name
         cy.get('.ag-body-viewport > .ag-viewport').contains(projectName).click()
         cy.get('[data-cy="project-information-dots"]').click()
         // Click on third element in the dropdown menu (alternative approach)
         cy.get('[role="menu"]').find('button').eq(2).click()
        //  AddProjectAndDelete.deleteProjectBtn().click()
         AddProjectAndDelete.deleteProjectYesBtn().click()
          });
      });
  
  