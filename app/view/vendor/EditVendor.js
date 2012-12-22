Ext.define('ImpulseOne.view.vendor.EditVendor', {
    extend: 'Ext.window.Window',
    alias: 'widget.editvendor',
    layout: 'fit',
    title: 'Edit Vendor',
    autoShow: true,
    width: 400,
    height: 440,
    modal: true,
    id: 'editvendor',

    initComponent: function() {
        this.items = [{
            xtype: 'form',
            bodyPadding: 10,
            layout: 'anchor',
            autoScroll: true,
            id: 'editvendorform',
            defaults: {
                anchor: '100%',
                labelWidth: 150
            },
            defaultType: 'textfield',
            items: [{
                name: 'vendorName',
                padding: '0 0 7 0',
                fieldLabel: 'Vendor Name',
                allowBlank: false
            }, {
                xtype: 'combobox',
                name: 'entityType',
                padding: '0 0 7 0',
                store: ["Individual", "Corporation", "Partnership", "Proprietorship"],
                fieldLabel: 'Vendor Type',
                forceSelection: true,
                allowBlank: false,
                editable: false
            }, {
                name: 'address',
                padding: '0 0 7 0',
                fieldLabel: 'Address'
            }, {
                name: 'state',
                padding: '0 0 7 0',
                fieldLabel: 'State'
            }, {
                name: 'city',
                padding: '0 0 7 0',
                fieldLabel: 'City'
            }, {
                xtype: 'combobox',
                name: 'country',
                padding: '0 0 7 0',
                store: ['India', 'South Africa', 'Kenya', 'UAE', 'Malaysia', 'Indonesia', 'Singapore', 'Hong Kong', 'South Korea', 'Vietnam', 'Thailand', 'Phillipines', 'Japan'],
                fieldLabel: 'Country',
                editable: false
            }, {
                name: 'zip',
                padding: '0 0 7 0',
                fieldLabel: 'Zip'
            }, {
                name: 'phone',
                padding: '0 0 7 0',
                fieldLabel: 'Phone',
                
            }, {
                name: 'ceoName',
                padding: '0 0 7 0',
                fieldLabel: 'CEO Name'
            }, {
                name: 'ceoEmail',
                padding: '0 0 7 0',
                fieldLabel: 'CEO Email',
                vtype: 'email'
            }, {
                name: 'rmName',
                padding: '0 0 7 0',
                fieldLabel: 'Contact Person'
            }, {
                name: 'rmMobile',
                padding: '0 0 7 0',
                fieldLabel: 'Contact Person\'s Mobile'
            }, {
                name: 'rmEmail',
                padding: '0 0 7 0',
                fieldLabel: 'Contact Person\'s EMail',
                vtype: 'email'
            }]
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