sap.ui.define([
	"sap/ui/core/mvc/Controller",
    "sap/ui/model/odata/v2/ODataModel",
	"sap/ui/model/json/JSONModel",
	"../model/formatter",
	"sap/ui/model/json/JSONModel"
], function(Controller, ODataModel, JSONModel, formatter) {
	"use strict";

	return Controller.extend("sap.ui.demo.MyApp.controller.BaseController", {
		
		formatter: formatter,

		onInit: function () {

		},

		resetSwitchState : function () {
			var oJSONStateModel = this.getOwnerComponent.getModel("JSONStateModel");

			oJSONStateModel.setProperty("/SwitchDeleteListItem") = false;
			oJSONStateModel.setProperty("/SwitchDeleteMTable") = false;
			oJSONStateModel.setProperty("/SwitchDeleteUITable") = false;
			
			
		}

	});
});