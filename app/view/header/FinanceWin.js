Ext.define('ImpulseOne.view.header.FinanceWin' ,{
	extend: 'Ext.window.Window',
	alias : 'widget.financewin',
	title: 'Finance',
	layout: 'fit',
    autoShow: true,
    width: 550,
    height: 380,
    modal: true,
    closable: false,
    initComponent: function() {
        this.items = [ {
            xtype: 'form',
            border: false,
            bodyPadding: 20,
            fieldDefaults: {
                height: 30,
                padding: '0 0 20 0',
                anchor: '100%'
            },
            id: 'financeFormId',
            items: [{
                xtype: 'combobox',
                name: 'billingCycle',
                labelWidth: 190,
                store: ["30 Days", "45 Days", "60 Days", "90 Days"],
                fieldLabel: 'Billing Cycle',
                forceSelection: true,
                allowBlank: false,
                editable: false
            }, {
                xtype: 'textfield',
                fieldLabel: 'Credit Limit',
                labelWidth: 190,
                readOnly: true
            }, {
                xtype: 'textfield',
                fieldLabel: 'This Month Spend',
                labelWidth: 190,
                readOnly: true
            }, {
                xtype: 'textfield',
                labelWidth: 190,
                fieldLabel: 'Buying Tarrif - Display',
                readOnly: true
            }, {
                xtype: 'textfield',
                fieldLabel: 'Optimization Tarrif',
                labelWidth: 190,
                readOnly: true
            }, {
               xtype: 'textfield',
               labelWidth: 190,
               fieldLabel: 'Ad Serving Tarrif - Display',
               readOnly: true
           }, {
            xtype: 'textfield',
            labelWidth: 190,
            fieldLabel: 'Ad Serving Tarrif - Mobile',
            readOnly: true
        }, {
           xtype: 'textfield',
           labelWidth: 190,
           fieldLabel: 'Ad Serving Tarrif - Video',
           readOnly: true
       } ] }];
       this.buttons = [{
        text: 'Apply',
        action: 'apply'
    }, {
        text: 'Cancel',
        scope: this,
        handler: this.close
    }];
    this.callParent(arguments);
}

});
