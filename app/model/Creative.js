Ext.define('ImpulseOne.model.Creative', {
	extend: 'Ext.data.Model',
	fields: ['creativeId', 'accountId', 'advertiserId',
	{
		name: 'creativeType',
		type: "string",
		convert: function(value, record) {
			switch(value) {
			case "1":
				return "Image";
				break;
			case "2":
				return "Flash";
				break;
			case "3":
				return "Flash Video";
				break;
			case "4":
				return "HTML Tag";
				break;
			default:
				return "Unknown";
			}
		}
	}, 'creativeName', 'filePath', 'height', 'width', 'tagCode',
	{
		name: 'status',
		type: "string",
		convert: function(value, record) {
			switch(value) {
			case "1":
				return "Pending";
				break;
			case "2":
				return "Active";
				break;
			case "3":
				return "Archived";
				break;
			default:
				return "Unknown";
			}
		}
	}, {
		name: 'size',
		type: 'string',
		convert: function(value, record) {
			return record.get('height') + ' x ' + record.get('width')
		}
	}],

	idProperty: 'creativeId'
});