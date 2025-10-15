/**
 * CrewPlanner Test Configuration
 * Contains all test data, constants, and configuration for CrewPlanner tests
 */

export const CREW_PLANNER_CONFIG = {
    // Test credentials
    credentials: {
        email: "reg.driver@syniotec.com",
        password: "Qwerty1$"
    },

    // URLs
    urls: {
        crewPlanner: "https://sam.dev.syniotec.com/new-crew-planner",
        crewsList: "https://sam.dev.syniotec.com/kolone/list"
    },

    // Test data
    testData: {
        project: "ProjTest",
        crew: "MyCrew",
        crewName: "Test Crew",
        releaseReason: "This is a release for crew",
        viewport: {
            width: 1920,
            height: 1080
        }
    },

    // Wait times (in milliseconds)
    waitTimes: {
        short: 1000,
        medium: 2000,
        long: 4000,
        veryLong: 5000
    },

    // Session storage keys
    sessionStorage: {
        messageBubbles: 'message_bubbles_have_been_shown'
    }
};

/**
 * Common test setup for CrewPlanner tests
 */
export const setupCrewPlannerTest = () => {
    const { credentials, sessionStorage } = CREW_PLANNER_CONFIG;
    
    cy.session('login', () => {
        cy.SAMlogin(credentials.email, credentials.password);
        cy.window().then((win) => {
            win.sessionStorage.setItem(sessionStorage.messageBubbles, 'true');
        });
    });
};

/**
 * Navigate to CrewPlanner page with proper setup
 */
export const navigateToCrewPlanner = () => {
    const { urls, testData } = CREW_PLANNER_CONFIG;
    
    cy.visit(urls.crewPlanner);
    cy.viewport(testData.viewport.width, testData.viewport.height);
};
