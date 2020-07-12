/**
 * getAxeTypeData extracted from ../../deobfuscated/bundle.js at line 12005-0
 *
 * If this file doesn't contain a function, there is an error in ../raw/getAxeTypeData.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function getAxeTypeData()
{
	var _0x1CEEA = "";
	_0x1CEEA = "axe";
	if (getItem(_0x1CEEA) == 1)
	{
		return [_0x1CEEA, "none", "sapphire", "0"]
	};
	_0x1CEEA = "sapphireAxe";
	if (getItem(_0x1CEEA) == 1)
	{
		return [_0x1CEEA, "sapphire", "emerald", "5"]
	};
	_0x1CEEA = "emeraldAxe";
	if (getItem(_0x1CEEA) == 1)
	{
		return [_0x1CEEA, "emerald", "ruby", "10"]
	};
	_0x1CEEA = "rubyAxe";
	if (getItem(_0x1CEEA) == 1)
	{
		return [_0x1CEEA, "ruby", "diamond", "15"]
	};
	_0x1CEEA = "diamondAxe";
	if (getItem(_0x1CEEA) == 1)
	{
		return [_0x1CEEA, "diamond", "none", "20"]
	}
}