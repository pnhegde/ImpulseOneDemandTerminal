var filters = {
  ftype: 'filters',
  local: true,
  filters: [{
    type: 'string',
    dataIndex: 'name'
  }]
};

Ext.define('ImpulseOne.view.vendor.VendorGrid' ,{
  extend: 'Ext.grid.Panel',
  alias : 'widget.vendorgrid',
  id: 'vendorGrid',
  features: [filters],
  plugins :  [{  
    ptype: 'cellediting' 
  }], 
  selModel : {  
    mode: 'MULTI' 
  },
  requires: [
  'Ext.ux.grid.FiltersFeature',
  //'Ext.ux.Exporter.Button'
  ],

  initComponent: function() {
    this.store = 'Vendor';
    this.tbar = [
    {
      xtype: 'box',
      html: '<b style=\'font-size:13px;\'>Direct Advertisers</b>'
    },
    '->',
    '-',
    {
      xtype: 'button',
      text: '<b>+New Vendor</b>',
      id : 'createNewVendor'
    },
    '-',
    
    // {
    //   xtype: 'exportbutton',
    //   store: 'Data'
    // }
    ];
    this.columns = [
    {
      text: "ID",
      id: 'id',
      width: 100,
      dataIndex: 'id',
      sortable:true,
      align: 'center'
    },
    {
     text: "Name",
     width: 350,
     dataIndex: 'name',
     sortable: true,
     editor: {xtype: 'textfield'},
     align: 'center',
     filterable: true,
     renderer : function(value, metadata) {
      var display = "Double click to edit";
      metadata.tdAttr = 'data-qtip="' +display + '"';
      return value;
    }
  },
  {
   text: "Entity Type",
   width: 250,
   dataIndex: 'entitytype',
   editor: {xtype: 'textfield'},
   sortable: true,
   align: 'center',
   renderer : function(value, metadata) {
    var display = "Double click to edit";
    metadata.tdAttr = 'data-qtip="' +display + '"';
    return value;
  }
},
{
 text: "Contact Person",
 width: 300,
 dataIndex: 'rmname',
 sortable: true,
 align: 'center'
},
{
 text: "Contact Mobile",
 width: 353,
 dataIndex: 'rmmobile',
 sortable: true,
 align: 'center'
},

];
this.viewConfig = {
  forceFit: true,
  stripeRows: true
};
this.callParent(arguments);
}
});
