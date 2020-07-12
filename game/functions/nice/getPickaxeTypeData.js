'use strict';

function getPickaxeTypeData()
{
	var boxsize = "";
	boxsize = "stardustPickaxe";
	if (getItem(boxsize) == 1)
	{
		return [boxsize, "none", "sapphire", "17"];
	}
	boxsize = "sapphireStardustPickaxe";
	if (getItem(boxsize) == 1)
	{
		return [boxsize, "sapphire", "emerald", "16"];
	}
	boxsize = "emeraldStardustPickaxe";
	if (getItem(boxsize) == 1)
	{
		return [boxsize, "emerald", "ruby", "15"];
	}
	boxsize = "rubyStardustPickaxe";
	if (getItem(boxsize) == 1)
	{
		return [boxsize, "ruby", "diamond", "14"];
	}
	boxsize = "diamondStardustPickaxe";
	if (getItem(boxsize) == 1)
	{
		return [boxsize, "diamond", "none", "12"];
	}
};
