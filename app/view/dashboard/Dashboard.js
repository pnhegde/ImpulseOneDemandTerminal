Ext.define('ImpulseOne.view.dashboard.Dashboard', {
    extend: 'Ext.form.Panel',
    alias: 'widget.dashboard',
    layout: 'border',
    autoScroll : true,
    requires: ['ImpulseOne.view.dashboard.TopExchangeGraph','ImpulseOne.view.dashboard.TopCampaignGraph'],
    initComponent: function() {
        var me = this;
        Ext.apply(me, {
            items: [{
                xtype: 'topexchangegraph',
                region: 'north',
                margin: '2 2 2 2',
                split : true,

            },{
                xtype: 'topcampaigngraph',
                region: 'south',
                // width: 1300,
                 height: 320
            }]
        });
        me.callParent(arguments);
    }
});