Ext.define('ImpulseOne.controller.Creatives', {
	extend: 'Ext.app.Controller',
	stores: ['Creative'],
	models:['Creative'],
	views: ['creative.CreativeGrid', 'creative.HtmlCreative','creative.UploadCreative'],

	init: function() {
		this.getCreativeStore().load();
		this.control ({
			'creativegrid button menu #htmlcreative': {
				click: this.editUser 
			},	
			'creativegrid button menu #creativeupload': {
				click: this.creativeUpload 
			},	

			'creativegrid buttongroup #preview': {
				click:  this.showPreview
			},

			'htmlcreative button[text="Save"]': {
				click:  this.updateUser
			},

			'creativegrid': {
				itemclick: this.enableButtons 
			}
		});

	},
	enableButtons : function(grid, record) {
		var button = Ext.getCmp('action');
		if (button.disabled)
			{	button.enable();
				console.log(button);
			}	
		},
		editUser: function() {
			console.log('Double clicked ') ;
			Ext.widget('htmlcreative').show();
		},
		creativeUpload: function() {
			Ext.widget('uploadcreative').show();
		},
		updateUser: function(button) {
			console.log('clicked the Save button');
			Ext.getCmp('htmlCreative').close;
		},
		showPreview: function(button) {
			Ext.create('Ext.window.Window',{width:450,height:400,autoShow:true,modal:true,layout:'fit',
				html: "<image src=\'data/1.jpg\'/>", border: false,bodyPadding:10});
		}

	});
