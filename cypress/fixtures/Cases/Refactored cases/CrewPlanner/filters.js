import { CrewPlannerElements } from '../../../../fixtures/Cases/Elements/CrewElements/CrewPlannerElements.js';

describe('Crew planner filters', () => {
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
        
        const crewElements = new CrewPlannerElements();
        cy.visit('https://sam.dev.syniotec.com/new-crew-planner');
        //cy.wait(5000);
        cy.CrewPlannerFilters();
    })
});
