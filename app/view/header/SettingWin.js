Ext.define('ImpulseOne.view.header.SettingWin' ,{
	extend: 'Ext.window.Window',
	alias : 'widget.settingwin',
	title: 'Settings',
	layout: 'fit',
    autoShow: true,
    width: 750,
    height: 500,
    modal: true,
    //bodyPadding: 15,
    initComponent: function() {
        this.buttons = [
        {
            text: 'Apply',
            action: 'apply'
        },
        {
            text: 'Cancel',
            scope: this,
            handler: this.close
        }
        ];

        this.callParent(arguments);
    }

});
