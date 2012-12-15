Ext.define('ImpulseOne.controller.TrafficControlTrees', {
	extend: 'Ext.app.Controller',
	models: ['Campaign', 'CampaignCreative'],
	stores: ['Campaign', 'CampaignCreative'],
	views: ['trafficking.TrafficControlTree', 'trafficking.TrafficHome', 'trafficking.NewAdvertiserWindow', 'trafficking.NewBrandWindow', 'trafficking.NewPlanWindow', 'trafficking.NewCampaignWindow', 'trafficking.EditCampaignWindow'],

	init: function() {
		me = this;
		this.control({
			'trafficcontroltree': {
				itemclick: this.treeNodeClickHandler,
				collapse: this.doPanelLayout,
				expand: this.doPanelLayout,

			},
			'newadvertiserwindow button[text="Create"]': {
				click: this.createNewAdvertiser
			},
			'newbrandwindow button[text="Create"]': {
				click: this.createNewBrand
			},
			'newplanwindow button[text="Create"]': {
				click: this.createNewPlan
			},
			'newcampaignwindow button[text="Create"]': {
				click: this.createNewCampaign
			}
		});
	},
	treeNodeClickHandler: function(tree, node) {
		var home = Ext.getCmp('traffichomeId');
		home.setLoading("Loading");
		setTimeout(function() {
			Ext.getCmp('traffichomeId').setLoading(false)
		}, 1000);
		SelectedNodeId = node.data['id'];
		var nodeType = "advertisers";
		if(SelectedNodeId.indexOf('adv') != -1) {
			nodeType = "brands";
		}
		if(SelectedNodeId.indexOf('brand') != -1) {
			nodeType = "plans";
		}
		if(SelectedNodeId.indexOf('plan') != -1) {
			nodeType = "campaigns";
		};
		var grid = this.getGrid(SelectedNodeId, nodeType);
		home.remove(home.items.last(), true);
		// home.doLayout();
		home.add(grid);
		home.doLayout();
	},
	getGrid: function(nodeId, nodeType) {
		var url = 'https://terminal.impulse01.com/newServer.php?do=get_' + nodeType;
		var grid = Ext.create('Ext.ux.grid.DynamicGrid', {
			url: url,
			param: nodeId
		});
		if(nodeType == "advertisers") {
			grid.down('toolbar').add({
				xtype: 'box',
				height: 20,
				html: '<b>Advertisers</b>'
			}, '->', '-', {
				xtype: 'button',
				text: 'Delete',
				icon: 'data/icons/delete.png',
				disabled: true,
				id: 'deleteButtonId',
				handler: function() {
					var grid = Ext.ComponentQuery.query('traffichome dynamicGrid')[0];
					var row = grid.getSelectionModel().getSelection()[0];
					Ext.Ajax.request({
						url: 'https://terminal.impulse01.com/newServer.php?do=delete_advertiser',
						params: {
							advertiserId: row.data['Advertiser Id'],
						},
						success: function(response) {
							if(JSON.parse(response.responseText).success) {
								Ext.ComponentQuery.query('traffichome dynamicGrid')[0].getStore().load();
								var treeStore = Ext.ComponentQuery.query('trafficcontroltree')[0].getStore();
								treeStore.load();
								Ext.example.msg("Delete", "Successful !");
							} else {
								Ext.example.msg("Delete", "Cannot delete !");
							}
							var deleteButton = Ext.getCmp('deleteButtonId');
							if(!deleteButton.disabled) {
								deleteButton.disable();
							}
						}
					});
				}
			}, '-', {
				xtype: 'button',
				text: 'New Advertiser',
				icon: 'data/icons/add.png',
				handler: function() {
					Ext.widget('newadvertiserwindow');
					console.log("new advertiser window created");
				}
			}, '-');
		} else if(nodeType == "brands") {
			grid.down('toolbar').add({
				xtype: 'box',
				height: 20,
				html: '<b>Brands</b>'
			}, '->', '-', {
				xtype: 'button',
				text: 'Delete',
				icon: 'data/icons/delete.png',
				disabled: true,
				id: 'deleteButtonId',
				handler: function() {
					var grid = Ext.ComponentQuery.query('traffichome dynamicGrid')[0];
					var row = grid.getSelectionModel().getSelection()[0];
					Ext.Ajax.request({
						url: 'https://terminal.impulse01.com/newServer.php?do=delete_brand',
						params: {
							brandId: row.data['Brand Id'],
						},
						success: function(response) {
							if(JSON.parse(response.responseText).success) {
								Ext.ComponentQuery.query('traffichome dynamicGrid')[0].getStore().load();
								var treeStore = Ext.ComponentQuery.query('trafficcontroltree')[0].getStore();
								treeStore.load();
								Ext.example.msg("Delete", "Successful !");
							} else {
								Ext.example.msg("Delete", "Cannot delete !");
							}
							var deleteButton = Ext.getCmp('deleteButtonId');
							if(!deleteButton.disabled) {
								deleteButton.disable();
							}
						}
					});
				}
			}, '-', {
				xtype: 'button',
				text: 'New Brand',
				icon: 'data/icons/add.png',
				handler: function() {
					Ext.widget('newbrandwindow');
					console.log("new Brand window created");
				}
			}, '-');
		} else if(nodeType == "plans") {
			grid.down('toolbar').add({
				xtype: 'box',
				height: 20,
				html: '<b>Plans</b>'
			}, '->', '-', {
				xtype: 'button',
				text: 'Delete',
				icon: 'data/icons/delete.png',
				disabled: true,
				id: 'deleteButtonId',
				handler: function() {
					var grid = Ext.ComponentQuery.query('traffichome dynamicGrid')[0];
					var row = grid.getSelectionModel().getSelection()[0];
					Ext.Ajax.request({
						url: 'https://terminal.impulse01.com/newServer.php?do=delete_plan',
						params: {
							planId: row.data['Plan Id'],
						},
						success: function(response) {
							if(JSON.parse(response.responseText).success) {
								Ext.ComponentQuery.query('traffichome dynamicGrid')[0].getStore().load();
								var treeStore = Ext.ComponentQuery.query('trafficcontroltree')[0].getStore();
								treeStore.load();
								Ext.example.msg("Delete", "Successful !");
							} else {
								Ext.example.msg("Delete", "Cannot delete !");
							}
							var deleteButton = Ext.getCmp('deleteButtonId');
							if(!deleteButton.disabled) {
								deleteButton.disable();
							}
						}
					});
				}
			}, '-', {
				xtype: 'button',
				text: 'New Plan',
				icon: 'data/icons/add.png',
				handler: function() {
					Ext.widget('newplanwindow');
				}
			}, '-');
		} else if(nodeType == "campaigns") {
			grid.down('toolbar').add({
				xtype: 'box',
				height: 20,
				html: '<b>Campaigns</b>'
			}, '->', '-', {
				xtype: 'button',
				text: 'Activate',
				icon: 'data/icons/activate.png',
				disabled: true,
				id: 'activateButtonId',
				handler: function(button) {
					var grid = Ext.ComponentQuery.query('traffichome dynamicGrid')[0];
					var row = grid.getSelectionModel().getSelection()[0];
					Ext.Ajax.request({
						url: 'https://terminal.impulse01.com/newServer.php?do=activate_campaign',
						params: {
							campaignId: row.data['Campaign Id'],
						},
						success: function(response) {
							if(JSON.parse(response.responseText).success) {
								Ext.ComponentQuery.query('traffichome dynamicGrid')[0].getStore().load();
								var treeStore = Ext.ComponentQuery.query('trafficcontroltree')[0].getStore();
								treeStore.load();
								Ext.example.msg("Activate", "Successful !");
							} else {
								Ext.example.msg("Activate", "Cannot activate !");
							}
							me.manageToolbarButtons(button);
						}
					});
				}
			}, '-', {
				xtype: 'button',
				text: 'Pause',
				icon: 'data/icons/pause.png',
				disabled: true,
				id: 'pauseButtonId',
				handler: function(button) {
					var grid = Ext.ComponentQuery.query('traffichome dynamicGrid')[0];
					var row = grid.getSelectionModel().getSelection()[0];
					Ext.Ajax.request({
						url: 'https://terminal.impulse01.com/newServer.php?do=pause_campaign',
						params: {
							campaignId: row.data['Campaign Id'],
						},
						success: function(response) {
							if(JSON.parse(response.responseText).success) {
								Ext.ComponentQuery.query('traffichome dynamicGrid')[0].getStore().load();
								var treeStore = Ext.ComponentQuery.query('trafficcontroltree')[0].getStore();
								treeStore.load();
								Ext.example.msg("Pause", "Successful !");
							} else {
								Ext.example.msg("Pause", "Cannot pause !");
							}
							me.manageToolbarButtons(button);
						}
					});
				}
			}, '-', {
				xtype: 'button',
				text: 'Archive',
				icon: 'data/icons/archive.png',
				disabled: true,
				id: 'archiveButtonId',
				handler: function(button) {
					var grid = Ext.ComponentQuery.query('traffichome dynamicGrid')[0];
					var row = grid.getSelectionModel().getSelection()[0];
					Ext.Ajax.request({
						url: 'https://terminal.impulse01.com/newServer.php?do=archive_campaign',
						params: {
							campaignId: row.data['Campaign Id'],
						},
						success: function(response) {
							if(JSON.parse(response.responseText).success) {
								Ext.ComponentQuery.query('traffichome dynamicGrid')[0].getStore().load();
								var treeStore = Ext.ComponentQuery.query('trafficcontroltree')[0].getStore();
								treeStore.load();
								Ext.example.msg("Archive", "Successful !");
							} else {
								Ext.example.msg("Archive", "Cannot archive !");
							}
							me.manageToolbarButtons(button);
						}
					});
				}
			}, '-', {
				xtype: 'button',
				text: 'Delete',
				icon: 'data/icons/delete.png',
				id: 'deleteButtonId',
				disabled: true,
				handler: function(button) {
					var grid = Ext.ComponentQuery.query('traffichome dynamicGrid')[0];
					var row = grid.getSelectionModel().getSelection()[0];
					Ext.Ajax.request({
						url: 'https://terminal.impulse01.com/newServer.php?do=delete_campaign',
						params: {
							campaignId: row.data['Campaign Id'],
						},
						success: function(response) {
							if(JSON.parse(response.responseText).success) {
								Ext.ComponentQuery.query('traffichome dynamicGrid')[0].getStore().load();
								var treeStore = Ext.ComponentQuery.query('trafficcontroltree')[0].getStore();
								treeStore.load();
								Ext.example.msg("Delete", "Successful !");
							} else {
								Ext.example.msg("Delete", "Cannot delete !");
							}
							me.manageToolbarButtons(button);
						}
					});
				}
			}, '-', {
				xtype: 'button',
				text: 'Edit',
				icon: 'data/icons/edit.png',
				disabled: true,
				id: 'editButtonId',
				handler: function(button) {
					var grid = Ext.ComponentQuery.query('traffichome dynamicGrid')[0];
					var row = grid.getSelectionModel().getSelection()[0];
					var campaignStore = me.getCampaignStore();
					campaignStore.load({
						params: {
							campaignId: row.data['Campaign Id']
						},
						callback: function(results, options) {
							var w = me.builtTabsBasedOnStrategy(results);
							var f = w.down('form');
							f.getForm().loadRecord(campaignStore.getAt(0));
							w.show();
						}
					});
				}
			}, '-', {
				xtype: 'button',
				text: 'Creative',
				icon: 'data/icons/creative.png',
				id: 'creativeButtonId',
				disabled: true,
				handler: function(button) {
					var grid = Ext.ComponentQuery.query('traffichome dynamicGrid')[0];
					var row = grid.getSelectionModel().getSelection()[0];
					var crwin = Ext.create('ImpulseOne.view.trafficking.CampaignCreativeWindow', {
						listeners: {
							'activate': function(win) {
								win.down('gridpanel').getStore().load({
									params: {
										campaignId: row.data['Campaign Id'],
									},
									callback: function(res) {
										var sel = []
										Ext.each(res, function(c) {
											if(c.raw['checked']) {
												sel.push(c);
											}
										});
										win.down('gridpanel').getSelectionModel().select(sel);
									}
								});
							}
						}
					});
				}
			}, '-', {
				xtype: 'button',
				text: 'New Campaign',
				icon: 'data/icons/add.png',
				handler: function() {
					Ext.widget('newcampaignwindow');
				}
			}, '-');
		};
		grid.on('itemclick', this.enableDeleteButton);
		return grid;

	},
	doPanelLayout: function(tree) {
		tree.up('panel').doLayout();
	},
	createNewAdvertiser: function(button) {
		var win = button.up('window');
		var values = win.down('form').getValues();
		Ext.Ajax.request({
			url: 'https://terminal.impulse01.com/newServer.php?do=create_new_advertiser',
			params: {
				advertiserName: values['advertiserName'],
				advertiserCategory: values['advertiserCategory']
			},
			success: function(response) {
				if(JSON.parse(response.responseText).success) {
					Ext.example.msg("Create", "Successful !");
				} else {
					Ext.example.msg("Create", "Fail !");
				}
			}
		});
		Ext.ComponentQuery.query('traffichome dynamicGrid')[0].getStore().load();
		var treeStore = Ext.ComponentQuery.query('trafficcontroltree')[0].getStore();
		treeStore.load();
		win.close();
	},
	createNewBrand: function(button) {
		var win = button.up('window');
		var values = win.down('form').getValues();
		Ext.Ajax.request({
			url: 'https://terminal.impulse01.com/newServer.php?do=create_new_brand',
			params: {
				brandName: values['brandName'],
				advertiserId: SelectedNodeId
			},
			success: function(response) {
				if(JSON.parse(response.responseText).success) {
					Ext.example.msg("Create", "Successful !");
				} else {
					Ext.example.msg("Create", "Fail !");
				}
			}
		});
		Ext.ComponentQuery.query('traffichome dynamicGrid')[0].getStore().load();
		var treeStore = Ext.ComponentQuery.query('trafficcontroltree')[0].getStore();
		treeStore.load();
		// Ext.ComponentQuery.query('trafficcontroltree')[0].getRootNode().expand(true);
		win.close();
	},
	createNewPlan: function(button) {
		var win = button.up('window');
		var values = win.down('form').getValues();
		Ext.Ajax.request({
			url: 'https://terminal.impulse01.com/newServer.php?do=create_new_plan',
			params: {
				planName: values['planName'],
				planBudget: values['maxBudget'],
				startDate: values['startDate'],
				endDate: values['endDate'],
				budgetEnforced: (values['budgetCheckbox'] ? 1 : 0),
				endDateEnforced: (values['dateCheckbox'] ? 1 : 0),
				brandId: SelectedNodeId
			},
			success: function(response) {
				if(JSON.parse(response.responseText).success) {
					Ext.example.msg("Create", "Successful !");
				} else {
					Ext.example.msg("Create", "Fail !");
				}
			}
		});
		Ext.ComponentQuery.query('traffichome dynamicGrid')[0].getStore().load();
		var treeStore = Ext.ComponentQuery.query('trafficcontroltree')[0].getStore();
		treeStore.load();
		win.close();
	},
	createNewCampaign: function(button) {
		var win = button.up('window');
		var values = win.down('form').getValues();
		Ext.Ajax.request({
			url: 'https://terminal.impulse01.com/newServer.php?do=create_new_campaign',
			params: {
				campaignName: values['campaignName'],
				// channel: values['channel'],
				strategy: values['strategy'],
				planId: SelectedNodeId
			},
			success: function(response) {
				if(JSON.parse(response.responseText).success) {
					Ext.example.msg("Create", "Successful !");
				} else {
					Ext.example.msg("Create", "Fail !");
				}
			}
		});
		Ext.ComponentQuery.query('traffichome dynamicGrid')[0].getStore().load();
		var treeStore = Ext.ComponentQuery.query('trafficcontroltree')[0].getStore();
		treeStore.load();
		win.close();
	},
	enableDeleteButton: function(grid, record) {
		//var record = record[0];
		var editButton = Ext.getCmp('editButtonId');
		var pauseButton = Ext.getCmp('pauseButtonId');
		var deleteButton = Ext.getCmp('deleteButtonId');
		var archiveButton = Ext.getCmp('archiveButtonId');
		var activateButton = Ext.getCmp('activateButtonId');
		var creativeButton = Ext.getCmp('creativeButtonId');
		if(editButton.disabled) {
			editButton.enable();
			creativeButton.enable();
		}
		if(record.data['Status'].indexOf("Draft") != -1) {
			if(deleteButton.disabled) {
				deleteButton.enable();
				activateButton.enable();
				archiveButton.disable();
				pauseButton.disable();
			}
		}
		if(record.data['Status'].indexOf("Active") != -1) {
			if(pauseButton.disabled) {
				pauseButton.enable();
				deleteButton.disable();
				activateButton.disable();
				archiveButton.disable();
			}
		}
		if(record.data['Status'].indexOf("Paused") != -1) {
			if(archiveButton.disabled) {
				archiveButton.enable();
				activateButton.enable();
				deleteButton.disable();
				pauseButton.disable();
			}
		}
		if(record.data['Status'].indexOf("Archived") != -1) {
			activateButton.disable();
			pauseButton.disable();
			deleteButton.disable();
			archiveButton.disable();
		}
	},
	builtTabsBasedOnStrategy: function(results) {
		var win = Ext.create('ImpulseOne.view.trafficking.EditCampaignWindow');
		var tabPanel = win.down('tabpanel');
		var basicTargetTab2 = tabPanel.down('#basicTargettingSecondColumn');
		var dayPartValues = basicTargetTab2.down('#dayPartValues');
		var dayPartRadio = basicTargetTab2.down('#dayPartRadio');
		var basicTargetTab = tabPanel.down('#basicTargettingFirstColumn');
		var frequencyRadio = basicTargetTab.down('#frequencyId');
		if(!results[0].data['dayParts']) {
			dayPartRadio.down('#disableradio').setValue(true);
		} else {
			dayPartRadio.down('#enableradio').setValue(true);
			dayPartValues.disabled = false;
			var val = results[0].data['dayParts'];
			dayPartValues.setValue({
				cb1: (val.indexOf('1') == -1 ? false : true),
				cb2: (val.indexOf('2') == -1 ? false : true),
				cb3: (val.indexOf('3') == -1 ? false : true),
				cb4: (val.indexOf('4') == -1 ? false : true),
				cb5: (val.indexOf('5') == -1 ? false : true),
				cb6: (val.indexOf('6') == -1 ? false : true),
			});
		}
		var optimizeRadio = basicTargetTab2.down('#optimizeRadioId');
		if(!results[0].data['optimize']) {
			optimizeRadio.down('#disableoptimize').setValue(true);
			basicTargetTab2.down('#goalTypeId').disable();
			basicTargetTab2.down('#goalValueId').disable();
		} else {
			optimizeRadio.down('#enableoptimize').setValue(true);
		}
		if(!results[0].data['frequency']) {
			frequencyRadio.down('#disablefreqId').setValue(true);
			basicTargetTab.down('#frequencyTimes').disable();
			basicTargetTab.down('#frequencyTimePeriod').disable();
		} else {
			frequencyRadio.down('#enablefreqId').setValue(true);
		}
		var strategy = results[0].data['strategy'];
		console.log('Strategy = ' + strategy);

		var mobTab = {
			title: 'Mobile Settings',
			items: [{
				xtype: 'combobox',
				name: 'osTargets',
				fieldLabel: 'Operating System',
				store: ['Android', 'iOS'],
				multiSelect: true,
			}, {
				xtype: 'combobox',
				fieldLabel: 'Carriers',
				id: 'carrierTargetsId',
				multiSelect: true,
				name: 'carrierTargets',
				valueField: 'carrier',
				displayField: 'carrier',
				width: 300,
				queryMode: 'local',
				store: {
					fields: ['carrier'],
					triggerAction: 'all',
					pageSize: 10,
					proxy: {
						type: 'ajax',
						url: 'https://terminal.impulse01.com/newServer.php?do=get_carriers',
						reader: {
							type: 'json',
							root: 'data',
							successProperty: 'success'
						}
					},
					autoLoad: false
				}
			}],
		};
		var whitelistTab = {
			title: 'Whitelist',
			layout: 'fit',
			items: [{
				xtype: 'textarea',
				autoScroll: true,
				name: 'list',
				emptyText: 'Enter domain names separated by commas'
			}]
		};
		var blacklistTab = {
			title: 'Blacklist',
			layout: 'fit',
			items: [{
				xtype: 'textarea',
				name: 'list',
				autoScroll: true,
				emptyText: 'Enter domain names separated by commas'
			}]
		};
		var contextTab = {
			title: 'Context Targeting'
		};
		var genTagTab = {
			title: 'Genrate Tags',
			items: [{
				xtype: 'combobox',
				fieldLabel: 'Vendors',
				store: ['test', 'test2', 'test3']
			}, {
				xtype: 'combobox',
				fieldLabel: 'Size',
				store: ['test', 'test2']
			}, {
				xtype: 'textfield',
				fieldLabel: 'CPM'
			}, {
				xtype: 'textarea',
				fieldLabel: 'Code',
				height: 200,
				width: 300
			}]
		};
		var audienceTab = {
			title: 'Audience Targeting',
			xtype: 'gridpanel',
			id: 'audienceTabId',
			store: Ext.ComponentQuery.query('viewport datagrid')[0].getStore(),
			selModel: Ext.create('Ext.selection.CheckboxModel'),
			columns: [{
				header: "Name",
				flex: 1.5,
				dataIndex: 'segmentName',
				tdCls: 'custom-inventory-grid-domain',
				align: 'left',
				sortable: true
			}, {
				text: "Data Persistence",
				flex: 1,
				dataIndex: 'days',
				sortable: true,
				editor: {
					xtype: 'numberfield',
					minValue: 0,
					allowBlank: false
				}
			}, {
				text: "#Users in this Group",
				flex: 1,
				dataIndex: 'userCount',
				sortable: true,

			}],
			viewConfig: {
				forceFit: true,
				stripeRows: true,
			},
			listeners: {
				'activate': function(audGrid) {
					var audTarget = results[0].data['audienceTargets'];
					var recArray = [];
					audGrid.store.each(function(rec) {
						if(audTarget) {
							var audId = rec.getId() + "";
							if(audTarget.indexOf(audId) != -1) {
								recArray.push(rec);
							}
						}
					});
					audGrid.getSelectionModel().select(recArray);
				}
			}
		};


		// var rulesTab = {
		// 	title: 'Bidding Rules'
		// };
		switch(strategy) {
		case '1':
			tabPanel.add(genTagTab);
			break;
		case '2':
			tabPanel.add(blacklistTab);
			break;
		case '3':
			tabPanel.add(audienceTab);
			break;
		case '4':
			tabPanel.add(whitelistTab);
			break;
		case '5':
			tabPanel.add(blacklistTab);
			break;
		case '6':
			tabPanel.add(genTagTab);
			break;
		case '7':
			tabPanel.add(whitelistTab);
			break;
		case '8':
			tabPanel.add(blacklistTab, audienceTab);
			break;
		case '9':
			tabPanel.add(blacklistTab);
			break;
		case '10':
			tabPanel.add(mobTab, genTagTab);
			break;
		case '11':
			tabPanel.add(mobTab, whitelistTab);
			break;
		case '12':
			tabPanel.add(mobTab, blacklistTab);
			break;
		default:
			return null;
		}
		tabPanel.doLayout();
		return win;
	},
	manageToolbarButtons: function(button) {
		if(!button.disabled) {
			button.disable();
		}
	}

});