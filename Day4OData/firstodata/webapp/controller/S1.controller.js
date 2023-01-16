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

                // $.ajax({
                //     url: "https://reqres.in/api/products/",
                //     success: function (sResult) {
                //        console.log(sResult);
                //     }
                // });
                // $.ajax({
                //     url: "https://petstore.swagger.io/v2/pet/findByStatus?status=available",
                //     success: function (sResult) {
                //        console.log(sResult);
                //     }
                // });

                var listModesObject = this.getView().byId("listModes");
                if (listModesObject) {
                    var itemObj = listModesObject.getItems()[0]; // It will return Select -> Aggregation -> Core Item >>
                }
                if (itemObj) {
                    // var text = selectedItemObj.getText();
                    var text = itemObj.getText();
                    alert(text);
                    this.getView().byId("listObj").setMode(text);
                }


                // listModesObject.getSelectedItem().getText();
            },
            handleProductLiveSearch: function (oControlEvent) {
                var enteredValue = oControlEvent.getParameter("newValue");
                // alert(enteredValue);
                var oFilter = new Filter({
                    path: "ProductName",
                    operator: FilterOperator.Contains,
                    value1: enteredValue
                });
                var listObj = this.getView().byId("listObj");
                listObj.getBinding("items").filter([oFilter]);
            },

            handleProductSearch: function (oControlEvent) {
                var enteredValue = oControlEvent.getParameter("query");
                var oFilter = new Filter({
                    path: "ProductName",
                    operator: FilterOperator.Contains,
                    value1: enteredValue
                });
                var listObj = this.getView().byId("listObj");
                listObj.getBinding("items").filter([oFilter]);

            },
            handleListSelection: function (oControlEvent) {
                var selectedItemContxt = oControlEvent.getSource().getSelectedContextPaths()[0].substr(1);
                console.log(selectedItemContxt);
                this.getOwnerComponent().getRouter().navTo("detailProduct", {
                    productContext: selectedItemContxt,
                    productId: 1222233
                });
            },

            handleListModelSelectionChange:function(oControlEvent){
               var selectedItemObject = oControlEvent.getParameter("selectedItem");
               var text=  selectedItemObject.getText();
               this.getView().byId("listObj").setMode(text);


            },

            //
            handleMultSelect: function () {
                debugger; // Simple Understanding with view and reference 
                // var s1Controller = this;
                // var sView = s1Controller.getView();
                // var listObj = sView.byId("listObjj");
                // listObj.setMode("MultiSelect");

                // Simple Understanding with initial checks 
                // var s1Controller = this;
                // if (s1Controller) {
                //     var sView = s1Controller.getView();
                // }
                // if (sView) {
                //     var listObj = sView.byId("listObjj");
                // }
                // if (listObj) {
                //     listObj.setMode("MultiSelect");
                // }

                this.getView().byId("listObj").setMode("MultiSelect");


            }
        });
    });
