/// <reference types="cypress" />
import { WarehouseHelpers } from './warehouseHelpers.js';
import { setupWarehouseTest } from './warehouseConfig.js';

describe('Warehouse - Add, Edit and Delete', function () {
    before(function(){
        cy.fixture('example').then(function(data){
            this.data = data;
        });
    });
    
    it('should add warehouse, edit it, then delete', function () {
        setupWarehouseTest();
        
        const helpers = new WarehouseHelpers();
        helpers.login();
        helpers.navigateToWarehouseListPage();
        
        const warehouseName = helpers.createEditAndDeleteWarehouse();
        
        // Verify warehouse was created, edited and deleted successfully
        cy.log(`Warehouse ${warehouseName} was created, edited and deleted successfully`);
    });
});
  