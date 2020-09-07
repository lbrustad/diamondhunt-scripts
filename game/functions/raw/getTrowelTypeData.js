/**
 * getTrowelTypeData extracted from ../../deobfuscated/bundle.js at line 16628-16657
 *
 * If this file doesn't contain a function, there is an error in ../raw/getTrowelTypeData.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function getTrowelTypeData()
{
	var _0x473F = "";
	_0x473F = "trowel";
	if (getItem(_0x473F) == 1)
	{
		return [_0x473F, "none", "sapphire", "5"]
	};
	_0x473F = "sapphireTrowel";
	if (getItem(_0x473F) == 1)
	{
		return [_0x473F, "sapphire", "emerald", "10"]
	};
	_0x473F = "emeraldTrowel";
	if (getItem(_0x473F) == 1)
	{
		return [_0x473F, "emerald", "ruby", "15"]
	};
	_0x473F = "rubyTrowel";
	if (getItem(_0x473F) == 1)
	{
		return [_0x473F, "ruby", "diamond", "20"]
	};
	_0x473F = "diamondTrowel";
	if (getItem(_0x473F) == 1)
	{
		return [_0x473F, "diamond", "none", "25"]
	};
	return ["none", "none", "none", 0]
}