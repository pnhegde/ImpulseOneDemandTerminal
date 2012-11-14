Ext.define('ImpulseOne.model.CampaignGraph', {
	extend: 'Ext.data.Model',
	fields: [{
		name: 'impressions',
		type: 'int'
	}, 'campaign',
	{
		name: 'clicks',
		type: 'int'
	}, 'spend'],
	proxy: {
		type: 'ajax',
		api: {
			read: ' https://user.impulse01.com/newServer.php?do=get_campaign_data'
		},
		reader: {
			root: 'data',
			type: 'json',
			successProperty: 'success',
		},
	}
});