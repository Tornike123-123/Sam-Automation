/// <reference types="cypress" />
import { ProjectElements } from '../../../../fixtures/Cases/Elements/ProjectElements/ProjectElements.js';
describe('My First Test Suite', function () {

    before(function(){
      cy.fixture(`example`).then(function(data){
  this.data=data
      })
    })
      it('should add project', function () {
        const AddProject = new ProjectElements()
        cy.session('loginSession', () => {
          AddProject.samUrl();
          AddProject.userName().type('reg.driver@syniotec.com');
          AddProject.password().type('Qwerty1$');
          AddProject.loginBtn().click();
          AddProject.acceptCookiesBtn().click();

          cy.wait(10000);
    
        });
   cy.visit(`https://sam.dev.syniotec.com/equipment-database`)
        AddProject.databaseBranchFilter().click()
        cy.get(':nth-child(1) > sam-dynamic-select-control.ng-untouched > div.dynamic-select > :nth-child(1) > .custom-select-header > .ng-select-container').click()
        cy.get('.scrollable-content').contains('Direction 1').click();
        AddProject.branchApplyFilterBtn().click()
         AddProject.databaseCategoryFilter().click()
         cy.get('.scrollable-content').contains(` 3-Achs-Kipper `).click()
         AddProject.databaseOperatorFilter().click()
         cy.get('.scrollable-content').contains(` DIspatcher, Bacho `).click()
         AddProject.databaseOrderByFilter().click()
         cy.get('.scrollable-content').contains(` Zuerst hinzugefügt `).click()
          AddProject.databaseStatusFilter().click()
          cy.get('.scrollable-content').contains(` Aktiv `).click()
          cy.get('.table__row').contains('Caterpillar H120GC').should('be.visible')
  .then(() => cy.log('Is visible'));
  cy.wait(2000)
          // AddProject.databaseClearAllFiltersBtn().click()
          // AddProject.clearFiltersYesBtn().click()
      });
      });
  
  