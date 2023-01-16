sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox",
    'sap/ui/model/Filter',
     'sap/ui/model/FilterOperator',
     'sap/ui/model/json/JSONModel'
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, MessageBox, Filter, FilterOperator, JSONModel) {
        "use strict";

        return Controller.extend("com.rebit.ui5.crudapp.controller.S1", {
            onInit: function () {


                // $.ajax():
                //https://petstore.swagger.io/v2/pet/findByStatus?status=available

                    // $.ajax({
                //     url: "https://reqres.in/api/products/",
                //     success: function (sResult) {
                //        console.log(sResult);
                //     }
                // });
                var oView = this.getView();
                $.ajax({
                    url: "https://petstore.swagger.io/v2/pet/findByStatus?status=available",
                    success: function (sResult) {
                       console.log(sResult);
                       var jsonPetData = new JSONModel();
                       jsonPetData.setData({
                        "petData":sResult
                       });
                       oView.setModel(jsonPetData,"jsonModel");

                    }
                });
            },
            handleAdd: function () {
                // 1. Get OData model from manifest.json
                var oDataModel = this.getView().getModel();

                // oDataModel.create();
                // oDataModel.update();
                // oDataModel.remove();
                // oDataModel.read();

                // 1. path 
                // 2. payload
                // 3. Object {  success, error
                //    key:value
                // }
                // oDataModel.refresh();

                var payloadData = {
                    "ProductId": "HT-7501",
                    "TypeCode": "PR",
                    "Category": "Notebooks",
                    "Name": "Rebit Day5",
                    "Description": "Notebook Basic 15 with 2,80 GHz quad core, 15\" LCD, 4 GB DDR3 RAM, 500 GB Hard Disc, Windows 8 Pro",
                    "SupplierId": "100000046",
                    "SupplierName": "SAP",
                    "TaxTarifCode": 1,
                    "MeasureUnit": "EA",
                    "WeightMeasure": "4.200",
                    "WeightUnit": "KG",
                    "Price": "956.0000",
                    "CurrencyCode": "EUR",
                    "Width": "30.000",
                    "Depth": "18.000",
                    "Height": "3.000",
                    "DimUnit": "CM",
                    "ProductPicUrl": "/sap/public/bc/NWDEMO_MODEL/IMAGES/HT-1000.jpg"
                };

                oDataModel.create("/ES_PRODUCTS", payloadData, {
                    succeess: function (oRes) {
                        MessageBox.success("Created");
                    },
                    error: function (oError) {
                        MessageBox.error(oError);
                    }
                });

            },
            handleUpdate: function(){
                var oDataModel = this.getView().getModel();

                var payloadData = {
                    "ProductId": "HT-7501",
                    "TypeCode": "PR",
                    "Category": "Notebooks",
                    "Name": "Rebit Day5 Updated",
                    "Description": "Notebook Basic 15 with 2,80 GHz quad core, 15\" LCD, 4 GB DDR3 RAM, 500 GB Hard Disc, Windows 8 Pro",
                    "SupplierId": "100000046",
                    "SupplierName": "SAP",
                    "TaxTarifCode": 1,
                    "MeasureUnit": "EA",
                    "WeightMeasure": "4.200",
                    "WeightUnit": "KG",
                    "Price": "956.0000",
                    "CurrencyCode": "EUR",
                    "Width": "30.000",
                    "Depth": "18.000",
                    "Height": "3.000",
                    "DimUnit": "CM",
                    "ProductPicUrl": "/sap/public/bc/NWDEMO_MODEL/IMAGES/HT-1000.jpg"
                };

                oDataModel.update("/ES_PRODUCTS('HT-7501')", payloadData, {
                    success: function (oRes) {
                        MessageBox.success("Created");
                    },
                    error: function (oError) {
                        MessageBox.error(oError);
                    }
                });
            },
            handleBackEndSearch:function(oControlEvent){
                var sValue = oControlEvent.getParameter("query");
                var listObj = this.getView().byId("listObj");
                var aFilters = new Filter({
                    path: "ProductId",
                    operator: FilterOperator.Contains,
                    value1: sValue
                   });
                if(sValue){
                    listObj.getBinding("items").filter([aFilters]);
                }
            },

            handleDelete:function(){

                var oDataModel = this.getView().getModel();

                oDataModel.remove("/ES_PRODUCTS('HT-7501')", null, {
                    success: function (oRes) {
                        MessageBox.success("Deleted");
                    },
                    error: function (oError) {
                        MessageBox.error(oError);
                    }
                });

            }
        });
    });
