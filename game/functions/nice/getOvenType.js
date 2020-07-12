'use strict';

function getOvenType()
{
	var boxsize = "goldOven";
	if (getItem(boxsize) == 1)
	{
		return boxsize;
	}
	boxsize = "silverOven";
	if (getItem(boxsize) == 1)
	{
		return boxsize;
	}
	boxsize = "ironOven";
	if (getItem(boxsize) == 1)
	{
		return boxsize;
	}
	boxsize = "bronzeOven";
	if (getItem(boxsize) == 1)
	{
		return boxsize;
	}
};
