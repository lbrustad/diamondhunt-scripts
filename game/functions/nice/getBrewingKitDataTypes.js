'use strict';

function getBrewingKitDataTypes()
{
	var data = ["none", "none", "none", 0];
	var boxsize = "";
	boxsize = "brewingKit";
	if (getItem(boxsize) == 1)
	{
		data = ["brewingKit", "none", "sapphire", "0%"];
		return data;
	}
	boxsize = "sapphireBrewingKit";
	if (getItem(boxsize) == 1)
	{
		data = ["sapphireBrewingKit", "sapphire", "emerald", "15%"];
		return data;
	}
	boxsize = "emeraldBrewingKit";
	if (getItem(boxsize) == 1)
	{
		data = ["emeraldBrewingKit", "emerald", "ruby", "30%"];
		return data;
	}
	boxsize = "rubyBrewingKit";
	if (getItem(boxsize) == 1)
	{
		data = ["rubyBrewingKit", "ruby", "diamond", "60%"];
		return data;
	}
	boxsize = "diamondBrewingKit";
	if (getItem(boxsize) == 1)
	{
		data = ["diamondBrewingKit", "diamond", "none", "100%"];
		return data;
	}
	return data;
};
