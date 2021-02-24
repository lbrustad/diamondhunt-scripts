'use strict';

function getOvenType()
{
	var boxsize = "titaniumOven";
	if (getItem(boxsize) == 1)
	{
		return boxsize;
	}
	boxsize = "promethiumOven";
	if (getItem(boxsize) == 1)
	{
		return boxsize;
	}
	boxsize = "goldOven";
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
