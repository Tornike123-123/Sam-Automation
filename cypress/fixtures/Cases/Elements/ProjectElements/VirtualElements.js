
export class VirtualElements {
// Add virtual project  flow
  //add virtual project button
  addVirtualprojectBtn = () => cy.get(`.filter-wrapper__button`)
// add virtual project name field 
  addVirtualNameField = () => cy.get('[data-cy="add-virtual-project-name"]');
// add virtual project cost center field 
addVirtualCostCenterField = () => cy.get('[data-cy="add-virtual-project-cost-center"]')
//branch dropdown in add virtual pop
addVirtualBranchDropdown = () => cy.get('.select-box > .mat-mdc-form-field > .mat-mdc-text-field-wrapper')
//select first branch in dropdown
selectFirstBranch = () => cy.get('#mat-option-0')
//adress field in add  virtual project popup
addressField = () => cy.get(':nth-child(4) > .mat-mdc-form-field > .mat-mdc-text-field-wrapper')
//create virtual project button 
createVirtualProjectBtn = () =>    cy.get('[data-cy="add-virtual-project-submit"]')
// convert virtual project btn from virtual project detailed page
convertVirtualProjectBtn = () =>  cy.get('.header__content-button.ng-star-inserted')

// Virtual project list page
virtualListPage = () =>  cy.visit(`https://sam.dev.syniotec.com/virtual-project/list`)

// virtual search by title field
searchVirtualProject = () => cy.get('.shl-form-field-flex')

}