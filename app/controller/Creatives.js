Ext.define('ImpulseOne.controller.Creatives', {
	extend: 'Ext.app.Controller',
	stores: ['Creative'],
	models: ['Creative'],
	views: ['creative.CreativeGrid', 'creative.HtmlCreative', 'creative.UploadCreative'],

	init: function() {
		allCreativeStore = this.getCreativeStore();
		allCreativeStore.load();
		this.control({
			'creativegrid button menu #htmlcreative': {
				click: this.newHtmlCreativeSelected
			},
			'creativegrid button menu #creativeupload': {
				click: this.creativeUpload
			},
			'creativegrid': {
				itemclick: this.enableEdit
			},
			'creativegrid actioncolumn': {
				click: this.showPreview
			},
			'creativegrid button[text="Edit"]': {
				click: this.editHtmlCreative
			},
			'htmlcreative button[text="Save"]': {
				click: this.newHtmlCreative
			},
			// 'uploadcreative button[action=upload]': {
			// 	click: this.submitFileupload
			// },
			'creativegrid checkboxfield': {
				'change': this.toggleArchive
			}
		});

	},
	newHtmlCreativeSelected: function() {
		Ext.widget('htmlcreative').show();
	},
	enableEdit: function(grid, row) {
		var b = Ext.getCmp('HtmlEditButton');
		if(row.data['creativeType'] == "HTML Tag" && b.disabled) {
			b.enable();
		}
	},
	toggleArchive: function(thischeckbox, newValue, oldValue) {
		allCreativeStore.load({
			params: {
				showArchive: newValue
			}
		});
},
editHtmlCreative: function(button) {
	var me = this;
	var w = Ext.create('Ext.window.Window', {
		title: 'Edit HTML Creative',
		width: 300,
		height: 200,
		autoShow: true,
		modal: true,
		layout: 'fit',
		border: false,
		closable: false,
		bodyPadding: 10,
		items: [{
			xtype: 'form',
			layout: 'anchor',
			defaults: {
				anchor: '100%'
			},
			items: [{
				xtype: 'textarea',
				name: 'tagCode',
					//value: button.up('creativegrid').getSelectionModel().getSelection()[0].data['tagCode']
				}],
				buttons: [{
					text: 'Save',
					action: 'saveHtml',
					handler: function(button) {
						var wi = button.up('window');
						var form1 = wi.down('form');
						var record1 = form1.getRecord();
						var values1 = form1.getForm().getValues();
						record1.set(values1);
						console.log(record1);
						me.getCreativeStore().sync();
						me.getCreativeStore().load();
						wi.close();
					}
				}, {
					text: 'Cancel',
					scope: this,
					handler: function() {
						w.close();
					}
				}]
			}]
		});
	w.show();
	w.down('form').getForm().loadRecord(button.up('creativegrid').getSelectionModel().getSelection()[0]);

},
creativeUpload: function() {
		//Ext.widget('uploadcreative').show();
		var uploadDialog = Ext.create('Ext.ux.upload.Dialog', {
			dialogTitle: 'creative Upload',
			uploadUrl: 'https://terminal.impulse01.com/newServer.php?do=upload_new_creative',
			listeners: {
				'uploadcomplete': function(upDialog, manager, items, errorCount) {
					if(!errorCount) {
						upDialog.close();
					}
					allCreativeStore.load();
				}
			}
		});
		uploadDialog.show();
	},
	newHtmlCreative: function(button) {
		var win = button.up('window');
		var form = win.down('form');
		var record = form.getRecord();
		var values = form.getValues();

		record = Ext.create('ImpulseOne.model.Creative');
		record.set(values);
		this.getCreativeStore().add(record);
		this.getCreativeStore().sync();
		this.getCreativeStore().load();
		win.close();
	},
	showPreview: function(view, cell, row, col, e) {
		//var grid = button.up('creativegrid');
		var record = this.getCreativeStore().getAt(row);
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
				// layout: 'fit',
				modal: true,
				width: w,
				height: h,
				border: false,
				html: htmlContent

			});
		} else if(Ext.get(e.getTarget()).hasCls('icon-archive')) {
			if(record.data['status'] == 'Archived') {
				Ext.example.msg("Already Archived", "Cannot archive twice !");
			} else {
				Ext.Ajax.request({
					url: 'https://terminal.impulse01.com/newServer.php?do=archive_creative',
					params: {
						creativeId: record.data['creativeId']
					},
					success: function(response) {
						if(JSON.parse(response.responseText).success) {
							Ext.example.msg("Archive", "Successful !");
							allCreativeStore.load();
						} else {
							Ext.example.msg("Archive", "Fail !");
						}
					}
				});
			}

		}

	},
	/*submitFileupload: function(button) {
		form = Ext.getCmp('uploadCreative').down('form');
		form.getForm().submit({
			url: 'https://terminal.impulse01.com/newServer.php?do=upload_new_creative',
			submitEmptyText: false,
			waitMsg: 'Saving Data...',

			success: function(form, action) {
				button.up('window').close();
				//Ext.example.msg('success');
				console.log('uploaded successfully');
				allCreativeStore.load();
			},
			failure: function(form, action) {
				Ext.Msg.alert('Failed', action.result ? action.result.msg : 'No response');
				button.up('window').close();
			}
		});
}*/
});