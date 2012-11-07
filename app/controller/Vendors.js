Ext.define('ImpulseOne.controller.Vendors', {
	extend: 'Ext.app.Controller',
	stores: ['Vendor'],
	models: ['Vendor'],
	views: ['vendor.VendorGrid', 'vendor.CreateVendor', 'vendor.EditVendor'],

	init: function() {
		this.getVendorStore().load();
		this.control({
			'vendorgrid #createNewVendor': {
				click: this.createVendor
			},
			'vendorgrid': {
				itemclick: this.enableButtons
			},
			'vendorgrid #editVendor': {
				click: this.editVendor
			},
			'createvendor button[text="Save"]': {
				click: this.createNewVendor
			},
			'editvendor button[text="Apply"]': {
				click: this.editVendorApply
			}

		});
	},
	createVendor: function() {
		Ext.widget('createvendor');
	},
	enableButtons: function(grid, record) {
		editButton = Ext.getCmp('editVendor');
		archiveButton = Ext.getCmp('archiveVendor');
		if(editButton.disabled && archiveButton.disabled) {
			editButton.enable();
			archiveButton.enable();
		}
	},
	createNewVendor: function(button) {
		var win = button.up('window');
		form = win.down('form');
		record = form.getRecord();
		values = form.getValues();

		record = Ext.create('ImpulseOne.model.Vendor');
		record.set(values);
		this.getVendorStore().add(record);

		this.getVendorStore().sync();
		this.getVendorStore().load();
		win.close();
	},
	editVendor: function(button) {

		var grid = button.up('vendorgrid');
		var record = grid.getSelectionModel().getSelection()[0];
		w = Ext.create('ImpulseOne.view.vendor.EditVendor').show();
		f = w.down('form');
		f.getForm().loadRecord(record);
	},
	editVendorApply: function(button) {
		wi = button.up('window');
		form1 = wi.down('form');
		record1 = form1.getRecord();
		values1 = form1.getForm().getValues();
		record1.set(values1);

		this.getVendorStore().sync();
		this.getVendorStore().load();
		wi.close();
	}
});