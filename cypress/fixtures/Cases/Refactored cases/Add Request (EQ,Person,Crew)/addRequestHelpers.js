/**
 * Add Request Helper Functions
 * Contains reusable helper functions for common Add Request operations
 */

import { ProjectElements } from '../../Elements/ProjectElements/ProjectElements.js';
import { ADD_REQUEST_CONFIG, generateProjectName } from './addRequestConfig.js';

/**
 * Helper class for Add Request operations
 */
export class AddRequestHelpers {
    constructor() {
        this.elements = new ProjectElements();
    }

    /**
     * Complete login process
     */
    login() {
        this.elements.samUrl();
        this.elements.userName().type(ADD_REQUEST_CONFIG.credentials.email);
        this.elements.password().type(ADD_REQUEST_CONFIG.credentials.password);
        this.elements.loginBtn().click();
        cy.wait(ADD_REQUEST_CONFIG.waitTimes.extraLong);
        this.elements.acceptCookiesBtn().click();
    }

    /**
     * Create a new project with specified details
     * @param {string} projectName - Name of the project to create
     */
    createProject(projectName) {
        this.elements.floatingMenuBtn().click({ force: true });
        this.elements.floatingAddProject().click();
        cy.wait(ADD_REQUEST_CONFIG.waitTimes.long);
        
        this.elements.costCenterField().click({ force: true }).type(ADD_REQUEST_CONFIG.testData.costCenter);
        this.elements.projectTitleField().click().type(projectName);
        
        // Select branch
        this.elements.branchField().click();
        cy.wait(ADD_REQUEST_CONFIG.waitTimes.medium);
        this.elements.branchContainer().contains(ADD_REQUEST_CONFIG.testData.branch).click();
        
        // Select responsible person
        this.elements.responsiblePersonField().click();
        this.elements.responsibleDropdown().contains(ADD_REQUEST_CONFIG.testData.responsiblePerson).click();
        
        // Add description
        this.elements.description().click().type(ADD_REQUEST_CONFIG.testData.description);
        
        // Set location
        this.elements.mapSearch().click().type(ADD_REQUEST_CONFIG.testData.mapSearch);
        this.elements.mapSearchDropdown().should('be.visible');
        this.elements.reunionClick();
        cy.wait(ADD_REQUEST_CONFIG.waitTimes.medium);
        this.elements.randomGeofence();
        
        cy.wait(ADD_REQUEST_CONFIG.waitTimes.short);
        this.elements.addProjectBtn().click({ force: true });
    }

    /**
     * Navigate to project and select it
     * @param {string} projectName - Name of the project to select
     */
    navigateToProject(projectName) {
        cy.wait(ADD_REQUEST_CONFIG.waitTimes.long);
        cy.get('.shl-form-field-flex').click().type('{selectAll}{backspace}').type(projectName);
        cy.wait(ADD_REQUEST_CONFIG.waitTimes.long);
        this.elements.firstProject().contains(projectName).click();
    }

    /**
     * Add equipment request
     */
    addEquipmentRequest() {
        cy.get('[data-cy="add-request"]').click({ force: true });
        cy.wait(ADD_REQUEST_CONFIG.waitTimes.veryLong);
        
        cy.get('[data-cy="equipment-request-category-select"]').click();
        this.elements.categoryDropdown().first().click();
        this.elements.furtherInformation().type(ADD_REQUEST_CONFIG.testData.equipmentInfo);
        this.elements.sendAllRequests().click();
    }

    /**
     * Add person request
     */
    addPersonRequest() {
        this.elements.addRequestBtn().click();
        cy.wait(ADD_REQUEST_CONFIG.waitTimes.medium);
        
        this.elements.personnelNewRequestAccordion().click({ force: true });
        cy.wait(ADD_REQUEST_CONFIG.waitTimes.medium);
        
        this.elements.addPersonQualificationField().click();
        this.elements.addPersonRequestChooseQualification().contains(ADD_REQUEST_CONFIG.testData.qualification).click();
        
        this.elements.addPersonRequestStartDatePicker().click();
        this.elements.addPersonRequestChooseDate().contains(ADD_REQUEST_CONFIG.testData.date).click();
        cy.get(':nth-child(2) > .shl-calendar > .shl-calendar-container > shl-plane-calendar-dates > .shl-calendar-dates > :nth-child(5) > :nth-child(7) > span').click();
        
        this.elements.addPersonRequestAdditionalInfoField().click().type(ADD_REQUEST_CONFIG.testData.personInfo);
        this.elements.sendAllPersonRequests().click();
    }

    /**
     * Delete equipment request
     */
    deleteEquipmentRequest() {
        cy.get('[data-cy="action-dots"]').click();
        cy.get('.cdk-menu-item.menu__item').contains('entfernen').click();
        this.elements.deleteRequestYesBtn().click();
    }

    /**
     * Delete person request
     */
    deletePersonRequest() {
        cy.get('[data-cy="persons-tab"]').click();
        cy.get('[data-cy="action-dots"]').click();
        cy.get('.cdk-menu-item.menu__item').contains('Anfrage löschen').click();
        this.elements.personnelRequestDeleteYesBtn().click();
    }

    /**
     * Delete project
     */
    deleteProject() {
        cy.get('[data-cy="project-information-dots"]').click();
        cy.get('.cdk-menu.cdk-menu-group.menu.ng-star-inserted').contains('entfernen').click();
        this.elements.deleteProjectYesBtn().click();
    }

    /**
     * Check if project can be deleted (should show error message)
     */
    checkProjectDeletionRestriction() {
        cy.get('[data-cy="project-information-dots"]').click();
        cy.get('#cdk-menu-0').contains('entfernen').click();
        this.elements.deleteProjectYesBtn().click();
        
        // Check system message
        cy.contains('Das Projekt kann nicht gelöscht werden, solange es offene Anfragen besitzt.').should('be.visible');
    }
}

/**
 * Standalone helper functions for specific operations
 */

/**
 * Complete project creation flow
 */
export const createProjectFlow = (projectName) => {
    const helpers = new AddRequestHelpers();
    helpers.login();
    helpers.createProject(projectName);
    return helpers;
};

/**
 * Complete equipment request flow
 */
export const equipmentRequestFlow = (projectName) => {
    const helpers = new AddRequestHelpers();
    helpers.navigateToProject(projectName);
    helpers.addEquipmentRequest();
    return helpers;
};

/**
 * Complete person request flow
 */
export const personRequestFlow = (projectName) => {
    const helpers = new AddRequestHelpers();
    helpers.navigateToProject(projectName);
    helpers.addPersonRequest();
    return helpers;
};
