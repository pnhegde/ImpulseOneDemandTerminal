Ext.define('ImpulseOne.controller.Inventories', {
	extend: 'Ext.app.Controller',
	stores: ['Inventory'],
	models:['Inventory'],
	views: ['inventory.InventoryGrid'],

	init: function() {
		this.getInventoryStore().load();
		this.control(
		{
			'inventortgrid': {
				itemdblclick: this.editUser 
			}
		});
	},
	editUser: function(grid, record) {
		console.log('Double clicked on ' + record.get('name'));
	}
});
