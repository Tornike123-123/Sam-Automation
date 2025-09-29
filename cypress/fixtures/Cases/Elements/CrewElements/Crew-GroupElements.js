export class CrewGroupElements {

// Crew and group list pages also Add Crew Add group flows
// add crew button from crew list page
addCrewBtn = () =>  cy.get('.add-crew__button')
 // warehouse and group search field
crewSearch = () =>    cy.get('[data-cy="crew-page-search"]')      
// group branch filter
groupBranchFilter = () =>    cy.get('[data-cy="groupe-page-branch"]')         
// crew branch filter
crewBranchFilter = () =>    cy.get('[data-cy="crew-page-branch"]')  
  // group Type filter
groupTypeFilter = () =>    cy.get('[data-cy="groupe-page-type"]')     
 // crew Type filter
 crewTypeFilter = () =>    cy.get('[data-cy="crew-page-type"]')   
       // crew Responsible person filter
 crewResponsiblePersonFilter = () =>    cy.get('[data-cy="crew-page-responsible-person"]') 
 //clear all filters 
 clearFilters = () =>    cy.get('[data-cy="clear-filters"]')     
 //crew detailes edit button
 crewDetailesEditBtn = () =>   cy.get('.kolone-details__button > .fas') 
// add crew title field
addCrewTitleField = () =>    cy.get('[data-cy="add-crew-title-field"]') 
// add crew responsible person drpdwn
addCrewResponsiblePersonField = () =>    cy.get('[data-cy="add-crew-responsible-field"]')  
//add crew area  drpdwn
addCrewAreaField = () =>    cy.get('[data-cy="add-crew-area-field"]')  
//crew type drpdwn
addCrewTypeField = () =>    cy.get('[data-cy="add-crew-type-field"]')   
//Create crew Button
createCrewButton = () =>    cy.get('[data-cy="add-crew-create-field"]') 
//Add company car tab 
addCompanyCarTab = () =>    cy.get('[data-cy="crew-add-car"]')  
//add crew equipment tab
addCrewEquipmentTab = () =>    cy.get('[data-cy="crew-add-equipment"]') 
// add crew person tab 
addCrewEquipmentTab = () =>    cy.get('[data-cy="crew-add-person"]') 
// company car edit 
companyCarEditBtn = () =>    cy.get('[data-cy="company-car-edit"]')    
//general information tab
generalInfoTab  = () =>    cy.get('[data-cy="crew-general-info"]')     
//crew equipment tab 
crewEquipmentTab  = () =>    cy.get('[data-cy="crew-equipment"]')      
//crew personnel tab
crewPersonnelTab  = () =>    cy.get('[data-cy="crew-person"]')  
// crew overview tab 
crewOerviewTab = () =>    cy.get('[data-cy="crew-overview"]') 
//crew finish overview button 
 crewOerviewTab = () =>    cy.get('[data-cy="add-crew-finish"]')
 

//CrewBookingCalendarIcon
CrewBookingCalendarIcon = () => cy.get('[data-cy="crew-start-date"] > .shl-date-picker > shl-input.ng-untouched > .input > .input-content-container > .input-flex-box > .action > .shl-select-calendar-btn')

      // add group flow
//Group add button
groupsAddButton = () => cy.get('[data-cy="add-groupe"]')
//Groups add name
    groupsAddName = () => cy.get('[data-cy="add-groupe-name"] > .input > .input-content-container > .input-flex-box > .input-flex-item > .ng-untouched')
//Groups add area
    groupsAddArea = () => cy.get('[data-cy="add-area-dropdown"] > .shl-select > .shl-select-inputs-container > .ng-valid > .input > .input-content-container > .input-flex-box > .field > .ng-untouched')   
//Groups add type
    groupsAddType = () => cy.get('[data-cy="add-type-dropdown"] > .shl-select > .shl-select-inputs-container > .ng-valid > .input > .input-content-container > .input-flex-box > .field > .ng-untouched')
//Groups add Categories
    groupsAddCategories = () => cy.get(':nth-child(2) > .card > .card__actions > sam-card-wrapper-actions.ng-star-inserted > .action > .action__initial > .action__initial-btn')
//Groups add Qualifications
    groupsAddQualifications = () => cy.get(':nth-child(4) > .card > .card__actions > sam-card-wrapper-actions.ng-star-inserted > .action > .action__initial > .action__initial-btn > .fas')
//Groups save button
    groupsAddSave = () => cy.get('[data-cy="groupe-save"]')
//Groups Text name
    groupsTextName = () => cy.get('.groupe__text')  





//group detailed page
// book resources button
groupBookResourcesBtn = () =>    cy.get('[data-cy="book-resource-groupe"]')
// delete group button
deleteGroupBtn = () =>    cy.get('[data-cy="delete-groupe"]')
// edit group general information button
editGroupGeneralInfoBtn = () =>    cy.get('[data-cy="general-info-button"]') 
// group category -  minus button
groupCategoriesMinusBtn = () =>    cy.get('[data-cy="groupe-edit-minus"]')  
//group category + Plus button
groupCategoriesPlusBtn = () =>    cy.get('[data-cy="groupe-edit-plus"]')




}