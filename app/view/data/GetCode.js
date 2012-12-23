Ext.define('ImpulseOne.view.data.GetCode' ,{
	extend: 'Ext.window.Window',
	alias : 'widget.getcode',
	layout: 'fit',
    title: 'Get Code',
    autoShow: true,
    width: 350,
    height: 300,
    modal: true,
    closable: false,
    autoScroll: true,
    initComponent: function() {
        this.items = [
        {
            xtype: 'textarea',
            readOnly: true
        } ];

        this.buttons = [{
            text: 'Close',
            scope: this,
            handler: this.close
        }];

        this.callParent(arguments);
    }

});
