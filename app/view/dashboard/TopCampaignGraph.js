Ext.define('ImpulseOne.view.dashboard.TopCampaignGraph', {
    extend: 'Ext.container.Container',
    alias: 'widget.topcampaigngraph',
    layout: 'hbox',
    id: 'topCampaignGraph',
    autoScroll: true,
    border: true,
    style: {
        background: '#FFFFFF',
        border: 2,
        borderColor: '#DFE8F6',
        borderStyle: 'solid',
        'border-right': 'none',
        'border-bottom': 'none',
        'border-left': 'none'
    },
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
                width:600,
                height: 300,
                split: true,
                // style: {
                //     border: 3,
                //     borderColor: '#DFE8F6',
                //     borderStyle: 'solid'
                // },
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
                    fields: ['impressions', 'clicks'],
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
                    fields: ['campaign'],
                    title: 'Campaigns',
                    renderer: function(v) {
                        return Ext.String.ellipsis(v, 15, false);
                    },
                    font: '9px Arial',
                    rotate: {
                        degrees: 270
                    }

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
                    xField: 'campaign',
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