var colors = ['url(#v-1)',
'url(#v-2)',
'url(#v-3)',
'url(#v-4)',
'url(#v-5)'];
var curDate = ((new Date().getMonth()+1)+'-01-'+ (new Date().getFullYear()));
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
				afterrender: this.showBubble
			},
			'analytichome button[text="Load"]': {
				click: this.addDashboardPanel
			},
			'graphpanel #dashboardPanel': {
				afterrender: this.loadCampaignDashboard
			},
			'graphpanel #singleMetricChartId': {
				afterrender: this.loadSingleMetricPanel
			},
			'graphpanel #doubleMetricChartId': {
				render: this.loadDoubleMetricPanel
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
			},
			'optionpanel #singleMetricGoId' :{
				click : this.goSingleMetric
			},
			'optionpanel #doubleMetricGoId' :{
				click : this.goDoubleMetric
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
				store: ['Impressions', 'Clicks', 'ClickConversions','Spend','CTR','CVR','eCPM','eCPC','eCPA'],
				margin: '0 0 0 10',
				value: 'Clicks'
			}, {
				xtype: 'combobox',
				fieldLabel: 'Y-Axis',
				id: 'bubbleYId',
				labelWidth: 50,
				store: ['Impressions', 'Clicks', 'ClickConversions','Spend','CTR','CVR','eCPM','eCPC','eCPA'],
				margin: '0 0 0 10',
				value: 'CTR'
			}, {
				xtype: 'datefield',
				format: 'Y-m-d',
				fieldLabel: 'Start Date',
				labelWidth: 60,
				id: 'bubbleFromDateId',
				value: new Date(curDate),
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
				value: new Date(curDate),
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
				store: ['Impressions', 'Clicks', 'ClickConversions','Spend','CTR Index','CVR','eCPM Index','eCPC','eCPA'],
				margin: '0 0 0 60',
				value: 'Impressions'
			},{
				xtype: 'combobox',
				fieldLabel: 'Line',
				labelWidth: 40,
				id: 'LineMetricId',
				store: ['Impressions', 'Clicks', 'ClickConversions','Spend','CTR Index','CVR','eCPM Index','eCPC','eCPA'],
				margin: '0 0 0 20',
				value: 'CTR Index'
			}]);
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
				value: new Date(curDate),
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
		} else if(nodeType == "Single Metric") {
			if(optionPanel.isHidden()) {
				optionPanel.setVisible(true);
			}
			optionPanel.setHeight(40);
			optionPanel.removeAll();
			optionPanel.add([{
				xtype: 'combobox',
				fieldLabel: 'Metric',
				labelWidth: 50,
				id: 'singleMetricId',
				store: ['Impressions', 'Clicks', 'ClickConversions','Spend','CTR','CVR','eCPM','eCPC','eCPA'],
				margin: '0 0 0 10',
				value: 'CTR'
			}, {
				xtype: 'datefield',
				format: 'Y-m-d',
				fieldLabel: 'Start Date',
				labelWidth: 60,
				id: 'singleMetricFromDateId',
				value: new Date(curDate),
				margin: '0 0 0 10'
			}, {
				xtype: 'datefield',
				format: 'Y-m-d',
				fieldLabel: 'End Date',
				labelWidth: 60,
				id: 'singleMetricToDateId',
				value: new Date(),
				margin: '0 0 0 10'
			}, {
				xtype: 'button',
				text: 'Go',
				id: 'singleMetricGoId',
				margin: '0 0 0 10'
			}]);
		} else if(nodeType == "Double Metric") {
			if(optionPanel.isHidden()) {
				optionPanel.setVisible(true);
			}
			optionPanel.setHeight(40);
			optionPanel.removeAll();
			optionPanel.add([{
				xtype: 'combobox',
				fieldLabel: 'X-Axis',
				labelWidth: 50,
				id: 'doubleMetricXId',
				store: ['Impressions', 'Clicks', 'ClickConversions','Spend','CTR','CVR','eCPM','eCPC','eCPA'],
				margin: '0 0 0 10',
				value: 'eCPM'
			}, {
				xtype: 'combobox',
				fieldLabel: 'Y-Axis',
				id: 'doubleMetricYId',
				labelWidth: 50,
				store: ['Impressions', 'Clicks', 'ClickConversions','Spend','CTR','CVR','eCPM','eCPC','eCPA'],
				margin: '0 0 0 10',
				value: 'CTR'
			}, {
				xtype: 'datefield',
				format: 'Y-m-d',
				fieldLabel: 'Start Date',
				labelWidth: 60,
				id: 'doubleMetricFromDateId',
				value: new Date(curDate),
				margin: '0 0 0 10'
			}, {
				xtype: 'datefield',
				format: 'Y-m-d',
				fieldLabel: 'End Date',
				labelWidth: 60,
				id: 'doubleMetricToDateId',
				value: new Date(),
				margin: '0 0 0 10'
			}, {
				xtype: 'button',
				text: 'Go',
				id: 'doubleMetricGoId',
				margin: '0 0 0 10'
			}]);
		} else if(nodeType == "Dashboard") {
			optionPanel.setVisible(false);
		} else {
			optionPanel.setVisible(false);
		}
		this.buildGraphPanel();
	},
	buildGraphPanel: function() {
		var selectedNode = Ext.ComponentQuery.query('analytichome analyticmenupanel')[0].getSelectionModel().getSelection()[0];
		if(selectedNode.isLeaf()) {
			var nodeType = selectedNode.data['text'];
			var selectedCampaign = Ext.ComponentQuery.query('analytichome #campaignSearchId')[0].getValue();
			var graphPanel = Ext.ComponentQuery.query('analytichome graphpanel')[0];
			Ext.ComponentQuery.query('analytichome')[0].setLoading("Loading");
			if(nodeType == "Line/Bar Chart") {
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
					height: Ext.getBody().getViewSize().height * 0.304,
					layout: 'fit',
					id: 'dynamicGrid',
				});
				grid.down('toolbar').add({
					xtype: 'box',
					height: 20,
					html: '<b>&nbsp&nbspTop '+selectedNode.parentNode.data['text']+'s</b>'
				},'->',{
					xtype: 'button',
					text: 'Download chart',
					icon: 'data/icons/download.png',
					id: 'downloadChartId',
					handler: function() {
						Ext.MessageBox.confirm('Confirm Download', 'Would you like to download the chart as an image?', function(choice){
							if(choice == 'yes'){
								var ch = Ext.ComponentQuery.query('analytichome graphpanel chart')[0];
								if(ch) {
									ch.save({
										type: 'image/png'
									});
								}
							}
						});
					}
				}, '-', {
					xtype: 'buttongroup',
					items: [{
						xtype: 'splitbutton',
						text: 'Export Raw Data',
						id: 'RawStoreExportId',
						icon: 'data/icons/export.png',
						arrowAlign: 'right',
						menu: [{
							icon: 'data/icons/csv.png',
							text: 'CSV file',
							handler: function() {
								 	var url = 'https://terminal.impulse01.com/exportRawdata.php?campaignId='+selectedCampaign+'&dim='+selectedNode.data['parentId']+'&from='+from+'&to='+to+'&format=CSV';
									window.open(url, '_blank');
							}
						}, {
							text: 'Microsoft Excel',
							icon: 'data/icons/excel.png',
							handler: function() {
								var url = 'https://terminal.impulse01.com/exportRawdata.php?campaignId='+selectedCampaign+'&dim='+selectedNode.data['parentId']+'&from='+from+'&to='+to+'&format=MSExcel';
								window.open(url, '_blank');
							}
						}]
					}]
				},'-');
grid.getStore().getProxy().extraParams =  {
	campaignId: selectedCampaign,
	dim: selectedNode.data['parentId'],
	from: from,
	to: to
};
graphPanel.removeAll();
grid.getStore().on('load',function(g,r){
	if(r.length) {
		graphPanel.add(grid);
		glob.buildChart();
		graphPanel.doLayout();
		Ext.ComponentQuery.query('analytichome')[0].setLoading(false);
	} else {
		Ext.ComponentQuery.query('analytichome')[0].setLoading(false);
		Ext.example.msg("Data", "Empty Store");
	}
});
} else if(nodeType == "Bubble Plot") {
	graphPanel.removeAll();
	Ext.ComponentQuery.query('analytichome')[0].setLoading(false);
	graphPanel.add({xtype: 'panel', 
		border: false,  
		id: 'bubbleChartId',
		width: Ext.getBody().getViewSize().width * 0.85,
		height: Ext.getBody().getViewSize().height * 0.77
	});
	return;
} else if(nodeType == "Performance Graph") {
	graphPanel.removeAll();
	return;
} else if(nodeType == "Dashboard") {
	graphPanel.removeAll();
	Ext.ComponentQuery.query('analytichome')[0].setLoading(false);
	graphPanel.add({xtype: 'panel',
		border: false, 
		id:'dashboardPanel',
		width: Ext.getBody().getViewSize().width * 0.85,
		height: Ext.getBody().getViewSize().height * 0.85
	});
	return;
}else if(nodeType == "Single Metric") {
	graphPanel.removeAll();
	Ext.ComponentQuery.query('analytichome')[0].setLoading(false);
	graphPanel.add({xtype: 'panel', 
		border: false, 
		id:'singleMetricChartId',
		width: Ext.getBody().getViewSize().width * 0.85,
		height: Ext.getBody().getViewSize().height * 0.77
	});
	return;
}else if(nodeType == "Double Metric") {
	graphPanel.removeAll();
	Ext.ComponentQuery.query('analytichome')[0].setLoading(false);
	graphPanel.add({
		xtype: 'panel', 
		border: false , 
		width: Ext.getBody().getViewSize().width * 0.85,
		height: Ext.getBody().getViewSize().height * 0.77, 
		id:'doubleMetricChartId'
	});
	return;
} else {

	graphPanel.removeAll();
	graphPanel.add({
		xtype: 'panel', 
		border: false , 
		width: Ext.getBody().getViewSize().width * 0.85,
		height: Ext.getBody().getViewSize().height * 0.77, 
		html: '<h2>Coming Soon</h2>'
	});
	Ext.ComponentQuery.query('analytichome')[0].setLoading(false);
	return;
}
}
},
loadCampaignDashboard: function(panel) {
	var selectedCampaign = Ext.ComponentQuery.query('analytichome #campaignSearchId')[0].getValue();
	if(selectedCampaign) {
		AnyChart.renderingType = anychart.RenderingType.SVG_ONLY;
		AnyChart.useBrowserResize = true;
		var chart = new AnyChart();
		chart.width = '100%';
		chart.height = '100%';
		chart.write(panel.body);
		chart.setXMLFile('https://terminal.impulse01.com/campdashboard.php?campaignId='+selectedCampaign);
	}
},
buildChart: function() {
	var graphPanel = Ext.ComponentQuery.query('analytichome graphpanel')[0];
	var grid = graphPanel.down('#dynamicGrid');
	if(grid) {
		if(graphPanel.down('chart')) {
			graphPanel.remove(graphPanel.down('chart'));
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
			lineMetric = 'CTR';
		}
		var w = 150; 
		if(grid.columns[0].dataIndex == "Domain" ) {
			w = 210;
		} else if(grid.columns[0].dataIndex == "Daypart") {
			w = 220;
		}
		var chart = Ext.create('Ext.chart.Chart', {
			theme: 'myTheme',
			shadow: true,
			animate: {
				easing: 'bounceOut',
				duration: 700
			},
			gradients: [{
				'id': 'v-1',
				'angle': 0,
				stops: {
					0: {
						color: 'rgb(244, 0, 0)'
					},
					100: {
						color: 'rgb(77, 0, 0)'
					}
				}
			}, {
				'id': 'v-2',
				'angle': 0,
				stops: {
					0: {
						color: 'rgb(143, 96, 40)'
					},
					100: {
						color: 'rgb(24, 17, 0)'
					}
				}
			}, {
				'id': 'v-3',
				'angle': 0,
				stops: {
					0: {
						color: 'rgb(43, 221, 115)'
					},
					100: {
						color: 'rgb(0, 50, 1)'
					}
				}
			}, {
				'id': 'v-4',
				'angle': 0,
				stops: {
					0: {
						color: 'rgb(0, 73, 144)'
					},
					100: {
						color: 'rgb(0, 13, 23)'
					}
				}
			}, {
				'id': 'v-5',
				'angle': 0,
				stops: {
					0: {
						color: 'rgb(253, 118, 9)'
					},
					100: {
						color: 'rgb(181, 10, 4)'
					}
				}
			}],
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
					rotate: {
						degrees: 315
					},
					font: '9px Verdana',
					contrast: true
				}
			}],
			series: [{
				type: 'column',
				axis: 'left',
				highlight: true,
				tips: {
					trackMouse: true,
					width: w,
					height: 40,
					border: 5,
					style: {
						'background-color' : '#ffffff',
						font: '10px Verdana',
						fill: '#000',
						borderColor: 'rgb(77, 0, 0)',
						borderStyle: 'solid'
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
					stroke: '#00468b',
					'stroke-width': 3
				},
				markerConfig: {
					type: 'circle',
					size: 4,
					radius: 4,
					'stroke-width': 0,
					fill: '#38B8BF',
					stroke: '#145e8d'
				},
				tips: {
					trackMouse: true,
					width: w,
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
// var count =  20*(str.getCount());
// if(count< 1200) {
// 	count = 1150;
// } 
//chart.setWidth(count);
chart.setHeight(Ext.getBody().getViewSize().height * 0.4553);
// var chartPanel = Ext.create('Ext.panel.Panel',{
// 	autoScroll: true,
// 	height: 300,
// 	border: false,
// 	layout: 'fit',
// 	id: 'chartPanel'
// });
// chartPanel.add(chart);	
graphPanel.insert(0,chart);
} else {
	Ext.example.msg('Store', 'Empty!');
}
},
addDashboardPanel: function(button) {
	if(Ext.ComponentQuery.query('analytichome #campaignSearchId')[0].getValue()) {
		var graphPanel = Ext.ComponentQuery.query('analytichome graphpanel')[0];
		graphPanel.setVisible(true);
		var menuPanel = Ext.ComponentQuery.query('analytichome analyticmenupanel')[0];
		menuPanel.setVisible(true);
		Ext.ComponentQuery.query('analytichome optionpanel')[0].setVisible(false);
		// menuPanel.collapseAll();
		menuPanel.getSelectionModel().select(menuPanel.getRootNode().findChild('id','dashboardNodeId'));
		graphPanel.removeAll();
		graphPanel.add({xtype:'panel', 
			border: false, 
			id: 'dashboardPanel',
			width: Ext.getBody().getViewSize().width*0.85,
			height: Ext.getBody().getViewSize().height*0.85
		});
	}
},
goBubble: function (button) {
	var graphPanel = Ext.ComponentQuery.query('analytichome graphpanel')[0];
	graphPanel.removeAll();
	graphPanel.add({xtype: 'panel', 
		border: false,  
		id: 'bubbleChartId',
		width: Ext.getBody().getViewSize().width*0.85,
		height: Ext.getBody().getViewSize().height*0.77
	});
},
goSingleMetric: function (button) {
	var graphPanel = Ext.ComponentQuery.query('analytichome graphpanel')[0];
	graphPanel.removeAll();
	graphPanel.add({xtype: 'panel', 
		border: false,  
		id: 'singleMetricChartId',
		width: Ext.getBody().getViewSize().width*0.85,
		height: Ext.getBody().getViewSize().height*0.77
	});
},
goDoubleMetric: function (button) {
	var graphPanel = Ext.ComponentQuery.query('analytichome graphpanel')[0];
	graphPanel.removeAll();
	graphPanel.add({xtype: 'panel',
		border: false, 					
		width: Ext.getBody().getViewSize().width * 0.85,
		height: Ext.getBody().getViewSize().height *0.77,
		id: 'doubleMetricChartId'
	});
},
loadBubblePlot: function(bubblePanel) {
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
		AnyChart.useBrowserResize = true;
		var chart = new AnyChart();
		chart.width = '100%';
		chart.height = '98%';
		chart.write(bubblePanel.body);
		chart.setXMLFile(url);
	}	
},
loadSingleMetricPanel: function(panel) {
	var selectedCampaign = Ext.ComponentQuery.query('analytichome #campaignSearchId')[0].getValue();
	if(selectedCampaign) {
		var xf = Ext.ComponentQuery.query('analytichome optionpanel')[0].down('#singleMetricId').getValue();
		if(!xf) {
			xf = 'CTR';
		}

		var from; var to;
		var fromD = Ext.ComponentQuery.query('analytichome optionpanel')[0].down('#singleMetricFromDateId').getValue();
		if(fromD) {
			from = fromD;
		} else {
			from = new Date();
		}
		var toD = Ext.ComponentQuery.query('analytichome optionpanel')[0].down('#singleMetricToDateId').getValue();
		if(fromD) {
			to = toD;
		} else {
			to = new Date();
		}
		var url = 'https://terminal.impulse01.com/doublesingle.php?campaignId='+selectedCampaign+ '&dim=' + Ext.ComponentQuery.query('analytichome analyticmenupanel')[0].getSelectionModel().getSelection()[0].data['parentId']+'&metric='+xf+'&from='+from+'&to='+to; 
		AnyChart.renderingType =  anychart.RenderingType.SVG_PREFERRED;
		AnyChart.useBrowserResize = true;
		var chart = new AnyChart('https://terminal.impulse01.com/anychart/swf/AnyChart.swf');
		chart.width = "100%";
		chart.height = "98%";
		chart.write(panel.body);
		chart.setXMLFile(url);
	}
},
loadDoubleMetricPanel: function(panel) {
	var selectedCampaign = Ext.ComponentQuery.query('analytichome #campaignSearchId')[0].getValue();
	if(selectedCampaign) {
		var xf = Ext.ComponentQuery.query('analytichome optionpanel')[0].down('#doubleMetricXId').getValue();
		var yf = Ext.ComponentQuery.query('analytichome optionpanel')[0].down('#doubleMetricYId').getValue();
		if(!xf) {
			xf = 'eCPM';
		}
		if(!yf) {
			yf = 'CTR';
		}
		var from; var to;
		var fromD = Ext.ComponentQuery.query('analytichome optionpanel')[0].down('#doubleMetricFromDateId').getValue();
		if(fromD) {
			from = fromD;
		} else {
			from = new Date(year, month, day);
		}
		var toD = Ext.ComponentQuery.query('analytichome optionpanel')[0].down('#doubleMetricToDateId').getValue();
		if(fromD) {
			to = toD;
		} else {
			to = new Date();
		}
		var url = 'https://terminal.impulse01.com/doubledouble.php?campaignId='+selectedCampaign+ '&dim=' + Ext.ComponentQuery.query('analytichome analyticmenupanel')[0].getSelectionModel().getSelection()[0].data['parentId']+'&metricx='+xf+'&metricy='+yf+'&from='+from+'&to='+to; 
		AnyChart.renderingType = anychart.RenderingType.SVG_ONLY;
		AnyChart.useBrowserResize = true;
		var chart = new AnyChart();
		chart.width = '100%';
		chart.height = '98%';
		chart.write(panel.body);
		chart.setXMLFile(url);
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