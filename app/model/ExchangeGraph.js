Ext.define('ImpulseOne.model.ExchangeGraph', {
	extend: 'Ext.data.Model',
	fields: [{
		name: 'impressions',
		type: 'int'
	}, 'exchange',
	{
		name: 'clicks',
		type: 'int'
	}, 'spend'],
	proxy: {
		type: 'ajax',
		api: {
			read: ' https://terminal.impulse01.com/newServer.php?do=get_exchange_data'
		},
		reader: {
			root: 'data',
			type: 'json',
			successProperty: 'success',
		},
	}
});