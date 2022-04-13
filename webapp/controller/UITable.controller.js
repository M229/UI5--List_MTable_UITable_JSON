sap.ui.define([
	"./BaseController",
	"../model/formatter",
	"sap/m/MessageToast"
], function(BaseController, formatter, MessageToast) {
	"use strict";

	return BaseController.extend("sap.ui.demo.MyApp.controller.UITable", {

		formatter: formatter,

		onInit: function () {
			var i = 0;
		},

        onBackNavBtnTitle: function (oEvent) {
            var oRouter = this.getOwnerComponent().getRouter();
            oRouter.navTo("home");
        },

		onRowSelectionChange: function () {
			var aIndices = this.byId("MyTable").getSelectedIndices(),
				oJSONStateModel = this.getOwnerComponent().getModel("JSONStateModel"),
				bIsButtonDeleteUITableEnabled = oJSONStateModel.getProperty("/isButtonDeleteUITableEnabled");

			if (!bIsButtonDeleteUITableEnabled && aIndices.length > 0) {
				oJSONStateModel.setProperty("/isButtonDeleteUITableEnabled", true);
			} else if (bIsButtonDeleteUITableEnabled && aIndices.length <= 0) {
				oJSONStateModel.setProperty("/isButtonDeleteUITableEnabled", false);
			}			
		},

		onPressDeleteBtnUITable: function () {
			var aIndices = this.byId("MyTable").getSelectedIndices(),
				oJSONBufferModel_UITable = this.getOwnerComponent().getModel("JSONBufferModel_UITable"),
				aData = oJSONBufferModel_UITable.getProperty("/Products"),
				oJSONStateModel = this.getOwnerComponent().getModel("JSONStateModel");
				

			if (aIndices.length > 0) {
				aIndices.forEach(function (element) {
					aData[element] = {};
				});

				aData = aData.filter(value => Object.keys(value).length !== 0);
				oJSONBufferModel_UITable.setProperty("/Products", aData);
				oJSONStateModel.setProperty("/isBufferModelChanged", true);
			}

			this.byId("MyTable").clearSelection();
		}
	});
});