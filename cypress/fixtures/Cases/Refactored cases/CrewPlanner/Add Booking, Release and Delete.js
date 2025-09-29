import { CrewPlannerElements } from '../../Elements/CrewElements/CrewPlannerElements.js';

describe('Creates booking in "Crew Planner"', () => {
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
       
        cy.visit('https://sam.dev.syniotec.com/new-crew-planner');
        cy.viewport(1920, 1080);
        const crewElements = new CrewPlannerElements();

        crewElements.CrewPlannerPage();
        //cy.wait(1000);
        
        //cy.get('.mbsc-timeline-grid > :nth-child(2)').click();   ar washalo es
        cy.get('[data-cy="crew-planner-booking-button"]').click();
        //project
        cy.get('.cdk-overlay-backdrop').invoke('css', 'pointer-events', 'none');  
        cy.get('[data-cy="crew-project-dropdown"] > .shl-select > .shl-select-inputs-container > .ng-valid > .input > .input-content-container > .input-flex-box > .field > .ng-untouched').click().realType('ProjTest');

        cy.get(':nth-child(1) > .shl-select-option').click();
        //crew
        cy.get('[data-cy="crew-dropdown"] > .shl-select > .shl-select-inputs-container > .ng-valid > .input > .input-content-container > .input-flex-box > .field > .ng-untouched').click().realType('MyCrew');
        cy.get('.shl-select-option').contains('MyCrew').click();
        //time
        cy.get('[data-cy="crew-start-time"] > .shl-time-picker > shl-input.ng-untouched > .input > .input-content-container > .input-flex-box > .action > .shl-select-time-btn > .shl-i').click();
        cy.get('.shl-time-selector-micro-btn').click();


        cy.get('.shl-button-content-container-value').click();
        cy.get('[data-cy="save-booking"]').click({force: true})
        cy.wait(4000);

        crewElements.crewPlannerSearchByTitleFilter().click().type('{selectAll}{backspace}');
        crewElements.crewPlannerSearchByTitleFilter().type('MyCrew')

        cy.wait(5000);

        //RELEASE
        cy.get('.crew__content').rightclick();
        cy.get('.context-menu > :nth-child(1)').click();
        //Release btn
        cy.get('[data-cy="crew-release"]').click()

        //Time
         cy.get('[data-cy="crew-start-time"]').click();
        cy.wait(2000);
        cy.get(':nth-child(1) > .shl-time-selector-scroll > .bottom > .shl-i').click();
        cy.wait(2000);
      cy.get('body').click('topRight');
        cy.get('[data-cy="crew-end-time"] > .shl-time-picker > shl-input.ng-pristine > .input > .input-content-container > .input-flex-box').click();
        cy.wait(2000);
        cy.get('[data-cy="crew-end-time"]').click();
        //Now button
        cy.get('.shl-time-selector-micro-btn').click();
         cy.get('body').click('topRight');

       cy.wait(2000);

        cy.get('[data-cy="crew-reasons-dropdown"]').click()
        cy.get(':nth-child(1) > .shl-select-option').click()

        cy.get('[data-cy="crew-reasons-dropdown"]').click()
        cy.get(':nth-child(2) > .shl-select-option').click()

        cy.get('[data-cy="crew-reasons-dropdown"]').click()
        cy.get(':nth-child(5) > .shl-select-option').click()
        //Containter
        cy.get('.textarea-content-container > .ng-untouched').type('This is a release for crew');
        //Save btn
        cy.get('[data-cy="save-booking"]').click();
               cy.wait(1500);
        cy.get('[data-cy="crew-planner-today"]').click();
        //DELETE       
             cy.get('.crew__content').first().rightclick(); 
              cy.get('.context-menu > :nth-child(1)').click();
               cy.get('[data-cy="booking-modal__delete"]').click();
        //confirmation
        cy.get('.confirmation__actions > .filled').click();
        cy.wait(3000);

        cy.get('.crew__content').rightclick();
        cy.get('.context-menu > :nth-child(1)').click();
        //delete btn
        cy.get('[data-cy="booking-modal__delete"]').click();
        //confirmation
        cy.get('.confirmation__actions > .filled').click();
        cy.wait(3000);
    })
});