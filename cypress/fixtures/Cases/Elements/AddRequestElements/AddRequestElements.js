export class RequestsElements {
//ADD requests / eq/person/crew
// Add  equipment request flow
//Equipment Tab
addEqRequestEqTab  = () =>  cy.get('[data-cy="resource-request-equipment-tab"]')
// choose project field
addEqRequestProjectField  = () =>    cy.get('[data-cy="add-request-project"]') 
//category field
addEqRequestCategoryField  = () =>    cy.get('[data-cy="add-request-categories"]')
// this is category dropdown list and i can select with names (contains:...  or First().click)
addEqRequestChooseCategory    = () =>  cy.get('.category-search__content-item.ng-star-inserted')         
//Choose Tag
addEqRequestChooseTag  = () =>    cy.get('[data-cy="add-request-tags"]')   
// start date picker
addEqRequestStartDatePicker  = () =>    cy.get('[data-cy="add-request-start-date"]')    
// End date picker
addEqRequestEndDatePicker  = () =>    cy.get('[data-cy="add-request-end-date"]')  
// add request "-" minus button 
addEqRequestMinusBtn  = () =>    cy.get('[data-cy="add-request-minus"]') 
// add request "+" Plus Button 
addEqRequestPlusBtn  = () =>    cy.get('[data-cy="add-request-plus"]') 
//Further information
addEqRequestFurthInfo  = () =>    cy.get('[data-cy="add-request-textarea"]') 
//send all requests
addEqRequestSendAllRequests = () =>  cy.get('.shl-button-dir.filled.md.add-equipment__button.add-equipment__button--send')

//Add Personnel request
//Personnel Tab
addPerRequestPersonnelTab = () => cy.get('[data-cy="resource-request-person-tab"]')
//choose project in add peronnel request\
addPerRequestProjectField  = () =>    cy.get('[data-cy="add-request-person-project"]') 
//Qualification field
addPerRequestQualificationField  = () =>    cy.get('[data-cy="add-request-person-qualification"]') 
// request "-" Minus Button 
addPerMinusBtn  = () =>    cy.get('[data-cy="add-request-person-minus"]') 
// request "+" Plus Button 
addPerPlusBtn  = () =>    cy.get('[data-cy="add-request-person-plus"]') 
// Start date picker
addPerRequestStartDatePicker  = () =>    cy.get('[data-cy="add-request-person-start-date"]') 
// End date picker
addPerRequestEndDatePicker  = () =>    cy.get('[data-cy="add-request-person-end-date"]') 
  // Further information
addPerRequestFurthInfo  = () =>    cy.get('[data-cy="add-request-person-textarea"]') 
//Person Send all requests button
addPerRequestSendAllRequestsBtn  = () =>    cy.get('[data-cy="add-request-person-add"]') 


//Add Crew request
// Crew tab 
addCrewRequestCrewTab  = () =>   cy.get('[data-cy="resource-request-crew-tab"]')
// project picker in crew requests
addCrewRequestProjectField  = () =>    cy.get('[data-cy="add-request-crew-project"]') 
// Crew type field
addCrewRequestTypeField  = () =>    cy.get('[data-cy="add-request-crew-type"]') 
// Start date picker in crew request
addCrewRequestStartDatePicker  = () =>    cy.get('[data-cy="add-request-crew-start-date"]') 
// End date picker in crew request
addCrewRequestEndDatePicker  = () =>    cy.get('[data-cy="add-request-crew-end-date"]') 
//crew further info 
addCrewRequestFurthInfo  = () =>    cy.get('[data-cy="add-request-crew-textarea"]') 
//Send request crew
addCrewRequestSendRequest  = () =>    cy.get('[data-cy="add-request-crew-send"]') 
}