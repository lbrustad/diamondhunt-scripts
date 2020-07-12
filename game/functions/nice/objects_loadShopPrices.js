'use strict';

function objects_loadShopPrices(clusterShardData)
{
	var node = null;
	var params = clusterShardData.split("~");
	var grandParentOrientation = 0;
	var i = 0;
	for (; i < params.length; i = i + 0)
	{
		var ch = params[i];
		i++;
		var val = params[i];
		i++;
		node = new ItemPrice(ch, val);
		global_itemPriceMap[ch] = node;
		global_itemPriceMap[grandParentOrientation] = node;
		grandParentOrientation++;
	}
};
