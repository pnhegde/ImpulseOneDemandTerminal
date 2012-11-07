Ext.define('ImpulseOne.store.Creative', {
	extend: 'Ext.data.Store',
	model: 'ImpulseOne.model.Creative',
	buffered: true,
	pageSize: 200,

	proxy: {
		type: 'ajax',
		api: {
			read: 'https://user.impulse01.com/newServer.php?do=get_all_creatives'
		},
		simpleSortMode: true,
		reader: {
			root: 'data',
			successProperty: 'success'
		}
	}
});
