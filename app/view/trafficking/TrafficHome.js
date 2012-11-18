Ext.define('ImpulseOne.view.trafficking.TrafficHome', {
    extend: 'Ext.form.Panel',
    alias : 'widget.traffichome',
    id : 'traffichomeId',
    border: false,
    requires: [
    'ImpulseOne.view.trafficking.TrafficControlTree',
    'Ext.ux.grid.DynamicGrid'],
    layout: 'border',
    items: [
    {
        xtype: 'trafficcontroltree',
        region: 'west',
        split:true,
        width:200

    },{
        style: {'background':'#fff'},
        id: 'dynamicGridId',
        region: 'center',
        title: 'Grid',
        url: 'https://user.impulse01.com/newServer.php?do=get_advertisers'
    }]
});


