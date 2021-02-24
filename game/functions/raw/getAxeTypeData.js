/**
 * getAxeTypeData extracted from ../../deobfuscated/bundle.js at line 20302-20331
 *
 * If this file doesn't contain a function, there is an error in ../raw/getAxeTypeData.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function getAxeTypeData()
{
	var _0x1613D = "";
	_0x1613D = "axe";
	if (getItem(_0x1613D) == 1)
	{
		return [_0x1613D, "none", "sapphire", "0"]
	};
	_0x1613D = "sapphireAxe";
	if (getItem(_0x1613D) == 1)
	{
		return [_0x1613D, "sapphire", "emerald", "5"]
	};
	_0x1613D = "emeraldAxe";
	if (getItem(_0x1613D) == 1)
	{
		return [_0x1613D, "emerald", "ruby", "10"]
	};
	_0x1613D = "rubyAxe";
	if (getItem(_0x1613D) == 1)
	{
		return [_0x1613D, "ruby", "diamond", "15"]
	};
	_0x1613D = "diamondAxe";
	if (getItem(_0x1613D) == 1)
	{
		return [_0x1613D, "diamond", "none", "20"]
	};
	return ["none", "none", "none", 0]
}