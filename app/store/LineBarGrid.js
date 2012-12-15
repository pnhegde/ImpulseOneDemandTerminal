Ext.define('ImpulseOne.store.LineBarGrid', {
    extend: 'Ext.data.Store',
    fields: [],
    listeners: {
        'metachange': function(store, meta) {
            me.reconfigure(store, meta.columns);
        }
    },
    autoLoad: true,
    remoteSort: false,
    remoteFilter: false,
    remoteGroup: false,
    proxy: {
        reader: Ext.create('Ext.ux.data.reader.DynamicReader'),
        type: 'ajax',
        url: 'https://terminal.impulse01.com/newServer.php?do=get_linebargrid',
    }
});