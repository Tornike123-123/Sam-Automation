export class CrewsElements {

    CrewNavPage = () => cy.get(':nth-child(3) > .nav-item').realHover();

        // Crews Page //

    CrewsPage = () => cy.get(':nth-child(3) > .nav-item').should('be.visible').realHover().get('[data-cy="crew-list-page"]').click().get('.header-user__name > .ng-tns-c3139965283-1').realHover();

//Crew add button
    CrewAddButton = () => cy.get('[data-cy="add-crew-button"]');
//Crew title add
    CrewTitleAdd = () => cy.get('.shl-form-field-flex');
//Crew reponsible person add
    CrewResponsiblePersonAdd = () => cy.get('[data-cy="add-crew-responsible-field"] > div.dynamic-select > :nth-child(1) > .custom-select-header > .ng-select-container > .ng-arrow-wrapper');
//Crew area add
    CrewAreaAdd = () => cy.get('[data-cy="add-crew-area-field"] > div.dynamic-select > :nth-child(1) > .custom-select-header > .ng-select-container > .ng-arrow-wrapper');
//Crew type add
    CrewTypeAdd = () => cy.get('.mat-mdc-text-field-wrapper');
//Crew Create button
    CrewCreatebutton = () => cy.get('[data-cy="add-crew-create-field"]');
//Crew title (already existing)
    CrewTitle = () => cy.get('.crew-item__text');
//Crew add Equipment
    CrewAddEquipment = () => cy.get('[data-cy="crew-add-equipment"] > .groupe-navigation__title');
//Crew add Person
    CrewAddPerson = () => cy.get('[data-cy="crew-add-person"] > .groupe-navigation__title');
//Crew add Overview
    CrewAddOverview = () => cy.get('[data-cy="crew-overview"] > .groupe-navigation__title');
//Crew Equipment edit
    CrewEquipmentEdit = () => cy.get('[data-cy="equipment-overview-edit"]');
    
}