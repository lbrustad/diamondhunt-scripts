'use strict';

function getChainsawTypeData()
{
	var boxsize = "";
	boxsize = "chainsaw";
	if (getItem(boxsize) == 1)
	{
		return [boxsize, "none", "sapphire", "5"];
	}
	boxsize = "sapphireChainsaw";
	if (getItem(boxsize) == 1)
	{
		return [boxsize, "sapphire", "emerald", "10"];
	}
	boxsize = "emeraldChainsaw";
	if (getItem(boxsize) == 1)
	{
		return [boxsize, "emerald", "ruby", "15"];
	}
	boxsize = "rubyChainsaw";
	if (getItem(boxsize) == 1)
	{
		return [boxsize, "ruby", "diamond", "20"];
	}
	boxsize = "diamondChainsaw";
	if (getItem(boxsize) == 1)
	{
		return [boxsize, "diamond", "none", "25"];
	}
	return ["none", "none", "none", 0];
};
