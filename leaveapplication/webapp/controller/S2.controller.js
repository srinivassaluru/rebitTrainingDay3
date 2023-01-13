sap.ui.define([
   "sap/ui/core/mvc/Controller",
   "sap/m/Dialog",
   "sap/ui/core/Fragment",
   "sap/ui/model/Filter",
   "sap/ui/model/FilterOperator"
],
   /**
    * @param {typeof sap.ui.core.mvc.Controller} Controller
    */
   function (Controller, Dialog, Fragment, Filter, FilterOperator) {
       "use strict";

       return Controller.extend("com.rebit.hr.leaveapplication.controller.S2", {

           onBeforeRendering: function () {
            //    this.getView().setModel(sap.ui.getCore().getModel("localModel"));
               this.router = this.getOwnerComponent().getRouter(); // this.router -> all the functions 
           },

           handleAdd:function(){
               this.router.navTo("addEmployee"); // Pass the Paramerer-> Route Name
           },

           handleSuggestionItemSelected:function(oEvent){
                var selectedItem = oEvent.getParameter("selectedItem").getKey();
                this.getView().byId("empId").setValue(selectedItem);
                this.getView().byId("empId").setEnabled(false);

           },
           //Add Value Help Code
           handleEmpIdValueHelp:function(oEvent){
            
            var fragment = new sap.ui.xmlfragment("com.rebit.hr.leaveapplication.view.employeeList");
            fragment.open();
            //    var dialog = new Dialog();
            //    dialog.open();

            // var sInputValue = oEvent.getSource().getValue(),
			// 	oView = this.getView();

			// if (!this._pValueHelpDialog) {
			// 	this._pValueHelpDialog = Fragment.load({
			// 		id: oView.getId(),
			// 		name: "com.rebit.hr.leaveapplication.view.employeeList", // path of fragment 
			// 		controller: this
			// 	}).then(function (oDialog) { // callbackfunction 
            //         oDialog.setModel(this.getView().getModel("localModel"),"fragmentModel");
			// 		oView.addDependent(oDialog);
			// 		return oDialog;
			// 	}.bind(this));
               
			// }

          
			// this._pValueHelpDialog.then(function(oDialog) {
			// 	// Create a filter for the binding
			// 	oDialog.getBinding("items").filter([new Filter("Name", FilterOperator.Contains, sInputValue)]);
			// 	// Open ValueHelpDialog filtered by the input's value
			// 	oDialog.open(sInputValue);
			// });

           },

           handleSubmit:function(){
               var oView = this.getView();
               var empdata = {
                  "empId": oView.byId("empId").getValue(),
                  "empName":oView.byId("empName").getValue(),
                  "leaveType":oView.byId("leaveType").getSelectedItem().getText(),
                  "comments":oView.byId("comments").getValue()
               };

               var oModelData = this.getView().getModel("localModel").getData().leavesData;

            //    oModelData.push(empdata);

               oModelData.push(empdata);
               
               this.getOwnerComponent().getModel("localModel").setProperty("/leavesData", oModelData);

               debugger;


           },

           handleNaigationBack:function(){
            this.router.navTo("employeesList");

           }
           
       });
   });
