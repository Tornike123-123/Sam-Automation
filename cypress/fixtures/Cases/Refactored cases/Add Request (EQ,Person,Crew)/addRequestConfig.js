/**
 * Add Request Test Configuration
 * Contains all test data, constants, and configuration for Add Request tests
 */

export const ADD_REQUEST_CONFIG = {
    // Test credentials
    credentials: {
        email: "reg.driver@syniotec.com",
        password: "Qwerty1$"
    },

    // URLs
    urls: {
        samUrl: "https://sam.dev.syniotec.com",
        projectList: "https://sam.dev.syniotec.com/project/list"
    },

    // Test data
    testData: {
        costCenter: "Automation cost",
        projectName: "Cypress_test",
        description: "Description",
        mapSearch: "Réuni",
        branch: "Direction 1",
        responsiblePerson: "asdsada, wqewqdsa",
        equipmentInfo: "information",
        personInfo: "additional info",
        qualification: "Baumaschinenführer",
        date: "23"
    },

    // Wait times (in milliseconds)
    waitTimes: {
        short: 1000,
        medium: 2000,
        long: 3000,
        veryLong: 5000,
        extraLong: 10000
    },

    // Viewport settings
    viewport: {
        width: 1920,
        height: 1000
    }
};

/**
 * Common test setup for Add Request tests
 */
export const setupAddRequestTest = () => {
    const { credentials, viewport } = ADD_REQUEST_CONFIG;
    
    cy.viewport(viewport.width, viewport.height);
    
    // Login process
    cy.visit(ADD_REQUEST_CONFIG.urls.samUrl);
    cy.get('input[type="email"]').type(credentials.email);
    cy.get('input[type="password"]').type(credentials.password);
    cy.get('button[type="submit"]').click();
    cy.wait(ADD_REQUEST_CONFIG.waitTimes.extraLong);
    cy.get('[data-cy="accept-cookies"]').click();
};

/**
 * Generate unique project name
 */
export const generateProjectName = () => {
    return `${ADD_REQUEST_CONFIG.testData.projectName}_${new Date().getTime()}`;
};
