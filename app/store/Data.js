Ext.define('ImpulseOne.store.Data', {
	extend: 'Ext.data.Store',
	model: 'ImpulseOne.model.Data',
	autoLoad: true,
	pageSize: 15,
	autoLoad: {start: 0, limit: 15},
	proxy: {
		type: 'ajax',
		url: 'https://user.impulse01.com/ImpulseOneDemandTerminal/data/data.json'
	}
});
