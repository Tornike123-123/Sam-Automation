import { DatabaseElements } from '../../Elements/EquipmentElements/DatabaseElements.js';

describe('Adds and Deletes new Group', () => {
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
    
    it('should add project', function () {
        const addEquipment = new DatabaseElements()

         cy.AddEquipment();
                     cy.wait(10000);
            cy.DeleteEquipment();
            cy.wait(4000);

        });
});
  

