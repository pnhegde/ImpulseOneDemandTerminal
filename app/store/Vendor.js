Ext.define('ImpulseOne.store.Vendor', {
	extend: 'Ext.data.Store',
	model: 'ImpulseOne.model.Vendor',
	proxy: {
		type: 'ajax',
		url: 'data/vendor.json'
	}
});
