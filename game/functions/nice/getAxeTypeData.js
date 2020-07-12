'use strict';

function getAxeTypeData()
{
	var boxsize = "";
	boxsize = "axe";
	if (getItem(boxsize) == 1)
	{
		return [boxsize, "none", "sapphire", "0"];
	}
	boxsize = "sapphireAxe";
	if (getItem(boxsize) == 1)
	{
		return [boxsize, "sapphire", "emerald", "5"];
	}
	boxsize = "emeraldAxe";
	if (getItem(boxsize) == 1)
	{
		return [boxsize, "emerald", "ruby", "10"];
	}
	boxsize = "rubyAxe";
	if (getItem(boxsize) == 1)
	{
		return [boxsize, "ruby", "diamond", "15"];
	}
	boxsize = "diamondAxe";
	if (getItem(boxsize) == 1)
	{
		return [boxsize, "diamond", "none", "20"];
	}
};
