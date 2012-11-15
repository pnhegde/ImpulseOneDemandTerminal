Ext.define('ImpulseOne.view.dashboard.Dashboard', {
    extend: 'Ext.container.Container',
    alias: 'widget.dashboard',
    layout: 'fit',
    autoScroll: true,
    requires: ['ImpulseOne.view.dashboard.TopExchangeGraph', 'ImpulseOne.view.dashboard.TopCampaignGraph'],
    initComponent: function() {
        var me = this;
        Ext.apply(me, {
            items: [{
                xtype: 'topexchangegraph',
               // region: 'north',
                margin: '2 2 2 2',
                split: true,

            }, {
                xtype: 'topcampaigngraph',
               // region: 'south',
                height: 320
            }]
        });
        me.callParent(arguments);
    }
});