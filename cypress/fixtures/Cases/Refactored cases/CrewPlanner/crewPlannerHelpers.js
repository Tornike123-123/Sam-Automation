/**
 * CrewPlanner Helper Functions
 * Contains reusable helper functions for common CrewPlanner operations
 */

import { CrewPlannerElements } from '../../Elements/CrewElements/CrewPlannerElements.js';
import { CREW_PLANNER_CONFIG } from './crewPlannerConfig.js';

/**
 * Helper class for CrewPlanner operations
 */
export class CrewPlannerHelpers {
    constructor() {
        this.elements = new CrewPlannerElements();
    }

    /**
     * Create a new booking with specified project and crew
     * @param {string} project - Project name
     * @param {string} crew - Crew name
     */
    createBooking(project, crew) {
        // Open booking modal
        this.elements.getBookingButton().click();
        
        // Disable overlay backdrop
        this.elements.disableOverlayBackdrop();
        
        // Select project
        this.elements.getProjectDropdown().click().realType(project);
        this.elements.getFirstSelectOption().click();
        
        // Select crew
        this.elements.getCrewDropdown().click().realType(crew);
        this.elements.getSelectOptionByText(crew).click();
        
        // Set start time
        this.elements.getStartTimePicker().click();
        this.elements.getTimeSelectorMicroButton().click();
        this.elements.getTimeSelectorValueButton().click();
        
        // Save booking
        this.elements.getSaveBookingButton().click();
        
        // Wait for booking to be created
        cy.wait(CREW_PLANNER_CONFIG.waitTimes.long);
    }

    /**
     * Search for crew by name in the filter
     * @param {string} crewName - Name of the crew to search for
     */
    searchCrewByName(crewName) {
        this.elements.getSearchByTitleFilter()
            .click()
            .clear()
            .type(crewName);
    }


    /**
     * Delete a booking through context menu
     */
    deleteBooking() {
        this.elements.getCrewContent().rightclick();
        this.elements.getFirstContextMenuItem().click();
        this.elements.getDeleteBookingButton().click();
        this.elements.getConfirmationButton().click();
        cy.wait(CREW_PLANNER_CONFIG.waitTimes.medium);
    }

    /**
     * Release a booking with specified details
     * @param {string} reason - Release reason
     */
    releaseBooking(reason) {
        this.elements.getCrewContent().rightclick();
        this.elements.getFirstContextMenuItem().click();
        this.elements.getReleaseRadioButton().click();
        
        // Set release time
        this.elements.getStartTimePicker().click();
        cy.wait(CREW_PLANNER_CONFIG.waitTimes.medium);
        this.elements.getTimeSelectorScrollBottomButton().click();
        this.elements.getTimeSelectorValueButton().click();
        cy.wait(CREW_PLANNER_CONFIG.waitTimes.medium);
        
        // Click body to close time picker
        this.elements.clickBodyTopRight();
        
        // Set end time
        this.elements.getEndTimePicker().click();
        cy.wait(CREW_PLANNER_CONFIG.waitTimes.medium);
        this.elements.getTimeSelectorValueButton().click();
        
        // Set end time again
        this.elements.getEndTimePicker().click();
        this.elements.getTimeSelectorValueButton().click();
        
        cy.wait(CREW_PLANNER_CONFIG.waitTimes.medium);
        
        // Select release reasons
        this.elements.getReleaseReasonsDropdown().click();
        this.elements.getFirstSelectOption().click();
        
        this.elements.getReleaseReasonsDropdown().click();
        this.elements.getSecondSelectOption().click();
        
        this.elements.getReleaseReasonsDropdown().click();
        this.elements.getFifthSelectOption().click();
        
        // Add release reason text
        cy.get('.textarea-content-container > .ng-untouched').type(reason);
        
        // Save release
        this.elements.getSaveBookingButton().click();
        cy.wait(CREW_PLANNER_CONFIG.waitTimes.short);
    }

    /**
     * Navigate to today's date
     */
    navigateToToday() {
        this.elements.getTodayButton().click();
        cy.wait(CREW_PLANNER_CONFIG.waitTimes.veryLong);
    }

    /**
     * Verify crew is visible after search
     * @param {string} crewName - Name of the crew to verify
     */
    verifyCrewVisible(crewName) {
        this.elements.getSearchByTitleFilter()
            .type(crewName)
            .should('be.visible');
    }
}

/**
 * Standalone helper functions for specific operations
 */

/**
 * Create a booking with default test data
 */
export const createDefaultBooking = () => {
    const helpers = new CrewPlannerHelpers();
    const { testData } = CREW_PLANNER_CONFIG;
    
    helpers.createBooking(testData.project, testData.crew);
    helpers.searchCrewByName(testData.crew);
    helpers.verifyCrewVisible(testData.crew);
};

/**
 * Create and delete a booking
 */
export const createAndDeleteBooking = () => {
    const helpers = new CrewPlannerHelpers();
    const { testData } = CREW_PLANNER_CONFIG;
    
    helpers.createBooking(testData.project, testData.crew);
    helpers.searchCrewByName(testData.crew);
    cy.wait(CREW_PLANNER_CONFIG.waitTimes.short);
    helpers.navigateToToday();
    helpers.deleteBooking();
};

/**
 * Create, release, and delete a booking
 */
export const createReleaseAndDeleteBooking = () => {
    const helpers = new CrewPlannerHelpers();
    const { testData } = CREW_PLANNER_CONFIG;
    
    helpers.createBooking(testData.project, testData.crew);
    helpers.searchCrewByName(testData.crew);
    cy.wait(CREW_PLANNER_CONFIG.waitTimes.veryLong);
    helpers.releaseBooking(testData.releaseReason);
    helpers.navigateToToday();
    helpers.deleteBooking();
    
    // Delete the original booking as well
    helpers.deleteBooking();
};
