/**
 * getChainsawTypeData extracted from ../../deobfuscated/bundle.js at line 20333-20362
 *
 * If this file doesn't contain a function, there is an error in ../raw/getChainsawTypeData.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function getChainsawTypeData()
{
	var _0x1613D = "";
	_0x1613D = "chainsaw";
	if (getItem(_0x1613D) == 1)
	{
		return [_0x1613D, "none", "sapphire", "5"]
	};
	_0x1613D = "sapphireChainsaw";
	if (getItem(_0x1613D) == 1)
	{
		return [_0x1613D, "sapphire", "emerald", "10"]
	};
	_0x1613D = "emeraldChainsaw";
	if (getItem(_0x1613D) == 1)
	{
		return [_0x1613D, "emerald", "ruby", "15"]
	};
	_0x1613D = "rubyChainsaw";
	if (getItem(_0x1613D) == 1)
	{
		return [_0x1613D, "ruby", "diamond", "20"]
	};
	_0x1613D = "diamondChainsaw";
	if (getItem(_0x1613D) == 1)
	{
		return [_0x1613D, "diamond", "none", "25"]
	};
	return ["none", "none", "none", 0]
}