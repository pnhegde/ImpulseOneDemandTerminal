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
    'ImpulseOne.view.vendor.VendorGrid'
    ],
    style: {"background":"#007"},
    initComponent: function() {
        var me = this;
        
        Ext.apply(me, {
            items: [
            {
                xtype: 'container',
                height: 40,
                region: 'north',
                html: "<h2 style=\'font-size:25px;position:absolute;left:10px;color:#fff ;\'> \
                ImpulseOne Demand Terminal </h2>",
                
                items: [{
                    xtype: 'button',
                    border: false,
                    arrowAlign: 'right',
                    width: 140,
                    height: 40,
                    arrowCls: 'arrow',
                    text: ' <h3 style = \'color:#fff;font-size:13px; \'>User Name</h3>',
                    style: { 'position':'absolute','right':'20px', 'top': '1px','background':'transparent !important'},
                    menu: [{
                        text: 'Settings',
                        id: 'settings'
                    },
                    {
                        text: 'Finance',
                        id: 'finance'
                    },
                    {
                        text: 'Logout',
                        id: 'logout'
                    }]
                }]
            },
            {
                xtype: 'tabpanel',
                items: [ 
                { 
                    title: '<h3 style = \'font-size:14px; \'>Inventory</h3>',
                    id: 'inventory',
                    layout:'border',
                    items:[
                    {
                        xtype:'inventorygrid',
                        region: 'center'
                    },
                    { 
                        xtype:'inventorydetail',
                        region: 'south',
                        title: 'Creative Dimensions',
                        height: 200,
                        split: true,
                        collapsible:true
                    }]
                },
                { 
                    title: '<h3 style = \'font-size:14px; \'>Trafficking</h3>',
                    id:'traffic',
                    items:[
                    { 
                        xtype:'box',
                        html:'Traffic test'

                    }
                    ]
                },
                { 
                    title: '<h3 style = \'font-size:14px; \'>Data</h3>',
                    id: 'data',
                    tabConfig: {
                        tooltip: 'tooltip',
                        padding: '3 15 0 15'

                    },
                    items:[
                    {
                        xtype:'datagrid',
                    }
                    ]
                },
                { 
                    title: '<h3 style = \'font-size:14px; \'>Creatives</h3>',
                    id:'creatives',
                    items:[
                    {
                        xtype:'creativegrid',
                    }
                    ]
                },
                { 
                    title: '<h3 style = \'font-size:14px; \'>Vendors </h3>',
                    id:'vendors',
                    items:[
                    {
                        xtype:'vendorgrid',
                    }
                    ]
                }
                ],
                listeners: {
                    tabchange: function( tabPanel, tab ) {
                        window.location.hash = '#'+ tab.id;
                    }
                },
                margin: '3 4 3 4',
                region: 'center'
            },
            {
                xtype: 'box',
                height: 16,
                region: 'south',
                html: "<h4 style=\'font-size:10px;position:absolute;left:600px;color:#fff; \'>\
                Copyright (C) 2012 Impulse Media Pvt.Ltd </h4>"
            }

            ]    
        });

me.callParent(arguments);
}
});