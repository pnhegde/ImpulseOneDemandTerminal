Ext.define('ImpulseOne.model.Campaign', {
	extend: 'Ext.data.Model',
	fields: [{
		name: 'campaignId',
		type: 'int'
	},{
		name: 'planId',
		type: 'int'
	},{
		name: 'campaignName',
		type: 'string'
	}, 'destinationUrl', 'status', 'channel',
	'strategy','bidCpm','dailyBudget','totalBudget',
	'paceType','currentPacing','startDate','endDate',
	'timezone','goalType','goalValue','frequencyTimes',
	'frequencyHours','countryTargets','stateTargets',
	'carrierTargets','osTargets','creatives',
	'audienceTargets','dayParts','contextTargets',
	'list','listMobileApp','clickWindow','viewWindow'],
	proxy: {
		type: 'ajax',
		api: {
			read: ' https://user.impulse01.com/newServer.php?do=get_campaign',
			update: 'https://user.impulse01.com/newServer.php?do=update_campaign'
		},
		reader: {
			root: 'data',
			type: 'json',
			successProperty: 'success',
		},
		writer: {
			type: 'json',
			writeAllFields: false,
			root: 'data'
		}
	},
	idProperty: 'campaignId'
});