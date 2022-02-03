sap.ui.define([
	"./BaseController",
	"../model/formatter"
], function(BaseController, formatter) {
	"use strict";

	return BaseController.extend("sap.ui.demo.MyApp.controller.App", {

		formatter: formatter,

		onInit: function () {

		},

		onPressNavBtnListItem: function (oEvent) {
            var oRouter = this.getOwnerComponent().getRouter();
            oRouter.navTo("listItem");

			var oJSONStateModel = this.getOwnerComponent().getModel("JSONStateModel");
			oJSONStateModel.setProperty("/SwitchDeleteListItem", false);
			oJSONStateModel.setProperty("/SwitchDeleteMTable", false);
			oJSONStateModel.setProperty("/SwitchDeleteUITable", false);
        },

		onPressNavBtnMTable: function (oEvent) {
            var oRouter = this.getOwnerComponent().getRouter();
            oRouter.navTo("mTable");

			var oJSONStateModel = this.getOwnerComponent().getModel("JSONStateModel");
			oJSONStateModel.setProperty("/SwitchDeleteListItem", false);
			oJSONStateModel.setProperty("/SwitchDeleteMTable", false);
			oJSONStateModel.setProperty("/SwitchDeleteUITable", false);
        },

		onPressNavBtnUITable: function (oEvent) {
            var oRouter = this.getOwnerComponent().getRouter();
            oRouter.navTo("uiTable");

			var oJSONStateModel = this.getOwnerComponent().getModel("JSONStateModel");
			oJSONStateModel.setProperty("/SwitchDeleteListItem", false);
			oJSONStateModel.setProperty("/SwitchDeleteMTable", false);
			oJSONStateModel.setProperty("/SwitchDeleteUITable", false);
        }
		
	});
});