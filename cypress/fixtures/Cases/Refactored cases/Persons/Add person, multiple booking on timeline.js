import { PersonElements } from '../../Elements/PersonElements/PersonElements.js';

describe('Add booking in "Hr Planner"', () => {
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
    it('should add project', function () {

        
        const personElements = new PersonElements();
        cy.viewport(1920, 1080); // Set a larger screen size //
        cy.visit('https://sam.dev.syniotec.com/new-hr-planner');
          cy.wait(7000)
        //search 
           cy.get('.shl-form-field-infix > .ng-untouched').click().type('{selectall}{backspace}');   

        cy.get('.shl-form-field-infix > .ng-untouched').type('Test Person Cy') 
        cy.wait(3000)
        
        cy.get('.shl-checkbox-label').click({multiple: true});
       cy.wait(3000);
        cy.get(':nth-child(2) > :nth-child(40) > .mbsc-flex > .mbsc-flex-1-1').click();
        //booking
        //cy.get('[data-cy="hr-planner-booking"]').click();
        //ProjectDropdown
        cy.get('[data-cy="booking-projects"]').click();
        //first project on the dropdown
        cy.get(':nth-child(1) > .shl-select-option').click();
        //Person
        cy.get('[data-cy="bookig-personel"]').type('Test Person Cy');   
        cy.wait(4000)
        //first person on the dropdown
        //cy.get(':nth-child(1) > .shl-select-option').click();
        //cy.get(':nth-child(2) > .shl-select-option').click();
        
        cy.get('.cdk-overlay-backdrop').invoke('css', 'pointer-events', 'none'); 
        cy.get('[data-cy="bookig-personel"] > .shl-select > .shl-select-inputs-container > .ng-valid > .input > .input-content-container > .input-flex-box > .action > .shl-select-close').click({force : true});

        //Container
        cy.get('.textarea-content-container > .ng-untouched').type('This is a container for a booking')
        //Submit
        cy.get('[data-cy="submit-btn"]').click();

          
         
        //Today button
        //cy.get('[data-cy="hr-planner-today"] > .mbsc-calendar-button').click()
        
             cy.wait(5000)
        //FIRST BOOKING /////
        cy.get('.shl-form-field-infix > .ng-valid').click().type('{selectall}{backspace}');   
        cy.get('.shl-form-field-infix > .ng-valid').type('Test Person Cy') 

        cy.wait(5000)
        //cy.get('[data-cy="hr-planner-today"] > .mbsc-calendar-button').click()

        cy.get('.timeline__content').rightclick().should('have.length', 1);
                //booking edit
        cy.get('[data-cy="context-menu-edit"]').click()
        //booking Delete button
        cy.get('[data-cy="delete-booking"]').click()
        cy.get('.confirmation__actions > .filled').click()
        cy.wait(5000)
        //SECOND BOOKING
                
        cy.get('.shl-form-field-infix > .ng-valid').click().type('{selectall}{backspace}');   
        cy.get('.shl-form-field-infix > .ng-valid').type('Test Person Cy') 

        cy.wait(5000)
        //cy.get('[data-cy="hr-planner-today"] > .mbsc-calendar-button').click()

        cy.get('.timeline__content').rightclick().should('have.length', 1);

        //booking edit
        cy.get('[data-cy="context-menu-edit"]').click()
        //booking Delete button
        cy.get('[data-cy="delete-booking"]').click()
        cy.get('.confirmation__actions > .filled').click()

        cy.wait(2000)
        //first person


        // cy.wait(5000)
         //personElements.personTitle().should('be.visible').each(($el) => {
        //     const personTitle = $el.text().trim();
            
        //     if(personTitle === 'Test Person Cy'){
        //         cy.wrap($el).invoke('removeAttr', 'target').click({force : true});
           
        //         cy.get('.action [alt="delete"]').click().should('be.visible');
        //         cy.get('.filled').click()
        //     }
        //     })
    }) 
});

