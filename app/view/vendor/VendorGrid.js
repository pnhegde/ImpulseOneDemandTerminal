var filters = {
  ftype: 'filters',
  local: true,
  filters: [{
    type: 'string',
    dataIndex: 'vendorName'
  }]
};

Ext.define('ImpulseOne.view.vendor.VendorGrid', {
  extend: 'Ext.grid.Panel',
  alias: 'widget.vendorgrid',
  id: 'vendorGrid',
  columnLines: true,
  // loadMask: true,
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

  initComponent: function() {
    this.store = 'Vendor';
    this.tbar = [{
      xtype: 'box',
      html: '<b style=\'font-size:13px;\'>Direct Vendors</b>'
    }, '->', '-',
    {
      xtype: 'button',
      text: 'New Vendor',
      icon: 'data/icons/add.png',
      id: 'createNewVendor'
    }, '-',
    {
      xtype: 'button',
      text: 'Edit',
      icon: 'data/icons/edit.png',
      id: 'editVendor',
      disabled: true
    }, '-',
    {
      xtype: 'button',
      text: 'Archive',
      id: 'archiveVendor',
      icon: 'data/icons/archive.png',
      disabled: true
    }, '-'];
    this.columns = [{
      text: "ID",
      width:70,
      dataIndex: 'id',
      sortable: true,
      align: 'center'
    }, {
      text: "Name",
      flex: 2,
      dataIndex: 'vendorName',
      sortable: true,
      align: 'center',
      filterable: true,
      //  renderer : function(value, metadata) {
      //   var display = "Double click to edit";
      //   metadata.tdAttr = 'data-qtip="' +display + '"';
      //   return value;
      // }
    }, {
      text: "Vendor Type",
      flex: 1,
      dataIndex: 'entityType',
      sortable: true,
      align: 'center',
    }, {
      text: "Contact Person",
      flex: 2,
      dataIndex: 'rmName',
      sortable: true,
      align: 'center'
    }, {
      text: "Contact Mobile",
      flex: 1,
      dataIndex: 'rmMobile',
      sortable: true,
      align: 'center'
    }, {
      text: "Address",
      flex: 2,
      dataIndex: 'address',
      sortable: true,
      align: 'center',
      hidden: true
    }, {
      text: "State",
      flex: 1,
      dataIndex: 'state',
      sortable: true,
      align: 'center'
    }, {
      text: "City",
      flex: 1,
      dataIndex: 'city',
      sortable: true,
      align: 'center'
    }, {
      text: "Country",
      flex: 1,
      dataIndex: 'country',
      sortable: true,
      align: 'center',
      value: 'India'
    }, {
      text: "Zip",
      flex: 1,
      dataIndex: 'zip',
      sortable: true,
      align: 'center',
      hidden: true
    }, {
      text: "Phone",
      flex: 1,
      dataIndex: 'phone',
      sortable: true,
      align: 'center'
    }, {
      text: "CEO Name",
      flex: 1,
      dataIndex: 'ceoName',
      sortable: true,
      align: 'center',
      hidden: true
    }, {
      text: "CEO Email",
      flex: 2,
      dataIndex: 'ceoEmail',
      sortable: true,
      align: 'center',
      hidden: true
    }, {
      text: "Contact Email",
      flex: 2,
      dataIndex: 'rmEmail',
      sortable: true,
      align: 'center'
    }];
    this.viewConfig = {
      forceFit: true,
      stripeRows: true
    };
    this.callParent(arguments);
  }
});