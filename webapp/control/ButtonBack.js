sap.ui.define([
	"sap/m/Button",
	"sap/m/ButtonRenderer",
	"sap/m/ButtonType"
], function (Button, ButtonRenderer, ButtonType) {
	"use strict";
	return Button.extend("sap.ui.demo.MyApp.ButtonBack", {
		metadata : {
			properties : {
				type: 	{Value : ButtonType, defaultValue : "Back"}
			}
		},
		init : function () {
		},
		renderer : ButtonRenderer,
		// type : "Back"
	});
});