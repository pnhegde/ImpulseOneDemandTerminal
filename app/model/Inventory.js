Ext.define('ImpulseOne.model.Inventory',{
	extend: 'Ext.data.Model',
	fields: ['sourceId','domain','category','channel',{name: 'todayImpressions', type: 'int'},
	'averageCpm','exchange','country','manuallyVerified','averageDailyImpressions','historicalCpm','todayAverage']
});
