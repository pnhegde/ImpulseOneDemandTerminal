Ext.define('ImpulseOne.controller.Analytics', {
	extend: 'Ext.app.Controller',
	views: ['analytics.AnalyticHome', 'analytics.AnalyticMenuPanel', 'analytics.GraphPanel'],
	init: function() {
		this.control({
			'analyticmenupanel': {
				itemclick: this.treeItemClicked
			},
			'analytichome': {
				render: this.showBubble
			},
			'analytichome button[text="Load"]': {
				click: this.addDashboardPanel
			},
			'graphpanel #dashboardPanel': {
				render: this.loadCampaignDashboard
			},
			'optionpanel #barId': {
				change: this.buildChart
			}
		});
	},
	treeItemClicked: function(tree, node) {
		this.buildOptionPanel(node);
	},
	buildOptionPanel: function(selectedNode) {
		var nodeType = selectedNode.data['text'];
		var optionPanel = Ext.ComponentQuery.query('analytichome optionpanel')[0];
		var graphPanel = Ext.ComponentQuery.query('analytichome graphpanel')[0];
		if(nodeType == "Bubble Plot") {
			if(optionPanel.isHidden()) {
				optionPanel.setVisible(true);
			}
			optionPanel.setHeight(40);
			optionPanel.removeAll();
			optionPanel.add([{
				xtype: 'combobox',
				fieldLabel: 'X-Axis',
				labelWidth: 50,
				id: 'optionXaxisId',
				store: ['test', 'test2'],
				margin: '0 0 0 10'
			}, {
				xtype: 'combobox',
				fieldLabel: 'Y-Axis',
				id: 'optionYaxisId',
				labelWidth: 50,
				store: ['test', 'test2'],
				margin: '0 0 0 10'
			}, {
				xtype: 'datefield',
				format: 'Y-m-d',
				fieldLabel: 'Start Date',
				labelWidth: 60,
				value: new Date(),
				margin: '0 0 0 10'
			}, {
				xtype: 'datefield',
				format: 'Y-m-d',
				fieldLabel: 'End Date',
				labelWidth: 60,
				value: new Date(),
				margin: '0 0 0 10'
			}, {
				xtype: 'button',
				text: 'Go',
				margin: '0 0 0 10'
			}]);
			// optionPanel.doLayout();
		} 
		else if(nodeType == "Line/Bar Chart") {
			if(optionPanel.isHidden()) {
				optionPanel.setVisible(true);
			}
			optionPanel.removeAll();
			optionPanel.setHeight(40);
			optionPanel.add([{
				xtype: 'datefield',
				format: 'Y-m-d',
				fieldLabel: 'Start Date',
				labelWidth: 40,
				value: new Date(),
				margin: '0 0 0 10'
			}, {
				xtype: 'datefield',
				format: 'Y-m-d',
				fieldLabel: 'End Date',
				labelWidth: 40,
				value: new Date(),
				margin: '0 0 0 10'
			} , {
				xtype: 'button',
				text: 'Go',
				margin: '0 0 0 20'
			}, {
				xtype: 'combobox',
				fieldLabel: 'Bar',
				labelWidth: 40,
				id: 'barId',
				store: ['Impressions', 'Clicks', 'Conversions','Spend','CTR','CVR','eCPM','eCPC','eCPA'],
				margin: '0 0 0 60',
				value: 'Impressions'
			}, {
				xtype: 'checkboxgroup',
				fieldLabel: 'Line',
				columns: 5,
				vertical: true,
				labelWidth: 40,
				margin: '0 0 0 10',
				id: 'LineMetricId',
				items: [{
					boxLabel: 'Clicks',
					name: 'lb',
				}, {
					boxLabel: 'Spend',
					name: 'lb'
				}, {
					boxLabel: 'Conversions',
					name: 'lb',
					width: 75,
				}, {
					boxLabel: 'CTR',
					name: 'lb'
				}, {
					boxLabel: 'eCPM',
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
			}]);
// optionPanel.doLayout();
} 
else if(nodeType == "Performance Graph") {
	if(optionPanel.isHidden()) {
		optionPanel.setVisible(true);
	}
	optionPanel.setHeight(40);
	optionPanel.removeAll();
	optionPanel.add([{
		xtype: 'combobox',
		fieldLabel: 'City',
		labelWidth: 40,
		id: 'cityId',
		store: ['test', 'test2'],
		margin: '0 0 0 10'
	}, {
		xtype: 'combobox',
		fieldLabel: 'Bar',
		id: 'barId',
		labelWidth: 40,
		store: ['test', 'test2'],
		margin: '0 0 0 10'
	}, {
		xtype: 'datefield',
		format: 'Y-m-d',
		fieldLabel: 'Start Date',
		labelWidth: 50,
		value: new Date(),
		margin: '0 0 0 10'
	}, {
		xtype: 'datefield',
		format: 'Y-m-d',
		fieldLabel: 'End Date',
		labelWidth: 50,
		value: new Date(),
		margin: '0 0 0 10'
	}, {
		xtype: 'button',
		text: 'Go',
		margin: '0 0 0 10'
	}]);
	// optionPanel.doLayout();
}
if(nodeType == "Dashboard") {
	optionPanel.setVisible(false);
	// optionPanel.doLayout();
}
this.buildGraphPanel(selectedNode);
},
buildGraphPanel: function(selectedNode) {
	if(selectedNode.isLeaf()) {
		var nodeType = selectedNode.data['text'];
		var selectedCampaign = Ext.ComponentQuery.query('analytichome #campaignSearchId')[0].getValue();
		var graphPanel = Ext.ComponentQuery.query('analytichome graphpanel')[0];
		if(nodeType == "Line/Bar Chart") {
			nodeType = 'lineBarChart';
		} else if(nodeType == "Bubble Plot") {
			graphPanel.removeAll();
			return;
		} else if(nodeType == "Performance Graph") {
			nodeType = 'performanceChart';
		} else if(nodeType == "Dashboard") {
			graphPanel.removeAll();
			graphPanel.add({xtype: 'panel',id:'dashboardPanel'});
			// gridPanel.doLayout();
			return;
		}
		var url = 'https://user.impulse01.com/linebar.php';
		var grid = Ext.create('Ext.ux.grid.DynamicGrid', {
			url: url,
			height: 200,
			id: 'dynamicGrid'
		});
		grid.getStore().getProxy().extraParams =  {
			campaignId: selectedCampaign,
			type: selectedNode.data['parentId'],
		};
		graphPanel.removeAll();
		graphPanel.add(grid);
		this.buildChart(graphPanel,grid);
		graphPanel.doLayout();
	}
},
loadCampaignDashboard: function(panel) {
	var selectedCampaign = Ext.ComponentQuery.query('analytichome #campaignSearchId')[0].getValue();
	if(selectedCampaign) {
		// var graphPanel = Ext.ComponentQuery.query('analytichome graphpanel')[0];
		// graphPanel.setVisible(true);
		// var menuPanel = Ext.ComponentQuery.query('analytichome analyticmenupanel')[0];
		// menuPanel.setVisible(true);

		AnyChart.renderingType = anychart.RenderingType.SVG_ONLY;
		var chart = new AnyChart();
		chart.width = '100%';
		chart.height = '100%';
		chart.setXMLFile('https://user.impulse01.com/anychart/anychart.xml?campaignId='+selectedCampaign);
		chart.write(panel.body);
	}
},
buildChart: function() {
	var graphPanel = Ext.ComponentQuery.query('analytichome graphpanel')[0];
	var grid = graphPanel.down('#dynamicGrid');
	if(graphPanel.down('chart')) {
		console.log('yes');
		graphPanel.remove(graphPanel.down('chart'));
	}
	var str = grid.getStore();
	var optionPanel = Ext.ComponentQuery.query('analytichome optionpanel')[0];
	var bar = optionPanel.down('#barId');
	var barMetric ;
	if(bar.getValue()) {
		barMetric =  bar.getValue();
	}	else {
		barMetric = 'Impressions' ;
	}
	var chart = Ext.create('Ext.chart.Chart', {
		shadow: true,
		animate: true,
		store: str,
		height: 300,
		layout: 'fit',
		axes: [{
			type: 'Numeric',
			position: 'left',
			fields: [barMetric,'CTR'],
			minimum: 0,
			grid: {
				odd: {
					opacity: 1,
					fill: '#eee',
					stroke: '#bbb',
					'stroke-width': 0.5
				}
			},
			title: barMetric
		}, {
			type: 'Category',
			position: 'bottom',
			fields: ['Domain'],
			title: 'Domain',
			label: {
				renderer: function(v) {
					return Ext.String.ellipsis(v, 15, false);
				},
				font: '9px Arial',
			}
		}],
		series: [{
			type: 'column',
			axis: 'left',
			highlight: true,
			style: {
				fill: '#456d9f'
			},
			highlightCfg: {
				fill: '#a2b5ca'
			},
			label: {
				contrast: true,
				display: 'insideEnd',
				field: 'CTR',
				color: '#000',
				orientation: 'vertical',
				'text-anchor': 'middle'
			},
			tips: {
				trackMouse: true,
				width: 120,
				height: 35,
				renderer: function(storeItem, item) {
					this.setTitle('Impressions = '+storeItem.get('Impressions') + ': Clicks = ' + storeItem.get('Clicks') );
				}
			},
			xField: 'Domain',
			yField: [barMetric]
		},{
			type: 'line',
			axis: 'right',
			fill: true,
			fillOpacity: 0.5,
			highlight: true,
			// style: {
			// 	fill: '#ff4500',
			// 	stroke: '#ff0000',
			// 	'stroke-width': 1
			// },
			tips: {
				trackMouse: true,
				width: 120,
				height: 35,
				renderer: function(storeItem, item) {
					this.setTitle('Impressions = '+storeItem.get('Impressions') + ': Clicks = ' + storeItem.get('Clicks') );
				}
			},
			xField: 'Domain',
			yField: 'CTR'
		},{
			type: 'line',
			axis: 'right',
			highlight: true,
			smooth: true,
			tips: {
				trackMouse: true,
				width: 100,
				height: 35,
				renderer: function(storeItem, item) {
					this.setTitle('Spend = '+storeItem.get('Spend') + ': Clicks = ' + storeItem.get('Clicks') );
				}
			},
			xField: 'Domain',
			yField: 'Spend'
		}]
	});
graphPanel.insert(0,chart);
},
addDashboardPanel: function(button) {
	var graphPanel = Ext.ComponentQuery.query('analytichome graphpanel')[0];
	graphPanel.setVisible(true);
	var menuPanel = Ext.ComponentQuery.query('analytichome analyticmenupanel')[0];
	menuPanel.setVisible(true);
	graphPanel.removeAll();
	graphPanel.add({xtype:'panel',id: 'dashboardPanel'});
	// graphPanel.doLayout();
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