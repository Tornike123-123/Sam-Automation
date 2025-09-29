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
        
//         //continue
//         personElements.personAddContinueGeneral().click();

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
//         //ContinueBtn
//         personElements.personAddContinueCompany().click();
//         //Save Button
//         cy.wait(1000)
//         personElements.personAddSaveAndExit().click();
//     }) 
// });

