Ext.define('ImpulseOne.store.Data', {
	extend: 'Ext.data.Store',
	model: 'ImpulseOne.model.Data',
	proxy: {
		type: 'ajax',
		url: 'data/data.json'
	}
});
