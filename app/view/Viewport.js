/**
 * The main application viewport, which displays the whole application
 * @extends Ext.Viewport
 */
 Ext.define('ImpulseOne.view.Viewport', {
    extend: 'Ext.container.Viewport',
    alias: 'widge.viewport',

    layout: 'border',

    requires: ['ImpulseOne.view.inventory.InventoryGrid', 'ImpulseOne.view.inventory.InventoryDetail', 'ImpulseOne.view.creative.CreativeGrid', 'ImpulseOne.view.data.DataGrid', 'ImpulseOne.view.vendor.VendorGrid', 'ImpulseOne.view.dashboard.Dashboard',
    // 'ImpulseOne.view.dashboard.TopExchangeGraph', 
    // 'ImpulseOne.view.dashboard.TopCampaignGraph',
    'ImpulseOne.view.trafficking.TrafficHome', 'ImpulseOne.view.analytics.AnalyticHome'],
    style: {
        //"background-image": "url(\'data/bg.png\')",
        "background-color" : '#F9F9F9',
        "width": "100%"
    },
    initComponent: function() {
        var me = this;
        //This is the parent container for all components of this application. Everything comes under this viewport component.
        Ext.apply(me, {
            items: [{
                xtype: 'container', // Header region. Contains App name, Logo, Logout menu etc. 
                height: 40,
                region: 'north',
                html: "<img src=\'data/logo.png\' \> ",
                //Components of Header region
                items: [{
                    xtype: 'button',
                    border: true,
                    arrowAlign: 'right',
                    width: 200,
                    height: 30,
                    arrowCls: 'arrow',
                    text: '<h3 style = \'color:#009;font-size:12px; \'> '+accountName+'</h3>',
                    style: {
                        'position': 'absolute',
                        'right': '20px',
                        'top': '10px',
                        'background': 'transparent !important'
                    },
                    menu: [{
                        text: 'Settings',
                        width: 190,
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
                xtype: 'tabpanel', //Center region is a tab panel. Consists of different operating tabs. 
                cls: 'tabCss',
                // deferredRender: true,
                items: [{
                    xtype: 'panel',
                    width:  Ext.getBody().getViewSize().width ,
                    height:  Ext.getBody().getViewSize().height - 49,
                    layout: 'fit',
                    autoScroll: true,
                    title: 'Dashboard',
                    id: 'dashboard',
                }, {
                    title: 'Campaign Console',
                    id: 'traffic',
                    layout: 'fit',
                    items: [{
                        xtype: 'traffichome',

                    }]
                }, {
                    title: 'Inventory Query',
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
                    title: 'Audience Management',
                    id: 'data',
                    // tabConfig: {
                    //     tooltip: 'tooltip',
                    //     padding: '3 15 0 15'
                    // },
                    xtype: 'datagrid',
                }, {
                    title: 'Creative Management',
                    id: 'creatives',
                    xtype: 'creativegrid'

                }, /*{
                    title: 'Vendor Management',
                    id: 'vendors',
                    xtype: 'vendorgrid'
                },*/ {
                    title: 'Campaign Insight',
                    id: 'analytics',
                    xtype: 'analytichome'
                }],
                // listeners: {
                //     tabchange: function(tabPanel, tab) {
                //         window.location.hash = '#' + tab.id;
                //     },
                //     afterrender: function(tabpanel) {
                //         var i = window.location.hash != "" ? (window.location.hash).substring(1) : "dashboard"
                //         window.location.hash = '#'+i;
                //         tabpanel.setActiveTab(i);
                //     }
                // },
                margin: '0 0 0 0',
                region: 'center'
            }, {
                xtype: 'toolbar', //Footer of the page. 
                height: 25,
                region: 'south',
                html: '<h4 style=\'font-size:11px;position:absolute;left:600px;color:#000; \'>\
                Impulse Demand Terminal &copy; 2012  - <a href = "http://impulsemedia.co.in">Impulse Media Pvt.Ltd</a> </h4>'
            }

            ]
        });

me.callParent(arguments);
}
});
