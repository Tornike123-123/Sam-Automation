/**
 * Groups Configuration and Setup
 * Centralized configuration for Groups test cases
 */

export const GROUPS_CONFIG = {
    // Test credentials
    credentials: {
        email: "reg.driver@syniotec.com",
        password: "Qwerty1$"
    },
    
    // Test data
    testData: {
        groupName: 'Test Group',
        area: 'Direction 1',
        groupType: 'Type 1'
    },
    
    // URLs
    urls: {
        groupsPage: 'https://sam.dev.syniotec.com/groupe/list'
    },
    
    // Wait times
    waitTimes: {
        short: 1000,
        medium: 2000,
        long: 3000,
        veryLong: 5000
    }
};

/**
 * Setup function for Groups tests
 * Handles login and session management
 */
export function setupGroupsTest() {
    const { credentials } = GROUPS_CONFIG;
    
    cy.session('login', () => {
        cy.SAMlogin(credentials.email, credentials.password);
        cy.window().then((win) => {
            win.sessionStorage.setItem('message_bubbles_have_been_shown', 'true');
        });
    });
}

/**
 * Navigate to Groups page
 */
export function navigateToGroups() {
    cy.GoToGroupsPage();
}
