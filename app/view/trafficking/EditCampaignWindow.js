Ext.define('ImpulseOne.view.trafficking.EditCampaignWindow', {
    extend: 'Ext.window.Window',
    alias: 'widget.editcampaignwindow',
    layout: 'fit',
    title: 'Edit Campaign',
    autoShow: true,
    width: 800,
    height: 500,
    modal: true,
    autoScroll: true,
    initComponent: function() {
        this.items = [{
            xtype: 'form',
            border: false,
            layout: 'anchor',
            labelWidth: 200,
            defaults: {
                anchor: '100%'
            },
            items: {
                xtype: 'tabpanel',
                bodyPadding: 10,
                layout: 'anchor',
                defaults: {
                    anchor: '100%',
                },
                items: [{
                    title: 'Basic Targetings',
                    items: [{
                        xtype: 'textfield',
                        name: 'campaignName',
                        fieldLabel: 'Campaign Name'
                    }, {
                        xtype: 'textfield',
                        name: 'destinationUrl',
                        fieldLabel: 'Destination URL'
                    }, {
                        xtype: 'textfield',
                        name: 'bidCpm',
                        fieldLabel: 'Bid'
                    }, {
                        xtype: 'textfield',
                        name: 'dailyBudget',
                        fieldLabel: 'Daily Budget'
                    }, {
                        xtype: 'textfield',
                        name: 'totalBudget',
                        fieldLabel: 'Total Budget'
                    }, {
                        xtype: 'textfield',
                        name: 'paceType',
                        fieldLabel: 'Pace Type'
                    }, {
                        xtype: 'datefield',
                        name: 'startDate',
                        fieldLabel: 'Start Date',
                        value: new Date()
                    }, {
                        xtype: 'datefield',
                        name: 'endDate',
                        fieldLabel: 'End Date',
                        value: new Date()
                    }, {
                        xtype: 'textfield',
                        name: 'timezone',
                        fieldLabel: 'Timezone',
                    }, {
                        xtype: 'numberfield',
                        name: 'frequencyTimes',
                        minValue: 0,
                        fieldLabel: 'Frequency Times',
                    },{
                        xtype: 'numberfield',
                        name: 'frequencyHours',
                        minValue: 0,
                        maxValue: 23,
                        fieldLabel: 'Frequency Hours',
                    }, {
                        xtype: 'textfield',
                        name: 'clickWindow',
                        fieldLabel: 'Click conversion window',
                    }, {
                        xtype: 'textfield',
                        name: 'viewWindow',
                        fieldLabel: 'View conversion window',
                    }]
                }, {
                    title: 'Geo Targetings',
                    items: [{
                        xtype: 'textfield',
                        name: 'countryTargets',
                        fieldLabel: 'Country Targets',
                    },{
                        xtype: 'textfield',
                        name: 'stateTargets',
                        fieldLabel: 'State Targets',
                    }],
                    tabConfig: {
                        tooltip: 'A button tooltip'
                    }
                }, {
                    title: 'Day Part Targeting'
                }]
            }
        }];
        this.buttons = [{
            text: 'Save',
            action: 'save'
        }, {
            text: 'Cancel',
            scope: this,
            handler: function() {
                var me = this;
                Ext.Msg.show({
                    title: 'Save Changes?',
                    width: 300,
                    msg: 'You are closing a tab that has unsaved changes. Would you like to save your changes?',
                    buttons: Ext.Msg.YESNOCANCEL,
                    fn: function(btn) {
                        if(btn == 'yes') {
                            this.close;
                            me.close;
                            console.log(btn);
                        }
                    },
                    icon: Ext.window.MessageBox.QUESTION
                });
            }
        }];
        this.callParent(arguments);
    }
});