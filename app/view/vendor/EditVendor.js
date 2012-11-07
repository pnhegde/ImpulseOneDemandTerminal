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
                fieldLabel: 'Vendor Name',
                allowBlank: false
            }, {
                xtype: 'combobox',
                name: 'entityType',
                store: ["Individual", "Corporation", "Partnership", "Proprietorship"],
                fieldLabel: 'Vendor Type',
                forceSelection: true,
                allowBlank: false,
                editable: false
            }, {
                name: 'address',
                fieldLabel: 'Address'
            }, {
                name: 'state',
                fieldLabel: 'State'
            }, {
                name: 'city',
                fieldLabel: 'City'
            }, {
                xtype: 'combobox',
                name: 'country',
                store: ['India', 'South Africa', 'Kenya', 'UAE', 'Malaysia', 'Indonesia', 'Singapore', 'Hong Kong', 'South Korea', 'Vietnam', 'Thailand', 'Phillipines', 'Japan'],
                fieldLabel: 'Country',
                editable: false
            }, {
                name: 'zip',
                fieldLabel: 'Zip'
            }, {
                name: 'phone',
                fieldLabel: 'Phone',
                
            }, {
                name: 'ceoName',
                fieldLabel: 'CEO Name'
            }, {
                name: 'ceoEmail',
                fieldLabel: 'CEO Email',
                vtype: 'email'
            }, {
                name: 'rmName',
                fieldLabel: 'Contact Person'
            }, {
                name: 'rmMobile',
                fieldLabel: 'Contact Person\'s Mobile'
            }, {
                name: 'rmEmail',
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