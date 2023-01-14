/**
 * eslint-disable @sap/ui5-jsdocs/no-jsdoc
 */

sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/Device",
    "com/rebit/ui5/leaveapplicationday4/model/models",
    "sap/ui/model/json/JSONModel"
],
    function (UIComponent, Device, models, JSONModel) {
        "use strict";

        return UIComponent.extend("com.rebit.ui5.leaveapplicationday4.Component", {
            metadata: {
                manifest: "json"
            },

            /**
             * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
             * @public
             * @override
             */
            init: function () {
                // call the base component's init function
                UIComponent.prototype.init.apply(this, arguments);

                this.createMockData();

                // enable routing
                this.getRouter().initialize();

                // set the device model
                this.setModel(models.createDeviceModel(), "device");
            },

            // Create Mock Data 
            createMockData: function () {
                var leaveService = {  // Note In Real time the backend will offer a restful odata service which will consists various entity sets to offer 
                    //    various group of data 
                    "leavesData": [
                        {
                            "empId": 10001,
                            "empName": "Srinivas",
                            "leaveType": "SickLeave"
                        },
                        {
                            "empId": 10002,
                            "empName": "Vijay",
                            "leaveType": "EarnedLeave"
                        },
                        {
                            "empId": 10003,
                            "empName": "Rock Star",
                            "leaveType": "CasualLeave"
                        }

                    ],
                    "leaveTypes": [
                        {
                            "typeName":"SickLeave"
                        },
                        {
                            "typeName":"CasualLeave"
                        },
                        {
                            "typeName":"EarnedLeave"
                        }

                    ],
                    "employeeDetails": [
                        {
                            "empId": 10001,
                            "empName": "Srinivas"
                        },
                        {
                            "empId": 10002,
                            "empName": "Vijay"
                        
                        },
                        {
                            "empId": 10003,
                            "empName": "Rock Star"
                            
                        }
                    ]

                };

                // Create a JsonModel 

                var jsonmModel = new JSONModel(); // jsonModel variable consists JSONModel Object
                jsonmModel.setData(leaveService); // jsonModel object set the js object tree 
                this.setModel(jsonmModel,"jsonModelData"); // Here "this" is set to model into globally

            }
        });
    }
);