/**
 * getGlobalLevel extracted from ../../deobfuscated/bundle.js at line 7852-0
 *
 * If this file doesn't contain a function, there is an error in ../raw/getGlobalLevel.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function getGlobalLevel()
{
	var _0x1CEB2 = 0;
	var _0x1CEEA = "";
	_0x1CEEA = "combat";
	if (getItem(_0x1CEEA + "Unlocked") == 1)
	{
		_0x1CEB2 += getLevel(getItem(_0x1CEEA + "Xp"))
	};
	_0x1CEEA = "magic";
	if (getItem(_0x1CEEA + "Unlocked") == 1)
	{
		_0x1CEB2 += getLevel(getItem(_0x1CEEA + "Xp"))
	};
	_0x1CEEA = "crafting";
	if (getItem(_0x1CEEA + "Unlocked") == 1)
	{
		_0x1CEB2 += getLevel(getItem(_0x1CEEA + "Xp"))
	};
	_0x1CEEA = "brewing";
	if (getItem(_0x1CEEA + "Unlocked") == 1)
	{
		_0x1CEB2 += getLevel(getItem(_0x1CEEA + "Xp"))
	};
	_0x1CEEA = "woodcutting";
	if (getItem(_0x1CEEA + "Unlocked") == 1)
	{
		_0x1CEB2 += getLevel(getItem(_0x1CEEA + "Xp"))
	};
	_0x1CEEA = "cooking";
	if (getItem(_0x1CEEA + "Unlocked") == 1)
	{
		_0x1CEB2 += getLevel(getItem(_0x1CEEA + "Xp"))
	};
	_0x1CEEA = "farming";
	if (getItem(_0x1CEEA + "Unlocked") == 1)
	{
		_0x1CEB2 += getLevel(getItem(_0x1CEEA + "Xp"))
	};
	_0x1CEEA = "fishing";
	if (getItem(_0x1CEEA + "Unlocked") == 1)
	{
		_0x1CEB2 += getLevel(getItem(_0x1CEEA + "Xp"))
	};
	_0x1CEEA = "mining";
	if (getItem(_0x1CEEA + "Unlocked") == 1)
	{
		_0x1CEB2 += getLevel(getItem(_0x1CEEA + "Xp"))
	};
	return _0x1CEB2
}