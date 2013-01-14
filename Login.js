//After successful login redirect to terminal home. 
function Redirect() {
    window.location = 'Home.php';
}
//Login page starts here. 
Ext.onReady(function() {
    Ext.QuickTips.init();
    var login = new Ext.FormPanel({
        url: 'https://terminal.impulse01.com/newServer.php?do=authenticate',
        frame: true,
        title: ' <img src="data/logo-small.png"\> &nbsp',
        defaultType: 'textfield',
        monitorValid: true,
        border:false,
        items: [{
            fieldLabel: 'Username',
            name: 'id',
            padding: '0 0 5 0',
            style: 'color: #003; font-weight: bold; font-size: 11px',
            allowBlank: false,
            width: 300,
            
        }, {
            fieldLabel: 'Password',
            name: 'password',
            inputType: 'password',
            allowBlank: true,
            padding: '0 0 5 0',
            style: 'color: #003; font-weight: bold; font-size: 11px',
            autoHeight: true,
            width: 300
        }],
        buttons: [{
            text: 'Login',
            formBind: true,
            handler: function() {
                login.getForm().submit({
                    method: 'POST',
                    waitTitle: 'Authenticating...',
                    success: function() {
                        Redirect();
                    },
                    failure: function(form, action) {
                        if(action.failureType == 'server') {
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

//Create a class for login window. 
var win = new Ext.Window({
    layout: 'fit',
    width: 350,
    height: 155,
    closable: false,
    resizable: false,
    plain: true,
    border: false,
    draggable: false,
    style: 'background-color: #FFF; ',
    bbar: [{
        xtype: 'tbtext',
        text: ' &copy; 2012 - <a href="http://impulsemedia.co.in">Impulse Media Pvt.Ltd</a>'
    }],
    items: [login]
});
win.show();
});