Ext.define('ImpulseOne.controller.Vendors', {
	extend: 'Ext.app.Controller',
	stores: ['Vendor'],
	models:['Vendor'],
	views: ['vendor.VendorGrid','vendor.CreateVendor'],

	init: function() {
		this.getVendorStore().load();
		this.control(
		{
			'vendorgrid #createNewVendor': {
				click: this.createVendor
			},
			'createvendor button[text="Create"]' : {
				click: this.createNewVendor
			}
		});
	},
	createVendor: function() {
		Ext.widget('createvendor');
	},
	createNewVendor: function(button) {
		var win    = button.up('window');
		form   = win.down('form');
		record = form.getRecord();
		values = form.getValues();
		var novo = false;

		if (values.id > 0){
			record.set(values);
		} else{
			record = Ext.create('ImpulseOne.model.Vendor');
			record.set(values);
			this.getVendorStore().add(record);
			novo = true;
		}

		win.close();
		this.getVendorStore().sync();

		if (novo){ 
			this.getVendorStore().load();
		}

	}
});
