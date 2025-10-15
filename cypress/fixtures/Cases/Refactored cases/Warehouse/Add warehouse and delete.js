/// <reference types="cypress" />
import { WarehouseHelpers } from './warehouseHelpers.js';
import { setupWarehouseTest } from './warehouseConfig.js';

describe('Warehouse - Add and Delete', function () {
    before(function(){
        cy.fixture('example').then(function(data){
            this.data = data;
        });
    });
    
    it('should add warehouse then delete', function () {
        setupWarehouseTest();
        
        const helpers = new WarehouseHelpers();
        helpers.login();
        helpers.navigateToWarehouseListPage();
        
        const warehouseName = helpers.createAndDeleteWarehouse();
        
        // Verify warehouse was created and deleted successfully
        cy.log(`Warehouse ${warehouseName} was created and deleted successfully`);
    });
});
  