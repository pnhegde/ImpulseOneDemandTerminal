Ext.define('ImpulseOne.view.trafficking.EditCampaignWindow', {
    extend: 'Ext.window.Window',
    alias: 'widget.editcampaignwindow',
    layout: 'fit',
    title: 'Edit Campaign',
    autoShow: true,
    width: 800,
    height: 550,
    modal: true,
    autoScroll: true,
    closable: false,
    initComponent: function() {
        this.items = [{
            xtype: 'form',
            border: false,
            layout: 'fit',
            id: 'campaignFormId',
            autoScroll: true,
            defaults: {
                flex: 2,
            },
            items: {
                xtype: 'tabpanel',
                bodyPadding: 20,
                layout: 'fit',
                items: [{
                    title: 'Basic Targetings',
                    layout: 'hbox',
                    items: [{
                        autoWidth: 'true',
                        width: 360,
                        border: false,
                        id: 'basicTargettingFirstColumn',
                        items: [{
                            xtype: 'textfield',
                            name: 'campaignName',
                            labelWidth: 160,
                            height: 25,
                            fieldLabel: 'Campaign Name'
                        }, {
                            xtype: 'textfield',
                            name: 'destinationUrl',
                            labelWidth: 160,
                            height: 25,
                            fieldLabel: 'Destination URL'
                        }, {
                            xtype: 'textfield',
                            name: 'bidCpm',
                            labelWidth: 160,
                            height: 25,
                            fieldLabel: 'Bid'
                        }, {
                            xtype: 'textfield',
                            name: 'dailyBudget',
                            labelWidth: 160,
                            height: 25,
                            fieldLabel: 'Daily Budget'
                        }, {
                            xtype: 'textfield',
                            name: 'totalBudget',
                            labelWidth: 160,
                            height: 25,
                            fieldLabel: 'Total Budget'
                        }, {
                            xtype: 'radiogroup',
                            labelWidth: 160,
                            height: 25,
                            fieldLabel: 'Pace Type',
                            items: [{
                                boxLabel: 'Enable',
                                name: 'paceType',
                                inputValue: '1',
                                id: 'enablepaceId'
                            }, {
                                boxLabel: 'Disable',
                                name: 'paceType',
                                inputValue: '0',
                                id: 'disablepaceId'
                            }]
                        }, {
                            xtype: 'datefield',
                            name: 'startDate',
                            labelWidth: 160,
                            height: 25,
                            fieldLabel: 'Start Date',
                            format: 'Y-m-d',
                            value: new Date()
                        }, {
                            xtype: 'datefield',
                            name: 'endDate',
                            labelWidth: 160,
                            height: 25,
                            fieldLabel: 'End Date',
                            format: 'Y-m-d',
                            value: new Date()
                        }, {
                            xtype: 'textfield',
                            name: 'timezone',
                            labelWidth: 160,
                            height: 25,
                            fieldLabel: 'Timezone',
                        }, {
                            xtype: 'radiogroup',
                            fieldLabel: 'Frequency',
                            labelWidth: 160,
                            id: 'frequencyId',
                            //name: 'frequency',
                            items: [{
                                boxLabel: 'Enable',
                                name: 'frequency',
                                inputValue: '1',
                                id: 'enablefreqId'
                            }, {
                                boxLabel: 'Disable',
                                name: 'frequency',
                                inputValue: '0',
                                id: 'disablefreqId'
                            }]
                        }, {
                            xtype: 'numberfield',
                            name: 'frequencyTimes',
                            id: 'frequencyTimes',
                            minValue: 0,
                            labelWidth: 160,
                            height: 25,
                            fieldLabel: 'Frequency Times',
                        }, {
                            xtype: 'combobox',
                            name: 'frequencyTimePeriod',
                            id: 'frequencyTimePeriod',
                            labelWidth: 160,
                            height: 25,
                            fieldLabel: 'Frequency Time Period',
                            valueField: 'feqId',
                            displayField: 'feqName',
                            mode: 'local',
                            store: new Ext.data.SimpleStore({
                                fields: ['feqId', 'feqName'],
                                data: [
                                    ['1', 'One Day'],
                                    ['2', 'One Week'],
                                    ['3', 'One Month'], ],
                                autoLoad: false
                            }),
                            editable: false,
                            renderer: function(value) {
                                if(value == '1') {
                                    return "One Day";
                                } else if(value == '2') {
                                    return "One Week";
                                } else {
                                    return "One Month";
                                }
                            }
                        }, {
                            xtype: 'combobox',
                            name: 'countryTargets',
                            labelWidth: 160,
                            height: 25,
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
                            fieldLabel: 'Country Targets',
                            editable: false,
                            value: 'IN',
                            listeners: {
                                'change': function(ctr, newva, oldva) {
                                    var stateCombo = ctr.up('editcampaignwindow').down('form').getForm().findField('stateTargets');
                                    if(stateCombo) {
                                        stateCombo.clearValue();
                                        stateCombo.getStore().load({
                                            params: {
                                                countryId: newva
                                            }
                                        });
                                    }
                                    var carrierCombo = ctr.up('editcampaignwindow').down('form').getForm().findField('carrierTargets');
                                    if(carrierCombo) {
                                        carrierCombo.clearValue();
                                        carrierCombo.getStore().load({
                                            params: {
                                                countryId: newva
                                            }
                                        });
                                    }
                                }
                            }
                        }, {
                            xtype: 'combobox',
                            name: 'stateTargets',
                            labelWidth: 160,
                            height: 25,
                            fieldLabel: 'State Targets',
                            multiSelect: true,
                            valueField: 'state',
                            displayField: 'state',
                            queryMode: 'local',
                            store: {
                                fields: ['state'],
                                triggerAction: 'all',
                                pageSize: 10,
                                proxy: {
                                    type: 'ajax',
                                    url: 'https://terminal.impulse01.com/newServer.php?do=get_states',
                                    reader: {
                                        type: 'json',
                                        root: 'data',
                                        successProperty: 'success'
                                    }
                                },
                                autoLoad: false
                            }
                        }]
                    }, {
                        border: false,
                        id: 'basicTargettingSecondColumn',
                        width: 360,
                        autoWidth: true,
                        items: [{
                            xtype: 'textfield',
                            name: 'clickWindow',
                            labelWidth: 160,
                            height: 25,
                            fieldLabel: 'Click conversion window',
                        }, {
                            xtype: 'textfield',
                            name: 'viewWindow',
                            labelWidth: 160,
                            height: 25,
                            fieldLabel: 'View conversion window',
                        }, {
                            xtype: 'radiogroup',
                            fieldLabel: 'Optimization',
                            labelWidth: 160,
                            id: 'optimizeRadioId',
                            items: [{
                                boxLabel: 'Enable',
                                name: 'optimize',
                                inputValue: '1',
                                id: 'enableoptimize'
                            }, {
                                boxLabel: 'Disable',
                                name: 'optimize',
                                inputValue: '0',
                                id: 'disableoptimize'
                            }]
                        }, {
                            xtype: 'combobox',
                            name: 'goalType',
                            id: 'goalTypeId',
                            labelWidth: 160,
                            height: 25,
                            fieldLabel: 'Goal Type',
                            editable: false,
                            valueField: 'optId',
                            displayField: 'optName',
                            queryMode: 'local',
                            store: new Ext.data.SimpleStore({
                                fields: ['optId', 'optName'],
                                data: [
                                    ['1', 'CPA'],
                                    ['2', 'CPC'], ],
                                autoLoad: false
                            }),
                            renderer: function(value) {
                                if(value == "1") { return "CPA";}
                                else if(value == "2") { return "CPC";}
                                else return "";
                            }
                        }, {
                            xtype: 'textfield',
                            name: 'goalValue',
                            id: 'goalValueId',
                            labelWidth: 160,
                            height: 25,
                            fieldLabel: 'Goal Value'
                        }, {
                            xtype: 'radiogroup',
                            fieldLabel: 'Dayparts',
                            labelWidth: 160,
                            id: 'dayPartRadio',
                            name: 'dayParts',
                            items: [{
                                boxLabel: 'Enable',
                                name: 'check',
                                inputValue: '1',
                                id: 'enableradio'
                            }, {
                                boxLabel: 'Disable',
                                name: 'check',
                                inputValue: '0',
                                id: 'disableradio'
                            }]
                        }, {
                            xtype: 'checkboxgroup',
                            fieldLabel: 'Value',
                            columns: 1,
                            labelWidth: 160,
                            height: 150,
                            width: 400,
                            id: 'dayPartValues',
                            disabled: true,
                            items: [{
                                boxLabel: 'Early Morning (2 AM - 6 AM)',
                                id: 'cb1',
                                name: 'cb1',
                                inputValue: '1'
                            }, {
                                boxLabel: 'Morning (6 AM - 10 AM)',
                                id: 'cb2',
                                name: 'cb2',
                                inputValue: '2'
                            }, {
                                boxLabel: 'MidDay (10 AM - 2 PM)',
                                id: 'cb3',
                                name: 'cb3',
                                inputValue: '3'
                            }, {
                                boxLabel: 'Afternoon (2 PM - 6 PM)',
                                id: 'cb4',
                                name: 'cb4',
                                inputValue: '4'
                            }, {
                                boxLabel: 'Evening (6 PM - 10 PM)',
                                id: 'cb5',
                                name: 'cb5',
                                inputValue: '5'
                            }, {
                                boxLabel: 'MidNight (10 PM - 2 AM)',
                                id: 'cb6',
                                name: 'cb6',
                                inputValue: '6'
                            }]
                        }]
                    }]
                },
                /*{
                    title: 'Creatives',
                    xtype: 'gridpanel',
                    id: 'campaignCreativeId',
                    store: 'CampaignCreative',
                    selModel: Ext.create('Ext.selection.CheckboxModel'),
                    columns: [{
                        header: "Name",
                        flex: 0.8,
                        dataIndex: 'creativeName',
                        tdCls: 'custom-inventory-grid-domain',
                        align: 'left',
                        sortable: true
                    }, {
                        header: "Creative Type",
                        flex: 0.6,
                        dataIndex: 'creativeType',
                        align: 'left',
                        sortable: true
                    }, {
                        header: "Width",
                        flex: 0.6,
                        dataIndex: 'width',
                        align: 'left',
                        sortable: true
                    }, {
                        header: "Height",
                        flex: 0.6,
                        dataIndex: 'height',
                        align: 'left',
                        sortable: true
                    }],
                    viewConfig: {
                        forceFit: true,
                        stripeRows: true,
                    }
                }*/
                ]
            }
        }];
        this.buttons = [{
            text: 'Save',
            action: 'save'
        }, {
            text: 'Cancel',
            scope: this,
            action: 'cancel'
        }];
        this.callParent(arguments);
    }
});