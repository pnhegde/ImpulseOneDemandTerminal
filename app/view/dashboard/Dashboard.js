Ext.define('ImpulseOne.view.dashboard.Dashboard', {
    extend: 'Ext.container.Container',
    alias: 'widget.dashboard',
    layout: 'fit',
    autoScroll: true,
    //requires: ['ImpulseOne.view.dashboard.TopExchangeGraph', 'ImpulseOne.view.dashboard.TopCampaignGraph'],
    initComponent: function() {
        var me = this;
        Ext.apply(me, {
            items: [{
                xtype: 'panel',
                listeners: {
                    'render': function(panel) {
                        AnyChart.renderingType = anychart.RenderingType.SVG_ONLY;
                        var chart = new AnyChart();
                        chart.width = '100%';
                        chart.height = '100%';
                        chart.setXMLFile('https://user.impulse01.com/anychart/maindashboard.xml');
                        chart.write(panel.body);
                    }
                }
            }
            /*{
                xtype: 'topexchangegraph',
               // region: 'north',
                margin: '2 2 2 2',
                split: true,

            }, {
                xtype: 'topcampaigngraph',
               // region: 'south',
                height: 320
            }*/
            ]
        });
        me.callParent(arguments);
    }
});