/**
 * getBestFurnace extracted from ../../deobfuscated/bundle.js at line 4555-4584
 *
 * If this file doesn't contain a function, there is an error in ../raw/getBestFurnace.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function getBestFurnace()
{
	var _0x1CEEA = "";
	_0x1CEEA = "stoneFurnace";
	if (getItem(_0x1CEEA) == 1)
	{
		return _0x1CEEA
	};
	_0x1CEEA = "bronzeFurnace";
	if (getItem(_0x1CEEA) == 1)
	{
		return _0x1CEEA
	};
	_0x1CEEA = "ironFurnace";
	if (getItem(_0x1CEEA) == 1)
	{
		return _0x1CEEA
	};
	_0x1CEEA = "silverFurnace";
	if (getItem(_0x1CEEA) == 1)
	{
		return _0x1CEEA
	};
	_0x1CEEA = "goldFurnace";
	if (getItem(_0x1CEEA) == 1)
	{
		return _0x1CEEA
	};
	return "none"
}