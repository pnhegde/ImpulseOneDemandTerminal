function Redirect() {
    window.location = 'Home.php';
}
Ext.onReady(function() {
    Ext.QuickTips.init();
    var login = new Ext.FormPanel({
        url: 'https://user.impulse01.com/newServer.php?do=authenticate',
        frame: true,
        title: 'Impulse Demand Terminal - BETA',
        defaultType: 'textfield',
        monitorValid: true,
        border:false,
        items: [{
            fieldLabel: 'Username',
            name: 'id',
            style: 'color: #003; font-weight: bold; font-size: 11px',
            allowBlank: false,
            width: 300,
        }, {
            fieldLabel: 'Password',
            name: 'password',
            inputType: 'password',
            allowBlank: true,
            style: 'color: #003; font-weight: bold; font-size: 11px',
            autoHeight: true,
            width: 300
        }],
        buttons: [{
            text: 'Login',
            formBind: true,
            handler: function() {
                login.getForm().submit({
                    method: 'GET',
                    waitTitle: 'Connecting...',
                    waitMsg: 'Sending Data to the server...',
                    success: function() {
                        Redirect();
                    },
                    failure: function(form, action) {
                        if(action.failureType == 'server') {
                            //obj = Ext.util.JSON.decode(action.response.responseText); 
                            Ext.Msg.alert('Login Failed! Try again');
                        } else {
                            Ext.Msg.alert('Warning!', 'Authentication server is unreachable : ' + action.response.responseText);
                        }
                        login.getForm().reset();
                    }
                });
            }
        }]
    });

    var win = new Ext.Window({
        layout: 'fit',
        width: 350,
        height: 150,
        closable: false,
        resizable: false,
        plain: true,
        border: false,
        draggable: false,
        style: 'background-color: #FFF; ',
        bbar: [{
            xtype: 'tbtext',
            text: ' ©    2012 - Impulse Media Pvt.Ltd'
        }],
        items: [login]
    });
    win.show();
});