/**
 * getPickaxeTypeData extracted from ../../deobfuscated/bundle.js at line 16386-16414
 *
 * If this file doesn't contain a function, there is an error in ../raw/getPickaxeTypeData.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function getPickaxeTypeData()
{
	var _0x473F = "";
	_0x473F = "stardustPickaxe";
	if (getItem(_0x473F) == 1)
	{
		return [_0x473F, "none", "sapphire", "17"]
	};
	_0x473F = "sapphireStardustPickaxe";
	if (getItem(_0x473F) == 1)
	{
		return [_0x473F, "sapphire", "emerald", "16"]
	};
	_0x473F = "emeraldStardustPickaxe";
	if (getItem(_0x473F) == 1)
	{
		return [_0x473F, "emerald", "ruby", "15"]
	};
	_0x473F = "rubyStardustPickaxe";
	if (getItem(_0x473F) == 1)
	{
		return [_0x473F, "ruby", "diamond", "14"]
	};
	_0x473F = "diamondStardustPickaxe";
	if (getItem(_0x473F) == 1)
	{
		return [_0x473F, "diamond", "none", "12"]
	}
}