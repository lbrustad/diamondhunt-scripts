/**
 * getGlobalLevel extracted from ../../deobfuscated/bundle.js at line 10240-10290
 *
 * If this file doesn't contain a function, there is an error in ../raw/getGlobalLevel.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function getGlobalLevel()
{
	var _0x46AE = 0;
	var _0x473F = "";
	_0x473F = "combat";
	if (getItem(_0x473F + "Unlocked") == 1)
	{
		_0x46AE += getLevel(getItem(_0x473F + "Xp"))
	};
	_0x473F = "magic";
	if (getItem(_0x473F + "Unlocked") == 1)
	{
		_0x46AE += getLevel(getItem(_0x473F + "Xp"))
	};
	_0x473F = "crafting";
	if (getItem(_0x473F + "Unlocked") == 1)
	{
		_0x46AE += getLevel(getItem(_0x473F + "Xp"))
	};
	_0x473F = "brewing";
	if (getItem(_0x473F + "Unlocked") == 1)
	{
		_0x46AE += getLevel(getItem(_0x473F + "Xp"))
	};
	_0x473F = "woodcutting";
	if (getItem(_0x473F + "Unlocked") == 1)
	{
		_0x46AE += getLevel(getItem(_0x473F + "Xp"))
	};
	_0x473F = "cooking";
	if (getItem(_0x473F + "Unlocked") == 1)
	{
		_0x46AE += getLevel(getItem(_0x473F + "Xp"))
	};
	_0x473F = "farming";
	if (getItem(_0x473F + "Unlocked") == 1)
	{
		_0x46AE += getLevel(getItem(_0x473F + "Xp"))
	};
	_0x473F = "fishing";
	if (getItem(_0x473F + "Unlocked") == 1)
	{
		_0x46AE += getLevel(getItem(_0x473F + "Xp"))
	};
	_0x473F = "mining";
	if (getItem(_0x473F + "Unlocked") == 1)
	{
		_0x46AE += getLevel(getItem(_0x473F + "Xp"))
	};
	return _0x46AE
}