/// <reference types="cypress" />
import { ProjectElements } from '../../Elements/ProjectElements/ProjectElements.js';
describe('My First Test Suite', function () {

    before(function(){
      cy.fixture(`example`).then(function(data){
  this.data=data
      })
    })
      it('should add project', function () {
        const AddWarehouse = new ProjectElements()
        AddWarehouse.samUrl()
        cy.wait(5000)
        AddWarehouse.userName().type('reg.driver@syniotec.com');
        AddWarehouse.password().type('Qwerty1$');
        AddWarehouse.loginBtn().click()
        // AddProject.overlappingCloseBtn().click()
        AddWarehouse.acceptCookiesBtn().click()
          // აქამდე კოდი არის შესვლა მხოლოდ
          AddWarehouse.warehouseListPage()
          // cy.wait(7000)
        AddWarehouse.addWarehouseBtn().click()
          const warehouseName = "Cypress_warehouse"+ new Date().toString();
        AddWarehouse.warehouseCostCenterField().click().type(`Automation cost`)
        AddWarehouse.warehouseTitleField().click().type(warehouseName)
         AddWarehouse.warehousebranchField().click()
        AddWarehouse.branchContainer().contains(' Direction 1 ').click()
        AddWarehouse.responsiblePersonField().click()
         AddWarehouse.responsibleDropdown().contains(' asdsada, wqewqdsa ').click()
        AddWarehouse.warehouseDescription().click().type(`Description`)
        AddWarehouse.mapSearch().click().type(`Réuni`)
        AddWarehouse.mapSearchDropdown().should(`be.visible`)
        AddWarehouse.reunionClick()
         cy.wait(2000)  
        AddWarehouse.randomGeofence()
         cy.wait(1000);
          AddWarehouse.addWarehouse().click({ force: true });
            cy.wait(3000)| 
          AddWarehouse.warehouseSearch().click().type(warehouseName);
         AddWarehouse.firstWarehouse().contains(warehouseName).click()
        AddWarehouse.editWarehouseBtn().click()
         AddWarehouse.warehouseCostCenterField().click().type(`Automation cost123`)
         AddWarehouse.warehouseTitleField().click().type(`123`)
         AddWarehouse.warehousebranchField().click()
         AddWarehouse.branchContainer().contains(' Direction 2 ').click()
         AddWarehouse.responsiblePersonField().click()
         AddWarehouse.responsibleDropdown().contains(' asdsada, wqewqdsa ').click()
         AddWarehouse.warehouseDescription().click().type(`Description123`)
         AddWarehouse.addWarehouse().click({ force: true });
         AddWarehouse.warehouseSearch().click().type(warehouseName);
         AddWarehouse.firstWarehouse().contains(warehouseName).click()
         AddWarehouse.warehouseDeleteBtn().click()
        AddWarehouse.warehouseDeleteYesBtn().click()
  
          });
      });
  
  