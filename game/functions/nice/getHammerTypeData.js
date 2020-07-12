'use strict';

function getHammerTypeData()
{
	var boxsize = "";
	boxsize = "stardustHammer";
	if (getItem(boxsize) == 1)
	{
		return [boxsize, "none", "sapphire", "17"];
	}
	boxsize = "sapphireStardustHammer";
	if (getItem(boxsize) == 1)
	{
		return [boxsize, "sapphire", "emerald", "16"];
	}
	boxsize = "emeraldStardustHammer";
	if (getItem(boxsize) == 1)
	{
		return [boxsize, "emerald", "ruby", "15"];
	}
	boxsize = "rubyStardustHammer";
	if (getItem(boxsize) == 1)
	{
		return [boxsize, "ruby", "diamond", "14"];
	}
	boxsize = "diamondStardustHammer";
	if (getItem(boxsize) == 1)
	{
		return [boxsize, "diamond", "none", "12"];
	}
};
