// import { PersonElements } from '../../../../fixtures/Cases/Elements/PersonElements/PersonElements.js';

// describe('Crew planner filters', () => {
//     beforeEach(() => {
//         const email = "reg.driver@syniotec.com";
//         const password = "Qwerty1$";
//         cy.session('login', () => {
//             cy.SAMlogin(email, password);
//         });
//     });
//     it('should test the filters', () => {
        
//         cy.visit('https://sam.dev.syniotec.com/person');

//         const personElements = new PersonElements();
        
//         personElements.personAddFirstName().type("Test Person");
//         personElements.personAddLastName().type("Cy");
//         //Code
//         personElements.personAddCode().type('995');
//         cy.get('.shl-select-option').click();
//         //PhoneNumber
//         personElements.personAddPhoneNumber().type("599-69-96-69");
//         //Email
//         personElements.personAddEmail().type("bambino@gmail.com");
//         //Nationality
//         personElements.personAddNationality().type("Geo");
//         cy.get(':nth-child(1) > .shl-select-option').click();
//         //BirthDate
//         personElements.personAddBirthDate().click();
//         cy.get('shl-plane-calendar-dates > .shl-calendar-header-switch > .shl-calendar-header-txt').click();
//         cy.get('.shl-month-picker-container > .shl-calendar-header-switch > .shl-calendar-header-txt').click();
//         cy.get('shl-month-calendar > shl-year-calendar > .shl-year-picker > .shl-year-picker-container > .shl-calendar-header-switch > :nth-child(1) > .shl-calendar-btn > .shl-i').click();
//         cy.get('shl-month-calendar > shl-year-calendar > .shl-year-picker > .shl-year-picker-container > .shl-calendar-header-switch > :nth-child(1) > .shl-calendar-btn > .shl-i').click();
        
//         cy.get('shl-month-calendar > shl-year-calendar > .shl-year-picker > .shl-year-picker-container > .shl-calendar-year-picker-years > :nth-child(7)').click();
//         cy.get('.shl-calendar-month-picker-months > :nth-child(8)').click();
//         cy.get(':nth-child(1) > :nth-child(7) > span').click();
//         //Address
//         //Country
//         personElements.personAddCountry().type('Ger');
//         cy.get(':nth-child(2) > .shl-select-option').click();

//         //city
//         personElements.personAddCity().type('Tbilisi');
//         //Street
//         personElements.personAddStreet().type('gakhokidze');
//         //street No.
//         personElements.personAddStreetNo().type('18');
//         //entry/exit dates
//         personElements.personAddEntryExitDates().click();
//         cy.get('.today > span').click();
//         cy.get('.today > span').click();
//         //addition information
//         //emergancyContactName
//         personElements.personAddEmergancyName().type('lala land');
//         //Code
//         personElements.personAddInformationCode().click();
//         cy.get('.ng-tns-c349140495-5.ng-untouched > .input > .input-content-container > .input-flex-box > .field > .ng-untouched').type('995');
//         cy.get('.shl-select-option').click();
//         //emergencyContactPhoneNumber
//         personElements.personAddEmergancyPhone().type('599239866');
//         //continue
//         personElements.personAddContinueGeneral().click();

//         /* ==== Generated with Cypress Studio ==== */
//         //Personeel number
//         personElements.personAddPersoneelNumber().type('NIG-231');
//         //Position
//         personElements.personAddPosition().click();
//         cy.get(':nth-child(1) > .shl-select-option > .shl-select-option-container > .shl-select-option-text > .shl-select-option-text-primary > .ng-star-inserted').click();
//         //Affilliation
//         personElements.personAddAffiliation().click();
//         cy.get('.shl-select-options-container > :nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(1)').click()
//         //Profession
//         personElements.personAddProfession().click();
//         cy.get(':nth-child(1) > .shl-select-option').click();
//         //Contract Type
//         personElements.personAddContractType().click();
//         cy.get(':nth-child(1) > .shl-select-option > .shl-select-option-container > .shl-select-option-text > .shl-select-option-text-primary > .ng-star-inserted').click();
//         //Container
//         personElements.personAddContainer().type('one to the one to the one to the three');
//         //CarpoolingCheck 
//         personElements.personAddCarpoolingCheck().click()       
//         //CompanyCarCheck
//         personElements.personAddCompanyCarCheck().click();      
//         //CarType
//         personElements.personAddCarType().click();
//         cy.get(':nth-child(1) > .shl-select-option').click();
//         //LicensePlate
//         personElements.personAddLicensePlate().type('ad-123-da');
//         //ContinueBtn
//         personElements.personAddContinueCompany().click();

// //  Qualifications #1      
// //add new btn  
// personElements.personAddQualificationAddNew().click();
// //Qualification
// personElements.personAddQualificationType().click();
// cy.get('.shl-select-options-container > :nth-child(1) > .shl-tree-option > .shl-tree-option-container > .shl-tree-option-parent').click();
// cy.get('.shl-select-options-container > :nth-child(3) > .shl-tree-option > .shl-tree-option-container > .shl-tree-option-parent').click();
// //Finish
// personElements.personAddQualificationFinish().click({force : true});
// //plus btn
// personElements.personAddQualificationPlusButton().click();
// cy.get('.shl-i').click();
// cy.get('.shl-select-options-container > :nth-child(2) > .shl-tree-option > .shl-tree-option-container > .shl-tree-option-parent').click();
// cy.get('.shl-select-options-container > :nth-child(3) > .shl-tree-option > .shl-tree-option-container > .shl-tree-option-parent').click();
// //Finish 
// personElements.personAddQualificationFinish().click({force : true});
// //delete
// personElements.personAddQualificationDelete().click();
// cy.get('.confirmation__actions > .filled').click();

// // Certificates #1
// //Add new btn
// personElements.personAddCertificateAddNew().click();
// //Certificate name
// personElements.personAddCertificateName().click();
// cy.get(':nth-child(1) > .shl-select-option > .shl-select-option-container > .shl-select-option-text > .shl-select-option-text-primary > .ng-star-inserted').click();
// //Start date
// cy.get('[formcontrolname="start_date"] > .shl-date-picker > .ng-valid > .input > .input-content-container > .input-flex-box > .action > .shl-select-calendar-btn > .shl-i').click();
// cy.get('.shl-calendar-dates > :nth-child(2) > :nth-child(1) > span').click()
// cy.get('.shl-date-picker-calendar-backdrop').click();
// //End date
// cy.get('shl-date-picker.ng-untouched > .shl-date-picker > .ng-valid > .input > .input-content-container > .input-flex-box > .action > .shl-select-calendar-btn > .shl-i').click();
// cy.get('.today > span').click()
// cy.get('.shl-date-picker-calendar-backdrop').click();
// //Save and exit
// personElements.personAddCertificateSave().click();

// //  Certificates #2
// //Plus btn
// personElements.personAddCertificatePlusButton().click();
// //Certificate name
// personElements.personAddCertificateName().click();
// cy.get(':nth-child(4) > .shl-select-option > .shl-select-option-container > .shl-select-option-text > .shl-select-option-text-primary > .ng-star-inserted').click();
// //start date
// cy.get('[formcontrolname="start_date"] > .shl-date-picker > .ng-valid > .input > .input-content-container > .input-flex-box > .action > .shl-select-calendar-btn > .shl-i').click();
// cy.get('.shl-calendar-dates > :nth-child(2) > :nth-child(1) > span').click()
// cy.get('.shl-date-picker-calendar-backdrop').click();
// //checkbox
// personElements.personAddCertificateCheckBox().click();
// //save and exit
// personElements.personAddCertificateSave().click();
// //delete
// personElements.personAddCertificateDelete().click();
// cy.get('.confirmation__actions > .filled').click();

// //  Driving license
// //add new btn
// personElements.personAddDrivingLicenseAddNew().click();
// //Type of driving license
// personElements.personAddDrivingLicenseType().click();
// cy.get(':nth-child(4) > .shl-select-option > .shl-select-option-container > .shl-select-option-text > .shl-select-option-text-primary > .ng-star-inserted').click();
// //start date
// cy.get('[formcontrolname="startDate"] > .shl-date-picker > .ng-valid > .input > .input-content-container > .input-flex-box > .action').click();
// cy.get('.today > span').click()
// //cy.get('.screenshot-height-container').click()

// //checkbox
// personElements.personAddDrivingLicenseCheckBox().click({force: true});
// //update
// personElements.personAddDrivingLicenseUpdate().click({force: true});

// // plus btn
// personElements.personAddDrivingLicensePlusButton().click();
// //Type of driving license
// personElements.personAddDrivingLicenseType().click();
// cy.get(':nth-child(3) > .shl-select-option > .shl-select-option-container > .shl-select-option-text > .shl-select-option-text-primary > .ng-star-inserted').click();
// //start date
// cy.get('[formcontrolname="startDate"] > .shl-date-picker > .ng-valid > .input > .input-content-container > .input-flex-box > .action').click();
// cy.get('.today > span').click()
// //end date
// cy.get('shl-date-picker.ng-untouched > .shl-date-picker > .ng-valid > .input > .input-content-container > .input-flex-box > .action > .shl-select-calendar-btn > .shl-i').click({force : true});
// cy.get('#cdk-overlay-30 > shl-calendar.ng-star-inserted > .shl-calendar > .shl-calendar-container > shl-plane-calendar-dates > .shl-calendar-dates > :nth-child(3) > .today > span').click({force : true})
// //update
// personElements.personAddDrivingLicenseUpdate().click({force: true});
// //delete
// personElements.personAddDrivingLicenseDelete().click();
// cy.get('.confirmation__actions > .filled').click();

// personElements.personAddDrivingLicenseDelete().click();
// cy.get('.confirmation__actions > .filled').click();
// //save and exit
// cy.wait(1000)
// personElements.personAddSaveAndExit().click();
//     }) 
// });

