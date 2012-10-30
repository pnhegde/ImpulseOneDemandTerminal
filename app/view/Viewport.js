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
    style: {"background-image":"url(\'data/bg.png\')","width":"100%"},
    initComponent: function() {
        var me = this;
        
        Ext.apply(me, {
            items: [
            {
                xtype: 'container',
                height: 40,
                region: 'north',
                html: "<img src=\'data/logo.gif\' \> ",
                
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
                    title: 'Dashboard',
                    id:'dashboard',
                    items:[
                    { 
                        xtype:'box',
                        html:'Dashboard'

                    }
                    ]
                },
                
                { 
                    title: 'Trafficking',
                    id:'traffic',
                    items:[
                    { 
                        xtype:'box',
                        html:'Traffic test'

                    }
                    ]
                },{ 
                    title: 'Inventory',
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
                    title: 'Data',
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
                    title: 'Creatives',
                    id:'creatives',
                    items:[
                    {
                        xtype:'creativegrid',
                    }
                    ]
                },
                { 
                    title: 'Vendors',
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
                margin: '0 0 0 0',
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