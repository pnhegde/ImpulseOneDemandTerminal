Ext.define('ImpulseOne.store.Inventory', {
	extend: 'Ext.data.Store',
	model: 'ImpulseOne.model.Inventory',
	buffered: true,
	remoteSort: true,
	pageSize: 200,
	proxy: {
		type: 'ajax',
		// buildRequest: function(operation) {
		// 	request = this.callParent(arguments);
		// 	console.log(request);
		// 	request.jsonData = request.params;
		// 	delete request.params;
		// 	return request;
		// },
		api: {
			read: 'https://user.impulse01.com/newServer.php?do=getInventory'
		},
		simpleSortMode: true,
		reader: {
			root: 'data',
			successProperty: 'success'
		}
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