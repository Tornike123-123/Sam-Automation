import { ProjectElements } from '../../../../fixtures/Cases/Elements/ProjectElements/ProjectElements.js';
import { AllURL } from '../../../../fixtures/Cases/Elements/SamURL/AllUrl.js';
describe('My First Test Suite', function () {
   
      it('Should add project than delete', function () {
        const ProjectListPage = new ProjectElements()
        const allUrls = new AllURL()
          allUrls.samProdUrl()
          ProjectListPage.userName().type('t.vatiashvili@syniotec.com');
          ProjectListPage.password().type('Qwerty1$$');
          ProjectListPage.loginBtn().click()
            cy.wait(10000 )
            cy.get(':nth-child(2) > .ch2-btn').click();
            allUrls.groupListPage()
            cy.wait(5000)
         // check if there are more than 1 project
            cy.get('sam-groupe-list-item')
            .its('length')
            .should('be.greaterThan', 1);
          });
      });