/// <reference types="cypress" />
import { WarehouseHelpers } from './warehouseHelpers.js';
import { setupWarehouseTest } from './warehouseConfig.js';

describe('Warehouse - Add Warehouse', function () {
    before(function(){
        cy.fixture('example').then(function(data){
            this.data = data;
        });
    });
    
    it('should add warehouse', function () {
        setupWarehouseTest();
        
        const helpers = new WarehouseHelpers();
        helpers.login();
        helpers.navigateToWarehouseListPage();
        
        const warehouseName = helpers.createWarehouse();
        helpers.searchWarehouse(warehouseName);
        helpers.clickWarehouseInList(warehouseName);
        
        // Verify warehouse was created successfully
        cy.log(`Warehouse ${warehouseName} was created successfully`);
    });
});
  