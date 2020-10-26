sap.ui.define(
	["sap/ui/model/json/JSONModel"],
	function(JSONModel) {
		return {
			createJSONModel: function(oModelPath) {
				// 1. Create Model Object
				var oModel = new JSONModel();
				// 2. Set Data to Model Object
				oModel.loadData(oModelPath);
				return oModel;
			}
		};
	});