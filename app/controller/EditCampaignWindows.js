Ext.define('ImpulseOne.controller.EditCampaignWindows', {
	extend: 'Ext.app.Controller',
	models: ['Campaign'],
	stores: ['Campaign'],
	views: ['trafficking.EditCampaignWindow', 'trafficking.TrafficHome'],
	init: function() {
		var me = this;
		this.control({
			'editcampaignwindow button[action="save"]': {
				click: this.submitForm
			},
			'editcampaignwindow button[action="cancel"]': {
				click: this.cancelEdit
			},
			'editcampaignwindow #dayPartRadio #enableradio': {
				change: this.enableCheckbox
			},
			'editcampaignwindow #frequencyId': {
				change: this.disableFrequency
			},
			'editcampaignwindow #optimizeRadioId': {
				change: this.disableOptimize
			},
			'editcampaignwindow button[text="Get Code"]' : {
				click: this.getCode
			}
		});
	},
	submitForm: function(button) {
		var win = button.up('window');
		var rec = win.down('form').getRecord();
		var val = win.down('form').getForm().getValues();
		if(Ext.ComponentQuery.query('editcampaignwindow #dayPartRadio #enableradio')[0].checked == true) {
			var v = Ext.ComponentQuery.query('editcampaignwindow #dayPartValues')[0];
			var check = v.getChecked();
			var dayp = "";
			Ext.each(check, function(value) {
				dayp = dayp + value.inputValue + ',';
			});
			val['dayParts'] = dayp;
		} else {
			val['dayParts'] = ""
		}
		//var selCreatives = win.down('#campaignCreativeId').getSelectionModel().getSelection();
		if(win.down('#audienceTabId')) {
			var selAudience = win.down('#audienceTabId').getSelectionModel().getSelection();
			var crId = "";
			Ext.each(selAudience, function(rw) {
				crId = crId + rw.data['id'] + ",";
			});
			if(crId) {
				val['audienceTargets'] = crId;
			}
		}
		rec.set(val);
		this.getCampaignStore().sync();
		win.close();
		if(!Ext.getCmp('deleteButtonId').disabled) {
			Ext.getCmp('deleteButtonId').disable();
		}
		if(!Ext.getCmp('editButtonId').disabled) {
			Ext.getCmp('editButtonId').disable();
		}
		Ext.ComponentQuery.query('traffichome dynamicGrid')[0].getStore().load();
	},
	cancelEdit: function(button) {
		Ext.Msg.show({
			title: 'Save Changes?',
			width: 300,
			msg: 'You are closing a window that has unsaved changes. \n Would you like to save your changes?',
			buttons: Ext.Msg.YESNOCANCEL,
			icon: Ext.window.MessageBox.INFO,
			fn: function(btn) {
				if(btn == 'yes') {
					var win = button.up('editcampaignwindow');
					var rec = win.down('form').getRecord();
					var val = win.down('form').getForm().getValues();
					rec.set(val);
					me.getCampaignStore().sync();
					win.close();
					Ext.ComponentQuery.query('traffichome dynamicGrid')[0].getStore().load();
				} else if(btn == 'no') {
					button.up('window').close();
				}
			}
		});
	},
	enableCheckbox: function(button, newval, oldval) {
		if(newval) {
			Ext.ComponentQuery.query('editcampaignwindow #dayPartValues')[0].enable();
		} else {
			Ext.ComponentQuery.query('editcampaignwindow #dayPartValues')[0].disable();
		}
	},
	disableFrequency: function(combo, newValue, oldValue) {
		if(newValue['frequency'] == '0') {
			Ext.ComponentQuery.query('editcampaignwindow #frequencyTimes')[0].disable();
			Ext.ComponentQuery.query('editcampaignwindow #frequencyTimePeriod')[0].disable();
		} else if(newValue['frequency'] == '1') {
			Ext.ComponentQuery.query('editcampaignwindow #frequencyTimes')[0].enable();
			Ext.ComponentQuery.query('editcampaignwindow #frequencyTimePeriod')[0].enable();
		}
	},
	disableOptimize: function(combo,newval,oldval) {
		if(newval['optimize'] == '0') {
			Ext.ComponentQuery.query('editcampaignwindow #goalTypeId')[0].disable();
			Ext.ComponentQuery.query('editcampaignwindow #goalValueId')[0].disable();
		} else if(newval['optimize'] == '1') {
			Ext.ComponentQuery.query('editcampaignwindow #goalTypeId')[0].enable();
			Ext.ComponentQuery.query('editcampaignwindow #goalValueId')[0].enable();
		}	
	},
	getCode: function(button) {
		var v = button.up('editcampaignwindow').down('#genTagFormId').getValues();
		var dom = v['gentabdomain']; var s = v['gentabsize']; var c  = v['gentabcpm']; var t = v['gentagtype'];
		var campId = Ext.ComponentQuery.query('traffichome dynamicGrid')[0].getSelectionModel().getSelection()[0].data['Campaign Id'];
		Ext.Ajax.request({
			url: 'https://terminal.impulse01.com/newServer.php?do=generate_tag',
			params: {
				campaignId: campId,
				domain: dom,
				size : s,
				cpm : c,
				type: t
			},
			success: function(response) {
				if(JSON.parse(response.responseText).success) {
					button.up('editcampaignwindow').down('#codeareadId').setValue(JSON.parse(response.responseText).tag) ;
				} else {
					Ext.example.msg("Generate Code", "Fail !");
				}
			}
		});
	}
});