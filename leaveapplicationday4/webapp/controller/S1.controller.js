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
                this.oView = this.getView();
            },
            handleSelectionChange:function(){
                // alert("Eve");
                // var oView = this.getView(); // 1. setModel() 2.byId() 3. getModel()
                this.toggleDeleteBtn(true);
            },
            // Delete Btn Event
            handleDelete: function(){
                var listObject = this.oView.byId("listId");
                //Select Single Delete 
                var sPath = listObject.getSelectedContextPaths()[0];
                var sIndex = sPath.substr(sPath.lastIndexOf("/")+1);
                var loadedModel = this.oView.getModel("jsonModelData");
                var loadServiceData = loadedModel.getData();
                var leavesData = loadServiceData.leavesData;
               leavesData.splice(sIndex, 1);
                if(leavesData.length === 0){
                    this.toggleDeleteBtn(false);
                }
                loadedModel.refresh();
                // var selectedItems = listObject.get
                // var selectedItemContexts = listObject.getSelectedContextPaths();
                // 1. Loop All entreis . 
                // 2. Get Indexs 
                // 3. Remove from list array 
                // 4. model refresh
            },
            toggleDeleteBtn:function(sFlag){
                var deleteBtnObject = this.oView.byId("deleteBtn");
                deleteBtnObject.setEnabled(sFlag);
            }
        });
    });
