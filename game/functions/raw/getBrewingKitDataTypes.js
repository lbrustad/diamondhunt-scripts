/**
 * getBrewingKitDataTypes extracted from ../../deobfuscated/bundle.js at line 13024-13059
 *
 * If this file doesn't contain a function, there is an error in ../raw/getBrewingKitDataTypes.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function getBrewingKitDataTypes()
{
	var _0x1D366 = ["none", "none", "none", 0];
	var _0x1CEEA = "";
	_0x1CEEA = "brewingKit";
	if (getItem(_0x1CEEA) == 1)
	{
		_0x1D366 = ["brewingKit", "none", "sapphire", "0%"];
		return _0x1D366
	};
	_0x1CEEA = "sapphireBrewingKit";
	if (getItem(_0x1CEEA) == 1)
	{
		_0x1D366 = ["sapphireBrewingKit", "sapphire", "emerald", "15%"];
		return _0x1D366
	};
	_0x1CEEA = "emeraldBrewingKit";
	if (getItem(_0x1CEEA) == 1)
	{
		_0x1D366 = ["emeraldBrewingKit", "emerald", "ruby", "30%"];
		return _0x1D366
	};
	_0x1CEEA = "rubyBrewingKit";
	if (getItem(_0x1CEEA) == 1)
	{
		_0x1D366 = ["rubyBrewingKit", "ruby", "diamond", "60%"];
		return _0x1D366
	};
	_0x1CEEA = "diamondBrewingKit";
	if (getItem(_0x1CEEA) == 1)
	{
		_0x1D366 = ["diamondBrewingKit", "diamond", "none", "100%"];
		return _0x1D366
	};
	return _0x1D366
}