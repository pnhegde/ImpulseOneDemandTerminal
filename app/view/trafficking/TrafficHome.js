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
        // split:true,
        width:200

    },{
        style: {'background':'#fff !important'},
        id: 'dynamicGridId',
        region: 'center',
        title: 'Trafficking',
        url: 'https://terminal.impulse01.com/newServer.php?do=get_advertisers'
    }]
});


