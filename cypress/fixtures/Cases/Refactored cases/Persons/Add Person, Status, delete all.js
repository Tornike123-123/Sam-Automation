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
        //cy.AddPersonRequired();
        cy.wait(5000);
        cy.viewport(1920, 1080);
        cy.wait(5000);
        cy.visit('https://sam.dev.syniotec.com/new-hr-planner');
        
        cy.wait(10000)
        

        //booking
        cy.wait(2000)
        cy.get('.shl-form-field-infix > .ng-untouched').click().type('{selectall}{backspace}');   

        cy.get('[data-cy="hr-planner-booking"]').click();
        //Status radio btn
        cy.get('[data-cy="Status"]').click()
        //Reason
        cy.get('.personnel-booking__status > :nth-child(1)').click().should('be.visible');
        cy.get('.personnel-booking__status > :nth-child(2)').click().should('be.visible');
        cy.get('.personnel-booking__status > :nth-child(3)').click().should('be.visible');
        cy.get('.personnel-booking__status > :nth-child(4)').click().should('be.visible');
        //Person
                cy.get('[data-cy="bookig-personel"]').click()
        cy.get(`.shl-select-option-container`).contains('Test Person Cy').click();
       cy.get('body').click('topRight') 
        cy.get('[data-cy="booking-start-date"]').click()
        cy.get('.today > span').click()
        cy.get('[data-cy="booking-end-date"]').click()
        cy.get('.isSelected > span').click()
          
        cy.wait(3000)
        //first person on the dropdown
        // cy.get('.shl-select-option').click();
        

               // cy.get('[data-cy="bookig-personel"] > .shl-select > .shl-select-inputs-container > .ng-valid > .input > .input-content-container > .input-flex-box > .action > .shl-select-close').click({force : true});

        //Container
        cy.get('.textarea-content-container > .ng-untouched').type('This is a container for a status')
        //Submit
        cy.get('[data-cy="submit-btn"]').click();
        cy.wait(2000)
        //Search Name
               cy.get('.shl-form-field-flex').click().type('{selectall}{backspace}');   
        cy.get('.shl-form-field-flex').type('Test Person Cy')   
        cy.wait(2000)     
        //Today button
        cy.get('[data-cy="hr-planner-today"] > .mbsc-calendar-button').click()
        
        cy.wait(3000)
        
        cy.get('.timeline-status').rightclick()
        //booking edit
        cy.get('[data-cy="context-menu-edit"]').click()
        //booking Delete button
        cy.get('[data-cy="delete-booking"]').click()
        cy.get('.confirmation__actions > .filled').click()

        cy.wait(2000)
        
        // cy.get('.person-card__header-title-txt').invoke('removeAttr', 'target').click({force : true});
        // cy.wait(10000)

        // cy.get('.action [alt="delete"]').click().should('be.visible');
        // cy.get('.filled').click();

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

