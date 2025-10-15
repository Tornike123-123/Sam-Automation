/**
 * CrewPlannerElements - Page Object Model for CrewPlanner functionality
 * Contains all selectors and methods for interacting with CrewPlanner page elements
 */
export class CrewPlannerElements {

    // ===== NAVIGATION ELEMENTS =====
    
    /**
     * Navigate to CrewPlanner page from navigation menu
     */
    getCrewPlannerPageLink = () => cy.get(':nth-child(3) > .nav-item').realHover().get('a[data-cy="crew-planner-nav-page"]').click();

    // ===== FILTER ELEMENTS =====
    
    /**
     * Search by title filter input
     */
    getSearchByTitleFilter = () => cy.get('.shl-form-field-flex');
    
    /**
     * Branch filter dropdown
     */
    getBranchFilter = () => cy.get('[data-cy="crew-planner-branch"] > .shl-select > .shl-select-inputs-container > .ng-valid > .input > .input-content-container > .input-flex-box > .field > .ng-untouched');
    
    /**
     * Project filter dropdown
     */
    getProjectFilter = () => cy.get('.shl-select-inputs-container > .ng-valid > .input > .input-content-container > .input-flex-box > .field > .ng-untouched');
    
    /**
     * Filter icon
     */
    getFilterIcon = () => cy.get('.filter__icon');

    // ===== VIEW CONTROLS =====
    
    /**
     * Week view button
     */
    getWeekViewButton = () => cy.get('[data-cy="week"]');
    
    /**
     * Month view button
     */
    getMonthViewButton = () => cy.get('[data-cy="month"]');
    
    /**
     * Custom view button
     */
    getCustomViewButton = () => cy.get('[data-cy="custom"]');
    
    /**
     * Timeline left arrow
     */
    getLeftArrow = () => cy.get('[data-cy="crew-planner-left-arrow"]');
    
    /**
     * Timeline right arrow
     */
    getRightArrow = () => cy.get('[data-cy="crew-planner-right-arrow"]');
    
    /**
     * Today button
     */
    getTodayButton = () => cy.get('[data-cy="crew-planner-today"]');

    // ===== BOOKING MODAL ELEMENTS =====
    
    /**
     * Booking button to open modal
     */
    getBookingButton = () => cy.get('[data-cy="crew-planner-booking-button"]');
    
    /**
     * Project dropdown in booking modal
     */
    getProjectDropdown = () => cy.get('[data-cy="crew-project-dropdown"] > .shl-select > .shl-select-inputs-container > .ng-valid > .input > .input-content-container > .input-flex-box > .field > .ng-untouched');
    
    /**
     * Crew dropdown in booking modal
     */
    getCrewDropdown = () => cy.get('[data-cy="crew-dropdown"] > .shl-select > .shl-select-inputs-container > .ng-valid > .input > .input-content-container > .input-flex-box > .field > .ng-untouched');
    
    /**
     * Crew type dropdown
     */
    getCrewTypeDropdown = () => cy.get('[data-cy="crew-type-dropdown"]');
    
    /**
     * Start time picker
     */
    getStartTimePicker = () => cy.get('[data-cy="crew-start-time"] > .shl-time-picker > shl-input.ng-untouched > .input > .input-content-container > .input-flex-box > .action > .shl-select-time-btn > .shl-i');
    
    /**
     * End time picker
     */
    getEndTimePicker = () => cy.get('[data-cy="crew-end-time"] > .shl-time-picker > shl-input.ng-pristine > .input > .input-content-container > .input-flex-box');
    
    /**
     * Start date picker
     */
    getStartDatePicker = () => cy.get('[data-cy="crew-start-date"]');
    
    /**
     * End date picker
     */
    getEndDatePicker = () => cy.get('[data-cy="crew-end-date"]');
    
    /**
     * Additional info textarea
     */
    getAdditionalInfoTextarea = () => cy.get('[data-cy="crew-additional-info"]');
    
    /**
     * Save booking button
     */
    getSaveBookingButton = () => cy.get('[data-cy="save-booking"]');

    // ===== BOOKING TYPE RADIO BUTTONS =====
    
    /**
     * Booking radio button
     */
    getBookingRadioButton = () => cy.get('[data-cy="crew-booking"]');
    
    /**
     * Release radio button
     */
    getReleaseRadioButton = () => cy.get('[data-cy="crew-release"]');

    // ===== RELEASE SPECIFIC ELEMENTS =====
    
    /**
     * Release reasons dropdown
     */
    getReleaseReasonsDropdown = () => cy.get('[data-cy="crew-reasons-dropdown"]');

    // ===== CONTEXT MENU ELEMENTS =====
    
    /**
     * Crew content area for right-click context menu
     * Returns the first crew content element to avoid multiple element issues
     */
    getCrewContent = () => cy.get('.crew__content').first();
    
    /**
     * First context menu item (Edit)
     */
    getFirstContextMenuItem = () => cy.get('.context-menu > :nth-child(1)');
    
    /**
     * Delete booking button in modal
     */
    getDeleteBookingButton = () => cy.get('[data-cy="booking-modal__delete"]');
    
    /**
     * Confirmation dialog filled button
     */
    getConfirmationButton = () => cy.get('.confirmation__actions > .filled');

    // ===== CALENDAR ELEMENTS =====
    
    /**
     * Calendar icon/button
     */
    getCalendarIcon = () => cy.get(':nth-child(1) > .ng-valid > .input > .input-content-container > .input-flex-box > .action > .shl-select-calendar-btn').invoke('attr', 'aria-expanded', 'true');
    
    /**
     * Calendar today circle
     */
    getCalendarTodayCircle = () => cy.get('.today > span');

    // ===== TIME SELECTOR ELEMENTS =====
    
    /**
     * Time selector micro button
     */
    getTimeSelectorMicroButton = () => cy.get('.shl-time-selector-micro-btn');
    
    /**
     * Time selector scroll bottom button
     */
    getTimeSelectorScrollBottomButton = () => cy.get(':nth-child(1) > .shl-time-selector-scroll > .bottom > .shl-i');
    
    /**
     * Time selector value button
     */
    getTimeSelectorValueButton = () => cy.get('.shl-button-content-container-value');

    // ===== SELECT OPTIONS =====
    
    /**
     * First select option
     */
    getFirstSelectOption = () => cy.get(':nth-child(1) > .shl-select-option');
    
    /**
     * Second select option
     */
    getSecondSelectOption = () => cy.get(':nth-child(2) > .shl-select-option');
    
    /**
     * Fifth select option
     */
    getFifthSelectOption = () => cy.get(':nth-child(5) > .shl-select-option');
    
    /**
     * Select option containing specific text
     */
    getSelectOptionByText = (text) => cy.get('.shl-select-option').contains(text);

    // ===== UTILITY METHODS =====
    
    /**
     * Disable overlay backdrop pointer events
     */
    disableOverlayBackdrop = () => cy.get('.cdk-overlay-backdrop').invoke('css', 'pointer-events', 'none');
    
    /**
     * Click on body top right corner
     */
    clickBodyTopRight = () => cy.get('body').click('topRight');
}