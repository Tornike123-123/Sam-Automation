export class MapElements {
  
    //Map Search filter
    mapSearchFilter  = () =>     cy.get('[data-cy="filter-header-keyword"]') 
   // map Branch search
    mapBranchFilter  = () =>     cy.get('[data-cy="filter-header-branch"]') 
    //map Category search
    mapCategoryFilter  = () =>    cy.get('[data-cy="filter-header-category"]')
    //map Filter popup
    mapFilterPopup  = () =>      cy.get('[data-cy="filter-header-filter"]')
   //Map Mother Filter
    mapMotherFilter  = () =>     cy.get(':nth-child(1) > .filter-popup__checkbox-wrapper > .state-switcher-group > :nth-child(2) > .state-switcher-item__button')
    //Map Children Filter
    mapChildrenFilter  = () =>   cy.get(':nth-child(1) > .filter-popup__checkbox-wrapper > .state-switcher-group > :nth-child(3) > .state-switcher-item__button')
  //map Equipments Filter
    mapEquipmentsFilter  = () => cy.get('.filter-popup__field.ng-star-inserted > .filter-popup__checkbox-wrapper > .state-switcher-group > :nth-child(2) > .state-switcher-item__button')
//map geofances Filter 
    mapGeofancesFilter  = () => cy.get('.filter-popup__field.ng-star-inserted > .filter-popup__checkbox-wrapper > .state-switcher-group > :nth-child(3) > .state-switcher-item__button')
    //map popup branch 
    mapPopupBranch  = () => cy.get('[data-cy="filter-popup-branch"]') 
    //map popup category
    mapPopupCategory  = () => cy.get('[data-cy="filter-popup-category"]') 
 // map location filter
   mapLocationFilter = () => cy.get('[data-cy="filter-popup-location"]')  
   // map popup Search project btn
    mapPopupSearchProjectBtn = () => cy.get('.filter-popup__accordion-button')
    // map filter popup submit btn
    mapFilterPopupSubmitBtn = () => cy.get('[data-cy="filter-popup-submit"]')  
    //map filter popup clear btn
    mapFilterPopupClearBtn = () => cy.get('[data-cy="filter-popup-remove"]')  


    }