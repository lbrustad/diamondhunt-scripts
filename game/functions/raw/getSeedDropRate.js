/**
 * getSeedDropRate extracted from ../../deobfuscated/bundle.js at line 8953-8998
 *
 * If this file doesn't contain a function, there is an error in ../raw/getSeedDropRate.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function getSeedDropRate(_0x174CA)
{
	var _0x14EA5 = 0;
	switch (_0x174CA)
	{
	case "dottedGreenLeafSeeds":
		_0x14EA5 = 14400;
		break;
	case "greenLeafSeeds":
		_0x14EA5 = 14400 * 2;
		break;
	case "limeLeafSeeds":
		_0x14EA5 = 60000;
		break;
	case "goldLeafSeeds":
		_0x14EA5 = 150000;
		break;
	case "crystalLeafSeeds":
		_0x14EA5 = 500000;
		break;
	case "stripedGoldLeafSeeds":
		_0x14EA5 = 1000000;
		break;
	case "stripedCrystalLeafSeeds":
		_0x14EA5 = 3000000;
		break;
	case "redMushroomSeeds":
		_0x14EA5 = 3600;
		break;
	case "blewitMushroomSeeds":
		_0x14EA5 = 36000;
		break;
	case "stardustSeeds":
		_0x14EA5 = 28800;
		break;
	default:
		_0x14EA5 = 0;
		break
	};
	if (getTrowelTypeData()[3] == 0)
	{
		return _0x14EA5
	};
	var _0x174A7 = getTrowelTypeData()[3] / 100;
	return parseInt(_0x14EA5 * (1 - _0x174A7))
}