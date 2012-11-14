Ext.define('ImpulseOne.view.dashboard.TopCampaignGraph', {
     extend: 'Ext.container.Container',
     alias: 'widget.topcampaigngraph',
     layout: 'hbox',
     id: 'topCampaignGraph',
     initComponent: function() {
         var me = this;
         Ext.apply(me, {
             items: [{
                 xtype: 'gridpanel',
                 title: 'Top Campaigns',
                 store: 'CampaignGraph',
                 columns: [{
                     text: 'Campaign',
                     dataIndex: 'campaign'
                 }, {
                     text: 'Impressions',
                     dataIndex: 'impressions',
                     flex: 1
                 }, {
                     text: 'Clicks',
                     dataIndex: 'clicks'
                 }, {
                     text: 'Spend',
                     dataIndex: 'spend'
                 }],
                 height: 300,
                 width: 400,

             }, {
                 xtype: 'chart',
                 width: 500,
                 height: 300,
                 animate: true,
                 store: 'CampaignGraph',
                 shadow: true,
                 legend: {
                     position: 'right'
                 },
                 axes: [{
                     type: 'Numeric',
                     minimum: 0,
                     position: 'left',
                     fields: ['impressions'],
                     title: 'Impressions',
                     grid: {
                         odd: {
                             opacity: 1,
                             fill: '#ddd',
                             stroke: '#bbb',
                             'stroke-width': 0.5
                         }
                     }
                 }, {
                     type: 'Category',
                     position: 'bottom',
                     fields: ['campaign'],
                     title: 'Campaigns'
                 }],
                 series: [{
                     type: 'line',
                     highlight: {
                         size: 7,
                         radius: 7
                     },
                     axis: 'left',
                     xField: 'campaign',
                     yField: 'impressions',
                     markerCfg: {
                         type: 'cross',
                         size: 4,
                         radius: 4,
                         'stroke-width': 0
                     }
                 }]
             }]
         });
         me.callParent(arguments);
     }
 });