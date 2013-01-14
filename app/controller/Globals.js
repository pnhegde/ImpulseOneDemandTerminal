Ext.define('ImpulseOne.controller.Globals', {
	extend: 'Ext.app.Controller',
	models: ['AccountSetting'],
	stores: ['AccountSetting'],
	views: ['header.SettingWin', 'header.FinanceWin'],

	init: function() {
		this.control({
			'viewport container button #settings': {
				click: this.openSettingWindow
			},
			'viewport container button #finance': {
				click: this.openFinanceWindow
			},
			'viewport container button #logout': {
				click: this.logout
			},
			'viewport #dashboard': {
				afterrender : this.loadDashboard
			},
			'settingwin button[text="Apply"]' : {
				click: this.updateSettings
			},
			'settingwin' : {
				afterrender: this.loadSettings
			}
		});
	},
	openSettingWindow: function() {
		var settingWin = Ext.widget('settingwin');
	},
	openFinanceWindow: function() {
		var financeWin = Ext.widget('financewin');
	},
	loadDashboard: function(panel) {
		AnyChart.renderingType = anychart.RenderingType.SVG_ONLY;
		var chart = new AnyChart();
		chart.width = '100%';
		chart.height = '98%';
		chart.write(panel.body);
		chart.setXMLFile('https://terminal.impulse01.com/anychart/maindashboard.xml');
	},
	logout: function() {
		Ext.Ajax.request({
			url: 'https://terminal.impulse01.com/newServer.php?do=logout',
			success: function(response) {
				if(JSON.parse(response.responseText).success) {
					window.location = 'index.php';
					window.location.hash = "";
				} 
			}
		});
	},
	updateSettings: function(button) {
		var rec = button.up('settingwin').down('form').getRecord();
		var val =button.up('settingwin').down('form').getForm().getValues();
		rec.set(val);
		this.getAccountSettingStore().sync();
		button.up('settingwin').close();
		Ext.example.msg('Update settings', 'Successfully updated');
	},
	loadSettings: function(win) {
		win.down('form').getForm().loadRecord(this.getAccountSettingStore().getAt(0));
	}
});