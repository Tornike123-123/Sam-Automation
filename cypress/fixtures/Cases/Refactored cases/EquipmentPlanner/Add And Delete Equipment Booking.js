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
       AddEquipmentBooking.EqPlannerSearchByNameFilter().click().type('{selectAll}{backSpace}');

        AddEquipmentBooking.EqPlannerSearchByNameFilter().type('DON\'T USE N2');
        AddEquipmentBooking.EqBookingButton().click();
        
        AddEquipmentBooking.EqBookingProject().type('Proj');
        AddEquipmentBooking.EqBookingProjectChild().click();

        AddEquipmentBooking.EqBookingEquipment().type('DON\'T USE N2');
        AddEquipmentBooking.EqBookingEquipmentChild().click();
        cy.get('.cdk-overlay-backdrop').invoke('css', 'pointer-events', 'none');  
        cy.get('[data-cy="booking-drawer-equipment"] > .shl-select > .shl-select-inputs-container > .ng-valid > .input > .input-content-container > .input-flex-box > .action > .shl-select-close').click()
        
        AddEquipmentBooking.EqBookingContainer().type('This is a test');
        AddEquipmentBooking.EqBookingSave().click();

        cy.wait(2000)

        AddEquipmentBooking.EqPlannerSearchByNameFilter().type('DON\'T USE N2');
        cy.wait(3000)

        cy.get('.main-event').rightclick({ multiple: true, Force : true });

        cy.get('[data-cy="context-menu-edit"]').click();

        AddEquipmentBooking.EqBookingDelete().click()

        cy.get('.confirmation__actions > .filled').click()
        cy.wait(2000)
    });
    
});
