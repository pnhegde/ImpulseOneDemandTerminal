Ext.define('ImpulseOne.view.creative.UploadCreative', {
  extend: 'Ext.window.Window',
  alias : 'widget.uploadcreative',
  title: 'Creative upload',
  width: 410,
  layout: 'anchor',
  buttonAlign: 'center',
  autoHeight: true,
  closable: false,
  modal: true,

  initComponent: function(){
    this.items = [
    new Ext.form.FormPanel({
      fileUpload: true,
      layout: 'fit',
      frame: true,
      autoHeight: true,
      bodyStyle: 'padding: 10px 10px 0 10px;',

      items: [
      {
        xtype: 'fileuploadfield',
        id: 'form-file',
        emptyText: 'Select your image',
        hideLabel: true,
        name: 'uploadfile'
      },
      {
        xtype: 'textfield',
        name: 'oid',
        hidden: true
      }]
    })
    ];

    this.fbar = {
      xtype: 'toolbar',
      items: [
      {
        xtype: 'button',
        text: 'Ok',
        action: 'login',
        id: ''
      },
      {
        xtype: 'button',
        text: 'Cancel',
        action: 'cancel',
        id: ''
      }
      ]
    };
    this.callParent(arguments);
  }
});