Ext.define('ImpulseOne.view.analytics.GraphPanel', {
    extend: 'Ext.panel.Panel',
    alias : 'widget.graphpanel',
    border: false,
    layout: 'fit',
    autoScroll: true,
    items: [{
    	xtype: 'panel',
    	id: 'graphpanelId'
    }]
});