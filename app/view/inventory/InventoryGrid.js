// var exportButton = new Ext.ux.Exporter.Button({ 
//   text     : "Download as .xls" 
// });

Ext.define('ImpulseOne.view.inventory.InventoryGrid' ,{
	extend: 'Ext.grid.Panel',
	alias : 'widget.inventorygrid',
    id: 'inventoryGrid',
    style: {'font':'14px !important'},
    
	initComponent: function() {
		this.store = 'Inventory';
        this.tbar = [
        {
            xtype: 'buttongroup',
            items: [
            {
                xtype: 'splitbutton',
                text: ' <h3 style = \'font-size:13px; \'>Export as </h3>',
                arrowAlign: 'right',
                menu: [{
                    id: 'csv',
                    text: 'CSV file'
                },
                {
                    text: 'Microsoft Excel',
                    id: 'excel',
                }]
            }]
        } ];
        this.columns = [
        {
        	text: "<h3 style = \'font-size:13px; \'>Source</h3>",
        	width: 350,
        	dataIndex: 'source',
        	sortable:true,
        },
        {
        	text: "<h3 style = \'font-size:13px; \'>Category</h3>",
        	width: 250,
        	dataIndex: 'category',
        	sortable: true
        },
        {
        	text: "<h3 style = \'font-size:13px; \'>Channel</h3>",
        	width: 250, 
        	dataIndex: 'channel',
        	sortable: true
        },
        {
        	text: "<h3 style = \'font-size:13px; \'>Impressions</h3>",
        	width: 250, 
        	dataIndex: 'impressions',
        	sortable: true
        },
        {
        	text: "<h3 style = \'font-size:13px; \'>Avg CPM</h3>",
        	width: 250,
        	dataIndex: 'avgcpm',
        	sortable: true
        }
        ];
        this.viewConfig = {
        	forceFit: true
        };

        this.callParent(arguments);
    },
});
