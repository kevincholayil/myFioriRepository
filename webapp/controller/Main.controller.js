sap.ui.define([
	"kvn/controller/Base",
	"kvn/model/model"
], function(Controller,myModel) {
	// "use strict";

	return Controller.extend("kvn.controller.Main", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf kvn.view.Main
		 */
			onInit: function() {
			// Sample Data
				// var oMyData = 
				var oModel = myModel.createJSONModel("model/mockData/myData.json");
				var oModelTwo = myModel.createJSONModel("model/mockData/myDataTwo.json");
			// 3. Map model object to the App/UI/View
				sap.ui.getCore().setModel(oModel);
				sap.ui.getCore().setModel(oModelTwo,"modelTwo");
				// oModelTwo.setDefault
			// Property Binding
				this.getView().byId("salary").bindValue("/empStr/salary");
				this.getView().byId("currency").bindProperty("value","/empStr/currency");
			},

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf kvn.view.Main
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf kvn.view.Main
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf kvn.view.Main
		 */
		//	onExit: function() {
		//
		//	}
			onDisable: function(){
				// alert("Welcome "+ this.getView().byId("name").getValue());
				var oModel = sap.ui.getCore().getModel();
				oModel.setProperty("/empStr/visible", false);
			},
			onEnable: function(){
				var oModel = sap.ui.getCore().getModel();
				oModel.setProperty("/empStr/visible", true);
			},
			onDataChange: function(){
				var oDefault = sap.ui.getCore().getModel();
				var oSecond = sap.ui.getCore().getModel("modelTwo");
				sap.ui.getCore().setModel(oSecond);
				sap.ui.getCore().setModel(oDefault,"modelTwo");
			}
	});

});