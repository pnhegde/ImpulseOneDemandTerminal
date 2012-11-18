Ext.define('ImpulseOne.view.trafficking.DynamicTrafficGrid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.dynamictrafficgrid',
    url: 'https://user.impulse01.com/newServer.php?do=get_advertisers',
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
                store: Ext.create('ImpulseOne.store.DynamicTrafficGrid')
            });
        }

        me.callParent(arguments);
    }
});

