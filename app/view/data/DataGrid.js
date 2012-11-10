var filters = {
  ftype: 'filters',
  local: true,
  filters: [{
    type: 'string',
    dataIndex: 'segmentName'
  }]
};

Ext.define('ImpulseOne.view.data.DataGrid', {
  extend: 'Ext.grid.Panel',
  alias: 'widget.datagrid',
  requires: ['Ext.toolbar.Paging'],
  id: 'dataGrid',
  columnLines: true,
  flex: 0.6,
  height: 570,
  features: [filters],
  plugins: [{
    ptype: 'cellediting'
  }],
  selModel: {
    mode: 'MULTI'
  },
  requires: ['Ext.ux.grid.FiltersFeature',
  //'Ext.ux.Exporter.Button'
  ],
  plugins: [
  Ext.create('Ext.grid.plugin.RowEditing', {
    clicksToEdit: 2
  })],
  selType: 'rowmodel',
  initComponent: function() {
    this.store = 'Data';
    this.tbar = [{
      xtype: 'box',
      html: '<b style=\'font-size:13px;\'>Impulse Audiencce Cloud - Managed Audience Groups</b>'
    }, '->', '-',
    {
      xtype: 'button',
      text: 'New Audience Group',
      icon: 'data/icons/add.png',
      id: 'createNewButton'
    }, '-',
    {
      xtype: 'button',
      id: 'codeButton',
      text: 'Get Code',
      icon: 'data/icons/download.png',
      disabled: true

    },
    // {
    //   xtype: 'exportbutton',
    //   store: 'Data'
    // }
    ];
    this.columns = [{
      text: "ID",
      id: 'id',
      width:80,
      dataIndex: 'id',
      sortable: true,
      align: 'center'
    }, {
      text: "Name",
      flex: 2,
      dataIndex: 'segmentName',
      editor: {
        xtype: 'textfield',
        allowBlank: false
      },
      sortable: true,
      align: 'center',
      filterable: true,
      //  renderer : function(value, metadata) {
      //   var display = "Double click to edit";
      //   metadata.tdAttr = 'data-qtip="' +display + '"';
      //   return value;
      // }
    }, {
      text: "Data Persistence",
      flex: 1,
      dataIndex: 'days',
      //editor: {xtype: 'textfield'},
      sortable: true,
      align: 'center',
      editor: {
        xtype: 'numberfield',
        minValue: 0,
        allowBlank: false
      }
      //  renderer : function(value, metadata) {
      //   var display = "Double click to edit";
      //   metadata.tdAttr = 'data-qtip="' +display + '"';
      //   return value;
      // }
    }, {
      text: "#Users in this Group",
      flex: 1,
      dataIndex: 'userCount',
      sortable: true,
      align: 'center'
    }, {
      text: "Date",
      flex: 2,
      dataIndex: 'date',
      sortable: true,
      align: 'center'
    }, {
      text: "Piggy Back",
      flex: 1,
      dataIndex: 'piggyback',
      sortable: true,
      align: 'center',
      hidden: true
    }

    ];
    this.dockedItems = {
      xtype: 'pagingtoolbar',
      dock: 'bottom',
      store: 'Data',
      displayInfo: true,
      displayMsg: 'ImpulseOne {0} - {1} of {2}',
      emptyMsg: "ImpulseOne"
    };
    this.viewConfig = {
      forceFit: true,
      stripeRows: true
    };
    this.callParent(arguments);
  }
});