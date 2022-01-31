sap.ui.define([
	"sap/ui/core/mvc/Controller",
    "sap/ui/model/odata/v2/ODataModel",
	"../model/formatter"
], function(Controller, formatter) {
	"use strict";

	return Controller.extend("sap.ui.demo.MyApp.controller.BaseController", {
		
		formatter: formatter,

		onInit: function () {

		},

	});
});