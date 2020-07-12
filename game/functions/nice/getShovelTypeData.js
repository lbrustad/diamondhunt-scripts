'use strict';

function getShovelTypeData()
{
	var boxsize = "";
	boxsize = "shovel";
	if (getItem(boxsize) == 1)
	{
		return [boxsize, "none", "sapphire", "4000"];
	}
	boxsize = "sapphireShovel";
	if (getItem(boxsize) == 1)
	{
		return [boxsize, "sapphire", "emerald", "3500"];
	}
	boxsize = "emeraldShovel";
	if (getItem(boxsize) == 1)
	{
		return [boxsize, "emerald", "ruby", "3000"];
	}
	boxsize = "rubyShovel";
	if (getItem(boxsize) == 1)
	{
		return [boxsize, "ruby", "diamond", "2500"];
	}
	boxsize = "diamondShovel";
	if (getItem(boxsize) == 1)
	{
		return [boxsize, "diamond", "none", "2000"];
	}
};
