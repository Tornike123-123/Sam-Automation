/**
 * Map Elements Page Object Model
 * Centralized selectors for Map related UI elements
 */
export class MapElements {
    
    // ===== HEADER FILTERS =====
    
    /**
     * Get map search filter field
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    getMapSearchFilter() {
        return cy.get('[data-cy="filter-header-keyword"]');
    }
    
    /**
     * Get map branch filter
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    getMapBranchFilter() {
        return cy.get('[data-cy="filter-header-branch"]');
    }
    
    /**
     * Get map category filter
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    getMapCategoryFilter() {
        return cy.get('[data-cy="filter-header-category"]');
    }
    
    /**
     * Get map filter popup button
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    getMapFilterPopup() {
        return cy.get('[data-cy="filter-header-filter"]');
    }
    
    // ===== FILTER POPUP ELEMENTS =====
    
    /**
     * Get map mother filter checkbox
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    getMapMotherFilter() {
        return cy.get(':nth-child(1) > .filter-popup__checkbox-wrapper > .state-switcher-group > :nth-child(2) > .state-switcher-item__button');
    }
    
    /**
     * Get map children filter checkbox
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    getMapChildrenFilter() {
        return cy.get(':nth-child(1) > .filter-popup__checkbox-wrapper > .state-switcher-group > :nth-child(3) > .state-switcher-item__button');
    }
    
    /**
     * Get map equipments filter checkbox
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    getMapEquipmentsFilter() {
        return cy.get('.filter-popup__field.ng-star-inserted > .filter-popup__checkbox-wrapper > .state-switcher-group > :nth-child(2) > .state-switcher-item__button');
    }
    
    /**
     * Get map geofences filter checkbox
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    getMapGeofencesFilter() {
        return cy.get('.filter-popup__field.ng-star-inserted > .filter-popup__checkbox-wrapper > .state-switcher-group > :nth-child(3) > .state-switcher-item__button');
    }
    
    /**
     * Get map popup branch filter
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    getMapPopupBranch() {
        return cy.get('[data-cy="filter-popup-branch"]');
    }
    
    /**
     * Get map popup category filter
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    getMapPopupCategory() {
        return cy.get('[data-cy="filter-popup-category"]');
    }
    
    /**
     * Get map location filter
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    getMapLocationFilter() {
        return cy.get('[data-cy="filter-popup-location"]');
    }
    
    /**
     * Get map popup search project button
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    getMapPopupSearchProjectButton() {
        return cy.get('.filter-popup__accordion-button');
    }
    
    /**
     * Get map filter popup submit button
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    getMapFilterPopupSubmitButton() {
        return cy.get('[data-cy="filter-popup-submit"]');
    }
    
    /**
     * Get map filter popup clear button
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    getMapFilterPopupClearButton() {
        return cy.get('[data-cy="filter-popup-remove"]');
    }
    
    // ===== LEGACY METHODS (for backward compatibility) =====
    
    mapSearchFilter = () => this.getMapSearchFilter();
    mapBranchFilter = () => this.getMapBranchFilter();
    mapCategoryFilter = () => this.getMapCategoryFilter();
    mapFilterPopup = () => this.getMapFilterPopup();
    mapMotherFilter = () => this.getMapMotherFilter();
    mapChildrenFilter = () => this.getMapChildrenFilter();
    mapEquipmentsFilter = () => this.getMapEquipmentsFilter();
    mapGeofancesFilter = () => this.getMapGeofencesFilter();
    mapPopupBranch = () => this.getMapPopupBranch();
    mapPopupCategory = () => this.getMapPopupCategory();
    mapLocationFilter = () => this.getMapLocationFilter();
    mapPopupSearchProjectBtn = () => this.getMapPopupSearchProjectButton();
    mapFilterPopupSubmitBtn = () => this.getMapFilterPopupSubmitButton();
    mapFilterPopupClearBtn = () => this.getMapFilterPopupClearButton();
}