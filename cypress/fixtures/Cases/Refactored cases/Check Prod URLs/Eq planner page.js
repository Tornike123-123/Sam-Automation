/// <reference types="cypress" />
import { ProjectElements } from '../../../../fixtures/Cases/Elements/ProjectElements/ProjectElements.js';
import { AllURL } from '../../../../fixtures/Cases/Elements/SamURL/AllUrl.js';
describe('My First Test Suite', function () {

    // წამოვიღე დატა fixture"s" ფაილიდან იმეილი და პაროლი
    before(function(){
      cy.fixture(`example`).then(function(data){
  this.data=data
      })
    })
  
      it('Should add project than delete', function () {
        const ProjectListPage = new ProjectElements()
        const allUrls = new AllURL()
        
          allUrls.samProdUrl()
          ProjectListPage.userName().type('t.vatiashvili@syniotec.com');
          ProjectListPage.password().type('Qwerty1$$');
          ProjectListPage.loginBtn().click()
          cy.wait(10000 )
          allUrls.acceptCookiesBtn().click();
          allUrls.eqPlannerPage()
         cy.wait(5000)
         // check if there are more than 3 projects
         cy.get('.mbsc-timeline-resource-title > sam-planner-resource.ng-star-inserted > .resource')
         .should('have.length.at.least', 3);
          });
      });
 
  
