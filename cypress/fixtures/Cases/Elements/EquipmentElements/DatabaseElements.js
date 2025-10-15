/**
 * DatabaseElements - Page Object Model for Database functionality
 * Contains all selectors and methods for interacting with Database page elements
 */
export class DatabaseElements {

    // ===== FILTER ELEMENTS =====
    
    /**
     * Database branch filter
     */
    getBranchFilter = () => cy.get('[data-cy="eq-database-branch"]');
    
    /**
     * Database category filter
     */
    getCategoryFilter = () => cy.get('[data-cy="eq-database-category"]');
    
    /**
     * Database location filter
     */
    getLocationFilter = () => cy.get('[data-cy="eq-database-location"]');
    
    /**
     * Database operator filter
     */
    getOperatorFilter = () => cy.get('[data-cy="eq-database-resp-person"]');
    
    /**
     * Search by title filter
     */
    getSearchByTitleFilter = () => cy.get('[data-cy="eq-database-search"]');
    
    /**
     * Order by filter
     */
    getOrderByFilter = () => cy.get('[data-cy="eq-database-order-by"]');
    
    /**
     * Status filter
     */
    getStatusFilter = () => cy.get('[data-cy="eq-database-status"]');
    
    /**
     * Equipment type filter
     */
    getEquipmentTypeFilter = () => cy.get('[data-cy="eq-database-type"]');
    
    /**
     * Tech check dates filter
     */
    getTechCheckDatesFilter = () => cy.get(':nth-child(9) > .ng-untouched > .shl-button-dir');

    // ===== FILTER ACTIONS =====
    
    /**
     * Apply branch filter button
     */
    getApplyBranchFilterButton = () => cy.get('[data-cy="apply-branch-filter"]');
    
    /**
     * Clear all filters button
     */
    getClearAllFiltersButton = () => cy.get('[data-cy="clear-all-filters"]');
    
    /**
     * Clear filters confirmation button
     */
    getClearFiltersConfirmationButton = () => cy.get('.confirmation__actions > .filled');

    // ===== EQUIPMENT LIST ELEMENTS =====
    
    /**
     * First equipment in table
     */
    getFirstEquipment = () => cy.get('.mat-mdc-table > :nth-child(3)');
    
    /**
     * Equipment table row
     */
    getEquipmentTableRow = () => cy.get('.table__row');

    // ===== EQUIPMENT ACTIONS =====
    
    /**
     * Add equipment button
     */
    getAddEquipmentButton = () => cy.get('[data-cy="eq-database-add-equipmentqa"]');
    
    /**
     * Update status button
     */
    getUpdateStatusButton = () => cy.get('[data-cy="eq-database-upadte"]');
    
    /**
     * Delete equipment button
     */
    getDeleteEquipmentButton = () => cy.get('.table__actions-btn--red');

    // ===== STATUS UPDATE ELEMENTS =====
    
    /**
     * Inactive radio button
     */
    getInactiveRadioButton = () => cy.get(':nth-child(2) > .border-radius-8');
    
    /**
     * Active radio button
     */
    getActiveRadioButton = () => cy.get(':nth-child(1) > .border-radius-8');
    
    /**
     * Inactive reason dropdown
     */
    getInactiveReasonDropdown = () => cy.get('.dropdown-control > .ng-select-searchable > .ng-select-container > .ng-arrow-wrapper');
    
    /**
     * Update status start date picker
     */
    getUpdateStatusStartDatePicker = () => cy.get('.ng-dirty > .shl-date-picker > shl-input.ng-pristine > .input > .input-content-container > .input-flex-box > .action > .shl-select-calendar-btn > .shl-i');
    
    /**
     * Update status end date picker
     */
    getUpdateStatusEndDatePicker = () => cy.get('.ng-star-inserted.ng-dirty > .datepicker > .ng-dirty > .shl-date-picker > shl-input.ng-pristine > .input > .input-content-container > .input-flex-box > .action > .shl-select-calendar-btn > .shl-i');
    
    /**
     * Update status submit button
     */
    getUpdateStatusSubmitButton = () => cy.get('form.ng-valid > .shl-button-dir');

    // ===== ADD EQUIPMENT FORM ELEMENTS =====
    
    /**
     * Equipment manufacturer field
     */
    getEquipmentManufacturerField = () => cy.get('#mat-mdc-form-field-label-0 > mat-label');
    
    /**
     * Equipment model name field
     */
    getEquipmentModelNameField = () => cy.get('#mat-input-1');
    
    /**
     * Equipment production year field
     */
    getEquipmentProductionYearField = () => cy.get('.mat-mdc-select-placeholder');
    
    /**
     * Equipment title field
     */
    getEquipmentTitleField = () => cy.get('#mat-input-2');
    
    /**
     * Equipment category field
     */
    getEquipmentCategoryField = () => cy.get('.ng-input > input');
    
    /**
     * Equipment inventory number field
     */
    getEquipmentInventoryNumberField = () => cy.get('#mat-input-3');

    // ===== ADD EQUIPMENT FORM ACTIONS =====
    
    /**
     * Save equipment button
     */
    getSaveEquipmentButton = () => cy.get('.form-submit__button');
    
    /**
     * Next step button
     */
    getNextStepButton = () => cy.get('.form-submit__button--next');

    // ===== REPORT GENERATION ELEMENTS =====
    
    /**
     * Generate report button
     */
    getGenerateReportButton = () => cy.get('[data-cy="crew-detail-edit"]');
    
    /**
     * Generate technical check report button
     */
    getGenerateTechnicalCheckReportButton = () => cy.get('[data-cy="eq-database-check-report"]');
    
    /**
     * Database equipment report button
     */
    getDatabaseEquipmentReportButton = () => cy.get('[data-cy="eq-database-generate-report"]');
    
    /**
     * Generate equipment report button
     */
    getGenerateEquipmentReportButton = () => cy.get('.report-dialog__generate');
    
    /**
     * Generate tech check report button
     */
    getGenerateTechCheckReportButton = () => cy.get('.report-modal__actions > .shl-button-dir');

    // ===== DROPDOWN OPTIONS =====
    
    /**
     * Scrollable content container
     */
    getScrollableContent = () => cy.get('.scrollable-content');
    
    /**
     * First dropdown option
     */
    getFirstDropdownOption = () => cy.get(':nth-child(1) > sam-dynamic-select-control.ng-untouched > div.dynamic-select > :nth-child(1) > .custom-select-header > .ng-select-container');
}