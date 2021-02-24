/**
 * getTrowelTypeData extracted from ../../deobfuscated/bundle.js at line 20364-20393
 *
 * If this file doesn't contain a function, there is an error in ../raw/getTrowelTypeData.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function getTrowelTypeData()
{
	var _0x1613D = "";
	_0x1613D = "trowel";
	if (getItem(_0x1613D) == 1)
	{
		return [_0x1613D, "none", "sapphire", "5"]
	};
	_0x1613D = "sapphireTrowel";
	if (getItem(_0x1613D) == 1)
	{
		return [_0x1613D, "sapphire", "emerald", "10"]
	};
	_0x1613D = "emeraldTrowel";
	if (getItem(_0x1613D) == 1)
	{
		return [_0x1613D, "emerald", "ruby", "15"]
	};
	_0x1613D = "rubyTrowel";
	if (getItem(_0x1613D) == 1)
	{
		return [_0x1613D, "ruby", "diamond", "20"]
	};
	_0x1613D = "diamondTrowel";
	if (getItem(_0x1613D) == 1)
	{
		return [_0x1613D, "diamond", "none", "25"]
	};
	return ["none", "none", "none", 0]
}