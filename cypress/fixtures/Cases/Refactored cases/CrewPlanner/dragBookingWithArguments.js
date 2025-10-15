// /**
//  * CrewPlanner - Drag Booking with Arguments Test
//  * Tests creating a crew, adding equipment, creating a booking, and then cleaning up
//  */

// import { setupCrewPlannerTest, CREW_PLANNER_CONFIG } from './crewPlannerConfig.js';
// import { CrewPlannerElements } from '../../Elements/CrewElements/CrewPlannerElements.js';
// import { CrewsElements } from '../../Elements/CrewElements/CrewsElements.js';

// describe('CrewPlanner - Complete Crew and Booking Workflow', () => {
//     let crewsElements;
//     let crewPlannerElements;

//     beforeEach(() => {
//         setupCrewPlannerTest();
//         crewsElements = new CrewsElements();
//         crewPlannerElements = new CrewPlannerElements();
//     });

//     it('should create a crew with equipment, create a booking, and then clean up', () => {
//         const { testData } = CREW_PLANNER_CONFIG;
        
//         // Navigate to crews list page
//         cy.visit(CREW_PLANNER_CONFIG.urls.crewsList);
        
//         // Create crew with specified name
//         cy.CreateCrewWithName(testData.crewName);
//         cy.wait(CREW_PLANNER_CONFIG.waitTimes.medium);
        
//         // Add equipment to the crew
//         cy.AddCrewEquipment();
        
//         // Create booking via crew
//         cy.CrewBookingViaCrew(' ', testData.crewName);
//         cy.wait(CREW_PLANNER_CONFIG.waitTimes.short);
        
//         // Navigate to crews page and delete the crew
//         crewsElements.CrewsPage();
//         cy.DeleteCrew();
//     });
// });
