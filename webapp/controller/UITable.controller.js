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
				bEnableleButtonDeleteUITable = oJSONStateModel.getProperty("/EnableleButtonDeleteUITable");

			if (!bEnableleButtonDeleteUITable && aIndices.length > 0) {
				oJSONStateModel.setProperty("/EnableleButtonDeleteUITable", true);
			} else if (bEnableleButtonDeleteUITable && aIndices.length <= 0) {
				oJSONStateModel.setProperty("/EnableleButtonDeleteUITable", false);
			}			
		},

		onPressDeleteBtnUITable: function () {
			var aIndices = this.byId("MyTable").getSelectedIndices(),
				oJSONBufferModel_UITable = this.getOwnerComponent().getModel("JSONBufferModel_UITable"),
				aData = oJSONBufferModel_UITable.getProperty("/Products");

			if (aIndices.length > 0) {
				aIndices.forEach(function (element) {
					aData.splice(element, 1);
				});

				
				oJSONBufferModel_UITable.setProperty("/Products", aData);
			}

			this.byId("MyTable").clearSelection();
		}


	});
});