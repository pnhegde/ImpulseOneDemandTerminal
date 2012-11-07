Ext.define('ImpulseOne.view.data.CreateAudienceGrp' ,{
	extend: 'Ext.window.Window',
	alias : 'widget.createaudiencegrp',
	layout: 'fit',
    title: 'Create New Audience Group',
    autoShow: true,
    width: 400,
    height: 200,
    modal: true,
    // closable: false,
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
                name : 'segmentName',
                fieldLabel: 'Group Name'
            },
            {
                xtype: 'box',
                html :  '</br>Auto remove this user from this group after a certain number of days. Enter the number of days. Enter 0 for permanent inclusions. ',
                height: 45,
                bodyPadding: 10
            },
            {
                xtype: 'numberfield',
                name : 'days',
                fieldLabel: 'No of days'
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
