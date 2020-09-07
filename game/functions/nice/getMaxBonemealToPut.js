'use strict';

function getMaxBonemealToPut(val)
{
	var height = parseInt(getBonemealTypeData()[3]);
	if (getItem("diamondBonemealBin") > 0)
	{
		return getItem(val);
	}
	if (height > 0)
	{
		height = height - getItem("bonemeal");
		var h = getBonemealAmount(val);
		var totalSize = parseInt(height / h);
		if (totalSize > getItem(val))
		{
			return getItem(val);
		}
		else
		{
			return totalSize;
		}
	}
	else
	{
		return 1;
	}
};
