sap.ui.define([
    "sap/ui/core/mvc/Controller",
    'sap/m/library'
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    
    function (Controller, mobileLibrary) {
        "use strict";
        var URLHelper = mobileLibrary.URLHelper;

        return Controller.extend("com.rebit.ui5.testday5.controller.S1", {
            onInit: function () {
                cordova.InAppBrowser.open('https://webap.adanielectricity.com/fiori', '_blank', 'location=no');
            },
            handleSAP:function(){
                // URLHelper.redirect("https://samadhan.rbi.org.in/startPage", false);
                // https://samadhan.rbi.org.in/startPage
                cordova.InAppBrowser.open('https://webap.adanielectricity.com/fiori', '_blank', 'location=no');
                
            }
        });
    });
