/**
 * Projects Test Configuration
 * Contains all test data, constants, and configuration for Projects tests
 */

export const PROJECTS_CONFIG = {
    // Test credentials
    credentials: {
        email: "reg.driver@syniotec.com",
        password: "Qwerty1$"
    },

    // URLs
    urls: {
        samUrl: "https://sam.dev.syniotec.com/planner/calendar",
        warehouseListPage: "https://sam.dev.syniotec.com/warehouse/list",
        virtualListPage: "https://sam.dev.syniotec.com/project/virtual/list",
        inactiveProjectListPage: "https://sam.dev.syniotec.com/project/inactive/list"
    },

    // Test data
    testData: {
        costCenter: "Automation cost",
        description: "Description",
        address: "Tbilisi",
        mapSearch: "Réuni",
        branches: {
            direction1: " Direction 1 ",
            direction2: " Direction 2 "
        },
        responsiblePerson: " asdsada, wqewqdsa ",
        projectNamePrefix: "Cypress_test",
        virtualProjectNamePrefix: "Cypress_virtual_Project",
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
        login: 10000
    },

    // Session storage keys
    sessionStorage: {
        messageBubbles: 'message_bubbles_have_been_shown'
    },

    // Common selectors
    selectors: {
        projectSearchField: '.shl-form-field-flex',
        projectListContainer: '[role="row"]',
        projectDotsMenu: '[data-cy="project-information-dots"]',
        contextMenu: '[role="menu"]',
        virtualProjectWrapper: '.projects-wrapper',
        virtualProjectItem: '[role="row"][row-index="0"]'
    }
};

/**
 * Common test setup for Projects tests
 */
export const setupProjectsTest = () => {
    const { credentials, sessionStorage } = PROJECTS_CONFIG;
    
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
    const { urls, testData } = PROJECTS_CONFIG;
    
    cy.visit(urls.samUrl);
    cy.viewport(testData.viewport.width, testData.viewport.height);
};

/**
 * Generate unique project name with timestamp
 */
export const generateProjectName = (prefix = PROJECTS_CONFIG.testData.projectNamePrefix) => {
    return `${prefix}_${Date.now()}`;
};

/**
 * Generate unique virtual project name with timestamp
 */
export const generateVirtualProjectName = () => {
    return `${PROJECTS_CONFIG.testData.virtualProjectNamePrefix}_${Date.now()}`;
};
