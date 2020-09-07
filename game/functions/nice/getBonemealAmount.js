'use strict';

function getBonemealAmount(canCreateDiscussions)
{
	switch (canCreateDiscussions)
	{
	case "bones":
		return 1;
	case "ashes":
		return 2;
	case "iceBones":
		return 3;
	default:
		return 0;
	}
};
