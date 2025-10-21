/**
 * Database Test Configuration
 * Contains all test data, constants, and configuration for Database tests
 */

export const DATABASE_CONFIG = {
    // Test credentials
    credentials: {
        email: "reg.driver@syniotec.com",
        password: "Qwerty1$"
    },

    // URLs
    urls: {
        database: "https://sam.dev.syniotec.com/equipment-database"
    },

    // Test data
    testData: {
        equipmentName: "Caterpillar H120GC",
        branch: "Direction 1",
        category: " 3-Axle Tipper ",
        operator: "DIspatcher, Bacho",
        orderBy: " oldest update ",
        status: " Active ",
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
        veryLong: 10000
    },

    // Session storage keys
    sessionStorage: {
        messageBubbles: 'message_bubbles_have_been_shown'
    }
};

/**
 * Common test setup for Database tests
 */
export const setupDatabaseTest = () => {
    const { credentials, sessionStorage } = DATABASE_CONFIG;
    
    cy.session('login', () => {
        cy.SAMlogin(credentials.email, credentials.password);
        cy.window().then((win) => {
            win.sessionStorage.setItem(sessionStorage.messageBubbles, 'true');
        });
    });
};

/**
 * Navigate to Database page with proper setup
 */
export const navigateToDatabase = () => {
    const { urls, testData } = DATABASE_CONFIG;
    
    cy.visit(urls.database);
    cy.viewport(testData.viewport.width, testData.viewport.height);
};
