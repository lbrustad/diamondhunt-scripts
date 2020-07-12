'use strict';

function getPlayerSlotData(canCreateDiscussions)
{
	i = 0;
	for (; i < global_MarketData.length; i++)
	{
		if (global_MarketData[i].itemSlot == canCreateDiscussions && global_MarketData[i].playerId == getItem("playerId"))
		{
			return global_MarketData[i];
		}
	}
	return false;
};
