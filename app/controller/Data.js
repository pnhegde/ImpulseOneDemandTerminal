Ext.define('ImpulseOne.controller.Data', {
	extend: 'Ext.app.Controller',
	stores: ['Data'],
	models: ['Data'],
	views: ['data.DataGrid', 'data.GetCode', 'data.CreateAudienceGrp'],

	init: function() {
		this.getDataStore().load();
		this.control({
			'datagrid': {
				itemclick: this.enableButton,
				edit: this.updateStore
			},
			'datagrid #codeButton': {
				click: this.getCode
			},
			'datagrid #createNewButton': {
				click: this.activateNewAudienceGrp
			},
			'createaudiencegrp button[text="Create"]': {
				click: this.createNewAudienceGrp
			}
		});
	},
	enableButton: function(grid, record) {
		var button = Ext.ComponentQuery.query('datagrid #codeButton')[0];
		if(button.disabled) {
			button.enable();
		}
	},
	getCode: function(button) {
		var id = button.up('datagrid').getSelectionModel().getSelection()[0].data['id'];
		var getCodeWin = Ext.widget('getcode');
		getCodeWin.down('textarea').setValue('<script src="http://rtbidder.impulse01.com/segment?group='+id+'"></script>');
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