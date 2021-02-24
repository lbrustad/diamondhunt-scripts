/**
 * getHammerTypeData extracted from ../../deobfuscated/bundle.js at line 20395-20423
 *
 * If this file doesn't contain a function, there is an error in ../raw/getHammerTypeData.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function getHammerTypeData()
{
	var _0x1613D = "";
	_0x1613D = "stardustHammer";
	if (getItem(_0x1613D) == 1)
	{
		return [_0x1613D, "none", "sapphire", "17"]
	};
	_0x1613D = "sapphireStardustHammer";
	if (getItem(_0x1613D) == 1)
	{
		return [_0x1613D, "sapphire", "emerald", "16"]
	};
	_0x1613D = "emeraldStardustHammer";
	if (getItem(_0x1613D) == 1)
	{
		return [_0x1613D, "emerald", "ruby", "15"]
	};
	_0x1613D = "rubyStardustHammer";
	if (getItem(_0x1613D) == 1)
	{
		return [_0x1613D, "ruby", "diamond", "14"]
	};
	_0x1613D = "diamondStardustHammer";
	if (getItem(_0x1613D) == 1)
	{
		return [_0x1613D, "diamond", "none", "12"]
	}
}