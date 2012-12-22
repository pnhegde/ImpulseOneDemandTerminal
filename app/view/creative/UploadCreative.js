var upload =  Ext.create('Ext.ux.upload.Dialog', {
  dialogTitle: 'My Upload Widget',
  uploadUrl: 'https://terminal.impulse01.com/newServer.php?do=upload_new_creative',
});
Ext.define('ImpulseOne.view.creative.UploadCreative', {
  extend: 'Ext.window.Window',
  alias: 'widget.uploadcreative',
  title: 'Creative upload',
  width: 510,
  height: 400,
  layout: 'fit',
  buttonAlign: 'center',
  closable: false,
  modal: true,
  id: 'uploadCreative',

  initComponent: function() {
    this.items = [upload];

    this.fbar = {
      xtype: 'toolbar',
      items: [{
        xtype: 'button',
        text: 'Done',
        scope: this,
        handler: this.close
      }, {
        xtype: 'button',
        text: 'Cancel',
        action: 'cancel',
        scope: this,
        handler: this.close
      }]
    };
    this.callParent(arguments);
  }
});