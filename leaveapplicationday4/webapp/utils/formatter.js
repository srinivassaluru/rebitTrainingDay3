sap.ui.define(function() {
	"use strict";

	var Formatter = {

         // Convert Name to Upper
         displayNameInUpper: function(sValue){
            return sValue.toUpperCase();
         },

         // Apply code to change dynamically 
         changeStateDynamically: function(sValue, sValue1){
            console.log("First Value"+ sValue);
            console.log("Second Value"+ sValue1);
            if(sValue  === "SickLeave"){
               return "Error";
            }else{
               return "Success";
            }
         }


	};

	return Formatter;

},  /* bExport= */ true);
