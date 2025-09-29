// import { PersonElements } from '../../../../fixtures/Cases/Elements/PersonElements/PersonElements.js';

// describe('Crew planner filters', () => {
//     beforeEach(() => {
//         const email = "reg.driver@syniotec.com";
//         const password = "Qwerty1$";
//         cy.session('login', () => {
//             cy.SAMlogin(email, password);
//         });
//     });
//     it('should test the filters', () => {

//         cy.window().then((win) => {
//             cy.stub(win, 'open').callsFake((url) => {
//               win.location.href = url;
//             });
//           });
          
//         cy.visit('https://sam.dev.syniotec.com/new-hr-planner');

//         const personElements = new PersonElements();
//         cy.wait(20000)

//         cy.get('.shl-form-field-infix > .ng-untouched').type('Test Person Cy')
//         cy.wait(1000)

//         personElements.personTitle().should('be.visible').each(($el) => {
//         const personTitle = $el.text().trim();
        
//         if(personTitle === 'Test Person Cy'){
//             cy.wrap($el).invoke('removeAttr', 'target').click({force : true});
       
//             cy.get('.action [alt="delete"]').click().should('be.visible');
//             cy.get('.filled').click()
//         }
//         })
//     })
// });

