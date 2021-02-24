/**
 * getPickaxeTypeData extracted from ../../deobfuscated/bundle.js at line 20092-20120
 *
 * If this file doesn't contain a function, there is an error in ../raw/getPickaxeTypeData.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function getPickaxeTypeData()
{
	var _0x1613D = "";
	_0x1613D = "stardustPickaxe";
	if (getItem(_0x1613D) == 1)
	{
		return [_0x1613D, "none", "sapphire", "17"]
	};
	_0x1613D = "sapphireStardustPickaxe";
	if (getItem(_0x1613D) == 1)
	{
		return [_0x1613D, "sapphire", "emerald", "16"]
	};
	_0x1613D = "emeraldStardustPickaxe";
	if (getItem(_0x1613D) == 1)
	{
		return [_0x1613D, "emerald", "ruby", "15"]
	};
	_0x1613D = "rubyStardustPickaxe";
	if (getItem(_0x1613D) == 1)
	{
		return [_0x1613D, "ruby", "diamond", "14"]
	};
	_0x1613D = "diamondStardustPickaxe";
	if (getItem(_0x1613D) == 1)
	{
		return [_0x1613D, "diamond", "none", "12"]
	}
}