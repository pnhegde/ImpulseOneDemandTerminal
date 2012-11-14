Ext.define('ImpulseOne.controller.CampaignGraphs', {
	extend: 'Ext.app.Controller',
	stores: ['CampaignGraph'],
	models: ['CampaignGraph'],
	views: ['dashboard.TopCampaignGraph'],

	init: function() {
		campaigngraphStore = this.getCampaignGraphStore();

	}
});