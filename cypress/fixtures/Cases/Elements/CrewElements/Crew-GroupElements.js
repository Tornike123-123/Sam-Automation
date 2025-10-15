/**
 * Crew and Group Elements Page Object Model
 * Centralized selectors for Crew and Group related UI elements
 */
export class CrewGroupElements {
    
    // ===== CREW ELEMENTS =====
    
    /**
     * Get add crew button from crew list page
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    getAddCrewButton() {
        return cy.get('.add-crew__button');
    }
    
    /**
     * Get crew search field
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    getCrewSearchField() {
        return cy.get('[data-cy="crew-page-search"]');
    }
    
    /**
     * Get crew branch filter
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    getCrewBranchFilter() {
        return cy.get('[data-cy="crew-page-branch"]');
    }
    
    /**
     * Get crew type filter
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    getCrewTypeFilter() {
        return cy.get('[data-cy="crew-page-type"]');
    }
    
    /**
     * Get crew responsible person filter
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    getCrewResponsiblePersonFilter() {
        return cy.get('[data-cy="crew-page-responsible-person"]');
    }
    
    /**
     * Get clear all filters button
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    getClearFiltersButton() {
        return cy.get('[data-cy="clear-filters"]');
    }
    
    /**
     * Get crew details edit button
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    getCrewDetailsEditButton() {
        return cy.get('.kolone-details__button > .fas');
    }
    
    // ===== CREW FORM ELEMENTS =====
    
    /**
     * Get add crew title field
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    getAddCrewTitleField() {
        return cy.get('[data-cy="add-crew-title-field"]');
    }
    
    /**
     * Get add crew responsible person dropdown
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    getAddCrewResponsiblePersonField() {
        return cy.get('[data-cy="add-crew-responsible-field"]');
    }
    
    /**
     * Get add crew area dropdown
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    getAddCrewAreaField() {
        return cy.get('[data-cy="add-crew-area-field"]');
    }
    
    /**
     * Get add crew type field
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    getAddCrewTypeField() {
        return cy.get('[data-cy="add-crew-type-field"]');
    }
    
    /**
     * Get create crew button
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    getCreateCrewButton() {
        return cy.get('[data-cy="add-crew-create-field"]');
    }
    
    // ===== CREW TABS =====
    
    /**
     * Get add company car tab
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    getAddCompanyCarTab() {
        return cy.get('[data-cy="crew-add-car"]');
    }
    
    /**
     * Get add crew equipment tab
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    getAddCrewEquipmentTab() {
        return cy.get('[data-cy="crew-add-equipment"]');
    }
    
    /**
     * Get add crew person tab
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    getAddCrewPersonTab() {
        return cy.get('[data-cy="crew-add-person"]');
    }
    
    /**
     * Get general information tab
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    getGeneralInfoTab() {
        return cy.get('[data-cy="crew-general-info"]');
    }
    
    /**
     * Get crew equipment tab
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    getCrewEquipmentTab() {
        return cy.get('[data-cy="crew-equipment"]');
    }
    
    /**
     * Get crew personnel tab
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    getCrewPersonnelTab() {
        return cy.get('[data-cy="crew-person"]');
    }
    
    /**
     * Get crew overview tab
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    getCrewOverviewTab() {
        return cy.get('[data-cy="crew-overview"]');
    }
    
    /**
     * Get crew finish overview button
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    getCrewFinishOverviewButton() {
        return cy.get('[data-cy="add-crew-finish"]');
    }
    
    /**
     * Get crew booking calendar icon
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    getCrewBookingCalendarIcon() {
        return cy.get('[data-cy="crew-start-date"] > .shl-date-picker > shl-input.ng-untouched > .input > .input-content-container > .input-flex-box > .action > .shl-select-calendar-btn');
    }
    
    // ===== GROUP ELEMENTS =====
    
    /**
     * Get group branch filter
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    getGroupBranchFilter() {
        return cy.get('[data-cy="groupe-page-branch"]');
    }
    
    /**
     * Get group type filter
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    getGroupTypeFilter() {
        return cy.get('[data-cy="groupe-page-type"]');
    }
    
    // ===== GROUP FORM ELEMENTS =====
    
    /**
     * Get group add button
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    getGroupAddButton() {
        return cy.get('[data-cy="add-groupe"]');
    }
    
    /**
     * Get group add name field
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    getGroupAddNameField() {
        return cy.get('[data-cy="add-groupe-name"] > .input > .input-content-container > .input-flex-box > .input-flex-item > .ng-untouched');
    }
    
    /**
     * Get group add area dropdown
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    getGroupAddAreaDropdown() {
        return cy.get('[data-cy="add-area-dropdown"] > .shl-select > .shl-select-inputs-container > .ng-valid > .input > .input-content-container > .input-flex-box > .field > .ng-untouched');
    }
    
    /**
     * Get group add type dropdown
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    getGroupAddTypeDropdown() {
        return cy.get('[data-cy="add-type-dropdown"] > .shl-select > .shl-select-inputs-container > .ng-valid > .input > .input-content-container > .input-flex-box > .field > .ng-untouched');
    }
    
    /**
     * Get group add categories button
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    getGroupAddCategoriesButton() {
        return cy.get(':nth-child(2) > .card > .card__actions > sam-card-wrapper-actions.ng-star-inserted > .action > .action__initial > .action__initial-btn');
    }
    
    /**
     * Get group add qualifications button
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    getGroupAddQualificationsButton() {
        return cy.get(':nth-child(4) > .card > .card__actions > sam-card-wrapper-actions.ng-star-inserted > .action > .action__initial > .action__initial-btn > .fas');
    }
    
    /**
     * Get group add save button
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    getGroupAddSaveButton() {
        return cy.get('[data-cy="groupe-save"]');
    }
    
    /**
     * Get group text name element
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    getGroupTextName() {
        return cy.get('.groupe__text');
    }
    
    // ===== GROUP DETAILED PAGE ELEMENTS =====
    
    /**
     * Get group book resources button
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    getGroupBookResourcesButton() {
        return cy.get('[data-cy="book-resource-groupe"]');
    }
    
    /**
     * Get delete group button
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    getDeleteGroupButton() {
        return cy.get('[data-cy="delete-groupe"]');
    }
    
    /**
     * Get edit group general information button
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    getEditGroupGeneralInfoButton() {
        return cy.get('[data-cy="general-info-button"]');
    }
    
    /**
     * Get group categories minus button
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    getGroupCategoriesMinusButton() {
        return cy.get('[data-cy="groupe-edit-minus"]');
    }
    
    /**
     * Get group categories plus button
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    getGroupCategoriesPlusButton() {
        return cy.get('[data-cy="groupe-edit-plus"]');
    }
    
    // ===== LEGACY METHODS (for backward compatibility) =====
    
    // Crew elements
    addCrewBtn = () => this.getAddCrewButton();
    crewSearch = () => this.getCrewSearchField();
    crewBranchFilter = () => this.getCrewBranchFilter();
    crewTypeFilter = () => this.getCrewTypeFilter();
    crewResponsiblePersonFilter = () => this.getCrewResponsiblePersonFilter();
    clearFilters = () => this.getClearFiltersButton();
    crewDetailesEditBtn = () => this.getCrewDetailsEditButton();
    addCrewTitleField = () => this.getAddCrewTitleField();
    addCrewResponsiblePersonField = () => this.getAddCrewResponsiblePersonField();
    addCrewAreaField = () => this.getAddCrewAreaField();
    addCrewTypeField = () => this.getAddCrewTypeField();
    createCrewButton = () => this.getCreateCrewButton();
    addCompanyCarTab = () => this.getAddCompanyCarTab();
    addCrewEquipmentTab = () => this.getAddCrewEquipmentTab();
    generalInfoTab = () => this.getGeneralInfoTab();
    crewEquipmentTab = () => this.getCrewEquipmentTab();
    crewPersonnelTab = () => this.getCrewPersonnelTab();
    crewOerviewTab = () => this.getCrewOverviewTab();
    CrewBookingCalendarIcon = () => this.getCrewBookingCalendarIcon();
    
    // Group elements
    groupBranchFilter = () => this.getGroupBranchFilter();
    groupTypeFilter = () => this.getGroupTypeFilter();
    groupsAddButton = () => this.getGroupAddButton();
    groupsAddName = () => this.getGroupAddNameField();
    groupsAddArea = () => this.getGroupAddAreaDropdown();
    groupsAddType = () => this.getGroupAddTypeDropdown();
    groupsAddCategories = () => this.getGroupAddCategoriesButton();
    groupsAddQualifications = () => this.getGroupAddQualificationsButton();
    groupsAddSave = () => this.getGroupAddSaveButton();
    groupsTextName = () => this.getGroupTextName();
    groupBookResourcesBtn = () => this.getGroupBookResourcesButton();
    deleteGroupBtn = () => this.getDeleteGroupButton();
    editGroupGeneralInfoBtn = () => this.getEditGroupGeneralInfoButton();
    groupCategoriesMinusBtn = () => this.getGroupCategoriesMinusButton();
    groupCategoriesPlusBtn = () => this.getGroupCategoriesPlusButton();
}