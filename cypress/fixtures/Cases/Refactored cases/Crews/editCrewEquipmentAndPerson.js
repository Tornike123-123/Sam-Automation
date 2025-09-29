// import { CrewsElements } from '../../../../fixtures/Cases/Elements/CrewElements/CrewsElements.js';

// describe('Creates crew, edits Equipment and Person', () => {
//     beforeEach(() => {
//         const email = "reg.driver@syniotec.com";
//         const password = "Qwerty1$";
//         cy.session('login', () => {
//             cy.SAMlogin(email, password);
//         });
//     });
//     it('', () => {
        
//         cy.visit('https://sam.dev.syniotec.com/kolone/list');
        
//         const addCrewElements = new CrewsElements();
        
//         //cy.wait(10000);
//         addCrewElements.CrewsPage(); 
//         cy.CreateCrew();
//         cy.wait(2000);
//         addCrewElements.CrewsPage(); 
        
//         cy.get('.crew-item__text').each(($el) => {
//             const crewName = $el.text().trim();
            
//             if (crewName === 'Test Name') {
//                 // Perform actions when the crew with name "Test Name" is found
//                 cy.wrap($el).click().should('be.visible');
//                 cy.wait(3000);
//                 cy.get('[data-cy="equipment-overview-edit"] > .fas').click({force : true});
            
// //             cy.get(':nth-child(1) > .eq-card > .eq-card__action > .eq-card__add').click();
// //             cy.get(':nth-child(2) > .eq-card > .eq-card__action > .eq-card__add').click();

// //             addCrewElements.CrewAddPerson().click();
// //             cy.get(':nth-child(1) > sam-person-card > .pe-card > .pe-card__actions > .pe-card__actions-add').click().should('be.visible');
// //             cy.get(':nth-child(1) > sam-person-card > .pe-card > .pe-card__actions > .pe-card__actions-add').click().should('be.visible');
// // cy.wait(5000);
// //             addCrewElements.CrewAddOverview().click();
// //             cy.get(':nth-child(2) > .eq-card > .eq-card__info > .eq-card__content > .eq-card__row > .eq-card__remove > .fas').click().should('be.visible');
// //             cy.get('.confirmation__actions > .filled').click(); //?

// //             cy.get(':nth-child(2) > .pe-card > .pe-card__content > .pe-card__content-info > .pe-card__content-row > .pe-card__content-button').click().should('be.visible');

// //shl-button-dir filled sm confirmation-dialog__button confirmation-dialog__button--confirm

//             return false; // This will stop the iteration
//         }
//         });
//     cy.get(':nth-child(1) > .eq-card > .eq-card__action > .eq-card__add').click();
//     cy.wait(3000);
//      // Wait for 1 second before checking
// cy.get('body').then(($body) => {
//   if ($body.find('.confirmation-dialog__actions > .filled').length > 0) {
//     // Check if the button exists and is visible
//     const button = $body.find('.confirmation-dialog__actions > .filled');
//     if (button.is(':visible')) {
//       cy.wrap(button).click(); // Click the button if it is visible
//     } else {
//       cy.log('Button exists but is not visible.');
//     }
//   } else {
//     cy.log('Button does not exist, skipping click');
//   }
// });


//     cy.get(':nth-child(2) > .eq-card > .eq-card__action > .eq-card__add').click();
//     cy.wait(3000);
//     // Wait for 1 second before checking
// cy.get('body').then(($body) => {
//   if ($body.find('.confirmation-dialog__actions > .filled').length > 0) {
//     // Check if the button exists and is visible
//     const button = $body.find('.confirmation-dialog__actions > .filled');
//     if (button.is(':visible')) {
//       cy.wrap(button).click(); // Click the button if it is visible
//     } else {
//       cy.log('Button exists but is not visible.');
//     }
//   } else {
//     cy.log('Button does not exist, skipping click');
//   }
// });

//     addCrewElements.CrewAddPerson().click();
//     cy.wait(5000);
//     cy.get(':nth-child(1) > sam-person-card > .pe-card > .pe-card__actions > .pe-card__actions-add').click().should('be.visible');
//     cy.get(':nth-child(2) > sam-person-card > .pe-card > .pe-card__actions > .pe-card__actions-add').click().should('be.visible');
// cy.wait(5000);
//     addCrewElements.CrewAddOverview().click();
//     cy.wait(5000);

//     cy.get(':nth-child(1) > .eq-card > .eq-card__info > .eq-card__content > .eq-card__row > .eq-card__remove > .fas').click().should('be.visible');
//     cy.get('.confirmation__actions > .filled').realClick(); //?
//     cy.wait(2000);

//     cy.get(':nth-child(1) > .pe-card > .pe-card__content > .pe-card__content-info > .pe-card__content-row > .pe-card__content-button').click().should('be.visible');
//     cy.get('.confirmation__actions > .filled').realClick(); //?
//     cy.wait(2000);
//     cy.get('[data-cy="add-crew-finish"]').click();
//     });
// });