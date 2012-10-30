Ext.define('ImpulseOne.store.Vendor', {
	extend: 'Ext.data.Store',
	model: 'ImpulseOne.model.Vendor',
	autoLoad: true,
	autoSync: true,
	pageSize: 50,
	proxy: {
		type: 'ajax',
		api: {
			read: 'https://user.impulse01.com/newServer.php?do=get_all_vendors',
			create: 'https://user.impulse01.com/newServer.php?do=create_new_vendor'
			//update: 'https://user.impulse01.com/newServer.php?do=edit_vendor'
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
			writeAllFields: false
		}
	}
});
