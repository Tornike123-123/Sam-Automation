export class AllURL {
// Accept cookies
    acceptCookiesBtn = () => cy.get(':nth-child(2) > .ch2-btn')
    samProdUrl = () =>  cy.visit (`https://login.sam.syniotec.com/login?destination=https:%2F%2Fsam.syniotec.com%2Fcalendar`)
//Project planner page
projectPlannerPage  = () =>    cy.visit('https://sam.syniotec.com/calendar')

//Project list page
projectListPage  = () =>    cy.visit('https://sam.syniotec.com/project/list')

//Inactive Project  page
inactiveProjectListPage  = () =>    cy.visit('https://sam.syniotec.com/project/list?inactive=true')


//Virtual Project  page
virtualProjectListPage  = () =>    cy.visit('https://sam.syniotec.com/virtual-project/list')

//resource requestspage
resourceRequestListPage  = () =>    cy.visit('https://sam.syniotec.com/request')


//Crew planner  page
crewPlannerPage  = () =>    cy.visit('https://sam.syniotec.com/new-crew-planner')

//Crew List  page
crewListPage  = () =>    cy.visit('https://sam.syniotec.com/kolone/list')


//group List  page
groupListPage  = () =>    cy.visit('https://sam.syniotec.com/groupe/list')


//equipment planner  page
eqPlannerPage  = () =>    cy.visit('https://sam.syniotec.com/planner/calendar')


//equipment database  page
eqDatabaseListPage  = () =>    cy.visit('https://sam.syniotec.com/equipment-database')


//equipment database  page
warehouseListPage  = () =>    cy.visit('https://sam.syniotec.com/warehouses/list')

//equipment database  page
hrPlannerPage  = () =>    cy.visit('https://sam.syniotec.com/new-hr-planner')

}