/**
 * getShovelTypeData extracted from ../../deobfuscated/bundle.js at line 16416-16444
 *
 * If this file doesn't contain a function, there is an error in ../raw/getShovelTypeData.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function getShovelTypeData()
{
	var _0x473F = "";
	_0x473F = "shovel";
	if (getItem(_0x473F) == 1)
	{
		return [_0x473F, "none", "sapphire", "4000"]
	};
	_0x473F = "sapphireShovel";
	if (getItem(_0x473F) == 1)
	{
		return [_0x473F, "sapphire", "emerald", "3500"]
	};
	_0x473F = "emeraldShovel";
	if (getItem(_0x473F) == 1)
	{
		return [_0x473F, "emerald", "ruby", "3000"]
	};
	_0x473F = "rubyShovel";
	if (getItem(_0x473F) == 1)
	{
		return [_0x473F, "ruby", "diamond", "2500"]
	};
	_0x473F = "diamondShovel";
	if (getItem(_0x473F) == 1)
	{
		return [_0x473F, "diamond", "none", "2000"]
	}
}