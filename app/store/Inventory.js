Ext.define('ImpulseOne.store.Inventory', {
	extend: 'Ext.data.Store',
	model: 'ImpulseOne.model.Inventory',
	pageSize: 100,
	buffered: true,
	autoLoad: true,
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
	}

});

/*
Ext.define('ImpulseOne.store.Inventory', {
	extend: 'Ext.data.Store',
	model: 'ImpulseOne.model.Inventory',
	autoLoad: true,
	autoSync: true,
	pageSize: 200,
	remoteSort: true,
	buffered: true,
	proxy: {
		type: 'jsonp',
		url: 'https://user.impulse01.com/newServer.php?do=getInventory',
		reader: {
			successProperty: 'success',
			root: 'data',
			messageProperty: 'message'
		}
	},
	sorters: [{
		property: 'sourceId',
		direction: 'DESC'
	}],
});


*/