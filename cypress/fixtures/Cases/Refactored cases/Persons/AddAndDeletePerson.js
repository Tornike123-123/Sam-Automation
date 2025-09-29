import { PersonElements } from '../../../../fixtures/Cases/Elements/PersonElements/PersonElements.js';

describe('Adds Person, then deletes it.', () => {
    beforeEach(() => {
        const email = "reg.driver@syniotec.com";
        const password = "Qwerty1$";
        cy.session('login', () => {
            cy.SAMlogin(email, password);
                        cy.window().then((win) => {
                win.sessionStorage.setItem('message_bubbles_have_been_shown', 'true');
            });
        });
    });
    it('', () => {

        cy.window().then((win) => {
            cy.stub(win, 'open').callsFake((url) => {
              win.location.href = url;
            });
          });
         
          cy.visit('https://sam.dev.syniotec.com/person');
         cy.viewport(1920, 1080);
          const personElements = new PersonElements();
          cy.wait(5000)
          personElements.personAddFirstName().type("Test Person");
          personElements.personAddLastName().type("Cy");;
          //Code
        //   personElements.personAddCode().type('995');
        //   cy.get('.shl-select-option').click();
          //PhoneNumber
        //   personElements.personAddPhoneNumber().type("599-69-96-69");
          //Email
          const timestamp = Date.now();
          const uniqueEmail = `user_${timestamp}@example.com`;
          cy.log(`Used email: ${uniqueEmail}`);
          personElements.personAddEmail().type(uniqueEmail);
          //Nationality
          personElements.personAddNationality().type("Geo");
          cy.get(':nth-child(1) > .shl-select-option').click();
          //BirthDate
          personElements.personAddBirthDate().click();
        //   cy.get('shl-plane-calendar-dates > .shl-calendar-header-switch > .shl-calendar-header-txt').click();
          cy.get('.today > span').click();
        //   cy.get('.shl-month-picker-container > .shl-calendar-header-switch > .shl-calendar-header-txt').click();
        //   cy.get('shl-month-calendar > shl-year-calendar > .shl-year-picker > .shl-year-picker-container > .shl-calendar-header-switch > :nth-child(1) > .shl-calendar-btn > .shl-i').click();
        //   cy.get('shl-month-calendar > shl-year-calendar > .shl-year-picker > .shl-year-picker-container > .shl-calendar-header-switch > :nth-child(1) > .shl-calendar-btn > .shl-i').click();
          
        //   cy.get('shl-month-calendar > shl-year-calendar > .shl-year-picker > .shl-year-picker-container > .shl-calendar-year-picker-years > :nth-child(7)').click();
        //   cy.get('.shl-calendar-month-picker-months > :nth-child(8)').click();
        //   cy.get(':nth-child(1) > :nth-child(7) > span').click();
          //Address
          //Country
          personElements.personAddCountry().type('Ger');
          cy.get(':nth-child(2) > .shl-select-option').click();
  
          //city
          personElements.personAddCity().type('Tbilisi');
          //Street
          personElements.personAddStreet().type('gakhokidze');
          //street No.
          personElements.personAddStreetNo().type('18');
          //entry/exit dates
          personElements.personAddEntryExitDates().click();
          cy.get('.today > span').click();
          cy.get('.today > span').click();
          //addition information
          //emergancyContactName
          personElements.personAddEmergancyName().type('lala land');
          //Code
        //   personElements.personAddInformationCode().click();
        //   cy.get('.ng-untouched > .shl-select > .shl-select-inputs-container > .ng-valid > .input > .input-content-container > .input-flex-box').type('995');
        //   cy.get('.shl-select-option').click();
        //   //emergencyContactPhoneNumber
        //   personElements.personAddEmergancyPhone().type('599239866');
          //continue
          personElements.personAddContinueGeneral().click();
  
          /* ==== Generated with Cypress Studio ==== */
          //Personeel number
          personElements.personAddPersoneelNumber().type('NIG-231');
          //Position
          personElements.personAddPosition().click();
          cy.get(':nth-child(1) > .shl-select-option > .shl-select-option-container > .shl-select-option-text > .shl-select-option-text-primary > .ng-star-inserted').click();
          //Affilliation
          personElements.personAddAffiliation().click();
          cy.get('.shl-select-options-container > :nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(1)').click()
          //Profession
          personElements.personAddProfession().click();
          cy.get(':nth-child(1) > .shl-select-option').click();
          //Contract Type
          personElements.personAddContractType().click();
          cy.get(':nth-child(1) > .shl-select-option > .shl-select-option-container > .shl-select-option-text > .shl-select-option-text-primary > .ng-star-inserted').click();
          //Container
          personElements.personAddContainer().type('one to the one to the one to the three');
          //CarpoolingCheck 
          personElements.personAddCarpoolingCheck().click()       
          //CompanyCarCheck
          personElements.personAddCompanyCarCheck().click();      
          //CarType
          personElements.personAddCarType().click();
          cy.get(':nth-child(1) > .shl-select-option').click();
          //LicensePlate
          personElements.personAddLicensePlate().type('ad-123-da');
          //ContinueBtn
          personElements.personAddContinueCompany().click();
  
    //  Qualifications #1      
    //add new btn  
    personElements.personAddQualificationAddNew().click();
    //Qualification
    personElements.personAddQualificationType().click();
     cy.get('.shl-select-options-container > :nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(1)')
    // cy.get(`.shl-checkbox checkbox-md`).click()
    
    // cy.get('.shl-select-options-container > :nth-child(1) > .shl-tree-option > .shl-tree-option-container > .shl-tree-option-parent').click();
    cy.get('.shl-select-options-container > :nth-child(3) > .shl-tree-option > .shl-tree-option-container > .shl-tree-option-parent').click();
    //Finish
    personElements.personAddQualificationFinish().click({force : true});
    //plus btn
    personElements.personAddQualificationPlusButton().click();
    cy.get('.shl-i').click();
    cy.get('.shl-select-options-container > :nth-child(2) > .shl-tree-option > .shl-tree-option-container > .shl-tree-option-parent').click();
    cy.get('.shl-select-options-container > :nth-child(3) > .shl-tree-option > .shl-tree-option-container > .shl-tree-option-parent').click();
    //Finish 
    personElements.personAddQualificationFinish().click({force : true});
    //delete
    // personElements.personAddQualificationDelete().click();
    // cy.get('.confirmation__actions > .filled').click();
    
    // Certificates #1
    //Add new btn
    personElements.personAddCertificateAddNew().click();
    //Certificate name
    personElements.personAddCertificateName().click();
    cy.get(':nth-child(1) > .shl-select-option > .shl-select-option-container > .shl-select-option-text > .shl-select-option-text-primary > .ng-star-inserted').click();
    //Start date
      cy.get('.shl-checkbox-label').click()
    cy.get('shl-date-picker.ng-pristine > .shl-date-picker > .ng-valid > .input > .input-content-container > .input-flex-box').click();
    cy.get('.today > span').click()
     cy.get('body').click(0, 0);
    // cy.get('.shl-date-picker-calendar-backdrop').click();
    //Save and exit
    personElements.personAddCertificateSave().click()
    //  Certificates #2
    //Plus btn
    // personElements.personAddCertificatePlusButton().click();
    //Certificate name
    // personElements.personAddCertificateName().click();
    // cy.get(':nth-child(4) > .shl-select-option > .shl-select-option-container > .shl-select-option-text > .shl-select-option-text-primary > .ng-star-inserted').click();
    //start date
    // cy.get('[formcontrolname="start_date"] > .shl-date-picker > .ng-valid > .input > .input-content-container > .input-flex-box > .action > .shl-select-calendar-btn > .shl-i').click();
    // cy.get('.shl-calendar-dates > :nth-child(1) > :nth-child(2) > span').click()
    // cy.get('.shl-date-picker-calendar-backdrop').click();
    //checkbox
    // personElements.personAddCertificateCheckBox().click();
    //save and exit
    // personElements.personAddCertificateSave().click();
    //delete
    // personElements.personAddCertificateDelete().click();
    // cy.get('.confirmation__actions > .filled').click();
    
    //  Driving license
    //add new btn
    // personElements.personAddDrivingLicenseAddNew().click();
        cy.get('.qualification__section--driver > .qualification__button').click();
    //Type of driving license
    personElements.personAddDrivingLicenseType().click();
    cy.get(':nth-child(4) > .shl-select-option > .shl-select-option-container > .shl-select-option-text > .shl-select-option-text-primary > .ng-star-inserted').click();
    //start date
    cy.get('.shl-checkbox-label').click()
        cy.get('.shl-date-picker > .ng-valid > .input > .input-content-container > .input-flex-box').click()
    cy.get('.today > span').click()
        cy.get('body').click(0, 0);
    //cy.get('.screenshot-height-container').click()
    
    //checkbox
    // personElements.personAddDrivingLicenseCheckBox().click({force: true});
    //update
    personElements.personAddDrivingLicenseUpdate().click({force: true});
    
    // plus btn
    // personElements.personAddDrivingLicensePlusButton().click();
    //Type of driving license
    // personElements.personAddDrivingLicenseType().click();
    // cy.get(':nth-child(3) > .shl-select-option > .shl-select-option-container > .shl-select-option-text > .shl-select-option-text-primary > .ng-star-inserted').click();
    //start date
    // cy.get('[formcontrolname="startDate"] > .shl-date-picker > .ng-valid > .input > .input-content-container > .input-flex-box > .action').click();
    // cy.get('.today > span').click()
    // cy.get('.ng-dirty > .shl-date-picker > shl-input.ng-pristine > .input > .input-content-container > .input-flex-box > .action').realClick();
    //end date
    // cy.wait(2000)
    // cy.get('shl-date-picker.ng-untouched > .shl-date-picker > .ng-valid > .input > .input-content-container > .input-flex-box > .action > .shl-select-calendar-btn > .shl-i').click({force : true});
    // cy.get('.today > span').click({force : true})
    //update
    personElements.personAddDrivingLicenseUpdate().click({force: true});
     cy.wait(2000)
    cy.get('.shl-button-dir').click();
    cy.wait(4000)
    cy.get('.shl-form-field-flex').click().type('{selectall}{backspace}');
    cy.get('.shl-form-field-flex').type('Test Person Cy');
    cy.wait(4000)
    cy.get('.person-card__header-title-txt').first().invoke('removeAttr', 'target').click({force : true});
    cy.wait(10000)
    cy.get('.basic-info__rightside-top > :nth-child(2)').click();
    cy.get('.filled').click();
    //delete
    // personElements.personAddDrivingLicenseDelete().click();
    // cy.get('.confirmation__actions > .filled').click();
    
    // personElements.personAddDrivingLicenseDelete().click();
    // cy.get('.confirmation__actions > .filled').click();
    //save and exit
    cy.wait(1000)



        // cy.visit('https://sam.dev.syniotec.com/new-hr-planner');

        // cy.wait(20000)

        // cy.get('.shl-form-field-infix > .ng-untouched').type('Test Person Cy')

        // cy.wait(5000)
        
        // cy.get('.person-card__header-title-txt').invoke('removeAttr', 'target').click({force : true});
        // cy.wait(7000)

        // cy.get('.action [alt="delete"]').click().should('be.visible');
        // cy.get('.filled').click();

        // cy.wait(5000)

    })
});


// personElements.personTitle().should('be.visible').each(($el) => {
//     const personTitle = $el.text().trim();
    
//     if(personTitle === 'Test Person Cy'){
//         cy.wrap($el).invoke('removeAttr', 'target').click({force : true});
//         cy.get('.action [alt="delete"]').click().should('be.visible');
//         cy.get('.filled').click();
//         return; // Exit the loop after the desired title is found and clicked
//     }
// });