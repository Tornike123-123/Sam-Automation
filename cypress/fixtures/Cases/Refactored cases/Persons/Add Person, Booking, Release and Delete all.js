import { PersonElements } from '../../Elements/PersonElements/PersonElements.js';

describe('Add booking in "Hr Planner"', () => {
    beforeEach(() => {
        const email = "reg.driver@syniotec.com";
        const password = "Qwerty1$";
        cy.session('login', () => {
            cy.SAMlogin(email, password);
        });
    });
    it('', () => {
        
        cy.AddPersonRequired();
        cy.wait(5000);
        cy.visit('https://sam.dev.syniotec.com/new-hr-planner');
        
        cy.wait(10000)
        
        const personElements = new PersonElements();
        //booking
        cy.get('[data-cy="hr-planner-booking"]').click();
        //ProjectDropdown
        cy.get('[data-cy="booking-projects"]').click();
        //first project on the dropdown
        cy.get(':nth-child(1) > .shl-select-option').click();
        //Person
        cy.get('[data-cy="bookig-personel"]').type('Test Person Cy');   
        cy.wait(3000)
        //first person on the dropdown
        cy.get('.shl-select-option').click();
        
        cy.get('.cdk-overlay-backdrop').invoke('css', 'pointer-events', 'none'); 
        cy.get('[data-cy="bookig-personel"] > .shl-select > .shl-select-inputs-container > .ng-valid > .input > .input-content-container > .input-flex-box > .action > .shl-select-close').click({force : true});

        //Container
        cy.get('.textarea-content-container > .ng-untouched').type('This is a container for a booking')
        //Submit
        cy.get('[data-cy="submit-btn"]').click();

        //Search Name
        cy.get('.shl-form-field-infix > .ng-untouched').type('Test Person Cy')   
        cy.wait(1000)     
        //Today button
        cy.get('[data-cy="hr-planner-today"] > .mbsc-calendar-button').click()
        
        cy.wait(7000)
        
        cy.get('.timeline__content').rightclick()
        //booking edit
        cy.get('[data-cy="context-menu-edit"]').click()
                
            //RELEASE BOOKING
        //Release radio btn
        cy.get('[data-cy="Release"] > .radio-container > label').click()
        
        //Release reason
        cy.get('.input-without-label').click();
        cy.get(':nth-child(1) > .shl-select-option').click()
        
        //Time
        cy.get('[data-cy="booking-start-time"]').click();
        //Now button
        cy.get('.shl-time-selector-micro-btn').click();
        cy.wait(1000);
        cy.get('.shl-button-content-container-value').click();
        
        //Container
        cy.get('.textarea-content-container > .ng-untouched').type('Container for Release Booking')
        //Save btn
        cy.get('[data-cy="submit-btn"]').click();
        cy.wait(2000);
        cy.get('.timeline__content').rightclick()
        //booking edit
        cy.get('[data-cy="context-menu-edit"]').click()
            //DELETE BOOKING
        //booking Delete button
        cy.get('[data-cy="delete-booking"]').click()
        cy.get('.confirmation__actions > .filled').click()

        cy.wait(2000)
        
        cy.get('.person-card__header-title-txt').invoke('removeAttr', 'target').click({force : true});
        cy.wait(5000)

        cy.get('.action [alt="delete"]').click().should('be.visible');
        cy.get('.filled').click();

        cy.wait(5000)

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

