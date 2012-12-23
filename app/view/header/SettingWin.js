Ext.define('ImpulseOne.view.header.SettingWin' ,{
	extend: 'Ext.window.Window',
	alias : 'widget.settingwin',
	title: 'Settings',
	layout: 'fit',
    autoShow: true,
    width: 550,
    height: 570,
    modal: true,
    closable: false,
    initComponent: function() {
        this.items = [ {
            xtype: 'form',
            border: false,
            bodyPadding: 20,
            defaultType: 'textfield',
            fieldDefaults: {
                height: 27,
                padding: '0 0 20 0',
                anchor: '97%',
                labelWidth: 190
            },
            id: 'financeFormId',
            items: [ {
                xtype: 'textfield',
                fieldLabel: 'Account Name',
                labelWidth: 190,
                readOnly: true
            }, {
                xtype: 'textfield',
                fieldLabel: 'Account Type',
                labelWidth: 190,
                readOnly: true
            }, {
                xtype: 'textfield',
                labelWidth: 190,
                fieldLabel: 'Website',
            }, {
                xtype: 'textarea',
                fieldLabel: 'Address',
                labelWidth: 190,
            }, {
               xtype: 'textfield',
               labelWidth: 190,
               fieldLabel: 'City',
           }, {
            xtype: 'textfield',
            labelWidth: 190,
            fieldLabel: 'State',
        }, {
            xtype: 'combobox',
            name: 'country',
            labelWidth: 190,
            store: ['India', 'South Africa', 'Kenya', 'UAE', 'Malaysia', 'Indonesia', 'Singapore', 'Hong Kong', 'South Korea', 'Vietnam', 'Thailand', 'Phillipines', 'Japan'],
            fieldLabel: 'Country',
            editable: false
        }, {
            xtype: 'textfield',
            labelWidth: 190,
            fieldLabel: 'Zip',
        }, {
            name: 'phoneNo',
            fieldLabel: 'Phone Number',
        }, {
            fieldLabel: 'Account Status',
            labelWidth: 190,
            readOnly: true
        }, {
            name: 'contactName',
            fieldLabel: 'Contact Person'
        }, {
            name: 'contactMobile',
            fieldLabel: 'Contact  Mobile'
        }, {
            name: 'contactEmail',
            fieldLabel: 'Contact EMail',
            vtype: 'email'
        }, {
            fieldLabel: 'Creative Approval',
            labelWidth: 190,
            readOnly: true
        }, {
            fieldLabel: 'Login ID',
            labelWidth: 190,
            readOnly: true
        }, {
            fieldLabel: 'Password',
            inputType: 'password',
            labelWidth: 190,
        } ]
    }];
    this.buttons = [{
        text: 'Apply',
        action: 'apply'
    }, {
        text: 'Cancel',
        scope: this,
        handler: this.close
    }];
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
