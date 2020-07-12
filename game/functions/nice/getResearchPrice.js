'use strict';

function getResearchPrice(canCreateDiscussions)
{
	switch (canCreateDiscussions)
	{
	case 0:
		return 100;
	case 1:
		return 1000;
	case 2:
		return 25000;
	case 3:
		return 200000;
	default:
		return -1;
	}
};
