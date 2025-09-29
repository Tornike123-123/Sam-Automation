import { CrewGroupElements } from '../../../../fixtures/Cases/Elements/CrewElements/Crew-GroupElements.js';

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
    it('', () => {
        const crewElements = new CrewGroupElements();

        cy.visit('https://sam.dev.syniotec.com/groupe/list');
        //cy.wait(10000);
        //crewElements.GroupsPage().should('be.visible');
//groupsAddButton
        crewElements.groupsAddButton().click();
        //name
                cy.wait(2000);
        crewElements.groupsAddName().type('Test Group');
        //area
        crewElements.groupsAddArea().click();      
        cy.get(':nth-child(2) > .shl-select-option').click();
        //Group Type


        crewElements.groupsAddType().click()
        cy.get(':nth-child(1) > .shl-select-options').click();

        // groups add continue button
        cy.get('[data-cy="add-groupe-continue"]').click();
        // Groups add Categories
        cy.get(':nth-child(2) > .card > .card__actions > sam-card-wrapper-actions.ng-star-inserted > .action > .action__initial > .action__initial-btn').click();
        cy.get('.action__add').click()
        cy.get('.next-page > .shl-button-dir').click();
        // Groups add Qualification
        cy.get(':nth-child(4) > .card > .card__actions > sam-card-wrapper-actions.ng-star-inserted > .action > .action__initial > .action__initial-btn > .fas').click();
        cy.get('.action__add').click();
        cy.get('.next-page > .shl-button-dir').click()
        //Groups add overview
        //Groups add save
        crewElements.groupsAddSave().click();
        //delete
        
        //crewElements.GroupsPage().should('be.visible');
        cy.visit('https://sam.dev.syniotec.com/groupe/list');
        cy.wait(3000);
        crewElements.groupsTextName().each(($el) => {
            const groupName = $el.text().trim();
        
            if(groupName === 'Test Group'){
                cy.wrap($el).click();
                cy.get('[data-cy="delete-groupe"]').click();
                cy.wait(1000);
                cy.get('.confirmation__actions > .filled').click({force : true});
            } 
            
        })
        cy.wait(3000);
    })
})