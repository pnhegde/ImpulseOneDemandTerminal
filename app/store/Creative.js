Ext.define('ImpulseOne.store.Creative', {
	extend: 'Ext.data.Store',
	model: 'ImpulseOne.model.Creative',
	proxy: {
		type: 'ajax',
		url: 'data/creative.json'
	}
});
