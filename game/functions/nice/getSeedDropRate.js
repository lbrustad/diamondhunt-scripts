'use strict';

function getSeedDropRate(canCreateDiscussions)
{
	var KFactor = 0;
	switch (canCreateDiscussions)
	{
	case "dottedGreenLeafSeeds":
		KFactor = 14400;
		break;
	case "greenLeafSeeds":
		KFactor = 14400 * 2;
		break;
	case "limeLeafSeeds":
		KFactor = 60000;
		break;
	case "goldLeafSeeds":
		KFactor = 150000;
		break;
	case "crystalLeafSeeds":
		KFactor = 500000;
		break;
	case "stripedGoldLeafSeeds":
		KFactor = 1000000;
		break;
	case "stripedCrystalLeafSeeds":
		KFactor = 3000000;
		break;
	case "redMushroomSeeds":
		KFactor = 3600;
		break;
	case "blewitMushroomSeeds":
		KFactor = 36000;
		break;
	case "stardustSeeds":
		KFactor = 28800;
		break;
	default:
		KFactor = 0;
		break;
	}
	if (getTrowelTypeData()[3] == 0)
	{
		return KFactor;
	}
	var BlueWe = getTrowelTypeData()[3] / 100;
	return parseInt(KFactor * (1 - BlueWe));
};
