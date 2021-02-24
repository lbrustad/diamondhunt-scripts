/**
 * getShovelTypeData extracted from ../../deobfuscated/bundle.js at line 20152-20180
 *
 * If this file doesn't contain a function, there is an error in ../raw/getShovelTypeData.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function getShovelTypeData()
{
	var _0x1613D = "";
	_0x1613D = "shovel";
	if (getItem(_0x1613D) == 1)
	{
		return [_0x1613D, "none", "sapphire", "4000"]
	};
	_0x1613D = "sapphireShovel";
	if (getItem(_0x1613D) == 1)
	{
		return [_0x1613D, "sapphire", "emerald", "3500"]
	};
	_0x1613D = "emeraldShovel";
	if (getItem(_0x1613D) == 1)
	{
		return [_0x1613D, "emerald", "ruby", "3000"]
	};
	_0x1613D = "rubyShovel";
	if (getItem(_0x1613D) == 1)
	{
		return [_0x1613D, "ruby", "diamond", "2500"]
	};
	_0x1613D = "diamondShovel";
	if (getItem(_0x1613D) == 1)
	{
		return [_0x1613D, "diamond", "none", "2000"]
	}
}