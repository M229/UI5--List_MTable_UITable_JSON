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

		},

        onBackNavBtnTitle: function (oEvent) {
            var oRouter = this.getOwnerComponent().getRouter();
            oRouter.navTo("home");
        }
	});
});