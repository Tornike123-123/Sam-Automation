export class ProjectElements {
  // Accept cookies
  acceptCookiesBtn = () => cy.get('.ch2-dialog-actions > .ch2-allow-all-btn')
    // // Accept cookies
    // acceptCookiesBtn = () => cy.get(':nth-child(2) > .ch2-btn')


  // Overlapping geofence close
  overlappingCloseBtn = () => cy.get('.overlaping-modal__button--close')
  
  // Floating menu
  floatingMenuBtn = () => cy.get('.floating-menu__button')
  
  // Header Project planner
  headerProjectPlanner = () => cy.get('[data-cy="projects-planner-nav-pages"]')
  
  // Header Project List page
  headerProjectListPage = () => cy.get('[data-cy="project-list-page"]')
  
  // Header Inactive Project List page
  headerInactiveProjectListPage = () => cy.get('[data-cy="inactive-project-list-page"]')
  
  // Header Virtual Project List page
  headerVirtualProjectListPage = () => cy.get('[data-cy="virtual-project-list-page"]')
  
  // Header Overlapping geofence
  headerOverlappingGeofencePage = () => cy.get('[data-cy="overlapping-geofence-page"]')
  
  // Header Send Notes page
  headerSendNotesPage = () => cy.get('[data-cy="send-notes-page"]')
  
  // Header Clearance request
  headerClearanceRequestPage = () => cy.get('[data-cy="clearence-request-page"]')
  
  // Header Resource requests page
  headerResourceRequestsPage = () => cy.get('[data-cy="resource-request-nav-list-page"]')
  
  // Header Release requests page
  headerReleaseRequestsPage = () => cy.get('[data-cy="release-request-page"]')
  
  // Header Booking Changes page
  headerBookingChangesPage = () => cy.get('[data-cy="booking-change-page"]')
  
  // Header Crew planner page
  headerCrewPlannerPage = () => cy.get('[data-cy="crew-planner-nav-page"]')
  
  // Header Crew List page
  headerCrewListPage = () => cy.get('[data-cy="crew-list-page"]')
  
  // Header Group List page
  headerGroupListPage = () => cy.get('[data-cy="groupe-list-page"]')
  
  // Header Equipment planner page
  headerEquipmentPlannerPage = () => cy.get('[data-cy="equipment-planner-page"]')
  
  // Header Database list page
  headerDatabaseListPage = () => cy.get('[data-cy="database-list-page"]')
  
  // Header Warehouse list page
  headerWarehouseListPage = () => cy.get('[data-cy="warehouse-list-nav-page"]')
  
  // Header Warehouse delivery note page
  headerWarehouseDeliveryNotePage = () => cy.get('[data-cy="warehouse-delivery-page"]')
  
  // Header Hr planner page
  headerHrPlannerPage = () => cy.get('[data-cy="hr-planner-nav-page"]')
  
  // Header Transport planner page
  headerTransportPlannerPage = () => cy.get('[data-cy="my-dispo-transportation-nav-page"]')
  
  // Header Transport Providers page
  headerTransportProvidersPage = () => cy.get('[data-cy="my-dispo-providers-page"]')
  
  // Header Dashboard page
  headerDashboardPage = () => cy.get('[data-cy="my-dispo-dashboard-page"]')



  // ALL ProdUrls
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
eqPlannerPage  = () =>    cy.visit('https://sam.dev.syniotec.com/planner/calendar')


//equipment database  page
eqDatabaseListPage  = () =>    cy.visit('https://sam.syniotec.com/equipment-database')


//equipment database  page
warehouseListPage  = () =>    cy.visit('https://sam.syniotec.com/warehouses/list')

//equipment database  page
hrPlannerPage  = () =>    cy.visit('https://sam.syniotec.com/new-hr-planner')


 // Search by name
 EqPlannerSearchByNameFilter = () => cy.get('[data-cy="filter-header-keyword"]')



  //Floating men
  // Add project
  floatingAddProject = () => cy.get('[data-cy="add-project-cy"]')
  
  // Add group
  floatingAddGroup = () => cy.get('[data-cy="add-groupe-cy"]')
  
  // Add person
  floatingAddPerson = () => cy.get('[data-cy="add-person-cy"]')
  
  // Add request
  floatingAddRequest = () => cy.get('[data-cy="add-request-cy"]')
  
  // Add equipment
  floatingAddEquipment = () => cy.get('[data-cy="add-equipment-cy"]')
  
  // Add crew
  floatingAddCrew = () => cy.get('[data-cy="add-crew-cy"]')






  
  // Warehouse cost center field
  warehouseCostCenterField = () => cy.get('[data-cy="add-warehouse-cost-center"]')
  
  // Cost center field
  costCenterField  = () => cy.get('[data-cy="add-project-cost-center"] > .shl-form-field-wrapper > .shl-form-field-flex')
  // () => cy.get('[data-cy="add-project-cost-center"]')
  
  // Title of project
  projectTitleField = () => cy.get('[data-cy="add-warehouse-title-warehouse"]')
  
  // Click on branch field
  branchField = () => cy.get('[data-cy="add-warehouse-department"]')
  
  // Branch dropdown
  branchDropdown = () => cy.get('.ng-tns-c291203045-7.ng-invalid > .shl-select > .shl-select-inputs-container > .ng-valid > .input > .input-content-container > .input-flex-box')
  
  // Select branch dropdown
  branchContainer = () =>   cy.get('.shl-select-options-container')
    // cy.get('.shl-select-options-overlay tree-options ng-tns-c2899473721-26 opened ng-star-inserted') 
  
  // Project start date picker
  projectStartDatePicker = () => cy.get('[data-cy="add-project-start-date"]')
  
  // Project end date picker
  projectEndDatePicker = () => cy.get('[data-cy="add-project-end-date"]')
  
  // Responsible person
  responsiblePersonField = () => cy.get('[data-cy="add-warehouse-responsible-person"]')
  
  // Responsible dropdown
  responsibleDropdown = () => cy.get('.cdk-overlay-pane')
  
  // Further responsible person field
  furtherResponsiblePersonField = () => cy.get('[data-cy="add-project-further-person"]')
  
  // Add/Create warehouse button, Finish creating button
  adaWarehouseButton = () => cy.get('[data-id="add_project-submit-button"]');
  
  // Description
  description = () => cy.get('[data-cy="add-warehouse-description"]')
  
  // Map search
  mapSearch = () => cy.get('.pac-target-input')
  
  // Map search dropdown
  mapSearchDropdown = () => cy.get('.pac-container')
  
  // Click on dropdown reunion
  reunionClick = () => cy.contains('.pac-container', 'Réunion').click()
  
  // Geofence
  geofence = () => cy.get(':nth-child(2) > .action')
  
  // Add project button
  addProjectBtn = () => cy.get('[data-cy="add-warehouse-submit"]')
  
  // Project search by title
  searchProjectByTitle = () => cy.get('.shl-form-field-infix > .ng-pristine')
  
  // Click on first searched project
  firstProject = () => cy.get('[role="row"][row-index="0"]')
  

  

  
  // Add request button
  addRequestBtn = () => cy.get('[data-cy="add-request"]')
  
  // Category name field
  categoryName = () => cy.get('.category-search__input')
  
  // Category dropdown
  categoryDropdown = () => cy.get('.shl-select-options-container')
  
  // Further information
  furtherInformation = () => cy.get('[data-cy="equipment-request-description-input"]')
  
  // Send all request button
  sendAllRequests = () => cy.get('[data-cy="equipment-request-submit-button"]')
  
  // Login URL
  samUrl = () => cy.visit('https://login.sam.dev.syniotec.com/')
  samProdUrl = () =>  cy.visit (`https://login.sam.syniotec.com/login?destination=https:%2F%2Fsam.syniotec.com%2Fcalendar`)
  
  // Username
  userName = () => cy.get('#mat-input-0')
  
  // Password
  password = () => cy.get('#mat-input-1')
  
  // Submit login
  loginBtn = () => cy.get('.form__submit')
  
  
 
  
  // Update project button
  updateProjectBtn = () => cy.get('[data-id=add_project-submit-button]')
  
  // Click on personnel tab
  personnelTabBtn = () => cy.get('#mat-tab-label-1-1')
  
  // Add person request qualification field
  addPersonQualificationField = () => cy.get('[data-cy="person-request-qualification-select"] > .shl-select > .shl-select-inputs-container > .ng-valid > .input > .input-content-container > .input-flex-box')
  
  // Add person request take element from qualification dropdown
  addPersonRequestChooseQualification = () => cy.get('.shl-tree-option-parent.ng-star-inserted')
  
  // Add person request start date picker
  addPersonRequestStartDatePicker = () => cy.get('.shl-date-range-picker > :nth-child(1) > .ng-valid > .input > .input-content-container > .input-flex-box')
  
  // Add person request get calendar container
  addPersonRequestChooseDate = () => cy.get('.shl-calendar-container').find('.shl-calendar-date.selectable.ng-star-inserted')
  
  // Add person request find date
  addPersonRequestFindDate = () => cy.get('.shl-calendar-date.selectable.ng-star-inserted')
  
  // Background click (to cancel opened elements, date pickers, dropdowns, etc.)
  backgroundClick = () => cy.get('.cdk-overlay-backdrop').click({ force: true })
  
  // Add person request end date picker
  addPersonRequestEndDatePicker = () => cy.get('.shl-date-picker > shl-input.ng-untouched > .input > .input-content-container > .input-flex-box')
  
  // Add person request additional info field
  addPersonRequestAdditionalInfoField = () => cy.get('[data-cy="person-request-description-input"]')
  
  // Send all person requests
  sendAllPersonRequests = () => cy.get('[data-cy="person-request-submit-button"]')
  
  // Project list page
  devprojectListPage = () => cy.visit('https://sam.dev.syniotec.com/project/list')
  
  // Project detailed personal tab
  projectDetailedPersonalTab = () => cy.get('#mat-tab-group-0-label-1')
  
  // Personnel new request accordion
  personnelNewRequestAccordion = () => cy.get('.shl-tab-view-header.ng-star-inserted').contains('Personal')
  
  // Personnel tab
  personnelTab = () => cy.get('.shl-tab-view-header.ng-star-inserted').contains('Personal')
  
  // Personnel new request card "X" button
  personnelCardXButton = () => cy.get('.badge-container')
  
  // Delete personnel request yes button
  personnelRequestDeleteYesBtn = () => cy.get('.confirmation__actions > .filled')


  //project list page
  //project branch filter
  projectBranchFilter = () => cy.get('[data-cy="project-list-branch"]') 
  //project filter
  projectFilter = () => cy.get('[data-cy="project-list-projects"]') 
  //project Search filter
  projectSearchFilter = () => cy.get('[data-cy="project-list-search"]')    
  //Project person filter  
  projectPersonFilter = () => cy.get('[data-cy="project-list-persons"]') 
  //project order by filter           
  projectOrderByFilter = () => cy.get('[data-cy="project-list-order"]')                                
  
  

// project detailed paage elements
//project detailed page add request button  
  addRequestFromProject = () => cy.get('[data-cy="add-person-cy"]')   
//go to eq planmner from project
  goToEqPlanner = () => cy.get('[data-cy="project-equipment-route"]')   
//go to  Hr planner from project
  goToEqPlanner = () => cy.get('[data-cy="project-hr-route"]')
// go to crew planner from project
  goToEqPlanner = () => cy.get('[data-cy="project-crew-route"]') 
// equipments tab in project
  equipmentTabProject = () =>  cy.get('#mat-tab-label-0-0')
// Personnel tab in project
  personnelTabProject = () =>  cy.get('#mat-tab-label-0-1')
// crew tab in project 
  crewTabProject = () =>  cy.get('#mat-tab-label-0-2')
  //Project detailed, Inactive button 
inactiveBtn  = () =>    cy.get('[data-cy="project-make-active-inactive-button"]') 
 // Inactive project yes button
 inactiveProjectYesBtn = () => cy.get('.confirmation__actions > .filled')
  // Inactive project list page
  inactiveProjectListPage = () => cy.visit(`https://sam.dev.syniotec.com/project/list?inactive=true`)
//Project detailed, Active button 
activeBtn  = () =>    cy.get('[data-cy="project-make-active-inactive-button"]') 
// Active project yes button
activeProjectYesBtn = () => cy.get('.confirmation__actions > .filled')
// Inactive list page, search by title field
searchInactiveProject = () => cy.get('.shl-form-field-flex')
// Project information dots button
projectInformationDots = () => cy.get('[data-cy="project-information-dots"]')

// Project context menu popup
projectContextMenu = () => cy.get('#cdk-menu-0')

// Deactivate option in context menu
deactivateOption = () => cy.get('#cdk-menu-0').contains('Deactivate')

// Edit option in context menu
editOption = () => cy.get('#cdk-menu-0').contains('Edit')

// Activate option in context menu
activateOption = () => cy.get('#cdk-menu-0').contains('activate')

// Edit Inactive  button
editInactiveBtn = () => cy.get('[data-cy="project-edit-button"]')




  
// on project tab in project detailed page --------------- 
  onProjectTab = () => cy.get('[data-cy="detail-on-project-accordeon"]')  
  // select all equipment from onproject tab 
  selectAllEquipmentCheckbox = () => cy.get('[data-cy="project-select-all"]')  
  //Clear selection in on project
  clearSelection = () => cy.get('[data-cy="project-clear-section"]')  
  // release in on project
  releaseOnproject = () => cy.get('[data-cy="project-release"]')    
  //clearance in on project
  clearanceOnProject = () => cy.get('[data-cy="project-clearence"]')   

   // Edit request button
   editRequestBtn = () => cy.get('.mat-mdc-menu-trigger > .mat-mdc-button-touch-target')

   // Delete request button
   deleteEquipmentRequestBtn = () => cy.get('[data-cy="project-delete-assigment"]')
   // Delete request yes button
   deleteRequestYesBtn = () => cy.get('.confirmation__actions > .filled')

   
// New request tab   
  newRequestTab = () => cy.get('[data-cy="detail-new-request-accordeon"]')   
  // New request edit button
 newRequestsEdit = () => cy.get('.accordeon-content').find('.card.ng-star-inserted').find('.mat-mdc-menu-trigger.mdc-icon-button.mat-mdc-icon-button.mat-unthemed.mat-mdc-button-base')

//Pending Tab
  pendingTab = () => cy.get('[data-cy="detail-pending-accordeon"]')
// confirmed tab
  confirmedTab = () => cy.get('[data-cy="detail-confirmed-accordeon"]')
//History tab
  historyTab = () => cy.get('[data-cy="detail-left-project-accordeon"]')
// clearance tab 
 clearanceTab = () => cy.get('[data-cy="detail-move-away-accordeon"]')   
// release tab 
 releaseTab = () => cy.get('[data-cy="detail-left-releases-accordeon"]')
 //release confirmed checkbox
 releaseConfirmeCheckbox = () => cy.get('[data-cy="project-confirmed-equipment"]')  
 //release pending Checkbox
 releasePendingCheckbox = () => cy.get('[data-cy="project-pending-equipment"]')  
//release rejected Checkbox
releaseRejectedCheckbox = () => cy.get('[data-cy="project-rejected-equipment"]')  


 // Edit project button  (also edit virtual project)
 editProjectBtn = () => cy.get('[data-cy="project-edit-button"]')   
// Delete project button (also delete  virtual project)
   deleteProjectBtn = () => cy.get('[data-cy="project-delete-button"]')  
// Delete project yes button
  deleteProjectYesBtn = () => cy.get('.confirmation__actions > .filled')
  // Back to project button
  backToProjectBtn = () => cy.get('.add-request__header-button')
  // Add files to project
  addFileToProject = () => cy.get('[data-cy="project-file-upload"]')  
  
  



  // Add virtual project  flow
  //add virtual project button
  addVirtualprojectBtn = () => cy.get(`.filter-wrapper__button`)
// add virtual project name field 
  addVirtualNameField = () => cy.get('[data-cy="add-virtual-project-name"]');
// add virtual project cost center field 
addVirtualCostCenterField = () => cy.get('[data-cy="add-virtual-project-cost-center"]')
//branch dropdown in add virtual pop
addVirtualBranchDropdown = () => cy.get('.select-box > .mat-mdc-form-field > .mat-mdc-text-field-wrapper')
//select first branch in dropdown
selectFirstBranch = () => cy.get('#mat-option-0')
//adress field in add  virtual project popup
addressField = () => cy.get(':nth-child(4) > .mat-mdc-form-field > .mat-mdc-text-field-wrapper')
//create virtual project button 
createVirtualProjectBtn = () =>    cy.get('[data-cy="add-virtual-project-submit"]')
// convert virtual project btn from virtual project detailed page
convertVirtualProjectBtn = () =>  cy.get('.header__content-button.ng-star-inserted')
// Virtual project list page
virtualListPage = () =>  cy.visit(`https://sam.dev.syniotec.com/virtual-project/list`)
// virtual search by title field
searchVirtualProject = () => cy.get('.shl-form-field-flex')
// virtual search by title field
firstVirtualProject = () => cy.get('.item')
// virtual search by title field
deleteVirtualYesBtn = () => cy.get('.filled')







//warehouse list page
addWarehouseBtn = () =>    cy.get('.filter-wrapper__button')
warehouseSearch = () =>    cy.get('[data-cy="warehouse-filter-search"]')       
warehouseListPage = () =>   cy.visit(`https://sam.dev.syniotec.com/warehouses/list`)
// Title of warehouse
warehouseTitleField = () => cy.get('[data-cy="add-warehouse-title-warehouse"]')
// Click on warehouse branch field
warehousebranchField = () => cy.get('[data-cy="add-warehouse-department"]')
// Branch dropdown
branchDropdown = () => cy.get('.ng-tns-c291203045-7.ng-invalid > .shl-select > .shl-select-inputs-container > .ng-valid > .input > .input-content-container > .input-flex-box')
// Responsible person
responsiblePersonField = () => cy.get('[data-cy="add-warehouse-responsible-person"]')
// Click on first searched warehouse
firstWarehouse = () => cy.get('.lobby__content').first()
addWarehouse = () => cy.get('[data-cy="add-warehouse-submit"]')
// Description
warehouseDescription = () => cy.get('[data-cy="add-warehouse-description"]')
warehouseDeleteBtn = () =>  cy.get('[data-cy="project-delete-button"]')
warehouseDeleteYesBtn = () => cy.get('.filled')
// Edit warehouse  button
editWarehouseBtn = () => cy.get('[data-cy="project-edit-button"]')




// Crew and group list pages also Add Crew Add group flows
// add crew button from crew list page
addCrewBtn = () =>  cy.get('.add-crew__button')
 // warehouse and group search field
crewSearch = () =>    cy.get('[data-cy="crew-page-search"]')      
// group branch filter
groupBranchFilter = () =>    cy.get('[data-cy="groupe-page-branch"]')         
// crew branch filter
crewBranchFilter = () =>    cy.get('[data-cy="crew-page-branch"]')  
  // group Type filter
groupTypeFilter = () =>    cy.get('[data-cy="groupe-page-type"]')     
 // crew Type filter
 crewTypeFilter = () =>    cy.get('[data-cy="crew-page-type"]')   
       // crew Responsible person filter
 crewResponsiblePersonFilter = () =>    cy.get('[data-cy="crew-page-responsible-person"]') 
 //clear all filters 
 clearFilters = () =>    cy.get('[data-cy="clear-filters"]')     
 //crew detailes edit button
 crewDetailesEditBtn = () =>   cy.get('.kolone-details__button > .fas') 
// add crew title field
addCrewTitleField = () =>    cy.get('[data-cy="add-crew-title-field"]') 
// add crew responsible person drpdwn
addCrewResponsiblePersonField = () =>    cy.get('[data-cy="add-crew-responsible-field"]')  
//add crew area  drpdwn
addCrewAreaField = () =>    cy.get('[data-cy="add-crew-area-field"]')  
//crew type drpdwn
addCrewTypeField = () =>    cy.get('[data-cy="add-crew-type-field"]')   
//Create crew Button
createCrewButton = () =>    cy.get('[data-cy="add-crew-create-field"]') 
//Add company car tab 
addCompanyCarTab = () =>    cy.get('[data-cy="crew-add-car"]')  
//add crew equipment tab
addCrewEquipmentTab = () =>    cy.get('[data-cy="crew-add-equipment"]') 
// add crew person tab 
addCrewEquipmentTab = () =>    cy.get('[data-cy="crew-add-person"]') 
// company car edit 
companyCarEditBtn = () =>    cy.get('[data-cy="company-car-edit"]')    
//general information tab
generalInfoTab  = () =>    cy.get('[data-cy="crew-general-info"]')     
//crew equipment tab 
crewEquipmentTab  = () =>    cy.get('[data-cy="crew-equipment"]')      
//crew personnel tab
crewPersonnelTab  = () =>    cy.get('[data-cy="crew-person"]')  
// crew overview tab 
crewOerviewTab = () =>    cy.get('[data-cy="crew-overview"]') 
//crew finish overview button 
 crewOerviewTab = () =>    cy.get('[data-cy="add-crew-finish"]')
 // add group flow
 //name of group field
 addGroupNameField = () =>    cy.get('[data-cy="add-groupe-name"]')
// add group area drpdwn
addGroupAreaField = () =>    cy.get('[data-cy="add-area-dropdown"]')
//group type drpdwn 
addGroupTypeField = () =>    cy.get('[data-cy="add-type-dropdown"]')
//group general information page
groupGeneralInfoTab = () =>    cy.get('[data-cy="general-information"]')
// group add category tab 
groupAddCategoryTab = () =>    cy.get('[data-cy="add-categories"]')
// group add qualification tab 
groupAddQualificationTab = () =>    cy.get('[data-cy="add-qualification"]')
// group overview tab 
groupOverviewTab = () =>    cy.get('[data-cy="groupe-overview"]')
// add group Continue button 
addGroupContinueBtn  = () =>    cy.get('[data-cy="add-groupe-continue"]')     
// add group Save button (Finish)
addGroupSaveBtn  = () =>    cy.get('[data-cy="groupe-save"]')   





//group detailed page
// book resources button
groupBookResourcesBtn = () =>    cy.get('[data-cy="book-resource-groupe"]')
// delete group button
deleteGroupBtn = () =>    cy.get('[data-cy="delete-groupe"]')
// edit group general information button
editGroupGeneralInfoBtn = () =>    cy.get('[data-cy="general-info-button"]') 
// group category -  minus button
groupCategoriesMinusBtn = () =>    cy.get('[data-cy="groupe-edit-minus"]')  
//group category + Plus button
groupCategoriesPlusBtn = () =>    cy.get('[data-cy="groupe-edit-plus"]')



//crew detailed page
//delete crew button 
deleteCrewBtn = () =>    cy.get('[data-cy="crew-delete"]')
// book crew button 
BookCrewBtn = () =>    cy.get('[data-cy="add-crew"]')  
// edit crew detailes 
editCrewDetailesBtn = () =>    cy.get('[data-cy="crew-detail-edit"]')   

//Resource requests List page
//Branch filter
resourceRequestsListBranchSearch = () =>    cy.get('[data-cy="resource-request-branch"]')  
//Project filter
resourceRequestsListProjectSearch = () =>    cy.get('[data-cy="resource-request-projects"]')  
//Title filter
resourceRequestsListTitleSearch = () =>    cy.get('[data-cy="resource-request-search"]')  
//Person filter
resourceRequestsListPersonSearch = () =>    cy.get('[data-cy="resource-request-persons"]')  
//OrderBy filter
resourceRequestsListOrderBySearch = () =>    cy.get('[data-cy="resource-request-order"]') 
//Tag filter
resourceRequestsListTagSearch = () =>    cy.get('[data-cy="resource-request-tags"]') 



//Resource requests Detailed page
//Equipment Tab 
resourceRequestsEqTab = () =>    cy.get('[data-cy="resource-request-equipment-tab"]')  
//Personnel Tab 
resourceRequestsPersonnelTab = () =>    cy.get('[data-cy="resource-request-person-tab"]') 
//Crew Tab 
resourceRequestsCrewTab = () =>    cy.get('[data-cy="resource-request-crew-tab"]') 
//Equipment  
//equipment New requests Tab
resourceRequestsEqNewRequestsTab = () =>    cy.get('#accordion-header-0')
//equipment Pending Tab
resourceRequestsEqPendingTab = () =>    cy.get('#accordion-header-1')
//equipment Confirmed Tab
resourceRequestsEqConfirmedTab = () =>    cy.get('#accordion-header-2')
// Title, Subtitle, Category search 
resourceRequestsTitleSearch = () =>    cy.get('[data-cy="inventory-number-input"]') 
//branch filter
resourceRequestsBranchSearch = () =>    cy.get('[data-cy="crew-planner-branch"]') 
//Location search
resourceRequestsLocationSearch = () =>    cy.get('[data-cy="location-overlay-trigger"]') 
// request "..." edit button
resourceRequestsEditRequestBtn = () =>    cy.get('[data-cy="project-list-edit"]') 
//Delete request button
resourceRequestsEditRequestBtn = () =>    cy.get('[data-cy="project-delete-assigment"]') 
//update Tags button
resourceRequestsEditRequestBtn = () =>    cy.get('[data-cy="project-update-tags"]') 
// pending Tab - From edit button 
//Go to equipment page button - redirect to equipments page
resourceRequestsGoToEqPage = () =>    cy.get('[data-cy="project-navigate-equipment"]') 
// edit transportation  
resourceRequestsEditTransportation = () =>    cy.get('[data-cy="project-edit-transportation"]') 
// Delete transportation  
resourceRequestsDeleteTransportation = () =>    cy.get('[data-cy="project-delete-transportation"]') 
//Personnel New requests Tab
resourceRequestsNewRequestsTab = () =>   cy.get('#accordion-header-0')
//Personnel Confirmed Tab
resourceRequestsConfirmedTab = () =>   cy.get('#accordion-header-1')
//Edit button in New requests (If i want to click on first cards edit button in list)
resourceRequestsEditBtn = () =>  cy.get('.card.ng-star-inserted').first()
  .find('.container > .dropdown > .mat-mdc-menu-trigger > .mat-mdc-button-touch-target')
  // delete confirmed request button
  resourceRequestsDeleteConfirmedRequestBtn = () => cy.get('.del-btn.fas.fa-times.ng-star-inserted')
  // Delete Crew request button
  resourceRequestsDeleteCrewRequestBtn = () => cy.get('[data-cy="resource-delete-button"]')  
  // Crew request search 
  resourceRequestsCrewRequestSearch = () => cy.get('[data-cy="resource-search-by-title"]')  




// Equipment DATABASE page 
// generate report button 
generateReportBtn  = () =>    cy.get('[data-cy="crew-detail-edit"]')  
// generate technical  check  report
generateTechnicalCheckReportBtn  = () =>    cy.get('[data-cy="eq-database-check-report" ]')
//add equipment button 
addEquipmentBtn  = () =>    cy.get('[data-cy="eq-database-add-equipmentqa"]')  
//filters
//brancg filters 
databaseBranchFilter  = () =>    cy.get('[data-cy="eq-database-branch"]')  
 // database Category Filter
 databaseCategoryFilter = () => cy.get('[data-cy="eq-database-category"]')
//location filter
databaseLocationFilter  = () =>    cy.get('[data-cy="eq-database-location"]')  
// operator - res person filter
databaseRespPersonFilter  = () =>    cy.get('[data-cy="eq-database-resp-person"]')  
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
   // branch apply filter button
   branchApplyFilterBtn = () => cy.get('[data-cy="apply-branch-filter"]')
      // database Operator Filter
      databaseOperatorFilter = () => cy.get('[data-cy="eq-database-resp-person"]')
    // order by filter
    databaseOrderByFilter  = () =>    cy.get('[data-cy="eq-database-order-by"]') 
      //database clear  all filters
      databaseClearAllFiltersBtn = () => cy.get('[data-cy="clear-all-filters"]')
      // clear filters yes btn 
      clearFiltersYesBtn = () => cy.get('.confirmation__actions > .filled')      


      


//ADD requests / eq/person/crew
// Add  equipment request flow
//Equipment Tab
addEqRequestEqTab  = () =>  cy.get('[data-cy="resource-request-equipment-tab"]')
// choose project field
addEqRequestProjectField  = () =>    cy.get('[data-cy="add-request-project"]') 
//category field
addEqRequestCategoryField  = () =>    cy.get('[data-cy="add-request-categories"]')
// this is category dropdown list and i can select with names (contains:...  or First().click)
addEqRequestChooseCategory    = () =>  cy.get('.category-search__content-item.ng-star-inserted')         
//Choose Tag
addEqRequestChooseTag  = () =>    cy.get('[data-cy="add-request-tags"]')   
// start date picker
addEqRequestStartDatePicker  = () =>    cy.get('[data-cy="add-request-start-date"]')    
// End date picker
addEqRequestEndDatePicker  = () =>    cy.get('[data-cy="add-request-end-date"]')  
// add request "-" minus button 
addEqRequestMinusBtn  = () =>    cy.get('[data-cy="add-request-minus"]') 
// add request "+" Plus Button 
addEqRequestPlusBtn  = () =>    cy.get('[data-cy="add-request-plus"]') 
//Further information
addEqRequestFurthInfo  = () =>    cy.get('[data-cy="add-request-textarea"]') 
//send all requests
addEqRequestSendAllRequests = () =>  cy.get('.shl-button-dir.filled.md.add-equipment__button.add-equipment__button--send')

//Add Personnel request
//Personnel Tab
addPerRequestPersonnelTab = () => cy.get('[data-cy="resource-request-person-tab"]')
//choose project in add peronnel request\
addPerRequestProjectField  = () =>    cy.get('[data-cy="add-request-person-project"]') 
//Qualification field
addPerRequestQualificationField  = () =>    cy.get('[data-cy="add-request-person-qualification"]') 
// request "-" Minus Button 
addPerMinusBtn  = () =>    cy.get('[data-cy="add-request-person-minus"]') 
// request "+" Plus Button 
addPerPlusBtn  = () =>    cy.get('[data-cy="add-request-person-plus"]') 
// Start date picker
addPerRequestStartDatePicker  = () =>    cy.get('[data-cy="add-request-person-start-date"]') 
// End date picker
addPerRequestEndDatePicker  = () =>    cy.get('[data-cy="add-request-person-end-date"]') 
  // Further information
addPerRequestFurthInfo  = () =>    cy.get('[data-cy="add-request-person-textarea"]') 
//Person Send all requests button
addPerRequestSendAllRequestsBtn  = () =>    cy.get('[data-cy="add-request-person-add"]') 


//Add Crew request
// Crew tab 
addCrewRequestCrewTab  = () =>   cy.get('[data-cy="resource-request-crew-tab"]')
// project picker in crew requests
addCrewRequestProjectField  = () =>    cy.get('[data-cy="add-request-crew-project"]') 
// Crew type field
addCrewRequestTypeField  = () =>    cy.get('[data-cy="add-request-crew-type"]') 
// Start date picker in crew request
addCrewRequestStartDatePicker  = () =>    cy.get('[data-cy="add-request-crew-start-date"]') 
// End date picker in crew request
addCrewRequestEndDatePicker  = () =>    cy.get('[data-cy="add-request-crew-end-date"]') 
//crew further info 
addCrewRequestFurthInfo  = () =>    cy.get('[data-cy="add-request-crew-textarea"]') 
//Send request crew
addCrewRequestSendRequest  = () =>    cy.get('[data-cy="add-request-crew-send"]') 



// HR planner page
//Hr planner search by title filter
hrPlannerSearchFilter  = () =>    cy.get('[data-cy="hr-planner-search"]') 
//Hr planner Branch filter
hrPlannerBranchFilter  = () =>    cy.get('[data-cy="hr-planner-branch"]') 
//Hr planner Project filter
hrPlannerProjectFilter  = () =>    cy.get('[data-cy="hr-planner-projects"]') 
//Hr planner  filter Popup
hrPlannerFilterPopup  = () =>    cy.get('[data-cy="hr-planner-filter-popup"]') 
//Hr planner Request side bar
hrPlannerRequestSideBar  = () =>    cy.get('[data-cy="hr-planner-requests"]') 
//Hr planner Week view
hrPlannerWeekView  = () =>    cy.get('[data-cy="week"]') 
//Hr planner month view
hrPlannerMonthView  = () =>    cy.get('[data-cy="month"]') 
//Hr planner Custom view
hrPlannerCustomView  = () =>    cy.get('[data-cy="custom"]') 
//Hr planner Settings 
hrPlannerSettings  = () =>    cy.get('[data-cy="hr-planner-setting"]') 
//Hr Planner Plus + button add  peron to crew button
hrPlannerPlusBtn  = () =>    cy.get('[data-cy="hr-planner-person-plus"]') 
//Hr Planner Minus - button add  peron to crew button
hrPlannerMinusBtn  = () =>    cy.get('[data-cy="hr-planner-persons-minus"]') 
//Hr Planner Crew search field imn popup
hrPlannerCrewSearch  = () =>    cy.get('[data-cy="hr-planner-plus-popup-crew"]') 
//Hr Planner Add to Crew  button
hrPlannerAddToCrewBtn  = () =>    cy.get('[data-cy="hr-planner-plus-popup-add"]') 
//Hr Planner Project detailes button
hrPlannerProjectDetailesBtn  = () =>    cy.get('[data-cy="context-menu-details"]') 
//Hr Planner Merge button
hrPlannerMergeBtn  = () =>    cy.get('[data-cy="hr-planner-merge"]') 
//Hr Planner Booking button
hrPlannerBookingBtn  = () =>    cy.get('[data-cy="hr-planner-booking"]') 
//Hr Planner Report button
hrPlannerReportBtn  = () =>    cy.get('[data-cy="hr-planner-download-report"]') 
//Hr planner Person info popup
hrPlannerPersonInfoPopup  = () =>    cy.get('[data-cy="hr-planner-person-info"]') 
//Hr planner Add certificate
hrPlannerAddCertificate  = () =>    cy.get('[data-cy="add-certification"]') 
//Hr planner Add Qualification
hrPlannerAddQualification  = () =>    cy.get('[data-cy="add-qualification"]') 
//Hr planner Book button
hrPlannerBookBtn  = () =>    cy.get('[data-cy="book-btn"]') 
//Hr planner To profile button
hrPlannerToProfileBtn  = () =>    cy.get('[data-cy="to-profile"]') 
// Booking popup
//Hr planner Project field
hrPlannerBookingProjectField  = () =>    cy.get('[data-cy="booking-projects"]') 
//Hr planner booking radio button
hrPlannerBookingRadioBtn  = () =>    cy.get('[data-cy="Booking"]') 
//Hr planner Status radio button
hrPlannerStatusRadioBtn  = () =>    cy.get('[data-cy="Status"]') 
//Hr planner Release radio button
hrPlannerReleaseRadioBtn  = () =>    cy.get('[data-cy="Release"]') 
//Hr planner Personnel field
hrPlannerBookingPersonnelField  = () =>    cy.get('[data-cy="bookig-personel"]') 
//Hr planner Start date 
hrPlannerBookingStartDate  = () =>    cy.get('[data-cy="booking-start-date"]') 
//Hr planner start Time
hrPlannerBookingStartTime  = () =>    cy.get('[data-cy="booking-start-time"]') 
//Hr planner End date 
hrPlannerBookingEndDate  = () =>    cy.get('[data-cy="booking-end-date"]') 
//Hr planner end Time
hrPlannerBookingEndTime  = () =>    cy.get('[data-cy="booking-end-time"]') 
//Hr planner Additional information
hrPlannerBookingAdditionalInfo  = () =>    cy.get('[data-cy="booking-textarea"]') 
//Hr planner Save Button
hrPlannerBookingSaveBtn  = () =>    cy.get('[data-cy="submit-btn"]') 
//Hr planner Discard booking butotn
hrPlannerBookingDiscardBtn  = () =>    cy.get('[data-cy="discard"]')
//Hr planner Delete booking butotn
hrPlannerDeleteBookingBtn  = () =>    cy.get('[data-cy="delete-booking"]') 




// Crew planner Page
//Crew planner Search by title filter
crewPlannerSearchByTitleFilter  = () =>    cy.get('[data-cy="crew-planner-search-by-title"]') 
 //Crew planner Branch filter
 crewPlannerBranchFilter  = () =>    cy.get('[data-cy="crew-planner-branch"]') 
 //Crew planner Branch filter
 crewPlannerProjectFilter  = () =>    cy.get('[data-cy="crew-planner-projects"]') 
//Crew planner Week view
CrewPlannerWeekView  = () =>    cy.get('[data-cy="week"]') 
//Crew planner month view
CrewPlannerMonthView  = () =>    cy.get('[data-cy="month"]') 
//Crew planner Custom view
CrewPlannerCustomView  = () =>    cy.get('[data-cy="custom"]') 
//Crew planner Timeline Left arrow
CrewPlannerLeftArrow   = () =>    cy.get('[data-cy="crew-planner-left-arrow"]') 
//Crew planner Timeline Right arrow
CrewPlannerRightArrow  = () =>    cy.get('[data-cy="crew-planner-right-arrow"]') 
//Crew planner Timeline Today
CrewPlannerToday  = () =>    cy.get('[data-cy="crew-planner-today"]') 
//Crew planner Booking button
CrewPlannerBookingBtn  = () =>    cy.get('[data-cy="crew-planner-booking-button"]') 
//Crew planner  project field
CrewPlannerBookingProjectField  = () =>    cy.get('[data-cy="crew-booking"]') 
//Crew planner  Booking radio btn
CrewPlannerBookingRadioBtn  = () =>    cy.get('[data-cy="crew-booking"]') 
//Crew planner  Release radio btn
CrewPlannerReleaseRadioBtn  = () =>    cy.get('[data-cy="crew-release"]') 
//Crew planner  Booking start date picker
CrewPlannerBookingStartDate  = () =>    cy.get('[data-cy="crew-start-date"]')
//Crew planner  Booking start Time  picker
CrewPlannerBookingStartTime  = () =>    cy.get('[data-cy="crew-start-time"]')
//Crew planner  Booking End Date  picker
CrewPlannerBookingEndDate = () =>    cy.get('[data-cy="crew-end-date"]')
//Crew planner  Booking End Date  picker
CrewPlannerBookingEndDate = () =>    cy.get('[data-cy="crew-end-date"]')
//Crew planner  Booking End time  picker
CrewPlannerBookingEndTime = () =>    cy.get('[data-cy="crew-end-time"]')
//Crew planner  Booking Crew dropdown
CrewPlannerBookingCrewDropdown = () =>    cy.get('[data-cy="crew-dropdown"]')
//Crew planner  Booking Crew Type dropdown
CrewPlannerBookingCrewType = () =>    cy.get('[data-cy="crew-type-dropdown"]')
//Crew planner  Booking additional info
CrewPlannerBookingAdditionalInfo = () =>    cy.get('[data-cy="crew-additional-info"]')

CrewBookingProjectDropDown = () => cy.get('[data-cy="crew-project-dropdown"] > .shl-select > .shl-select-inputs-container > .ng-valid > .input > .input-content-container > .input-flex-box > .field > .ng-untouched')



















  CrewNavPage = () => cy.get(':nth-child(3) > .nav-item').realHover();
      // Crews Page //
  CrewsPage = () => cy.get(':nth-child(3) > .nav-item').realHover().get('a[href="/kolone"]').click();
//Crew add button
  CrewAddButton = () => cy.get('[data-cy="add-crew-button"]').click();
//Crew title add
  CrewTitleAdd = () => cy.get('.shl-form-field-infix > .ng-pristine');
//Crew reponsible person add
  CrewResponsiblePersonAdd = () => cy.get('[data-cy="add-crew-responsible-field"] > div.dynamic-select > :nth-child(1) > .custom-select-header > .ng-select-container > .ng-arrow-wrapper');
//Crew area add
  CrewAreaAdd = () => cy.get('[data-cy="add-crew-area-field"] > div.dynamic-select > :nth-child(1) > .custom-select-header > .ng-select-container > .ng-arrow-wrapper');
//Crew type add
  CrewTypeAdd = () => cy.get('.mat-mdc-text-field-wrapper');
//Crew Create button
  CrewCreatebutton = () => cy.get('[data-cy="add-crew-create-field"]');
//Crew title (already existing)
  CrewTitle = () => cy.get('.crew-item__text');
//Crew add Equipment
  CrewAddEquipment = () => cy.get('[data-cy="crew-add-equipment"] > .groupe-navigation__title');
//Crew add Person
  CrewAddPerson = () => cy.get('[data-cy="crew-add-person"] > .groupe-navigation__title');
//Crew add Overview
  CrewAddOverview = () => cy.get('[data-cy="crew-overview"] > .groupe-navigation__title');
  // Crew planner Page //
  CrewPlannerPage = () => cy.get(':nth-child(3) > .nav-item').realHover().get('a[data-cy="crew-planner-nav-page"]').click();
//Crew planner Search by title filter
  crewPlannerSearchByTitleFilter  = () => cy.get('.shl-form-field-flex')
//Crew planner Branch filter
  crewPlannerBranchFilter  = () => cy.get('[data-cy="crew-planner-branch"] > .shl-select > .shl-select-inputs-container > .ng-valid > .input > .input-content-container > .input-flex-box > .field > .ng-untouched')
//Crew planner Branch filter
  crewPlannerProjectFilter  = () => cy.get('.shl-select-inputs-container > .ng-valid > .input > .input-content-container > .input-flex-box > .field > .ng-untouched')
//Crew planner Week view
  CrewPlannerWeekView  = () => cy.get('[data-cy="week"]')
//Crew planner month view
  CrewPlannerMonthView  = () =>  cy.get('[data-cy="month"]')
//Crew planner Custom view
  CrewPlannerCustomView  = () =>    cy.get('[data-cy="custom"]')
//Crew planner Timeline Left arrow
  CrewPlannerLeftArrow   = () =>    cy.get('[data-cy="crew-planner-left-arrow"]')
//Crew planner Timeline Right arrow
  CrewPlannerRightArrow  = () =>    cy.get('[data-cy="crew-planner-right-arrow"]')
//Crew planner Timeline Today
  CrewPlannerToday  = () =>    cy.get('[data-cy="crew-planner-today"]')
//Crew planner Booking button
  CrewPlannerBookingBtn  = () =>    cy.get('[data-cy="crew-planner-booking-button"]')
//Crew planner  project field
  CrewPlannerBookingProjectField  = () =>    cy.get('[data-cy="crew-booking"]')
//Crew planner  Booking radio btn
  CrewPlannerBookingRadioBtn  = () =>    cy.get('[data-cy="crew-booking"]')
//Crew planner  Release radio btn
  CrewPlannerReleaseRadioBtn  = () =>    cy.get('[data-cy="crew-release"]')
//Crew planner  Booking start date picker
  CrewPlannerBookingStartDate  = () =>    cy.get('[data-cy="crew-start-date"]')
//Crew planner  Booking start Time  picker
  CrewPlannerBookingStartTime  = () =>    cy.get('[data-cy="crew-start-time"]')
//Crew planner  Booking End Date  picker
  CrewPlannerBookingEndDate = () =>    cy.get('[data-cy="crew-end-date"]')
//Crew planner  Booking End Date  picker
  CrewPlannerBookingEndDate = () =>    cy.get('[data-cy="crew-end-date"]')
//Crew planner  Booking End time  picker
  CrewPlannerBookingEndTime = () =>    cy.get('[data-cy="crew-end-time"]')
//Crew planner  Booking Crew dropdown
  CrewPlannerBookingCrewDropdown = () =>    cy.get('[data-cy="crew-dropdown"]')
//Crew planner  Booking Crew Type dropdown
  CrewPlannerBookingCrewType = () =>    cy.get('[data-cy="crew-type-dropdown"]')
//Crew planner  Booking additional info
  CrewPlannerBookingAdditionalInfo = () =>    cy.get('[data-cy="crew-additional-info"]')
//Crew Calendar icon/button
  CrewCalendarIcon = () => cy.get(':nth-child(1) > .ng-valid > .input > .input-content-container > .input-flex-box > .action > .shl-select-calendar-btn').invoke('attr', 'aria-expanded', 'true')
//Calendar Today circle
  CalendarTodayCircle = () => cy.get('.today > span')
//Crew Filter icon
  CrewFilterIcon = () => cy.get('.filter__icon')
      // Groups //
  GroupsPage = () => cy.get(':nth-child(3) > .nav-item').realHover().get('[data-cy="groupe-list-page"]').click()
//Group add button
  groupsAddButton = () => cy.get('[data-cy="add-groupe"]')
//Groups add name
  groupsAddName = () => cy.get('[data-cy="add-groupe-name"] > .input > .input-content-container > .input-flex-box > .input-flex-item > .ng-untouched')
//Groups add area
  groupsAddArea = () => cy.get('[data-cy="add-area-dropdown"] > .shl-select > .shl-select-inputs-container > .ng-valid > .input > .input-content-container > .input-flex-box > .field > .ng-untouched')
//Groups add type
  groupsAddType = () => cy.get('[data-cy="add-type-dropdown"] > .shl-select > .shl-select-inputs-container > .ng-valid > .input > .input-content-container > .input-flex-box > .field > .ng-untouched')
//Groups add Categories
  groupsAddCategories = () => cy.get(':nth-child(2) > .card > .card__actions > sam-card-wrapper-actions.ng-star-inserted > .action > .action__initial > .action__initial-btn')
//Groups add Qualifications
  groupsAddQualifications = () => cy.get(':nth-child(4) > .card > .card__actions > sam-card-wrapper-actions.ng-star-inserted > .action > .action__initial > .action__initial-btn > .fas')
//Groups save button
  groupsAddSave = () => cy.get('[data-cy="groupe-save"]')
//Groups Text name
  groupsTextName = () => cy.get('.groupe__text')








  
  
              //Person add page//
          //General information  
  
      personAddPage = () => cy.visit('https://sam.dev.syniotec.com/person'); // /General Information cy.get('sam-stepper-navigation > :nth-child(1)')
  //FirstName
      personAddFirstName = () => cy.get('.general-info__personal-form > :nth-child(3) > :nth-child(1) > .shl-form-field > .shl-form-field-wrapper > .shl-form-field-flex > .shl-form-field-infix > .ng-untouched');
  //LastName
      personAddLastName = () => cy.get(':nth-child(3) > :nth-child(2) > .shl-form-field > .shl-form-field-wrapper');
  //Code
      personAddCode = () => cy.get('.general-info__phone-code > .ng-untouched > .shl-select > .shl-select-inputs-container > .ng-valid > .input > .input-content-container > .input-flex-box > .field > .ng-pristine');
  //PhoneNumber
      personAddPhoneNumber = () => cy.get('.general-info__phone-number > .shl-form-field > .shl-form-field-wrapper > .shl-form-field-flex > .shl-form-field-infix > .ng-untouched');
  //Email
      personAddEmail = () => cy.get(':nth-child(4) > :nth-child(1) > .shl-form-field > .shl-form-field-wrapper > .shl-form-field-flex > .shl-form-field-infix > .ng-untouched');
  //Nationality
      personAddNationality = () => cy.get(':nth-child(2) > .ng-valid.ng-star-inserted > .shl-select > .shl-select-inputs-container > .ng-valid > .input > .input-content-container > .input-flex-box > .field > .ng-untouched');
  //BirthDate
      personAddBirthDate = () => cy.get('.shl-date-picker > .ng-valid > .input > .input-content-container > .input-flex-box > .field > .ng-untouched');
  
      //Address
  //Country
      personAddCountry = () => cy.get('.general-info__address-form > :nth-child(1) > :nth-child(1) > .ng-valid.ng-star-inserted > .shl-select > .shl-select-inputs-container > .ng-valid > .input > .input-content-container > .input-flex-box > .field > .ng-untouched');
  //city
      personAddCity = () => cy.get('.general-info__address-form > :nth-child(1) > :nth-child(2) > .shl-form-field > .shl-form-field-wrapper > .shl-form-field-flex > .shl-form-field-infix > .ng-untouched');
  //Street
      personAddStreet = () => cy.get(':nth-child(2) > :nth-child(1) > .shl-form-field > .shl-form-field-wrapper > .shl-form-field-flex > .shl-form-field-infix > .ng-untouched');
  //street No.
      personAddStreetNo = () => cy.get(':nth-child(2) > :nth-child(2) > .shl-form-field > .shl-form-field-wrapper > .shl-form-field-flex > .shl-form-field-infix > .ng-untouched');
  //entry/exit dates
      personAddEntryExitDates = () => cy.get('.shl-date-range-picker > :nth-child(1) > .ng-valid > .input > .input-content-container > .input-flex-box > .action > .shl-select-calendar-btn > .shl-i');
  
      //addition information
  //emergancyContactName
      personAddEmergancyName = () => cy.get('.general-info__additional-info-form-full-column > .shl-form-field > .shl-form-field-wrapper > .shl-form-field-flex > .shl-form-field-infix > .ng-untouched');
  //Code
      personAddInformationCode = () => cy.get('.general-info__emergency-phone-code > .ng-valid.ng-star-inserted > .shl-select > .shl-select-inputs-container > .ng-valid > .input > .input-content-container > .input-flex-box > .action > .shl-select-close');
  //emergencyContactPhoneNumber
      personAddEmergancyPhone = () => cy.get('.general-info__emergency-phone-number > .shl-form-field > .shl-form-field-wrapper > .shl-form-field-flex > .shl-form-field-infix > .ng-untouched')
  //continue
      personAddContinueGeneral = () => cy.get('.shl-button-dir');
  
          //Company related information
      personAddCompanyRelatedInformation = () => cy.get('sam-stepper-navigation > :nth-child(2)');
  //Personeel Number        
      personAddPersoneelNumber = () => cy.get('.shl-form-field-infix > .ng-untouched');
  //Position in SAM     
      personAddPosition = () => cy.get('.ng-tns-c349140495-6.ng-invalid > .shl-select > .shl-select-inputs-container > .ng-valid > .input > .input-content-container > .input-flex-box > .action > .shl-select-close > .shl-i');
  //Affilliation
      personAddAffiliation = () => cy.get('.ng-tns-c349140495-7.ng-invalid > .shl-select > .shl-select-inputs-container > .ng-valid > .input > .input-content-container > .input-flex-box > .action > .shl-select-close');
  //Profession
      personAddProfession = () => cy.get('.ng-tns-c349140495-8.ng-invalid > .shl-select > .shl-select-inputs-container > .ng-valid > .input > .input-content-container > .input-flex-box > .action > .shl-select-close');
   //Contract Type
      personAddContractType = () => cy.get('.ng-tns-c349140495-9.ng-invalid > .shl-select > .shl-select-inputs-container > .ng-valid > .input > .input-content-container > .input-flex-box > .action > .shl-select-close');
  //Container
      personAddContainer = () => cy.get('.textarea-content-container > .ng-untouched');
  //CarpoolingCheck 
      personAddCarpoolingCheck = () => cy.get(':nth-child(4) > .company-info__column > shl-checkbox.ng-untouched > .shl-checkbox > .shl-checkbox-label > .shl-checkbox-label-content');
  //CompanyCarCheck
      personAddCompanyCarCheck = () => cy.get(':nth-child(5) > .company-info__column > shl-checkbox.ng-untouched > .shl-checkbox > .shl-checkbox-label > .shl-checkbox-label-content');      
  //CarType
      personAddCarType = () => cy.get('.company-info__row.ng-star-inserted > :nth-child(1) > .ng-valid.ng-star-inserted > .shl-select > .shl-select-inputs-container > .ng-valid > .input > .input-content-container > .input-flex-box > .action > .shl-select-close');
  //LicensePlate
      personAddLicensePlate = () => cy.get('.shl-form-field-infix > .ng-untouched').type('ad-123-da');
  //ContinueBtn
      personAddContinueCompany = () => cy.get('.shl-button-dir');
    
        //Qualification information
      personAddQualificationInformation = () => cy.get('sam-stepper-navigation > :nth-child(3)');
  //Qualification add new
      personAddQualificationAddNew = () => cy.get(':nth-child(1) > .qualification__button');
  //Qualification type
      personAddQualificationType = () => cy.get('.shl-i');
  //Qualification Finish
      personAddQualificationFinish = () => cy.get('.add-qualification__actions-row > .filled');
  //Plus button
      personAddQualificationPlusButton = () => cy.get(':nth-child(1) > .qualification__section-row > .qualification__plus')
  //Qualification delete
      personAddQualificationDelete = () => cy.get(':nth-child(4) > .qualification__wrap-header > .qualification__wrap-close');
  
  //Certificate add new
      personAddCertificateAddNew = () => cy.get('.qualification__row > :nth-child(2) > .qualification__button');
  //Certificate name
      personAddCertificateName = () => cy.get('.shl-select-close');
  //Certificate save and exit
      personAddCertificateSave = () => cy.get('.certificate-modal__actions-button');
  //Certificate plus btn
      personAddCertificatePlusButton = () => cy.get('.qualification__row > :nth-child(2) > .qualification__section-row > .qualification__plus');
  //Certificate checkbox
      personAddCertificateCheckBox = () => cy.get('.shl-checkbox-label-content')
  //Certificate Save
      personAddCertificateSave = () => cy.get('.certificate-modal__actions-button');
  //certificateDelete
      personAddCertificateDelete = () => cy.get(':nth-child(1) > .certificate > .certificate__text--small > .certificate__button > .far')
  
  //Driving license new btn
      personAddDrivingLicenseAddNew = () => cy.get('.qualification__button')
  //Driving license type
      personAddDrivingLicenseType = () => cy.get('.shl-select-close')
  //Driving license checkbox
      personAddDrivingLicenseCheckBox = () => cy.get('.shl-checkbox-label-content')
  //Driving license update
      personAddDrivingLicenseUpdate = () => cy.get('.license-modal__actions-button')
  //Driving license plus btn
      personAddDrivingLicensePlusButton = () => cy.get('.qualification__section--driver > .qualification__section-row > .qualification__plus')
  //Driving license delete
      personAddDrivingLicenseDelete = () => cy.get(':nth-child(1) > .license > .license__button')
  
      //Person Save and exit
      personAddSaveAndExit = () => cy.get('.shl-button-dir')
  




















  // Current date and time
  currentDate = () => cy.get('.shl-form-field-infix > .ng-pristine').click().then(() => {
    const now = new Date();
    const formattedDateTime = `${now.getDate()}.${(now.getMonth() + 1).toString().padStart(2, '0')}.${now.getFullYear()} ${now.getHours()}:${now.getMinutes().toString().padStart(2, '0')}`;
    cy.get('.shl-form-field-infix > .ng-pristine').type(formattedDateTime);
  })
  
  // Random clicks on geofence
  randomGeofence = () => cy.get(':nth-child(2) > .action').trigger('click', { force: true }).then(($input) => {
    const inputRect = $input[0].getBoundingClientRect();
    const random = () => Math.floor(Math.random() * 201) + 100;
    
    const clickX = inputRect.right + random();
    const clickY = inputRect.top + random();
    const clickJ = inputRect.right + random();
    const clickK = inputRect.top + random();
    const clickL = inputRect.right + random();
    const clickM = inputRect.top + random();
    
    cy.get('body').click(clickX, clickY);
    cy.wait(1000);
    cy.get('body').click(clickJ, clickK);
    cy.wait(1000);
    cy.get('body').click(clickL, clickM);
    cy.wait(1000);
    cy.get('body').click(clickX, clickY);
    cy.wait(1000);

  })
}
