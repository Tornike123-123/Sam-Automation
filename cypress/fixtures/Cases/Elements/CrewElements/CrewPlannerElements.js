export class CrewPlannerElements {

    // Crew planner Page //
    
    CrewPlannerPage = () => cy.get(':nth-child(3) > .nav-item').realHover().get('a[data-cy="crew-planner-nav-page"]').click();
//Crew planner Search by title filter
    crewPlannerSearchByTitleFilter  = () => cy.get('.shl-form-field-flex')
 //Crew planner Branch filter
    crewPlannerBranchFilter  = () => cy.get('[data-cy="crew-planner-branch"] > .shl-select > .shl-select-inputs-container > .ng-valid > .input > .input-content-container > .input-flex-box > .field > .ng-untouched')
 //Crew planner Branch filter
    crewPlannerProjectFilter  = () => cy.get('.shl-select-inputs-container > .ng-valid > .input > .input-content-container > .input-flex-box > .field > .ng-untouched')
//Crew planner Week view
    CrewPlannerWeekView  = () => cy.get('[data-cy="week"]')
//Crew planner month view
    CrewPlannerMonthView  = () =>  cy.get('[data-cy="month"]')
//Crew planner Custom view
    CrewPlannerCustomView  = () =>    cy.get('[data-cy="custom"]')
//Crew planner Timeline Left arrow
    CrewPlannerLeftArrow   = () =>    cy.get('[data-cy="crew-planner-left-arrow"]')
//Crew planner Timeline Right arrow
    CrewPlannerRightArrow  = () =>    cy.get('[data-cy="crew-planner-right-arrow"]')
//Crew planner Timeline Today
    CrewPlannerToday  = () =>    cy.get('[data-cy="crew-planner-today"]')
//Crew planner Booking button
    CrewPlannerBookingBtn  = () =>    cy.get('[data-cy="crew-planner-booking-button"]')
//Crew planner  project field
    CrewPlannerBookingProjectField  = () =>    cy.get('[data-cy="crew-booking"]')
//Crew planner  Booking radio btn
    CrewPlannerBookingRadioBtn  = () =>    cy.get('[data-cy="crew-booking"]')
//Crew planner  Release radio btn
    CrewPlannerReleaseRadioBtn  = () =>    cy.get('[data-cy="crew-release"]')
//Crew planner  Booking start date picker
    CrewPlannerBookingStartDate  = () =>    cy.get('[data-cy="crew-start-date"]')
//Crew planner  Booking start Time  picker
    CrewPlannerBookingStartTime  = () =>    cy.get('[data-cy="crew-start-time"]')
//Crew planner  Booking End Date  picker
    CrewPlannerBookingEndDate = () =>    cy.get('[data-cy="crew-end-date"]')
//Crew planner  Booking End Date  picker
    CrewPlannerBookingEndDate = () =>    cy.get('[data-cy="crew-end-date"]')
//Crew planner  Booking End time  picker
    CrewPlannerBookingEndTime = () =>    cy.get('[data-cy="crew-end-time"]')
//Crew planner  Booking Crew dropdown
    CrewPlannerBookingCrewDropdown = () =>    cy.get('[data-cy="crew-dropdown"]')
//Crew planner  Booking Crew Type dropdown
    CrewPlannerBookingCrewType = () =>    cy.get('[data-cy="crew-type-dropdown"]')
//Crew planner  Booking additional info
    CrewPlannerBookingAdditionalInfo = () =>    cy.get('[data-cy="crew-additional-info"]')
//Crew Calendar icon/button
    CrewCalendarIcon = () => cy.get(':nth-child(1) > .ng-valid > .input > .input-content-container > .input-flex-box > .action > .shl-select-calendar-btn').invoke('attr', 'aria-expanded', 'true')
//Calendar Today circle
    CalendarTodayCircle = () => cy.get('.today > span')
//Crew Filter icon
    CrewFilterIcon = () => cy.get('.filter__icon')
    
}