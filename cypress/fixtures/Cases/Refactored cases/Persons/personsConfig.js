/**
 * Persons Configuration and Setup
 * Centralized configuration for Persons test cases
 */

export const PERSONS_CONFIG = {
    // Test credentials
    credentials: {
        email: "reg.driver@syniotec.com",
        password: "Qwerty1$"
    },
    
    // Test data
    testData: {
        personName: 'Test Person Cy',
        firstName: 'Test Person',
        lastName: 'Cy',
        personnelNumber: 'NIG-231',
        email: 'test.person@example.com',
        phoneNumber: '123456789',
        emergencyContactName: 'Emergency Contact',
        emergencyPhoneNumber: '987654321'
    },
    
    // URLs
    urls: {
        personPage: 'https://sam.dev.syniotec.com/person',
        hrPlannerPage: 'https://sam.dev.syniotec.com/hr-planner'
    },
    
    // Wait times
    waitTimes: {
        short: 1000,
        medium: 2000,
        long: 3000,
        veryLong: 5000,
        extraLong: 10000
    }
};

/**
 * Setup function for Persons tests
 * Handles login and session management
 */
export function setupPersonsTest() {
    const { credentials } = PERSONS_CONFIG;
    
    cy.session('login', () => {
        cy.SAMlogin(credentials.email, credentials.password);
        cy.window().then((win) => {
            win.sessionStorage.setItem('message_bubbles_have_been_shown', 'true');
        });
    });
}

/**
 * Navigate to Person page
 */
export function navigateToPerson() {
    cy.visit(PERSONS_CONFIG.urls.personPage);
}

/**
 * Navigate to HR Planner page
 */
export function navigateToHRPlanner() {
    cy.GoToHRPlanner();
}
