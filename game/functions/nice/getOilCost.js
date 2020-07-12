'use strict';

function getOilCost(canCreateDiscussions)
{
	switch (canCreateDiscussions)
	{
	case "drills":
	case "copper":
	case "sand":
		return 1;
	case "iron":
	case "crushers":
		return 5;
	case "silver":
		return 20;
	case "gold":
		return 100;
	case "promethium":
		return 1000;
	default:
		return 0;
	}
};
