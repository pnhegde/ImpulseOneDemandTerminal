Ext.define('ImpulseOne.store.TrafficControlTree', {
	extend: 'Ext.data.TreeStore',
	model: 'ImpulseOne.model.TrafficControlTree',
	autoLoad: true,
	proxy: {
		type: 'ajax',
		url: 'https://user.impulse01.com/newServer.php?do=get_tree',
		extraParams: {
			isXml: true
		},
		reader: {
			type: 'xml',
			root: 'nodes',
			record: 'node'
		}
	},
	root: {
		text: 'Advertisers',
		id: 'src',
		expanded: false,
		expandable: true
	}

}) ;