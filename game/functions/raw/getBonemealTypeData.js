/**
 * getBonemealTypeData extracted from ../../deobfuscated/bundle.js at line 11824-0
 *
 * If this file doesn't contain a function, there is an error in ../raw/getBonemealTypeData.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function getBonemealTypeData()
{
	var _0x1CEEA = "";
	_0x1CEEA = "bonemealBin";
	if (getItem(_0x1CEEA) == 1)
	{
		return [_0x1CEEA, "none", "sapphire", "5"]
	};
	_0x1CEEA = "sapphireBonemealBin";
	if (getItem(_0x1CEEA) == 1)
	{
		return [_0x1CEEA, "sapphire", "emerald", "20"]
	};
	_0x1CEEA = "emeraldBonemealBin";
	if (getItem(_0x1CEEA) == 1)
	{
		return [_0x1CEEA, "emerald", "ruby", "50"]
	};
	_0x1CEEA = "rubyBonemealBin";
	if (getItem(_0x1CEEA) == 1)
	{
		return [_0x1CEEA, "ruby", "diamond", "100"]
	};
	_0x1CEEA = "diamondBonemealBin";
	if (getItem(_0x1CEEA) == 1)
	{
		return [_0x1CEEA, "diamond", "none", "INF"]
	};
	return "none"
}