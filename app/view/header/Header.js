Ext.define('ImpulseOne.view.header.Header' ,{
	extend: 'Ext.container.Container',
	alias : 'widget.header',
	height: 40,
    //region: 'north',
    items: [{
        xtype: 'splitbutton',
        arrowAlign: 'right',
        //width: 140,
        //height: 40,
        //text: ' <h3>User Name</h3>',
        style: { 'position':'absolute','right':'20px', 'top': '1px', 'background':'#dfefff'},
        menu: new Ext.menu.Menu({
            width: 300,
            height: 200,
            items:  [{
                text: 'Setting',
                id: 'settings'
            }, {
                text: 'Finance',
                id: 'finance'
            }, {
                text: 'Logout',
                id: 'logout'
            }]
        })
    }]
});
