/**
 * getAxeTypeData extracted from ../../deobfuscated/bundle.js at line 16566-16595
 *
 * If this file doesn't contain a function, there is an error in ../raw/getAxeTypeData.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function getAxeTypeData()
{
	var _0x473F = "";
	_0x473F = "axe";
	if (getItem(_0x473F) == 1)
	{
		return [_0x473F, "none", "sapphire", "0"]
	};
	_0x473F = "sapphireAxe";
	if (getItem(_0x473F) == 1)
	{
		return [_0x473F, "sapphire", "emerald", "5"]
	};
	_0x473F = "emeraldAxe";
	if (getItem(_0x473F) == 1)
	{
		return [_0x473F, "emerald", "ruby", "10"]
	};
	_0x473F = "rubyAxe";
	if (getItem(_0x473F) == 1)
	{
		return [_0x473F, "ruby", "diamond", "15"]
	};
	_0x473F = "diamondAxe";
	if (getItem(_0x473F) == 1)
	{
		return [_0x473F, "diamond", "none", "20"]
	};
	return ["none", "none", "none", 0]
}