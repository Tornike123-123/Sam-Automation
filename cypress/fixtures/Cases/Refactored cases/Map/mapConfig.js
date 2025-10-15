/**
 * Map Configuration and Setup
 * Centralized configuration for Map test cases
 */

export const MAP_CONFIG = {
    // Test credentials
    credentials: {
        email: "reg.driver@syniotec.com",
        password: "Qwerty1$"
    },
    
    // Test data
    testData: {
        searchKeyword: 'Cy Equipment',
        searchKeywordPopup: '07.08.2024 equ MOTHER',
        locationSearch: 'chumlaki',
        branch: 'Direction 1',
        category: 'Category 1'
    },
    
    // URLs
    urls: {
        mapPage: 'https://sam.dev.syniotec.com/equipment/map'
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
 * Setup function for Map tests
 * Handles login and session management
 */
export function setupMapTest() {
    const { credentials } = MAP_CONFIG;
    
    cy.session('login', () => {
        cy.SAMlogin(credentials.email, credentials.password);
        cy.window().then((win) => {
            win.sessionStorage.setItem('message_bubbles_have_been_shown', 'true');
        });
    });
}

/**
 * Navigate to Map page
 */
export function navigateToMap() {
    cy.visit(MAP_CONFIG.urls.mapPage);
}
