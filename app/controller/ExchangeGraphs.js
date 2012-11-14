Ext.define('ImpulseOne.controller.ExchangeGraphs', {
	extend: 'Ext.app.Controller',
	stores: ['ExchangeGraph'],
	models: ['ExchangeGraph'],
	views: ['dashboard.TopExchangeGraph'],

	init: function() {
		exchangegraphStore = this.getExchangeGraphStore();

	}
});