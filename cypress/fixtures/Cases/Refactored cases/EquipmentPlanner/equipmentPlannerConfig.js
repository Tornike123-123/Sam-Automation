/**
 * EquipmentPlanner Test Configuration
 * Contains all test data, constants, and configuration for EquipmentPlanner tests
 */

export const EQUIPMENT_PLANNER_CONFIG = {
    // Test credentials
    credentials: {
        email: "reg.driver@syniotec.com",
        password: "Qwerty1$"
    },

    // URLs
    urls: {
        equipmentPlanner: "https://sam.dev.syniotec.com/planner/calendar"
    },

    // Test data
    testData: {
        equipmentName: "DON'T USE N2",
        equipmentSearch: "DON'T USE N",
        equipment1: "DON'T USE N1",
        equipment2: "DON'T USE N2",
        projectName: "Proj",
        containerText: "This is a test",
        viewport: {
            width: 1920,
            height: 1080
        }
    },

    // Wait times (in milliseconds)
    waitTimes: {
        short: 1000,
        medium: 2000,
        long: 3000,
        veryLong: 10000
    },

    // Session storage keys
    sessionStorage: {
        messageBubbles: 'message_bubbles_have_been_shown'
    }
};

/**
 * Common test setup for EquipmentPlanner tests
 */
export const setupEquipmentPlannerTest = () => {
    const { credentials, sessionStorage } = EQUIPMENT_PLANNER_CONFIG;
    
    cy.session('login', () => {
        cy.SAMlogin(credentials.email, credentials.password);
        cy.window().then((win) => {
            win.sessionStorage.setItem(sessionStorage.messageBubbles, 'true');
        });
    });
};

/**
 * Navigate to EquipmentPlanner page with proper setup
 */
export const navigateToEquipmentPlanner = () => {
    const { urls, testData } = EQUIPMENT_PLANNER_CONFIG;
    
    cy.visit(urls.equipmentPlanner);
    cy.viewport(testData.viewport.width, testData.viewport.height);
    cy.wait(EQUIPMENT_PLANNER_CONFIG.waitTimes.veryLong);
};
