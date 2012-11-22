var campaignStore = Ext.create('Ext.data.SimpleStore',{ 
  fields:['channelId','channelName'], 
  data: [['1','Display'], ['2','Video'], ['3','Mobile']],
  autoLoad: false,

});
var strategyStore = Ext.create('Ext.data.SimpleStore',{ 
  fields:['stratId','channelId','stratName'], 
  data: [['1','1','Display - Direct'],['2','1','Display - Contextual'],['3','1','Display - Audience'],['4','1','Display - Whitelist'],['5','1','Display - ROE'], ['6','2','Video - Direct'],['7','2','Video - Whitelist'],['8','2','Video - Audience'],['9','2','Video - ROE'],['10','3','Mobile - Direct'], ['11','3','Mobile - Whitelist'],['12','3','Mobile - ROE']],
  autoLoad: false
});
Ext.define('ImpulseOne.view.trafficking.NewCampaignWindow' ,{
	extend: 'Ext.window.Window',
	alias : 'widget.newcampaignwindow',
	layout: 'fit',
  title: 'Create New Campaign',
  autoShow: true,
  width: 400,
  height: 200,
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
        name : 'campaignName',
        fieldLabel: 'Campaign Name'
      },/* //TODO  {
        xtype: 'combobox',
        name : 'channel',
        valueField: 'channelId',
        displayField: 'channelName',
        mode: 'local',
        store: campaignStore,
        listeners:{
          'select': this.selectionChanged
        },
        fieldLabel: 'Channel',
        editable: false,
        triggerAction:'all'
      },*/{
        xtype: 'combobox',
        name : 'strategy',
        valueField: 'stratId',
        displayField: 'stratName',
        mode: 'local',
        id: 'strategyId',
        store: strategyStore,
        fieldLabel: 'Channel and Strategy',
        triggerAction:'all',
        editable: false,
        lastQuery:''
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
  },
  selectionChanged:function(combo, value) 
  {
    var comboStrat = Ext.getCmp('strategyId');        
    comboStrat.clearValue();
    comboStrat.store.filter('channelId', combo.getValue());
  }

});
