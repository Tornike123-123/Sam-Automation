export class HeaderElementList {
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
}