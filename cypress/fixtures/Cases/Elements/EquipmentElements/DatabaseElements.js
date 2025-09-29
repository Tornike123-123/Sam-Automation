export class DatabaseElements {



        // generate report button 
     generateReportBtn  = () =>    cy.get('[data-cy="crew-detail-edit"]')  
     // generate technical  check  report
      generateTechnicalCheckReportBtn  = () =>    cy.get('[data-cy="eq-database-check-report" ]')
      // database Equipment report
        databaseEquipmentReportBtn  = () =>    cy.get('[data-cy="eq-database-generate-report"]')
        // generate Report button
        generateEqReportBtn  = () =>    cy.get('.report-dialog__generate')
        //generate tech check report button
        generateTechCheckReportBtn  = () =>    cy.get('.report-modal__actions > .shl-button-dir')
     // database Branch Filter
     databaseBranchFilter = () => cy.get('[data-cy="eq-database-branch"]')
     //add equipment button 
     addEquipmentBtn  = () =>    cy.get('[data-cy="eq-database-add-equipmentqa"]')  
     // database Category Filter
     databaseCategoryFilter = () => cy.get('[data-cy="eq-database-category"]')

     // database Location Filter
     databaseLocationFilter = () => cy.get('[data-cy="eq-database-location"]')

      // database Operator Filter
      databaseOperatorFilter = () => cy.get('[data-cy="eq-database-resp-person"]')


      // search by title filter
      databaseSearchByTitleFilter  = () =>    cy.get('[data-cy="eq-database-search"]') 
      // order by filter
       databaseOrderByFilter  = () =>    cy.get('[data-cy="eq-database-order-by"]') 
        // status filter
         databaseStatusFilter  = () =>    cy.get('[data-cy="eq-database-status"]')  
       // equipment type filter
       databaseEquipmentTypeFilter  = () =>    cy.get('[data-cy="eq-database-type"]') 
       //update status button 
       databaseEquipmentTypeFilter  = () =>    cy.get('[data-cy="eq-database-upadte"]') 
       //database techcheck dates filter
         databaseTechCheckDatesFilter  = () =>    cy.get(':nth-child(9) > .ng-untouched > .shl-button-dir')

     // database First equipment
     databaseFirstEquipment = () =>  cy.get('.mat-mdc-table > :nth-child(3)')

     // branch apply filter button
      branchApplyFilterBtn = () => cy.get('[data-cy="apply-branch-filter"]')
      //database clear  all filters
      databaseClearAllFiltersBtn = () => cy.get('[data-cy="clear-all-filters"]')
      // clear filters yes btn 
      clearFiltersYesBtn = () => cy.get('.confirmation__actions > .filled')      


            //UPDATE STATUS
    //update status 
    databaseUpdateStatus = () => cy.wrap('[data-cy="eq-database-upadte"]')
    //Inactive radio btn
    databaseInactiveRadioBtn = () => cy.get(':nth-child(2) > .border-radius-8')
    //Active radio btn
    databaseActiveRadioBtn = () => cy.get(':nth-child(1) > .border-radius-8')
    //InactiveReason
    databaseInactiveReason = () => cy.get('.dropdown-control > .ng-select-searchable > .ng-select-container > .ng-arrow-wrapper')
    //database Update Status start date
    databaseUpdateStatusStartDate = () => cy.get('.ng-dirty > .shl-date-picker > shl-input.ng-pristine > .input > .input-content-container > .input-flex-box > .action > .shl-select-calendar-btn > .shl-i')
    //database Update Status end date
    databaseUpdateStatusEndDate = () => cy.get('.ng-star-inserted.ng-dirty > .datepicker > .ng-dirty > .shl-date-picker > shl-input.ng-pristine > .input > .input-content-container > .input-flex-box > .action > .shl-select-calendar-btn > .shl-i')
    //Update status btn
    databaseUpdateStatusBtn = () => cy.get('form.ng-valid > .shl-button-dir')
    //Delete btn
    databaseDeleteBtn = () => cy.get('.table__actions-btn--red')


        //ADD EQUIPMENT FLOW
    //Add equipment button
    addEuipmentBtn = () => cy.get('[data-cy="eq-database-add-equipmentqa"]')
    // Select equipment manufacturer
    addEquipmentManufacturer = () => cy.get('#mat-mdc-form-field-label-0 > mat-label')
    // Select model name
    addEquipmentModelName = () => cy.get('#mat-input-1')
    // Select production year
    addEquipmentProductionYear = () => cy.get('.mat-mdc-select-placeholder')
    //Eq. Title
    addEquipmentTitle = () => cy.get('#mat-input-2')
    //Category
    addEquipmentCategory = () => cy.get('.ng-input > input').click()
    //Save btn
    addEquipmentSaveBtn = () => cy.get('.form-submit__button')
    //Inventory No.
    addEquipmentInventoryNo = () => cy.get('#mat-input-3').type('No. 123')
    //Next btn
    addEquipmentNextBtn = () => cy.get('.form-submit__button--next')  
    }