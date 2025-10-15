/**
 * Projects Helper Functions
 * Contains reusable helper functions for common Projects operations
 */

import { ProjectElements } from '../../Elements/ProjectElements/ProjectElements.js';
import { PROJECTS_CONFIG, generateProjectName, generateVirtualProjectName } from './projectsConfig.js';

/**
 * Helper class for Projects operations
 */
export class ProjectsHelpers {
    constructor() {
        this.elements = new ProjectElements();
    }

    /**
     * Perform login with credentials
     */
    login() {
        const { credentials, waitTimes } = PROJECTS_CONFIG;
        
        this.elements.samUrl();
        this.elements.userName().type(credentials.email);
        this.elements.password().type(credentials.password);
        this.elements.loginBtn().click();
        cy.wait(waitTimes.login);
        this.elements.acceptCookiesBtn().click();
    }

    /**
     * Navigate to warehouse list page
     */
    navigateToWarehouseListPage() {
        this.elements.warehouseListPage();
    }

    /**
     * Navigate to virtual list page
     */
    navigateToVirtualListPage() {
        this.elements.virtualListPage();
    }

    /**
     * Navigate to inactive project list page
     */
    navigateToInactiveProjectListPage() {
        this.elements.inactiveProjectListPage();
    }

    /**
     * Open floating menu and add project
     */
    openAddProjectModal() {
        const { waitTimes } = PROJECTS_CONFIG;
        
        this.elements.floatingMenuBtn().click();
        cy.wait(waitTimes.medium);
        this.elements.floatingAddProject().click();
    }

    /**
     * Fill project form with basic information
     * @param {string} projectName - Name of the project
     * @param {string} costCenter - Cost center for the project
     * @param {string} branch - Branch to select
     * @param {string} description - Project description
     */
    fillProjectForm(projectName, costCenter = PROJECTS_CONFIG.testData.costCenter, 
                   branch = PROJECTS_CONFIG.testData.branches.direction1, 
                   description = PROJECTS_CONFIG.testData.description) {
        const { waitTimes } = PROJECTS_CONFIG;
        
        // Fill cost center
        this.elements.costCenterField().click().type(costCenter);
        
        // Fill project title
        this.elements.projectTitleField().click().type(projectName);
        
        // Select branch
        this.elements.branchField().click();
        cy.wait(waitTimes.medium);
        this.elements.branchContainer().contains(branch).click();
        
        // Select responsible person
        this.elements.responsiblePersonField().click();
        this.elements.responsibleDropdown().contains(PROJECTS_CONFIG.testData.responsiblePerson).click();
        
        // Fill description
        this.elements.description().click().type(description);
    }

    /**
     * Fill map location for project
     * @param {string} location - Location to search for on map
     */
    fillMapLocation(location = PROJECTS_CONFIG.testData.mapSearch) {
        const { waitTimes } = PROJECTS_CONFIG;
        
        this.elements.mapSearch().click().type(location);
        this.elements.mapSearchDropdown().should('be.visible');
        this.elements.reunionClick();
        cy.wait(waitTimes.medium);
        this.elements.randomGeofence();
        cy.wait(waitTimes.short);
    }

    /**
     * Save the project
     */
    saveProject() {
        this.elements.addProjectBtn().click({ force: true });
        cy.wait(PROJECTS_CONFIG.waitTimes.long);
    }

    /**
     * Search for project by name
     * @param {string} projectName - Name of the project to search for
     */
    searchProject(projectName) {
        const { selectors, waitTimes } = PROJECTS_CONFIG;
        
        cy.get(selectors.projectSearchField).click().type(projectName);
        cy.wait(waitTimes.long);
    }

    /**
     * Click on project in the list
     * @param {string} projectName - Name of the project to click
     */
    clickProjectInList(projectName) {
        const { selectors } = PROJECTS_CONFIG;
        
        cy.get(selectors.projectListContainer).contains(projectName).click();
    }

    /**
     * Open project context menu
     */
    openProjectContextMenu() {
        const { selectors } = PROJECTS_CONFIG;
        
        cy.get(selectors.projectDotsMenu).click();
    }

    /**
     * Click on specific menu item in context menu
     * @param {number} itemIndex - Index of the menu item to click (0-based)
     */
    clickContextMenuItem(itemIndex) {
        const { selectors } = PROJECTS_CONFIG;
        
        cy.get(selectors.contextMenu).find('button').eq(itemIndex).click();
    }

    /**
     * Delete project through context menu
     */
    deleteProject() {
        this.openProjectContextMenu();
        this.clickContextMenuItem(2); // Delete is usually the 3rd item (index 2)
        this.elements.deleteProjectYesBtn().click();
    }

    /**
     * Edit project through context menu
     */
    editProject() {
        this.openProjectContextMenu();
        this.clickContextMenuItem(0); // Edit is usually the 1st item (index 0)
    }

    /**
     * Update project with new information
     * @param {string} newCostCenter - New cost center
     * @param {string} newProjectTitle - New project title
     * @param {string} newBranch - New branch
     * @param {string} newDescription - New description
     */
    updateProject(newCostCenter, newProjectTitle, newBranch, newDescription) {
        const { waitTimes } = PROJECTS_CONFIG;
        
        this.elements.costCenterField().click().type(newCostCenter);
        this.elements.projectTitleField().click().type(newProjectTitle);
        this.elements.branchField().click();
        this.elements.branchContainer().contains(newBranch).click();
        this.elements.description().click({ force: true }).type(newDescription);
        
        cy.wait(waitTimes.medium);
        this.elements.responsiblePersonField().click();
        this.elements.responsibleDropdown().contains(PROJECTS_CONFIG.testData.responsiblePerson).click();
        
        this.elements.updateProjectBtn().click({ force: true });
        cy.wait(waitTimes.long);
    }

    /**
     * Create a complete project with all required fields
     * @param {string} projectName - Name of the project
     * @returns {string} The generated project name
     */
    createProject(projectName = null) {
        const finalProjectName = projectName || generateProjectName();
        
        this.openAddProjectModal();
        this.fillProjectForm(finalProjectName);
        this.fillMapLocation();
        this.saveProject();
        
        return finalProjectName;
    }

    /**
     * Create and delete a project
     * @param {string} projectName - Name of the project
     * @returns {string} The generated project name
     */
    createAndDeleteProject(projectName = null) {
        const finalProjectName = this.createProject(projectName);
        
        this.searchProject(finalProjectName);
        this.clickProjectInList(finalProjectName);
        this.deleteProject();
        
        return finalProjectName;
    }

    /**
     * Create, edit, and delete a project
     * @param {string} projectName - Name of the project
     * @returns {string} The generated project name
     */
    createEditAndDeleteProject(projectName = null) {
        const finalProjectName = this.createProject(projectName);
        
        this.searchProject(finalProjectName);
        this.clickProjectInList(finalProjectName);
        this.editProject();
        
        // Update project with modified data
        this.updateProject('1', '1', PROJECTS_CONFIG.testData.branches.direction2, 'Description1');
        
        // Delete the project
        this.clickProjectInList(finalProjectName);
        this.deleteProject();
        
        return finalProjectName;
    }

    /**
     * Virtual Project Helpers
     */

    /**
     * Open add virtual project modal
     */
    openAddVirtualProjectModal() {
        this.elements.addVirtualprojectBtn().click();
    }

    /**
     * Fill virtual project form
     * @param {string} projectName - Name of the virtual project
     * @param {string} costCenter - Cost center for the project
     * @param {string} address - Address for the project
     */
    fillVirtualProjectForm(projectName, costCenter = PROJECTS_CONFIG.testData.costCenter, 
                          address = PROJECTS_CONFIG.testData.address) {
        this.elements.addVirtualNameField().click().type(projectName);
        this.elements.addVirtualCostCenterField().click().type(costCenter);
        this.elements.addVirtualBranchDropdown().click();
        this.elements.selectFirstBranch().click();
        this.elements.addressField().click().type(address);
    }

    /**
     * Save virtual project
     */
    saveVirtualProject() {
        this.elements.createVirtualProjectBtn().click({ force: true });
        cy.wait(PROJECTS_CONFIG.waitTimes.long);
    }

    /**
     * Search virtual project
     * @param {string} projectName - Name of the virtual project to search
     */
    searchVirtualProject(projectName) {
        const { waitTimes } = PROJECTS_CONFIG;
        
        this.elements.searchVirtualProject().click().type(projectName);
        cy.wait(waitTimes.medium);
    }

    /**
     * Click virtual project in list
     * @param {string} projectName - Name of the virtual project
     */
    clickVirtualProjectInList(projectName) {
        const { selectors } = PROJECTS_CONFIG;
        
        cy.get(selectors.virtualProjectItem).contains(projectName).click();
    }

    /**
     * Delete virtual project
     */
    deleteVirtualProject() {
        this.elements.deleteProjectBtn().click();
        this.elements.deleteVirtualYesBtn().click();
    }

    /**
     * Create virtual project
     * @param {string} projectName - Name of the virtual project
     * @returns {string} The generated project name
     */
    createVirtualProject(projectName = null) {
        const finalProjectName = projectName || generateVirtualProjectName();
        
        this.openAddVirtualProjectModal();
        this.fillVirtualProjectForm(finalProjectName);
        this.saveVirtualProject();
        
        return finalProjectName;
    }

    /**
     * Create and delete virtual project
     * @param {string} projectName - Name of the virtual project
     * @returns {string} The generated project name
     */
    createAndDeleteVirtualProject(projectName = null) {
        const finalProjectName = this.createVirtualProject(projectName);
        
        this.searchVirtualProject(finalProjectName);
        this.clickVirtualProjectInList(finalProjectName);
        this.deleteVirtualProject();
        
        return finalProjectName;
    }

    /**
     * Inactive Project Helpers
     */

    /**
     * Search inactive project
     * @param {string} projectName - Name of the project to search
     */
    searchInactiveProject(projectName) {
        const { waitTimes } = PROJECTS_CONFIG;
        
        this.elements.searchInactiveProject().click().type('{selectAll}{backspace}');
        cy.wait(waitTimes.short);
        this.elements.searchInactiveProject().click().type(projectName);
        cy.wait(waitTimes.veryLong);
    }

    /**
     * Click first project in inactive list
     * @param {string} projectName - Name of the project
     */
    clickFirstInactiveProject(projectName) {
        this.elements.firstProject().contains(projectName).click();
    }

    /**
     * Make project inactive
     */
    makeProjectInactive() {
        this.elements.inactiveBtn().click();
        this.elements.inactiveProjectYesBtn().click();
        cy.wait(PROJECTS_CONFIG.waitTimes.long);
    }

    /**
     * Make project active
     */
    makeProjectActive() {
        this.elements.activeBtn().click();
        this.elements.activeProjectYesBtn().click();
    }

    /**
     * Edit inactive project
     */
    editInactiveProject() {
        this.elements.editInactiveBtn().click();
    }

    /**
     * Create, make inactive, edit, and delete project
     * @param {string} projectName - Name of the project
     * @returns {string} The generated project name
     */
    createInactiveEditAndDeleteProject(projectName = null) {
        const finalProjectName = this.createProject(projectName);
        
        // Make project inactive
        this.searchInactiveProject(finalProjectName);
        this.clickFirstInactiveProject(finalProjectName);
        this.makeProjectInactive();
        
        // Navigate to inactive projects page
        this.navigateToInactiveProjectListPage();
        cy.wait(PROJECTS_CONFIG.waitTimes.long);
        
        // Edit inactive project
        this.searchInactiveProject(finalProjectName);
        this.clickFirstInactiveProject(finalProjectName);
        this.editInactiveProject();
        
        // Update project
        this.updateProject('123', '123', PROJECTS_CONFIG.testData.branches.direction1, 'Description123');
        
        // Delete project
        this.clickFirstInactiveProject(finalProjectName);
        this.deleteProject();
        
        return finalProjectName;
    }

    /**
     * Create, make inactive, and make active project
     * @param {string} projectName - Name of the project
     * @returns {string} The generated project name
     */
    createInactiveAndActiveProject(projectName = null) {
        const finalProjectName = this.createProject(projectName);
        
        // Make project inactive
        this.searchInactiveProject(finalProjectName);
        this.clickFirstInactiveProject(finalProjectName);
        this.makeProjectInactive();
        
        // Navigate to inactive projects page
        this.navigateToInactiveProjectListPage();
        cy.wait(PROJECTS_CONFIG.waitTimes.long);
        
        // Make project active again
        this.searchInactiveProject(finalProjectName);
        this.clickFirstInactiveProject(finalProjectName);
        this.makeProjectActive();
        
        return finalProjectName;
    }
}

/**
 * Standalone helper functions for specific operations
 */

/**
 * Create and delete a regular project with default test data
 */
export const createAndDeleteProject = () => {
    const helpers = new ProjectsHelpers();
    return helpers.createAndDeleteProject();
};

/**
 * Create, edit, and delete a regular project with default test data
 */
export const createEditAndDeleteProject = () => {
    const helpers = new ProjectsHelpers();
    return helpers.createEditAndDeleteProject();
};

/**
 * Create and delete a virtual project with default test data
 */
export const createAndDeleteVirtualProject = () => {
    const helpers = new ProjectsHelpers();
    return helpers.createAndDeleteVirtualProject();
};

/**
 * Create, make inactive, edit, and delete a project with default test data
 */
export const createInactiveEditAndDeleteProject = () => {
    const helpers = new ProjectsHelpers();
    return helpers.createInactiveEditAndDeleteProject();
};

/**
 * Create, make inactive, and make active a project with default test data
 */
export const createInactiveAndActiveProject = () => {
    const helpers = new ProjectsHelpers();
    return helpers.createInactiveAndActiveProject();
};
