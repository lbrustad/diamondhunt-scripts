/**
 * getChiselTypeData extracted from ../../deobfuscated/bundle.js at line 16446-16474
 *
 * If this file doesn't contain a function, there is an error in ../raw/getChiselTypeData.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function getChiselTypeData()
{
	var _0x473F = "";
	_0x473F = "chisel";
	if (getItem(_0x473F) == 1)
	{
		return [_0x473F, "none", "sapphire", 0.5]
	};
	_0x473F = "sapphireChisel";
	if (getItem(_0x473F) == 1)
	{
		return [_0x473F, "sapphire", "emerald", 0.4]
	};
	_0x473F = "emeraldChisel";
	if (getItem(_0x473F) == 1)
	{
		return [_0x473F, "emerald", "ruby", 0.3]
	};
	_0x473F = "rubyChisel";
	if (getItem(_0x473F) == 1)
	{
		return [_0x473F, "ruby", "diamond", 0.2]
	};
	_0x473F = "diamondChisel";
	if (getItem(_0x473F) == 1)
	{
		return [_0x473F, "diamond", "none", 0.0]
	}
}