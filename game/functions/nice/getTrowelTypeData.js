'use strict';

function getTrowelTypeData()
{
	var boxsize = "";
	boxsize = "trowel";
	if (getItem(boxsize) == 1)
	{
		return [boxsize, "none", "sapphire", "5"];
	}
	boxsize = "sapphireTrowel";
	if (getItem(boxsize) == 1)
	{
		return [boxsize, "sapphire", "emerald", "10"];
	}
	boxsize = "emeraldTrowel";
	if (getItem(boxsize) == 1)
	{
		return [boxsize, "emerald", "ruby", "15"];
	}
	boxsize = "rubyTrowel";
	if (getItem(boxsize) == 1)
	{
		return [boxsize, "ruby", "diamond", "20"];
	}
	boxsize = "diamondTrowel";
	if (getItem(boxsize) == 1)
	{
		return [boxsize, "diamond", "none", "25"];
	}
	return ["none", "none", "none", 0];
};
