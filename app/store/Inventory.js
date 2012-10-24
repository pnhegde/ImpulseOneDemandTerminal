Ext.define('ImpulseOne.store.Inventory', {
	extend: 'Ext.data.Store',
	model: 'ImpulseOne.model.Inventory',
	proxy: {
		type: 'ajax',
		url: 'data/inventory.json'
	}
});
