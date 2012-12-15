Ext.define('ImpulseOne.store.Creative', {
	extend: 'Ext.data.Store',
	model: 'ImpulseOne.model.Creative',
	buffered: true,
	pageSize: 200,

	proxy: {
		type: 'ajax',
		api: {
			read: 'https://terminal.impulse01.com/newServer.php?do=get_all_creatives',
			create: 'https://terminal.impulse01.com/newServer.php?do=upload_tag_creative',
			update: 'https://terminal.impulse01.com/newServer.php?do=edit_creative'
		},
		simpleSortMode: true,
		reader: {
			type: 'json',
			successProperty: 'success',
			root: 'data',
			messageProperty: 'message'
		},
		writer: {
			type: 'json',
			writeAllFields: false,
			root: 'data'
		}
	}
});
