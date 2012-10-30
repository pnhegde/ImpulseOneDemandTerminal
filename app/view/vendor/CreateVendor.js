Ext.define('ImpulseOne.view.vendor.CreateVendor' ,{
	extend: 'Ext.window.Window',
	alias : 'widget.createvendor',
	layout: 'fit',
    title: 'Create a new Vendor',
    autoShow: true,
    width: 400,
    height: 420,
    modal: true,
    id: 'createvendor',
    
    initComponent: function() {
        this.items = [
        {
            xtype: 'form',
            bodyPadding: 10,
            layout: 'anchor',
            autoScroll: true,
            id: 'newvendorform',
            
            defaults: {
                anchor: '100%',
                labelWidth: 150
            },
            items: [
            {
                xtype: 'textfield',
                name : 'vendorName',
                fieldLabel: 'Vendor Name'
            },
            {
                xtype: 'combobox',
                name: 'entityType',
                store: [1, 2, 3, 4] ,
                fieldLabel: 'Vendor Type',
                forceSelection: true,
                //editable: true,
            },    
            {
                xtype: 'textfield',
                name : 'address',
                fieldLabel: 'Address'
            },
            {
                xtype: 'textfield',
                name : 'state',
                fieldLabel: 'State'
            },
            {
                xtype: 'textfield',
                name : 'city',
                fieldLabel: 'City'
            },
            {
                xtype: 'combobox',
                name: 'country',
                store: ['India', 'South Africa','Kenya','UAE', 'Malaysia','Indonesia','Singapore',
                'Hong Kong','South Korea','Vietnam','Thailand','Phillipines','Japan'] ,
                fieldLabel: 'Country',
                editable: false,
            },
            {
                xtype: 'textfield',
                name : 'phone',
                fieldLabel: 'Phone'
            },
            {
                xtype: 'textfield',
                name : 'ceoname',
                fieldLabel: 'CEO Name'
            },
            {
                xtype: 'textfield',
                name : 'ceoemail',
                fieldLabel: 'CEO Email'
            },
            
            {
                xtype: 'textfield',
                name : 'rmname',
                fieldLabel: 'Contact Person'
            },
            {
                xtype: 'textfield',
                name : 'rmmobile',
                fieldLabel: 'Contact Person\'s Mobile'
            },
            {
                xtype: 'textfield',
                name : 'rmmail',
                fieldLabel: 'Contact Person\'s EMail'
            }
            ]
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
