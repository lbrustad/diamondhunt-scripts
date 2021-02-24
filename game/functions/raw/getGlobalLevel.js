/**
 * getGlobalLevel extracted from ../../deobfuscated/bundle.js at line 12417-12467
 *
 * If this file doesn't contain a function, there is an error in ../raw/getGlobalLevel.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function getGlobalLevel()
{
	var _0x1606B = 0;
	var _0x1613D = "";
	_0x1613D = "combat";
	if (getItem(_0x1613D + "Unlocked") == 1)
	{
		_0x1606B += getLevel(getItem(_0x1613D + "Xp"))
	};
	_0x1613D = "magic";
	if (getItem(_0x1613D + "Unlocked") == 1)
	{
		_0x1606B += getLevel(getItem(_0x1613D + "Xp"))
	};
	_0x1613D = "crafting";
	if (getItem(_0x1613D + "Unlocked") == 1)
	{
		_0x1606B += getLevel(getItem(_0x1613D + "Xp"))
	};
	_0x1613D = "brewing";
	if (getItem(_0x1613D + "Unlocked") == 1)
	{
		_0x1606B += getLevel(getItem(_0x1613D + "Xp"))
	};
	_0x1613D = "woodcutting";
	if (getItem(_0x1613D + "Unlocked") == 1)
	{
		_0x1606B += getLevel(getItem(_0x1613D + "Xp"))
	};
	_0x1613D = "cooking";
	if (getItem(_0x1613D + "Unlocked") == 1)
	{
		_0x1606B += getLevel(getItem(_0x1613D + "Xp"))
	};
	_0x1613D = "farming";
	if (getItem(_0x1613D + "Unlocked") == 1)
	{
		_0x1606B += getLevel(getItem(_0x1613D + "Xp"))
	};
	_0x1613D = "fishing";
	if (getItem(_0x1613D + "Unlocked") == 1)
	{
		_0x1606B += getLevel(getItem(_0x1613D + "Xp"))
	};
	_0x1613D = "mining";
	if (getItem(_0x1613D + "Unlocked") == 1)
	{
		_0x1606B += getLevel(getItem(_0x1613D + "Xp"))
	};
	return _0x1606B
}