sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("com.rebit.hr.leaveapplication.controller.S1", {
            onInit: function () {
                // this.getView().setModel(sap.ui.getCore().getModel("localModel"));
                this.router = this.getOwnerComponent().getRouter(); // this.router -> all the functions 
            },
            handleAdd:function(){
                this.router.navTo("addEmployee"); // Pass the Paramerer-> Route Name
            },
            handleDelete: function(oControlEvent){
                var oView = this.getView();
                var oModelData = this.getView().getModel("localModel").getData().leavesData;
                var listItem = oControlEvent.getParameter("listItem");
                var sPath =   listItem.getBindingContextPath(); // path -> /localData/89 / localData/89
                var sIndex = sPath.substr(sPath.lastIndexOf("/")+1);
                // oModelData.push(empdata);
                oModelData.splice(sIndex,1);
                this.getOwnerComponent().getModel("localModel").setProperty("/leavesData", oModelData);

            }
        });
    });
