Ext.define('ImpulseOne.view.data.GetCode' ,{
	extend: 'Ext.window.Window',
	alias : 'widget.getcode',
	layout: 'fit',
    title: 'Get Code',
    autoShow: true,
    width: 350,
    height: 300,
    modal: true,
    // closable: false,
    autoScroll: true,
    initComponent: function() {
        this.items = [
        {
            xtype: 'textarea',
            emptyText: 'Copy this code'
        }
        
        ];

        this.buttons = [
        {
            text: 'Copy',
            action: 'save'
        },
        {
            text: 'Cancel',
            scope: this,
            handler: this.close
        }];

        this.callParent(arguments);
    }

});
