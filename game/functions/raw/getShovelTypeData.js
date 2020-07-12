/**
 * getShovelTypeData extracted from ../../deobfuscated/bundle.js at line 11885-0
 *
 * If this file doesn't contain a function, there is an error in ../raw/getShovelTypeData.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function getShovelTypeData()
{
	var _0x1CEEA = "";
	_0x1CEEA = "shovel";
	if (getItem(_0x1CEEA) == 1)
	{
		return [_0x1CEEA, "none", "sapphire", "4000"]
	};
	_0x1CEEA = "sapphireShovel";
	if (getItem(_0x1CEEA) == 1)
	{
		return [_0x1CEEA, "sapphire", "emerald", "3500"]
	};
	_0x1CEEA = "emeraldShovel";
	if (getItem(_0x1CEEA) == 1)
	{
		return [_0x1CEEA, "emerald", "ruby", "3000"]
	};
	_0x1CEEA = "rubyShovel";
	if (getItem(_0x1CEEA) == 1)
	{
		return [_0x1CEEA, "ruby", "diamond", "2500"]
	};
	_0x1CEEA = "diamondShovel";
	if (getItem(_0x1CEEA) == 1)
	{
		return [_0x1CEEA, "diamond", "none", "2000"]
	}
}