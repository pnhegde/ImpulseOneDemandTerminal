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
    //bodyPadding: 15,
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
                name : 'creativeName',
                fieldLabel: 'Name'
            },
            {
                xtype: 'textarea',
                name : 'tagCode',
                fieldLabel: 'Ad Code',
                emptyText: 'Please replace the click tracker macro with [CLICK_MACRO]'
            },
            {
                xtype: 'combobox',
                name: 'width',
                store: ['728','160','120','300'],
                fieldLabel: 'Width',
                forceSelection: true,
                editable: false,
            },
            {
                xtype: 'combobox',
                name: 'height',
                store: ['90', '600', '600', '250'] ,
                fieldLabel: 'Height',
                forceSelection: true,
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
