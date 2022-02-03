sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/Device",
	"sap/m/BusyDialog",
	"sap/ui/model/json/JSONModel",
	"./model/models",
	"sap/ui/model/Filter"
], function (UIComponent, Device, BusyDialog, JSONModel, models, Filter) {
	"use strict";

	return UIComponent.extend("sap.ui.demo.MyApp.Component", {

		metadata: {
			manifest: "json"
		},

		/**
		 * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
		 * @public
		 * @override
		 */
		init: function () {
			// call the base component's init function
			UIComponent.prototype.init.apply(this, arguments);

			// create the views based on the url/hash
			this.getRouter().initialize();

			// set the device model
			this.setModel(models.createDeviceModel(), "device");

			var oJSONStateModel = this.getModel("JSONStateModel");
			oJSONStateModel.setProperty("/State", "Default");
			oJSONStateModel.setProperty("/SwitchDeleteListItem", false);
			oJSONStateModel.setProperty("/SwitchDeleteMTable", false);
			oJSONStateModel.setProperty("/SwitchDeleteUITable", false);
			oJSONStateModel.setProperty("/EnableleButtonDeleteUITable", false);

			var oJSONODataModel = this.getModel("JSONODataModel");
			var oJSONBufferModel_ListItem = this.getModel("JSONBufferModel_ListItem");
			var oJSONBufferModel_MTable = this.getModel("JSONBufferModel_MTable");
			var oJSONBufferModel_UITable = this.getModel("JSONBufferModel_UITable");
			var oODataModel = this.getModel("ODataNorthwindModel");
			
			oJSONStateModel.setProperty("/State", "Reading");

			oODataModel.read("/Products", {
				// filters: [
				// 	new Filter("ProductName", "EQ", "Chai")
				// ],
				success: function (oData) {
					oJSONODataModel = oData.results;
					oJSONBufferModel_ListItem.setProperty("/Products", JSONOData.slice());
					oJSONBufferModel_MTable.setProperty("/Products", JSONOData.slice());
					oJSONBufferModel_UITable.setProperty("/Products", JSONOData.slice());
					oJSONStateModel.setProperty("/State", "Done");
					
				}.bind(this),
				error: function () {
					oJSONStateModel.setProperty("/State", "Done");
				}.bind(this),
			});
		},

		getContentDensityClass: function () {
			if (!this._sContentDensityClass) {
				if (!Device.support.touch) {
					this._sContentDensityClass = "sapUiSizeCompact";
				} else {
					this._sContentDensityClass = "sapUiSizeCozy";
				}
			}
			return this._sContentDensityClass;
		}
	});
});