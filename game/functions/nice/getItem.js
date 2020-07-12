'use strict';

function getItem(i, forceOptional)
{
	if (window["var_" + i] == null)
	{
		if (forceOptional)
		{
			return "none";
		}
		else
		{
			return 0;
		}
	}
	var aStatedRank = window["var_" + i];
	if (isNaN(aStatedRank))
	{
		return aStatedRank;
	}
	else
	{
		return parseInt(aStatedRank);
	}
};
