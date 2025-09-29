import { CrewsElements, EquipmentPlannerElements } from '../../Elements/EquipmentElements/EquipmentPlannerElements.js';

describe('Adds Equipment Booking', () => {
    beforeEach(() => {
        const email = "reg.driver@syniotec.com";
        const password = "Qwerty1$";
        cy.session('login', () => {
            cy.SAMlogin(email, password);
                        cy.window().then((win) => {
                win.sessionStorage.setItem('message_bubbles_have_been_shown', 'true');
            });
        });
    });

    it('', () => {
        const AddEquipmentBooking = new EquipmentPlannerElements();
       
        cy.visit('https://sam.dev.syniotec.com/planner/calendar');

        cy.wait(10000);
        AddEquipmentBooking.EqBookingButton().click();
        
        AddEquipmentBooking.EqBookingProject().type('Proj');
        AddEquipmentBooking.EqBookingProjectChild().click();

        AddEquipmentBooking.EqBookingEquipment().type('DON\'T USE N');
        cy.wait(2000)
        cy.get(':nth-child(1) > .shl-select-option').click();
        cy.get(':nth-child(2) > .shl-select-option').click();
        //AddEquipmentBooking.EqBookingEquipmentChild().click();
        
        cy.get('.cdk-overlay-backdrop').invoke('css', 'pointer-events', 'none');  
        cy.get('[data-cy="booking-drawer-equipment"] > .shl-select > .shl-select-inputs-container > .ng-valid > .input > .input-content-container > .input-flex-box > .action > .shl-select-close').click()
        
        AddEquipmentBooking.EqBookingContainer().type('This is a test');

        AddEquipmentBooking.EqBookingSave().click();

        cy.wait(2000)
        AddEquipmentBooking.EqPlannerSearchByNameFilter().type('{selectAll}{backSpace}');
        AddEquipmentBooking.EqPlannerSearchByNameFilter().type('DON\'T USE N1');
          cy.wait(3000)
        // cy.contains('✕').click({force: true});

        cy.get(':nth-child(3) > .mbsc-timeline-events > .mbsc-timeline-events-track > .mbsc-ios > :nth-child(3) > planner-event > planner-main-event.ng-star-inserted > .main-event').rightclick({ multiple: true, Force : true });
        cy.get('[data-cy="context-menu-edit"]').click();

        AddEquipmentBooking.EqBookingDelete().click();

        cy.get('.confirmation__actions > .filled').click();
        cy.wait(2000);
  // cy.contains('✕').click({force : true});

        cy.get('.main-event').rightclick({ multiple: true, Force : true });
        cy.get('[data-cy="context-menu-edit"]').click();

        AddEquipmentBooking.EqBookingDelete().click()

        cy.get('.confirmation__actions > .filled').click()
        cy.wait(2000)
    });
});




// /* ==== Generated with Cypress Studio ==== */
// cy.visit('https://sam.dev.syniotec.com/planner/calendar');
// cy.get('[data-cy="hr-planner-booking"] > span').click();
// cy.get('.cdk-overlay-container').click();
// cy.get(':nth-child(2) > .shl-select-option > .shl-select-option-container > .shl-select-option-text > .shl-select-option-text-primary > .ng-star-inserted').click();
// cy.get('.cdk-overlay-container').click();
// cy.get('.ng-tns-c349140495-4.ng-untouched > .input > .input-content-container > .input-flex-box > .field > .ng-untouched').clear();
// cy.get('.ng-tns-c349140495-4.ng-untouched > .input > .input-content-container > .input-flex-box > .field > .ng-untouched').type('DON\'T USE N');
// cy.get(':nth-child(1) > .shl-select-option > .shl-select-option-container > .shl-select-option-checkbox > shl-checkbox.ng-untouched > .shl-checkbox > .shl-checkbox-label > .shl-checkbox-box').click();
// cy.get(':nth-child(2) > .shl-select-option > .shl-select-option-container > .shl-select-option-checkbox > shl-checkbox.ng-untouched > .shl-checkbox > .shl-checkbox-label > .shl-checkbox-box').click();
// cy.get('.shl-select-options-backdrop').click();
// cy.get('[data-cy="booking-drawer-save"]').click();
// cy.get('.shl-form-field-infix > .ng-untouched').clear('D');
// cy.get('.shl-form-field-infix > .ng-untouched').type('DON\'T USE N');
// /* ==== End Cypress Studio ==== */