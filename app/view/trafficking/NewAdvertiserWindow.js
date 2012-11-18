Ext.define('ImpulseOne.view.trafficking.NewAdvertiserWindow' ,{
	extend: 'Ext.window.Window',
	alias : 'widget.newadvertiserwindow',
	layout: 'fit',
    title: 'Create New Advertiser',
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
                name : 'advertiserName',
                fieldLabel: 'Advertiser Name'
            },
            {
                xtype: 'combobox',
                name : 'advertiserCategory',
                valueField: 'catId',
                displayField: 'catName',
                mode: 'local',
                store: new Ext.data.SimpleStore({ 
                    fields:['catId','catName'], 
                    data: [['1','Automotive'], ['2','eCommerce'], ['3','Finance'], ['4', 'Telecommunications'], ['5', 'Real Estate'], [ '6','Education'], ['7','Entertainment'], ['8', 'Fashion & Beauty'], ['9','Gaming'], ['10','Consumer Packaged Goods'], ['11','Food And Restaurant'], ['12','Travel And Hospitality'], ['13','Other']],
                    autoLoad: false
                }),
                fieldLabel: 'Category',
                editable: false
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
