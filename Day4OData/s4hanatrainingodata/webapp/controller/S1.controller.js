sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, MessageBox) {
        "use strict";

        return Controller.extend("com.rebit.ui5.s4hanatrainingodata.controller.S1", {
            onInit: function () {

            },
            handleAdd: function () {

                var sendData = {
                    "ProductId": "HT-9876",
                    "TypeCode": "PR",
                    "Category": "Notebooks",
                    "Name": "Rebit Trainin1111",
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

                var sModel = this.getView().getModel();
                sModel.create("/ES_PRODUCTS",sendData,{
                    success:function(oRes){
                        MessageBox.success("Product Created");
                    },  
                    error:function(oError){
                        MessageBox.error(JSON.parse(oError.responseText).error.message.value);

                    }
                });


            }
        });
    });
