Ext.define('ImpulseOne.store.Data', {
	extend: 'Ext.data.Store',
	model: 'ImpulseOne.model.Data',
	buffered: true,
	//autoLoad: true,
	//autoSync: true,
	pageSize: 200,
	proxy: {
		type: 'ajax',
		api: {
			read: 'https://user.impulse01.com/newServer.php?do=list_all_segments',
			create: 'https://user.impulse01.com/newServer.php?do=create_new_segment',
			update: 'https://user.impulse01.com/newServer.php?do=edit_segment'
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
		},
		success: function(response, opts){
			Ext.example.msg('Hello');
			
		}
	},
	listeners: {
		write: function(store, operation) {
			var record = operation.records[0],
				name = Ext.String.capitalize(operation.action),
				verb;

			if(name == 'Destroy') {
				verb = 'Destroyed';
			} else {
				verb = name + 'd';
			}
			console.log(store);
			console.log(operation);
		}}
	});

