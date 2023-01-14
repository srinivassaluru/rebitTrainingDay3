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

        return Controller.extend("com.rebit.ui5.firstodata.controller.S2", {
            onInit: function () {
                this.getOwnerComponent().getRouter().getRoute("detailProduct").attachMatched(this.readNavigatedValue, this);
            },
            readNavigatedValue: function (oEvent) {
                var sProductContext = oEvent.getParameter("arguments").productContext;
                debugger;
                console.log(sProductContext);
                this.getView().bindElement("odataModel>/"+sProductContext);
            }
        });
    });
