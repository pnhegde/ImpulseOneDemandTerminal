Ext.define('ImpulseOne.controller.CampaignCreatives', {
	extend: 'Ext.app.Controller',
	models: ['CampaignCreative'],
	stores: ['CampaignCreative'],
	views: ['trafficking.CampaignCreativeWindow'],

	init: function() {
		var oldSel = [];
		this.control({
			'campaigncreativewindow button[action="save"]': {
				click: this.saveCreatives
			},
			'campaigncreativewindow gridpanel': {
				edit: this.updateStore
			},
			'campaigncreativewindow gridpanel' : {
				beforeedit: this.saveSelections
			}
		});
	},
	saveCreatives: function(button) {

		var camId = Ext.ComponentQuery.query('traffichome dynamicGrid')[0].getSelectionModel().getSelection()[0].data['Campaign Id'];
		var win = button.up('window');
		var selCreatives = win.down('gridpanel').getSelectionModel().getSelection();
		var selCrtId = "";
		Ext.each(selCreatives, function(row) {
			selCrtId = selCrtId + "," + row.data['creativeId'];
		});
		this.getCampaignCreativeStore().getProxy().extraParams = {
			campaignId: camId
		};
		this.getCampaignCreativeStore().sync();
		Ext.Ajax.request({
			url: 'https://user.impulse01.com/newServer.php?do=save_campaign_creatives',
			params: {
				creatives: selCrtId,
				campaignId: camId
			},
			success: function(response) {
				win.close();
			}
		});
	},
	updateStore: function(editor, e) {
		console.log(e);
		Ext.getCmp('campaigncreativeid').down('gridpanel').getSelectionModel().select(oldSel);
	},
	saveSelections: function(editor,e) {
		oldSel = Ext.getCmp('campaigncreativeid').down('gridpanel').getSelectionModel().getSelection();

	}
});