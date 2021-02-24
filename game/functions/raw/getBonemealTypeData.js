/**
 * getBonemealTypeData extracted from ../../deobfuscated/bundle.js at line 20061-20090
 *
 * If this file doesn't contain a function, there is an error in ../raw/getBonemealTypeData.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function getBonemealTypeData()
{
	var _0x1613D = "";
	_0x1613D = "bonemealBin";
	if (getItem(_0x1613D) == 1)
	{
		return [_0x1613D, "none", "sapphire", "5"]
	};
	_0x1613D = "sapphireBonemealBin";
	if (getItem(_0x1613D) == 1)
	{
		return [_0x1613D, "sapphire", "emerald", "20"]
	};
	_0x1613D = "emeraldBonemealBin";
	if (getItem(_0x1613D) == 1)
	{
		return [_0x1613D, "emerald", "ruby", "50"]
	};
	_0x1613D = "rubyBonemealBin";
	if (getItem(_0x1613D) == 1)
	{
		return [_0x1613D, "ruby", "diamond", "100"]
	};
	_0x1613D = "diamondBonemealBin";
	if (getItem(_0x1613D) == 1)
	{
		return [_0x1613D, "diamond", "none", "INF"]
	};
	return "none"
}