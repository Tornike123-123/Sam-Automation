/**
 * Warehouse Test Configuration
 * Contains all test data, constants, and configuration for Warehouse tests
 */

export const WAREHOUSE_CONFIG = {
    // Test credentials
    credentials: {
        email: "reg.driver@syniotec.com",
        password: "Qwerty1$"
    },

    // URLs
    urls: {
        samUrl: "https://sam.dev.syniotec.com/planner/calendar",
        warehouseListPage: "https://sam.dev.syniotec.com/warehouses/list"
    },

    // Test data
    testData: {
        costCenter: "Automation cost",
        description: "Description",
        mapSearch: "Réuni",
        branches: {
            direction1: " Direction 1 ",
            direction2: " Direction 2 "
        },
        responsiblePerson: " asdsada, wqewqdsa ",
        warehouseNamePrefix: "Cypress_warehouse",
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
        veryLong: 5000,
        login: 7000,
        navigation: 7000
    },

    // Session storage keys
    sessionStorage: {
        messageBubbles: 'message_bubbles_have_been_shown'
    },

    // Common selectors
    selectors: {
        warehouseSearch: '[data-cy="warehouse-filter-search"]',
        warehouseGrid: '.virtual__gird',
        warehouseContent: '.lobby__content'
    }
};

/**
 * Common test setup for Warehouse tests
 */
export const setupWarehouseTest = () => {
    const { credentials, sessionStorage } = WAREHOUSE_CONFIG;
    
    cy.session('login', () => {
        cy.SAMlogin(credentials.email, credentials.password);
        cy.window().then((win) => {
            win.sessionStorage.setItem(sessionStorage.messageBubbles, 'true');
        });
    });
};

/**
 * Navigate to SAM URL with proper setup
 */
export const navigateToSAM = () => {
    const { urls, testData } = WAREHOUSE_CONFIG;
    
    cy.visit(urls.samUrl);
    cy.viewport(testData.viewport.width, testData.viewport.height);
};

/**
 * Generate unique warehouse name with timestamp
 */
export const generateWarehouseName = (prefix = WAREHOUSE_CONFIG.testData.warehouseNamePrefix) => {
    return `${prefix}_${Date.now()}`;
};
