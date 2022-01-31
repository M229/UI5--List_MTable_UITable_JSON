sap.ui.define([
	"./BaseController",
	"../model/formatter",
	"sap/ui/model/json/JSONModel",
	"sap/m/BusyDialog"

], function(BaseController, formatter, JSONModel, BusyDialog) {
	"use strict";

	return BaseController.extend("sap.ui.demo.MyApp.controller.MTable", {

		formatter: formatter,

		onInit: function () {
			this.oBusy = new BusyDialog();
			this.oBusy.setBusyIndicatorDelay(0);
			this.getView().setModel(new JSONModel(), "mJSONBufferModel");
			var oJSONBufferModel = this.getView().getModel("mJSONBufferModel");
			var oODataModel = this.getOwnerComponent().getModel("ODataNorthwindModel");
			this.oBusy.open();
			oODataModel.read("/Products", {
				success: function (oData){
					oJSONBufferModel.setProperty("/Products", oData.results);
					this.oBusy.close();
				}.bind(this),
				error: function () {
					this.oBusy.close();
				}.bind(this),
			});
		},

        onBackNavBtnTitle: function (oEvent) {
            var oRouter = this.getOwnerComponent().getRouter();
            oRouter.navTo("home");
        }
	});
});