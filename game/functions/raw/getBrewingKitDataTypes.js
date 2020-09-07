/**
 * getBrewingKitDataTypes extracted from ../../deobfuscated/bundle.js at line 18004-18039
 *
 * If this file doesn't contain a function, there is an error in ../raw/getBrewingKitDataTypes.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function getBrewingKitDataTypes()
{
	var _0x5276 = ["none", "none", "none", 0];
	var _0x473F = "";
	_0x473F = "brewingKit";
	if (getItem(_0x473F) == 1)
	{
		_0x5276 = ["brewingKit", "none", "sapphire", "0%"];
		return _0x5276
	};
	_0x473F = "sapphireBrewingKit";
	if (getItem(_0x473F) == 1)
	{
		_0x5276 = ["sapphireBrewingKit", "sapphire", "emerald", "15%"];
		return _0x5276
	};
	_0x473F = "emeraldBrewingKit";
	if (getItem(_0x473F) == 1)
	{
		_0x5276 = ["emeraldBrewingKit", "emerald", "ruby", "30%"];
		return _0x5276
	};
	_0x473F = "rubyBrewingKit";
	if (getItem(_0x473F) == 1)
	{
		_0x5276 = ["rubyBrewingKit", "ruby", "diamond", "60%"];
		return _0x5276
	};
	_0x473F = "diamondBrewingKit";
	if (getItem(_0x473F) == 1)
	{
		_0x5276 = ["diamondBrewingKit", "diamond", "none", "100%"];
		return _0x5276
	};
	return _0x5276
}