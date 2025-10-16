// /**
//  * CrewPlanner - Calendar Test
//  * Tests calendar navigation and date selection functionality
//  */

// import { setupCrewPlannerTest, CREW_PLANNER_CONFIG } from './crewPlannerConfig.js';
// import { CrewPlannerElements } from '../../Elements/CrewElements/CrewPlannerElements.js';

// describe('CrewPlanner - Calendar Navigation', () => {
//     let crewElements;

//     beforeEach(() => {
//         setupCrewPlannerTest();
//         crewElements = new CrewPlannerElements();
//     });

//     it('should navigate calendar dates and verify today\'s date is visible on the planner', () => {
//         // Navigate to crews list page first
//         cy.visit(CREW_PLANNER_CONFIG.urls.crewsList);
//         cy.wait(CREW_PLANNER_CONFIG.waitTimes.veryLong);
        
//         // Navigate to CrewPlanner page
//         crewElements.getCrewPlannerPageLink();
//         cy.wait(CREW_PLANNER_CONFIG.waitTimes.medium);
        
//         // Test calendar navigation
//         cy.get('.md-work-week-nav').click().should('be.visible');
//         cy.wait(CREW_PLANNER_CONFIG.waitTimes.short);
        
//         // Get current date and calculate test date
//         const today = new Date();
//         const testDay = today.getDate();
//         const testDate = new Date(today);
//         testDate.setDate(today.getDate() + 1); // Increment day by 1
        
//         const options = { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' };
//         const formattedDate = testDate.toLocaleDateString('en-US', options);
        
//         // Click on specific date (using hardcoded value as in original)
//         cy.get(`[aria-label="19"]`).eq(1).click({ force: true });
        
//         // Click today button
//         crewElements.getTodayButton().click();
        
//         // Verify today's date is visible in the timeline header
//         cy.get(`:nth-child(${testDay}) > .mbsc-timeline-header-date > .mbsc-ios.ng-star-inserted > sam-day-template.ng-star-inserted > .mbsc-ios`)
//             .should('be.visible');
//     });
// });