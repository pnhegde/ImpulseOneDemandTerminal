Ext.define('ImpulseOne.model.Vendor', {
	extend: 'Ext.data.Model',
	fields: ['id', 'accountId', 'vendorName', 'entityType', 'address', 'city', 'state', 'country',
	'zip', 'phone','country','ceoName', 'ceoEmail', 'rmName', 'rmMobile', 'rmEmail']
});