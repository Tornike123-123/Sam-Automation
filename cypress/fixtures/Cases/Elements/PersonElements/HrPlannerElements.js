export class HrPlannerElements {
// HR planner page
//Hr planner search by title filter
hrPlannerSearchFilter  = () =>    cy.get('[data-cy="hr-planner-search"]') 
//Hr planner Branch filter
hrPlannerBranchFilter  = () =>    cy.get('[data-cy="hr-planner-branch"]') 
//Hr planner Project filter
hrPlannerProjectFilter  = () =>    cy.get('[data-cy="hr-planner-projects"]') 
//Hr planner  filter Popup
hrPlannerFilterPopup  = () =>    cy.get('[data-cy="hr-planner-filter-popup"]') 
//Hr planner Request side bar
hrPlannerRequestSideBar  = () =>    cy.get('[data-cy="hr-planner-requests"]') 
//Hr planner Week view
hrPlannerWeekView  = () =>    cy.get('[data-cy="week"]') 
//Hr planner month view
hrPlannerMonthView  = () =>    cy.get('[data-cy="month"]') 
//Hr planner Custom view
hrPlannerCustomView  = () =>    cy.get('[data-cy="custom"]') 
//Hr planner Settings 
hrPlannerSettings  = () =>    cy.get('[data-cy="hr-planner-setting"]') 
//Hr Planner Plus + button add  peron to crew button
hrPlannerPlusBtn  = () =>    cy.get('[data-cy="hr-planner-person-plus"]') 
//Hr Planner Minus - button add  peron to crew button
hrPlannerMinusBtn  = () =>    cy.get('[data-cy="hr-planner-persons-minus"]') 
//Hr Planner Crew search field imn popup
hrPlannerCrewSearch  = () =>    cy.get('[data-cy="hr-planner-plus-popup-crew"]') 
//Hr Planner Add to Crew  button
hrPlannerAddToCrewBtn  = () =>    cy.get('[data-cy="hr-planner-plus-popup-add"]') 
//Hr Planner Project detailes button
hrPlannerProjectDetailesBtn  = () =>    cy.get('[data-cy="context-menu-details"]') 
//Hr Planner Merge button
hrPlannerMergeBtn  = () =>    cy.get('[data-cy="hr-planner-merge"]') 
//Hr Planner Booking button
hrPlannerBookingBtn  = () =>    cy.get('[data-cy="hr-planner-booking"]') 
//Hr Planner Report button
hrPlannerReportBtn  = () =>    cy.get('[data-cy="hr-planner-download-report"]') 
//Hr planner Person info popup
hrPlannerPersonInfoPopup  = () =>    cy.get('[data-cy="hr-planner-person-info"]') 
//Hr planner Add certificate
hrPlannerAddCertificate  = () =>    cy.get('[data-cy="add-certification"]') 
//Hr planner Add Qualification
hrPlannerAddQualification  = () =>    cy.get('[data-cy="add-qualification"]') 
//Hr planner Book button
hrPlannerBookBtn  = () =>    cy.get('[data-cy="book-btn"]') 
//Hr planner To profile button
hrPlannerToProfileBtn  = () =>    cy.get('[data-cy="to-profile"]') 
// Booking popup
//Hr planner Project field
hrPlannerBookingProjectField  = () =>    cy.get('[data-cy="booking-projects"]') 
//Hr planner booking radio button
hrPlannerBookingRadioBtn  = () =>    cy.get('[data-cy="Booking"]') 
//Hr planner Status radio button
hrPlannerStatusRadioBtn  = () =>    cy.get('[data-cy="Status"]') 
//Hr planner Release radio button
hrPlannerReleaseRadioBtn  = () =>    cy.get('[data-cy="Release"]') 
//Hr planner Personnel field
hrPlannerBookingPersonnelField  = () =>    cy.get('[data-cy="bookig-personel"]') 
//Hr planner Start date 
hrPlannerBookingStartDate  = () =>    cy.get('[data-cy="booking-start-date"]') 
//Hr planner start Time
hrPlannerBookingStartTime  = () =>    cy.get('[data-cy="booking-start-time"]') 
//Hr planner End date 
hrPlannerBookingEndDate  = () =>    cy.get('[data-cy="booking-end-date"]') 
//Hr planner end Time
hrPlannerBookingEndTime  = () =>    cy.get('[data-cy="booking-end-time"]') 
//Hr planner Additional information
hrPlannerBookingAdditionalInfo  = () =>    cy.get('[data-cy="booking-textarea"]') 
//Hr planner Save Button
hrPlannerBookingSaveBtn  = () =>    cy.get('[data-cy="submit-btn"]') 
//Hr planner Discard booking butotn
hrPlannerBookingDiscardBtn  = () =>    cy.get('[data-cy="discard"]')
//Hr planner Delete booking butotn
hrPlannerDeleteBookingBtn  = () =>    cy.get('[data-cy="delete-booking"]') 
}