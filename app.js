Ext.Loader.setConfig({enabled: true});
Ext.Loader.setPath('Ext.ux', 'extjs/ux');

Ext.syncRequire('Ext.app.EventBus');
Ext.override(Ext.app.EventBus, {
    constructor: function() {
        this.mixins.observable.constructor.call(this);
        this.bus = {};
        var me = this;
        Ext.override(Ext.Component, {
            fireEvent: function(ev) {
                if (Ext.util.Observable.prototype.fireEvent.apply(this, arguments) !== false && !this.eventsSuspended) {
                    return me.dispatch.call(me, ev, this, arguments);
                }
                return false;
            }
        });
    }
});

Ext.application({
    name: 'ImpulseOne',
    controllers: [
    'Inventories',
    'Creatives',
    'Data',
    'Vendors',
    'Globals'
    
    ],
    autoCreateViewport : true,
    // launch: function() {
    //     Ext.create('ImpulseOne.view.viewport.MainViewport');
    // }
});
