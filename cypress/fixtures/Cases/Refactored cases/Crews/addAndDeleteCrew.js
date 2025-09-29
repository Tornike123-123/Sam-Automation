import { CrewsElements } from '../../../../fixtures/Cases/Elements/CrewElements/CrewsElements.js';

describe('Adds and Deletes new Crew', () => {
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
        const addAndDeleteCrewElements = new CrewsElements();
        //cy.wait(2000);
        // Since the session is cached, this won't log in again unless the session is invalidated
        cy.visit('https://sam.dev.syniotec.com/kolone/list'); // Ensure you're navigating to the correct initial page if required
        //cy.get('.lang').click();

        cy.wait(10000);
        //addAndDeleteCrewElements.CrewsPage();
        cy.CreateCrew();
        cy.wait(2000);
        //addAndDeleteCrewElements.CrewsPage();
        cy.visit('https://sam.dev.syniotec.com/kolone/list'); // Ensure you're navigating to the correct initial page if required
        cy.wait(20000);
        cy.get('.shl-form-field-infix > .ng-untouched').click().realType('Test Name'); 
        cy.wait(5000);

        cy.DeleteCrew();
    });
});
