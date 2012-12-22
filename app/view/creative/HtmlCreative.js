Ext.define('ImpulseOne.view.creative.HtmlCreative' ,{
	extend: 'Ext.window.Window',
	alias : 'widget.htmlcreative',
	title: 'Create HTML Creative',
	layout: 'fit',
    closable: false,
    autoShow: true,
    width: 350,
    height: 300,
    modal: true,
    id: 'htmlCreative',
    initComponent: function() {
        this.items = [
        {
            xtype: 'form',
            bodyPadding: 15,
            layout: 'anchor',
            defaults: {
                anchor: '100%'
            },
            items: [
            {
                xtype: 'textfield',
                name : 'creativeName',
                fieldLabel: 'Name',
                padding: '5 10 5 5'
            },
            {
                xtype: 'textarea',
                name : 'tagCode',
                fieldLabel: 'Ad Code',
                padding: '5 10 5 5',
                emptyText: 'Please replace the click tracker macro with [CLICK_MACRO]'
            },
            {
                xtype: 'combobox',
                name: 'width',
                store: ['728','160','120','300'],
                fieldLabel: 'Width',
                forceSelection: true,
                padding: '5 10 5 5',
                editable: false,
            },
            {
                xtype: 'combobox',
                name: 'height',
                store: ['90', '600', '600', '250'] ,
                fieldLabel: 'Height',
                forceSelection: true,
                padding: '5 10 5 5',
                editable: false,
            }
            ]
        }
        ];

        this.buttons = [
        {
            text: 'Save',
            action: 'save'
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
