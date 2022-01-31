sap.ui.define([
	"./BaseController",
	"../model/formatter"
], function(BaseController, formatter) {
	"use strict";

	return BaseController.extend("sap.ui.demo.MyApp.controller.UITable", {

		formatter: formatter,

		onInit: function () {
			var i = 0;
		},

        onBackNavBtnTitle: function (oEvent) {
            var oRouter = this.getOwnerComponent().getRouter();
            oRouter.navTo("home");
        }
	});
});