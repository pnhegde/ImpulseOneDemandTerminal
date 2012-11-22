Ext.define('ImpulseOne.controller.EditCampaignWindows', {
	extend: 'Ext.app.Controller',
	views: ['trafficking.EditCampaignWindow'],
	init: function() {
		this.control({
			'editcampaignwindow': {
				beforeshow: this.updateTabs
			}
		});
	},
	updateTabs: function(window) {
	}
});