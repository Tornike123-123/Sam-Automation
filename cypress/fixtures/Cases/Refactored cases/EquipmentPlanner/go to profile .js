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
//         const dragAndDeleteSideBarRequest = new EquipmentPlannerElements();
//         cy.visit('https://sam.dev.syniotec.com/planner/calendar');
//         cy.wait(15000);
//         dragAndDeleteSideBarRequest.EqPlannerSearchByNameFilter().type('14.03.2025 Eq N1');
//         cy.wait(5000);
//         dragAndDeleteSideBarRequest.EqPlannerInfoPopupIcon().click();

// cy.window().then((win) => {
//     cy.stub(win, 'open').callsFake((url) => {
//       win.location.href = url;
//     });
//   });
//   cy.get('[data-cy="equipment-info-profile"]').click();
//   cy.wait(5000)
//           });
//       });