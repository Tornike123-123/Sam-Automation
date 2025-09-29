// import { CrewsElements } from '../../../../fixtures/Cases/Elements/CrewElements/CrewsElements.js';
// describe('Creates, edits and deletes the crew ', () => {
//     beforeEach(() => {
//         const email = "reg.driver@syniotec.com";
//         const password = "Qwerty1$";
//         cy.session('login', () => {
//             cy.SAMlogin(email, password);
//         });
//     });
//     it('', () => {
        
//         const addCrewElements = new CrewsElements();
        
//         cy.visit('https://sam.dev.syniotec.com/kolone/list');
        
//         //addCrewElements.CrewsPage(); 
        
//         cy.wait(5000);
//         cy.CreateCrew();
//         cy.wait(2000);
        
//         //addCrewElements.CrewsPage(); 
//         cy.visit('https://sam.dev.syniotec.com/kolone/list');
        
//         cy.wait(5000);
        
//         cy.AddCompanyCar(); 
//         cy.EditCompanyCar();
//         cy.AddCrewEquipment();
//         cy.AddCrewPerson();
//         cy.CrewOverviewFinish();

//         cy.wait(2000);

//         addCrewElements.CrewsPage(); 
//         cy.wait(5000);
//         cy.get('.shl-form-field-flex').click().realType('Test Name'); 
//         cy.wait(5000);

//         cy.DeleteCrew();

//     });
// });