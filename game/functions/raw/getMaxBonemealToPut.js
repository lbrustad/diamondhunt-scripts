/**
 * getMaxBonemealToPut extracted from ../../deobfuscated/bundle.js at line 20538-20563
 *
 * If this file doesn't contain a function, there is an error in ../raw/getMaxBonemealToPut.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function getMaxBonemealToPut(_0x16FBB)
{
	var _0x15A21 = parseInt(getBonemealTypeData()[3]);
	if (getItem("diamondBonemealBin") > 0)
	{
		return getItem(_0x16FBB)
	};
	if (_0x15A21 > 0)
	{
		_0x15A21 -= getItem("bonemeal");
		var _0x17254 = getBonemealAmount(_0x16FBB);
		var _0x164CB = parseInt(_0x15A21 / _0x17254);
		if (_0x164CB > getItem(_0x16FBB))
		{
			return getItem(_0x16FBB)
		}
		else
		{
			return _0x164CB
		}
	}
	else
	{
		return 1
	}
}