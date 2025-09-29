import { MapElements } from '../../../../fixtures/Cases/Elements/MapElements/MapElements.js';

describe('Adds Person with required fields only, then deletes it.', () => {
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
    it('should test map filters', function () {

        const mapElements = new MapElements()
        cy.wait(10000);

        cy.visit(`https://sam.dev.syniotec.com/equipment/map`);
        mapElements.mapSearchFilter().click().type('{selectAll}{backspace}');
        mapElements.mapSearchFilter().type('Cy Equipment');
        cy.wait(2000);
        //Branch
        mapElements.mapBranchFilter().click();
        //Direction 1
        cy.contains(' Direction 1 ').click();
        //Category 
        mapElements.mapCategoryFilter().click();
        cy.get('.shl-select-options-container > :nth-child(1) > .shl-tree-option > .shl-tree-option-container > .shl-tree-option-parent').click({force: true});
        cy.wait(5000);
        //Filter popup
        mapElements.mapFilterPopup().click();
        mapElements.mapFilterPopupClearBtn().click();
        cy.wait(2000)


    });
});