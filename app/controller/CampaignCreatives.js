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
			},
			'campaigncreativewindow actioncolumn': {
				click: this.showPreview
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
			url: 'https://terminal.impulse01.com/newServer.php?do=save_campaign_creatives',
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
	},
	showPreview: function(view, cell, row, col, e) {
		var record = this.getCampaignCreativeStore().getAt(row);
		if(Ext.get(e.getTarget()).hasCls('icon-preview')) {
			var p = record.data['filePath'];
			var htmlContent;
			var filePath = "https://terminal.impulse01.com/" + p;
			var w = record.data['width'];
			w = parseInt(w);
			if(w > 1200) {
				w = 1200;
			}
			if(w < 160) {
				if(w == 0) {
					w = 600;
				} else {
					w = 160;
				}
			}
			var h = record.data['height'];
			h = parseInt(h);
			if(h > 650) {
				h = 650;
			}
			if(h < 60) {
				if(h == 0) {
					h = 400;
				} else {
					h = 60;
				}
			}
			if(record.data['creativeType'] == "Flash Video") {
				htmlContent = '<iframe src="https://terminal.impulse01.com/previewflash.php?width='+w+'&height='+h+'&path='+p+'" width="'+ w+'" height="'+h+'" frameborder=0 marginwidth=0 marginheight=0 scrolling=NO></iframe>';
			} else if(record.data['creativeType'] == "Flash") {
				htmlContent = '<iframe src="https://terminal.impulse01.com/previewflash.php?width='+w+'&height='+h+'&path='+p+'" width="'+ w+'" height="'+h+'" frameborder=0 marginwidth=0 marginheight=0 scrolling=NO></iframe>';
			} else if(record.data['creativeType'] == "Image") {
				htmlContent = "<image src=\'" + filePath + " \' />";
			} else {
				htmlContent = record.data['tagCode'];
			}
			w = w + 10;
			h = h + 30;
			Ext.create('Ext.window.Window', {
				autoShow: true,
				modal: true,
				width: w,
				height: h,
				border: false,
				html: htmlContent

			});
		} 
	}
});