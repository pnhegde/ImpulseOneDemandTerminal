Ext.define('ImpulseOne.controller.TrafficControlTrees', {
	extend: 'Ext.app.Controller',
	models: ['Campaign'],
	stores: ['Campaign'],
	views: ['trafficking.TrafficControlTree', 'trafficking.TrafficHome', 'trafficking.NewAdvertiserWindow', 'trafficking.NewBrandWindow', 'trafficking.NewPlanWindow', 'trafficking.NewCampaignWindow', 'trafficking.EditCampaignWindow', 'Ext.ux.grid.DynamicGrid'],

	init: function() {
		me = this;
		this.control({
			'trafficcontroltree': {
				itemclick: this.treeNodeClickHandler,
				collapse: this.doPanelLayout,
				expand: this.doPanelLayout
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
		var url = 'https://user.impulse01.com/newServer.php?do=get_' + nodeType;
		var grid = Ext.create('Ext.ux.grid.DynamicGrid', {
			url: url,
			param: nodeId
		});
		if(nodeType == "advertisers") {
			grid.down('toolbar').add({
				xtype: 'box',
				height: 20,
				html: nodeType
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
						url: 'https://user.impulse01.com/newServer.php?do=delete_advertiser',
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
				html: nodeType
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
						url: 'https://user.impulse01.com/newServer.php?do=delete_brand',
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
				html: nodeType
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
						url: 'https://user.impulse01.com/newServer.php?do=delete_plan',
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
				html: nodeType
			}, '->', '-', {
				xtype: 'button',
				text: 'Delete',
				icon: 'data/icons/delete.png',
				id: 'deleteButtonId',
				disabled: true,
				handler: function() {
					var grid = Ext.ComponentQuery.query('traffichome dynamicGrid')[0];
					var row = grid.getSelectionModel().getSelection()[0];
					Ext.Ajax.request({
						url: 'https://user.impulse01.com/newServer.php?do=delete_campaign',
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
							var deleteButton = Ext.getCmp('deleteButtonId');
							if(!deleteButton.disabled) {
								deleteButton.disable();
							}
							if(!Ext.getCmp('editButtonId').disabled) {
								Ext.getCmp('editButtonId').disable();
							}
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
							var w = Ext.create('ImpulseOne.view.trafficking.EditCampaignWindow');
							var f = w.down('form');
							f.getForm().loadRecord(campaignStore.getAt(0));
							w.show();
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
			url: 'https://user.impulse01.com/newServer.php?do=create_new_advertiser',
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
			url: 'https://user.impulse01.com/newServer.php?do=create_new_brand',
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
			url: 'https://user.impulse01.com/newServer.php?do=create_new_plan',
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
			url: 'https://user.impulse01.com/newServer.php?do=create_new_campaign',
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
		var deleteButton = Ext.getCmp('deleteButtonId');
		if(deleteButton.disabled) {
			deleteButton.enable();
		}
		if(Ext.getCmp('editButtonId')) {
			Ext.getCmp('editButtonId').enable();
		}
	}
});