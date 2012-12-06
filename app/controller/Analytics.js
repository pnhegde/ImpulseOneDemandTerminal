Ext.define('ImpulseOne.controller.Analytics', {
	extend: 'Ext.app.Controller',
	views: ['analytics.AnalyticHome', 
	'analytics.AnalyticMenuPanel',
	'analytics.GraphPanel'],
	init: function() {
		this.control({
			'analyticmenupanel': {
				itemclick: this.treeItemClicked
			},
			'analytichome': {
				render: this.showBubble
			},
			'analytichome button[text="Load"]' : {
				click: this.loadCampaignDashboard
			},
			'graphpanel panel' : {
				render: this.loadGraph
			}
		});
	},
	treeItemClicked: function(tree, node) {
		console.log(node.getPath());
		this.buildOptionPanel(node);
		//TODO: 		this.buildGraphPanel(node);
	},
	buildOptionPanel: function(selectedNode) {
		var nodeType = selectedNode.data['text'];
		var optionPanel = Ext.ComponentQuery.query('analytichome optionpanel')[0];
		var graphPanel =  Ext.ComponentQuery.query('analytichome graphpanel')[0];
		if(nodeType == "Bubble Plot") {
			if(optionPanel.isHidden()) {
				optionPanel.setVisible(true);
			}
			optionPanel.setHeight(40);
			optionPanel.removeAll();
			graphPanel.removeAll();
			optionPanel.add([{
				xtype: 'combobox',
				fieldLabel: 'X-Axis',
				labelWidth: 50,
				id: 'optionXaxisId',
				store: ['test', 'test2'],
				margin: '0 0 0 15'
			}, {
				xtype: 'combobox',
				fieldLabel: 'Y-Axis',
				id: 'optionYaxisId',
				labelWidth: 50,
				store: ['test', 'test2'],
				margin: '0 0 0 15'
			}, {
				xtype: 'datefield',
				format: 'Y-m-d',
				fieldLabel: 'Start Date',
				labelWidth: 60,
				value: new Date(),
				margin: '0 0 0 15'
			}, {
				xtype: 'datefield',
				format: 'Y-m-d',
				fieldLabel: 'End Date',
				labelWidth: 60,
				value: new Date(),
				margin: '0 0 0 15'
			}, {
				xtype: 'button',
				text: 'Go',
				margin: '0 0 0 15'
			}]);
			optionPanel.doLayout();
		} else if(nodeType == "Line/Bar Chart") {
			if(optionPanel.isHidden()) {
				optionPanel.setVisible(true);
			}
			optionPanel.removeAll();
			graphPanel.removeAll();
			optionPanel.setHeight(60);
			optionPanel.add([{
				xtype: 'datefield',
				format: 'Y-m-d',
				fieldLabel: 'Start Date',
				labelWidth: 60,
				value: new Date(),
				margin: '0 0 0 15'
			}, {
				xtype: 'datefield',
				format: 'Y-m-d',
				fieldLabel: 'End Date',
				labelWidth: 60,
				value: new Date(),
				margin: '0 0 0 15'
			}, {
				xtype: 'combobox',
				fieldLabel: 'Bar',
				labelWidth: 50,
				id: 'barId',
				store: ['test', 'test2'],
				margin: '0 0 0 15'
			}, {
				xtype: 'checkboxgroup',
				fieldLabel: 'Line',
				columns: 5,
				vertical: true,
				labelWidth: 40,
				margin: '0 0 0 15',
				id: 'LineMetricId',
				items: [{
					boxLabel: 'test0',
					name: 'lb',
				}, {
					boxLabel: 'test1',
					name: 'lb'
				}, {
					boxLabel: 'test2',
					name: 'lb'
				}, {
					boxLabel: 'test3',
					name: 'lb'
				}, {
					boxLabel: 'test4',
					name: 'lb'
				}],
				listeners: {
					change: function(cb, nv, ov) {
						if(Ext.isArray(nv.lb)) {
							if(nv.lb.length > 3) {
								Ext.getCmp('LineMetricId').markInvalid('You can select only 3!');
							} else {
								cb.clearInvalid();
							}
						}
					}
				}
			}, {
				xtype: 'button',
				text: 'Go',
				margin: '0 0 0 90'
			}]);
optionPanel.doLayout();
} else if(nodeType == "Performance Graph") {
	if(optionPanel.isHidden()) {
		optionPanel.setVisible(true);
	}
	optionPanel.setHeight(40);
	optionPanel.removeAll();
	graphPanel.removeAll();
	optionPanel.add([{
		xtype: 'combobox',
		fieldLabel: 'City',
		labelWidth: 50,
		id: 'cityId',
		store: ['test', 'test2'],
		margin: '0 0 0 15'
	}, {
		xtype: 'combobox',
		fieldLabel: 'Bar',
		id: 'barId',
		labelWidth: 50,
		store: ['test', 'test2'],
		margin: '0 0 0 15'
	}, {
		xtype: 'datefield',
		format: 'Y-m-d',
		fieldLabel: 'Start Date',
		labelWidth: 60,
		value: new Date(),
		margin: '0 0 0 15'
	}, {
		xtype: 'datefield',
		format: 'Y-m-d',
		fieldLabel: 'End Date',
		labelWidth: 60,
		value: new Date(),
		margin: '0 0 0 15'
	}, {
		xtype: 'button',
		text: 'Go',
		margin: '0 0 0 15'
	}]);
	optionPanel.doLayout();
}
if(nodeType == "Dashboard") {
	optionPanel.setVisible(false);
	graphPanel.add({xtype: 'panel'});
	optionPanel.doLayout();
}
},
buildGraphPanel: function(selectedNode) {},
loadCampaignDashboard: function(button) {
	var selectedCampaign = Ext.ComponentQuery.query('analytichome #campaignSearchId')[0].getValue();
	if(selectedCampaign) {
		console.log(selectedCampaign);
		var graphPanel = Ext.ComponentQuery.query('analytichome graphpanel')[0];
		graphPanel.setVisible(true);
		var menuPanel = Ext.ComponentQuery.query('analytichome analyticmenupanel')[0];
		menuPanel.setVisible(true);
	}
},
loadGraph: function(container) {
	AnyChart.renderingType = anychart.RenderingType.SVG_ONLY; 
	var chart = new AnyChart();
	chart.width = 1100; 
	chart.height = 500; 
	chart.setXMLFile('https://user.impulse01.com/ImpulseOneDemandTerminal/anychart.xml'); 
	chart.write(container.body);
},
showBubble: function(tab) {
	var menuPanel = Ext.ComponentQuery.query('analytichome analyticmenupanel')[0];
	menuPanel.setVisible(false);
	//menuPanel.getSelectionModel().select(menuPanel.getNodeById('dashboardNodeId'));
	var graphPanel = Ext.ComponentQuery.query('analytichome graphpanel')[0];
	graphPanel.setVisible(false);
	// var t = new Ext.ToolTip({
	// 	floating: {
	// 		shadow: false
	// 	},
	// 	title: 'Tip',
	// 	html: 'Select Campaign ',
	// 	hideDelay: 200000,
	// 	closable: true,
	// });
	// t.showAt([tab.getWidth() + 1000, tab.getHeight() + 100]);
	// t.el.slideIn('b');
}
});