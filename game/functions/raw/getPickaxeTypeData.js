/**
 * getPickaxeTypeData extracted from ../../deobfuscated/bundle.js at line 11855-0
 *
 * If this file doesn't contain a function, there is an error in ../raw/getPickaxeTypeData.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function getPickaxeTypeData()
{
	var _0x1CEEA = "";
	_0x1CEEA = "stardustPickaxe";
	if (getItem(_0x1CEEA) == 1)
	{
		return [_0x1CEEA, "none", "sapphire", "17"]
	};
	_0x1CEEA = "sapphireStardustPickaxe";
	if (getItem(_0x1CEEA) == 1)
	{
		return [_0x1CEEA, "sapphire", "emerald", "16"]
	};
	_0x1CEEA = "emeraldStardustPickaxe";
	if (getItem(_0x1CEEA) == 1)
	{
		return [_0x1CEEA, "emerald", "ruby", "15"]
	};
	_0x1CEEA = "rubyStardustPickaxe";
	if (getItem(_0x1CEEA) == 1)
	{
		return [_0x1CEEA, "ruby", "diamond", "14"]
	};
	_0x1CEEA = "diamondStardustPickaxe";
	if (getItem(_0x1CEEA) == 1)
	{
		return [_0x1CEEA, "diamond", "none", "12"]
	}
}