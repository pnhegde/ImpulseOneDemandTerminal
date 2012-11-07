function Redirect(){
    window.location = 'Home.php';
}
Ext.onReady(function(){
    Ext.QuickTips.init();
    var login = new Ext.FormPanel({ 
        labelWidth:80,
        url:'https://user.impulse01.com/newServer.php?do=authenticate', 
        frame:true, 
        title:'Please Login', 
        defaultType:'textfield',
        monitorValid:true,
        items:[{ 
            fieldLabel:'Username', 
            name:'id', 
            allowBlank:false 
        },{ 
            fieldLabel:'Password', 
            name:'password', 
            inputType:'password', 
            allowBlank:true 
        }],
        buttons:[{ 
            text:'Login',
            formBind: true,
            handler:function(){
                login.getForm().submit({     
                    method:'GET', 
                    waitTitle:'Connecting...', 
                    waitMsg:'Sending Data to the server...',
                    success:function(){ 
                        Redirect();
                    },

                    failure:function(form, action){
                        if(action.failureType == 'server'){ 
                        //obj = Ext.util.JSON.decode(action.response.responseText); 
                        Ext.Msg.alert('Login Failed! Try again'); 
                    }else{ 
                        Ext.Msg.alert('Warning!', 'Authentication server is unreachable : ' + action.response.responseText); 
                    } 
                    login.getForm().reset(); 
                } 
            }); 
            } 
        }] 
    });

var win = new Ext.Window({
    layout:'fit',
    width:300,
    height:150,
    closable: false,
    resizable: false,
    plain: true,
    border: false,
    items: [login]
});
win.show();
});