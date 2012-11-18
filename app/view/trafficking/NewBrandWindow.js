Ext.define('ImpulseOne.view.trafficking.NewBrandWindow' ,{
	extend: 'Ext.window.Window',
	alias : 'widget.newbrandwindow',
	layout: 'fit',
    title: 'Create New Brand',
    autoShow: true,
    width: 350,
    height: 200,
    modal: true,
    autoScroll: true,
    initComponent: function() {
        this.items = [
        {
            xtype: 'form',
            bodyPadding: 10,
            layout: 'anchor',
            defaults: {
                anchor: '100%'
            },
            items: [
            {
                xtype: 'textfield',
                name : 'brandName',
                fieldLabel: 'Brand Name'
            }] 
        }];

        this.buttons = [
        {
            text: 'Create',
            action: 'create'
        },
        {
            text: 'Cancel',
            scope: this,
            handler: this.close
        }];

        this.callParent(arguments);
    }

});
