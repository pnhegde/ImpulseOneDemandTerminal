Ext.define('ImpulseOne.controller.Creatives', {
	extend: 'Ext.app.Controller',
	stores: ['Creative'],
	models: ['Creative'],
	views: ['creative.CreativeGrid', 'creative.HtmlCreative', 'creative.UploadCreative'],

	init: function() {
		store = this.getCreativeStore();
		store.load({
			callback: function(results, options) {
				if(options.response.status == 401) {
					Ext.example.msg('Session expired');
					window.location = 'index.html';
				}
			}
		});
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
			'uploadcreative button[action=upload]': {
				click: this.submitFileupload
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
			console.log(row);
		}
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
		Ext.widget('uploadcreative').show();
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
	tea_break: function(msec) {
		var date = new Date();
		var curDate = null;
		do {
			curDate = new Date();
		} while (curDate - date < msec);
	},
	showPreview: function(view, cell, row, col, e) {
		//var grid = button.up('creativegrid');
		this.tea_break(1500);
		var record = this.getCreativeStore().getAt(row);
		if(Ext.get(e.getTarget()).hasCls('icon-preview')) {
			var p = record.data['filePath'];
			var htmlContent;
			var filePath = "https://user.impulse01.com/" + p;
			if(record.data['creativeType'] == "Flash Video") {
				htmlContent = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,0,0" width="600" height="400" id="flvPlayer"> \
				<param name=\'allowFullScreen\' value=\'true\'> \
				<param name=\'movie\' value=\'https://user.impulse01.com/OSplayer.swf?movie=[' + filePath + ']&bgcolor=0x8E6A4F&fgcolor=0x8E6A4F&volume=70&autoplay=on&autoload=on&clickurl=http://google.com&clicktarget=_blank&postimage=\'> \
				<embed src=\'https://user.impulse01.com/OSplayer.swf?movie=[' + filePath + ']&bgcolor=0x8E6A4F&fgcolor=0x8E6A4F&volume=70&autoplay=on&autoload=on&clickurl=http://google.com&clicktarget=_blank&postimage=\' width=\'600\' height=\'400\' allowFullScreen=\'true\' type=\'application/x-shockwave-flash\'> \
				</object> ';
			} else if(record.data['creativeType'] == "Flash") {
				htmlContent = '<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" \
				codebase="http://download.macromedia.com/pub/shockwave/ \
				cabs/flash/swflash.cab#version=6,0,40,0" \
				width="[' + record.data["width"] + ']" height="[' + record.data["height"] + ']" \
				id="mymoviename"> \
				<param name="movie" value="[' + filePath + ']" /> \
				<param name="quality" value="high" /> \
				<param name="bgcolor" value="#ffffff" /> \
				<embed src="' + filePath + '" quality="high" bgcolor="#ffffff" \
				width="[' + record.data["width"] + ']" height="[' + record.data["height"] + ']" \
				name="mymoviename" align="" type="application/x-shockwave-flash" \
				pluginspage="http://www.macromedia.com/go/getflashplayer"> \
				</embed> \
				</object> ';
			} else if(record.data['creativeType'] == "Image") {
				htmlContent = "<image src=\'" + filePath + " \' />";
			} else {
				htmlContent = record.data['tagCode'];
			}
			var w = record.data['width'];
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
			Ext.create('Ext.window.Window', {
				width: w,
				height: h,
				autoShow: true,
				modal: true,
				layout: 'fit',
				html: htmlContent,
				border: false,
				bodyPadding: 10
			});
		} else if(Ext.get(e.getTarget()).hasCls('icon-archive')) {
			alert('Archived');
		}

	},
	submitFileupload: function(button) {
		form = Ext.getCmp('uploadCreative').down('form');
		form.getForm().submit({
			url: 'https://user.impulse01.com/newServer.php?do=upload_new_creative',
			submitEmptyText: false,
			waitMsg: 'Saving Data...',

			success: function(form, action) {
				button.up('window').close();
				//Ext.example.msg('success');
				console.log('uploaded successfully');
				store.load();
			},
			failure: function(form, action) {
				Ext.Msg.alert('Failed', action.result ? action.result.msg : 'No response');
				button.up('window').close();
			}
		});

	}
});