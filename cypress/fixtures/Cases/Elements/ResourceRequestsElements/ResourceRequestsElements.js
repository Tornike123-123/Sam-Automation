export class ResourceRequestsElements {
//Resource requests List page
//Branch filter
resourceRequestsListBranchSearch = () =>    cy.get('[data-cy="resource-request-branch"]')  
//Project filter
resourceRequestsListProjectSearch = () =>    cy.get('[data-cy="resource-request-projects"]')  
//Title filter
resourceRequestsListTitleSearch = () =>    cy.get('[data-cy="resource-request-search"]')  
//Person filter
resourceRequestsListPersonSearch = () =>    cy.get('[data-cy="resource-request-persons"]')  
//OrderBy filter
resourceRequestsListOrderBySearch = () =>    cy.get('[data-cy="resource-request-order"]') 
//Tag filter
resourceRequestsListTagSearch = () =>    cy.get('[data-cy="resource-request-tags"]') 



//Resource requests Detailed page
//Equipment Tab 
resourceRequestsEqTab = () =>    cy.get('[data-cy="resource-request-equipment-tab"]')  
//Personnel Tab 
resourceRequestsPersonnelTab = () =>    cy.get('[data-cy="resource-request-person-tab"]') 
//Crew Tab 
resourceRequestsCrewTab = () =>    cy.get('[data-cy="resource-request-crew-tab"]') 
//Equipment  
//equipment New requests Tab
resourceRequestsEqNewRequestsTab = () =>    cy.get('#accordion-header-0')
//equipment Pending Tab
resourceRequestsEqPendingTab = () =>    cy.get('#accordion-header-1')
//equipment Confirmed Tab
resourceRequestsEqConfirmedTab = () =>    cy.get('#accordion-header-2')
// Title, Subtitle, Category search 
resourceRequestsTitleSearch = () =>    cy.get('[data-cy="inventory-number-input"]') 
//branch filter
resourceRequestsBranchSearch = () =>    cy.get('[data-cy="crew-planner-branch"]') 
//Location search
resourceRequestsLocationSearch = () =>    cy.get('[data-cy="location-overlay-trigger"]') 
// request "..." edit button
resourceRequestsEditRequestBtn = () =>    cy.get('[data-cy="project-list-edit"]') 
//Delete request button
resourceRequestsEditRequestBtn = () =>    cy.get('[data-cy="project-delete-assigment"]') 
//update Tags button
resourceRequestsEditRequestBtn = () =>    cy.get('[data-cy="project-update-tags"]') 
// pending Tab - From edit button 
//Go to equipment page button - redirect to equipments page
resourceRequestsGoToEqPage = () =>    cy.get('[data-cy="project-navigate-equipment"]') 
// edit transportation  
resourceRequestsEditTransportation = () =>    cy.get('[data-cy="project-edit-transportation"]') 
// Delete transportation  
resourceRequestsDeleteTransportation = () =>    cy.get('[data-cy="project-delete-transportation"]') 
//Personnel New requests Tab
resourceRequestsNewRequestsTab = () =>   cy.get('#accordion-header-0')
//Personnel Confirmed Tab
resourceRequestsConfirmedTab = () =>   cy.get('#accordion-header-1')
//Edit button in New requests (If i want to click on first cards edit button in list)
resourceRequestsEditBtn = () =>  cy.get('.card.ng-star-inserted').first()
  .find('.container > .dropdown > .mat-mdc-menu-trigger > .mat-mdc-button-touch-target')
  // delete confirmed request button
  resourceRequestsDeleteConfirmedRequestBtn = () => cy.get('.del-btn.fas.fa-times.ng-star-inserted')
  // Delete Crew request button
  resourceRequestsDeleteCrewRequestBtn = () => cy.get('[data-cy="resource-delete-button"]')  
  // Crew request search 
  resourceRequestsCrewRequestSearch = () => cy.get('[data-cy="resource-search-by-title"]')  

}