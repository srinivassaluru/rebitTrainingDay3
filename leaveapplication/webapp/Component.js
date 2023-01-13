/**
 * eslint-disable @sap/ui5-jsdocs/no-jsdoc
 */

sap.ui.define([
        "sap/ui/core/UIComponent",
        "sap/ui/Device",
        "com/rebit/hr/leaveapplication/model/models",
        "sap/ui/model/json/JSONModel"
    ],
    function (UIComponent, Device, models, JSONModel) {
        "use strict";

        return UIComponent.extend("com.rebit.hr.leaveapplication.Component", {
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

                //Call Method to Available Data 
                this.creatingMockData();

                // enable routing
                this.getRouter().initialize();

                // set the device model
                this.setModel(models.createDeviceModel(), "device");
            },
            // Creating Mcok Data for Leave Applciation
            creatingMockData: function(){

                var leavesService = {
                        "leaveTypesSet":[
                            {
                                "leaveTypeName":"SickLeave",
                                "leaveCode":"101"
                            },
                            {
                                "leaveTypeName":"CasualLeave",
                                "leaveCode":"102"
                            },
                            {
                                "leaveTypeName":"EarnedLeave",
                                "leaveCode":"103"
                            },
                            {
                                "leaveTypeName":"Others",
                                "leaveCode":"100"
                            }
                        ],
                        "leavesData":[
                          
                        ],
                        "employees":[
                            {
                                "empId":"ReBIT1676",
                                "empName":"Vaibhav Vijay Dhadve"
                            },
                            {
                                "empId":"ReBIT1664",
                                "empName":"Neeraj Rajesh Dumbare"
                            },
                            {
                                "empId":"ReBIT1664",
                                "empName":"Neeraj"
                            },
                            {
                                "empId":"ReBit1181",
                                "empName":"Vishal Panda"
                            }
                        ]
                };

                var jsonModel = new JSONModel();

                jsonModel.setData(leavesService);

                // sap.ui.getCore().setModel(jsonModel,"localModel"); //Named Model\

                this.setModel(jsonModel, "localModel");

                // this.getView().setModel(jsonModel);
                
            }
        });
    }
);