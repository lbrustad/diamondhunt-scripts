'use strict';

function getItemName(fullPath)
{
	if (fullPath == "stardust1000")
	{
		return "Stardust x 1000";
	}
	var replacedStr = fullPath.charAt(0).toUpperCase();
	var startIndex = 1;
	for (; startIndex < fullPath.length; startIndex++)
	{
		if (fullPath.charAt(startIndex) == fullPath.charAt(startIndex).toUpperCase() && fullPath.charAt(startIndex) != "'")
		{
			replacedStr = replacedStr + " ";
		}
		replacedStr = replacedStr + fullPath.charAt(startIndex);
	}
	return replacedStr;
};
