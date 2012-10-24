Ext.define('ImpulseOne.controller.Globals', {
	extend: 'Ext.app.Controller',
	views: ['header.SettingWin','header.FinanceWin'],

	init: function() {
		this.control(
		{
			'viewport container button #settings': {
				click: this.openSettingWindow 
			},
			'viewport container button #finance': {
				click: this.openFinanceWindow 
			},
			'viewport container button #logout': {
				click: this.logout
			}
			
		});
	},
	openSettingWindow: function() {
		var settingWin = Ext.widget ('settingwin');
	},
	openFinanceWindow: function() {
		var financeWin = Ext.widget ('financewin');
	},
	logout: function() {
		alert('Loggedout');
		//TODO: Implement logout
	}
});
