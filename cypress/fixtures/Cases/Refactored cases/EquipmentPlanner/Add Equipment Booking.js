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
//         AddEquipmentBooking.EqBookingButton().click();
        
//         AddEquipmentBooking.EqBookingProject().type('Proj');
//         AddEquipmentBooking.EqBookingProjectChild().click();

//         AddEquipmentBooking.EqBookingEquipment().type('DON\'T USE N2');
//         AddEquipmentBooking.EqBookingEquipmentChild().click();
//         //CDK OVERLAY BACKDROP
//         cy.get('.cdk-overlay-backdrop').invoke('css', 'pointer-events', 'none');  
//         //Arrow to close Equipment Dropdown
//         cy.get('.ng-tns-c349140495-4.ng-valid > .input > .input-content-container > .input-flex-box > .action > .shl-select-close').click()
        
//         AddEquipmentBooking.EqBookingContainer().type('This is a test');

//         AddEquipmentBooking.EqBookingSave().click();
//     });
// });
