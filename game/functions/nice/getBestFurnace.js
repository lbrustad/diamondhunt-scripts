'use strict';

function getBestFurnace()
{
	var boxsize = "";
	boxsize = "stoneFurnace";
	if (getItem(boxsize) == 1)
	{
		return boxsize;
	}
	boxsize = "bronzeFurnace";
	if (getItem(boxsize) == 1)
	{
		return boxsize;
	}
	boxsize = "ironFurnace";
	if (getItem(boxsize) == 1)
	{
		return boxsize;
	}
	boxsize = "silverFurnace";
	if (getItem(boxsize) == 1)
	{
		return boxsize;
	}
	boxsize = "goldFurnace";
	if (getItem(boxsize) == 1)
	{
		return boxsize;
	}
	boxsize = "promethiumFurnace";
	if (getItem(boxsize) == 1)
	{
		return boxsize;
	}
	boxsize = "titaniumFurnace";
	if (getItem(boxsize) == 1)
	{
		return boxsize;
	}
	return "none";
};
