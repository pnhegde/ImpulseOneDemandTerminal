Ext.define('ImpulseOne.model.AccountSetting', {
	extend: 'Ext.data.Model',
	fields: ['accountId', 'accountName', 'accountType','website','billingCycle','address','city','state','country','zip','phoneNumber','login','password','status','contactName','contactEmail','contactMobile','creditLimit','thisMonthSpend','platformFees','dataFees','contextualFees','adservingDisplayCpm','adservingMobileCpm','adservingVideoCpm','houseBanners','creativeAutoApprove'],
	proxy: {
		type: 'ajax',
		api: {
			read: ' https://terminal.impulse01.com/newServer.php?do=get_account_settings',
			update: 'https://terminal.impulse01.com/newServer.php?do=update_account_settings'
		},
		reader: {
			root: 'data',
			type: 'json',
			successProperty: 'success',
		},
		writer: {
			type: 'json',
			writeAllFields: false,
			root: 'data'
		}
	},
	idProperty: 'accountId'
});