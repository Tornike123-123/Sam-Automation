import { MapElements } from '../../../../fixtures/Cases/Elements/MapElements/MapElements.js';

describe('Adds Person with required fields only, then deletes it.', () => {
    beforeEach(() => {
        const email = "reg.driver@syniotec.com";
        const password = "Qwerty1$";
        cy.session('login', () => {
            cy.SAMlogin(email, password);
        });
    });
    it('should test map filters', function () {

        const mapElements = new MapElements()

        cy.visit(`https://sam.dev.syniotec.com/equipment/map`);
        
        mapElements.mapFilterPopup().click();
        mapElements.mapFilterPopupClearBtn().click();
        cy.wait(1000);
        mapElements.mapLocationFilter().click().type('{selectAll}{backspace}');
        mapElements.mapLocationFilter().type('chumlaki');
        cy.wait(3000);
        cy.contains('Chumlaki').click();
        cy.wait(5000);

        mapElements.mapFilterPopupSubmitBtn().click();
        cy.wait(3000);
        cy.get('[style="z-index: 3; position: absolute; height: 100%; width: 100%; padding: 0px; border-width: 0px; margin: 0px; left: 0px; top: 0px; touch-action: pan-x pan-y;"]').invoke('css', 'pointer-events', 'none');

    });
});