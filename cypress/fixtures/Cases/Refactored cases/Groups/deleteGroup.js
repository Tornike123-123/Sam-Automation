// import { CrewGroupElements } from '../../../../fixtures/Cases/Elements/CrewElements/Crew-GroupElements.js';
// describe('Deletes Group', () => {
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
//         cy.wait(2000);
//         crewElements.groupsTextName().each(($el) => {
//             const groupName = $el.text().trim();
        
//         if(groupName === 'Test Group'){
//             cy.wrap($el).click();
//             cy.get('[data-cy="delete-groupe"]').click();
//             cy.wait(1000);
//             cy.get('.confirmation__actions > .filled').click({force : true});
//         } 
//         })
//         cy.wait(3000);

//     })
// })