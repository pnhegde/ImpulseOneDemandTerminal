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
var splashscreen;

Ext.onReady(function() {
    // Start the mask on the body and get a reference to the mask
    splashscreen = Ext.getBody().mask('Loading Impulse Demand Terminal', 'splashscreen');
    // Add a new class to this mask as we want it to look different from the default.
    splashscreen.addCls('splashscreen');

    // Insert a new div before the loading icon where we can place our logo.
    Ext.DomHelper.insertFirst(Ext.query('.x-mask-msg')[0], {
        cls: 'x-splash-icon'
    });
});

// Check for authentication or any other request exception with every Ajax request. If session expired, redirect back to login page.   
Ext.Ajax.on('requestexception',function(conn, response,opt){
    if(response.status == 401) {
        Ext.example.msg('Session Expired', 'Please login again !');
        setTimeout(function(){window.location = 'index.php';}, 150d0);
    }
});

Ext.application({
    name: 'ImpulseOne',
    controllers: [  //List of all controllers used in this application. 
    'Inventories',
    'Creatives',
    'Data',
    //'Vendors',
    'Globals',
    //'ExchangeGraphs',
    //'CampaignGraphs',
    'TrafficControlTrees',
    'EditCampaignWindows',
    'CampaignCreatives',
    'Analytics'
    ],
    launch: function() {  // Setup a task to fadeOut the splashscreen
        var task = new Ext.util.DelayedTask(function() {
            // Fade out the body mask
            splashscreen.fadeOut({
                duration: 1000,
                remove:true
            });
            // Fade out the icon and message
            splashscreen.next().fadeOut({
                duration: 1000,
                remove:true,
                listeners: {
                    afteranimate: function() {
                        // Set the body as unmasked after the animation
                        Ext.getBody().unmask();
                    }
                }
            });
        });
        // Run the fade 500 milliseconds after launch.
        task.delay(500);
    },
    autoCreateViewport : true

});
