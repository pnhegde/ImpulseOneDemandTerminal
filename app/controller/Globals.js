Ext.define('ImpulseOne.controller.Globals', {
	extend: 'Ext.app.Controller',
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
		var redirect = 'index.html';
		window.location = redirect;
		//TODO: Implement logout
	}
});