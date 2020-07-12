'use strict';

function switchCraftingType(canCreateDiscussions)
{
	if (global_craftingType == canCreateDiscussions)
	{
		global_craftingType = "default";
	}
	else
	{
		global_craftingType = canCreateDiscussions;
	}
};
