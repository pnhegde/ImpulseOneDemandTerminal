var filters = {
  ftype: 'filters',
  local: true,
  filters: [{
    type: 'string',
    dataIndex: 'segmentName'
  }]
};

Ext.define('ImpulseOne.view.data.DataGrid' ,{
  extend: 'Ext.grid.Panel',
  alias : 'widget.datagrid',
  requires: ['Ext.toolbar.Paging'],
  id: 'dataGrid',
  flex: 0.6,
  height: 570,
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
      id: 'segmentId',
      width: 100,
      dataIndex: 'segmentId',
      sortable:true,
      align: 'center'
    },
    {
     text: "Name",
     width: 350,
     dataIndex: 'segmentName',
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
   dataIndex: 'days',
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
 dataIndex: 'userCount',
 sortable: true,
 align: 'center'
},
{
 text: "Attributes",
 width: 433,
 dataIndex: 'attrib',
 sortable: true,
 align: 'center'
},

];
this.dockedItems = {
  xtype: 'pagingtoolbar',
  dock:'top',
  store: 'Data',
  displayInfo: true,
  displayMsg: 'ImpulseOne {0} - {1} of {2}',
  emptyMsg: "Nenhum contato encontrado."
};
this.viewConfig = {
  forceFit: true,
  stripeRows: true
};
this.callParent(arguments);
}
});
