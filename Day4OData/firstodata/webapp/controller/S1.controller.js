sap.ui.define([
    "sap/ui/core/mvc/Controller",
    'sap/ui/model/Filter',
    'sap/ui/model/FilterOperator'
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, Filter, FilterOperator) {
        "use strict";

        return Controller.extend("com.rebit.ui5.firstodata.controller.S1", {
            onInit: function () {

            },
            handleProductLiveSearch: function(oControlEvent){
                var enteredValue = oControlEvent.getParameter("newValue"); 
                // alert(enteredValue);
                var oFilter =  new Filter({
                    path: "ProductName",
                    operator: FilterOperator.Contains,
                    value1: enteredValue
                  });
                var listObj = this.getView().byId("listObj");
                listObj.getBinding("items").filter([oFilter]);
            },

            handleProductSearch:function(oControlEvent){
                var enteredValue = oControlEvent.getParameter("query"); 
                var oFilter =  new Filter({
                    path: "ProductName",
                    operator: FilterOperator.Contains,
                    value1: enteredValue
                  });
                var listObj = this.getView().byId("listObj");
                listObj.getBinding("items").filter([oFilter]);

            },
            handleListSelection: function(oControlEvent){
                var selectedItemContxt = oControlEvent.getSource().getSelectedContextPaths()[0].substr(1);
                console.log(selectedItemContxt);
                this.getOwnerComponent().getRouter().navTo("detailProduct",{
                    productContext:selectedItemContxt,
                    productId:1222233
                });
            }
        });
    });
