Ext.define('ImpulseOne.view.trafficking.NewPlanWindow' ,{
	extend: 'Ext.window.Window',
	alias : 'widget.newplanwindow',
	layout: 'fit',
    title: 'Create New Plan',
    autoShow: true,
    width: 400,
    height: 250,
    modal: true,
    autoScroll: true,
    initComponent: function() {
        this.items = [
        {
            xtype: 'form',
            bodyPadding: 10,
            layout: 'anchor',
            defaults: {
                anchor: '100%'
            },
            items: [{
                xtype: 'textfield',
                name : 'planName',
                fieldLabel: 'Plan Name'
            },{
                xtype: 'datefield',
                name : 'startDate',
                format: 'Y-m-d',
                fieldLabel: 'Start Date',
                value: new Date()
            },{
                xtype: 'datefield',
                name : 'endDate',
                format: 'Y-m-d',
                fieldLabel: 'End Date',
                value: new Date()
            },{
                xtype: 'numberfield',
                minValue: 0,
                emptyText: 'Amount in INR',
                fieldLabel: 'Max Budget',
                name: 'maxBudget'
            },{
              xtype: 'checkboxfield',
              fieldLabel: 'Enforce Budget',
              name: 'budgetCheckbox',
              // labelWidth: 150,
              checked: false
          },{
              xtype: 'checkboxfield',
              fieldLabel: 'Enforce end date',
              name: 'dateCheckbox',
              checked: false
          }] 
      }];

      this.buttons = [
      {
        text: 'Create',
        action: 'create'
    },
    {
        text: 'Cancel',
        scope: this,
        handler: this.close
    }];

    this.callParent(arguments);
}

});
