sap.ui.define([
	"./BaseController",
	"../model/formatter"

], function(BaseController, formatter) {
	"use strict";

	return BaseController.extend("sap.ui.demo.MyApp.controller.MTable", {

		formatter: formatter,

		onInit: function () {

		},

        onBackNavBtnTitle: function (oEvent) {
            var oRouter = this.getOwnerComponent().getRouter();
            oRouter.navTo("home");
        },

		onPressCrossBtnListBase: function (oEvent) {
			var sBindingPath = oEvent.getParameter("listItem").getBindingContextPath(),
				sModelName = oEvent.getSource().getBindingInfo("items").model,
				oJSONBufferModel = this.getOwnerComponent().getModel(sModelName),
				oJSONStateModel = this.getOwnerComponent().getModel("JSONStateModel"),
				aProducts = oJSONBufferModel.getProperty("/Products"),
				aBindingPath = sBindingPath.split("/"),
				dPosition = +aBindingPath[aBindingPath.length - 1];
				
				aProducts.splice(dPosition, 1);

				oJSONBufferModel.setProperty("/Products", aProducts);
				oJSONStateModel.setProperty("/isBufferModelChanged", true);

		}


	});
});