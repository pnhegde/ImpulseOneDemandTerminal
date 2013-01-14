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
      height: 18,
      html: '<h3 style=\'font-size:12px;\'>&nbsp&nbspBanners </h3>'
    }, '->', '-',
    {
      xtype: 'checkboxfield',
      fieldLabel: 'Show Archived',
      checked: false,
    },  '-' ,  {
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
        icon: 'data/icons/html.png',
        text: 'Create HTML Creative'
      }, {
        text: 'Upload Creatives',
        icon: 'data/icons/upload.png',
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
      align: 'left',
      filter: [{
        xtype: "text"
      }]
    }, {
      header: "Name",
      flex: 2,
      dataIndex: 'creativeName',
      tdCls : 'custom-inventory-grid-domain',
      align: 'left',
      sortable: true
    }, {
      header: "Creative Type",
      flex: 2,
      dataIndex: 'creativeType',
      align: 'left',
      sortable: true
    }, {
      header: "Width",
      flex: 1,
      dataIndex: 'width',
      align: 'left',
      sortable: true
    }, {
      header: "Height",
      flex: 1,
      dataIndex: 'height',
      align: 'left',
      sortable: true
    }, {
      header: "Status",
      flex: 1,
      dataIndex: 'status',
      align: 'left',
      sortable: true,
      tdCls: 'custom-creative-grid'
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
      stripeRows: true,
      getRowClass: function(record, index) {
        var c = record.get('status');
        if(c == "Active") {
          return 'active-status';
        } else if(c == "Pending") {
          return 'pending-status';
        } else if(c == "Archived") {
          return 'archive-status';
        }
      }
    };
    this.callParent(arguments);
  },
});