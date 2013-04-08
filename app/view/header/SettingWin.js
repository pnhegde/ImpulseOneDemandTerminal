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
                name: 'accountName',
                labelWidth: 190,
                readOnly: true
            }, {
                xtype: 'textfield',
                fieldLabel: 'Account Type',
                labelWidth: 190,
                name: 'accountType',
                readOnly: true
            }, {
                xtype: 'textfield',
                labelWidth: 190,
                name: 'website',
                fieldLabel: 'Website',
            }, {
                xtype: 'textarea',
                fieldLabel: 'Address',
                labelWidth: 190,
                name: 'address'
            }, {
             xtype: 'textfield',
             labelWidth: 190,
             fieldLabel: 'City',
             name: 'city'
         }, {
            xtype: 'textfield',
            labelWidth: 190,
            fieldLabel: 'State',
            name: 'state'
        }, {
            xtype: 'combobox',
            name: 'country',
            labelWidth: 190,
            //store: ['India', 'South Africa', 'Kenya', 'UAE', 'Malaysia', 'Indonesia', 'Singapore', 'Hong Kong', 'South Korea', 'Vietnam', 'Thailand', 'Phillipines', 'Japan'],
            valueField: 'countryId',
            displayField: 'countryName',
            queryMode: 'local',
            store: new Ext.data.SimpleStore({
                fields: ['countryId', 'countryName'],
                data: [
                ['IN', 'India'],
                ['ZA', 'South Africa'],
                ['KE', 'Kenya'],
                ['AE', 'UAE'],
                ['MY', 'Malaysia'],
                ['ID', 'Indonesia'],
                ['SG', 'Singapore'],
                ['HK', 'Hong Kong'],
                ['SK', 'South Korea'],
                ['VN', 'Vietnam'],
                ['TH', 'Thailand'],
                ['PH', 'Phillipines'],
                ['JP', 'Japan']
                ],
                autoLoad: false
            }),
            fieldLabel: 'Country',
            editable: false,
            listConfig: {
                getInnerTpl: function() {
                    var tpl = '<div>'+
                    '<img src="data/icons/flags/{countryId}.png" align="left">&nbsp;&nbsp;'+
                    '{countryName}</div>';
                    return tpl;
                }
            }
        }, {
            xtype: 'textfield',
            labelWidth: 190,
            fieldLabel: 'Zip',
            name: 'zip'
        }, {
            name: 'phoneNumber',
            fieldLabel: 'Phone Number',
        }, {
            fieldLabel: 'Account Status',
            labelWidth: 190,
            readOnly: true,
            name: 'status'
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
            readOnly: true,
            name: 'creativeAutoApprove'
        }, {
            fieldLabel: 'Login ID',
            labelWidth: 190,
            readOnly: true,
            name: 'login'
        }, {
            fieldLabel: 'Password',
            inputType: 'password',
            labelWidth: 190,
            name: 'password'
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
