export class AllURL {
// Accept cookies
    acceptCookiesBtn = () => cy.get('.ch2-dialog-actions > .ch2-allow-all-btn')
    samProdUrl = () =>  cy.visit (`https://login.sam.dev.syniotec.com/login?destination=https:%2F%2Fsam.dev.syniotec.com%2Fproject%2Flist`)
//Project planner page
projectPlannerPage  = () =>    cy.visit('https://sam.dev.syniotec.com/calendar')

//Project list page
projectListPage  = () =>    cy.visit('https://sam.dev.syniotec.com/project/list')

//Inactive Project  page
inactiveProjectListPage  = () =>    cy.visit('https://sam.dev.syniotec.com/project/list?inactive=true')


//Virtual Project  page
virtualProjectListPage  = () =>    cy.visit('https://sam.dev.syniotec.com/virtual-project/list')

//resource requestspage
resourceRequestListPage  = () =>    cy.visit('https://sam.dev.syniotec.com/request')


//Crew planner  page
crewPlannerPage  = () =>    cy.visit('https://sam.dev.syniotec.com/new-crew-planner')

//Crew List  page
crewListPage  = () =>    cy.visit('https://sam.dev.syniotec.com/kolone/list')


//group List  page
groupListPage  = () =>    cy.visit('https://sam.dev.syniotec.com/groupe/list')


//equipment planner  page
eqPlannerPage  = () =>    cy.visit('https://sam.dev.syniotec.com/planner/calendar')


//equipment database  page
eqDatabaseListPage  = () =>    cy.visit('https://sam.dev.syniotec.com/equipment-database')


//equipment database  page
warehouseListPage  = () =>    cy.visit('https://sam.dev.syniotec.com/warehouses/list')

//equipment database  page
hrPlannerPage  = () =>    cy.visit('https://sam.dev.syniotec.com/new-hr-planner')

}