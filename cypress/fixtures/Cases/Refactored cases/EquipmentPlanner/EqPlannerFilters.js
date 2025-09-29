import { EquipmentPlannerElements } from '../../Elements/EquipmentElements/EquipmentPlannerElements.js';

describe('Testing Equipment planner filters', () => {
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
        const eqPlannerFilters = new EquipmentPlannerElements();
       
        cy.visit('https://sam.dev.syniotec.com/planner/calendar');
         cy.viewport(1920, 1080);
        cy.wait(10000);
        eqPlannerFilters.EqPlannerSearchByNameFilter().click().type('{selectAll}{backSpace}');
        eqPlannerFilters.EqPlannerSearchByNameFilter().type('DON\'T USE N');
        cy.wait(3000);
        eqPlannerFilters.EqPlannerSearchByNameFilter().click().type('{selectAll}{backSpace}');
        eqPlannerFilters.EqPlannerSearchByNameFilter().type('DON\'T USE N');

        cy.wait(3000);
        eqPlannerFilters.EqPlannerBranchFilter().click();
        cy.get('.shl-select-options-container > :nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(1)').click();
        //close dropdown

        eqPlannerFilters.EqPlannerCategoryFilter().click()
        cy.get('.shl-select-options-container > :nth-child(1) > .shl-tree-option > .shl-tree-option-container > .shl-tree-option-parent').click()
        //close dropdown 
        
    });
});