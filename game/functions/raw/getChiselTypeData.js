/**
 * getChiselTypeData extracted from ../../deobfuscated/bundle.js at line 20182-20210
 *
 * If this file doesn't contain a function, there is an error in ../raw/getChiselTypeData.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function getChiselTypeData()
{
	var _0x1613D = "";
	_0x1613D = "chisel";
	if (getItem(_0x1613D) == 1)
	{
		return [_0x1613D, "none", "sapphire", 0.5]
	};
	_0x1613D = "sapphireChisel";
	if (getItem(_0x1613D) == 1)
	{
		return [_0x1613D, "sapphire", "emerald", 0.4]
	};
	_0x1613D = "emeraldChisel";
	if (getItem(_0x1613D) == 1)
	{
		return [_0x1613D, "emerald", "ruby", 0.3]
	};
	_0x1613D = "rubyChisel";
	if (getItem(_0x1613D) == 1)
	{
		return [_0x1613D, "ruby", "diamond", 0.2]
	};
	_0x1613D = "diamondChisel";
	if (getItem(_0x1613D) == 1)
	{
		return [_0x1613D, "diamond", "none", 0.0]
	}
}