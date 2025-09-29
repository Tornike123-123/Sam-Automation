import { CrewsElements } from '../../../../fixtures/Cases/Elements/CrewElements/CrewsElements.js';

describe('Crew filters', () => {
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
    it('should test the filters', () => {
        
        const crewElements = new CrewsElements();
        cy.visit('https://sam.dev.syniotec.com/kolone/list');
        //cy.wait(5000);
        //cy.CrewFilters();
        const TestCrew = "Test Crew";
        cy.get('.shl-form-field-infix > .ng-untouched').type(TestCrew);
        //branches
        cy.get('[data-cy="crew-page-branch"] > .shl-button-dir').click();
        cy.get(':nth-child(1) > sam-dynamic-select-control.ng-untouched > div.dynamic-select > :nth-child(1) > .custom-select-header > .ng-select-container > .ng-arrow-wrapper').click()
        //.get('.ng-option ng-option-selected ng-star-inserted ng-option-marked').click({force : true}).should('be.visible');
        //Type
        cy.get('[data-cy="crew-page-type"] > [style="width: 180px;"] > .ng-touched > div.dynamic-select > :nth-child(1) > .custom-select-header > .ng-select-container > .ng-arrow-wrapper').click()
        cy.get(':nth-child(2) > .ng-dropdown-panel-items').click()
        //responsible person
        cy.get('[data-cy="crew-page-responsible-person"] > [style="width: 180px;"] > .ng-touched > div.dynamic-select > :nth-child(1) > .custom-select-header > .ng-select-container > .ng-arrow-wrapper').click()
        //cy.get('.ng-dropdown-panel-items').click()
        cy.get('.ng-dropdown-panel-items').click()
        //clear filters

        cy.wait(10000)
        cy.get('[data-cy="clear-filters"]').click();
        cy.get('.confirmation__actions > .filled').click()
    })
});