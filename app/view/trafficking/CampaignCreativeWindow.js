var filters = {
  ftype: 'filters',
  local: true,
  filters: [{
    type: 'string',
    dataIndex: 'creativeName'
  }]
};

Ext.define('ImpulseOne.view.trafficking.CampaignCreativeWindow', {
  extend: 'Ext.window.Window',
  alias: 'widget.campaigncreativewindow',
  id: 'campaigncreativeid',
  layout: 'fit',
  title: 'Creatives',
  autoShow: true,
  width: 800,
  height: 500,
  modal: true,
  autoScroll: true,
  requires: ['Ext.ux.grid.FiltersFeature'],
  initComponent: function() {
    this.items = [{
      xtype: 'gridpanel',
      id: 'campaigncreativegridid',
      store: 'CampaignCreative',
      selModel: Ext.create('Ext.selection.CheckboxModel', {
        mode: 'SIMPLE',
        pruneRemoved: true
      }),
      features: [filters],
      plugins: [
      Ext.create('Ext.grid.plugin.CellEditing', {
        clicksToEdit: 1
      })],
      columns: [{
        header: "Name",
        flex: 2,
        dataIndex: 'creativeName',
        tdCls: 'custom-inventory-grid-domain',
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
        header: "Destination URL",
        flex: 1.5,
        dataIndex: 'destinationUrl',
        align: 'left',
        sortable: true,
        editor: {
          xtype: 'textfield',
        },
        tdCls: 'custom-creative-grid'
      }],
      viewConfig: {
        forceFit: true,
        stripeRows: true,
      },
    }], this.buttons = [{
      text: 'Create',
      action: 'save'
    }, {
      text: 'Cancel',
      scope: this,
      handler: this.close
    }];
    this.callParent(arguments);
  }

});