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
				click: this.createNewVendor
			}
		});
	},
	createNewVendor: function() {
		Ext.widget('createvendor');
	}
});
