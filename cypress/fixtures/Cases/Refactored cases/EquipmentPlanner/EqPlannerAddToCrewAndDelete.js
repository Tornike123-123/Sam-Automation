import { CrewsElements, EquipmentPlannerElements } from '../../Elements/EquipmentElements/EquipmentPlannerElements.js';

describe('Add Equipment To Crew', () => {
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

        const addEquipmentToCrew = new EquipmentPlannerElements();
        cy.visit('https://sam.dev.syniotec.com/planner/calendar');
        cy.wait(7000);
        addEquipmentToCrew.EqPlannerSearchByNameFilter().click().type('{selectAll}{backSpace}');
        addEquipmentToCrew.EqPlannerSearchByNameFilter().type('DON\'T USE N2');
        cy.wait(3000);
        addEquipmentToCrew.EqPlannerSearchByNameFilter().click().type('{selectAll}{backSpace}');
        addEquipmentToCrew.EqPlannerSearchByNameFilter().type('DON\'T USE N2');
        cy.wait(3000);
        addEquipmentToCrew.EqPlannerCrewAddPlusBtn().click();

        cy.wait(1000);

        addEquipmentToCrew.EqPlannerCrewAddSearch().type('MyCrew');
        cy.wait(2000);
        //first option
        cy.get('.shl-select-option').click();
        cy.wait(2000);
        addEquipmentToCrew.EqPlannerAddToCrewBtn().click();
        cy.wait(3000);


        //Equipment in a crew can not be booked

        cy.get('.resource__top-actions__icon--group').should('be.visible');
        
        addEquipmentToCrew.EqBookingButton().click();
        addEquipmentToCrew.EqBookingProject().type('Proj');
        addEquipmentToCrew.EqBookingProjectChild().click();
        
        addEquipmentToCrew.EqBookingEquipment().type('DON\'T USE N2');
        cy.wait(2000);
        cy.get('.shl-select-options-empty').should('be.visible');
        cy.get('.cdk-overlay-backdrop').invoke('css', 'pointer-events', 'none');  
        addEquipmentToCrew.EqBookingClose().click();

        
        //Remove from crew

        addEquipmentToCrew.EqPlannerCrewAddMinusBtn().click();

        addEquipmentToCrew.EqPlannerAddToCrewBtn().click();
        cy.wait(2000);
        
    });
});
