Ext.define('ImpulseOne.view.analytics.LineBarGrid', {
	extend: 'Ext.grid.Panel',
	alias : 'widget.linebargrid',
	id: 'linebargridId',
    url: 'https://user.impulse01.com/newServer.php?do=get_linebargrid',
    initComponent: function() {
        console.log('DynamicGrid initComponent!');
        var me = this;

        if (me.url == '') {
            Ext.Error.raise('url parameter is empty! You have to set proper url to get data form server.');
        }
        else {
            Ext.applyIf(me, {
                columns: [],
                forceFit: true,
                store: Ext.create('ImpulseOne.store.LineBarGrid')
            });
        }
        me.callParent(arguments);
    }
});

