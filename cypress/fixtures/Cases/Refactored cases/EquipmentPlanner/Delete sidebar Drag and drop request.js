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
        const dragAndDeleteSideBarRequest = new EquipmentPlannerElements();
        cy.visit('https://sam.dev.syniotec.com/planner/calendar');
        cy.viewport(1920, 1080);
        cy.wait(10000);
        dragAndDeleteSideBarRequest.EqPlannerSearchByNameFilter().click().type('{selectAll}{backspace}');
        dragAndDeleteSideBarRequest.EqPlannerSearchByNameFilter().type('13.03.2025 EQ N1');
        cy.wait(3000);
        dragAndDeleteSideBarRequest.eqSidebar().click({force: true});
cy.wait(3000);
cy.get('.shl-button-dir').click({force: true}).click({force: true}).click({force: true});
cy.get('#cdk-menu-1 > [tabindex="0"]').should('be.visible').click({force: true});
cy.wait(3000);

        dragAndDeleteSideBarRequest.eqSidebarFirstRequest().click().realMouseDown();
        cy.get('.mbsc-flex-1-0 > :nth-child(20) > .mbsc-flex > .mbsc-flex-1-1').click() // Simulates dropping the element
        dragAndDeleteSideBarRequest.EqBookingClose().click()
        cy.get('.filled').click()
        dragAndDeleteSideBarRequest.eqPlannerGetBooking().rightclick({ multiple: true, Force : true });
        dragAndDeleteSideBarRequest.eqPlannerEditBtn().click();
        dragAndDeleteSideBarRequest.EqBookingDelete().click()
        dragAndDeleteSideBarRequest.eqPlannerDeleteYesBtn().click()
       
        

          });
      });