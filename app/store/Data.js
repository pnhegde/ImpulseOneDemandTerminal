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
			read: 'https://terminal.impulse01.com/newServer.php?do=list_all_segments',
			create: 'https://terminal.impulse01.com/newServer.php?do=create_new_segment',
			update: 'https://terminal.impulse01.com/newServer.php?do=edit_segment'
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
	},
	onCreateRecords:function (records, operation, success) {
		if(success && (operation.response['status'] == 200)) {
			Ext.example.msg("Create","Successfully Created !");	
		}
		else if(!success && (operation.response['status'] == 200)) {
			Ext.example.msg("Create","Create Error");	
		}
		else if( operation.response['status'] != 200) {
			Ext.example.msg('Error','Server Error. Try again');
		} else if( operation.response['status'] == 401) {
			Ext.example.msg('Session Expired','Please login again');
			Ext.ComponentQuery.query('viewport #login')[0].fireEvent('click');
		} 
   },

    onUpdateRecords:function (records, operation, success) {
    	if(success) {
    		Ext.example.msg("Update","Successfully Updated !");	
    	}
    	else if(!success && (operation.response['status'] == 200)) {
			Ext.example.msg("Update","Update Error");	
		}
		else if( operation.response['status'] != 200) {
			Ext.example.msg('Error','Server Error. Try again');
		} else if( operation.response['status'] == 401) {
			Ext.example.msg('Session Expired','Please login again');
			Ext.ComponentQuery.query('viewport #login')[0].fireEvent('click');
		}
    	
    },
	// listeners: {
	// 	write: function(store, operation) {
	// 		if (operation.response['status'] == 200) {
	// 			//Ext.example.msg('success');
	// 			console.log(operation.response['responseText']);
	// 		}
	// 		console.log(operation);
	// 	},
	// 	read: function(store, opts){
	// 		//Ext.example.msg('Hello');
	// 		console.log(opts);
			
	// 	}
 //    }
});

