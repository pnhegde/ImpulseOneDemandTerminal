var colors = ['url(#v-1)',
'url(#v-2)',
/*'url(#v-3)',
'url(#v-4)',
'url(#v-5)'*/];

var baseColor = '#000';
Ext.chart.theme.myTheme = Ext.extend(Ext.chart.theme.Base, {
	constructor: function(config) {
		this.callParent([Ext.apply({
			axis: {
				fill: baseColor,
				stroke: baseColor
			},
			axisLabelLeft: {
				fill: baseColor,
				font: '10px Verdana'
			},
			axisLabelRight: {
				fill: baseColor,
				font: '10px Verdana'
			},
			axisLabelBottom: {
				fill: baseColor,
				font: '10px Verdana'
			},
			axisTitleLeft: {
				fill: baseColor,
				font: 'bold 12px Verdana',
			},
			axisTitleRight: {
				fill: baseColor,
				font: 'bold 12px Verdana',
			},
			axisTitleBottom: {
				fill: baseColor,
				font: 'bold 12px Verdana'
			},
			colors: colors
		}, config)]);
	}
});

Ext.define('ImpulseOne.controller.Analytics', {
	extend: 'Ext.app.Controller',
	views: ['analytics.AnalyticHome', 'analytics.AnalyticMenuPanel', 'analytics.GraphPanel'],
	init: function() {
		glob = this;
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
			'graphpanel #bubbleChartId': {
				render: this.loadBubblePlot
			},
			'optionpanel #barId': {
				change: this.buildChart
			}, 
			'optionpanel #LineMetricId' : {
				change: this.buildChart
			}, 
			'optionpanel #barGoId' : {
				click: this.buildGraphPanel
			},
			'optionpanel #bubbleGoId' :{
				click : this.goBubble
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
				id: 'bubbleXId',
				store: ['Clicks', 'CTR','eCPM','eCPA'],
				margin: '0 0 0 10',
				value: 'Clicks'
			}, {
				xtype: 'combobox',
				fieldLabel: 'Y-Axis',
				id: 'bubbleYId',
				labelWidth: 50,
				store: ['CTR', 'Clicks','eCPM','eCPA'],
				margin: '0 0 0 10',
				value: 'CTR'
			}, {
				xtype: 'datefield',
				format: 'Y-m-d',
				fieldLabel: 'Start Date',
				labelWidth: 60,
				id: 'bubbleFromDateId',
				value: new Date(),
				margin: '0 0 0 10'
			}, {
				xtype: 'datefield',
				format: 'Y-m-d',
				fieldLabel: 'End Date',
				labelWidth: 60,
				id: 'bubbleToDateId',
				value: new Date(),
				margin: '0 0 0 10'
			}, {
				xtype: 'button',
				text: 'Go',
				id: 'bubbleGoId',
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
				labelWidth: 60,
				id: 'barFromDateId',
				value: new Date(),
				margin: '0 0 0 10'
			}, {
				xtype: 'datefield',
				format: 'Y-m-d',
				fieldLabel: 'End Date',
				labelWidth: 60,
				id : 'barToDateId',
				value: new Date(),
				margin: '0 0 0 10'
			} , {
				xtype: 'button',
				text: 'Go',
				id: 'barGoId',
				margin: '0 0 0 20'
			}, {
				xtype: 'combobox',
				fieldLabel: 'Bar',
				labelWidth: 40,
				id: 'barId',
				store: ['Impressions', 'Clicks', 'Conversions','Spend','CTR','CVR','eCPM','eCPC','eCPA'],
				margin: '0 0 0 60',
				value: 'Impressions'
			},{
				xtype: 'combobox',
				fieldLabel: 'Line',
				labelWidth: 40,
				id: 'LineMetricId',
				store: ['Impressions', 'Clicks', 'Conversions','Spend','CTR','CVR','eCPM','eCPC','eCPA'],
				margin: '0 0 0 20',
				value: 'Spend'
			}, /*{
				xtype: 'radiogroup',
				fieldLabel: 'Line',
				columns: 4,
				vertical: true,
				labelWidth: 30,
				flex: 0.5,
				margin: '0 0 0 10',
				id: 'LineMetricId',
				items: [{
					boxLabel: 'Clicks',
					name: 'lb',
				}, {
					boxLabel: 'Spend',
					name: 'lb'
				}, {
					boxLabel: 'eCPM',
					name: 'lb',
				}, {
					boxLabel: 'eCPA',
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
			}*/]);
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
this.buildGraphPanel();
},
buildGraphPanel: function() {
	var selectedNode = Ext.ComponentQuery.query('analytichome analyticmenupanel')[0].getSelectionModel().getSelection()[0];
	console.log(selectedNode);
	if(selectedNode.isLeaf()) {
		var nodeType = selectedNode.data['text'];
		var selectedCampaign = Ext.ComponentQuery.query('analytichome #campaignSearchId')[0].getValue();
		var graphPanel = Ext.ComponentQuery.query('analytichome graphpanel')[0];
		if(nodeType == "Line/Bar Chart") {
			nodeType = 'lineBarChart';
			var from; var to;
			var fromD = Ext.ComponentQuery.query('analytichome optionpanel')[0].down('#barFromDateId').getValue();
			if(fromD) {
				from = fromD;
			} else {
				from = new Date();
			}
			var toD = Ext.ComponentQuery.query('analytichome optionpanel')[0].down('#barToDateId').getValue();
			if(fromD) {
				to = toD;
			} else {
				to = new Date();
			}
			var url = 'https://terminal.impulse01.com/lineanalysis.php';
			var grid = Ext.create('Ext.ux.grid.DynamicGrid', {
				url: url,
				height: 200,
				layout: 'fit',
				id: 'dynamicGrid'
			});
			grid.getStore().getProxy().extraParams =  {
				campaignId: selectedCampaign,
				dim: selectedNode.data['parentId'],
				from: from,
				to: to
			};
			graphPanel.removeAll();
			graphPanel.add(grid);
			grid.getStore().on('load',function(g,r){
				glob.buildChart();
				graphPanel.doLayout();
			});
		} else if(nodeType == "Bubble Plot") {
			graphPanel.removeAll();
			graphPanel.add({xtype: 'panel', id: 'bubbleChartId'});
			return;
		} else if(nodeType == "Performance Graph") {
			graphPanel.removeAll();
			nodeType = 'performanceChart';
			return;
		} else if(nodeType == "Dashboard") {
			graphPanel.removeAll();
			graphPanel.add({xtype: 'panel',id:'dashboardPanel'});
			return;
		}
	}
},
loadCampaignDashboard: function(panel) {
	var selectedCampaign = Ext.ComponentQuery.query('analytichome #campaignSearchId')[0].getValue();
	if(selectedCampaign) {
		AnyChart.renderingType = anychart.RenderingType.SVG_ONLY;
		var chart = new AnyChart();
		chart.width = '100%';
		chart.height = '100%';
		chart.setXMLFile('https://terminal.impulse01.com/anychart/anychart.xml?campaignId='+selectedCampaign);
		chart.write(panel.body);
	}
},
buildChart: function() {
	var graphPanel = Ext.ComponentQuery.query('analytichome graphpanel')[0];
	var grid = graphPanel.down('#dynamicGrid');
	if(graphPanel.down('#chartPanel')) {
		console.log('yes');
		graphPanel.remove(graphPanel.down('#chartPanel'));
	}
	var str = grid.getStore();
	var optionPanel = Ext.ComponentQuery.query('analytichome optionpanel')[0];
	var bar = optionPanel.down('#barId');
	var lineM = optionPanel.down('#LineMetricId');
	var barMetric ;
	var lineMetric;
	if(bar.getValue()) {
		barMetric =  bar.getValue();
	}	else {
		barMetric = 'Impressions' ;
	}
	if(lineM.getValue()) {
		lineMetric = lineM.getValue();
	} else {
		lineMetric = 'Spend';
	}
	
	var chart = Ext.create('Ext.chart.Chart', {
		theme: 'myTheme',
		shadow: true,
		animate: {
			easing: 'bounceOut',
			duration: 500
		},gradients: [
		{
			'id': 'v-1',
			'angle': 0,
			stops: {
				0: {
					color: 'rgb(212, 40, 40)'
				},
				100: {
					color: 'rgb(117, 14, 14)'
				}
			}
		}/*,
		{
			'id': 'v-2',
			'angle': 0,
			stops: {
				0: {
					color: 'rgb(76, 76, 76)'
				},
				100: {
					color: 'rgb(0, 0, 0)'
				}
			}
		},
		{
			'id': 'v-3',
			'angle': 0,
			stops: {
				0: {
					color: 'rgb(43, 221, 115)'
				},
				100: {
					color: 'rgb(14, 117, 56)'
				}
			}
		}*/,
		{
			'id': 'v-2',
			'angle': 0,
			stops: {
				0: {
					color: 'rgb(0, 73, 144)'
				},
				100: {
					color: 'rgb(0, 13, 23)'
				}
			}
		},
		/*{
			'id': 'v-5',
			'angle': 0,
			stops: {
				0: {
					color: 'rgb(187, 45, 222)'
				},
				100: {
					color: 'rgb(85, 10, 103)'
				}
			}
		}*/],
		store: str,
		legend: {
			position: 'top',
			font: '10px Verdana'
		},
		background: {
			fill: '#FEFEFE'
		},
		axes: [{
			type: 'Numeric',
			position: 'left',
			fields: [barMetric],
			minimum: 0,
			grid: {
				odd: {
					opacity: 1,
					fill: '#f9f9f9',
					stroke: '#ccc',
				},
				even: {
					stroke: '#ccc',
				}
			},
			//hidden: true,
			title: barMetric,
		},{
			type: 'Numeric',
			position: 'right',
			fields: [lineMetric],
			minimum: 0,
			title: lineMetric,
		}, {
			type: 'Category',
			position: 'bottom',
			fields: grid.columns[0].dataIndex,
			title: grid.columns[0].dataIndex,
			label: {
				renderer: function(v) {
					return Ext.String.ellipsis(v, 10, false);
				},
				// rotate: {
				// 	degrees: 315
				// },
				font: '10px Verdana',
				contrast: true
			}
		}],
		series: [{
			type: 'column',
			axis: 'left',
			highlight: true,
			// highlightCfg: {
			// 	fill: 'green'
			// },
			label: {
				display: 'insideEnd',
				'text-anchor': 'middle',
				field: 'CTR',
				orientation: 'horizontal',
				fill: '#fff',
				font: '10px Verdana',
			},
			tips: {
				trackMouse: true,
				width: 150,
				height: 40,
				style: {
					'background-color' : '#ffffff',
					font: '10px Verdana',
					fill: '#000'

				},
				renderer: function(storeItem, item) {
					this.setTitle(grid.columns[0].dataIndex + ' = '+storeItem.get(grid.columns[0].dataIndex));
					this.update(barMetric+' = ' + storeItem.get(barMetric));
					
				}
			},
			renderer: function(sprite, storeItem, barAttr, i, store) {
				barAttr.fill = colors[i % colors.length];
				return barAttr;
			},
			style: {
				opacity: 0.5,
				font: '10px Verdana',
			},
			xField: grid.columns[0].dataIndex,
			yField: [barMetric]
		},{
			type: 'line',
			axis: 'right',
			highlight: true,
			style: {
				fill: '#38B8BF',
				stroke: '#1d8bd1',
				'stroke-width': 3
			},
			markerConfig: {
				type: 'circle',
				size: 4,
				radius: 4,
				'stroke-width': 0,
				fill: '#145e8d',
				stroke: '#38B8BF'
			},
			tips: {
				trackMouse: true,
				width: 150,
				height: 40,
				style: {
					'background-color' : '#FFF',
					font: '10px Verdana'
				},
				renderer: function(storeItem, item) {
					this.setTitle( grid.columns[0].dataIndex +' = '+storeItem.get(grid.columns[0].dataIndex));
					this.update(lineMetric + ': ' + storeItem.get(lineMetric));
				}
			},
			xField: grid.columns[0].dataIndex,
			yField: [lineMetric]
		}]
	});

var count =  55*(str.getCount());
if(count< 1200) {
	count = 1150;
} 
console.log(count);
chart.setWidth(count);

var chartPanel = Ext.create('Ext.panel.Panel',{
	autoScroll: true,
	height: 300,
	border: false,
	layout: 'fit',
	id: 'chartPanel'
});
chartPanel.add(chart);	
graphPanel.insert(0,chartPanel);
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
goBubble: function (button) {
	var graphPanel = Ext.ComponentQuery.query('analytichome graphpanel')[0];
	graphPanel.removeAll();
	graphPanel.add({xtype: 'panel', id: 'bubbleChartId'});
},
loadBubblePlot: function(bubblePanel) {
	// bubblePanel = Ext.ComponentQuery.query('analytichome graphpanel #bubbleChartId')[0] ;  
	var selectedCampaign = Ext.ComponentQuery.query('analytichome #campaignSearchId')[0].getValue();
	if(selectedCampaign) {
		var xf = Ext.ComponentQuery.query('analytichome optionpanel')[0].down('#bubbleXId').getValue();
		var yf = Ext.ComponentQuery.query('analytichome optionpanel')[0].down('#bubbleYId').getValue();
		if(!xf) {
			xf = 'Clicks';
		}
		if(!yf) {
			yf = 'CTR';
		}
		var from; var to;
		var fromD = Ext.ComponentQuery.query('analytichome optionpanel')[0].down('#bubbleFromDateId').getValue();
		if(fromD) {
			from = fromD;
		} else {
			from = new Date();
		}
		var toD = Ext.ComponentQuery.query('analytichome optionpanel')[0].down('#bubbleToDateId').getValue();
		if(fromD) {
			to = toD;
		} else {
			to = new Date();
		}
		var url = 'https://terminal.impulse01.com/scatteranalysis.php?campaignId='+selectedCampaign+ '&dim=' + Ext.ComponentQuery.query('analytichome analyticmenupanel')[0].getSelectionModel().getSelection()[0].data['parentId']+'&metricx='+xf+'&metricy='+yf+'&from='+from+'&to='+to; 
		AnyChart.renderingType = anychart.RenderingType.SVG_ONLY;
		var chart = new AnyChart();
		chart.width = '100%';
		chart.height = '100%';
		chart.setXMLFile(url);
		chart.write(bubblePanel.body);
	}	
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