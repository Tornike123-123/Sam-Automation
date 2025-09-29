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
        const dragAndDeleteSideBarRequest = new EquipmentPlannerElements();
        cy.visit('https://sam.dev.syniotec.com/planner/calendar');
        cy.wait(10000);
                dragAndDeleteSideBarRequest.EqPlannerSearchByNameFilter().click().type('{selectAll}{backspace}');
        dragAndDeleteSideBarRequest.EqPlannerSearchByNameFilter().type('14.03.2025 Eq N1');
        cy.wait(3000);
        dragAndDeleteSideBarRequest.EqPlannerSearchByNameFilter().click().type('{selectAll}{backspace}');
        dragAndDeleteSideBarRequest.EqPlannerSearchByNameFilter().type('14.03.2025 Eq N1');
        cy.wait(3000);
        dragAndDeleteSideBarRequest.EqPlannerInfoPopupIcon().click();
        cy.get('.equipment-info__add-relation-button').click();

        cy.get('.dialog__content-item > .ng-valid.ng-star-inserted > .shl-select > .shl-select-inputs-container > .ng-valid > .input > .input-content-container > .input-flex-box').click();
// dropdown magla
cy.get(':nth-child(1) > .shl-select-option').click();
cy.get('.filled').click(); //add connection btn
cy.get('[data-cy="equipment-info-close"]').click(); // close info popup
dragAndDeleteSideBarRequest.EqPlannerInfoPopupIcon().click();
cy.wait(8000);
cy.window().then((win) => {
    cy.stub(win, 'open').callsFake((url) => {
      win.location.href = url;
    });
  });
  
  cy.get('[data-cy="equipment-info-profile"]').click();
  dragAndDeleteSideBarRequest.EqPlannerDeletePersonBtn().click();
  dragAndDeleteSideBarRequest.EqPlannerDeleteConnectionBtn().click();
          });
      });