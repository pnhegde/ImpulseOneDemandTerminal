Ext.define('ImpulseOne.model.Inventory',{
	extend: 'Ext.data.Model',
	fields: ['sourceId','domain','category','channel',{name: 'impressions', type: 'int'},
	'cpm','exchange','country','date_added','manuallyVerified']
});
