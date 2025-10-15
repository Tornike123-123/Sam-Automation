/**
 * Person Elements Page Object Model
 * Centralized selectors for Person related UI elements
 */
export class PersonElements {
    
    // ===== GENERAL INFORMATION TAB =====
    
    /**
     * Get person add page
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    getPersonAddPage() {
        return cy.visit('https://sam.dev.syniotec.com/person');
    }
    
    /**
     * Get first name field
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    getPersonAddFirstName() {
        return cy.get('.general-info__personal-form > :nth-child(3) > :nth-child(1) > .shl-form-field > .shl-form-field-wrapper > .shl-form-field-flex > .shl-form-field-infix > .ng-untouched');
    }
    
    /**
     * Get last name field
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    getPersonAddLastName() {
        return cy.get(':nth-child(3) > :nth-child(2) > .shl-form-field > .shl-form-field-wrapper');
    }
    
    /**
     * Get phone code field
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    getPersonAddCode() {
        return cy.get('.general-info__phone-code > .ng-untouched > .shl-select > .shl-select-inputs-container > .ng-valid > .input > .input-content-container > .input-flex-box > .field > .ng-pristine');
    }
    
    /**
     * Get phone number field
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    getPersonAddPhoneNumber() {
        return cy.get('.general-info__phone-number > .shl-form-field > .shl-form-field-wrapper > .shl-form-field-flex > .shl-form-field-infix > .ng-untouched');
    }
    
    /**
     * Get email field
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    getPersonAddEmail() {
        return cy.get(':nth-child(4) > :nth-child(1) > .shl-form-field > .shl-form-field-wrapper > .shl-form-field-flex > .shl-form-field-infix > .ng-untouched');
    }
    
    /**
     * Get nationality field
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    getPersonAddNationality() {
        return cy.get(':nth-child(2) > .ng-valid.ng-star-inserted > .shl-select > .shl-select-inputs-container > .ng-valid > .input > .input-content-container > .input-flex-box > .field > .ng-untouched');
    }
    
    /**
     * Get birth date field
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    getPersonAddBirthDate() {
        return cy.get('.shl-date-picker > .ng-valid > .input > .input-content-container > .input-flex-box > .field > .ng-untouched');
    }
    
    // ===== ADDRESS FIELDS =====
    
    /**
     * Get country field
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    getPersonAddCountry() {
        return cy.get('.general-info__address-form > :nth-child(1) > :nth-child(1) > .ng-valid.ng-star-inserted > .shl-select > .shl-select-inputs-container > .ng-valid > .input > .input-content-container > .input-flex-box > .field > .ng-untouched');
    }
    
    /**
     * Get city field
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    getPersonAddCity() {
        return cy.get('.general-info__address-form > :nth-child(1) > :nth-child(2) > .shl-form-field > .shl-form-field-wrapper > .shl-form-field-flex > .shl-form-field-infix > .ng-untouched');
    }
    
    /**
     * Get street field
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    getPersonAddStreet() {
        return cy.get(':nth-child(2) > :nth-child(1) > .shl-form-field > .shl-form-field-wrapper > .shl-form-field-flex > .shl-form-field-infix > .ng-untouched');
    }
    
    /**
     * Get street number field
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    getPersonAddStreetNo() {
        return cy.get(':nth-child(2) > :nth-child(2) > .shl-form-field > .shl-form-field-wrapper > .shl-form-field-flex > .shl-form-field-infix > .ng-untouched');
    }
    
    /**
     * Get entry/exit dates field
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    getPersonAddEntryExitDates() {
        return cy.get('.shl-date-range-picker > :nth-child(1) > .ng-valid > .input > .input-content-container > .input-flex-box > .action > .shl-select-calendar-btn > .shl-i');
    }
    
    // ===== ADDITIONAL INFORMATION =====
    
    /**
     * Get emergency contact name field
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    getPersonAddEmergencyName() {
        return cy.get('.general-info__additional-info-form-full-column > .shl-form-field > .shl-form-field-wrapper > .shl-form-field-flex > .shl-form-field-infix > .ng-untouched');
    }
    
    /**
     * Get emergency contact code field
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    getPersonAddInformationCode() {
        return cy.get('.general-info__emergency-phone-code > .ng-valid.ng-star-inserted > .shl-select > .shl-select-inputs-container > .ng-valid > .input > .input-content-container > .input-flex-box > .action > .shl-select-close');
    }
    
    /**
     * Get emergency contact phone field
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    getPersonAddEmergencyPhone() {
        return cy.get('.general-info__emergency-phone-number > .shl-form-field > .shl-form-field-wrapper > .shl-form-field-flex > .shl-form-field-infix > .ng-untouched');
    }
    
    /**
     * Get continue general button
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    getPersonAddContinueGeneral() {
        return cy.get('.shl-button-dir');
    }
    
    // ===== COMPANY RELATED INFORMATION =====
    
    /**
     * Get company related information tab
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    getPersonAddCompanyRelatedInformation() {
        return cy.get('sam-stepper-navigation > :nth-child(2)');
    }
    
    /**
     * Get personnel number field
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    getPersonAddPersonnelNumber() {
        return cy.get('.shl-form-field-infix > .ng-untouched');
    }
    
    /**
     * Get position field
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    getPersonAddPosition() {
        return cy.get('[data-cy="position-sam"]');
    }
    
    /**
     * Get affiliation field
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    getPersonAddAffiliation() {
        return cy.get('[data-cy="affiliation"]');
    }
    
    /**
     * Get profession field
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    getPersonAddProfession() {
        return cy.get('[data-cy="profession"]');
    }
    
    /**
     * Get contract type field
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    getPersonAddContractType() {
        return cy.get('[data-cy="contract-type"]');
    }
    
    /**
     * Get container field
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    getPersonAddContainer() {
        return cy.get('.textarea-content-container > .ng-untouched');
    }
    
    /**
     * Get carpooling checkbox
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    getPersonAddCarpoolingCheck() {
        return cy.get(':nth-child(4) > .company-info__column > shl-checkbox.ng-untouched > .shl-checkbox > .shl-checkbox-label > .shl-checkbox-label-content');
    }
    
    /**
     * Get company car checkbox
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    getPersonAddCompanyCarCheck() {
        return cy.get(':nth-child(5) > .company-info__column > shl-checkbox.ng-untouched > .shl-checkbox > .shl-checkbox-label > .shl-checkbox-label-content');
    }
    
    /**
     * Get car type field
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    getPersonAddCarType() {
        return cy.get('.company-info__row.ng-star-inserted > :nth-child(1) > .ng-valid.ng-star-inserted > .shl-select > .shl-select-inputs-container > .ng-valid > .input > .input-content-container > .input-flex-box > .action > .shl-select-close');
    }
    
    /**
     * Get license plate field
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    getPersonAddLicensePlate() {
        return cy.get('.shl-form-field-infix > .ng-untouched');
    }
    
    /**
     * Get continue company button
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    getPersonAddContinueCompany() {
        return cy.get('.shl-button-dir');
    }
    
    // ===== QUALIFICATION INFORMATION =====
    
    /**
     * Get qualification information tab
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    getPersonAddQualificationInformation() {
        return cy.get('sam-stepper-navigation > :nth-child(3)');
    }
    
    /**
     * Get qualification add new button
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    getPersonAddQualificationAddNew() {
        return cy.get(':nth-child(1) > .qualification__button');
    }
    
    /**
     * Get qualification type field
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    getPersonAddQualificationType() {
        return cy.get('.shl-i');
    }
    
    /**
     * Get qualification finish button
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    getPersonAddQualificationFinish() {
        return cy.get('.add-qualification__actions-row > .filled');
    }
    
    /**
     * Get qualification plus button
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    getPersonAddQualificationPlusButton() {
        return cy.get(':nth-child(1) > .qualification__section-row > .qualification__plus');
    }
    
    /**
     * Get qualification delete button
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    getPersonAddQualificationDelete() {
        return cy.get(':nth-child(4) > .qualification__wrap-header > .qualification__wrap-close');
    }
    
    // ===== CERTIFICATE FIELDS =====
    
    /**
     * Get certificate add new button
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    getPersonAddCertificateAddNew() {
        return cy.get('.qualification__row > :nth-child(2) > .qualification__button');
    }
    
    /**
     * Get certificate name field
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    getPersonAddCertificateName() {
        return cy.get('.shl-select-close');
    }
    
    /**
     * Get certificate save button
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    getPersonAddCertificateSave() {
        return cy.get('.certificate-modal__actions-button');
    }
    
    /**
     * Get certificate plus button
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    getPersonAddCertificatePlusButton() {
        return cy.get('.qualification__row > :nth-child(2) > .qualification__section-row > .qualification__plus');
    }
    
    /**
     * Get certificate checkbox
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    getPersonAddCertificateCheckBox() {
        return cy.get('.shl-checkbox-label-content');
    }
    
    /**
     * Get certificate delete button
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    getPersonAddCertificateDelete() {
        return cy.get(':nth-child(1) > .certificate > .certificate__text--small > .certificate__button > .far');
    }
    
    // ===== DRIVING LICENSE FIELDS =====
    
    /**
     * Get driving license add new button
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    getPersonAddDrivingLicenseAddNew() {
        return cy.get('.qualification__button');
    }
    
    /**
     * Get driving license type field
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    getPersonAddDrivingLicenseType() {
        return cy.get('.shl-select-close');
    }
    
    /**
     * Get driving license checkbox
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    getPersonAddDrivingLicenseCheckBox() {
        return cy.get('.shl-checkbox-label-content');
    }
    
    /**
     * Get driving license update button
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    getPersonAddDrivingLicenseUpdate() {
        return cy.get('.license-modal__actions-button');
    }
    
    /**
     * Get driving license plus button
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    getPersonAddDrivingLicensePlusButton() {
        return cy.get('.qualification__section--driver > .qualification__section-row > .qualification__plus');
    }
    
    /**
     * Get driving license delete button
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    getPersonAddDrivingLicenseDelete() {
        return cy.get(':nth-child(1) > .license > .license__button');
    }
    
    // ===== SAVE AND EXIT =====
    
    /**
     * Get person save and exit button
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    getPersonAddSaveAndExit() {
        return cy.get('.shl-button-dir');
    }
    
    // ===== PERSON TITLE =====
    
    /**
     * Get person title
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    getPersonTitle() {
        return cy.get('.mbsc-timeline-resource-title > sam-person-card.ng-star-inserted > .person-card > .person-card__header > .person-card__header-title > .person-card__header-title-txt');
    }
    
    // ===== LEGACY METHODS (for backward compatibility) =====
    
    personAddPage = () => this.getPersonAddPage();
    personAddFirstName = () => this.getPersonAddFirstName();
    personAddLastName = () => this.getPersonAddLastName();
    personAddCode = () => this.getPersonAddCode();
    personAddPhoneNumber = () => this.getPersonAddPhoneNumber();
    personAddEmail = () => this.getPersonAddEmail();
    personAddNationality = () => this.getPersonAddNationality();
    personAddBirthDate = () => this.getPersonAddBirthDate();
    personAddCountry = () => this.getPersonAddCountry();
    personAddCity = () => this.getPersonAddCity();
    personAddStreet = () => this.getPersonAddStreet();
    personAddStreetNo = () => this.getPersonAddStreetNo();
    personAddEntryExitDates = () => this.getPersonAddEntryExitDates();
    personAddEmergancyName = () => this.getPersonAddEmergencyName();
    personAddInformationCode = () => this.getPersonAddInformationCode();
    personAddEmergancyPhone = () => this.getPersonAddEmergencyPhone();
    personAddContinueGeneral = () => this.getPersonAddContinueGeneral();
    personAddCompanyRelatedInformation = () => this.getPersonAddCompanyRelatedInformation();
    personAddPersoneelNumber = () => this.getPersonAddPersonnelNumber();
    personAddPosition = () => this.getPersonAddPosition();
    personAddAffiliation = () => this.getPersonAddAffiliation();
    personAddProfession = () => this.getPersonAddProfession();
    personAddContractType = () => this.getPersonAddContractType();
    personAddContainer = () => this.getPersonAddContainer();
    personAddCarpoolingCheck = () => this.getPersonAddCarpoolingCheck();
    personAddCompanyCarCheck = () => this.getPersonAddCompanyCarCheck();
    personAddCarType = () => this.getPersonAddCarType();
    personAddLicensePlate = () => this.getPersonAddLicensePlate();
    personAddContinueCompany = () => this.getPersonAddContinueCompany();
    personAddQualificationInformation = () => this.getPersonAddQualificationInformation();
    personAddQualificationAddNew = () => this.getPersonAddQualificationAddNew();
    personAddQualificationType = () => this.getPersonAddQualificationType();
    personAddQualificationFinish = () => this.getPersonAddQualificationFinish();
    personAddQualificationPlusButton = () => this.getPersonAddQualificationPlusButton();
    personAddQualificationDelete = () => this.getPersonAddQualificationDelete();
    personAddCertificateAddNew = () => this.getPersonAddCertificateAddNew();
    personAddCertificateName = () => this.getPersonAddCertificateName();
    personAddCertificateSave = () => this.getPersonAddCertificateSave();
    personAddCertificatePlusButton = () => this.getPersonAddCertificatePlusButton();
    personAddCertificateCheckBox = () => this.getPersonAddCertificateCheckBox();
    personAddCertificateDelete = () => this.getPersonAddCertificateDelete();
    personAddDrivingLicenseAddNew = () => this.getPersonAddDrivingLicenseAddNew();
    personAddDrivingLicenseType = () => this.getPersonAddDrivingLicenseType();
    personAddDrivingLicenseCheckBox = () => this.getPersonAddDrivingLicenseCheckBox();
    personAddDrivingLicenseUpdate = () => this.getPersonAddDrivingLicenseUpdate();
    personAddDrivingLicensePlusButton = () => this.getPersonAddDrivingLicensePlusButton();
    personAddDrivingLicenseDelete = () => this.getPersonAddDrivingLicenseDelete();
    personAddSaveAndExit = () => this.getPersonAddSaveAndExit();
    personTitle = () => this.getPersonTitle();
}