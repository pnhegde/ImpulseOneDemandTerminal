Ext.define('ImpulseOne.view.header.Header' ,{
	extend: 'Ext.container.Container',
	alias : 'widget.header',
	height: 40,
    //region: 'north',
    html: "<h2 style=\'font-size:20px;position:absolute;left:10px \'> \
    Impulse Demand Terminal </h2>",
    items: [{
        xtype: 'splitbutton',
        arrowAlign: 'right',
        width: 140,
        height: 40,
        text: ' <h3>User Name</h3>',
        style: { 'position':'absolute','right':'20px', 'top': '1px', 'background':'#dfefff'},
        menu: [{
            text: 'Settings',
            id: 'settings'
        },
        {
            text: 'Finance',
            id: 'finance'
        },
        {
            text: 'Logout',
            id: 'logout'
        }]
    }]
});
