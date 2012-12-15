Ext.define('ImpulseOne.store.Vendor', {
	extend: 'Ext.data.Store',
	model: 'ImpulseOne.model.Vendor',
	buffered: true,
	//autoLoad: true,
	//autoSync: true,
	pageSize: 200,
	//autoLoad: {start: 0, limit: 200},
	proxy: {
		type: 'ajax',
		api: {
			read: 'https://terminal.impulse01.com/newServer.php?do=get_all_vendors',
			create: 'https://terminal.impulse01.com/newServer.php?do=create_new_vendor',
			update: 'https://terminal.impulse01.com/newServer.php?do=edit_vendor'
			//destroy: 'app.php/users/destroy'
		},
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