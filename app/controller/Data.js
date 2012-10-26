Ext.define('ImpulseOne.controller.Data', {
	extend: 'Ext.app.Controller',
	stores: ['Data'],
	models:['Data'],
	views: ['data.DataGrid','data.GetCode','data.CreateAudienceGrp'],

	init: function() {
		this.getDataStore().load();
		this.control(
		{
			'datagrid': {
				itemclick: this.enableButton 
			},
			'datagrid #codeButton' : {
				click: this.getCode
			},
			'datagrid #createNewButton' : {
				click: this.createNewAudienceGrp 
			}
		});
	},
	enableButton : function(grid, record) {
		var button = Ext.getCmp('codeButton');
		if (button.disabled){
			button.enable();
		}	
	},
	getCode : function() {
		var getCodeWin = Ext.widget('getcode');
	},
	createNewAudienceGrp : function() {
		Ext.widget('createaudiencegrp');
	} 
});
