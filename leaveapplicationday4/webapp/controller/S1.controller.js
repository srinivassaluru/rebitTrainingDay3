sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "com/rebit/ui5/leaveapplicationday4/utils/formatter"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, formatter) {
        "use strict";

        return Controller.extend("com.rebit.ui5.leaveapplicationday4.controller.S1", {

            lifeSaver:formatter, //  create a global reference 
            onInit: function () {

            }
        });
    });
