Ext.define('ImpulseOne.controller.Creatives', {
	extend: 'Ext.app.Controller',
	stores: ['Creative'],
	models:['Creative'],
	views: ['creative.CreativeGrid', 'creative.HtmlCreative'],

	init: function() {
		this.getCreativeStore().load();
		this.control ({
			'creativegrid buttongroup splitbutton menu #htmlcreative': {
				click: this.editUser 
			},		
			'creativegrid buttongroup #preview': {
				click:  this.editUser
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
	updateUser: function(button) {
		console.log('clicked the Save button');
	}

});
