Ext.define('ImpulseOne.controller.ExchangeGraphs', {
	extend: 'Ext.app.Controller',
	stores: ['ExchangeGraph'],
	models: ['ExchangeGraph'],
	views: ['dashboard.TopExchangeGraph'],

	init: function() {
		exchangegraphStore = this.getExchangeGraphStore();
		this.control({
			'topexchangegraph #exchangegrid' : {
				selectionchange: this.highlightChart
			}
		});
	},
	highlightChart: function(model,record) {
		console.log('clicked');
		var series =  Ext.getCmp('topexchangegraph #exchangelinechart')[0].series.get(0);
		console.log(series);
		series.highlight = true;
	}
});