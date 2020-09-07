/**
 * getSeedDropRate extracted from ../../deobfuscated/bundle.js at line 7529-7556
 *
 * If this file doesn't contain a function, there is an error in ../raw/getSeedDropRate.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function getSeedDropRate(_0x5633)
{
	switch (_0x5633)
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
	case "blewitMushroomSeeds":
		return 36000;
	case "stardustSeeds":
		return 28800;
	default:
		return 0
	}
}