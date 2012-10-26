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

Ext.define('ImpulseOne.view.data.DataGrid' ,{
  extend: 'Ext.grid.Panel',
  alias : 'widget.datagrid',
  id: 'dataGrid',
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
    this.store = 'Data';
    this.tbar = [
    {
      xtype: 'box',
      html: '<b style=\'font-size:13px;\'>Impulse Audiencce Cloud - Managed Audience Groups</b>'
    },
    '->',
    '-',
    {
      xtype: 'button',
      text: '<b>+New Audience Group</b>',
      id : 'createNewButton'
    },
    '-',
    {
      xtype: 'button',
      id: 'codeButton',
      text: '<b>Get Code</b>',
      disabled: true

    },
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
     text: "Data Persistence",
     width: 200,
     dataIndex: 'dp',
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
   text: "#Users in this Group",
   width: 250,
   dataIndex: 'users',
   sortable: true,
   align: 'center'
 },
 {
   text: "Attributes",
   width: 453,
   dataIndex: 'attrib',
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
