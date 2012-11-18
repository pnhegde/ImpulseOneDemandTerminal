Ext.define('ImpulseOne.controller.TrafficControlTrees', {
	extend: 'Ext.app.Controller',
	//stores: ['TrafficControlTree'],
	//models: ['TrafficControlTree'],
	views: ['trafficking.TrafficControlTree',
	'trafficking.TrafficHome',
	'Ext.ux.grid.DynamicGrid'],

	init: function() {
		//this.getTrafficControlTreeStore().load();
		this.control({
			'trafficcontroltree' : {
				itemclick: this.clickHandler,
				collapse: this.doPanelLayout,
				expand: this.doPanelLayout
			},

		});
	},
	clickHandler: function(tree,node){
		Ext.getCmp('traffichomeId').setLoading("Loading");
		setTimeout(function(){Ext.getCmp('traffichomeId').setLoading(false)},1000);
		var nodeId = node.data['id'];
		console.log(nodeId);
		var nodeType = "advertisers";
		if(nodeId.indexOf('adv') != -1) {
			nodeType = "brands";
		} if (nodeId.indexOf('brand') != -1) {
			nodeType = "plans";
		} if(nodeId.indexOf('plan') != -1) {
			nodeType = "campaigns";
		} ;
		var url = 'https://user.impulse01.com/newServer.php?do=get_'+nodeType;
		var home = Ext.getCmp('traffichomeId');
		var grid = Ext.create('Ext.ux.grid.DynamicGrid',{url: url,param: nodeId});
		grid.down('toolbar').add({
			xtype: 'box',
			height: 20,
			html: nodeType
		},'->','-',{
			xtype: 'button',
			text: 'Create New',
			icon: 'data/icons/add.png'
		},'-');
		home.remove(home.items.last(),true);
		home.doLayout();
		console.log(home.getLayout().getLayoutItems());
		home.add(grid);
		home.doLayout();
		
	},
	doPanelLayout: function(tree) {
		tree.up('panel').doLayout();
	}
});