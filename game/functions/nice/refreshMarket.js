'use strict';

function refreshMarket(data)
{
	if (data == "")
	{
		return;
	}
	global_MarketData = [];
	var names = data.split("~");
	var i = 0;
	for (; i < names.length; i++)
	{
		var packageName = names[i];
		i++;
		var paramName = names[i];
		i++;
		var name = names[i];
		i++;
		var file = names[i];
		i++;
		var symbol = names[i];
		i++;
		var day_name = names[i];
		i++;
		var _name2 = names[i];
		i++;
		var subname = names[i];
		i++;
		var month_name = names[i];
		global_MarketData.push(new MarketData(packageName, paramName, name, file, symbol, day_name, _name2, subname, month_name));
	}
};
