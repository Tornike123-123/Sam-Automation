import { CrewsElements, EquipmentPlannerElements } from '../../Elements/EquipmentElements/EquipmentPlannerElements.js';

describe('Generate equipment report', () => {
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
        const generateReport = new EquipmentPlannerElements();
       
        cy.visit('https://sam.dev.syniotec.com/planner/calendar');

        cy.wait(10000);

        generateReport.EqReportButton().click();
        generateReport.EqWorkingHoursReport().click();
        generateReport.EqReportCalendar().click(); 
        cy.get('.shl-calendar-header-txt > :nth-child(1)').click();
        cy.get('.shl-month-picker-container > .shl-calendar-header-switch > .shl-calendar-header-txt').click();
        cy.get('shl-month-calendar > shl-year-calendar > .shl-year-picker > .shl-year-picker-container > .shl-calendar-header-switch > :nth-child(1) > .shl-calendar-btn > .shl-i').click();
        cy.get('shl-month-calendar > shl-year-calendar > .shl-year-picker > .shl-year-picker-container > .shl-calendar-year-picker-years > :nth-child(6)').click();
        cy.get('.shl-calendar-month-picker-months > :nth-child(8)').click();
        cy.get('.shl-calendar-dates > :nth-child(1) > :nth-child(5) > span').click();
        cy.get('.shl-calendar-dates > :nth-child(5) > :nth-child(6) > span').click();

        generateReport.EqReportSaveBtn().click();
        //რეპორტ პანელის ჩაკეცვა და გახსნა
        cy.get('.export-header__rightside > :nth-child(1) > svg-icon').click();
        cy.get('.rotated').click();

        cy.wait(10000);
        //success icon.
        cy.get('.dialog-item__rightside-success').should('be.visible');
        cy.visit('https://sam.dev.syniotec.com/planner/calendar');

        cy.wait(10000);

        generateReport.EqReportButton().click();
        generateReport.EqCharginReport().click();
        generateReport.EqReportCalendar().click(); 
        cy.get('.shl-calendar-header-txt > :nth-child(1)').click();
        cy.get('.shl-month-picker-container > .shl-calendar-header-switch > .shl-calendar-header-txt').click();
        cy.get('shl-month-calendar > shl-year-calendar > .shl-year-picker > .shl-year-picker-container > .shl-calendar-header-switch > :nth-child(1) > .shl-calendar-btn > .shl-i').click();
        cy.get('shl-month-calendar > shl-year-calendar > .shl-year-picker > .shl-year-picker-container > .shl-calendar-year-picker-years > :nth-child(6)').click();
        cy.get('.shl-calendar-month-picker-months > :nth-child(8)').click();
        cy.get('.shl-calendar-dates > :nth-child(1) > :nth-child(5) > span').click();
        cy.get('.shl-calendar-dates > :nth-child(5) > :nth-child(6) > span').click();

        generateReport.EqReportSaveBtn().click();
        cy.wait(20000);
        generateReport.EqReportsPage().click();

    });
});
