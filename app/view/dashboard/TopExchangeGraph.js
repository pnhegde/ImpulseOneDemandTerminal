 Ext.define('ImpulseOne.view.dashboard.TopExchangeGraph', {
     extend: 'Ext.container.Container',
     alias: 'widget.topexchangegraph',
     layout: 'hbox',
     id: 'topExchangeGraph',
     autoScroll: true,
     style: {
         background: '#FFFFFF'
     },
     initComponent: function() {
         var me = this;
         Ext.apply(me, {
             items: [{
                 xtype: 'gridpanel',
                 id: 'exchangegrid',
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
                 height: 250,
                 width: 400,

             }, {
                 xtype: 'chart',
                 id: 'exchangepiechart',
                 flex: 1,
                 height: 200,
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
                         width: 120,
                         height: 35,
                         renderer: function(storeItem, item) {
                             this.setTitle('Impressions = ' + storeItem.get('impressions') + "\nClicks = " + storeItem.get('clicks'));
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
                         font: '12px Arial',
                     }
                 }]

             }, {
                 xtype: 'chart',
                 flex: 2,
                 height: 230,
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
                     title: 'Impressions',
                     fields: ['impressions', 'clicks'],
                     //hidden: true,
                     renderer: function(v) {
                         return Ext.String.ellipsis(v, 15, false);
                     },
                     font: '9px Arial',
                     rotate: {
                         degrees: 270
                     },
                     grid: true
                 }, {
                     type: 'Category',
                     position: 'bottom',
                     fields: ['exchange'],
                     title: 'Exchange'
                 }],
                 series: [{
                     type: 'line',
                     highlight: {
                         size: 4,
                         radius: 4
                     },
                     axis: 'left',
                     xField: 'exchange',
                     yField: 'impressions',
                     markerCfg: {
                         type: 'cross',
                         size: 4,
                         radius: 4,
                         'stroke-width': 0,
                     },
                     style: {
                         stroke: 'red'
                     }

                 }, {
                     type: 'column',
                     highlight: {
                         size: 3,
                         radius: 3
                     },
                     shadow: true,
                     style: {
                         fill: '#456d9f'
                     },
                     highlightCfg: {
                         fill: '#a2b5ca'
                     },
                     label: {
                         contrast: true,
                         display: 'insideEnd',
                         field: 'ctr %',
                         color: '#000',
                         orientation: 'vertical',
                         'text-anchor': 'middle'
                     },
                     axis: 'right',
                     fill: true,
                     xField: 'exchange',
                     yField: 'clicks',
                     markerCfg: {
                         type: 'circle',
                         size: 3,
                         radius: 3,
                         'stroke-width': 0
                     },
                     tips: {
                         trackMouse: true,
                         width: 120,
                         height: 35,
                         renderer: function(storeItem, item) {
                             this.setTitle('Impressions = ' + storeItem.get('impressions') + "\n Click = " + storeItem.get('clicks'));
                         }
                     },
                     label: {
                         field: 'clicks',
                         display: 'insideEnd',
                         contrast: true,
                         font: '11px Arial'
                     }
                 }]
             }]
         });
         me.callParent(arguments);
     }
 });