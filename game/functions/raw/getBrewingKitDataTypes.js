/**
 * getBrewingKitDataTypes extracted from ../../deobfuscated/bundle.js at line 21831-21866
 *
 * If this file doesn't contain a function, there is an error in ../raw/getBrewingKitDataTypes.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function getBrewingKitDataTypes()
{
	var _0x16278 = ["none", "none", "none", 0];
	var _0x1613D = "";
	_0x1613D = "brewingKit";
	if (getItem(_0x1613D) == 1)
	{
		_0x16278 = ["brewingKit", "none", "sapphire", "0%"];
		return _0x16278
	};
	_0x1613D = "sapphireBrewingKit";
	if (getItem(_0x1613D) == 1)
	{
		_0x16278 = ["sapphireBrewingKit", "sapphire", "emerald", "15%"];
		return _0x16278
	};
	_0x1613D = "emeraldBrewingKit";
	if (getItem(_0x1613D) == 1)
	{
		_0x16278 = ["emeraldBrewingKit", "emerald", "ruby", "30%"];
		return _0x16278
	};
	_0x1613D = "rubyBrewingKit";
	if (getItem(_0x1613D) == 1)
	{
		_0x16278 = ["rubyBrewingKit", "ruby", "diamond", "60%"];
		return _0x16278
	};
	_0x1613D = "diamondBrewingKit";
	if (getItem(_0x1613D) == 1)
	{
		_0x16278 = ["diamondBrewingKit", "diamond", "none", "100%"];
		return _0x16278
	};
	return _0x16278
}