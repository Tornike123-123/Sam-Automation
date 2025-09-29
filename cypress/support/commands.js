import 'cypress-real-events/support';
import { CrewsElements } from '../fixtures/Cases/Elements/CrewElements/CrewsElements.js';
import { CrewPlannerElements } from '../fixtures/Cases/Elements/CrewElements/CrewPlannerElements.js';
import { PersonElements } from '../fixtures/Cases/Elements/PersonElements/PersonElements.js';
import { DatabaseElements } from '../fixtures/Cases/Elements/EquipmentElements/DatabaseElements.js';

import '@4tw/cypress-drag-drop';
const crewPlannerElements = new CrewPlannerElements();
const crewElements = new CrewsElements();
const addEquipment = new DatabaseElements();
const personElements = new PersonElements();

Cypress.Commands.add('SAMlogin', (email, password) => {
    cy.visit('https://sam.dev.syniotec.com/calendar');
    cy.wait(2000);
    cy.get('#mat-input-0').type(email).should('be.visible');
    cy.get('#mat-input-1').type(password);
    cy.get('.footer__leftside-toggle').click();
    //cy.wait(1000);
    cy.get('.form__submit').click();
    cy.get('.ch2-dialog-actions > .ch2-allow-all-btn').click();
});

Cypress.Commands.add('CookieBtn', () =>{
    cy.get('.ch2-dialog-actions > .ch2-allow-all-btn').click();
});

Cypress.Commands.add('CreateCrewWithName', (CrewName) => {
    crewElements.CrewAddButton().click().should('be.visible');
    cy.wait(5000);
    crewElements.CrewTitleAdd().type(CrewName);
    crewElements.CrewResponsiblePersonAdd().click();
        cy.contains('only, one').click();
        crewElements.CrewAreaAdd().click();
        cy.contains('Direction 1').click();
        crewElements.CrewTypeAdd().click();
        cy.contains('Road construction').click();
        cy.get('.add-form__box').should('have.css', 'background-color', 'rgb(243, 26, 26)');
        crewElements.CrewCreatebutton().click({force: true});
        cy.get('.confirmation__actions > .filled').click();
});



Cypress.Commands.add('CreateCrew', () => {
    crewElements.CrewAddButton().click().should('be.visible');
    cy.wait(5000);
    crewElements.CrewTitleAdd().type('Test Name');
    crewElements.CrewResponsiblePersonAdd().click();
        cy.contains('only, one').click();
        crewElements.CrewAreaAdd().click();
        cy.contains('Direction 1').click();
        crewElements.CrewTypeAdd().click();

        //cy.contains('Road construction').click();
        cy.get('#mat-option-0').click();
        cy.get('.add-form__box').should('have.css', 'background-color', 'rgb(243, 26, 26)');
        crewElements.CrewCreatebutton().click({force: true});
        cy.get('.confirmation__actions > .filled').click();
});

Cypress.Commands.add('DeleteCrew', () => {
    
    cy.get('.shl-form-field-infix > .ng-untouched').click().type('{SelectAll}{backspace}');
    cy.get('.shl-form-field-infix > .ng-untouched').click().type('Test Name');
    cy.get('.crew-item__text').each(($el) => {
        const crewName = $el.text().trim();
        
    if (crewName === 'Test Name') {
        // Perform actions when the crew with name "Test Name" is found
        cy.wrap($el).click();
        cy.get('[data-cy="crew-delete"] > .fas').click();
        cy.get('.filled').click();
        return false; // This will stop the iteration
    }
    });
});


Cypress.Commands.add('AddCompanyCarInside', () => {
    
    //cy.wait(1000);
    cy.get('.company-car__add').click();
    cy.wait(1000);
        // Click on the dropdown to open the options
    cy.get('.mat-mdc-select-placeholder').invoke('attr', 'aria-expanded', 'true').click();
        // Select the "Transporter" option by clicking on the span element                    
    
        // cy.get('#mat-option-17').realClick();    
    cy.get(':nth-child(1) > #mat-select-4-panel').realClick();
    cy.get(':nth-child(2) > sam-input-control.ng-untouched .ng-untouched').type('as-123-ds');
    cy.get(':nth-child(3) > sam-input-control.ng-untouched .ng-untouched').type('N132');
    cy.wait(1000);
    cy.get('[type="submit"]').click();
    //cy.get('.company-car-modal__footer-submit').realClick();
});


Cypress.Commands.add('AddCompanyCar', () => {
    crewElements.CrewTitle().each(($el) => {
        const crewName = $el.text();

        if (crewName === 'Test Name') {
            // Perform actions when the crew with name "Test Name" is found
            cy.wrap($el).click();
            cy.get('[data-cy="company-car-edit"] > .fas').click();
            cy.wait(1000);
            cy.get('.company-car__add').click();
            cy.wait(1000);
            // Click on the dropdown to open the options
            cy.get('.mat-mdc-select-placeholder').invoke('attr', 'aria-expanded', 'true').click();
            // Select the "Transporter" option by clicking on the span element                    
            
             cy.get('#mat-option-0').realClick();    

            
            //cy.get(':nth-child(1) > #mat-select-4-panel').realClick();
            cy.get(':nth-child(2) > sam-input-control.ng-untouched .ng-untouched').type('as-123-ds');
            cy.get(':nth-child(3) > sam-input-control.ng-untouched .ng-untouched').type('N132');
            cy.wait(1000);
            cy.get('.company-car-modal__footer-submit').click();
            //cy.get('.company-car-modal__footer-submit').realClick();
            return false; // This will stop the iteration
        }
    });
});

Cypress.Commands.add('EditCompanyCar', () => {
    cy.get(':nth-child(1) > .company-car-card > :nth-child(1) > .company-car-card__row-rightside > :nth-child(2) > svg-icon > svg > #Group_19793 > #Rectangle_10577 > [width="24"]').click();
    cy.wait(2000);
    cy.get('.mat-mdc-form-field-infix')
            .invoke('attr', 'aria-expanded', 'true')
            .click();
    // Select the "Transporter" option by clicking on the span element
    cy.get('#mat-option-3').realClick();    
    cy.get(':nth-child(2) > sam-input-control.ng-untouched .ng-untouched').type('qw-321-er');
    cy.get(':nth-child(3) > sam-input-control.ng-untouched .ng-untouched').type('N133');
    cy.get('.company-car-modal__footer-submit').click();
    cy.get(':nth-child(1) > .company-car-card > :nth-child(1) > .company-car-card__row-rightside > :nth-child(1) > svg-icon > svg > #Group_19794 > #Rectangle_5879 > [width="24"]').click();
    cy.get('.confirmation__actions > .filled').click();
});

Cypress.Commands.add('AddCrewEquipment', () => {
    crewElements.CrewAddEquipment().click().should('be.visible');
    cy.wait(3000)
    cy.get('.shl-form-field-infix > .ng-untouched').type('MyEquipment');
    cy.wait(3000);
    cy.get('.eq-card__add').click();  

});

Cypress.Commands.add('AddCrewPerson', () => {
    crewElements.CrewAddPerson().click().should('be.visible');
    cy.wait(3000)
    cy.get('.shl-form-field-infix > .ng-untouched').type('mamniashvili');
    cy.wait(3000)
    cy.get('.pe-card__actions-add').click();    
});

Cypress.Commands.add('CrewOverviewFinish', () => {
    crewElements.CrewAddOverview().click().should('be.visible');
    cy.get('[data-cy="add-crew-finish"]').click();
});

Cypress.Commands.add('CrewPlannerFilters', () => {
    //Title
    crewPlannerElements.crewPlannerSearchByTitleFilter().click().type('reg');
     cy.wait(1000)
    //Project
    crewPlannerElements.crewPlannerProjectFilter().click();
    cy.get(':nth-child(1) > .shl-select-option').click();
    cy.get('[data-cy="crew-planner-projects"] > .shl-select > .shl-select-inputs-container > .ng-valid > .input > .input-content-container > .input-flex-box > .action > .shl-select-close').click();
        //Branch
    crewPlannerElements.crewPlannerBranchFilter().click({ force : true }).realHover();
    cy.get('.shl-select-options-container > :nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(1) > .shl-select-option-dropdown > .ng-star-inserted').click();
    cy.contains(' syniotec ').click({force: true}); 
    //Calendar
    crewPlannerElements.CrewCalendarIcon().click();       
    crewPlannerElements.CalendarTodayCircle().click();
    crewPlannerElements.CalendarTodayCircle().click();
    //cy.get('.cdk-overlay-backdrop').click();
    //filter icon
    crewPlannerElements.CrewFilterIcon().click();
    cy.get('.filter-container__body-item > .filter-container__form-select > .shl-select > .shl-select-inputs-container > .ng-valid > .input > .input-content-container > .input-flex-box > .action > .shl-select-close').click();
    cy.get(':nth-child(1) > .shl-select-options').click();
    cy.wait(2000);
    //cy.get('.cdk-overlay-backdrop').invoke('css', 'pointer-events', 'none');  
    cy.get('.filter-container__body-item > .filter-container__form-select > .shl-select > .shl-select-inputs-container > .ng-valid > .input > .input-content-container > .input-flex-box > .field > .ng-pristine').realClick();
    cy.get('.filter-container__footer-submit').click();
    //clear filters
    
    //crewPlannerElements.CrewFilterIcon().click();
    cy.get('.filter').click();
    cy.get('.filter-container__footer-clear').click();
    cy.get('.filter-container__header-close > img').click();
})

Cypress.Commands.add('CrewBookingViaCrew', (ProjectName, CrewName) => {
 
    crewElements.CrewPlannerPage();

   cy.wait(1000);
   cy.get('[data-cy="crew-planner-booking-button"]').click();
    //cy.get('.mbsc-timeline-grid > :nth-child(2)').realClick();
    //cy.get(':nth-child(2) > :nth-child(18) > .mbsc-flex > .mbsc-flex-1-1').realClick();
        //start date calendar
    crewElements.CrewBookingCalendarIcon().click();       
    crewElements.CalendarTodayCircle().click();

    cy.get('[data-cy="crew-start-time"] > .shl-time-picker > shl-input.ng-pristine > .input > .input-content-container > .input-flex-box > .action').click();
    cy.get(':nth-child(1) > .shl-time-selector-scroll > .shl-time-selector-line-itmes > :nth-child(27)').click();
    cy.get('.shl-time-selector-line-itmes > :nth-child(62)').click();
    cy.get('.shl-button-content-container-value').click();

    cy.get('[data-cy="crew-end-date"] > .shl-date-picker > shl-input.ng-pristine > .input > .input-content-container > .input-flex-box > .action > .shl-select-calendar-btn').click();
    cy.get('.shl-calendar-dates > :nth-child(4) > :nth-child(2) > span').click();

        //project
    cy.get('.cdk-overlay-backdrop').invoke('css', 'pointer-events', 'none');  
    cy.get('[data-cy="crew-project-dropdown"] > .shl-select > .shl-select-inputs-container > .ng-valid > .input > .input-content-container > .input-flex-box > .field > .ng-untouched').click().realType('ProjTest');

    cy.get('.shl-select-option').click();
        //crew
    cy.get('[data-cy="crew-dropdown"] > .shl-select > .shl-select-inputs-container > .ng-valid > .input > .input-content-container > .input-flex-box > .field > .ng-untouched').click().realType(CrewName);
    cy.get('.shl-select-option').contains(CrewName).click();

    //end date calendar
    cy.get('[data-cy="crew-end-date"] > .shl-date-picker > shl-input.ng-pristine > .input > .input-content-container > .input-flex-box > .action > .shl-select-calendar-btn > .shl-i').click();
    crewElements.CalendarTodayCircle().click();
    cy.wait(2000);
    
    cy.get('[data-cy="save-booking"]').realClick();
})





Cypress.Commands.add('AddPersonRequired', () => {
    cy.visit('https://sam.dev.syniotec.com/person');
          cy.wait(5000)
        personElements.personAddFirstName().type("Test Person");
        personElements.personAddLastName().type("Cy");
        //Code
        
        //continue
        personElements.personAddContinueGeneral().click();

        //Personeel number
        personElements.personAddPersoneelNumber().type('NIG-231');
        //Position
        personElements.personAddPosition().click();
        cy.get(':nth-child(1) > .shl-select-option > .shl-select-option-container > .shl-select-option-text > .shl-select-option-text-primary > .ng-star-inserted').click();
        //Affilliation
        personElements.personAddAffiliation().click();
        cy.get('.shl-select-options-container > :nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(1)').click()
        //Profession
        personElements.personAddProfession().click();
        cy.get(':nth-child(1) > .shl-select-option').click();
        //Contract Type
        personElements.personAddContractType().click();
        cy.get(':nth-child(1) > .shl-select-option > .shl-select-option-container > .shl-select-option-text > .shl-select-option-text-primary > .ng-star-inserted').click();
        //ContinueBtn
        personElements.personAddContinueCompany().click();
        //Save Button
        cy.wait(1000)
        personElements.personAddSaveAndExit().click();
})


Cypress.Commands.add('AddEquipment', () => {
    cy.visit(`https://sam.dev.syniotec.com/equipment-database`)
            cy.viewport(1920, 1080); // Set a larger screen size //
            cy.wait(15000);
            addEquipment.addEquipmentBtn().click().should('be.visible');
        cy.get('[data-cy="asset-type-select"]').click();
            cy.get(':nth-child(1) > .shl-select-option').click();
            //Eq. manufacturer
            cy.get('[data-cy="brand-select"]').type('CAT');
            //select tigercat
           cy.get(':nth-child(1) > .shl-select-option').click();

            //Model name
            cy.get('[data-cy="model-select"]').type('1');
            cy.wait(2000);
            //first selection
             cy.get(':nth-child(1) > .shl-select-option').should('be.visible').click()

            //Production year
              cy.get('[data-cy="year-select"]').click();
            cy.wait(2000);
            cy.get(':nth-child(1) > .shl-select-option').should('be.visible').click();

            //Eq. Title
            cy.get('[data-cy="name-input"]').type('{selectAll}{backspace}');
            cy.get('[data-cy="name-input"]').type('Cy Equipment');

            //Category
            cy.get('[data-cy="category-select"]').click().type('4-A');
            cy.wait(2000);
            cy.contains(' 4-Achs-Kipper ').click();

            //Save btn
            cy.get('[data-cy="next-button"]').click();

            //Inventory No.
            cy.get('[data-cy="inventory-number-input"]').type('No. 123')
            //cy.contains(' Specific machine information ').click()
             cy.get('[data-cy="next-button"]').click()
            cy.wait(2000);
            // cy.get('[href="/equipment-database/add/checks"]').click();
            // cy.get('[href="/equipment-database/add/pictures"]').click();
            // cy.get('[href="/equipment-database/add/company-info"]').click();
            // cy.contains('Tracking').click()
            // cy.get('.form-submit__button--next').click()
        cy.get('[data-cy="next-button"]').click();
        cy.wait(2000);
        cy.get('[data-cy="next-button"]').click();
        cy.wait(2000);
        cy.get('[data-cy="next-button"]').click();
        cy.wait(2000);
        cy.get('[data-cy="submit-button"]').click();
        cy.wait(2000);
            cy.get('[data-cy="overview-submit-button"]').click();
});

Cypress.Commands.add('DeleteEquipment', () => {
    cy.visit(`https://sam.dev.syniotec.com/equipment-database`);
      cy.viewport(1920, 1080); // Set a larger screen size //
    cy.wait(10000);
    addEquipment.databaseSearchByTitleFilter().type('{selectAll}{backSpace}');
    addEquipment.databaseSearchByTitleFilter().type('Cy Equipment');
    cy.wait(2000);
    //crew title
    //cy.get('h3.table__text').invoke('removeAttr', 'target').click({force : true});
    
    // cy.get('.cdk-virtual-scroll-viewport').scrollTo('right')
    // cy.wait(1000)
    // cy.get('.cdk-virtual-scroll-viewport').scrollTo('top');
    
    cy.wait(1000)
    cy.get(':nth-child(3) > .cdk-column-Actions > .table__actions > [data-cy="eq-database-upadte"]').click({force: true});
    //Update Status
    //addEquipment.databaseUpdateStatus().click({force : true})

    //incative radio btn 
    addEquipment.databaseInactiveRadioBtn().click()

    //Inactive reason
    addEquipment.databaseInactiveReason().click();
  //cy.get(':nth-child(1) > .ng-dropdown-panel ng-star-inserted ng-select-bottom').click()
    cy.contains('In Wartung').click()
    

    //Start date
    cy.get('[formcontrolname="inactiveStartDate"] > .datepicker > shl-date-picker.ng-untouched').click();
    cy.get('.today > span').click()
    cy.get('.cdk-overlay-backdrop').invoke('css', 'pointer-events', 'none');  
    addEquipment.databaseUpdateStatusStartDate().click()
    //End date
    cy.get('shl-date-picker.ng-untouched > .shl-date-picker > .ng-valid > .input > .input-content-container > .input-flex-box').click();
    cy.get('.today > span').click()
    cy.get('.cdk-overlay-backdrop').invoke('css', 'pointer-events', 'none');  
    addEquipment.databaseUpdateStatusEndDate().click()

    //Update status btn
    cy.get('.mdc-label').click()
    addEquipment.databaseUpdateStatusBtn().click()
    cy.wait(5000)

     //Delete btn
    // cy.get('.cdk-virtual-scroll-viewport').scrollTo('right')
    // cy.wait(1000)
    // cy.get('.cdk-virtual-scroll-viewport').scrollTo('top');
    cy.wait(1000)

    //Delete btn
    cy.wait(1000)
 cy.get('[data-cy="eq-database-status"]').click()
    cy.wait(2000)
 cy.get('.ng-dropdown-panel-items').find('.ng-option').eq(1).click();
 cy.wait(2000)
    addEquipment.databaseDeleteBtn().first().click({ force: true });
    cy.get('.confirmation__actions > .filled').click()
})