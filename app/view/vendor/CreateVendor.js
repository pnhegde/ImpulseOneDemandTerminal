Ext.define('ImpulseOne.view.vendor.CreateVendor' ,{
	extend: 'Ext.window.Window',
	alias : 'widget.createvendor',
	layout: 'fit',
    title: 'Create a new Vendor',
    autoShow: true,
    width: 400,
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
                name : 'name',
                fieldLabel: 'Vendor Name'
            },
            {
                xtype: 'combobox',
                name: 'entitytype',
                store: ['Individual', 'Proprietorship', 'Partnership', 'Corporation'] ,
                fieldLabel: 'Vendor Type',
                forceSelection: true,
                editable: false,
            },    
            {
                xtype: 'textfield',
                name : 'rmname',
                fieldLabel: 'Contact Person'
            },
            {
                xtype: 'textfield',
                name : 'rmmobile',
                fieldLabel: 'Contact Mobile No'
            }]
        }
        ];

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
