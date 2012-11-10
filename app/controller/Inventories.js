Ext.define('ImpulseOne.controller.Inventories', {
	extend: 'Ext.app.Controller',
	stores: ['Inventory'],
	models: ['Inventory'],
	views: ['inventory.InventoryGrid'],

	init: function() {
		inventoryStore = this.getInventoryStore();
		//inventoryStore.load();
		//inventoryStore.guaranteeRange(0, 99);

		// params: {
		// 	start: 0,
		// 	limit: 50,
		// 	channel: 'MobileWeb'
		// }
		//store.load();
		// inventoryStore.prefetch({
		// 	start: 0,
		// 	limit: 100,
		// 	callback: function() {
		// 		inventoryStore.guaranteeRange(0, 99);
		// 	}
		// });
		this.control({
			'inventorygrid': {
				itemdblclick: this.editUser
			},
			'inventorygrid #applySearch': {
				click: this.applyFilter
			}
		});
	},
	editUser: function(grid, record) {
		console.log('Double clicked on ' + record.get('name'));
	},
	applyFilter: function(button) {
		inventoryStore.load({
			params: {
				channel: Ext.getCmp('ChannelFilter').getValue(),
				filter: Ext.getCmp('DomainFilter').getValue(),
				exchange: Ext.getCmp('ExchangeFilter').getValue(),
				category: Ext.getCmp('CategoryFilter').getValue()
			}
		});
		console.log('clicked');
	}
});