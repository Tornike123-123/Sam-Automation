import { PersonElements } from '../../../../fixtures/Cases/Elements/PersonElements/PersonElements.js';

describe('Adds Person with required fields only, then deletes it.', () => {
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
        
        cy.visit('https://sam.dev.syniotec.com/person');

        const personElements = new PersonElements();
        cy.wait(10000)

        personElements.personAddFirstName().type("Test Person");
        personElements.personAddLastName().type("Cy");
        //Code
        
        //continue
        personElements.personAddContinueGeneral().click();

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
        //ContinueBtn
        personElements.personAddContinueCompany().click();

        cy.wait(1000)
        personElements.personAddSaveAndExit().click();
        cy.window().then((win) => {
            cy.stub(win, 'open').callsFake((url) => {
            win.location.href = url;
            });
        });
        cy.wait(2000)
        
        cy.visit('https://sam.dev.syniotec.com/new-hr-planner');

        cy.wait(3000)
        cy.get('.shl-form-field-infix > .ng-untouched').click().type('{selectall}{backspace}');  

        cy.get('.shl-form-field-infix > .ng-untouched').type('Test Person Cy')

        cy.wait(5000)
        
       cy.get('.person-card__header-title-txt').first().invoke('removeAttr', 'target').click({force : true});
        
        cy.wait(10000)

        cy.get('.action [alt="delete"]').click().should('be.visible');
        cy.get('.filled').click();

        cy.wait(5000)

        
        // personElements.personTitle().should('be.visible').each(($el) => {
        //     const personTitle = $el.text().trim();
            
        //     if(personTitle === 'Test Person Cy'){
        //         cy.wrap($el).invoke('removeAttr', 'target').click({force : true});
        //         cy.get('.action [alt="delete"]').click().should('be.visible');
        //         cy.get('.filled').click();
        //         return; // Exit the loop after the desired title is found and clicked
        //     }
        // });
    }) 
});

