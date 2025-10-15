/**
 * Persons Helper Functions
 * Reusable helper functions for Persons test operations
 */

import { PersonElements } from '../../../../fixtures/Cases/Elements/PersonElements/PersonElements.js';
import { PERSONS_CONFIG } from './personsConfig.js';

export class PersonsHelpers {
    constructor() {
        this.elements = new PersonElements();
    }

    /**
     * Fill general information for a person
     * @param {string} firstName - First name
     * @param {string} lastName - Last name
     */
    fillGeneralInformation(firstName = PERSONS_CONFIG.testData.firstName, lastName = PERSONS_CONFIG.testData.lastName) {
        this.elements.getPersonAddFirstName().type(firstName);
        this.elements.getPersonAddLastName().type(lastName);
        this.elements.getPersonAddContinueGeneral().click();
    }

    /**
     * Fill company related information for a person
     * @param {string} personnelNumber - Personnel number
     */
    fillCompanyInformation(personnelNumber = PERSONS_CONFIG.testData.personnelNumber) {
        this.elements.getPersonAddPersonnelNumber().type(personnelNumber);
        
        // Select position
        this.elements.getPersonAddPosition().click();
        cy.get(':nth-child(1) > .shl-select-option').click();
        
        // Select affiliation
        this.elements.getPersonAddAffiliation().click();
        cy.get('.shl-select-options-container > :nth-child(1)').click();
        
        // Select profession
        this.elements.getPersonAddProfession().click();
        cy.get(':nth-child(1) > .shl-select-option').click();
        
        // Select contract type
        this.elements.getPersonAddContractType().click();
        cy.get(':nth-child(1) > .shl-select-option').click();
        
        this.elements.getPersonAddContinueCompany().click();
    }

    /**
     * Create a person with required fields only
     * @param {string} firstName - First name
     * @param {string} lastName - Last name
     * @param {string} personnelNumber - Personnel number
     */
    createPersonWithRequiredFields(firstName = PERSONS_CONFIG.testData.firstName, lastName = PERSONS_CONFIG.testData.lastName, personnelNumber = PERSONS_CONFIG.testData.personnelNumber) {
        this.fillGeneralInformation(firstName, lastName);
        this.fillCompanyInformation(personnelNumber);
        
        // Save person
        cy.wait(PERSONS_CONFIG.waitTimes.short);
        this.elements.getPersonAddSaveAndExit().click();
    }

    /**
     * Create a person with full information
     * @param {Object} personData - Complete person data
     */
    createPersonWithFullInformation(personData = PERSONS_CONFIG.testData) {
        // Fill general information
        this.elements.getPersonAddFirstName().type(personData.firstName);
        this.elements.getPersonAddLastName().type(personData.lastName);
        
        // Fill additional fields if provided
        if (personData.email) {
            this.elements.getPersonAddEmail().type(personData.email);
        }
        if (personData.phoneNumber) {
            this.elements.getPersonAddPhoneNumber().type(personData.phoneNumber);
        }
        if (personData.emergencyContactName) {
            this.elements.getPersonAddEmergencyName().type(personData.emergencyContactName);
        }
        if (personData.emergencyPhoneNumber) {
            this.elements.getPersonAddEmergencyPhone().type(personData.emergencyPhoneNumber);
        }
        
        this.elements.getPersonAddContinueGeneral().click();
        
        // Fill company information
        this.elements.getPersonAddPersonnelNumber().type(personData.personnelNumber);
        
        // Select dropdowns
        this.elements.getPersonAddPosition().click();
        cy.get(':nth-child(1) > .shl-select-option').click();
        
        this.elements.getPersonAddAffiliation().click();
        cy.get('.shl-select-options-container > :nth-child(1)').click();
        
        this.elements.getPersonAddProfession().click();
        cy.get(':nth-child(1) > .shl-select-option').click();
        
        this.elements.getPersonAddContractType().click();
        cy.get(':nth-child(1) > .shl-select-option').click();
        
        this.elements.getPersonAddContinueCompany().click();
        
        // Save person
        cy.wait(PERSONS_CONFIG.waitTimes.short);
        this.elements.getPersonAddSaveAndExit().click();
    }

    /**
     * Navigate to HR Planner and open person profile
     * @param {string} personName - Name of the person to open
     */
    navigateToPersonProfile(personName = PERSONS_CONFIG.testData.personName) {
        // Setup window handling for new tabs
        cy.window().then((win) => {
            cy.stub(win, 'open').callsFake((url) => {
                win.location.href = url;
            });
        });
        
        cy.wait(PERSONS_CONFIG.waitTimes.medium);
        cy.GoToHRPlanner();
        cy.OpenPersonProfile(personName);
    }

    /**
     * Delete a person from HR Planner
     * @param {string} personName - Name of the person to delete
     */
    deletePerson(personName = PERSONS_CONFIG.testData.personName) {
        this.navigateToPersonProfile(personName);
        // Add delete logic here based on the specific delete implementation
    }

    /**
     * Create and delete a person in one operation
     * @param {string} firstName - First name
     * @param {string} lastName - Last name
     * @param {string} personnelNumber - Personnel number
     */
    createAndDeletePerson(firstName = PERSONS_CONFIG.testData.firstName, lastName = PERSONS_CONFIG.testData.lastName, personnelNumber = PERSONS_CONFIG.testData.personnelNumber) {
        this.createPersonWithRequiredFields(firstName, lastName, personnelNumber);
        this.deletePerson(`${firstName} ${lastName}`);
    }

    /**
     * Add booking from timeline
     * @param {string} personName - Name of the person
     * @param {Object} bookingData - Booking information
     */
    addBookingFromTimeline(personName, bookingData) {
        this.navigateToPersonProfile(personName);
        // Add booking logic here based on the specific implementation
    }

    /**
     * Release booking and delete
     * @param {string} personName - Name of the person
     */
    releaseBookingAndDelete(personName) {
        this.navigateToPersonProfile(personName);
        // Add release and delete logic here
    }

    /**
     * Create status booking and delete
     * @param {string} personName - Name of the person
     * @param {Object} statusData - Status information
     */
    createStatusBookingAndDelete(personName, statusData) {
        this.navigateToPersonProfile(personName);
        // Add status booking logic here
    }

    /**
     * Create multiple bookings and delete persons
     * @param {Array} persons - Array of person names
     * @param {Array} bookings - Array of booking data
     */
    createMultipleBookingsAndDeletePersons(persons, bookings) {
        persons.forEach((person, index) => {
            this.navigateToPersonProfile(person);
            // Add multiple booking logic here
        });
    }

    /**
     * Create multiple bookings on timeline
     * @param {string} personName - Name of the person
     * @param {Array} bookings - Array of booking data
     */
    createMultipleBookingsOnTimeline(personName, bookings) {
        this.navigateToPersonProfile(personName);
        // Add multiple timeline booking logic here
    }

    /**
     * Verify person exists in HR Planner
     * @param {string} personName - Name of the person to verify
     */
    verifyPersonExists(personName) {
        this.elements.getPersonTitle().should('contain', personName);
    }

    /**
     * Verify person does not exist in HR Planner
     * @param {string} personName - Name of the person to verify
     */
    verifyPersonDoesNotExist(personName) {
        this.elements.getPersonTitle().should('not.contain', personName);
    }

    /**
     * Wait for person page to load
     */
    waitForPersonPageLoad() {
        cy.wait(PERSONS_CONFIG.waitTimes.veryLong);
    }

    /**
     * Wait for HR Planner to load
     */
    waitForHRPlannerLoad() {
        cy.wait(PERSONS_CONFIG.waitTimes.medium);
    }
}
