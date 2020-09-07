'use strict';

function getChiselTypeData()
{
	var boxsize = "";
	boxsize = "chisel";
	if (getItem(boxsize) == 1)
	{
		return [boxsize, "none", "sapphire", 0.5];
	}
	boxsize = "sapphireChisel";
	if (getItem(boxsize) == 1)
	{
		return [boxsize, "sapphire", "emerald", 0.4];
	}
	boxsize = "emeraldChisel";
	if (getItem(boxsize) == 1)
	{
		return [boxsize, "emerald", "ruby", 0.3];
	}
	boxsize = "rubyChisel";
	if (getItem(boxsize) == 1)
	{
		return [boxsize, "ruby", "diamond", 0.2];
	}
	boxsize = "diamondChisel";
	if (getItem(boxsize) == 1)
	{
		return [boxsize, "diamond", "none", 0.0];
	}
};
