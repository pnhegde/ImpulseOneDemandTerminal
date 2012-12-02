Ext.define('ImpulseOne.store.Inventory', {
	extend: 'Ext.data.Store',
	model: 'ImpulseOne.model.Inventory',
	pageSize: 100,
	buffered: true,
	autoLoad: true,
	remoteSort: true,
	remoteFilter: true,
	loadMask: true,
	proxy: {
		type: 'ajax',
		api: {
			read: 'https://user.impulse01.com/newServer.php?do=getInventory'
		},
		reader: {
			root: 'data',
			type: 'json',
			successProperty: 'success',
			totalProperty: 'totalCount'
		},
		simpleSortMode: true
	},
	//sortInfo: { field: 'impressions', direction: 'ASC' }
	sorters: [{
		property: "todayImpressions",
		direction: "DESC"
	}]

});

