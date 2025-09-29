// import { CrewsElements, EquipmentPlannerElements } from '../../Elements/EquipmentElements/EquipmentPlannerElements.js';

// describe('Adds Equipment Booking', () => {
//     beforeEach(() => {
//         const email = "reg.driver@syniotec.com";
//         const password = "Qwerty1$";
//         cy.session('login', () => {
//             cy.SAMlogin(email, password);
//         });
//     });

//     it('', () => {
//         const AddEquipmentBooking = new EquipmentPlannerElements();
       
//         cy.visit('https://sam.dev.syniotec.com/planner/calendar');

//         cy.wait(10000);

//         AddEquipmentBooking.EqPlannerSearchByNameFilter().type('DON\'T USE N2');
//         cy.wait(3000)

//         cy.get('.main-event').rightclick({ multiple: true, Force : true });

//         cy.get('[data-cy="context-menu-edit"]').click();

//         AddEquipmentBooking.EquipmentBookingDelete().click()

//         cy.get('.confirmation__actions > .filled').click()
//     });
// });
