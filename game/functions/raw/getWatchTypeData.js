/**
 * getWatchTypeData extracted from ../../deobfuscated/bundle.js at line 20122-20150
 *
 * If this file doesn't contain a function, there is an error in ../raw/getWatchTypeData.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function getWatchTypeData()
{
	var _0x1613D = "";
	_0x1613D = "watch";
	if (getItem(_0x1613D) == 1)
	{
		return [_0x1613D, "none", "sapphire", "3"]
	};
	_0x1613D = "sapphireWatch";
	if (getItem(_0x1613D) == 1)
	{
		return [_0x1613D, "sapphire", "emerald", "6"]
	};
	_0x1613D = "emeraldWatch";
	if (getItem(_0x1613D) == 1)
	{
		return [_0x1613D, "emerald", "ruby", "10"]
	};
	_0x1613D = "rubyWatch";
	if (getItem(_0x1613D) == 1)
	{
		return [_0x1613D, "ruby", "diamond", "14"]
	};
	_0x1613D = "diamondWatch";
	if (getItem(_0x1613D) == 1)
	{
		return [_0x1613D, "diamond", "none", "20"]
	}
}