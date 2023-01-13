sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("com.ui5.srinivas.testrouting.controller.S1", {
            onInit: function () {

            },
            handleClickMe: function(){
                // To Perform Routing Get Router << GOD >> 
                var componentObj = this.getOwnerComponent();
                var routerObj = componentObj.getRouter();
                routerObj.navTo("screen2"); //  1 mandatroy parameter -> name of the route   
            }
        });
    });
