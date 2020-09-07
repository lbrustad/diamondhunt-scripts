/**
 * getChainsawTypeData extracted from ../../deobfuscated/bundle.js at line 16597-16626
 *
 * If this file doesn't contain a function, there is an error in ../raw/getChainsawTypeData.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function getChainsawTypeData()
{
	var _0x473F = "";
	_0x473F = "chainsaw";
	if (getItem(_0x473F) == 1)
	{
		return [_0x473F, "none", "sapphire", "5"]
	};
	_0x473F = "sapphireChainsaw";
	if (getItem(_0x473F) == 1)
	{
		return [_0x473F, "sapphire", "emerald", "10"]
	};
	_0x473F = "emeraldChainsaw";
	if (getItem(_0x473F) == 1)
	{
		return [_0x473F, "emerald", "ruby", "15"]
	};
	_0x473F = "rubyChainsaw";
	if (getItem(_0x473F) == 1)
	{
		return [_0x473F, "ruby", "diamond", "20"]
	};
	_0x473F = "diamondChainsaw";
	if (getItem(_0x473F) == 1)
	{
		return [_0x473F, "diamond", "none", "25"]
	};
	return ["none", "none", "none", 0]
}