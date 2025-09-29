import { CrewsElements, EquipmentPlannerElements } from '../../Elements/EquipmentElements/EquipmentPlannerElements.js';

describe('Adds Equipment Booking', () => {
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
        const deleteSideBarRequest = new EquipmentPlannerElements();
       
        cy.visit('https://sam.dev.syniotec.com/planner/calendar');
      cy.viewport(1920, 1080); 
        cy.wait(10000);
         deleteSideBarRequest.eqSidebar().click(); 
        cy.wait(2000);
        deleteSideBarRequest.eqSidebar().click(); 
        cy.wait(2000);
        deleteSideBarRequest.eqSidebar().click(); 
        cy.wait(2000);
        cy.get(':nth-child(1) > .request > .request__row-wrapper > .right > .right__button').click();
        deleteSideBarRequest.eqSidebarDeleteYesBtn().click();
      
    

        cy.wait(2000);    
        
    });
});

