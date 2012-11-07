var filters = {
  ftype: 'filters',
  local: true,
  filters: [{
    type: 'string',
    dataIndex: 'creativeName'
  }]
};

Ext.define('ImpulseOne.view.creative.CreativeGrid', {
  extend: 'Ext.grid.Panel',
  alias: 'widget.creativegrid',
  id: 'creative',
  columnLines: true,
  features: [filters],
  plugins: [{
    ptype: 'cellediting'
  }],
  selModel: {
    mode: 'MULTI'
  },
  // tools: [{  
  //     type: 'refresh' 
  // }], 
  requires: ['Ext.ux.grid.FiltersFeature'],

  initComponent: function() {
    this.store = 'Creative';
    this.tbar = [{
      xtype: 'box',
      html: '<b style=\'font-size:13px;\'>Banners </b>'
    }, '->', '-',
    {
      xtype: 'button',
      text: 'Edit',
      icon: 'data/icons/edit.png',
      disabled: true,
      id: 'HtmlEditButton'
    }, '-',
    {
      xtype: 'button',
      //style: {'background':'#eaf3fe'},
      text: 'New Creatives',
      icon: 'data/icons/add.png',
      arrowAlign: 'right',
      menu: [{
        id: 'htmlcreative',
        text: ' + Create HTML Creative'
      }, {
        text: ' ^ Upload Creatives',
        id: 'creativeupload',
      }]

    }, '-',
    //{ xtype: 'tbspacer', width: 1100 },
    // {
    //   xtype: 'buttongroup',
    //   id: 'action',
    //   columns: 5,
    //   disabled: true,
    //   items: [{
    //     text: 'Preview',
    //     id: 'preview'
    //   }, {
    //     text: 'Archive'
    //   }]
    // }
    ];
    this.columns = [{
      header: "Id",
      id: 'col',
      width: 80,
      dataIndex: 'creativeId',
      sortable: true,
      align: 'center',
      filter: [{
        xtype: "text"
      }]
    }, {
      header: "Name",
      flex: 2,
      dataIndex: 'creativeName',
      align: 'center',
      sortable: true
    }, {
      header: "Creative Type",
      flex: 2,
      dataIndex: 'creativeType',
      align: 'center',
      sortable: true
    }, {
      header: "Width",
      flex: 1,
      dataIndex: 'width',
      align: 'center',
      sortable: true
    }, {
      header: "Height",
      flex: 1,
      dataIndex: 'height',
      align: 'center',
      sortable: true
    }, {
      header: "Status",
      flex: 1,
      dataIndex: 'status',
      align: 'center',
      sortable: true
    }, {
      xtype: 'actioncolumn',
      header: 'Action',
      width: 70,
      items: [{
        iconCls: 'icon-preview',
        icon: 'data/icons/preview.png',
        tooltip: 'Preview',
      }, {
        iconCls: 'icon-archive',
        icon: 'data/icons/archive.png',
        tooltip: 'Archive'
      }]
    }];
    this.viewConfig = {
      forceFit: true,
      stripeRows: true
    };
    this.callParent(arguments);
  },
});