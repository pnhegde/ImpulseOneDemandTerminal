/**
 * The main application viewport, which displays the whole application
 * @extends Ext.Viewport
 */
 Ext.define('ImpulseOne.view.Viewport', {
    extend: 'Ext.container.Viewport',
    alias: 'widge.viewport',

    layout: 'border',

    requires: [
    'ImpulseOne.view.inventory.InventoryGrid', 
    'ImpulseOne.view.inventory.InventoryDetail', 
    'ImpulseOne.view.creative.CreativeGrid', 
    'ImpulseOne.view.data.DataGrid', 
    'ImpulseOne.view.vendor.VendorGrid', 
    'ImpulseOne.view.dashboard.Dashboard', 
    'ImpulseOne.view.dashboard.TopExchangeGraph', 
    'ImpulseOne.view.dashboard.TopCampaignGraph',
    'ImpulseOne.view.trafficking.TrafficHome'],
    style: {
        "background-image": "url(\'data/bg.png\')",
        "width": "100%"
    },
    initComponent: function() {
        var me = this;

        Ext.apply(me, {
            items: [{
                xtype: 'container',
                height: 40,
                region: 'north',
                html: "<img src=\'data/logo.png\' \> ",

                items: [{
                    xtype: 'button',
                    border: false,
                    arrowAlign: 'right',
                    width: 140,
                    height: 40,
                    arrowCls: 'arrow',
                    text: ' <h3 style = \'color:#009;font-size:13px; \'>User Name</h3>',
                    style: {
                        'position': 'absolute',
                        'right': '20px',
                        'top': '1px',
                        'background': 'transparent !important'
                    },
                    menu: [{
                        text: 'Settings',
                        icon: 'data/icons/setting.png',
                        id: 'settings'
                    }, {
                        text: 'Finance',
                        icon: 'data/icons/finance.png',
                        id: 'finance'
                    }, {
                        text: 'Logout',
                        icon: 'data/icons/logout.png',
                        id: 'logout'
                    }]
                }]
            }, {
                xtype: 'tabpanel',
                activeTab: 1,
                cls: 'tabCss',
                deferredRender: true,
                items: [{
                    title: 'Dashboard',
                    id: 'dashboard',
                    layout: 'border',
                    items: [{
                        xtype: 'topexchangegraph',
                        region: 'center',
                    },
                    /* {
                        xtype: 'toolbar',
                        height:2,
                        region: 'center'
                    }*/
                    {
                        xtype: 'topcampaigngraph',
                        region: 'south',
                        height: 311,
                        split:true,
                    }]
                },

                {
                    title: 'Trafficking',
                    id: 'traffic',
                    layout: 'fit',
                    items: [{
                        xtype: 'traffichome',

                    }]
                }, {
                    title: 'Inventory',
                    id: 'inventory',
                    layout: 'border',
                    items: [{
                        xtype: 'inventorygrid',
                        region: 'center'
                    },
                    // { 
                    //     xtype:'inventorydetail',
                    //     region: 'south',
                    //     title: 'Creative Dimensions',
                    //     height: 200,
                    //     split: true,
                    //     collapsible:true
                    // }
                    ]
                }, {
                    title: 'Data',
                    id: 'data',
                    // tabConfig: {
                    //     tooltip: 'tooltip',
                    //     padding: '3 15 0 15'
                    // },
                    xtype: 'datagrid',
                }, {
                    title: 'Creatives',
                    id: 'creatives',
                    xtype: 'creativegrid',

                }, {
                    title: 'Vendors',
                    id: 'vendors',
                    xtype: 'vendorgrid'
                }],
                listeners: {
                    tabchange: function(tabPanel, tab) {
                        window.location.hash = '#' + tab.id;
                    }
                },
                margin: '0 0 0 0',
                region: 'center'
            }, {
                xtype: 'toolbar',
                height: 25,
                region: 'south',
                // html: '<>'
                // "<h4 style=\'font-size:10px;position:absolute;left:600px;color:#fff; \'>\
                // Copyright (C) 2012 Impulse Media Pvt.Ltd </h4>"
            }

            ]
        });

me.callParent(arguments);
}
});