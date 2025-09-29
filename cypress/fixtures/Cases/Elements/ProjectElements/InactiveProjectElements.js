export class HrPlannerElements {


//Project detailed, Inactive button 
inactiveBtn  = () =>    cy.get('[data-cy="project-make-active-inactive-button"]') 
//Project detailed, Active button 
activeBtn  = () =>    cy.get('[data-cy="project-make-active-inactive-button"]') 
 // Inactive project list page
 inactiveProjectListPage = () => cy.visit(`https://sam.dev.syniotec.com/project/list?inactive=true`)
// Inactive project yes button
inactiveProjectYesBtn = () => cy.get('.confirmation__actions > .filled')
// Edit Inactive  button
editInactiveBtn = () => cy.get('[data-cy="project-edit-button"]')






}