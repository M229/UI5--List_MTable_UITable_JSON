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
        },

		onPressNavBtnMTable: function (oEvent) {
            var oRouter = this.getOwnerComponent().getRouter();
            oRouter.navTo("mTable");
        },

		onPressNavBtnUITable: function (oEvent) {
            var oRouter = this.getOwnerComponent().getRouter();
            oRouter.navTo("uiTable");
        }
		
	});
});