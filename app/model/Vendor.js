Ext.define('ImpulseOne.model.Vendor',{
	extend: 'Ext.data.Model',
	fields: ['vendorId','accountId','vendorName','entityType','address','city', 'state', 'zip', 'phone', 
	'mobile', 'fax', 'pan', 'stn', 'ceoName', 'ceoEmail', 'rmName','rmMobile','rmMail']
});
