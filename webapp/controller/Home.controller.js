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
            this.resetSwitchState();
			oRouter.navTo("listItem");
        },

		onPressNavBtnMTable: function (oEvent) {
            var oRouter = this.getOwnerComponent().getRouter();
			this.resetSwitchState();
            oRouter.navTo("mTable");
        },

		onPressNavBtnUITable: function (oEvent) {
            var oRouter = this.getOwnerComponent().getRouter();
			this.resetSwitchState();
            oRouter.navTo("uiTable");
        },
		
		onPressRstBtn: function (oEvent) {
			this.setBufferModelsFromOdata();
		}


		
	});
});