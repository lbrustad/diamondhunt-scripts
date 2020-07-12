'use strict';

function refreshTradables(clusterShardData)
{
	global_TradablesData = [];
	var names = clusterShardData.split("~");
	var j = 0;
	for (; j < names.length; j++)
	{
		var target = names[j];
		j++;
		var paramName = names[j];
		j++;
		var name = names[j];
		j++;
		var url = names[j];
		global_TradablesData.push(new Tradables(target, paramName, name, url));
	}
};
