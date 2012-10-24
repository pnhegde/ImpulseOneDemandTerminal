var filters = {
        ftype: 'filters',
        // encode and local configuration options defined previously for easier reuse
        //encode: encode, // json encode the filter query
        local: true,   // defaults to false (remote filtering)
        filters: [{
            type: 'string',
            dataIndex: 'name'
        }]
    };

Ext.define('ImpulseOne.view.creative.CreativeGrid' ,{
	extend: 'Ext.grid.Panel',
	alias : 'widget.creativegrid',
	id: 'creative',
    features: [filters],
    //plugins: [new Ext.ux.grid.HeaderFilters],
    requires: [
        'Ext.ux.grid.FiltersFeature'
    ],
    
	initComponent: function() {
		this.store = 'Creative';
        this.tbar = [
		{
			xtype: 'buttongroup',
			items: [
			{
				xtype: 'splitbutton',
				text: ' <h3>+ New Creatives</h3>',
                arrowAlign: 'right',
                menu: [{
                    id: 'htmlcreative',
                    text: ' + Create HTML Creative'
                },
                {
                    text: ' ^ Upload Flash Creatives',
                    id: 'flashcreative',
                	//xtype: 'fileuploadfield'
                }]
            }]
        },
        {
            xtype: 'buttongroup',
            id: 'action',
            width: 200,
            columns: 5,
            disabled: true,
            items: [
            {
                text: 'Preview',
                id: 'preview'
            },
            {
                text: 'Edit Tags'
            },
            {
                text: 'Archive'
            }
            ]
        }       
        ];
        this.columns = [
        {
        	text: "Id",
            id: 'col',
            width: 150,
            dataIndex: 'id',
            sortable:true,
            filter:[{xtype:"combo"}]
        },
        {
        	text: "Name",
        	width: 350,
        	dataIndex: 'name',
        	sortable: true
        },
        {
        	text: "Tags",
        	width: 350,
        	dataIndex: 'tags',
        	sortable: true
        },
        {
        	text: "Size",
        	width: 250,
        	dataIndex: 'size',
        	sortable: true
        },
        {
        	text: "Status",
        	width: 250,
        	dataIndex: 'status',
        	sortable: true
        }
        ];
        this.viewConfig = {
        	forceFit: true,
        	stripeRows: true
        };
        this.callParent(arguments);
    },
});
