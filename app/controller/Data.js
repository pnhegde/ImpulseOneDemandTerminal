Ext.define('ImpulseOne.controller.Data', {
	extend: 'Ext.app.Controller',
	stores: ['Data'],
	models: ['Data'],
	views: ['data.DataGrid', 'data.GetCode', 'data.CreateAudienceGrp'],

	init: function() {
		this.getDataStore().load();
		this.control({
			'datagrid': {
				itemclick: this.enableButton
			},
			'datagrid #codeButton': {
				click: this.getCode
			},
			'datagrid #createNewButton': {
				click: this.activateNewAudienceGrp
			},
			'createaudiencegrp button[text="Create"]': {
				click: this.createNewAudienceGrp
			},
			'datagrid' : {
				edit: this.updateStore
			}
		});
	},
	enableButton: function(grid, record) {
		var button = Ext.getCmp('codeButton');
		if(button.disabled) {
			button.enable();
		}
	},
	getCode: function(button) {
		var getCodeWin = Ext.widget('getcode');
	},
	activateNewAudienceGrp: function(button) {
		Ext.widget('createaudiencegrp');
	},
	createNewAudienceGrp: function(button) {
		var win = button.up('window');
		form = win.down('form');
		record = form.getRecord();
		values = form.getValues();

		record = Ext.create('ImpulseOne.model.Data');
		record.set(values);
		this.getDataStore().add(record);
		this.getDataStore().sync();
		this.getDataStore().load();
		win.close();
	},
	updateStore: function(editor,e) {
		
		// this.getDataStore().add(e.record);
		this.getDataStore().sync();
		this.getDataStore().load();
	}
});