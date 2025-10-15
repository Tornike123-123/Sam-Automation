/**
 * CrewsElements - Page Object Model for Crews functionality
 * Contains all selectors and methods for interacting with Crews page elements
 */
export class CrewsElements {

    // ===== NAVIGATION ELEMENTS =====
    
    /**
     * Navigate to Crews page from navigation menu
     */
    getCrewsPageLink = () => cy.get(':nth-child(3) > .nav-item').should('be.visible').realHover().get('[data-cy="crew-list-page"]').click().get('.header-user__name > .ng-tns-c3139965283-1').realHover();

    // ===== CREW CREATION ELEMENTS =====
    
    /**
     * Add crew button
     */
    getAddCrewButton = () => cy.get('[data-cy="add-crew-button"]');
    
    /**
     * Crew title input field
     */
    getCrewTitleInput = () => cy.get('.shl-form-field-flex');
    
    /**
     * Crew responsible person dropdown
     */
    getCrewResponsiblePersonDropdown = () => cy.get('[data-cy="add-crew-responsible-field"] > div.dynamic-select > :nth-child(1) > .custom-select-header > .ng-select-container > .ng-arrow-wrapper');
    
    /**
     * Crew area dropdown
     */
    getCrewAreaDropdown = () => cy.get('[data-cy="add-crew-area-field"] > div.dynamic-select > :nth-child(1) > .custom-select-header > .ng-select-container > .ng-arrow-wrapper');
    
    /**
     * Crew type input field
     */
    getCrewTypeInput = () => cy.get('.mat-mdc-text-field-wrapper');
    
    /**
     * Create crew button
     */
    getCreateCrewButton = () => cy.get('[data-cy="add-crew-create-field"]');

    // ===== CREW LIST ELEMENTS =====
    
    /**
     * Crew title text in list
     */
    getCrewTitle = () => cy.get('.crew-item__text');
    
    /**
     * Search input field
     */
    getSearchInput = () => cy.get('.shl-form-field-infix > .ng-untouched');

    // ===== CREW MANAGEMENT ELEMENTS =====
    
    /**
     * Add equipment navigation
     */
    getAddEquipmentNav = () => cy.get('[data-cy="crew-add-equipment"] > .groupe-navigation__title');
    
    /**
     * Add person navigation
     */
    getAddPersonNav = () => cy.get('[data-cy="crew-add-person"] > .groupe-navigation__title');
    
    /**
     * Overview navigation
     */
    getOverviewNav = () => cy.get('[data-cy="crew-overview"] > .groupe-navigation__title');
    
    /**
     * Equipment edit button
     */
    getEquipmentEditButton = () => cy.get('[data-cy="equipment-overview-edit"]');

    // ===== FILTER ELEMENTS =====
    
    /**
     * Branch filter button
     */
    getBranchFilterButton = () => cy.get('[data-cy="crew-page-branch"] > .shl-button-dir');
    
    /**
     * Branch filter content
     */
    getBranchFilterContent = () => cy.get('.branch-filter__content');
    
    /**
     * Responsible person filter
     */
    getResponsiblePersonFilter = () => cy.get('[data-cy="crew-page-responsible-person"] > [style="width: 180px;"] > .ng-touched > div.dynamic-select > :nth-child(1) > .custom-select-header > .ng-select-container > .ng-arrow-wrapper');
    
    /**
     * Apply branch filter button
     */
    getApplyBranchFilterButton = () => cy.get('[data-cy="apply-branch-filter"]');
    
    /**
     * Clear filters button
     */
    getClearFiltersButton = () => cy.get('[data-cy="clear-filters"]');

    // ===== DROPDOWN OPTIONS =====
    
    /**
     * First dropdown option
     */
    getFirstDropdownOption = () => cy.get(':nth-child(1) > .ng-dropdown-panel-items');
    
    /**
     * Second dropdown option
     */
    getSecondDropdownOption = () => cy.get(':nth-child(2) > .ng-dropdown-panel-items');
    
    /**
     * Dropdown panel items
     */
    getDropdownPanelItems = () => cy.get('.ng-dropdown-panel-items');

    // ===== CONFIRMATION ELEMENTS =====
    
    /**
     * Confirmation filled button
     */
    getConfirmationFilledButton = () => cy.get('.confirmation__actions > .filled');
    
    /**
     * Confirmation dialog actions
     */
    getConfirmationDialogActions = () => cy.get('.confirmation-dialog__actions > .filled');
}