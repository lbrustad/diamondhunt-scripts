/**
 * getMaxBonemealToPut extracted from ../../deobfuscated/bundle.js at line 16802-16827
 *
 * If this file doesn't contain a function, there is an error in ../raw/getMaxBonemealToPut.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function getMaxBonemealToPut(_0x5259)
{
	var _0x4195 = parseInt(getBonemealTypeData()[3]);
	if (getItem("diamondBonemealBin") > 0)
	{
		return getItem(_0x5259)
	};
	if (_0x4195 > 0)
	{
		_0x4195 -= getItem("bonemeal");
		var _0x5480 = getBonemealAmount(_0x5259);
		var _0x4949 = parseInt(_0x4195 / _0x5480);
		if (_0x4949 > getItem(_0x5259))
		{
			return getItem(_0x5259)
		}
		else
		{
			return _0x4949
		}
	}
	else
	{
		return 1
	}
}