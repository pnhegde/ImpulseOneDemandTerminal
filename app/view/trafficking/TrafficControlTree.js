var str = Ext.create('ImpulseOne.store.TrafficControlTree');
Ext.define('ImpulseOne.view.trafficking.TrafficControlTree', {
    extend: 'Ext.tree.Panel',
    alias : 'widget.trafficcontroltree',
   // useArrows:true,
    title: 'Advertisers',
    //autoScroll:true,
    id: 'trafficcontroltreeId',
    rootVisible: true,
    hideHeaders: true,
    collapsible: true,
    collapseMode:'mini',
    store: str
});