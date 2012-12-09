var leaves = [{
    text: 'Bubble Plot',
    leaf: true
},{
    text: 'Line/Bar Chart',
    leaf: true
},{
    text: 'Performance Graph',
    leaf: true
} ] ;
Ext.define('ImpulseOne.view.analytics.AnalyticMenuPanel', {
    extend: 'Ext.tree.Panel',
    alias : 'widget.analyticmenupanel',
    layout: 'fit',
    border: false,
    // disabled: true,
    iconCls: "treeIcon",
    // autoScroll:true,
    rootVisible: false,
    root: {
        text: 'Root',
        expanded: true,
        children: [{ 
            text : 'Dashboard',
            leaf: true,
            id: 'dashboardNodeId',
            icon: '/ImpulseOneDemandTerminal/data/icons/home.png'
        }, {
            text: 'Single Dimension Analysis',
            expanded: true,
            // icon: '/ImpulseOneDemandTerminal/data/icons/folder.png',
            children: [{
                text: 'Media Source',
                id: 'MSId',
                expanded: true,
                children: leaves
            }, {
                text: 'State',
                id: 'StateId',
                children: leaves
            }, {
                text: 'City',
                id: 'CityId',
                children: leaves
            },{
                text: 'Hour',
                id: 'HourId',
                children: leaves
            },{
                text: 'Daypart',
                id: 'DaypartId',
                children: leaves
            },{
                text: 'Creative',
                id: 'CreativeId',
                children: leaves
            },{
                text: 'Weekday',
                id: 'WeekdayId',
                children: leaves
            },{
                text: 'Context',
                id: 'ContextId',
                children: leaves
            },{
                text: 'Device',
                id: 'DeviceId',
                children: leaves
            },{
                text: 'Carrier / ISP',
                id: 'CarrierId',
                children: leaves
            }]
        },{
            text: 'Double Dimension Analysis',
            children: [{
                text: 'Media Source Vs City',
                id: 'MSvCityId',
                leaf: true
            },{
                text: 'Media Source Vs Daypart',
                id: 'MSvDaypartId',
                leaf: true
            },{
                text: 'Media Source Vs Creative',
                id: 'MSvCreativeId',
                leaf: true
            },{
                text: 'Media Source Vs Weekday',
                id: 'MSvWeekdayId',
                leaf: true
            },{
                text: 'Media Source Vs Context',
                id: 'MSvContextId',
                leaf: true
            },{
                text: 'Media Source Vs Device',
                id: 'MSvDeviceId',
                leaf: true
            },{
                text: 'City Vs Carrier',
                id: 'MSvCarrierId',
                leaf: true
            }]
        }]}
    });
