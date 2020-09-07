'use strict';

function getOilPerSecondForAItem(canCreateDiscussions)
{
	switch (canCreateDiscussions)
	{
	case "bronzeOilWell":
		return 1;
	case "ironOilWell":
		return 5;
	case "silverOilWell":
		return 10;
	case "goldOilWell":
		return 20;
	case "promethiumOilWell":
		return 35;
	default:
		return 0;
	}
};
