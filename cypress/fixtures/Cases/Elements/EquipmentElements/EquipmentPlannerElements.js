export class EquipmentPlannerElements {

    //eq sidebar
    eqSidebar = () => cy.get('[data-cy="eq-planner-requests"]')
    //eq sidebar First request
    eqSidebarFirstRequest = () => cy.get('.cdk-virtual-scroll-content-wrapper > :nth-child(1) > .request')
    //eq sidebar delete yes btn
     eqSidebarDeleteYesBtn = () => cy.get('.filled')
    // Eq planner page
    eqPlannerPage = () => cy.visit('https://sam.dev.syniotec.com/planner/calendar')
    // eq planner get booking
    eqPlannerGetBooking = () => cy.get('.main-event')
 // eq planner edit btn
    eqPlannerEditBtn = () => cy.get('[data-cy="context-menu-edit"]')
    // eq planner delete yes btn
    eqPlannerDeleteYesBtn = () => cy.get('.confirmation__actions > .filled')
   // Search by name
   EqPlannerSearchByNameFilter = () => cy.get('[data-cy="filter-header-keyword"]')
    // branch filter
    EqPlannerBranchFilter = () => cy.get('[data-cy="filter-header-branch"]')
    // eq planner Info popup icon
    EqPlannerInfoPopupIcon = () => cy.get('.info > .mat-icon > svg > path')
 // delete person button
    EqPlannerDeletePersonBtn = () => cy.get('.button')
    // delete connection button
    EqPlannerDeleteConnectionBtn = () => cy.get('.outlined')
    // category filter
    EqPlannerCategoryFilter = () => cy.get('[data-cy="filter-header-category"]')
    
    // Info icon filter
    EqPlannerInfoIcon = () =>  cy.get('sam-icon[class="info ng-star-inserted"]')
 
   // Connect person + btn
    EqPlannerConnectPersonBtn = () =>  cy.get('.equipment-info__add-relation-button ng-star-inserted')
 
 // Choose person dropdown
    EqPlannerChoosePersonDropdown = () =>  cy.get('.dialog__content-item > .ng-valid.ng-star-inserted > .shl-select > .shl-select-inputs-container > .ng-valid > .input > .input-content-container > .input-flex-box')
 // timeline box
    EqPlannerTimelineBox = () => cy.get('.mbsc-flex-1-0 > :nth-child(10) > .mbsc-flex > .mbsc-flex-1-1')
   // Add to crew button
    EqPlannerAddToCrewBtn = () => cy.get('.resource__top-actions__frame')
// crew search field
    EqPlannerCrewSearchField = () => cy.get('[data-cy="hr-planner-plus-popup-crew"]')
    
    //first crew member in dropdown
    EqPlannerFirstCrewMember = () => cy.get(':nth-child(1) > .shl-select-option')
    //Add to crew finish button
     EqPlannerAddToCrewFinishBtn = () =>  cy.get(`[data-cy="hr-planner-plus-popup-add"]`)
     //remove from crew button
        EqPlannerRemoveFromCrewBtn = () => cy.get('.resource__top-actions__frame > .resource__top-actions__icon')
    //yesremove from crew button
    EqPlannerYesRemoveFromCrewBtn = () => cy.get('[data-cy="hr-planner-plus-popup-add"]')
    // Add conection button
    EqPlannerAddConnectionBtn = () => cy.get('.filled')
 
 // close info popup x button 
     EqPlannerCloseInfoPopupBtn = () =>  cy.get('[data-cy="equipment-info-close"]')
 
 // week view 
     EqPlannerWeekView = () => cy.get('.header__navigation > :nth-child(1)')
     // month view
     EqPlannerMonthView = () => cy.get('.header__navigation > .active')
     //custom view
     EqPlannerCustomView = () => cy.get('.header__navigation > :nth-child(3)')
 // Settings icon
     EqPlannerSettingsIcon = () => cy.get('.mat-mdc-menu-trigger')
     // Calendar date picker
     EqPlannerCalendarDatePicker = () =>  cy.get('.mbsc-calendar-month')
     // Equipment Checkbox
     EqPlannerEquipmentCheckbox = () => cy.get(`shl-checkbox[class="ng-untouched ng-pristine ng-valid ng-star-inserted"]`)
 
     // Filter popup
     EqPlannerFilterPopup = () =>  cy.get('[data-cy="filter-header-filter"]')
     // Filter All Button
     EqPlannerFilterAllBtn = () => cy.get(':nth-child(1) > .filter-popup__checkbox-wrapper > .state-switcher-group > .state-switcher-item--checked > .state-switcher-item__button')
     //filter mother button
     EqPlannerFilterMotherBtn = () => cy.get(':nth-child(1) > .filter-popup__checkbox-wrapper > .state-switcher-group > :nth-child(2) > .state-switcher-item__button')
     //filter children button
      EqPlannerFilterChildrenBtn = () => cy.get(':nth-child(1) > .filter-popup__checkbox-wrapper > .state-switcher-group > :nth-child(3) > .state-switcher-item__button')
      //filter individual button
         EqPlannerFilterIndividualBtn = () => cy.get('.filter-popup__field.ng-star-inserted > .filter-popup__checkbox-wrapper > .state-switcher-group > :nth-child(2) > .state-switcher-item__button')
         //filter crew member button
         EqPlannerFilterCrewMemberBtn = () => cy.get('.filter-popup__field.ng-star-inserted > .filter-popup__checkbox-wrapper > .state-switcher-group > :nth-child(3) > .state-switcher-item__button')
         //filter branch field
         EqPlannerFilterBranchField = () =>  cy.get('[data-cy="filter-popup-branch"]')
         //filter category field
         EqPlannerFilterCategoryField = () => cy.get('[data-cy="filter-popup-category"]')
         //filter location field
         EqPlannerFilterLocationField = () =>  cy.get('[data-cy="filter-popup-location"]')
         //filter popup submit button
         EqPlannerFilterPopupSubmitBtn = () => cy.get('[data-cy="filter-popup-submit"]')
         //filter popup cleare filters button
         EqPlannerFilterPopupClearFiltersBtn = () => cy.get('[data-cy="filter-popup-remove"]')
         //filter available start date picker
         EqPlannerFilterAvailableStartDatePicker = () => cy.get('.shl-date-range-picker > :nth-child(1) > .ng-valid > .input > .input-content-container > .input-flex-box')
         //filter available end date picker
         EqPlannerFilterAvailableEndDatePicker = () => cy.get(':nth-child(2) > .ng-valid > .input > .input-content-container > .input-flex-box')
 
         // // BOOKINGS // //
 
           //Eq Booking btn
     EqBookingButton = () => cy.get('[data-cy="hr-planner-booking"]');
     //Eq Report btn
     EqReportButton = () => cy.get('[data-cy="hr-planner-download-report"]');
     //Eq Planner Requests btn
     EqPlannerRequests = () => cy.get('[data-cy="eq-planner-requests"]');
     //EquipmentBookingProject
     EqBookingProject = () => cy.get('[data-cy="booking-drawer-project"]');
     //EquipmentBookingEquipment
     EqBookingEquipment = () => cy.get('[data-cy="booking-drawer-equipment"]');
     //EquipmentBookingStartDate 
     EqBookingStartDate = () => cy.get('[data-cy="booking-drawer-start-date"]');
     //EquipmentBookingEndDate
     EqBookingEndDate = () => cy.get('[data-cy="booking-drawer-start-time"]');
     //EquipmentBookingStartTime
     EqBookingStartTime = () => cy.get('[data-cy="booking-start-time"]');
     //EquipmentBookingEndTime
     EqBookingEndTime = () => cy.get('[data-cy="booking-drawer-end-time"]');
     //EquipmentBookingNowTime
     EqBookingNowTime = () => cy.get('.shl-time-selector-micro-btn');
     //EquipmentTimeSaveButton
     EqTimeSaveButton = () => cy.get('.shl-button-content-container-value');
     //EquipmentTimeClearButton
     EqTimeClearButton = () => cy.get('.shl-time-selector-clear-btn');
     //EquipmentBookingContainer (Text Conrainer)
     EqBookingContainer = () => cy.get('.textarea-content-container > .ng-untouched');
 
     //EquipmentBookingProjectChild you can change wanted project by changing the nth-child number
     EqBookingProjectChild = () => cy.get(':nth-child(1) > .shl-select-option');
 
     //EquipmentBookingEquipmentChild same goes for equipments too.
     EqBookingEquipmentChild = () => cy.get(':nth-child(1) > .shl-select-option')
     
     //EquipmentBookingSave
     EqBookingSave = () => cy.get('[data-cy="booking-drawer-save"]');
     //EquipmentBookingDiscard
     EqBookingDiscard = () => cy.get('[data-cy="booking-drawer-discard"]');
     //EquipmentBookingClose
     EqBookingClose = () => cy.get('[data-cy="booking-drawer-close"]');
 
     //Eq booking Today button
     EqBookingTodayButton = () => cy.get('.md-work-week-today > .mbsc-calendar-button');
     //Eq booking Next button
     EqBookingNextButton = () => cy.get('.md-work-week-next > .mbsc-calendar-button');
     //Eq booking Prev button
     EqBookingPrevButton = () => cy.get('.md-work-week-prev > .mbsc-calendar-button');
 
     //Equipment Booking Delete
     EqBookingDelete = () => cy.get('.booking-drawer__delete')

        // Reports //

    //WorkingHoursReport
    EqWorkingHoursReport = () => cy.get('.report-popup__wrapper-items > :nth-child(3)');
    //CharginReport
    EqCharginReport = () => cy.get('.report-popup__wrapper-items > :nth-child(4)');
    //EqReportCalendar
    EqReportCalendar = () => cy.get(':nth-child(1) > .ng-valid > .input > .input-content-container > .input-flex-box > .action > .shl-select-calendar-btn');
    //EqReportSaveBtn
    EqReportSaveBtn = () => cy.get('.report-popup__actions-submit');
    //EqReportsPage
    EqReportsPage = () => cy.get('.export-dialog__footer-text');
    
    //EqPlannerCrewAddCheckbox
    EqPlannerCrewAddPlusBtn = () => cy.get('.resource__top-actions__icon');
    //EqPlannerCrewAddMinusBtn
    EqPlannerCrewAddMinusBtn = () => cy.get('.resource__top-actions__frame > .resource__top-actions__icon')
    //EqPlannerCrewAddSearch
    EqPlannerCrewAddSearch = () => cy.get('[data-cy="hr-planner-plus-popup-crew"] > .shl-select > .shl-select-inputs-container > .ng-valid > .input > .input-content-container > .input-flex-box > .field > .ng-untouched');
    //EqPlannerAddToCrewBtn
    EqPlannerAddToCrewBtn = () => cy.get('[data-cy="hr-planner-plus-popup-add"]');
   
}
 