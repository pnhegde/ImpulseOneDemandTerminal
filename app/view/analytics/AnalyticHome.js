Ext.define('ImpulseOne.view.analytics.AnalyticHome', {
    extend: 'Ext.panel.Panel',
    alias : 'widget.analytichome',
    requires: ['ImpulseOne.view.analytics.AnalyticMenuPanel',
    'ImpulseOne.view.analytics.OptionPanel',
    'ImpulseOne.view.analytics.GraphPanel'],
    border: false,
    layout: 'border',
    tbar : [{
        xtype: 'box',
        html: '<b>Advanced Analytics</b>'
    }, '->',{
        xtype: 'combobox',
        width: 380,
        name: 'campaignSearch',
        fieldLabel: 'Select Campaign',
        emptyText: 'Search for Campaigns',
        editable: true,
        typeAhead: true,
        valueField: 'campaignId',
        displayField: 'campaignName',
        id: 'campaignSearchId',
        store: {
            fields: ['campaignId', 'campaignName'],
            triggerAction: 'all',
            pageSize: 10,
            mode: 'local',
            proxy: {
                type: 'ajax',
                url: 'https://terminal.impulse01.com/newServer.php?do=get_all_campaigns',
                reader: {
                    type: 'json',
                    root: 'data',
                    successProperty: 'success'
                }
            }
        }
    },'-' ,{
        xtype: 'button',
        text: 'Load'
    },'-'],
    items: [{
        xtype: 'analyticmenupanel',
        region: 'west',
        split:true,
        // collapsible:true,
        // collapseMode:'mini',
        width:200,
    },{
        xtype: 'container',
        region: 'center',
        layout: 'border',
        items: [{
            xtype: 'optionpanel',
            region: 'north',
        },{
            xtype: 'graphpanel',
            region: 'center'
        }]
    }]
});