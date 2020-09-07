/**
 * getBonemealTypeData extracted from ../../deobfuscated/bundle.js at line 16355-16384
 *
 * If this file doesn't contain a function, there is an error in ../raw/getBonemealTypeData.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function getBonemealTypeData()
{
	var _0x473F = "";
	_0x473F = "bonemealBin";
	if (getItem(_0x473F) == 1)
	{
		return [_0x473F, "none", "sapphire", "5"]
	};
	_0x473F = "sapphireBonemealBin";
	if (getItem(_0x473F) == 1)
	{
		return [_0x473F, "sapphire", "emerald", "20"]
	};
	_0x473F = "emeraldBonemealBin";
	if (getItem(_0x473F) == 1)
	{
		return [_0x473F, "emerald", "ruby", "50"]
	};
	_0x473F = "rubyBonemealBin";
	if (getItem(_0x473F) == 1)
	{
		return [_0x473F, "ruby", "diamond", "100"]
	};
	_0x473F = "diamondBonemealBin";
	if (getItem(_0x473F) == 1)
	{
		return [_0x473F, "diamond", "none", "INF"]
	};
	return "none"
}