sap.ui.define([
	"sap/ui/core/mvc/Controller",
    "sap/ui/model/odata/v2/ODataModel",
	"sap/ui/model/json/JSONModel",
	"../model/formatter"
], function(Controller, ODataModel, JSONModel, formatter) {
	"use strict";

	return Controller.extend("sap.ui.demo.MyApp.controller.BaseController", {
		
		formatter: formatter,

		onInit: function () {

		},

		setBufferModelsFromOdata : function () {
			var oJSONBufferModel_ListItem = this.getOwnerComponent().getModel("JSONBufferModel_ListItem"),
				oJSONBufferModel_MTable = this.getOwnerComponent().getModel("JSONBufferModel_MTable"),
				oJSONBufferModel_UITable = this.getOwnerComponent().getModel("JSONBufferModel_UITable"),
				oODataModel = this.getOwnerComponent().getModel("ODataNorthwindModel");
			
			oJSONBufferModel_ListItem.setProperty("/Products", oODataModel.getProperty("/Products"));
			oJSONBufferModel_MTable.setProperty("/Products", oODataModel.getProperty("/Products"));
			oJSONBufferModel_UITable.setProperty("/Products", oODataModel.getProperty("/Products"));
				
		},

		resetSwitchState : function () {

			var oJSONStateModel = this.getOwnerComponent().getModel("JSONStateModel");

			oJSONStateModel.setProperty("/SwitchDeleteListItem", false);
			oJSONStateModel.setProperty("/SwitchDeleteMTable", false);
			oJSONStateModel.setProperty("/SwitchDeleteUITable", false);

		}



	});
});