// import { CrewPlannerElements } from '../../../../fixtures/Cases/Elements/CrewElements/CrewPlannerElements.js';
// import { CrewsElements } from '../../../../fixtures/Cases/Elements/CrewElements/CrewsElements.js';

// describe('Adds Crew and Project. Creates booking in "Crew Planner" with new Crew and Project', () => {
//     beforeEach(() => {
//         const email = "reg.driver@syniotec.com";
//         const password = "Qwerty1$";
//         cy.session('login', () => {
//             cy.SAMlogin(email, password);
//         });
//     });
//     it('', () => {
//         const crewsElements = new CrewsElements();
//         const addCrewElements = new CrewPlannerElements();
//         cy.visit('https://sam.dev.syniotec.com/kolone/list');
//         //cy.wait(10000);
//         //addCrewElements.CrewsPage(); 
//         //addCrewElements.CrewAddButton().should('be.visible');
//         const crewName = "Test Crew";
//         cy.CreateCrewWithName(crewName);
//         cy.wait(3000);
//         //cy.addCompanyCarInside();
//         cy.AddCrewEquipment();
//         cy.CrewBookingViaCrew(' ', crewName);
//         cy.wait(1000);
//         crewsElements.CrewsPage(); 
//         cy.DeleteCrew();
//     });
// });
