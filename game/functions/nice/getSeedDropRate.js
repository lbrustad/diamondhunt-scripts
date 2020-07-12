'use strict';

function getSeedDropRate(canCreateDiscussions)
{
	switch (canCreateDiscussions)
	{
	case "dottedGreenLeafSeeds":
		return 14400;
	case "greenLeafSeeds":
		return 14400 * 2;
	case "limeLeafSeeds":
		return 60000;
	case "goldLeafSeeds":
		return 150000;
	case "crystalLeafSeeds":
		return 500000;
	case "stripedGoldLeafSeeds":
		return 1000000;
	case "stripedCrystalLeafSeeds":
		return 3000000;
	case "redMushroomSeeds":
		return 3600;
	case "stardustSeeds":
		return 28800;
	default:
		return 0;
	}
};
