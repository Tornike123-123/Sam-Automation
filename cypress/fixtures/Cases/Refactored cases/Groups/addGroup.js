// import { CrewGroupElements } from '../../../../fixtures/Cases/Elements/CrewElements/Crew-GroupElements.js';

// describe('Adds new Group', () => {
//     beforeEach(() => {
//         const email = "reg.driver@syniotec.com";
//         const password = "Qwerty1$";
//         cy.session('login', () => {
//             cy.SAMlogin(email, password);
//         });
//     });
//     it('', () => {

//         const crewElements = new CrewGroupElements();

//         cy.visit('https://sam.dev.syniotec.com/groupe/list');
//         //cy.wait(10000);
//         crewElements.groupsAddButton().click().should('be.visible');
//         //name
//         crewElements.groupsAddName().type('Test Group');
//         //area
//         crewElements.groupsAddArea().click();      
//         cy.contains('Direction 1').click();
//         //Group Type


//         crewElements.groupsAddType().click()
//         cy.get(':nth-child(1) > .shl-select-options').click();
//         cy.wait(3000);
//         // groups add continue button
//         cy.get('[data-cy="add-groupe-continue"]').click();
//         // Groups add Categories
//         cy.get(':nth-child(2) > .card > .card__actions > sam-card-wrapper-actions.ng-star-inserted > .action > .action__initial > .action__initial-btn').click();
//         cy.get('.action__add').click()
//         cy.get('.next-page > .shl-button-dir').click();
//         // Groups add Qualification
//         cy.get(':nth-child(4) > .card > .card__actions > sam-card-wrapper-actions.ng-star-inserted > .action > .action__initial > .action__initial-btn > .fas').click();
//         cy.get('.action__add').click();
//         cy.get('.next-page > .shl-button-dir').click()
//         //Groups add overview
//         //Groups add save
//         crewElements.groupsAddSave().click();
//         cy.wait(3000);

//     })
// })