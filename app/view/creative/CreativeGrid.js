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
       plugins :  [{  
        ptype: 'cellediting' 
      }], 
      selModel : {  
        mode: 'MULTI' 
      },
    // tools: [{  
    //     type: 'refresh' 
    // }], 


    //plugins: [new Ext.ux.grid.HeaderFilters],
    requires: [
    'Ext.ux.grid.FiltersFeature'
    ],
    
    initComponent: function() {
      this.store = 'Creative';
      this.tbar = [
      {
        xtype: 'box',
        html: '<b style=\'font-size:13px;\'>Banners </b>'
      },
      '->',
      '-',
      {
        xtype: 'button',
        //style: {'background':'#eaf3fe'},
        text: ' <h3>+ New Creatives</h3>',
        arrowAlign: 'right',
        menu: [{
          id: 'htmlcreative',
          text: ' + Create HTML Creative'
        },
        {
          text: ' ^ Upload Flash Creatives',
          id: 'flashcreative',
        }]

      },
      '-',
      //{ xtype: 'tbspacer', width: 1100 },
      {
        xtype: 'buttongroup',
        id: 'action',
        columns: 5,
        disabled: true,
        items: [
        {
          text: 'Preview',
          id: 'preview'
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
       editor: {xtype: 'textfield'},
       sortable: true,
       renderer : function(value, metadata) {
        var display = "Double click to edit tags";
        metadata.tdAttr = 'data-qtip="' +display + '"';
        return value;
      }
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
