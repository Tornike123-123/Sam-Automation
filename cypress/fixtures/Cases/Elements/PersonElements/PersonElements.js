export class PersonElements 
{

            //Person add page//
        //General information  

    personAddPage = () => cy.visit('https://sam.dev.syniotec.com/person'); // /General Information cy.get('sam-stepper-navigation > :nth-child(1)')
//FirstName
    personAddFirstName = () => cy.get('.general-info__personal-form > :nth-child(3) > :nth-child(1) > .shl-form-field > .shl-form-field-wrapper > .shl-form-field-flex > .shl-form-field-infix > .ng-untouched');
//LastName
    personAddLastName = () => cy.get(':nth-child(3) > :nth-child(2) > .shl-form-field > .shl-form-field-wrapper');
//Code
    personAddCode = () => cy.get('.general-info__phone-code > .ng-untouched > .shl-select > .shl-select-inputs-container > .ng-valid > .input > .input-content-container > .input-flex-box > .field > .ng-pristine');
//PhoneNumber
    personAddPhoneNumber = () => cy.get('.general-info__phone-number > .shl-form-field > .shl-form-field-wrapper > .shl-form-field-flex > .shl-form-field-infix > .ng-untouched');
//Email
    personAddEmail = () => cy.get(':nth-child(4) > :nth-child(1) > .shl-form-field > .shl-form-field-wrapper > .shl-form-field-flex > .shl-form-field-infix > .ng-untouched');
//Nationality
    personAddNationality = () => cy.get(':nth-child(2) > .ng-valid.ng-star-inserted > .shl-select > .shl-select-inputs-container > .ng-valid > .input > .input-content-container > .input-flex-box > .field > .ng-untouched');
//BirthDate
    personAddBirthDate = () => cy.get('.shl-date-picker > .ng-valid > .input > .input-content-container > .input-flex-box > .field > .ng-untouched');

    //Address
//Country
    personAddCountry = () => cy.get('.general-info__address-form > :nth-child(1) > :nth-child(1) > .ng-valid.ng-star-inserted > .shl-select > .shl-select-inputs-container > .ng-valid > .input > .input-content-container > .input-flex-box > .field > .ng-untouched');
//city
    personAddCity = () => cy.get('.general-info__address-form > :nth-child(1) > :nth-child(2) > .shl-form-field > .shl-form-field-wrapper > .shl-form-field-flex > .shl-form-field-infix > .ng-untouched');
//Street
    personAddStreet = () => cy.get(':nth-child(2) > :nth-child(1) > .shl-form-field > .shl-form-field-wrapper > .shl-form-field-flex > .shl-form-field-infix > .ng-untouched');
//street No.
    personAddStreetNo = () => cy.get(':nth-child(2) > :nth-child(2) > .shl-form-field > .shl-form-field-wrapper > .shl-form-field-flex > .shl-form-field-infix > .ng-untouched');
//entry/exit dates
    personAddEntryExitDates = () => cy.get('.shl-date-range-picker > :nth-child(1) > .ng-valid > .input > .input-content-container > .input-flex-box > .action > .shl-select-calendar-btn > .shl-i');

    //addition information
//emergancyContactName
    personAddEmergancyName = () => cy.get('.general-info__additional-info-form-full-column > .shl-form-field > .shl-form-field-wrapper > .shl-form-field-flex > .shl-form-field-infix > .ng-untouched');
//Code
    personAddInformationCode = () => cy.get('.general-info__emergency-phone-code > .ng-valid.ng-star-inserted > .shl-select > .shl-select-inputs-container > .ng-valid > .input > .input-content-container > .input-flex-box > .action > .shl-select-close');
//emergencyContactPhoneNumber
    personAddEmergancyPhone = () => cy.get('.general-info__emergency-phone-number > .shl-form-field > .shl-form-field-wrapper > .shl-form-field-flex > .shl-form-field-infix > .ng-untouched')
//continue
    personAddContinueGeneral = () => cy.get('.shl-button-dir');

        //Company related information
    personAddCompanyRelatedInformation = () => cy.get('sam-stepper-navigation > :nth-child(2)');
//Personeel Number        
    personAddPersoneelNumber = () => cy.get('.shl-form-field-infix > .ng-untouched');
//Position in SAM     
    personAddPosition = () => cy.get('[data-cy="position-sam"]')
//Affilliation
    personAddAffiliation = () => cy.get('[data-cy="affiliation"]')
//Profession
    personAddProfession = () => cy.get('[data-cy="profession"]')
 //Contract Type
    personAddContractType = () => cy.get('[data-cy="contract-type"]')
//Container
    personAddContainer = () => cy.get('.textarea-content-container > .ng-untouched');
//CarpoolingCheck 
    personAddCarpoolingCheck = () => cy.get(':nth-child(4) > .company-info__column > shl-checkbox.ng-untouched > .shl-checkbox > .shl-checkbox-label > .shl-checkbox-label-content');
//CompanyCarCheck
    personAddCompanyCarCheck = () => cy.get(':nth-child(5) > .company-info__column > shl-checkbox.ng-untouched > .shl-checkbox > .shl-checkbox-label > .shl-checkbox-label-content');      
//CarType
    personAddCarType = () => cy.get('.company-info__row.ng-star-inserted > :nth-child(1) > .ng-valid.ng-star-inserted > .shl-select > .shl-select-inputs-container > .ng-valid > .input > .input-content-container > .input-flex-box > .action > .shl-select-close');
//LicensePlate
    personAddLicensePlate = () => cy.get('.shl-form-field-infix > .ng-untouched').type('ad-123-da');
//ContinueBtn
    personAddContinueCompany = () => cy.get('.shl-button-dir');
  
      //Qualification information
    personAddQualificationInformation = () => cy.get('sam-stepper-navigation > :nth-child(3)');
//Qualification add new
    personAddQualificationAddNew = () => cy.get(':nth-child(1) > .qualification__button');
//Qualification type
    personAddQualificationType = () => cy.get('.shl-i');
//Qualification Finish
    personAddQualificationFinish = () => cy.get('.add-qualification__actions-row > .filled');
//Plus button
    personAddQualificationPlusButton = () => cy.get(':nth-child(1) > .qualification__section-row > .qualification__plus')
//Qualification delete
    personAddQualificationDelete = () => cy.get(':nth-child(4) > .qualification__wrap-header > .qualification__wrap-close');

//Certificate add new
    personAddCertificateAddNew = () => cy.get('.qualification__row > :nth-child(2) > .qualification__button');
//Certificate name
    personAddCertificateName = () => cy.get('.shl-select-close');
//Certificate save and exit
    personAddCertificateSave = () => cy.get('.certificate-modal__actions-button');
//Certificate plus btn
    personAddCertificatePlusButton = () => cy.get('.qualification__row > :nth-child(2) > .qualification__section-row > .qualification__plus');
//Certificate checkbox
    personAddCertificateCheckBox = () => cy.get('.shl-checkbox-label-content')
//Certificate Save
    personAddCertificateSave = () => cy.get('.certificate-modal__actions-button');
//certificateDelete
    personAddCertificateDelete = () => cy.get(':nth-child(1) > .certificate > .certificate__text--small > .certificate__button > .far')

//Driving license new btn
    personAddDrivingLicenseAddNew = () => cy.get('.qualification__button')
//Driving license type
    personAddDrivingLicenseType = () => cy.get('.shl-select-close')
//Driving license checkbox
    personAddDrivingLicenseCheckBox = () => cy.get('.shl-checkbox-label-content')
//Driving license update
    personAddDrivingLicenseUpdate = () => cy.get('.license-modal__actions-button')
//Driving license plus btn
    personAddDrivingLicensePlusButton = () => cy.get('.qualification__section--driver > .qualification__section-row > .qualification__plus')
//Driving license delete
    personAddDrivingLicenseDelete = () => cy.get(':nth-child(1) > .license > .license__button')

    //Person Save and exit
    personAddSaveAndExit = () => cy.get('.shl-button-dir')





//person title
    personTitle = () => cy.get('.mbsc-timeline-resource-title > sam-person-card.ng-star-inserted > .person-card > .person-card__header > .person-card__header-title > .person-card__header-title-txt')
}