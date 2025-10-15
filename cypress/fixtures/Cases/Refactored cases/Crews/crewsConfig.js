/**
 * Crews Test Configuration
 * Contains all test data, constants, and configuration for Crews tests
 */

export const CREWS_CONFIG = {
    // Test credentials
    credentials: {
        email: "reg.driver@syniotec.com",
        password: "Qwerty1$"
    },

    // URLs
    urls: {
        crewsList: "https://sam.dev.syniotec.com/kolone/list"
    },

    // Test data
    testData: {
        crewName: "Test Name",
        testCrew: "Test Crew",
        viewport: {
            width: 1920,
            height: 1080
        }
    },

    // Wait times (in milliseconds)
    waitTimes: {
        short: 1000,
        medium: 2000,
        long: 5000,
        veryLong: 10000
    },

    // Session storage keys
    sessionStorage: {
        messageBubbles: 'message_bubbles_have_been_shown'
    }
};

/**
 * Common test setup for Crews tests
 */
export const setupCrewsTest = () => {
    const { credentials, sessionStorage } = CREWS_CONFIG;
    
    cy.session('login', () => {
        cy.SAMlogin(credentials.email, credentials.password);
        cy.window().then((win) => {
            win.sessionStorage.setItem(sessionStorage.messageBubbles, 'true');
        });
    });
};

/**
 * Navigate to Crews page with proper setup
 */
export const navigateToCrews = () => {
    const { urls, testData } = CREWS_CONFIG;
    
    cy.visit(urls.crewsList);
    cy.viewport(testData.viewport.width, testData.viewport.height);
};
