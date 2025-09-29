import { CrewsElements, EquipmentPlannerElements } from '../../Elements/EquipmentElements/EquipmentPlannerElements.js';

describe('Adds Equipment Booking', () => {
    beforeEach(() => {
        const email = "reg.driver@syniotec.com";
        const password = "Qwerty1$";
        cy.session('login', () => {
            cy.SAMlogin(email, password);
        });
    });
    it('', () => {
        const addRequestBooking = new EquipmentPlannerElements();
        cy.visit('https://sam.dev.syniotec.com/planner/calendar');
        cy.wait(10000);
                cy.viewport(1920, 1080); // Set a larger screen size //
        cy.wait(10000)
        addRequestBooking.EqPlannerSearchByNameFilter().click().type('{selectAll}{backSpace}');
        addRequestBooking.EqPlannerSearchByNameFilter().type('მაზა 1');
        cy.wait(3000)
        addRequestBooking.EqPlannerSearchByNameFilter().click().type('{selectAll}{backSpace}');
        addRequestBooking.EqPlannerSearchByNameFilter().type('მაზა 1');
        cy.wait(3000)
        // cy.get('[data-cy="input-clear"]').first().click();
        // cy.get('[data-cy="input-clear"]').click()
        cy.get('[data-cy="eq-planner-requests"]').click()
        cy.get('.shl-button-dir').click()
        cy.wait(2000)
        cy.get('#cdk-menu-0 > [tabindex="0"]').click()
        cy.wait(2000)
        cy.get('.cdk-virtual-scroll-content-wrapper > :nth-child(1) > .request').click().realMouseDown();
        cy.get('.mbsc-flex-1-0 > :nth-child(15) > .mbsc-flex > .mbsc-flex-1-1').click() // Simulates dropping the element

        addRequestBooking.EqBookingClose().click()
        cy.wait(1000)
        cy.get('.filled').click().should('be.visible')
        cy.get('.main-event').rightclick({ multiple: true, Force : true });
        cy.get('[data-cy="context-menu-edit"]').click();

        addRequestBooking.EqBookingDelete().click()

        cy.get('.confirmation__actions > .filled').click()
        cy.wait(2000)
        
        
          });
      });

      