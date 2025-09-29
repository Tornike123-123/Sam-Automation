export class AddProjectElementList {

//floating menu
floatingMenuBtn = () =>  cy.get('.cdk-menu-trigger float-menu ng-tns-c615587164-0 mdc-fab mat-mdc-fab mat-accent mat-mdc-button-base') 
//add project
floatingAddProject = () => cy.get('[href="/add/project"]')
//Cost center field
costCenterField = () => cy.get(':nth-child(1) > .shl-form-field > .shl-form-field-wrapper > .shl-form-field-flex > .shl-form-field-infix > .ng-untouched')
//title of project
projectTitleField = () =>   cy.get('.shl-form-field-infix > .ng-pristine')
//click on brench field
loginBtn = () =>   cy.get('.add-form > :nth-child(3)')
//branch dropdown
branchDropdown = () =>   cy.get('.shl-select-options-container')
//responsible person
responsiblePersonField = () =>    cy.get('[data-id="add_project-responsible-persons"]')
//responsible dropdown
responsibleDropdown = () =>   cy.get('.cdk-overlay-pane')
//branch field 
branchField = () =>   cy.get('.add-form > :nth-child(3)')
//branch dropdown
branchDropdown = () =>   cy.get('.shl-select-options-container').contains('Test Direction - 2')
 //description
description = () =>   cy.get('.textarea-label-container')
//map search
mapSearch = () =>   cy.get('.pac-target-input')
//map serch dropdown
mapSearchDropdown = () =>     cy.get('.pac-container')
//Geofence
geofence = () =>   cy.get(':nth-child(2) > .action')
//add project button
addProjectBtn = () =>   cy.get('.shl-button-dir')
//project search by title 
searchProjectByTitle = () => cy.get('.shl-form-field-infix > .ng-pristine')
}