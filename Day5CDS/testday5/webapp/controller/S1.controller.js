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

            },
            handleSAP:function(){
                // URLHelper.redirect("https://samadhan.rbi.org.in/startPage", false);
                // window.open = cordova.InAppBrowser.open;
                // window.open('https://samadhan.rbi.org.in/startPage', '_system');
                var ref = cordova.InAppBrowser.open('https://samadhan.rbi.org.in/startPage', '_blank', 'location=yes');
            }
        });
    });
