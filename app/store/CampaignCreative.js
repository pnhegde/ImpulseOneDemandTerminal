Ext.define('ImpulseOne.store.CampaignCreative', {
	extend: 'Ext.data.Store',
	model: 'ImpulseOne.model.CampaignCreative',
	buffered: true,
	pageSize: 200,
	loadMask: true,
	proxy: {
		type: 'ajax',
		api: {
			read: 'https://user.impulse01.com/newServer.php?do=get_campaign_creatives',
			update: 'https://user.impulse01.com/newServer.php?do=edit_destination_url'
		},
		simpleSortMode: true,
		reader: {
			type: 'json',
			successProperty: 'success',
			root: 'data',
		},
		writer: {
			type: 'json',
			writeAllFields: false,
			allowSingle : false,
			root: 'data'
		}
	}
});
