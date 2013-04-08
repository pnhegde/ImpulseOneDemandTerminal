Ext.define('ImpulseOne.controller.Inventories', {
	extend: 'Ext.app.Controller',
	stores: ['Inventory'],
	models: ['Inventory'],
	views: ['inventory.InventoryGrid'],

	init: function() {
		inventoryStore = this.getInventoryStore();
		//inventoryStore.pageMap.clear();
		//inventoryStore.loadPage(1);
		//inventoryStore.guaranteeRange(0, 99);
		// inventoryStore.prefetch({
		// 	start: 0,
		// 	limit: 100,
		// 	callback: function() {
		// 		inventoryStore.guaranteeRange(0, 99);
		// 	}
		// });
		this.control({
			'inventorygrid': {
				itemdblclick: this.showDetails
			},
			'inventorygrid #applySearch': {
				click: this.applyFilter
			},

		});
	},
	showDetails: function(grid, record) {
		console.log(record);
		Ext.create('Ext.window.Window', {
			autoShow: true,
			modal: true,
			width: 400,
			height: 300,
			border: false,
			html: '<h3> Coming soon !</h3>'
		});
	},
	applyFilter: function(button) {
		inventoryStore.getProxy().extraParams = {
			channel: Ext.getCmp('ChannelFilter').getValue(),
			filter: Ext.getCmp('DomainFilter').getValue(),
			exchange: Ext.getCmp('ExchangeFilter').getValue(),
			category: Ext.getCmp('CategoryFilter').getValue(),
			country: Ext.getCmp('CountryFilter').getValue()
		};
	// inventoryStore.prefetchData.clear();
	inventoryStore.load({
		params: {
			channel: Ext.getCmp('ChannelFilter').getValue(),
			filter: Ext.getCmp('DomainFilter').getValue(),
			exchange: Ext.getCmp('ExchangeFilter').getValue(),
			category: Ext.getCmp('CategoryFilter').getValue(),
			country: Ext.getCmp('CountryFilter').getValue()
		}
	});
}
});