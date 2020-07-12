'use strict';

function getBonemealTypeData()
{
	var boxsize = "";
	boxsize = "bonemealBin";
	if (getItem(boxsize) == 1)
	{
		return [boxsize, "none", "sapphire", "5"];
	}
	boxsize = "sapphireBonemealBin";
	if (getItem(boxsize) == 1)
	{
		return [boxsize, "sapphire", "emerald", "20"];
	}
	boxsize = "emeraldBonemealBin";
	if (getItem(boxsize) == 1)
	{
		return [boxsize, "emerald", "ruby", "50"];
	}
	boxsize = "rubyBonemealBin";
	if (getItem(boxsize) == 1)
	{
		return [boxsize, "ruby", "diamond", "100"];
	}
	boxsize = "diamondBonemealBin";
	if (getItem(boxsize) == 1)
	{
		return [boxsize, "diamond", "none", "INF"];
	}
	return "none";
};
