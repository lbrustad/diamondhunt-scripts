'use strict';

function getOilCost(canCreateDiscussions)
{
	switch (canCreateDiscussions)
	{
	case "drills":
	case "copper":
	case "sand":
		return 1;
	case "crushers":
		return 3;
	case "iron":
		return 5;
	case "giantDrills":
		return 10;
	case "excavators":
		return 30;
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
