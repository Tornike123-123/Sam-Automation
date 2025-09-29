// import { CrewPlannerElements } from '../../../../fixtures/Cases/Elements/CrewElements/CrewPlannerElements.js';
// describe('Crew planner Calendar', () => {
//     beforeEach(() => {
//         const email = "reg.driver@syniotec.com";
//         const password = "Qwerty1$";
//         cy.session('login', () => {
//             cy.SAMlogin(email, password);
//         });
//     });
//     it('should check calendar date and choose today. checks if the today\s date is visible on the planner', () => {

//         const crewElements = new CrewPlannerElements();

//         cy.visit('https://sam.dev.syniotec.com/kolone/list');

//         cy.wait(5000);
//         crewElements.CrewPlannerPage();
//         cy.wait(3000);
//         //calendar date
//         cy.get('.md-work-week-nav').click().should('be.visible');
//         //calendar cell idk tu imushavebs
        
//         cy.wait(1000);
        
//         const today = new Date();
//         const day = today.getDate();
//         today.setDate(today.getDate() + 1); // Increment day by 1
        
//         const options = { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' };
//         const formattedDate = today.toLocaleDateString('en-US', options);
        
//         //console.log(`aria-label="${formattedDate}"`);
//         cy.get(`[aria-label="19"]`).eq(1).click({force: true});   
//         //Today button
//         cy.get('[data-cy="crew-planner-today"]').click();
//         //active date (today)
//         cy.get(`:nth-child(${day}) > .mbsc-timeline-header-date > .mbsc-ios.ng-star-inserted > sam-day-template.ng-star-inserted > .mbsc-ios`).should('be.visible');
//     });
// });