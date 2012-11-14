 /*Ext.create('Ext.data.JsonStore', {
     fields: ['exchange', 'impressions', 'cps'],
     data: [{
         'exchange': 'Google AdX',
         'impressions': 32,
         'cps': 12
     }, {
         'exchange': 'Rubicon',
         'impressions': 7,
         'cps': 11
     }, {
         'exchange': 'Pubmatic',
         'impressions': 11,
         'cps': 9
     }, {
         'exchange': 'SpotXchange',
         'impressions': 14,
         'cps': 14
     }, {
         'exchange': 'OpenX',
         'impressions': 27,
         'cps': 17
     }]
 });*/

 Ext.define('ImpulseOne.view.dashboard.TopExchangeGraph', {
     extend: 'Ext.container.Container',
     alias: 'widget.topexchangegraph',
     layout: 'hbox',
     id: 'topExchangeGraph',
     initComponent: function() {
         var me = this;
         Ext.apply(me, {
             items: [{
                 xtype: 'gridpanel',
                 title: 'Top Exchanges',
                 store: 'ExchangeGraph',
                 columns: [{
                     text: 'Exchange',
                     dataIndex: 'exchange'
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
                 width: 450,
                 height: 300,
                 animate: true,
                 store: 'ExchangeGraph',
                 title: 'PIE Chart',
                 theme: 'Base:gradients',
                 series: [{
                     type: 'pie',
                     angleField: 'impressions',
                     showInLegend: true,
                     tips: {
                         trackMouse: true,
                         width: 140,
                         height: 28,
                         renderer: function(storeItem, item) {
                             this.setTitle(storeItem.get('impressions'));
                         }
                     },
                     highlight: {
                         segment: {
                             margin: 20
                         }
                     },
                     label: {
                         field: 'exchange',
                         display: 'rotate',
                         contrast: true,
                         font: '18px Arial'
                     }
                 }]

             }, {
                 xtype: 'chart',
                 width: 500,
                 height: 300,
                 animate: true,
                 store: 'ExchangeGraph',
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
                     // grid: {
                     //     odd: {
                     //         opacity: 1,
                     //         fill: '#ddd',
                     //         stroke: '#bbb',
                     //         'stroke-width': 0.5
                     //     }
                     // }
                 }, {
                     type: 'Category',
                     position: 'bottom',
                     fields: ['exchange'],
                     title: 'Exchange'
                 }],
                 series: [{
                     type: 'line',
                     highlight: {
                         size: 7,
                         radius: 7
                     },
                     axis: 'left',
                     xField: 'exchange',
                     yField: 'impressions',
                     // markerCfg: {
                     //     type: 'cross',
                     //     size: 4,
                     //     radius: 4,
                     //     'stroke-width': 0
                     // }
                 }]
             }]
         });
         me.callParent(arguments);
     }
 });