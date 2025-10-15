/**
 * EquipmentPlannerElements - Page Object Model for EquipmentPlanner functionality
 * Contains all selectors and methods for interacting with EquipmentPlanner page elements
 */
export class EquipmentPlannerElements {

    // ===== NAVIGATION ELEMENTS =====
    
    /**
     * Navigate to EquipmentPlanner page
     */
    getEquipmentPlannerPage = () => cy.visit('https://sam.dev.syniotec.com/planner/calendar');

    // ===== FILTER ELEMENTS =====
    
    /**
     * Search by name filter
     */
    getSearchByNameFilter = () => cy.get('[data-cy="filter-header-keyword"]');
    
    /**
     * Branch filter
     */
    getBranchFilter = () => cy.get('[data-cy="filter-header-branch"]');
    
    /**
     * Category filter
     */
    getCategoryFilter = () => cy.get('[data-cy="filter-header-category"]');
    
    /**
     * Filter popup button
     */
    getFilterPopupButton = () => cy.get('[data-cy="filter-header-filter"]');

    // ===== BOOKING ELEMENTS =====
    
    /**
     * Main booking event
     */
    getMainBookingEvent = () => cy.get('.main-event');
    
    /**
     * Main booking event content
     */
    getMainBookingEventContent = () => cy.get('.main-event__content');
    
    /**
     * Booking button
     */
    getBookingButton = () => cy.get('[data-cy="hr-planner-booking"]');
    
    /**
     * Report button
     */
    getReportButton = () => cy.get('[data-cy="hr-planner-download-report"]');
    
    /**
     * Planner requests button
     */
    getPlannerRequestsButton = () => cy.get('[data-cy="eq-planner-requests"]');

    // ===== BOOKING FORM ELEMENTS =====
    
    /**
     * Booking project field
     */
    getBookingProjectField = () => cy.get('[data-cy="booking-drawer-project"]');
    
    /**
     * Booking equipment field
     */
    getBookingEquipmentField = () => cy.get('[data-cy="booking-drawer-equipment"]');
    
    /**
     * Booking start date field
     */
    getBookingStartDateField = () => cy.get('[data-cy="booking-drawer-start-date"]');
    
    /**
     * Booking end date field
     */
    getBookingEndDateField = () => cy.get('[data-cy="booking-drawer-start-time"]');
    
    /**
     * Booking start time field
     */
    getBookingStartTimeField = () => cy.get('[data-cy="booking-start-time"]');
    
    /**
     * Booking end time field
     */
    getBookingEndTimeField = () => cy.get('[data-cy="booking-drawer-end-time"]');
    
    /**
     * Booking container text field
     */
    getBookingContainerField = () => cy.get('.textarea-content-container > .ng-untouched');

    // ===== BOOKING FORM ACTIONS =====
    
    /**
     * Save booking button
     */
    getSaveBookingButton = () => cy.get('[data-cy="booking-drawer-save"]');
    
    /**
     * Discard booking button
     */
    getDiscardBookingButton = () => cy.get('[data-cy="booking-drawer-discard"]');
    
    /**
     * Close booking button
     */
    getCloseBookingButton = () => cy.get('[data-cy="booking-drawer-close"]');
    
    /**
     * Delete booking button
     */
    getDeleteBookingButton = () => cy.get('.booking-drawer__delete');

    // ===== BOOKING DROPDOWN OPTIONS =====
    
    /**
     * First project option
     */
    getFirstProjectOption = () => cy.get(':nth-child(1) > .shl-select-option');
    
    /**
     * First equipment option
     */
    getFirstEquipmentOption = () => cy.get(':nth-child(1) > .shl-select-option');
    
    /**
     * Second equipment option
     */
    getSecondEquipmentOption = () => cy.get(':nth-child(2) > .shl-select-option');

    // ===== TIME SELECTOR ELEMENTS =====
    
    /**
     * Now time button
     */
    getNowTimeButton = () => cy.get('.shl-time-selector-micro-btn');
    
    /**
     * Time save button
     */
    getTimeSaveButton = () => cy.get('.shl-button-content-container-value');
    
    /**
     * Time clear button
     */
    getTimeClearButton = () => cy.get('.shl-time-selector-clear-btn');

    // ===== CONTEXT MENU ELEMENTS =====
    
    /**
     * Edit context menu item
     */
    getEditContextMenuItem = () => cy.get('[data-cy="context-menu-edit"]');
    
    /**
     * Confirmation filled button
     */
    getConfirmationFilledButton = () => cy.get('.confirmation__actions > .filled');

    // ===== SIDEBAR ELEMENTS =====
    
    /**
     * Equipment sidebar
     */
    getEquipmentSidebar = () => cy.get('[data-cy="eq-planner-requests"]');
    
    /**
     * First sidebar request
     */
    getFirstSidebarRequest = () => cy.get('.cdk-virtual-scroll-content-wrapper > :nth-child(1) > .request');
    
    /**
     * Sidebar delete yes button
     */
    getSidebarDeleteYesButton = () => cy.get('.filled');

    // ===== VIEW CONTROLS =====
    
    /**
     * Week view button
     */
    getWeekViewButton = () => cy.get('.header__navigation > :nth-child(1)');
    
    /**
     * Month view button
     */
    getMonthViewButton = () => cy.get('.header__navigation > .active');
    
    /**
     * Custom view button
     */
    getCustomViewButton = () => cy.get('.header__navigation > :nth-child(3)');
    
    /**
     * Today button
     */
    getTodayButton = () => cy.get('.md-work-week-today > .mbsc-calendar-button');
    
    /**
     * Next button
     */
    getNextButton = () => cy.get('.md-work-week-next > .mbsc-calendar-button');
    
    /**
     * Previous button
     */
    getPreviousButton = () => cy.get('.md-work-week-prev > .mbsc-calendar-button');

    // ===== FILTER POPUP ELEMENTS =====
    
    /**
     * Filter all button
     */
    getFilterAllButton = () => cy.get(':nth-child(1) > .filter-popup__checkbox-wrapper > .state-switcher-group > .state-switcher-item--checked > .state-switcher-item__button');
    
    /**
     * Filter mother button
     */
    getFilterMotherButton = () => cy.get(':nth-child(1) > .filter-popup__checkbox-wrapper > .state-switcher-group > :nth-child(2) > .state-switcher-item__button');
    
    /**
     * Filter children button
     */
    getFilterChildrenButton = () => cy.get(':nth-child(1) > .filter-popup__checkbox-wrapper > .state-switcher-group > :nth-child(3) > .state-switcher-item__button');
    
    /**
     * Filter individual button
     */
    getFilterIndividualButton = () => cy.get('.filter-popup__field.ng-star-inserted > .filter-popup__checkbox-wrapper > .state-switcher-group > :nth-child(2) > .state-switcher-item__button');
    
    /**
     * Filter crew member button
     */
    getFilterCrewMemberButton = () => cy.get('.filter-popup__field.ng-star-inserted > .filter-popup__checkbox-wrapper > .state-switcher-group > :nth-child(3) > .state-switcher-item__button');
    
    /**
     * Filter branch field
     */
    getFilterBranchField = () => cy.get('[data-cy="filter-popup-branch"]');
    
    /**
     * Filter category field
     */
    getFilterCategoryField = () => cy.get('[data-cy="filter-popup-category"]');
    
    /**
     * Filter location field
     */
    getFilterLocationField = () => cy.get('[data-cy="filter-popup-location"]');
    
    /**
     * Filter popup submit button
     */
    getFilterPopupSubmitButton = () => cy.get('[data-cy="filter-popup-submit"]');
    
    /**
     * Filter popup clear filters button
     */
    getFilterPopupClearFiltersButton = () => cy.get('[data-cy="filter-popup-remove"]');

    // ===== DATE PICKER ELEMENTS =====
    
    /**
     * Available start date picker
     */
    getAvailableStartDatePicker = () => cy.get('.shl-date-range-picker > :nth-child(1) > .ng-valid > .input > .input-content-container > .input-flex-box');
    
    /**
     * Available end date picker
     */
    getAvailableEndDatePicker = () => cy.get(':nth-child(2) > .ng-valid > .input > .input-content-container > .input-flex-box');
    
    /**
     * Calendar date picker
     */
    getCalendarDatePicker = () => cy.get('.mbsc-calendar-month');

    // ===== CREW MANAGEMENT ELEMENTS =====
    
    /**
     * Add to crew button
     */
    getAddToCrewButton = () => cy.get('.resource__top-actions__frame');
    
    /**
     * Crew search field
     */
    getCrewSearchField = () => cy.get('[data-cy="hr-planner-plus-popup-crew"]');
    
    /**
     * First crew member option
     */
    getFirstCrewMemberOption = () => cy.get(':nth-child(1) > .shl-select-option');
    
    /**
     * Add to crew finish button
     */
    getAddToCrewFinishButton = () => cy.get('[data-cy="hr-planner-plus-popup-add"]');
    
    /**
     * Remove from crew button
     */
    getRemoveFromCrewButton = () => cy.get('.resource__top-actions__frame > .resource__top-actions__icon');
    
    /**
     * Crew add plus button
     */
    getCrewAddPlusButton = () => cy.get('.resource__top-actions__icon');
    
    /**
     * Crew add minus button
     */
    getCrewAddMinusButton = () => cy.get('.resource__top-actions__frame > .resource__top-actions__icon');
    
    /**
     * Crew add search field
     */
    getCrewAddSearchField = () => cy.get('[data-cy="hr-planner-plus-popup-crew"] > .shl-select > .shl-select-inputs-container > .ng-valid > .input > .input-content-container > .input-flex-box > .field > .ng-untouched');

    // ===== EQUIPMENT INFO ELEMENTS =====
    
    /**
     * Equipment info popup icon
     */
    getEquipmentInfoPopupIcon = () => cy.get('.info > .mat-icon > svg > path');
    
    /**
     * Equipment info icon
     */
    getEquipmentInfoIcon = () => cy.get('sam-icon[class="info ng-star-inserted"]');
    
    /**
     * Close info popup button
     */
    getCloseInfoPopupButton = () => cy.get('[data-cy="equipment-info-close"]');
    
    /**
     * Connect person button
     */
    getConnectPersonButton = () => cy.get('.equipment-info__add-relation-button ng-star-inserted');
    
    /**
     * Choose person dropdown
     */
    getChoosePersonDropdown = () => cy.get('.dialog__content-item > .ng-valid.ng-star-inserted > .shl-select > .shl-select-inputs-container > .ng-valid > .input > .input-content-container > .input-flex-box');
    
    /**
     * Delete person button
     */
    getDeletePersonButton = () => cy.get('.button');
    
    /**
     * Delete connection button
     */
    getDeleteConnectionButton = () => cy.get('.outlined');
    
    /**
     * Add connection button
     */
    getAddConnectionButton = () => cy.get('.filled');

    // ===== REPORT ELEMENTS =====
    
    /**
     * Working hours report
     */
    getWorkingHoursReport = () => cy.get('.report-popup__wrapper-items > :nth-child(3)');
    
    /**
     * Charging report
     */
    getChargingReport = () => cy.get('.report-popup__wrapper-items > :nth-child(4)');
    
    /**
     * Report calendar
     */
    getReportCalendar = () => cy.get(':nth-child(1) > .ng-valid > .input > .input-content-container > .input-flex-box > .action > .shl-select-calendar-btn');
    
    /**
     * Report save button
     */
    getReportSaveButton = () => cy.get('.report-popup__actions-submit');
    
    /**
     * Reports page
     */
    getReportsPage = () => cy.get('.export-dialog__footer-text');

    // ===== UTILITY ELEMENTS =====
    
    /**
     * Settings icon
     */
    getSettingsIcon = () => cy.get('.mat-mdc-menu-trigger');
    
    /**
     * Equipment checkbox
     */
    getEquipmentCheckbox = () => cy.get('shl-checkbox[class="ng-untouched ng-pristine ng-valid ng-star-inserted"]');
    
    /**
     * Timeline box
     */
    getTimelineBox = () => cy.get('.mbsc-flex-1-0 > :nth-child(10) > .mbsc-flex > .mbsc-flex-1-1');

    // ===== DROPDOWN OPTIONS =====
    
    /**
     * First dropdown option in select options container
     */
    getFirstSelectOption = () => cy.get('.shl-select-options-container > :nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(1)');
    
    /**
     * Tree option parent
     */
    getTreeOptionParent = () => cy.get('.shl-select-options-container > :nth-child(1) > .shl-tree-option > .shl-tree-option-container > .shl-tree-option-parent');
}
 