Ext.define('ImpulseOne.view.creative.HtmlCreative' ,{
	extend: 'Ext.window.Window',
	alias : 'widget.htmlcreative',
	title: 'Create HTML Creative',
	layout: 'fit',
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
                name : 'name',
                fieldLabel: 'Name'
            },
            {
                xtype: 'textarea',
                name : 'code',
                fieldLabel: 'Ad Code',
                emptyText: 'Please replace the click tracker macro with [CLICK_MACRO]'
            },
            {
                xtype: 'textfield',
                name : 'tags',
                fieldLabel: 'Tags (Separated by commas)'
            },
            {
                xtype: 'combobox',
                store: ['728x90', '160x600', '120x600', '300x250'] ,
                fieldLabel: 'Creative Size',
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
