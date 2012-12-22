Ext.define('ImpulseOne.view.header.FinanceWin' ,{
	extend: 'Ext.window.Window',
	alias : 'widget.financewin',
	title: 'Finance',
	layout: 'fit',
    autoShow: true,
    width: 750,
    height: 500,
    modal: true,
    bodyPadding: 10,
    initComponent: function() {
        this.items = [ {
            
        }


        ];
        this.buttons = [{
            text: 'Apply',
            action: 'apply'
        }, {
            text: 'Cancel',
            scope: this,
            handler: this.close
        }];
        this.callParent(arguments);
    }

});
