var leaves = [{
    text: 'Bubble Plot',
    leaf: true
},{
    text: 'Line/Bar Chart',
    leaf: true
} ] ;

var dleaves = [{
    text: 'Single Metric',
    leaf: true
},{
    text: 'Double Metric',
    leaf: true
} ] ;
Ext.define('ImpulseOne.view.analytics.AnalyticMenuPanel', {
    extend: 'Ext.tree.Panel',
    alias : 'widget.analyticmenupanel',
    layout: 'fit',
    border: false,
    // disabled: true,
    iconCls: "treeIcon",
    rootVisible: false,
    root: {
        text: 'Root',
        id: 'rootId',
        expanded: true,
        children: [{ 
            text : 'Dashboard',
            leaf: true,
            id: 'dashboardNodeId',
            icon: '/data/icons/home.png'
        }, {
            text: 'Single Dimension Analysis',
            icon: '/data/icons/folder.png',
            expanded: true,
            children: [{
                text: 'Media Source',
                id: 'MSId',
                icon: '/data/icons/folder.png',
                children: leaves
            }, {
                text: 'State',
                id: 'StateId',
                icon: '/data/icons/folder.png',
                children: leaves
            }, {
                text: 'City',
                id: 'CityId',
                icon: '/data/icons/folder.png',
                children: leaves
            },{
                text: 'Hour',
                id: 'HourId',
                icon: '/data/icons/folder.png',
                children: leaves
            },{
                text: 'Daypart',
                id: 'DaypartId',
                icon: '/data/icons/folder.png',
                children: leaves
            },{
                text: 'Creative',
                id: 'CreativeId',
                icon: '/data/icons/folder.png',
                children: leaves
            },{
                text: 'Weekday',
                id: 'WeekdayId',
                icon: '/data/icons/folder.png',
                children: leaves
            },{
                text: 'Context',
                id: 'ContextId',
                icon: '/data/icons/folder.png',
                children: leaves
            },{
                text: 'Device',
                id: 'DeviceId',
                icon: '/data/icons/folder.png',
                children: leaves
            },{
                text: 'Carrier / ISP',
                id: 'CarrierId',
                icon: '/data/icons/folder.png',
                children: leaves
            }]
        },{
            text: 'Double Dimension Analysis',
            icon: '/data/icons/folder.png',
            children: [{
                text: 'Domain Vs State',
                id: 'DomainVStateId',
                icon: '/data/icons/folder.png',
                children: dleaves
                
            },{
                text: 'Domain Vs City',
                id: 'DomainVCityId',
                icon: '/data/icons/folder.png',
                children: dleaves
            },{
                text: 'Domain Vs Creative',
                id: 'DomainVCreativeId',
                icon: '/data/icons/folder.png',
                children: dleaves
            },{
                text: 'Domain Vs Hours',
                id: 'DomainVHoursId',
                icon: '/data/icons/folder.png',
                children: dleaves
            },{
                text: 'Domain Vs Dayparts',
                id: 'DomainVDaypartsId',
                icon: '/data/icons/folder.png',
                children: dleaves
            },{
                text: 'Domains Vs WeekDays',
                id: 'DomainVWeekdayId',
                icon: '/data/icons/folder.png',
                children: dleaves
            },{
                text: 'Context Vs State',
                id: 'ContextVStateId',
                icon: '/data/icons/folder.png',
                children: dleaves
            },{
                text: 'Context Vs City',
                id: 'ContextVCityId',
                icon: '/data/icons/folder.png',
                children: dleaves
            },{
                text: 'Context Vs Creatives',
                id: 'ContextVCreativeId',
                icon: '/data/icons/folder.png',
                children: dleaves
            },{
                text: 'States Vs Devices',
                id: 'StateVDeviceId',
                icon: '/data/icons/folder.png',
                children: dleaves
            },{
                text: 'States Vs Carrier',
                id: 'StateVCarrierId',
                icon: '/data/icons/folder.png',
                children: dleaves
            },{
                text: 'States Vs Creatives',
                id: 'StateVCreativeId',
                icon: '/data/icons/folder.png',
                children: dleaves
            },{
                text: 'Cities Vs Creatives',
                id: 'CityVCreativeId',
                icon: '/data/icons/folder.png',
                children: dleaves
            },{
                text: 'Cities Vs Devices',
                id: 'CityVDeviceId',
                icon: '/data/icons/folder.png',
                children: dleaves
            },{
                text: 'Cities Vs Carrier',
                id: 'CityVCarrierId',
                icon: '/data/icons/folder.png',
                children: dleaves
            },{
                text: 'Weekday Vs Dayparts',
                id: 'WeekdayVDaypartId',
                icon: '/data/icons/folder.png',
                children: dleaves
            },{
                text: 'Weekday Vs Hours',
                id: 'WeekdayVHourId',
                icon: '/data/icons/folder.png',
                children: dleaves
            },{
                text: 'Creatives Vs WeekDays',
                id: 'CreativeVWeekdayId',
                icon: '/data/icons/folder.png',
                children: dleaves
            },{
                text: 'Creatives Vs Dayparts',
                id: 'CreativeVDaypartId',
                icon: '/data/icons/folder.png',
                children: dleaves
            },{
                text: 'Creatives Vs Hours',
                id: 'CreativeVHourId',
                icon: '/data/icons/folder.png',
                children: dleaves
            }]
        }]}
    });
