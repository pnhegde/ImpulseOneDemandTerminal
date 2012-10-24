Ext.define('ImpulseOne.view.inventory.InventoryDetail' ,{
	extend: 'Ext.grid.Panel',
	alias : 'widget.inventorydetail',
    id: 'inventoryDetail',
    style: {'font':'14px !important'},
    
	initComponent: function() {
		this.store = 'Inventory';
        
        this.columns = [
        {
        	text: "<h3 style = \'font-size:13px; \'>Dimension</h3>",
        	width: 600,
        	dataIndex: 'source',
        	sortable:true,
        },
        {
        	text: "<h3 style = \'font-size:13px; \'>Position</h3>",
        	width: 400,
        	dataIndex: 'category',
        	sortable: true
        },
        {
        	text: "<h3 style = \'font-size:13px; \'>Impressions</h3>",
        	width: 350, 
        	dataIndex: 'channel',
        	sortable: true
        }
        ];
        this.viewConfig = {
        	forceFit: true
        };

        this.callParent(arguments);
    },
});
