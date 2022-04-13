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
				oJSONODataModel = this.getOwnerComponent().getModel("JSONODataModel"),
				aProducts = oJSONODataModel.getProperty("/Products"),
				oJSONStateModel = this.getOwnerComponent().getModel("JSONStateModel");
			
			oJSONBufferModel_ListItem.setProperty("/Products", aProducts.slice());
			oJSONBufferModel_MTable.setProperty("/Products", aProducts.slice());
			oJSONBufferModel_UITable.setProperty("/Products", aProducts.slice());

			oJSONStateModel.setProperty("/isBufferModelChanged", false);
			
				
		},

		resetSwitchState : function () {

			var oJSONStateModel = this.getOwnerComponent().getModel("JSONStateModel");

			oJSONStateModel.setProperty("/isSwitchDeleteListItemOn", false);
			oJSONStateModel.setProperty("/isSwitchDeleteMTableOn", false);
			oJSONStateModel.setProperty("/isSwitchDeleteUITableOn", false);

		},

		onPressCrossBtnListBase: function (oEvent) {
			var sBindingPath = oEvent.getParameter("listItem").getBindingContextPath(),
				oJSONBufferModel_ListItem = this.getOwnerComponent().getModel("JSONBufferModel_ListItem"),
				oJSONStateModel = this.getOwnerComponent().getModel("JSONStateModel"),
				aProducts = oJSONBufferModel_ListItem.getProperty("/Products"),
				aBindingPath = sBindingPath.split("/"),
				dPosition = +aBindingPath[aBindingPath.length - 1];
				
				aProducts.splice(dPosition, 1);

				oJSONBufferModel_ListItem.setProperty("/Products", aProducts);
				oJSONStateModel.setProperty("/isBufferModelChanged", true);
		}



	});
});